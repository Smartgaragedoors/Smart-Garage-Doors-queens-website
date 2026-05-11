import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ── OAuth2 ────────────────────────────────────────────────────────────────────

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

// ── GA4 ───────────────────────────────────────────────────────────────────────

interface GA4Row { dimensionValues?: Array<{ value: string }>; metricValues: Array<{ value: string }> }
interface GA4Response { rows?: GA4Row[] }

async function ga4Report(token: string, body: Record<string, unknown>): Promise<GA4Response> {
  const pid = process.env.GA4_PROPERTY_ID;
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${pid}:runReport`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GA4 error: ${await res.text()}`);
  return res.json() as Promise<GA4Response>;
}

async function fetchOverview(token: string, startDate: string, endDate: string) {
  const r = await ga4Report(token, {
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: 'sessions' }, { name: 'activeUsers' }, { name: 'newUsers' },
      { name: 'screenPageViews' }, { name: 'averageSessionDuration' }, { name: 'engagementRate' },
    ],
  });
  const mv = r.rows?.[0]?.metricValues ?? [];
  return {
    sessions:       parseFloat(mv[0]?.value ?? '0'),
    users:          parseFloat(mv[1]?.value ?? '0'),
    newUsers:       parseFloat(mv[2]?.value ?? '0'),
    pageViews:      parseFloat(mv[3]?.value ?? '0'),
    avgDuration:    parseFloat(mv[4]?.value ?? '0'),
    engagementRate: parseFloat(mv[5]?.value ?? '0'),
  };
}

async function fetchTopPages(token: string) {
  const r = await ga4Report(token, {
    dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
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
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return (r.rows ?? []).map(row => ({
    channel:  row.dimensionValues?.[0]?.value ?? 'Unknown',
    sessions: parseInt(row.metricValues[0]?.value ?? '0', 10),
    users:    parseInt(row.metricValues[1]?.value ?? '0', 10),
  }));
}

// ── Search Console ────────────────────────────────────────────────────────────

interface GscRow { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }
interface GscResponse { rows?: GscRow[] }

function gscDates() {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - 6);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end) };
}

async function gscQuery(token: string, body: Record<string, unknown>): Promise<GscResponse> {
  const site = encodeURIComponent(process.env.GSC_SITE_URL ?? 'https://www.smartestgaragedoors.com/');
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) { console.error('[gsc]', await res.text()); return {}; }
  return res.json() as Promise<GscResponse>;
}

async function fetchTopQueries(token: string) {
  const { startDate, endDate } = gscDates();
  const r = await gscQuery(token, { startDate, endDate, dimensions: ['query'], rowLimit: 25 });
  return (r.rows ?? []).map(row => ({
    query:       row.keys[0] ?? '',
    clicks:      row.clicks,
    impressions: row.impressions,
    ctr:         row.ctr,
    position:    row.position,
  }));
}

async function fetchGscPages(token: string) {
  const { startDate, endDate } = gscDates();
  const r = await gscQuery(token, { startDate, endDate, dimensions: ['page'], rowLimit: 15 });
  return (r.rows ?? []).map(row => ({
    page:        row.keys[0] ?? '',
    clicks:      row.clicks,
    impressions: row.impressions,
    ctr:         row.ctr,
    position:    row.position,
  }));
}

// ── Formatting helpers ────────────────────────────────────────────────────────

function num(n: number) { return Math.round(n).toLocaleString('en-US'); }
function pct(n: number) { return `${(n * 100).toFixed(1)}%`; }
function dur(s: number) { return `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`; }
function pos(n: number) { return n.toFixed(1); }

function trend(curr: number, prev: number) {
  if (!prev) return '';
  const d = ((curr - prev) / prev) * 100;
  const col = d >= 0 ? '#16a34a' : '#dc2626';
  return `<span style="color:${col};font-size:12px"> ${d >= 0 ? '↑' : '↓'}${Math.abs(d).toFixed(1)}%</span>`;
}

