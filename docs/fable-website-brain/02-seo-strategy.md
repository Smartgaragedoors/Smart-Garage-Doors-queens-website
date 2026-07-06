# SEO Strategy

Deeper strategy docs already exist — this file is the operating rules; those are the
research: `docs/growth-and-commercial-plan.md` (competitor analysis, 30/60/90),
`docs/premium-market-strategy.md`, `docs/gbp-playbook.md` (Google Business Profile —
dashboard work, not code).

## Keyword architecture

- **Primary:** garage door repair, garage door installation, garage door opener
  repair/installation, spring replacement, cable & roller repair — each owns a
  service page under a clean slug (`/spring-replacement/`, `/opener-repair-installation/`…).
- **Local modifiers:** `{service} + {city}` is owned by ~57 location pages at
  root-level slugs (`/queens-ny/`, `/great-neck-ny/`…). Never `/service-areas/{city}`
  in URLs — those legacy paths 301 to root slugs.
- **Commercial (the growth bet):** commercial garage door repair, loading dock door
  repair, rolling steel gate repair, warehouse overhead door, maintenance contracts.
  Competitive research (2026-07-05, artifact + plan) found this is a *separate,
  smaller competitive set* whose page-1 recipe is: 1,200+ words of real regional
  copy, **named counties/boroughs** (not "tri-state area"), **named equipment
  brands** (Kelley, Nordock, Serco, Pentalift, Blue Giant, Rite-Hite), license/COI
  trust signals. No competitor does case studies — open gap.
- **High-intent money pages:** cost guides (`/garage-door-replacement-cost-nassau-county/`
  etc.), comparison pages (`/vs-precision-garage-door/`), buyer guides. These target
  "how much / best / vs" searches.
- **Blog** (`content/blog/*.json` → auto-wired to routes/sitemap/prerender): support
  content that internally links UP to service/location/commercial pages. The Post
  Automation app publishes here via GitHub — JSON format, not components.

## Page-role rules

- **Homepage** ranks for brand + "garage door repair" broad; it's the entity hub
  (LocalBusiness/Organization/WebSite schema) — don't stuff it with city terms.
- **Service page** = one service, tri-state-wide, with service-area links down.
- **Location page** = all services, one city, LocalBusinessSchema with city geo.
- **One intent, one page.** Never create a second page for a keyword an existing
  page targets — improve the existing one.

## On-page rules

- **Titles:** ≤ 60 chars, `{Service/City} | {differentiator} | Smart Garage Doors`
  pattern. **Meta descriptions ≤ 160 chars** (audit found 5 over; Google truncates).
  Interpolate live review data: `${BUSINESS_INFO.aggregateRating.ratingValue}★
  ${...reviewCount} reviews` — never literal counts.
- **H1:** exactly one, contains the service/city phrase naturally. H2s
  `text-2xl md:text-3xl` (standing rule) and phrased as things humans ask.
- **Alt text:** describes the actual image ("Technician Dan replacing a torsion
  spring in Queens"), never keyword strings. Decorative icons: `aria-hidden`.
- **Canonicals:** always via `buildCanonical()` from `src/config/canonical.ts` —
  https, www, trailing slash. Never hand-write a canonical URL.
- **Schema:** components in `src/components/seo/` (LocalBusiness, Organization,
  WebSite, FAQSchema, Breadcrumbs). FAQ schema only when the FAQs are visible on
  the page. Ratings in schema come from `BUSINESS_INFO.aggregateRating` (live).

## Duplicate/thin-content discipline (the real risk here)

Google's scaled-content policies suppress near-identical city-swap pages. With 57
location pages this is our #1 exposure. Every location page must carry genuinely
unique material: real neighborhood names, city-specific FAQs, real local reviews
when available (`reviews={[]}` hides the section — NEVER fabricated testimonials;
that was purged deliberately). Full rules in `07-service-area-page-system.md`.

## Rules future AI models must follow before creating or editing SEO pages

1. New page ⇒ same commit wires: route in `src/router/config.tsx`, entry in
   `scripts/generate-sitemap.js` coreRoutes (service-area pages are auto-scraped),
   metadata via the template props, then verify prerender count increments.
2. Deleted/renamed page ⇒ 301 in `vercel.json` **redirects** (server-level). A
   React `<Navigate>` is a UX nicety, not an SEO redirect — Google gets the shell.
3. Never noindex a revenue page. noindex is only for utility pages (/report/,
   thank-you, /lp/* paid landers) — set via `DynamicMetaTags noIndex`, and they're
   excluded from sitemap + prerender automatically by path convention (`/go/`, `/lp/`).
4. Check GSC-known problems before "fixing" indexing: the missing-301 and
   empty-prerender causes were already found and fixed (2026-07-05, commit
   `25dc282`) — remaining "crawled not indexed" is likely content quality, not tech.
5. Facts in copy (prices, warranty, licenses, service claims) must already exist
   elsewhere on the site or come from the owner. Unknown ⇒ TODO placeholder.
6. No keyword stuffing, no fake cities, no invented reviews — ever.
