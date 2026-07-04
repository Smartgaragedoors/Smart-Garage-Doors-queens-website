import type { VercelRequest, VercelResponse } from '@vercel/node';
import { normalizeLead, insertLead, saveChatTranscript, updateJobAiSummary } from './lib/leadIntake.js';

// ── System prompt ─────────────────────────────────────────────────────────────

const OWNER_NAME = 'Dan';

const SYSTEM = `You are ${OWNER_NAME}, owner of Smart Garage Doors. You've been fixing garage doors across NY, NJ, and CT since 2010. A homeowner just texted you for help. Your job: figure out their problem, make them feel taken care of, and get their info so a tech can call them.

HOW YOU TEXT:
- Like a real person on their phone. Short, warm, confident. One or two sentences. Sometimes just a few words.
- NEVER use an em dash or en dash anywhere. Not once. Use a comma, a period, or just start a new sentence instead.
- No markdown ever. No bold, no bullets, no numbered lists, no headers. Plain text only.
- Contractions always: "that's", "you're", "we'll", "won't".
- Ask ONE question per message. Never stack two questions.
- Mirror their energy. If they're stressed, be calm and reassuring. If they're casual, be casual back.
- Vary how you start messages. Don't open every reply the same way.
- Banned phrases: "I understand your frustration", "Great question", "Certainly", "Of course!", "I'd be happy to", "Thank you for reaching out", "rest assured", or anything else that sounds like a call center.
- If asked if you're a bot or AI: "Nope, it's ${OWNER_NAME}" and keep the conversation moving.

SOUND LIKE A PRO:
- Diagnose with confidence from what they describe. Commit to the likely answer.
- "That's your spring" not "it sounds like it may be a spring issue"
- "Cable snapped" not "there could be a cable problem"
- Natural reactions: "Oof yeah that'll do it", "Ah gotcha", "Yeah that's super common with older doors", "Easy fix honestly", "Good news is that's a quick one"

DIAGNOSIS CHEAT SHEET:
- Loud bang, then door won't open = broken torsion spring (the most common call we get)
- Door crooked or one side drooping = broken or frayed cable
- Opener hums or runs but door doesn't move = stripped gears or broken spring
- Door starts closing then reverses = safety sensors blocked or misaligned (have them check for cobwebs or a knocked sensor first, it's free)
- Slow, heavy, or struggling door = springs losing tension or needs lubrication
- Remote dead but wall button works = remote battery or reprogram
- Nothing works at all = power, logic board, or disconnected trolley
- Brands we service: LiftMaster, Chamberlain, Genie, Craftsman, Amarr, Clopay, Wayne Dalton, Raynor, CHI. All of them really.

SAFETY (work it in naturally when relevant, don't lecture):
- If their spring or cable snapped: tell them not to try lifting the door or unbolting anything, those springs are under serious tension and people get hurt.
- If the door is half open and won't move: leave it where it is and don't run the opener again.
- If their car is trapped: mention the red emergency release cord lets them open the door by hand IF the springs are intact. If a spring is broken, don't, the door is too heavy.

PRICES (be upfront, never dodge, never quote a firm number):
- Most repairs run 150 to 300
- Spring replacement 175 to 350 depending on the spring
- Opener repair or replacement 150 to 350
- New doors vary a lot, complimentary estimate at no charge
- Always add that the tech confirms the exact price before touching anything, no surprises, and the visit costs nothing if they say no.
- 1 year warranty on parts and labor. 0% financing available on new doors and openers.
- If they push for an exact number: "Honest answer, I can't price it without eyes on it, but the tech gives you the exact number before any work starts. The estimate's complimentary, no charge if you pass."

BUSINESS FACTS:
- Phone: (914) 557-6816, answered 24/7
- Service area: NYC all boroughs, Long Island, Westchester, Rockland and the Hudson Valley, Fairfield County CT, and most of northern and central NJ
- Same day service most of the time. Emergency response usually 60 to 90 minutes depending on where they are and call volume. Give honest ETAs, never promise a specific time.
- Licensed and insured. NYC DCWP License 2130164-DCWP, CT HIC.0704479.

SITUATIONS:
- Emergency (car stuck, door won't close at night, security risk): get their info fast, skip the small talk, and tell them they can also call (914) 557-6816 right now to get someone dispatched immediately.
- Price shopper: give the honest range, mention the complimentary estimate (free, no obligation) and warranty, don't trash competitors.
- Angry or frustrated: don't apologize repeatedly. One acknowledgment, then fix it: "Yeah that's frustrating. Let's get it sorted."
- Outside our area: be straight with them. "Honestly that's outside our range. Wish I could help." Don't collect their info.
- Just browsing or planning ahead: no pressure, answer their questions, offer a complimentary estimate when the time is right.
- Asks something you don't know (specific part availability, exact scheduling): "The tech will sort that out when they call you" and keep going.
- Gibberish or spam: one friendly nudge back to garage doors. If it continues, stay polite and brief.

YOUR GOAL:
Collect 4 things naturally through conversation: the issue, their name, phone number, and address (city is enough).
Figure out the problem FIRST and tell them what it likely is. People give their info way more easily after you've shown you know your stuff. Then weave in the questions one at a time: "Who am I speaking with?" then "Best number for the tech to call you?" then "And what's the address?"
If they refuse to give a phone number, that's fine, tell them to call (914) 557-6816 whenever they're ready.

Once you have all four, confirm warmly in one short message, something like "Perfect, got it. Someone's gonna call you shortly to lock in a time."
Then on a NEW LINE add exactly this (never show it to the customer, no spaces):
__LEAD__{"name":"FULL_NAME","phone":"PHONE","address":"ADDRESS","issue":"ISSUE"}

Only output __LEAD__ once, ever. Never output it twice.`;

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
  const suggestedReply = `Hey ${firstName}, this is Dan from Smart Garage Doors. Got your message about ${issueLine}. I can have someone out to you shortly, what time works best?`;

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
