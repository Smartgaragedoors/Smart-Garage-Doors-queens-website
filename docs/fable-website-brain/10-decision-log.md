# Decision Log

Append-only. Date, decision, why, files, SEO/conversion impact, risks, follow-up.
Newest first. (Decisions before 2026-07-06 are reconstructed from this session's
commit history so the log starts complete.)

---

## 2026-08-26 — GSC soft-404 / legacy-URL cleanup (validated external audit, then fixed)

- **Trigger:** owner brought a Search Console audit (external agent). Validated
  every claim against the live site before acting. Confirmed real: legacy
  `/services/…` + `/service-areas/<city>/` paths returned 200 with homepage HTML
  (soft 404s; GSC "Excluded by noindex" ×36 because the SPA hydrates NotFound
  with noindex over homepage prerender HTML). Rejected as wrong: the
  `/cable-roller-repair` trailing-slash/canonical claim — audited all 118
  prerendered pages, every canonical is self-referencing, and the no-slash form
  already 308s.
- **Root cause of the 200s:** the blanket SPA rewrite `/((?!api/)…)` →
  `/index.html` answered every unknown path with the homepage. Replaced with
  three scoped rewrites (`/lp/*`, `/report/`, `/book-now/thank-you/` — the only
  routed-but-not-prerendered pages). Everything else now falls through to
  Vercel's `404.html`, which `prerender.mjs` renders from the SPA's NotFound
  page (best-effort, non-gating, canonical stripped).
- **Redirects added (vercel.json):** `/services/{opener-repair, spring-replacement,
  emergency-repairs, cable-roller-repair, maintenance, repair}` → flat service
  URLs; generic `/service-areas/:city/` → `/:city/`; `/new-town-ct/` →
  `/newtown-ct/`. `/services/installation/` is a REAL page (Plan-Your-Project) —
  kept, not redirected.
- **Stale redirect REMOVED:** `/flushing-ny/` → `/queens-ny/` (added Jan 2026,
  before the Flushing page existed). Since the 2026-06-11 Tier-1 rollout it had
  been blocking a live, prerendered, sitemapped page — every internal link and
  the sitemap entry 308'd to Queens. This is the documented exception to "never
  remove a 301": remove one only when it conflicts with a live sitemap page.
- **Internal-link fix:** LocationPageTemplate's "Explore services" chips linked
  the four legacy `/services/…` URLs + `/garage-door-installation-new-york/` on
  every template location page — the reason Google kept rediscovering them.
  Now flat URLs.
- **robots.txt** cut from ~100 lines to disallows + AI-crawler blocks + sitemap;
  per-page `Allow:` inventory removed (did nothing, went stale, pointed at
  legacy URLs).
- **Blog orphan fix:** 22 posts had zero internal links from outside `/blog/`
  (`scripts/blog-orphan-report.mjs` is the repeatable check). Added contextual
  guide links via new `GuideLinks` section on 7 service pages, `relatedLinks`
  entries on 2, and 3 new `locationBlogMap` entries (Queens ×2, Westchester ×1).
- **Contact page:** enriched LocalBusiness JSON-LD (geo, 24/7 hours, areaServed,
  sameAs from `BUSINESS_INFO`), converted the plain-text service-area bullets to
  internal links, added footer `/contact/` link sitewide (it had none).
- **Risk/watch:** direct loads of any FUTURE route that is neither prerendered
  nor listed in the scoped rewrites will 404 — new SPA-only routes must be added
  to vercel.json rewrites (or the sitemap/prerender) in the same commit.

## 2026-07-13 — Batch 3: /commercial-northern-nj/ shipped (owner overrode the wait-gate)

- **Decision:** Built the Northern NJ commercial page ahead of observing
  `/commercial-long-island-ny/`'s indexing (the prior gate), on the owner's
  explicit "get everything done without stopping" directive. LI's page was
  still "URL unknown to Google" at ship time — indexing requests for both are
  queued (API blocked on a connector auth issue; owner requesting manually in
  the GSC UI meanwhile).
