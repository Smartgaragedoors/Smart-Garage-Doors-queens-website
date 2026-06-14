/**
 * Build-time Google reviews fetcher (via GoHighLevel V2 API).
 *
 * WHY: We display REAL Google reviews in the native, prerendered reviews section
 * instead of a third-party iframe widget. An iframe widget would (a) hide review
 * text from the prerendered HTML so Google can't index it, (b) give zero
 * star-snippet benefit (Google ignores self-serving/embedded review schema),
 * (c) risk re-triggering the "multiple aggregate ratings" GSC error, and
 * (d) add layout shift + third-party JS. Fetching at build time and baking the
 * reviews into the static HTML keeps them real, fresh, indexable, fast, and
 * on-brand.
 *
 * SOURCE: GoHighLevel already connected to the Google Business Profile, so it
 * holds ALL reviews (Google caps its own public API at 5). We pull the newest
 * 5-star Google reviews from GHL's reputation API.
 *
 * SAFETY: If credentials are missing or the fetch fails, this is a NO-OP — it
 * leaves src/data/googleReviews.generated.json untouched so the build always
 * succeeds and the site falls back to the curated reviews already in the file
 * (or the hardcoded fallback in staticReviews.ts when the generated list is empty).
 *
 * SETUP (one time):
 *   GHL_API_TOKEN   — a GHL Private Integration token with the
 *                     "View Reviews" / reputation read scope
 *   GHL_LOCATION_ID — the Location ID for Smart Garage Doors in GHL
 * Set them in .env.local (same folder as package.json) or the environment, then:
 *   npm run fetch-reviews
 * Verify the JSON looks right, commit it, and the next deploy shows real reviews.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT_FILE = join(ROOT, 'src', 'data', 'googleReviews.generated.json');

// How many reviews to bake into the page (newest 5-star). 12 is plenty for a
// homepage section; the "read all on Google" button covers the rest.
const MAX_REVIEWS = 12;
const MIN_TEXT_LEN = 40; // skip rating-only / one-word reviews

// ---- tiny .env loader (no dependency) ------------------------------------
function loadEnvFile(name) {
  const p = join(ROOT, name);
  if (!existsSync(p)) return;
  try {
    const raw = require('node:fs').readFileSync(p, 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      const key = m[1];
      let val = m[2].replace(/^["']|["']$/g, '');
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch { /* ignore */ }
}
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
loadEnvFile('.env.local');
loadEnvFile('.env');

const TOKEN = process.env.GHL_API_TOKEN;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = 'https://services.leadconnectorhq.com';

function log(msg) {
  console.log(`[fetch-reviews] ${msg}`);
}

// ---- tolerant field mapping (GHL response shapes vary) -------------------
function pick(obj, keys) {
  for (const k of keys) {
    if (obj && obj[k] != null && obj[k] !== '') return obj[k];
  }
  return undefined;
}

function maskLastName(name) {
  const n = String(name || '').trim();
  if (!n) return 'Google Customer';
  const parts = n.split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0].toUpperCase()}.`;
}

function toTimestamp(v) {
  if (!v) return Math.floor(Date.now() / 1000);
  const ms = typeof v === 'number' ? v : Date.parse(v);
  if (Number.isNaN(ms)) return Math.floor(Date.now() / 1000);
  return Math.floor((ms > 1e12 ? ms : ms * 1000) / 1000);
}

function normalizeReview(r, i) {
  const name = pick(r, ['reviewerName', 'reviewer_name', 'name', 'author', 'authorName']);
  const text = pick(r, ['comment', 'content', 'text', 'review', 'body']);
  const rating = Number(pick(r, ['rating', 'stars', 'score']) ?? 5);
  const when = pick(r, ['dateOfReview', 'createdAt', 'created_at', 'date', 'updatedAt', 'time']);
  const platform = String(pick(r, ['platform', 'type', 'source']) ?? 'google').toLowerCase();
  return {
    id: pick(r, ['id', '_id', 'reviewId']) ?? `ghl-${i}`,
    author_name: maskLastName(name),
    rating: Number.isFinite(rating) ? rating : 5,
    text: String(text ?? '').trim(),
    time: toTimestamp(when),
    platform,
  };
}

async function ghlGet(path, params) {
  const url = new URL(`${GHL_BASE}${path}`);
  for (const [k, v] of Object.entries(params)) {
    if (v != null) url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Version: '2021-07-28',
      Accept: 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`GHL ${path} -> ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return res.json();
}

async function main() {
  if (!TOKEN || !LOCATION_ID) {
    log('GHL_API_TOKEN / GHL_LOCATION_ID not set — skipping (build keeps existing reviews).');
    return;
  }

  log('Fetching Google reviews from GoHighLevel…');
  let data;
  try {
    // GHL V2 reputation reviews. Filter to Google, newest first, 5-star.
    data = await ghlGet('/reputation/reviews', {
      locationId: LOCATION_ID,
      platform: 'google',
      limit: 60,
      sortBy: 'date',
      sortOrder: 'desc',
    });
  } catch (e) {
    log(`Fetch failed — keeping existing reviews. (${e.message})`);
    process.exitCode = 0; // never break the build
    return;
  }

  const rawList =
    (Array.isArray(data) && data) ||
    data.reviews ||
    data.data ||
    data.items ||
    [];

  const normalized = rawList
    .map(normalizeReview)
    .filter((r) => r.platform.includes('google'))
    .filter((r) => r.rating >= 5)
    .filter((r) => r.text.length >= MIN_TEXT_LEN)
    .sort((a, b) => b.time - a.time)
    .slice(0, MAX_REVIEWS);

  if (normalized.length === 0) {
    log('No qualifying reviews returned — keeping existing reviews.');
    return;
  }

  // Aggregate stats (if GHL exposes them; else derive from the page set).
  let reviewCount = null;
  let ratingValue = null;
  try {
    const stats = await ghlGet('/reputation/reviews/stats', { locationId: LOCATION_ID });
    reviewCount = pick(stats, ['totalReviews', 'total', 'count', 'reviewCount']) ?? null;
    ratingValue = pick(stats, ['averageRating', 'avgRating', 'rating', 'ratingValue']) ?? null;
  } catch {
    /* stats are optional */
  }

  const out = {
    reviews: normalized.map((r) => ({
      id: r.id,
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.time,
    })),
    reviewCount: reviewCount != null ? String(reviewCount) : null,
    ratingValue: ratingValue != null ? String(ratingValue) : null,
    fetchedAt: new Date().toISOString().slice(0, 10),
  };

  const prev = existsSync(OUT_FILE) ? await readFile(OUT_FILE, 'utf8') : '';
  const next = JSON.stringify(out, null, 2) + '\n';
  if (prev.trim() === next.trim()) {
    log(`No change — ${normalized.length} reviews already current.`);
    return;
  }
  await writeFile(OUT_FILE, next, 'utf8');
  log(`Wrote ${normalized.length} real Google reviews${reviewCount ? ` (total ${reviewCount}, avg ${ratingValue})` : ''}.`);
}

main();
