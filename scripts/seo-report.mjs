/**
 * Daily SEO/analytics pull for the site-health routine — Google Search Console
 * + GA4, with ZERO npm dependencies (service-account JWT signed via node:crypto).
 *
 * WHY: The daily "sgd-site-health-brief" routine can read uptime, Vercel, and
 * Core Web Vitals on its own, but Search Console and GA4 need authenticated
 * Google access. This script provides it via a Google service account so the
 * routine (or any cron) can run `node scripts/seo-report.mjs` and get the
 * numbers as Markdown on stdout.
 *
 * SAFETY: If credentials are missing or any call fails, this is a NO-OP that
 * still exits 0 and prints a one-line "not configured / failed" note — it never
 * breaks the routine or the build. It only READS data (read-only scopes).
 *
 * ── ONE-TIME SETUP (the part only the site owner can do) ──────────────────────
 * 1. Google Cloud Console → create a project (or reuse one) → enable the
 *    "Google Search Console API" and the "Google Analytics Data API".
 * 2. Create a Service Account; create a JSON key; download it.
 * 3. Grant that service account READ access to the data:
 *    - Search Console → Settings → Users and permissions → add the service
 *      account email (xxxx@xxxx.iam.gserviceaccount.com) as a "Full" or
 *      "Restricted" user on the smartestgaragedoors.com property.
 *    - GA4 → Admin → Property access management → add the same email as "Viewer".
 * 4. Provide the script its config via env (in .env.local next to package.json,
 *    or the environment / Vercel env vars):
 *      GOOGLE_SA_JSON     = the FULL contents of the service-account JSON key
 *                           (paste as a single-line string), OR
 *      GOOGLE_SA_KEY_FILE = a path to the JSON key file on disk
 *      GA4_PROPERTY_ID    = your GA4 numeric property id (Admin → Property details)
 *      GSC_SITE           = (optional) defaults to sc-domain:smartestgaragedoors.com
 * 5. Run:  node scripts/seo-report.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const GSC_SITE = process.env.GSC_SITE || 'sc-domain:smartestgaragedoors.com';
// Conversion events we care about (match the site's analytics.ts events).
const CONVERSION_EVENTS = ['phone_click', 'call_click', 'cta_click', 'form_submit', 'form_start', 'book_now_click', 'whatsapp_click'];

// ── tiny .env loader (no dependency), mirrors scripts/fetch-reviews.mjs ───────
function loadEnvFile(name) {
  const p = join(ROOT, name);
  if (!existsSync(p)) return;
  try {
    for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      const key = m[1];
      let val = m[2].replace(/^["']|["']$/g, '');
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch { /* ignore */ }
}
loadEnvFile('.env.local');
loadEnvFile('.env');

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function loadServiceAccount() {
  if (process.env.GOOGLE_SA_JSON) {
    try { return JSON.parse(process.env.GOOGLE_SA_JSON); } catch { return null; }
  }
  if (process.env.GOOGLE_SA_KEY_FILE && existsSync(process.env.GOOGLE_SA_KEY_FILE)) {
    try { return JSON.parse(readFileSync(process.env.GOOGLE_SA_KEY_FILE, 'utf8')); } catch { return null; }
  }
  return null;
}

