import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ── OAuth2 token refresh ──────────────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id:     process.env.GA4_CLIENT_ID!,
      client_secret: process.env.GA4_CLIENT_SECRET!,
      refresh_token: process.env.GA4_REFRESH_TOKEN!,
      grant_type:    'refresh_token',
    }),
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${await res.text()}`);
  const data = await res.json() as { access_token: string };
  return data.access_token;
}

// ── GA4 Data API ──────────────────────────────────────────────────────────────

interface GA4Row {
  dimensionValues?: Array<{ value: string }>;
  metricValues:     Array<{ value: string }>;
}
interface GA4Response { rows?: GA4Row[] }

async function ga4Report(token: string, body: Record<string, unknown>): Promise<GA4Response> {
  const pid = process.env.GA4_PROPERTY_ID;
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${pid}:runReport`,
    {
      method:  'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    }
  );
  if (!res.ok) throw new Error(`GA4 error: ${await res.text()}`);
  return res.json() as Promise<GA4Response>;
}

async function fetchOverview(token: string, startDate: string, endDate: string) {
  const r = await ga4Report(token, {
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: 'sessions' },
      { name: 'activeUsers' },
      { name: 'newUsers' },
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
      { name: 'engagementRate' },
    ],
  });
  const mv = r.rows?.[0]?.metricValues ?? [];
  return {
    sessions:        parseFloat(mv[0]?.value ?? '0'),
    users:           parseFloat(mv[1]?.value ?? '0'),
    newUsers:        parseFloat(mv[2]?.value ?? '0'),
    pageViews:       parseFloat(mv[3]?.value ?? '0'),
    avgDuration:     parseFloat(mv[4]?.value ?? '0'),
    engagementRate:  parseFloat(mv[5]?.value ?? '0'),
  };
}

