import type { VercelRequest, VercelResponse } from '@vercel/node';
import { normalizeLead, insertLead } from './lib/leadIntake';

// ── System prompt ─────────────────────────────────────────────────────────────
// Change OWNER_NAME to match the real name you want the bot to use.
const OWNER_NAME = 'Danny';

const SYSTEM = `You are ${OWNER_NAME}, the owner of Smartest Garage Doors — a garage door repair and installation company serving NY, NJ, and CT. You respond to homeowners who need help, exactly the way a friendly, experienced contractor would text back.

Your personality:
- Warm, direct, and confident — not salesy or robotic
- Short messages only (1–2 sentences). This is a chat, not an email.
- Use casual but professional language: "Got it", "Sounds like...", "No worries", "Perfect", "Yeah that's common"
- Show empathy when someone is stuck or frustrated
- Never mention AI, Claude, or that you're a bot. If asked, say you're ${OWNER_NAME} from Smartest Garage Doors.

Your goal: understand their problem, then collect their name, phone number, and address (city is fine). Once you have all four pieces — issue, name, phone, address — confirm and tell them you'll have someone reach out shortly.

Ask ONE thing at a time. Follow this order naturally (don't be robotic about it):
1. Understand the issue (what's wrong / what do they need)
2. Get their name
3. Get their best phone number
4. Get their address or city

When you have collected all four, write your confirmation message to the customer as normal, then on a NEW LINE at the very end, output exactly this (no spaces, no explanation):
__LEAD__{"name":"FULL_NAME","phone":"PHONE","address":"ADDRESS","issue":"ISSUE"}

Only output __LEAD__ once you genuinely have all four pieces. Never mention __LEAD__ to the customer.`;

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

// ── Lead submission ───────────────────────────────────────────────────────────

async function submitChatLead(raw: { name: string; phone: string; address: string; issue: string }) {
  try {
    const lead = normalizeLead('website', {
      customer_name: raw.name,
      phone:         raw.phone,
      address:       raw.address,
      notes:         raw.issue,
      service:       'Chat Lead',
      source_url:    'chat-widget',
    });
    if (lead) await insertLead('website', lead);
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

  // Keep last 20 turns to avoid token bloat
  const trimmed = messages.slice(-20);

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':         apiKey,
      'anthropic-version': '2023-06-01',
      'content-type':      'application/json',
    },
    body: JSON.stringify({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system:     SYSTEM,
      messages:   trimmed,
    }),
  });

  if (!anthropicRes.ok) {
    const err = await anthropicRes.text();
    console.error('[chat] Anthropic API error:', err);
    return res.status(502).json({ error: 'AI unavailable' });
  }

  const data = (await anthropicRes.json()) as AnthropicResponse;
  let reply = data.content?.find(b => b.type === 'text')?.text ?? '';

  // Detect and strip the lead marker
  let leadCollected = false;
  const leadMatch = reply.match(/__LEAD__(\{.*?\})/s);
  if (leadMatch) {
    try {
      const leadData = JSON.parse(leadMatch[1]) as {
        name: string; phone: string; address: string; issue: string;
      };
      reply = reply.replace(/\n?__LEAD__\{.*?\}/s, '').trim();
      leadCollected = true;
      submitChatLead(leadData); // fire-and-forget
    } catch {
      reply = reply.replace(/\n?__LEAD__.*$/s, '').trim();
    }
  }

  return res.status(200).json({ reply, leadCollected });
}
