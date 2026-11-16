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
- Expected output: **"143 ok, 0 failed"** (as of 2026-09-10) (count grows with new pages; it must
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
- **Mounting over prerendered HTML (2026-11-16):** the app mounts with
  `createRoot` — a client render, not hydration — so React's first commit
  replaces the prerendered DOM. Route components in `router/config.tsx` therefore
  use `lazy` from `router/lazyWithPreload.ts`, **not** `React.lazy`, and
  `main.tsx` fetches the matching page chunk *before* mounting. With plain
  `React.lazy` the first commit is the "Loading page..." spinner: on a throttled
  phone the page showed at ~2 s, turned into a spinner at ~4.7 s and came back at
  ~7 s, and the browser's LCP was the hero painted after the spinner. Keep new
  routes on the same `lazy` import. `hydrateRoot` is not a drop-in fix: the
  prerender is a DOM snapshot of a client render taken at desktop width.
- **Fonts:** Newsreader via Google Fonts with `display=swap`; system stack for body.
- **Third-party scripts:** Google tag (Ads + LSA), GA4, Clarity and Meta Pixel.
  Their **queues** (`dataLayer`/`gtag`, `fbq`, `clarity`) are defined at the top of
  `<head>` in index.html, so no call is ever lost. **The Google tag script
  (AW-17709307308) loads eagerly** from one static `<script async>` there, as it
  always has: it carries every call conversion — Ads, LSA and the GA4
  destination. **Clarity and the Meta Pixel** script files are downloaded by the
  small loader in the same block, on the visitor's first interaction or at
  window load + idle, whichever is first (2026-11-16; loaded eagerly they
  competed with the hero image). The request `analytics.ts` makes joins that
  trigger through `window.__sgdDeferTag`. (Branch `perf/mobile-lcp-2026-11`
  defers the Google tag as well; numbers for both in `10-decision-log.md`.) Rules:
  never put Clarity or the Pixel back as `<script async src>` in `<head>`; never listen for
  `scroll` in the capture phase there (the homepage photo carousel emits one by
  itself and would release the tags a second into every load); do not add a
  fixed multi-second delay with no interaction trigger — that lost
  bounce-to-call visits once (2026-08-12). **No third-party review/chat
  widgets** — the sociablekit widget was removed; its dns-prefetch and CSP
  entries were scrubbed 2026-07-06. Adding any new third-party script requires a
  CSP update in vercel.json (script-src/connect-src/frame-src) and a performance
  justification.
- **Prerender must not bake tag scripts:** `prerender.mjs` sets
  `window.__SGD_PRERENDER__`, and the loader then appends nothing. Without it
  `page.content()` freezes the injected `<script>` tags into every static page
  as eager downloads (before 2026-11-16 every page carried fbevents.js, the
  Clarity tag and a pinned clarity.js build that way). After a build, every
  page in `out/**/*.html` should contain exactly one `<script src>` for
  googletagmanager (the static Google tag) and none for facebook or clarity.
- **Desktop-only markup is in the mobile HTML too:** the prerender runs at 800 px
  wide, so anything rendered only at `md:` and up is still in the static HTML a
  phone parses. An `<img loading="eager">` inside a `hidden md:block` parent is
  downloaded by phones (RecentWork's desktop carousel cost ~270 KB that way);
  use `loading="lazy"` for anything below the fold.
- **CLS:** hero uses fixed min-heights; images carry width/height; `content-
  visibility:auto` on images via index.css. Remix Icon boxes are reserved in
  index.css (`:where([class^="ri-"], …)::before`, 1em) because remixicon.css and
  its font arrive late on purpose — without the rule every icon pops from 0 to
  1em at once, the header grows 4 px and icon+label rows re-wrap. Known gaps:
  the Newsreader swap still moves the hero on narrow phones (H1 wraps to three
  lines in the fallback serif, two in Newsreader), and `content-visibility:auto`
  lets an image whose width/height attributes disagree with the file change
  height as it scrolls into range.

## Core Web Vitals targets

LCP ≤ 2.5s (hero image/H1 — protect the preload order), CLS < 0.1, INP < 200ms.
No lab-metrics CI exists; PageSpeed Insights spot-checks after significant changes
are the current practice (documented gap in `09`).

## Pre-deploy checklist

1. `npm run typecheck` clean
2. `npm run build` clean; sanity-check chunk list if vite config changed
3. `npm run prerender` — all routes ok, count as expected
4. If routes changed: sitemap contains the new URL; redirect added for any removed URL
5. If metadata/schema changed: view-source one prerendered page in `out/` and
   confirm title/canonical/schema present in the raw HTML
6. Push to `main` → Vercel deploys. After indexing-relevant changes: resubmit
   sitemap in GSC and Request Indexing on the affected URLs (owner task, ~10/day quota)