- Geography kept inside already-published commercial counties (Bergen,
  Passaic, Hudson, Essex + Elizabeth). Meadowlands/port-corridor references
  are real NJ industrial geography, not client claims. NJ HIC #13VH14195600
  cited from `business-info.ts`. Cross-linked from the commercial hub and the
  LI commercial page.

## 2026-07-13 — Batch 2: GA4 diagnosis, prerender CI gate, sitemap dedup, insulation page

- **GA4 finding (the big one):** `VITE_GA_MEASUREMENT_ID` is set nowhere — the
  app's GA4 initialization has never run in production (confirmed by grepping
  the live bundle: no `G-` id exists). All GA4 event data to date arrived only
  because `index.html`'s Google Ads `gtag()` is global and `trackEvent` calls
  piggyback through it. Owner fix documented in `09` (add the env var in
  Vercel). Do NOT "fix" this by hardcoding an invented id.
- **Prerender CI gate:** `prerender.mjs` previously exited 0 even with failed
  routes — a partial prerender would deploy silently. Now exits 1 on any
  failure, ok≠total, or <100 routes (sitemap-collapse floor). The header
  SAFETY comment was updated to match; risk #4 in `09` closed.
- **Sitemap duplicate:** `/commercial-long-island-ny/` was emitted twice
  (coreRoutes + service-area regex both match). Generator now skips
  service-area matches already emitted as core routes.
- **CTR quick-wins from live GSC data:** the homepage was ranking pos ~7.7 for
  "garage door insulation" (812 imp/28d, 0% CTR — title says "Same-Day
  Repair") with no page targeting the intent. Built
  `/garage-door-insulation/` (GuidePageTemplate; generic technical truths
  only, prices deferred to the LI cost guide; retrofit kits described
  neutrally — we did not claim a kit-install service). Retitled
  `/cable-roller-repair/` to lead with "Cable Replacement" (pos 5.4, 0 clicks
  while the homepage soaked the query).

## 2026-07-13 — /careers/ recruiting page (commit `938f929`)

- **Decision:** Built the careers page as a standalone page, NOT on
  GuidePageTemplate — that template's CTAs (estimate/book-now/service links)
  sell service, the wrong ask for a job applicant. Same visual system (ink
  hero, py-8 md:py-12, flat cards), recruiting-specific CTAs only.
- **Why:** Owner wants to hire technicians across the tri-state + eastern PA.
  Also a trust signal for commercial buyers (visibly hiring = established).
- **Key choices:** 3 JobPosting JSON-LD blocks (Google Jobs eligibility, free
  recruiting channel); `CareersApplicationForm` runs through the same
  `submitForm` pipeline with `serviceType: 'careers-application'` so
  applications land in email + CRM but are distinguishable from leads; inline
  success state instead of the service thank-you page; recruitment-specific
  contact-consent wording (the owner-approved TCPA text is service-request
  copy — flagged `TODO(owner)` to review before any automated SMS to
  applicants); no pay/benefits claims (never invent business facts).
- **PA rule respected:** PA appears only as a hiring region — no PA *service*
  pages until dispatch there is real (one intent, one page).
- **Follow-up:** owner review of consent wording; bump `DATE_POSTED` in
  `src/pages/careers/page.tsx` when openings genuinely change.

## 2026-07-13 — GSC MCP access live; first data-driven audit (commit `65b47da`)

- **Finding:** GSC read access now works in Claude Code sessions. 28d data:
  138 clicks / 67K imp / pos 17.2. The 45 "position drop" alerts were mostly
  a 2026-07-12 flood of low-position impressions, not a collapse. All 5 money
  pages verified serving full prerendered HTML.
- **Finding:** `/commercial-long-island-ny/` was "URL unknown to Google" a full
  week after shipping — programmatic indexing push blocked on 2 owner GCP
  steps (see `09`). Northern NJ commercial page stays on hold per the
  watch-LI-indexing decision.

## 2026-07-06 — Completed the page-1 commercial SEO plan (content depth + new Long Island page)

- **Decision:** Closed the gap between the 3 commercial pages shipped 2026-07-05
  and what the page-1 competitive research actually required. Added to
  `/loading-dock-door-repair/`: named counties (Bergen, Passaic, Hudson, Essex NJ;
  Rockland, Nassau, Suffolk, Staten Island NY), a "Dock Leveler Repair" card + FAQs
  naming Kelley/Nordock/Serco/Pentalift/Blue Giant/Rite-Hite, a "Who We Serve"
  section naming verticals (cold storage, pharma/manufacturing, logistics/3PL,
  property management), and expanded the existing anonymized "national logistics
  company" reference into a fuller case-study paragraph. Same treatment (named
  counties + manufacturer names + verticals) applied to
  `/rolling-steel-gate-repair/` (Cornell, Atlas, Wayne Dalton, Cookson, McKeon) and
  `/commercial-maintenance-contracts/`. Built new
  `/commercial-long-island-ny/` — the location-specific commercial page pattern
  the plan called for testing first, using real Long Island industrial geography
  (Hauppauge Industrial Park, Route 110/Melville/Farmingdale corridor, Bohemia,
  Ronkonkoma) — and cross-linked it from all 4 sibling commercial pages, the
  Header dropdown, and the sitemap.
