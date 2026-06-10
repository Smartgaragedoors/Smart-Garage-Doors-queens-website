import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export type LeadSource = 'thumbtack' | 'angi' | 'networx' | 'website' | 'website_bot';

export const PLATFORM_CONFIG: Record<LeadSource, { label: string; code: string; value: string }> = {
  thumbtack:   { label: 'Thumbtack',   code: 'TT',      value: 'thumbtack'   },
  angi:        { label: 'Angies',      code: 'ANGI',    value: 'angies'      },
  networx:     { label: 'Networx',     code: 'NX',      value: 'networx'     },
  website:     { label: 'Website',     code: 'WEB',     value: 'website'     },
  // Chat-widget leads file under the same "Website" CRM platform — the CRM's
  // lead_platforms table has no website_bot row, so a distinct value would
  // leave lead_platform_id null. The notification email still says "Website Bot".
  website_bot: { label: 'Website Bot', code: 'WEB_BOT', value: 'website'     },
};

export interface NormalizedLead {
  externalLeadId: string | null;
  firstName:  string;
  lastName:   string;
  phone:      string;
  email:      string | null;
  address:    string | null;
  serviceType: string | null;
  message:    string;
  campaign:   string | null;
  sourceUrl:  string | null;
  rawPayload: Record<string, unknown>;
}

// ── Supabase client ──────────────────────────────────────────────────────────