async function getAccessToken(sa, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({
    iss: sa.client_email,
    scope: scopes.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  signer.end();
  const signature = signer.sign(sa.private_key).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const assertion = `${header}.${claims}.${signature}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}

// GSC dates lag ~2-3 days; compare two stable 7-day windows ending 3 days ago.
function ymd(d) { return d.toISOString().slice(0, 10); }
function daysAgo(n) { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; }

async function gscTotals(token, startDays, endDays) {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate: ymd(daysAgo(startDays)), endDate: ymd(daysAgo(endDays)), dataState: 'all' }),
    });
  if (!res.ok) throw new Error(`GSC totals ${res.status}: ${await res.text()}`);
  const rows = (await res.json()).rows || [];
  const r = rows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  return { clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position };
}

async function gscTopQueries(token) {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate: ymd(daysAgo(9)), endDate: ymd(daysAgo(3)), dimensions: ['query'], rowLimit: 25, dataState: 'all' }),
    });
  if (!res.ok) throw new Error(`GSC queries ${res.status}: ${await res.text()}`);
  return (await res.json()).rows || [];
}

async function ga4Conversions(token, propertyId) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
      }),
    });
  if (!res.ok) throw new Error(`GA4 ${res.status}: ${await res.text()}`);
  const rows = (await res.json()).rows || [];
  const out = {};
  for (const row of rows) {
    const name = row.dimensionValues?.[0]?.value;
    const count = Number(row.metricValues?.[0]?.value || 0);
    if (CONVERSION_EVENTS.includes(name)) out[name] = count;
  }
  return out;
}

function pct(curr, prev) {
  if (!prev) return curr ? '+∞%' : '0%';
  const d = ((curr - prev) / prev) * 100;
  return `${d >= 0 ? '▲' : '▼'}${Math.abs(d).toFixed(0)}%`;
}

async function main() {
  const sa = loadServiceAccount();
  if (!sa) {
    console.log('## Search Console + GA4\n_Not configured_ — set GOOGLE_SA_JSON (service-account key) + GA4_PROPERTY_ID. See scripts/seo-report.mjs header for the one-time setup.');
    return;
  }
  const lines = [];
  try {
    const token = await getAccessToken(sa, [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
    ]);

    // ── Search Console: last 7d (ending 3d ago) vs prior 7d ──
    try {
      const curr = await gscTotals(token, 9, 3);
      const prev = await gscTotals(token, 16, 10);
      lines.push('## Search Console (last 7d vs prior 7d, ends ~3d ago for data lag)');
      lines.push(`- Clicks: **${curr.clicks}** ${pct(curr.clicks, prev.clicks)}`);
      lines.push(`- Impressions: **${Math.round(curr.impressions)}** ${pct(curr.impressions, prev.impressions)}`);
      lines.push(`- CTR: **${(curr.ctr * 100).toFixed(2)}%** (was ${(prev.ctr * 100).toFixed(2)}%)`);
      lines.push(`- Avg position: **${curr.position.toFixed(1)}** (was ${prev.position.toFixed(1)})`);
      const q = await gscTopQueries(token);
      const opps = q.filter(r => r.impressions >= 100 && r.ctr < 0.01)
        .sort((a, b) => b.impressions - a.impressions).slice(0, 5);
      if (opps.length) {
        lines.push('- CTR opportunities (≥100 impr, <1% CTR):');
        for (const r of opps) lines.push(`  - "${r.keys[0]}" — ${Math.round(r.impressions)} impr, ${(r.ctr * 100).toFixed(1)}% CTR, pos ${r.position.toFixed(1)}`);
      }
    } catch (e) { lines.push(`## Search Console\n_Error_: ${e.message.slice(0, 200)}`); }

    // ── GA4: conversion events last 7d ──
    const propertyId = process.env.GA4_PROPERTY_ID;
    if (!propertyId) {
      lines.push('\n## GA4\n_Not configured_ — set GA4_PROPERTY_ID.');
    } else {
      try {
        const ev = await ga4Conversions(token, propertyId);
        lines.push('\n## GA4 conversions (last 7d)');
        const keys = Object.keys(ev);
        if (keys.length) for (const k of keys.sort((a, b) => ev[b] - ev[a])) lines.push(`- ${k}: **${ev[k]}**`);
        else lines.push('- No tracked conversion events recorded (check event names in GA4).');
      } catch (e) { lines.push(`\n## GA4\n_Error_: ${e.message.slice(0, 200)}`); }
    }
  } catch (e) {
    lines.push(`## Search Console + GA4\n_Auth failed_: ${e.message.slice(0, 200)}`);
  }
  console.log(lines.join('\n'));
}

main().catch((e) => { console.log(`## Search Console + GA4\n_Failed_: ${e.message.slice(0, 200)}`); });