function mdToHtml(md: string): string {
  return md
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^#{1,3} (.+)$/gm, '<p style="font-weight:bold;color:#1e3a5f;margin:12px 0 4px;">$1</p>')
    .replace(/^\d+\. (.+)$/gm, '<div style="padding:3px 0 3px 8px;border-left:3px solid #0284c7;margin:4px 0;">$&</div>')
    .replace(/^[-•] (.+)$/gm, '<div style="padding:2px 0;">• $1</div>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

// ── Claude SEO analysis ───────────────────────────────────────────────────────

type Overview  = Awaited<ReturnType<typeof fetchOverview>>;
type Source    = Awaited<ReturnType<typeof fetchSources>>[number];
type TopPage   = Awaited<ReturnType<typeof fetchTopPages>>[number];
type Query     = Awaited<ReturnType<typeof fetchTopQueries>>[number];
type GscPage   = Awaited<ReturnType<typeof fetchGscPages>>[number];

async function generateSeoAnalysis(params: {
  curr: Overview; prev: Overview;
  sources: Source[]; topPages: TopPage[];
  queries: Query[]; gscPages: GscPage[];
}): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
  if (!apiKey) return 'SEO analysis unavailable.';

  const { curr, prev, sources, topPages, queries, gscPages } = params;
  const quickWins = queries.filter(q => q.impressions > 50 && q.ctr < 0.03);

  const prompt = `You are a senior SEO consultant giving a weekly briefing to the owner of Smartest Garage Doors — a garage door repair and installation company serving Queens NY, Brooklyn NY, Westchester NY, Nassau County NY, New Jersey, and Connecticut.

THIS WEEK'S DATA:

GA4 Traffic (vs last week):
- Sessions: ${num(curr.sessions)} ${prev.sessions ? `(${((curr.sessions - prev.sessions) / prev.sessions * 100).toFixed(1)}% change)` : ''}
- Users: ${num(curr.users)}, New Users: ${num(curr.newUsers)}
- Engagement Rate: ${pct(curr.engagementRate)}, Avg Session: ${dur(curr.avgDuration)}

Traffic Sources:
${sources.slice(0, 6).map(s => `- ${s.channel}: ${s.sessions} sessions`).join('\n')}

Top Pages (GA4):
${topPages.slice(0, 8).map(p => `- ${p.path}: ${p.sessions} sessions`).join('\n')}

Search Console — Top Keywords:
${queries.slice(0, 15).map(q => `- "${q.query}": ${q.impressions} impressions, ${q.clicks} clicks, ${(q.ctr * 100).toFixed(1)}% CTR, position ${q.position.toFixed(1)}`).join('\n') || '- No data yet'}

Search Console — Top Pages:
${gscPages.slice(0, 10).map(p => {
  const path = p.page.replace('https://www.smartestgaragedoors.com', '');
  return `- ${path || '/'}: ${p.impressions} impressions, ${p.clicks} clicks, pos ${p.position.toFixed(1)}`;
}).join('\n') || '- No data yet'}

Quick Win Opportunities (high impressions, low CTR — easy fixes):
${quickWins.slice(0, 5).map(q => `- "${q.query}": ${q.impressions} impressions but only ${(q.ctr * 100).toFixed(1)}% CTR — fix the title/meta description`).join('\n') || '- None this week'}

Write a weekly SEO briefing with these exact sections:
**What's Working**
**Quick Wins This Week** (specific actions with exact keyword/page names)
**Content to Create** (specific page ideas based on keyword gaps)
**Priority To-Do List** (numbered 1-5, most impactful first, very specific)

Be direct. Use real numbers. Name exact pages and keywords. Max 380 words. Write like a trusted advisor texting the owner.`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 700,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) { console.error('[seo]', await res.text()); return 'SEO analysis unavailable this week.'; }
  const d = await res.json() as { content: Array<{ type: string; text: string }> };
  return d.content.find(b => b.type === 'text')?.text ?? '';
}