function getSupabase(): SupabaseClient {
  const url = process.env.CRM_SUPABASE_URL?.trim();
  const key = process.env.CRM_SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) throw new Error('Missing CRM_SUPABASE_URL or CRM_SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

// ── Lead parsers ─────────────────────────────────────────────────────────────

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function parseFlat(body: Record<string, unknown>): NormalizedLead {
  // customer_name (canonical) → full name split; fall back to first_name/last_name/name
  const customerName = str(body.customer_name);
  const fullName     = customerName || str(body.name);
  const firstName    = str(body.first_name) || str(body.firstName) || fullName.split(' ')[0] || '';
  const lastName     = str(body.last_name)  || str(body.lastName)  || fullName.split(' ').slice(1).join(' ') || '';

  // notes (canonical detail field) > description > message
  const message = str(body.notes) || str(body.message) || str(body.description) || 'Website Lead';

  return {
    externalLeadId: str(body.id) || str(body.lead_id) || null,
    firstName,
    lastName,
    phone:       str(body.phone) || str(body.phone_number),
    email:       str(body.email) || null,
    address:     str(body.address) || str(body.service_address) || null,
    serviceType: str(body.service) || str(body.service_type) || null,
    message,
    campaign:    str(body.campaign) || null,
    sourceUrl:   str(body.source_url) || str(body.page_url) || null,
    rawPayload:  body,
  };
}

export function normalizeLead(platform: LeadSource, body: Record<string, unknown>): NormalizedLead | null {
  try {
    return parseFlat(body);
  } catch (err) {
    console.error(`[leadIntake] normalizeLead failed for ${platform}:`, err);
    return null;
  }
}

// ── DB helpers ───────────────────────────────────────────────────────────────

async function resolvePlatformId(supabase: SupabaseClient, platform: LeadSource): Promise<string | null> {
  const { data, error } = await supabase
    .from('lead_platforms')
    .select('id')
    .eq('value', PLATFORM_CONFIG[platform].value)
    .maybeSingle();
  if (error) {
    console.error('[leadIntake] resolvePlatformId:', error.message);
    return null;
  }
  return (data as { id: string } | null)?.id ?? null;
}

// ── Notifications ─────────────────────────────────────────────────────────────

async function notifyAdmins(lead: NormalizedLead, platform: LeadSource, jobId: string): Promise<void> {
  const apiKey  = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.NOTIFICATION_EMAIL?.trim();
  if (!apiKey || !toEmail) {
    console.warn('[leadIntake] notifyAdmins: RESEND_API_KEY or NOTIFICATION_EMAIL not set');
    return;
  }

  const resend = new Resend(apiKey);
  const from   = process.env.FROM_EMAIL?.trim() || 'Smartest Garage Doors <onboarding@resend.dev>';
  const label  = PLATFORM_CONFIG[platform].label;
  const name   = [lead.firstName, lead.lastName].filter(Boolean).join(' ') || 'Unknown';

  await resend.emails.send({
    from,
    to: [toEmail],
    subject: `New ${label} Lead — ${name}`,
    text: [
      `Platform:  ${label}`,
      `Name:      ${name}`,
      `Phone:     ${lead.phone || 'N/A'}`,
      `Email:     ${lead.email || 'N/A'}`,
      `Address:   ${lead.address || 'N/A'}`,
      `Service:   ${lead.serviceType || 'N/A'}`,
      `Message:   ${lead.message}`,
      `Campaign:  ${lead.campaign || 'N/A'}`,
      `Job ID:    ${jobId}`,
      `Time:      ${new Date().toISOString()}`,
    ].join('\n'),
  });
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function insertLead(
  platform: LeadSource,
  lead: NormalizedLead
): Promise<{ jobId: string; isDuplicate: boolean }> {
  const supabase    = getSupabase();
  const platformId  = await resolvePlatformId(supabase, platform);
  const platformVal = PLATFORM_CONFIG[platform].value;

  // Dedup by external_lead_id within the same platform
  if (lead.externalLeadId) {
    const { data: existing } = await supabase
      .from('all_jobs')
      .select('id')
      .eq('external_lead_id', lead.externalLeadId)
      .maybeSingle();
    if (existing) {
      return { jobId: (existing as { id: string }).id, isDuplicate: true };
    }
  }

  const { data, error } = await supabase
    .from('all_jobs')
    .insert({
      lead_platform_id: platformId,
      external_lead_id: lead.externalLeadId,
      customer_name:    [lead.firstName, lead.lastName].filter(Boolean).join(' '),
      customer_phone:   lead.phone,
      customer_address: lead.address,
      notes:            lead.message,
      source_url:       lead.sourceUrl,
    })
    .select('id')
    .single();

  if (error || !data) {
    throw new Error(`DB insert failed: ${error?.message ?? 'no data returned'}`);
  }

  const jobId = (data as { id: string }).id;

  // Fire-and-forget downstream notifications
  notifyAdmins(lead, platform, jobId).catch(err =>
    console.error('[leadIntake] notifyAdmins error:', err)
  );

  return { jobId, isDuplicate: false };
}

// ── Chat transcript + AI summary ──────────────────────────────────────────────

export async function saveChatTranscript(params: {
  jobId:    string;
  phone:    string;
  name:     string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
}): Promise<void> {
  const supabase = getSupabase();
  const { jobId, phone, name, messages } = params;

  const lastMsg = messages[messages.length - 1];
  const preview = lastMsg ? lastMsg.content.slice(0, 100) : '';

  const { data: conv, error: convErr } = await supabase
    .from('customer_conversations')
    .insert({
      job_id:               jobId,
      customer_phone:       phone,
      customer_name:        name,
      status:               'open',
      unread_count:         messages.filter(m => m.role === 'user').length,
      last_message_at:      new Date().toISOString(),
      last_message_preview: preview,
    })
    .select('id')
    .single();

  if (convErr || !conv) {
    console.error('[leadIntake] saveChatTranscript: conversation insert failed:', convErr?.message);
    return;
  }

  const convId = (conv as { id: string }).id;

  const { error: msgErr } = await supabase
    .from('customer_messages')
    .insert(
      messages.map(msg => ({
        conversation_id: convId,
        job_id:          jobId,
        direction:       msg.role === 'user' ? 'inbound'  : 'outbound',
        sender_type:     msg.role === 'user' ? 'customer' : 'ai',
        body:            msg.content,
        phone:           msg.role === 'user' ? phone : null,
        sent_at:         new Date().toISOString(),
        message_status:  'delivered',
      }))
    );

  if (msgErr) console.error('[leadIntake] saveChatTranscript: messages insert failed:', msgErr.message);
}

export async function updateJobAiSummary(params: {
  jobId:            string;
  aiSummaryJson:    Record<string, unknown>;
  aiSuggestedReply: string;
}): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase
    .from('all_jobs')
    .update({ ai_summary_json: params.aiSummaryJson, ai_suggested_reply: params.aiSuggestedReply })
    .eq('id', params.jobId);

  if (error) console.error('[leadIntake] updateJobAiSummary failed:', error.message);
}
