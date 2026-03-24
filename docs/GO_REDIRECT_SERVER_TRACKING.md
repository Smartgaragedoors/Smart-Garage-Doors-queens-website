# Server-side `/go/:slug` tracking

## Request flow (production, Vercel)

1. User (or dashboard **Test Click**) opens `https://www.smartestgaragedoors.com/go/{slug}/` (trailing slash enforced by existing redirect rules).
2. Vercel matches `/go/:slug/` and **rewrites** internally to `/api/go/:slug` (URL in the browser stays `/go/...` until the **302** response).
3. **`api/go/[slug].ts`** runs:
   - Reads `slug` from the path.
   - Loads the row from Supabase `links` where `slug` matches and `is_active = true` (unless `LINKS_ACTIVE_FILTER=0`).
   - **GET:** inserts one row into `click_events`, then increments `links.click_count`.
   - **HEAD:** redirects only (no insert / no increment) — useful for bots that `HEAD` first without counting as a full click.
   - Sets **`X-Robots-Tag: noindex, nofollow, noarchive`**, **`Cache-Control: private, no-store, …`**, **`Pragma`**, **`Expires`** on the response (utility redirect, not indexable content).
4. Handler returns **302** to:
   - **`redirect_mode = direct`:** `destination_url` (relative or absolute), with incoming query params merged in when the key is not already set.
   - **`redirect_mode = landing`:** default `https://{host}/lp/whatsapp/?campaign={slug}&…` or a custom path/URL from `destination_url`, with `campaign` set if missing.
5. The browser follows the redirect to WhatsApp, an external URL, or `/lp/whatsapp/`. **No second Supabase click** is recorded by the landing page (GA events on the LP are separate).

## SPA fallback (local `vite` or missing rewrite)

If `/go/:slug` is served as `index.html`, React loads **`src/pages/go/[slug]/page.tsx`**, which immediately does  
`window.location.replace('/api/go/{slug}?…')`.  
Tracking still happens **only** in the serverless function (no `sendBeacon`).

## Environment variables (Vercel / server)

| Variable | Required | Purpose |
|----------|----------|---------|
| `SUPABASE_URL` or `VITE_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Server-only key; bypasses RLS for insert/update |
| `LINKS_ACTIVE_FILTER` | No | Set to `0` only if `links` has **no** boolean active column (not recommended) |
| `LINKS_IS_ACTIVE_FIELD` | No | Column name for the active flag (default `is_active`; use `active` if your schema uses that) |

**Never** expose `SUPABASE_SERVICE_ROLE_KEY` in `VITE_*` or client code.

## Supabase schema expectations

### `links`

- `id` (uuid)
- `company_id` (uuid)
- `slug` (text, unique per link)
- `destination_url` (text, nullable for some landing setups — landing mode still works with default `/lp/whatsapp/`)
- `redirect_mode` (`direct` | `landing`, case-insensitive; default treated as `landing`)
- `click_count` (integer)
- `is_active` (boolean, default filter `true`)

### `click_events`

Insert payload (field names aligned with your dashboard):

- `link_id`, `company_id`, `clicked_at` (ISO string)
- `referrer`, `device_type`, `browser`, `os`, `ip_masked`, `country`, `city`, `user_agent`

If your column set differs slightly, adjust the insert object in **`api/go/[slug].ts`** only.

## Files touched by this feature

| File | Role |
|------|------|
| `api/go/[slug].ts` | Serverless handler: lookup, track, redirect |
| `vercel.json` | Rewrites `/go/:slug` → `/api/go/:slug`; SEO headers on `/go/*` and `/api/go/*` |
| `src/components/seo/TrackingRouteMeta.tsx` | Robots meta for `/go` SPA fallback (no canonical) |
| `public/robots.txt` | `Disallow` for `/go/` and `/lp/` (see above) |
| `scripts/generate-sitemap.js` | Excludes `/go` and `/lp` paths from sitemap |
| `src/pages/go/[slug]/page.tsx` | SPA fallback → navigate to `/api/go/:slug` (no primary client tracking) |
| `src/router/config.tsx` | Route kept for fallback only |
| `.env.example` | Documents server Supabase vars |
| `package.json` | Adds `@supabase/supabase-js`, `@vercel/node` |

## SEO (tracking vs real pages)

These changes keep `/go/*` and default `/lp/*` from competing with service and city URLs:

| Layer | What was added |
|--------|----------------|
| **`robots.txt`** | `Disallow: /go/` (always). `Disallow: /lp/` while LPs are noindex by default; remove that line if you set `VITE_LP_WHATSAPP_INDEXABLE=true`. |
| **`vercel.json` headers** | `/go/:slug`, `/go/:slug/`, `/api/go/:slug`: `X-Robots-Tag: noindex, nofollow, noarchive` + non-cacheable `Cache-Control`. |
| **`api/go/[slug].ts`** | Same headers on **302**, **404**, and **503** so redirects and errors are not treated as normal HTML pages. |
| **`TrackingRouteMeta`** | SPA fallback for `/go/*` sets `<meta name="robots" content="noindex, nofollow, noarchive">` only — **does not** set a tracking URL as canonical. |
| **Sitemap** | `scripts/generate-sitemap.js` will never emit `/go/*` or `/lp/*` paths. |
| **`/lp/whatsapp/`** | `noIndex={!LP_WHATSAPP_INDEXABLE}` (default **noindex**). Set `VITE_LP_WHATSAPP_INDEXABLE=true` to allow indexing and adjust `robots.txt`. |
| **`DynamicMetaTags`** | When `noIndex` is true, robots directive includes **`noarchive`** (404, blog drafts, etc.). **Service pages are unchanged** (they do not use `noIndex`). |

Rewrites do not alter service-area or marketing routes; only `/go/:slug` is rewritten to the API first.

## Duplicate tracking

- **One** `click_events` row per **GET** to `/go/:slug` that hits the handler.
- Landing page analytics (e.g. GA `landing_page_view`) are independent and do not write to `click_events`.