async function fetchTopPages(token: string) {
  const r = await ga4Report(token, {
    dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
    dimensions: [{ name: 'pagePath' }],
    metrics:    [{ name: 'sessions' }, { name: 'screenPageViews' }],
    orderBys:   [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 10,
  });
  return (r.rows ?? []).map(row => ({
    path:     row.dimensionValues?.[0]?.value ?? '/',
    sessions: parseInt(row.metricValues[0]?.value ?? '0', 10),
    views:    parseInt(row.metricValues[1]?.value ?? '0', 10),
  }));
}

async function fetchSources(token: string) {
  const r = await ga4Report(token, {
    dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
    dimensions: [{ name: 'sessionDefaultChannelGrouping' }],
    metrics:    [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys:   [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return (r.rows ?? []).map(row => ({
    channel:  row.dimensionValues?.[0]?.value ?? 'Unknown',
    sessions: parseInt(row.metricValues[0]?.value ?? '0', 10),
    users:    parseInt(row.metricValues[1]?.value ?? '0', 10),
  }));
}

// ── Email builder ─────────────────────────────────────────────────────────────

type Overview = ReturnType<typeof fetchOverview> extends Promise<infer T> ? T : never;

function num(n: number)  { return n.toLocaleString('en-US'); }
function pct(n: number)  { return `${(n * 100).toFixed(1)}%`; }
function dur(s: number)  { return `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`; }

function trend(curr: number, prev: number) {
  if (!prev) return '';
  const d = ((curr - prev) / prev) * 100;
  const col = d >= 0 ? '#16a34a' : '#dc2626';
  return `<span style="color:${col};font-size:12px"> ${d >= 0 ? '↑' : '↓'}${Math.abs(d).toFixed(1)}%</span>`;
}

function buildEmail(
  curr: Overview,
  prev: Overview,
  topPages: Awaited<ReturnType<typeof fetchTopPages>>,
  sources:  Awaited<ReturnType<typeof fetchSources>>,
  weekLabel: string,
): string {
  const TH = 'text-align:left;padding:8px 12px;background:#1e3a5f;color:#fff;font-size:13px;';
  const TD = (i: number) => `padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:14px;${i % 2 ? 'background:#f9fafb;' : ''}`;

  const overviewRows = [
    ['Sessions',        num(curr.sessions),       num(prev.sessions),       trend(curr.sessions, prev.sessions)],
    ['Users',           num(curr.users),           num(prev.users),           trend(curr.users, prev.users)],
    ['New Users',       num(curr.newUsers),        num(prev.newUsers),        trend(curr.newUsers, prev.newUsers)],
    ['Page Views',      num(curr.pageViews),       num(prev.pageViews),       trend(curr.pageViews, prev.pageViews)],
    ['Avg Session',     dur(curr.avgDuration),     dur(prev.avgDuration),     trend(curr.avgDuration, prev.avgDuration)],
    ['Engagement Rate', pct(curr.engagementRate),  pct(prev.engagementRate),  trend(curr.engagementRate, prev.engagementRate)],
  ].map((r, i) => `<tr>
    <td style="${TD(i)}">${r[0]}</td>
    <td style="${TD(i)}"><strong>${r[1]}</strong>${r[3]}</td>
    <td style="${TD(i)};color:#6b7280">${r[2]}</td>
  </tr>`).join('');

  const pageRows = topPages.map((p, i) => {
    const path = p.path.length > 50 ? p.path.slice(0, 50) + '…' : p.path;
    return `<tr>
      <td style="${TD(i)}">${path}</td>
      <td style="${TD(i)}">${num(p.sessions)}</td>
      <td style="${TD(i)}">${num(p.views)}</td>
    </tr>`;
  }).join('');

  const sourceRows = sources.map((s, i) => `<tr>
    <td style="${TD(i)}">${s.channel}</td>
    <td style="${TD(i)}">${num(s.sessions)}</td>
    <td style="${TD(i)}">${num(s.users)}</td>
  </tr>`).join('');

  // Simple SEO tip based on data
  const organicRow   = sources.find(s => s.channel.toLowerCase().includes('organic'));
  const organicShare = curr.sessions > 0 ? ((organicRow?.sessions ?? 0) / curr.sessions * 100).toFixed(0) : '0';
  const topPage      = topPages[0]?.path ?? '/';
  const tip = parseInt(organicShare) < 40
    ? `Only <strong>${organicShare}%</strong> of your traffic is from organic search. Publishing more city/service pages (e.g. /garage-door-repair-[city]) is the fastest way to grow free traffic.`
    : `<strong>${organicShare}%</strong> of traffic is organic — great SEO foundation. Your top page <strong>${topPage}</strong> is pulling the most sessions; make sure it has a clear call-to-action above the fold.`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:660px;margin:0 auto;padding:24px;color:#111;">
  <div style="background:#1e3a5f;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h1 style="color:#fff;margin:0;font-size:20px;">📊 Weekly Analytics Report</h1>
    <p style="color:#93c5fd;margin:4px 0 0;font-size:14px;">Smartest Garage Doors · ${weekLabel}</p>
  </div>

  <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">

    <h2 style="font-size:16px;color:#1e3a5f;margin:0 0 4px;">Traffic Overview</h2>
    <p style="color:#6b7280;font-size:13px;margin:0 0 12px;">This week vs last week</p>
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr>
        <th style="${TH}">Metric</th><th style="${TH}">This Week</th><th style="${TH}">Last Week</th>
      </tr></thead>
      <tbody>${overviewRows}</tbody>
    </table>

    <h2 style="font-size:16px;color:#1e3a5f;margin:28px 0 12px;">Top Pages</h2>
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr>
        <th style="${TH}">Page</th><th style="${TH}">Sessions</th><th style="${TH}">Views</th>
      </tr></thead>
      <tbody>${pageRows}</tbody>
    </table>

    <h2 style="font-size:16px;color:#1e3a5f;margin:28px 0 12px;">Traffic Sources</h2>
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr>
        <th style="${TH}">Channel</th><th style="${TH}">Sessions</th><th style="${TH}">Users</th>
      </tr></thead>
      <tbody>${sourceRows}</tbody>
    </table>

    <div style="margin-top:24px;padding:16px;background:#f0f9ff;border-radius:8px;border-left:4px solid #0284c7;">
      <p style="margin:0;font-size:13px;color:#0c4a6e;line-height:1.6;">
        <strong>💡 SEO Insight:</strong> ${tip}
      </p>
    </div>

    <p style="margin-top:24px;font-size:12px;color:#9ca3af;text-align:center;">
      Smartest Garage Doors · NY, NJ &amp; CT<br>
      <a href="https://analytics.google.com" style="color:#9ca3af;">View full report in GA4</a>
    </p>
  </div>
</body></html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Verify this is from Vercel Cron (or allow GET with secret for manual testing)
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = req.headers.authorization;
    const qs   = req.query['secret'];
    if (auth !== `Bearer ${cronSecret}` && qs !== cronSecret) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    const token = await getAccessToken();

    const [curr, prev, topPages, sources] = await Promise.all([
      fetchOverview(token, '7daysAgo', 'yesterday'),
      fetchOverview(token, '14daysAgo', '8daysAgo'),
      fetchTopPages(token),
      fetchSources(token),
    ]);

    const now       = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - 7);
    const weekLabel = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}–${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const html = buildEmail(curr, prev, topPages, sources, weekLabel);

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const toEmail   = process.env.NOTIFICATION_EMAIL?.trim() ?? 'danielabraham128@gmail.com';
    const fromEmail = process.env.FROM_EMAIL?.trim() ?? 'Smartest Garage Doors <onboarding@resend.dev>';

    if (!resendKey) throw new Error('RESEND_API_KEY not set');

    const resend = new Resend(resendKey);
    await resend.emails.send({
      from:    fromEmail,
      to:      [toEmail],
      subject: `📊 Weekly Analytics — ${weekLabel}`,
      html,
    });

    return res.status(200).json({ ok: true, weekLabel, sessions: curr.sessions });
  } catch (err) {
    console.error('[weekly-report]', err);
    return res.status(500).json({ error: String(err) });
  }
}
