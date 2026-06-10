import type { VercelRequest, VercelResponse } from '@vercel/node';
import { normalizeLead, insertLead, saveChatTranscript, updateJobAiSummary } from './lib/leadIntake.js';

// ── System prompt ─────────────────────────────────────────────────────────────

const OWNER_NAME = 'Dan';

const SYSTEM = `You are ${OWNER_NAME}, owner of Smartest Garage Doors. You've been fixing garage doors in NY, NJ, and CT for years. A homeowner just texted you for help.

VOICE:
- Text like a real person. Short, casual, confident. Never formal.
- One or two sentences max. This is texting, not email.
- Never use bullet points or numbered lists in replies.
- Never say "I understand your frustration", "Great question", "Certainly", "Of course", or anything that sounds like a call center script.
- If asked if you're a bot or AI, say you're ${OWNER_NAME} and move on.

SOUND LIKE A PRO:
- Actually diagnose based on what they describe. Use real contractor language.
- "That's your spring" not "It sounds like you may have a spring issue"
- "Cable snapped" not "There could be a cable problem"
- "Opener's gears are probably stripped" not "The opener might need attention"
- Natural reactions: "Oof yeah that'll do it", "Ah gotcha", "Yeah that's super common with older doors", "Easy fix honestly"

GARAGE DOOR KNOWLEDGE:
- Loud bang then stopped = broken torsion spring (most common)
- Door goes up crooked or one side droops = broken cable
- Opener runs but door doesn't move = stripped gears or broken spring
- Door reverses before closing = sensors blocked or misaligned
- Slow/struggling door = springs need adjustment or lubrication
- Remote stopped = try reprogramming, could be logic board
- Brands: LiftMaster, Chamberlain, Genie, Amarr, Clopay, Wayne Dalton

YOUR GOAL:
Collect these 4 things naturally through conversation: issue, name, phone, address (city is fine).
Don't ask for them all at once. Don't follow a rigid script. Chat naturally, figure out the problem first, then weave in the other questions one at a time.

Once you have all four, send a warm confirmation and say someone will reach out shortly.
Then on a NEW LINE add exactly this (never show it to the customer, no spaces):
__LEAD__{"name":"FULL_NAME","phone":"PHONE","address":"ADDRESS","issue":"ISSUE"}

Only output __LEAD__ once. Never output it twice.

FORMATTING: Never use markdown. No **bold**, no bullet points, no numbered lists. Plain text only.`;

// ── Types ─────────────────────────────────────────────────────────────────────

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AnthropicResponse {
  content?: Array<{ type: string; text: string }>;
  error?: { message: string };
}

// ── CORS ──────────────────────────────────────────────────────────────────────

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ── AI summary generation ─────────────────────────────────────────────────────

async function generateAndSaveAiSummary(
  apiKey: string,
  jobId:  string,
  messages: ChatMessage[],
  lead: { name: string; phone: string; address: string; issue: string },
): Promise<void> {
  const transcript = messages
    .map(m => `${m.role === 'user' ? 'Customer' : 'Bot'}: ${m.content}`)
    .join('\n');

  const prompt = `Analyze this garage door service chat and output ONLY valid JSON — no explanation, no markdown.

Customer: ${lead.name} | Phone: ${lead.phone} | Address: ${lead.address}
Issue: ${lead.issue}

Conversation:
${transcript}

Output this exact JSON shape:
{"issue":"one sentence","urgency":"high|medium|low","summary":"2-3 sentences","estimated_ticket":"$X-$X","lead_quality":"high|medium|low","next_best_action":"specific next step"}

Urgency: high=door stuck/safety/commercial, medium=intermittent/planning, low=quote only.
Lead quality: high=clear problem+address+needs service now, medium=qualified but not urgent, low=unclear.`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 300, messages: [{ role: 'user', content: prompt }] }),
  });

  if (!res.ok) { console.error('[chat] AI summary failed:', await res.text()); return; }

  const d = await res.json() as { content: Array<{ type: string; text: string }> };
  const text = d.content.find(b => b.type === 'text')?.text ?? '';

  let summaryJson: Record<string, unknown> = { issue: lead.issue };
  try { summaryJson = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? '{}') as Record<string, unknown>; } catch { /* use fallback */ }

  const firstName = lead.name.split(' ')[0] ?? lead.name;
  const issueLine = (summaryJson['issue'] as string | undefined ?? lead.issue).toLowerCase();
  const suggestedReply = `Hey ${firstName}, this is Dan from Smartest Garage Doors. Got your message about ${issueLine}. I can have someone out to you shortly — what time works best?`;

  await updateJobAiSummary({ jobId, aiSummaryJson: summaryJson, aiSuggestedReply: suggestedReply });
}

// ── Lead submission ───────────────────────────────────────────────────────────

async function submitChatLead(
  raw:      { name: string; phone: string; address: string; issue: string },
  messages: ChatMessage[],
  apiKey:   string,
): Promise<void> {
  try {
    const lead = normalizeLead('website_bot', {
      customer_name: raw.name,
      phone:         raw.phone,
      address:       raw.address,
      notes:         raw.issue,
      service:       'Chat Bot Lead',
      source_url:    'chat-widget',
    });
    if (!lead) return;

    const { jobId } = await insertLead('website_bot', lead);

    saveChatTranscript({ jobId, phone: raw.phone, name: raw.name, messages })
      .catch(err => console.error('[chat] saveChatTranscript error:', err));

    generateAndSaveAiSummary(apiKey, jobId, messages, raw)
      .catch(err => console.error('[chat] generateAndSaveAiSummary error:', err));

  } catch (err) {
    console.error('[chat] submitChatLead error:', err);
  }
}

// ── Handler ───────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) {
    console.error('[chat] ANTHROPIC_API_KEY not set');
    return res.status(503).json({ error: 'Chat not configured' });
  }

  const { messages } = req.body as { messages: ChatMessage[] };
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages required' });
  }

  const trimmed = messages.slice(-20);

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':         apiKey,
      'anthropic-version': '2023-06-01',
      'content-type':      'application/json',
    },
    body: JSON.stringify({
      // Sonnet 4.6: much smarter diagnosis + more natural conversation than
      // Haiku. effort:low + thinking disabled keep it snappy and cost-efficient
      // for a fast, text-message-style chat (no slow "thinking" pauses).
      model:         'claude-sonnet-4-6',
      max_tokens:    400,
      system:        SYSTEM,
      messages:      trimmed,
      thinking:      { type: 'disabled' },
      output_config: { effort: 'low' },
    }),
  });

  if (!anthropicRes.ok) {
    const err = await anthropicRes.text();
    console.error('[chat] Anthropic API error:', err);
    return res.status(502).json({ error: 'AI unavailable' });
  }

  const data = (await anthropicRes.json()) as AnthropicResponse;
  let reply = data.content?.find(b => b.type === 'text')?.text ?? '';

  let leadCollected = false;
  const leadMatch = reply.match(/__LEAD__(\{.*?\})/s);
  if (leadMatch) {
    try {
      const leadData = JSON.parse(leadMatch[1]) as {
        name: string; phone: string; address: string; issue: string;
      };
      reply = reply.replace(/\n?__LEAD__\{.*?\}/s, '').trim();
      leadCollected = true;
      submitChatLead(leadData, [...trimmed, { role: 'assistant', content: reply }], apiKey);
    } catch {
      reply = reply.replace(/\n?__LEAD__.*$/s, '').trim();
    }
  }

  return res.status(200).json({ reply, leadCollected });
}
