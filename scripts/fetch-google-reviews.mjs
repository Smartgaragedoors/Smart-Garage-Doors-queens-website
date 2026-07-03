/**
 * Build-time Google reviews fetcher — via the Google Business Profile API.
 *
 * WHY: We show REAL Google reviews natively (prerendered HTML), not an iframe
 * widget. Native = indexable, fast, no layout shift, on-brand. Unlike the public
 * Places API (5 reviews max), the Business Profile API returns ALL reviews plus
 * the true total count + average — exactly what we display ("4.9 ★ · 479
 * reviews on Google").
 *
 * AUTH: OAuth refresh token (one-time setup via scripts/google-oauth-setup.mjs).
 *
 * SAFETY: If anything is missing or fails, this is a NO-OP — it leaves
 * src/data/googleReviews.generated.json untouched so the build always succeeds
 * and the site falls back to the curated reviews in staticReviews.ts.
 *
 * REQUIRES in .env.local (or deploy env):
 *   GOOGLE_OAUTH_CLIENT_ID
 *   GOOGLE_OAUTH_CLIENT_SECRET
 *   GOOGLE_OAUTH_REFRESH_TOKEN
 * Optional (skips auto-discovery if set):
 *   GOOGLE_BUSINESS_ACCOUNT_ID   e.g. accounts/1234567890
 *   GOOGLE_BUSINESS_LOCATION_ID  e.g. locations/9876543210
 *
 * RUN:  node scripts/fetch-google-reviews.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT_FILE = join(ROOT, 'src', 'data', 'googleReviews.generated.json');

const MAX_REVIEWS = 12;     // how many cards to bake into the page (newest, best)
const MIN_TEXT_LEN = 40;    // skip rating-only / one-word reviews
const MIN_RATING = 5;       // only show 5-star on the homepage

function log(m) { console.log(`[fetch-google-reviews] ${m}`); }

// ---- tiny .env loader ----------------------------------------------------
function loadEnv(name) {
  const p = join(ROOT, name);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const key = m[1];
    const val = m[2].replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnv('.env.local');
loadEnv('.env');

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
let ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;   // accounts/123
let LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID; // locations/456

const STAR_WORD = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

function maskLastName(name) {
  const n = String(name || '').trim();
  if (!n) return 'Google Customer';
  const parts = n.split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0].toUpperCase()}.`;
}

function toTimestamp(v) {
  const ms = v ? Date.parse(v) : NaN;
  return Number.isNaN(ms) ? Math.floor(Date.now() / 1000) : Math.floor(ms / 1000);
}

async function getAccessToken() {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`token refresh ${res.status}: ${JSON.stringify(json)}`);
  return json.access_token;
}

async function gget(url, accessToken) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  const text = await res.text();
  if (!res.ok) {
    const hint = res.status === 429 || /quota|rate/i.test(text)
      ? ' — looks like a QUOTA limit. The Business Profile APIs default to 0 req/min; request a quota increase in Google Cloud (APIs & Services → Business Profile API → Quotas).'
      : '';
    throw new Error(`GET ${url} -> ${res.status}: ${text.slice(0, 300)}${hint}`);
  }
  return text ? JSON.parse(text) : {};
}

async function discover(accessToken) {
  if (ACCOUNT_ID && LOCATION_ID) return;
  log('Auto-discovering account + location…');
  const accts = await gget('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', accessToken);
  const accounts = accts.accounts || [];
  if (!accounts.length) throw new Error('No Business Profile accounts visible to this token.');
  if (!ACCOUNT_ID) ACCOUNT_ID = accounts[0].name; // accounts/123
  if (!LOCATION_ID) {
    const locs = await gget(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${ACCOUNT_ID}/locations?readMask=name,title&pageSize=100`,
      accessToken
    );
    const list = locs.locations || [];
    if (!list.length) throw new Error(`No locations under ${ACCOUNT_ID}.`);
    LOCATION_ID = list[0].name; // locations/456
  }
  log(`Using ${ACCOUNT_ID} / ${LOCATION_ID}`);
}

async function fetchAllReviews(accessToken) {
  // Reviews still live on the legacy v4 endpoint (not migrated to v1).
  const base = `https://mybusiness.googleapis.com/v4/${ACCOUNT_ID}/${LOCATION_ID}/reviews`;
  let pageToken = null;
  let totalReviewCount = null;
  let averageRating = null;
  const all = [];
  do {
    const url = new URL(base);
    url.searchParams.set('pageSize', '50');
    url.searchParams.set('orderBy', 'updateTime desc');
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const data = await gget(url.toString(), accessToken);
    if (totalReviewCount == null && data.totalReviewCount != null) totalReviewCount = data.totalReviewCount;
    if (averageRating == null && data.averageRating != null) averageRating = data.averageRating;
    for (const r of data.reviews || []) all.push(r);
    pageToken = data.nextPageToken || null;
  } while (pageToken && all.length < 500); // safety cap
  return { all, totalReviewCount, averageRating };
}

function normalize(r, i) {
  const rating = STAR_WORD[r.starRating] ?? 0;
  return {
    id: r.reviewId || `g-${i}`,
    author_name: maskLastName(r.reviewer?.displayName),
    rating,
    text: String(r.comment || '').trim(),
    time: toTimestamp(r.updateTime || r.createTime),
  };
}

async function main() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    log('OAuth creds not set — skipping (build keeps existing reviews).');
    return;
  }

  let accessToken;
  try {
    accessToken = await getAccessToken();
    await discover(accessToken);
  } catch (e) {
    log(`Setup failed — keeping existing reviews. (${e.message})`);
    process.exitCode = 0;
    return;
  }

  let result;
  try {
    result = await fetchAllReviews(accessToken);
  } catch (e) {
    log(`Fetch failed — keeping existing reviews. (${e.message})`);
    process.exitCode = 0;
    return;
  }

  const { all, totalReviewCount, averageRating } = result;
  log(`Pulled ${all.length} reviews (Google reports total ${totalReviewCount ?? '?'}, avg ${averageRating ?? '?'}).`);

  const cards = all
    .map(normalize)
    .filter((r) => r.rating >= MIN_RATING)
    .filter((r) => r.text.length >= MIN_TEXT_LEN)
    .sort((a, b) => b.time - a.time)
    .slice(0, MAX_REVIEWS);

  if (!cards.length) {
    log('No qualifying review cards — keeping existing reviews.');
    return;
  }

  const out = {
    reviews: cards,
    reviewCount: totalReviewCount != null ? String(totalReviewCount) : null,
    ratingValue: averageRating != null ? String(Number(averageRating).toFixed(1)) : null,
    fetchedAt: new Date().toISOString().slice(0, 10),
  };

  const prev = existsSync(OUT_FILE) ? await readFile(OUT_FILE, 'utf8') : '';
  const next = JSON.stringify(out, null, 2) + '\n';
  if (prev.trim() === next.trim()) {
    log('No change — reviews already current.');
    return;
  }
  await writeFile(OUT_FILE, next, 'utf8');
  log(`Wrote ${cards.length} real Google reviews (total ${out.reviewCount}, avg ${out.ratingValue}).`);
}

main();
