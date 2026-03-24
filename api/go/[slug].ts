import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Server-side /go/:slug handler (invoked via Vercel rewrite from /go/:slug).
 * 1) Resolve link by slug in Supabase
 * 2) On GET: insert click_events, increment links.click_count
 * 3) On HEAD: redirect only (no DB write — avoids crawler/preview noise)
 * 4) 302 to destination (direct) or landing URL (landing) without client-side tracking
 */

const SLUG_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;
const PG_IDENTIFIER = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

function sanitizePgIdentifier(name: string, fallback: string): string {
  const t = name.trim();
  return PG_IDENTIFIER.test(t) ? t : fallback;
}

type RedirectMode = 'direct' | 'landing';

interface LinkRow {
  id: string;
  company_id: string;
  workspace_id: string | null;
  slug: string;
  destination_url: string | null;
  redirect_mode: string | null;
  click_count: number | null;
}

function getSupabaseUrl(): string | undefined {
  const value = process.env.SUPABASE_URL?.trim();
  return value && value.length > 0 ? value : undefined;
}

function getServiceRoleKey(): string | undefined {
  return process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || undefined;
}

function getRequestOrigin(req: VercelRequest): string {
  const proto = (req.headers['x-forwarded-proto'] as string)?.split(',')[0]?.trim() || 'https';
  const host =
    (req.headers['x-forwarded-host'] as string)?.split(',')[0]?.trim() ||
    (req.headers.host as string) ||
    'www.smartestgaragedoors.com';
  return `${proto}://${host}`;
}

function getClientIp(req: VercelRequest): string | null {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.length > 0) {
    return xff.split(',')[0].trim();
  }
  if (typeof xff === 'object' && xff?.[0]) {
    return String(xff[0]).split(',')[0].trim();
  }
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string') return realIp.trim();
  return null;
}

function maskIp(ip: string | null): string | null {
  if (!ip) return null;
  if (ip.includes('.')) {
    const parts = ip.split('.');
    if (parts.length === 4) return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
    return ip;
  }
  if (ip.includes(':')) {
    const parts = ip.split(':').filter(Boolean);
    return parts.length >= 4 ? `${parts.slice(0, 4).join(':')}::` : ip;
  }
  return ip;
}

function parseUserAgent(ua: string): { device_type: string; browser: string; os: string } {
  const u = ua.toLowerCase();
  let device_type = 'desktop';
  if (/mobile|android.*mobile|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua) && !/ipad|tablet/i.test(ua)) {
    device_type = 'mobile';
  } else if (/ipad|tablet|android(?!.*mobile)|kindle|silk/i.test(ua)) {
    device_type = 'tablet';
  }

  let os = 'other';
  if (u.includes('windows')) os = 'windows';
  else if (u.includes('mac os') || u.includes('macos')) os = 'macos';
  else if (u.includes('iphone') || u.includes('ipad') || u.includes('ios')) os = 'ios';
  else if (u.includes('android')) os = 'android';
  else if (u.includes('linux')) os = 'linux';

  let browser = 'other';
  if (u.includes('edg/') || u.includes('edgios/') || u.includes('edga/')) browser = 'edge';
  else if (u.includes('opr/') || u.includes('opera')) browser = 'opera';
  else if (u.includes('chrome') || u.includes('crios')) browser = 'chrome';
  else if (u.includes('firefox') || u.includes('fxios')) browser = 'firefox';
  else if (u.includes('safari') && !u.includes('chrome')) browser = 'safari';

  return { device_type, browser, os };
}

function isLinkRowActive(row: Record<string, unknown>, activeField: string): boolean {
  const v = row[activeField];
  if (v === false) return false;
  return true;
}

function normalizeRedirectMode(raw: string | null | undefined): RedirectMode {
  const m = String(raw || 'landing').toLowerCase().trim();
  if (m === 'direct') return 'direct';
  return 'landing';
}

function mergeQueryParams(dest: string, incoming: URLSearchParams, siteOrigin: string): string {
  const absolute =
    dest.startsWith('http://') || dest.startsWith('https://')
      ? dest
      : new URL(dest.startsWith('/') ? dest : `/${dest}`, siteOrigin).toString();
  const target = new URL(absolute);
  incoming.forEach((value, key) => {
    if (!target.searchParams.has(key)) {
      target.searchParams.set(key, value);
    }
  });
  return target.toString();
}

function buildLandingUrl(
  row: LinkRow,
  slug: string,
  incoming: URLSearchParams,
  siteOrigin: string
): string {
  const pathOrUrl = row.destination_url?.trim();
  let base: URL;
  if (pathOrUrl && /^https?:\/\//i.test(pathOrUrl)) {
    base = new URL(pathOrUrl);
  } else {
    const path = pathOrUrl && pathOrUrl.length > 0 ? pathOrUrl : '/lp/whatsapp/';
    base = new URL(path.startsWith('/') ? path : `/${path}`, siteOrigin);
  }
  if (!base.searchParams.has('campaign')) {
    base.searchParams.set('campaign', slug);
  }
  incoming.forEach((value, key) => {
    if (key !== 'campaign') {
      base.searchParams.set(key, value);
    }
  });
  return base.toString();
}