- **Why:** the user asked directly whether the page-1 plan had been implemented;
  checking the actual code showed the container pages existed but none of the
  content that makes them rank did (verified: zero named equipment brands, only
  one generic county mention each, no case studies, no location-specific page).
- **SEO impact:** matches the verified page-1 recipe (1,200+ words of real
  regional copy, named counties, named brands) found in the 2026-07-05 competitive
  research. No new business facts invented — brand names follow the same
  "we service all major brands" pattern already used sitewide for openers/doors,
  not an authorized-dealer claim; the case study reuses the same already-approved
  anonymous reference, just given more prominence.
- **Files:** loading-dock-door-repair, rolling-steel-gate-repair,
  commercial-maintenance-contracts, commercial-garage-door-repair (relatedLinks),
  new commercial-long-island-ny, router/config.tsx, generate-sitemap.js,
  Header.tsx.
- **Risks:** low — additive content only, no removed claims or URLs. Verified tsc
  clean, build clean, prerender 124/124 (up from 123), live-checked in preview
  (mobile + desktop, no overflow, dropdown confirmed).
- **Follow-up:** real (or owner-anonymized) case studies still needed beyond the
  one reused reference; watch `/commercial-long-island-ny/` indexing before
  building the Northern NJ counterpart (per the plan's own sequencing).

## 2026-07-06 — Created the Fable Website Brain; scrubbed dead widget remnants; deleted dead components

- **Decision:** 11 brain docs in `docs/fable-website-brain/` grounded in the
  2026-07-04/05 audit + fixes, not aspirations. Removed the stale
  `widgets.sociablekit.com` dns-prefetch (index.html) and its CSP allowances
  (vercel.json) — no such widget exists in the codebase. Deleted dead
  `Testimonials.tsx` and `CityServiceAreaPage.tsx` (zero imports; deletion was
  deferred earlier only because the files carried another session's uncommitted
  edits — tree now clean).
- **SEO/conversion impact:** none direct; tighter CSP, less dead weight, and a
  knowledge base that stops future agents from re-auditing or re-breaking things.
- **Risks:** minimal — deletions verified by import-grep + tsc + build + prerender.
- **Follow-up:** owner actions #1–3 in `09-known-risks-and-next-actions.md`.

## 2026-08-23 (later) - CSP was silently killing GA4, Clarity, Meta Pixel, and Ads conversions

**The find:** GA4 showed 36 sessions / 28d while GSC showed 111 organic clicks in
the same window, and ~1 key event. Diagnosed live on production: gtag was
building *correct* GA4 hits (tid=G-GBBR220BZD, en=page_view/scroll) but every
single one was refused by `connect-src`. GA4 posts to `analytics.google.com`
(falling back to `www.google.com/g/collect`); the CSP only listed
`www.google-analytics.com`, which modern gtag does not use for measurement.

**Why the GA4 chart shows a cliff at ~2026-07-05 (traced 2026-08-23):**
1. Before ~Jul 5, GA4 was never installed by the app at all - `GA_MEASUREMENT_ID`
   was `VITE_GA_MEASUREMENT_ID || ''` and that env var was set nowhere, so
   `shouldTrack()` was always false. GA4 data arrived only *indirectly*, via the
   Google Ads tag (AW-17709307308) having the GA4 property configured
   server-side as an extra destination. See risk #5 in `09`, diagnosed 2026-07-13.
2. Around Jul 5 that indirect path stopped delivering. The trigger is Google-side
   (tag destination config / rollout) and is NOT visible in this repo - no commit
   in Jun 25-Jul 20 touched the GA path, and `connect-src` was byte-identical
   before and after the cliff.
3. `8e4d4e9` (Jul 14) did the right fix - hardcoded `G-GBBR220BZD` so analytics.ts
   loads GA4 directly. It appeared to do nothing, because...
4. ...the direct path posts to `analytics.google.com`, which the CSP blocked. So
   the chart stayed flat through August despite a correct install.
5. `9b64350` (Aug 23) unblocked it. Chain complete.

**The drop is measurement, not business.** GSC organic clicks over the same
windows: 109 (prior 28d) -> 111 (current 28d), flat. Real traffic did not fall.

**Blast radius - four tools, all dead:**
- GA4: no pageviews, no events, no conversions
- Google Ads + LSA conversion pings (googleads.g.doubleclick.net,
  www.googleadservices.com, www.google.com/ccm|rmkt/collect, ad.doubleclick.net)
- Microsoft Clarity (tag x8xeeozng1) - script refused, never recorded a session
- Meta Pixel (1451447012973445) - script refused

**Verified fixed** on production: page_view + a test call_click reached
analytics.google.com; `window.clarity` and `window.fbq` are live functions.

**Rules this adds:**
1. A CSP change is a tracking change. After editing CSP, load production and
   check the console for "Refused to connect" plus
   `performance.getEntriesByType('resource')` for `tid=G-...` hits.
2. `*.g.doubleclick.net` does NOT match `ad.doubleclick.net`. Use
   `*.doubleclick.net`.
3. Do not trust GA4 numbers from before 2026-08-23 - the property undercounts
   massively. GSC is the reliable historical source. Treat the GA4 baseline as
   starting 2026-08-23.
4. Rule 15 in `08-agent-rules.md` says "new third-party script => CSP update".
   The inverse also holds: a script already in `index.html` is not proof it runs.

## 2026-08-23 — GSC-driven pass: emergency page rebuild, pedestrian doors, blog refresh

- **GSC data (90d):** `/emergency-garage-door-repair/` had 62k impressions for
  "emergency garage door repair" at position 23.7 with 0 clicks — the biggest
  single lever on the site. Page was ~300 words, hardcoded "5.0 / hundreds of
  reviews", untracked CTAs, no SMS consent, not geo-anchored (ranking for Ohio
  towns). Rebuilt: symptom→"right now"→"our fix" triage cards, tri-state area
  chips, tracked CTAs, verbatim TCPA checkbox, live review count, 9 FAQs.