// ── Email builder ─────────────────────────────────────────────────────────────

function buildEmail(params: {
  curr: Overview; prev: Overview;
  topPages: TopPage[]; sources: Source[];
  queries: Query[]; gscPages: GscPage[];
  seoAnalysis: string; weekLabel: string;
}): string {
  const { curr, prev, topPages, sources, queries, gscPages, seoAnalysis, weekLabel } = params;

  const TH = 'text-align:left;padding:8px 12px;background:#1e3a5f;color:#fff;font-size:13px;';
  const TD = (i: number) => `padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;${i % 2 ? 'background:#f9fafb;' : ''}`;

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

  const sourceRows = sources.map((s, i) => `<tr>
    <td style="${TD(i)}">${s.channel}</td>
    <td style="${TD(i)}">${num(s.sessions)}</td>
    <td style="${TD(i)}">${num(s.users)}</td>
  </tr>`).join('');

  const queryRows = queries.slice(0, 15).map((q, i) => {
    const ctrColor = q.ctr < 0.02 ? '#dc2626' : q.ctr < 0.05 ? '#d97706' : '#16a34a';
    return `<tr>
      <td style="${TD(i)}">${q.query}</td>
      <td style="${TD(i)}">${q.impressions.toLocaleString()}</td>
      <td style="${TD(i)}">${q.clicks}</td>
      <td style="${TD(i)};color:${ctrColor}">${(q.ctr * 100).toFixed(1)}%</td>
      <td style="${TD(i)}">${pos(q.position)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="5" style="${TD(0)};color:#6b7280">No data yet — Search Console may need a few days to populate.</td></tr>`;

  const gscPageRows = gscPages.slice(0, 10).map((p, i) => {
    const path = p.page.replace('https://www.smartestgaragedoors.com', '') || '/';
    const shortPath = path.length > 45 ? path.slice(0, 45) + '…' : path;
    return `<tr>
      <td style="${TD(i)}">${shortPath}</td>
      <td style="${TD(i)}">${p.impressions.toLocaleString()}</td>
      <td style="${TD(i)}">${p.clicks}</td>
      <td style="${TD(i)}">${pos(p.position)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="4" style="${TD(0)};color:#6b7280">No data yet.</td></tr>`;

  const topPageRows = topPages.map((p, i) => {
    const short = p.path.length > 45 ? p.path.slice(0, 45) + '…' : p.path;
    return `<tr>
      <td style="${TD(i)}">${short}</td>
      <td style="${TD(i)}">${num(p.sessions)}</td>
      <td style="${TD(i)}">${num(p.views)}</td>
    </tr>`;
  }).join('');

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:680px;margin:0 auto;padding:24px;color:#111;">

  <div style="background:#1e3a5f;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h1 style="color:#fff;margin:0;font-size:20px;">📊 Weekly SEO & Analytics Report</h1>
    <p style="color:#93c5fd;margin:4px 0 0;font-size:14px;">Smartest Garage Doors · ${weekLabel}</p>
  </div>

  <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">

    <!-- SEO ANALYSIS -->
    <div style="background:#0f172a;border-radius:8px;padding:20px;margin-bottom:28px;">
      <p style="color:#f59e0b;font-size:13px;font-weight:600;margin:0 0 12px;letter-spacing:0.05em;">🤖 YOUR SEO EXPERT</p>
      <div style="color:#e2e8f0;font-size:14px;line-height:1.7;">${mdToHtml(seoAnalysis)}</div>
    </div>

    <!-- TRAFFIC OVERVIEW -->
    <h2 style="font-size:15px;color:#1e3a5f;margin:0 0 4px;">Traffic Overview</h2>
    <p style="color:#6b7280;font-size:12px;margin:0 0 10px;">This week vs last week</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead><tr>
        <th style="${TH}">Metric</th><th style="${TH}">This Week</th><th style="${TH}">Last Week</th>
      </tr></thead>
      <tbody>${overviewRows}</tbody>
    </table>

    <!-- TRAFFIC SOURCES -->
    <h2 style="font-size:15px;color:#1e3a5f;margin:0 0 10px;">Traffic Sources</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead><tr>
        <th style="${TH}">Channel</th><th style="${TH}">Sessions</th><th style="${TH}">Users</th>
      </tr></thead>
      <tbody>${sourceRows}</tbody>
    </table>

    <!-- SEARCH CONSOLE KEYWORDS -->
    <h2 style="font-size:15px;color:#1e3a5f;margin:0 0 4px;">Top Search Keywords</h2>
    <p style="color:#6b7280;font-size:12px;margin:0 0 10px;">What people are Googling to find you · <span style="color:#dc2626">red CTR = needs a better title/description</span></p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead><tr>
        <th style="${TH}">Keyword</th><th style="${TH}">Impressions</th><th style="${TH}">Clicks</th><th style="${TH}">CTR</th><th style="${TH}">Position</th>
      </tr></thead>
      <tbody>${queryRows}</tbody>
    </table>

    <!-- SEARCH CONSOLE PAGES -->
    <h2 style="font-size:15px;color:#1e3a5f;margin:0 0 4px;">Top Pages in Google Search</h2>
    <p style="color:#6b7280;font-size:12px;margin:0 0 10px;">Which pages Google is showing (and ranking)</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead><tr>
        <th style="${TH}">Page</th><th style="${TH}">Impressions</th><th style="${TH}">Clicks</th><th style="${TH}">Position</th>
      </tr></thead>
      <tbody>${gscPageRows}</tbody>
    </table>

    <!-- TOP PAGES (GA4) -->
    <h2 style="font-size:15px;color:#1e3a5f;margin:0 0 10px;">Top Pages by Sessions</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead><tr>
        <th style="${TH}">Page</th><th style="${TH}">Sessions</th><th style="${TH}">Views</th>
      </tr></thead>
      <tbody>${topPageRows}</tbody>
    </table>

    <p style="margin-top:24px;font-size:12px;color:#9ca3af;text-align:center;">
      Smartest Garage Doors · NY, NJ &amp; CT<br>
      <a href="https://analytics.google.com" style="color:#9ca3af;">GA4</a> &nbsp;·&nbsp;
      <a href="https://search.google.com/search-console" style="color:#9ca3af;">Search Console</a>
    </p>
  </div>
</body></html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    const [curr, prev, topPages, sources, queries, gscPages] = await Promise.all([
      fetchOverview(token, '7daysAgo', 'yesterday'),
      fetchOverview(token, '14daysAgo', '8daysAgo'),
      fetchTopPages(token),
      fetchSources(token),
      fetchTopQueries(token),
      fetchGscPages(token),
    ]);

    const seoAnalysis = await generateSeoAnalysis({ curr, prev, sources, topPages, queries, gscPages });

    const now       = new Date();
    const weekStart = new Date(now); weekStart.setDate(now.getDate() - 7);
    const weekLabel = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}–${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const html = buildEmail({ curr, prev, topPages, sources, queries, gscPages, seoAnalysis, weekLabel });

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const toEmail   = process.env.NOTIFICATION_EMAIL?.trim() ?? 'danielabraham128@gmail.com';
    const fromEmail = process.env.FROM_EMAIL?.trim() ?? 'Smartest Garage Doors <onboarding@resend.dev>';

    if (!resendKey) throw new Error('RESEND_API_KEY not set');

    const resend = new Resend(resendKey);
    await resend.emails.send({
      from:    fromEmail,
      to:      [toEmail],
      subject: `📊 Weekly SEO Report — ${weekLabel}`,
      html,
    });

    return res.status(200).json({ ok: true, weekLabel, sessions: curr.sessions });
  } catch (err) {
    console.error('[weekly-report]', err);
    return res.status(500).json({ error: String(err) });
  }
}
