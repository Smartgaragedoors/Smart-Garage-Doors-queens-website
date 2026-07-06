# Decision Log

Append-only. Date, decision, why, files, SEO/conversion impact, risks, follow-up.
Newest first. (Decisions before 2026-07-06 are reconstructed from this session's
commit history so the log starts complete.)

---

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
