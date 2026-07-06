# Start Here — The Fable Website Brain

Written 2026-07-06 by Fable 5 after a full multi-agent audit and hands-on improvement
session across this entire site. **Read this file and `08-agent-rules.md` before
changing anything.**

## What this website is

smartestgaragedoors.com — the lead engine for Smart Garage Doors, a real garage door
repair/installation company serving the NY/NJ/CT tri-state (Queens, Brooklyn, Bronx,
Long Island, Westchester, northern/central NJ, Fairfield County CT). Every page
exists to make a visitor **call, WhatsApp-text, or request service** — or to rank so
that a future visitor can. The owner's stated priority: be #1 in the tri-state,
especially for **commercial work** (warehouses, loading docks, property managers) —
higher tickets, recurring accounts. See `docs/growth-and-commercial-plan.md`.

## Stack in one paragraph

Vite + React + TypeScript SPA, Tailwind. **SEO depends on a post-build Puppeteer
prerender** (`scripts/prerender.mjs`): after `vite build`, every sitemap route is
rendered to static HTML in `out/` so crawlers get real content from a client-side
app. Vercel hosting (`vercel.json` = redirects/headers/CSP — the 301 layer matters
for SEO). Leads flow through `src/utils/formSubmission.ts`: Web3Forms/Formspree/
Resend email + a fire-and-forget mirror to the company CRM. GA4 + Clarity + Meta
Pixel via `src/utils/analytics.ts`. ~123 prerendered pages, sitemap auto-generated
by `scripts/generate-sitemap.js`.

## What matters most (in order)

1. **The phone number works everywhere**: (914) 557-6816, from `BUSINESS_INFO` in
   `src/config/business-info.ts` — the single source of business facts (name, NAP,
   licenses, aggregate rating). The review count/rating there is **live-synced** from
   Google via `src/data/googleReviews.generated.json` (committed by the Post
   Automation app) — never hardcode "479 reviews" again; that bug took 15 files to fix.
2. **Conversion surfaces**: hero (call + collapsible quote form), MobileStickyCTA
   (WhatsApp / Call / Book — rendered globally in App.tsx, don't add a second one),
   book-now form, CommercialLeadForm on B2B pages, /report/ QR page for on-site staff.
3. **The prerender pipeline.** If it breaks, Google sees empty pages. It retries
   empty roots 3× and refuses to write an empty shell — keep that behavior.
4. **Ranking pages**: homepage, ~57 location pages, service pages, 5 commercial
   pages, ~35 blog posts. Their URLs may already rank — never delete/rename without
   a 301 in `vercel.json` (client-side `<Navigate>` alone is NOT enough for Google;
   we found and fixed exactly that gap).

## Dangerous areas — don't touch casually

| Area | Why |
|---|---|
| `scripts/prerender.mjs` + `generate-sitemap.js` | The entire SEO surface |
| `vercel.json` redirects | Historical 301s; removing one resurrects a dead URL Google knows |
| `business-info.ts` aggregateRating wiring | Live review sync; 15+ consumers |
| `formSubmission.ts` | Every lead passes through it (email + CRM mirror) |
| `index.css` global rules | A "harmless" global max-width rule silently broke `max-w-*` sitewide for months |
| TCPA SMS-consent wording on forms | Legal text, owner-approved — copy verbatim, never paraphrase |
| Location-page proximity language | Owner rule: never disclose hub cities/drive times (see `06-local-trust-and-brand.md`) |

## What was verified good (2026-07-06) — don't re-audit from scratch

Premium unified hero across all three page templates; py-8/md:py-12 rhythm and H2
scale standardized; live reviews native (never an iframe widget); schema
(LocalBusiness/Organization/WebSite/FAQ/Breadcrumb); tracked CTAs everywhere; SMS
consent on all 5 lead forms; brands-served row; financing badges; responsive clean at
320/375/768/1280/1920 with no horizontal overflow; 123/123 pages prerender; bundle
split per-page (a regex bug once merged all 57 city pages into one 287KB chunk — fixed).

## What to improve first (already prioritized — don't re-derive)

`09-known-risks-and-next-actions.md` has the top-10. Headline items: activate the
Search Console/GA4 data connection (code built in the Post Automation app, owner
steps pending), migrate remaining wp-content images to Cloudflare, execute the
commercial content plan in `docs/page1-commercial-seo-plan` (see the growth plan doc).

## How to think like a strong engineer here

- **Verify, then change, then verify.** `npx tsc --noEmit` → `npm run build` →
  `npm run prerender` (expect "123 ok, 0 failed" — count must never drop).
- **Grep before building** — most "missing" features exist (audit found the close
  ones). Check `src/components/conversion/` and `src/components/feature/` first.
- **Facts come from the codebase, not imagination.** Prices, warranty, license
  numbers, review quotes — reuse what's already published; placeholder + TODO for
  anything new. Real review text comes only from `googleReviews.generated.json`.
- Read the other brain files for your task: intent `01`, SEO `02`, CRO `03`,
  patterns `04`, technical `05`, trust `06`, service areas `07`.
