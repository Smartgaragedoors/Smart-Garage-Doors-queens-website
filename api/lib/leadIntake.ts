import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export type LeadSource = 'thumbtack' | 'angi' | 'networx' | 'website';

export const PLATFORM_CONFIG: Record<LeadSource, { label: string; code: string; value: string }> = {
  thumbtack: { label: 'Thumbtack', code: 'TT',   value: 'thumbtack' },
  angi:      { label: 'Angies',    code: 'ANGI',  value: 'angies'   },
  networx:   { label: 'Networx',   code: 'NX',    value: 'networx'  },
  website:   { label: 'Website',   code: 'WEB',   value: 'website'  },
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
  const url = process.env.SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
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
      .eq('platform_value', platformVal)
      .eq('external_lead_id', lead.externalLeadId)
      .maybeSingle();
    if (existing) {
      return { jobId: (existing as { id: string }).id, isDuplicate: true };
    }
  }

  const { data, error } = await supabase
    .from('all_jobs')
    .insert({
      platform_id:      platformId,
      platform_value:   platformVal,
      external_lead_id: lead.externalLeadId,
      first_name:       lead.firstName,
      last_name:        lead.lastName,
      phone:            lead.phone,
      email:            lead.email,
      address:          lead.address,
      service_type:     lead.serviceType,
      message:          lead.message,
      campaign:         lead.campaign,
      source_url:       lead.sourceUrl,
      raw_payload:      lead.rawPayload,
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
