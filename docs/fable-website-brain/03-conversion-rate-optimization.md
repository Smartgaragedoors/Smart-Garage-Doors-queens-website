# Conversion Rate Optimization

## The conversion stack (what exists — extend, don't duplicate)

| Surface | What it is | Tracking |
|---|---|---|
| **Call** — primary everywhere | `tel:+19145576816` links | `trackPhoneClick(phone, source)` — ALWAYS pass a source label |
| **WhatsApp** — the "text us" channel | `getWhatsAppHref({message})` with page-specific prefilled text | `trackWhatsAppClick(source)` |
| **MobileStickyCTA** | Global bottom bar (App.tsx): WhatsApp / Call / Book. ONE instance only — rendering it in a page once stacked two bars | all three tracked |
| Hero quote form | Homepage; collapsed behind "Request service online" below lg so the hero stays call-first | `form_start`/`form_submit` |
| Book-now form | 4 required fields + optional ZIP/details; "Commercial / Property Management" option | tracked + CRM mirror |
| CommercialLeadForm | B2B "Set Up a Vendor Account" (company, portfolio size) on all 5 commercial pages | tracked |
| IssueReportForm (/report/) | 3-field QR-placard page for on-site staff | tracked |
| Photo estimate | WhatsApp photos → price before dispatch | tracked |

All forms: TCPA SMS-consent checkbox with the exact owner-approved wording (grep
"By checking this box" — copy verbatim, never paraphrase), submit through
`submitForm()` (email + CRM mirror + attribution), redirect to `/book-now/thank-you/`
(noindexed, fires GA4 conversion).

## Hero rules (the settled design — don't re-litigate)

Premium ink `#161D29`, Newsreader serif H1, pulsing-dot eyebrow, ONE solid orange
call CTA + quieter secondary, trust row (live rating · reviews · same-day). Unified
across Hero.tsx and all three page templates in 2026-07. H1 answers the visitor's
emergency ("Garage door stuck? We answer 24/7."), not brand slogans.

## The standing style rules (owner-approved "visual diet", 2026-07-03)

Sections `py-8 md:py-12`; H2 `text-2xl md:text-3xl`; **one solid orange CTA per
screen** — others outline; flat bordered cards (`border-gray-200 shadow-sm`); no
`hover:scale-105`; no new dark slab sections (CommercialStrip is the one deliberate
navy band). Premium local brand = fewer, calmer CTAs — conversion elements stay,
visual weight goes down.

## Placement rules

- **Trust early:** hero trust row is the single top trust moment (a second navy
  TrustBar under it was removed as redundant). Reviews section sits high on the
  homepage; real Google reviews only, rendered natively (never an iframe widget —
  performance + indexability decision).
- **Price expectation content converts** — publish honest ranges (repairs $150–$300,
  springs $175–$350…, installed-door ranges on cost guides) + "exact price confirmed
  upfront before any work begins." Never invent new prices; reuse published ones.
- **Emergency ≠ research.** Emergency paths: symptom → phone → proof, nothing else.
  Research pages (cost/comparison/commercial) get tables, FAQs, financing mention
  ("financing and 0% promotional options" — that exact framing, no invented terms).
- **FAQs near the bottom**, accordion, with FAQSchema — they answer objections after
  interest exists.
- **Risk reversal at the moment of hesitation:** FormTrustBadges above submit
  buttons ($0 estimate, licensed & insured, 1-yr warranty, license numbers).

## Friction rules

- Phone-first on mobile, always. Forms are the secondary path.
- Required fields: name, phone, what's-wrong. Everything else optional and labeled so.
- Every CTA names its outcome ("Request a Complimentary Estimate", "Call for
  Commercial Service") — not "Submit" / "Learn more" for money actions.
- Tap targets ≥ 44px on mobile (audit fixed several; keep them).

## Conversion checklist for every major page

- [ ] One clear H1 matching the visitor's intent
- [ ] Phone CTA visible without scrolling (mobile AND desktop)
- [ ] Exactly one solid-orange primary CTA per screenful
- [ ] Trust proof (live rating/reviews or licenses) within the first two screens
- [ ] A no-phone path (form or WhatsApp) for people who won't call
- [ ] All CTAs tracked with a page-specific source label
- [ ] Price expectation set honestly (range or "price before work begins")
- [ ] FAQ section addressing the page's top objections
- [ ] No arrival-time promises in our own copy (LSA)
- [ ] Mobile: no overflow, sticky CTA unobstructed, ≥44px targets