function buildDirectUrl(row: LinkRow, incoming: URLSearchParams, siteOrigin: string): string | null {
  const dest = row.destination_url?.trim();
  if (!dest) return null;
  return mergeQueryParams(dest, incoming, siteOrigin);
}

/**
 * Utility redirect: not indexable content; avoid cache so slugs/destinations stay fresh.
 */
function setTrackingSeoHeaders(res: VercelResponse) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'private, no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
}

function notFound(res: VercelResponse) {
  setTrackingSeoHeaders(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res
    .status(404)
    .send(
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Link not found</title><meta name="robots" content="noindex,nofollow"></head><body><p>Link not found.</p></body></html>'
    );
}

function misconfigured(res: VercelResponse, message: string) {
  console.error('[api/go]', message);
  setTrackingSeoHeaders(res);
  return res.status(503).send(message);
}

async function fetchLinkBySlug(supabase: SupabaseClient, slug: string): Promise<LinkRow | null> {
  const activeField = sanitizePgIdentifier(process.env.LINKS_IS_ACTIVE_FIELD || 'is_active', 'is_active');
  let q = supabase
    .from('links')
    .select(`id, company_id, workspace_id, slug, destination_url, redirect_mode, click_count, ${activeField}`)
    .eq('slug', slug);

  /** Set LINKS_ACTIVE_FILTER=0 if your table has no boolean "active" column (not recommended). */
  if (process.env.LINKS_ACTIVE_FILTER !== '0') {
    q = q.eq(activeField, true);
  }

  const { data, error } = await q.maybeSingle();

  if (error) {
    console.error('[api/go] Supabase select error:', error.message);
    return null;
  }
  if (!data || !isLinkRowActive(data as Record<string, unknown>, activeField)) {
    return null;
  }
  return data as LinkRow;
}

async function recordClick(
  supabase: SupabaseClient,
  row: LinkRow,
  meta: {
    referrer: string | null;
    device_type: string;
    browser: string;
    os: string;
    ip_masked: string | null;
    country: string | null;
    city: string | null;
    user_agent: string | null;
  }
) {
  const clickedAt = new Date().toISOString();

  const { error: insertError } = await supabase.from('click_events').insert({
    link_id: row.id,
    company_id: row.company_id,
    workspace_id: row.workspace_id,
    clicked_at: clickedAt,
    referrer: meta.referrer,
    device_type: meta.device_type,
    browser: meta.browser,
    os: meta.os,
    ip_masked: meta.ip_masked,
    country: meta.country,
    city: meta.city,
    user_agent: meta.user_agent,
  });

  if (insertError) {
    console.error('[api/go] click_events insert error:', insertError.message);
    return false;
  }

  const nextCount = (row.click_count ?? 0) + 1;
  const { error: updateError } = await supabase.from('links').update({ click_count: nextCount }).eq('id', row.id);

  if (updateError) {
    console.error('[api/go] links click_count update error:', updateError.message);
    return false;
  }
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const slugParam = typeof req.query.slug === 'string' ? req.query.slug : req.query.slug?.[0];
  const slug = slugParam ? decodeURIComponent(slugParam).trim() : '';

  if (!slug || !SLUG_PATTERN.test(slug)) {
    return notFound(res);
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }

  const supabaseUrl = getSupabaseUrl();
  const serviceKey = getServiceRoleKey();

  if (!supabaseUrl || !serviceKey) {
    return misconfigured(
      res,
      'Redirect service unavailable: missing server env vars SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY. /go tracking requires one dedicated Supabase project configured via server-only env vars.'
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const row = await fetchLinkBySlug(supabase, slug);
  if (!row) {
    return notFound(res);
  }

  const siteOrigin = getRequestOrigin(req);
  const incoming = new URL(req.url || '/', 'http://localhost').searchParams;

  const mode = normalizeRedirectMode(row.redirect_mode);
  const locationUrl =
    mode === 'direct' ? buildDirectUrl(row, incoming, siteOrigin) : buildLandingUrl(row, slug, incoming, siteOrigin);

  if (!locationUrl) {
    return notFound(res);
  }

  if (req.method === 'GET') {
    const ua = typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '';
    const { device_type, browser, os } = parseUserAgent(ua);
    const referer =
      typeof req.headers.referer === 'string'
        ? req.headers.referer
        : typeof req.headers.referrer === 'string'
          ? req.headers.referrer
          : null;

    const country =
      typeof req.headers['x-vercel-ip-country'] === 'string' ? req.headers['x-vercel-ip-country'] : null;
    let city: string | null = null;
    const rawCity = req.headers['x-vercel-ip-city'];
    if (typeof rawCity === 'string' && rawCity.length > 0) {
      try {
        city = decodeURIComponent(rawCity);
      } catch {
        city = rawCity;
      }
    }

    await recordClick(supabase, row, {
      referrer: referer,
      device_type,
      browser,
      os,
      ip_masked: maskIp(getClientIp(req)),
      country,
      city,
      user_agent: ua || null,
    });
  }

  setTrackingSeoHeaders(res);
  res.setHeader('Location', locationUrl);
  return res.status(302).end();
}