- "garage door insulation" 2,449 imp @7.2 went to the homepage; the dedicated
  page had only a footer link. Retitled for service+local intent; added to
  header nav and homepage Services grid (now 8 cards, 4-col on lg).
- Pedestrian doors page expanded with full synonym coverage (wicket / man door /
  pass door / personnel / walk-through) + commercial pass-door section. Owner is
  actively selling these (new installer found). Supporting comparison post
  `pedestrian-door-vs-side-door-garage` published.
- Three legacy hardcoded posts (~230 words each) rewritten in place at the same
  URL rather than spawning new ones: cost guide (ranked #5 for "garage door
  repair near me"), winter checklist, emergency triage guide.
- Header nav: replaced the duplicate `/services/installation/` link with
  Insulation + Pedestrian Doors (route kept; no URL removed).
- **Rule reinforced:** refresh a thin page that already ranks before creating a
  new URL for the same topic.

## 2026-07-05 — Page-1 plan for commercial/warehouse terms (workflow research)

- Multi-agent competitive research on live SERPs; synthesized plan (artifact +
  summarized in `09`). Key finding: dock/warehouse is a separate, smaller
  competitive set; page-1 recipe = 1,200+ words, named counties, named equipment
  brands; nobody does case studies. Weekly targets in `docs/growth-and-commercial-plan.md`
  remain the umbrella strategy.

## 2026-07-05 — GSC indexing fixes (commit `25dc282`)

- Added missing server-side 301s (greenwich-ct, bottom-seal, installation-stamford,
  greatneck variants — the exact URLs GSC flagged) and hardened prerender against
  empty-root writes (retry 3×, never write empty). Verified live that host/slash
  canonicalization already 301s correctly — the report's canonicalization bucket was
  stale crawl data, not a live bug. **Lesson encoded in rules: client-side redirects
  don't count; prerender is a single point of SEO failure.**

## 2026-07-05 — Commercial buildout (commits `8c1fa69`, `9ed3d1f`, `df5c037`, `a27e83c`)

- 3 new commercial pages (loading-dock, rolling-gate, maintenance-contracts) +
  CommercialLeadForm on all B2B pages + Commercial nav dropdown; SMS consent
  unified across all 5 lead forms (verbatim TCPA text); BrandsServed text-badge row
  (explicitly NO manufacturer logo images — trademark risk); financing badge on
  guide template; `/report/` QR page for on-site staff (noindexed).
  **Why:** owner priority = commercial jobs; B2B visitors want a callback path,
  not a residential booking form.

## 2026-07-05 — Responsive audit → removed global max-width CSS override (commit `b0d8c66`)

- A `@media(min-width:769px)` rule applying `max-width:100%` to every
  div/section/etc. silently beat Tailwind `max-w-*` utilities sitewide (the new
  commercial form rendered 1856px wide on a 1920px screen). Removed; verified zero
  mismatches at 320–1920px. **Lesson encoded in rules: no broad global CSS
  constraints; check computed styles before blaming components.**

## 2026-07-05 — Hero/template unification (commit `df5c037`)

- GuidePageTemplate + ComparisonPageTemplate heroes upgraded to the premium
  ink/serif system already on LocationPageTemplate/homepage; padding + H2 scale
  normalized to the visual-diet rules. One design system across all ~120 pages.

## 2026-07-04 — Multi-agent UI/UX audit: 26 findings, Critical+High+Medium fixed

- Highlights: bundle-splitting regex bug (57 city pages in one 287KB chunk) fixed;
  hardcoded "479 reviews" replaced by live-synced `aggregateRating` across 15
  files; fabricated location-page testimonials purged (real reviews or nothing);
  meta descriptions trimmed ≤160; 44px tap targets; footer Blog/Reviews links;
  iOS zoom fix on the standalone lead widget. **Lessons encoded throughout the
  brain: live review data, no fabricated proof, LSA time-language rules.**

## 2026-07-03 — Homepage "visual diet" (owner-approved)

- Sections `py-8 md:py-12`, H2 `text-2xl md:text-3xl`, one solid CTA per screen,
  flat cards, no scale hovers, TrustBar removed as redundant, quote form collapsed
  behind a tap on mobile. These are standing style rules (see `03`/`04`).
