import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { LeadSource } from '../lib/leadIntake';
import { normalizeLead, insertLead } from '../lib/leadIntake';

// ── Platform detection ────────────────────────────────────────────────────────

function getPlatformFromPath(req: VercelRequest): LeadSource | null {
  const url = req.url ?? '';
  if (url.includes('/thumbtack/')) return 'thumbtack';
  if (url.includes('/angi/'))      return 'angi';
  if (url.includes('/networx/'))   return 'networx';
  if (url.includes('/website/'))   return 'website';
  return null;
}

// ── CORS ──────────────────────────────────────────────────────────────────────

function setCorsHeaders(res: VercelResponse): void {
  const allowed = process.env.WEBSITE_WIDGET_ALLOWED_ORIGINS?.trim() || '*';
  res.setHeader('Access-Control-Allow-Origin', allowed);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Webhook-Secret');
  res.setHeader('Vary', 'Origin');
}

// ── Auth ──────────────────────────────────────────────────────────────────────

const SECRET_ENV: Record<LeadSource, string> = {
  thumbtack: 'THUMBTACK_WEBHOOK_SECRET',
  angi:      'ANGI_WEBHOOK_SECRET',
  networx:   'NETWORX_WEBHOOK_SECRET',
  website:   'WEBSITE_WEBHOOK_SECRET',
};

function checkAuth(req: VercelRequest, platform: LeadSource): boolean {
  const secret = process.env[SECRET_ENV[platform]]?.trim();
  if (!secret) {
    console.warn(`[webhook] ${SECRET_ENV[platform]} not set — allowing unauthenticated request`);
    return true;
  }

  const body = (req.body ?? {}) as Record<string, unknown>;
  const candidates = [
    req.headers['x-webhook-secret'] as string ?? '',
    ((req.headers['authorization'] as string) ?? '').replace(/^Bearer\s+/i, ''),
    typeof req.query.secret === 'string' ? req.query.secret : '',
    typeof body.secret === 'string' ? body.secret : '',
  ];

  return candidates.some(v => v === secret);
}

// ── Honeypot ──────────────────────────────────────────────────────────────────

function isHoneypot(body: Record<string, unknown>): boolean {
  return (
    (typeof body.website_url === 'string' && body.website_url.length > 0) ||
    (typeof body._hp === 'string' && body._hp.length > 0)
  );
}

// ── Handler ───────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const platform = getPlatformFromPath(req);
  if (!platform) {
    return res.status(400).json({ error: 'Unknown platform' });
  }

  if (!checkAuth(req, platform)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  if (platform === 'website' && isHoneypot(body)) {
    // Silently accept to avoid bot retry loops
    return res.status(201).json({ ok: true });
  }

  // Merge campaign from query string if not in body
  if (typeof req.query.campaign === 'string' && !body.campaign) {
    body.campaign = req.query.campaign;
  }

  const lead = normalizeLead(platform, body);
  if (!lead) {
    return res.status(422).json({ error: 'Could not parse lead payload' });
  }

  if (!lead.phone && !lead.email) {
    return res.status(422).json({ error: 'Lead must include phone or email' });
  }

  try {
    const { jobId } = await insertLead(platform, lead);
    return res.status(201).json({ success: true, id: jobId });
  } catch (err) {
    console.error('[webhook] insertLead error:', err);
    return res.status(500).json({ error: 'Failed to save lead' });
  }
}
