# Technical SEO & Performance

## The pipeline that makes SEO work at all

This is a client-side React SPA. Crawlers get real HTML only because of the
post-build prerender:

```
npm run build  →  out/ (SPA bundle + generated sitemap.xml)
npm run prerender  →  Puppeteer renders every sitemap route to out/<route>/index.html
```

- `scripts/generate-sitemap.js`: coreRoutes list + auto-scrape of service-area
  paths + blog JSON. **New non-location page ⇒ add to coreRoutes** or it won't be
  prerendered.
- `scripts/prerender.mjs`: blocks analytics/geolocation/3rd-party hosts during
  render (no double-counting, location-neutral pages); waits for content + canonical
  + title; **retries empty roots 3× and refuses to write an empty shell** (hardened
  2026-07-05 after intermittently shipping a contentless homepage — an SEO
  near-miss). `/go/` and `/lp/` paths are excluded (noindex utility/ad pages).
- Expected output: **"123 ok, 0 failed"** (count grows with new pages; it must
  never drop unexpectedly).

## URL / redirect / canonical rules

- Canonical form: `https://www.smartestgaragedoors.com/{slug}/` — https, www,
  trailing slash. Always build via `buildCanonical()` (`src/config/canonical.ts`).
- `vercel.json` enforces: host canonicalization (bare→www, old subdomains),
  trailing-slash normalization, and ~67 legacy 301s (exported to
  `docs/redirect-map.csv`). **A React `<Navigate>` is not an SEO redirect** — every
  legacy URL needs a server-side entry here. Missing ones caused real GSC
  "excluded by noindex" damage (fixed 2026-07-05; greenwich-ct, bottom-seal, etc.).
- 404s render NotFoundPage with noindex. Never remove a redirect without checking
  GSC first.

## Metadata & schema

- `DynamicMetaTags` on every page: title (≤60), description (≤160, interpolate live
  review data), canonical, OG tags; `noIndex` prop writes an explicit robots meta
  both ways. Default OG image is the hero-van asset.
- Schema components: `LocalBusinessSchema` (homepage + location pages, with city
  geo), `OrganizationSchema` + `WebSiteSchema` (homepage), `FAQSchema` (only where
  FAQs are visible), `Breadcrumbs`. Ratings pull from `BUSINESS_INFO.aggregateRating`
  (live-synced) — schema and visible UI must always show the same numbers.

## Performance rules

- **Images:** Cloudflare Images (`src/data/cloudflareImages.ts`, `getCFImageUrl`)
  with local fallbacks. Remaining wp-content-hosted images (2 hero backgrounds, 6
  legacy blog images) are a known TODO blocked on Cloudflare upload access. Hero
  image is preloaded at the TOP of `<head>` (before analytics scripts) with
  `fetchpriority="high"`; everything below the fold lazy-loads.
- **JS:** per-page code splitting via `vite.config.ts` manualChunks — the regex
  must capture the full nested path; a past bug collapsed all 57 city pages into
  one 287KB chunk. Heavy components (Reviews) lazy via `React.lazy`. Check chunk
  output after build changes.
- **Fonts:** Newsreader via Google Fonts with `display=swap`; system stack for body.
- **Third-party scripts:** GA4/Clarity/Meta Pixel in index.html; nothing render-
  blocking above the hero preloads. **No third-party review/chat widgets** — the
  sociablekit widget was removed; its dns-prefetch and CSP entries were scrubbed
  2026-07-06. Adding any new third-party script requires a CSP update in
  vercel.json (script-src/connect-src/frame-src) and a performance justification.
- **CLS:** hero uses fixed min-heights; images carry width/height; `content-
  visibility:auto` on images via index.css.

## Core Web Vitals targets

LCP ≤ 2.5s (hero image/H1 — protect the preload order), CLS < 0.1, INP < 200ms.
No lab-metrics CI exists; PageSpeed Insights spot-checks after significant changes
are the current practice (documented gap in `09`).

## Pre-deploy checklist

1. `npx tsc --noEmit` clean
2. `npm run build` clean; sanity-check chunk list if vite config changed
3. `npm run prerender` — all routes ok, count as expected
4. If routes changed: sitemap contains the new URL; redirect added for any removed URL
5. If metadata/schema changed: view-source one prerendered page in `out/` and
   confirm title/canonical/schema present in the raw HTML
6. Push to `main` → Vercel deploys. After indexing-relevant changes: resubmit
   sitemap in GSC and Request Indexing on the affected URLs (owner task, ~10/day quota)
