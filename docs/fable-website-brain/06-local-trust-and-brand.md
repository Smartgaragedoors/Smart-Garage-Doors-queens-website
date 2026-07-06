# Local Trust & Brand

Positioning: **premium local**, not cheapest-bid contractor. "A real person answers,
a real technician shows up, the price is agreed before work starts." Quiet
confidence, not urgency theater — that's why the visual diet removed heavy shadows,
scale-hovers, and stacked dark bands.

## Trust inventory — what's real and where it lives

| Signal | Source of truth | Rule |
|---|---|---|
| Google rating + review count | `BUSINESS_INFO.aggregateRating` ← `googleReviews.generated.json` (live sync from GBP by Post Automation) | Never hardcode counts; never round differently in schema vs UI |
| Review text | Same generated file (real reviews, 486+ on the main listing) | Verbatim only. Fabricated testimonials were found on some location pages and deliberately purged — `reviews={[]}` hides the section |
| Licensed & insured | `BUSINESS_INFO.licenses` (NYC DCWP + CT HIC labels) | Shown in FormTrustBadges + footer; never invent numbers for other states |
| 1-year parts & labor warranty | Published across service pages | Reuse exact phrasing |
| $0 service call with any repair | Hero offer, sitewide | Keep the "with any repair" qualifier |
| Price ranges | Published on service/cost pages (springs $175–$350, etc.) | Reuse existing figures only; "exact price confirmed upfront before any work begins" |
| Financing | "Financing and 0% promotional options are available" | That exact framing — no APR, provider, or terms were ever approved |
| Brands serviced | BrandsServed.tsx text badges (LiftMaster, Clopay, Amarr, CHI, Wayne Dalton, Raynor, Chamberlain, Genie) | Text wordmarks only — no manufacturer logo images (trademark risk, deliberate decision) |
| Real photos | Cloudflare-hosted job/tech photos (Dan's photo in WhyChooseUs, RecentWork) | Real photos only, descriptive alt text; no stock "smiling technician" |
| Commercial anchor client | A national logistics company, two states | **Never name them publicly** (no permission) — this is an owner rule |

## Language rules (owner-set, non-negotiable)

1. **Local-feel:** never disclose dispatch hub cities or drive times on location
   pages ("our Suffern-based tech is 40 minutes away" — banned). Use regional-
   technician framing: "our technician covering {area}."
2. **LSA-compliant time language:** no arrival/response-time promises in our own
   copy. "Call for an exact ETA," "same-day slots often available," never "we'll be
   there in X minutes." Customer quotes mentioning times are allowed.
3. **"Complimentary" in customer-facing CTAs** ("Request a Complimentary
   Estimate"); "free" stays in meta/FAQ copy where it reads naturally and matters
   for search.
4. **Honest hedges beat absolute claims:** "often same-day," "we aim for," "call to
   confirm availability" — the site converts on credibility, not superlatives.

## Commercial trust (different audience, different proof)

B2B pages lead with: COI on request, per-property invoicing + photo documentation,
priority dispatch, multi-site single-vendor, maintenance programs. Competitive
research (2026-07-05) showed ranking commercial competitors display license numbers
and decades-in-business — and none show case studies. The open plays: anonymized
case studies, named counties/boroughs, named dock-equipment brands. Payment terms
(net-30) were never confirmed — **don't publish payment terms without the owner.**

## What must never be invented

New reviews or paraphrased review text · license/insurance/certification claims ·
warranty terms beyond the published 1-year · prices not already on the site ·
guarantees ("fixed in one visit or free") · client names · years-in-business or
jobs-completed numbers (only use what `trust` fields already contain) · service
areas we don't serve · before/after photos that aren't ours. Unknown ⇒
`TODO(owner):` placeholder and move on.
