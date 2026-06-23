# Implementation Brief — Hero "Get a Free Quote" Form (Homepage)

**Date:** June 22, 2026
**For:** Planner agent → to produce an implementation prompt for the dev agent
**Repo:** Vite SPA + Puppeteer prerender, deploys on Vercel from `main`. Process: branch → Vercel preview → verify (build, prerendered HTML, no SEO/tracking regressions) → owner approves → merge. Never push to `main` without owner OK.

---

## 1. Objective

Add an above-the-fold lead-capture form to the homepage hero so ready-to-buy visitors can submit a quote request without navigating away. Goal: increase total leads (currently `form_submit` ≈ 5 / 28 days) by adding a second capture path beside the existing call/book CTAs.

**Success metric:** a new GA4 event stream (`hero_quote_form_start` / `hero_quote_form_submit`) showing incremental submissions, with no decline in `phone_click` or existing `form_submit`.

---

## 2. Hard constraints (do NOT regress these)

The homepage hero is `src/components/feature/Hero.tsx`. It currently uses a centered layout with: eyebrow, **single H1** (keyword + location-dynamic, serif), subheadline + dispatch line, **$0-service-call offer pill**, four tracked CTAs (call / book / WhatsApp / reviews), trust line, and a 4-stat bar. Preserve all of the following:

1. **Exactly one `<h1>` on the page.** The form card must use `<h2>`/`<h3>` or a plain styled heading — never an `<h1>`.
2. **The $0-service-call offer** stays visible and prominent.
3. **Phone CTA stays the visually dominant action.** The form is additive, not a replacement; the orange "Call (914) 557-6816" button must remain the most prominent element (phone clicks are the current weak point).
4. **All existing tracking** — `trackPhoneClick`, `trackBookNowClick`, `trackWhatsAppClick`, and the `cta_click` events — must remain intact and firing.
5. **`tel:` and WhatsApp links** unchanged; phone number `914-557-6816`.
6. **Location-dynamic behavior** via `useLocation()` (LocationContext) — H1/subheadline still localize.
7. **`data-hero-cta` attribute** on the CTA block — the mobile sticky CTA bar stays hidden while the hero CTAs are on screen (see `BookingCTABar`/sticky logic). If the form changes hero height/layout, re-verify this still works.
8. **Hero image LCP** — the background image is preloaded with `fetchPriority="high"`. Do not regress Largest Contentful Paint; the form must be lightweight HTML/CSS (no new heavy libraries).
9. **Prerendered HTML** must still contain the hero content and the new form markup (the form is static markup + React handlers; prerender via `scripts/prerender.mjs` must capture it).
10. **Schema/meta** unaffected (schema lives in SEO components, not the hero — just don't disturb it).

---

## 3. Proposed design

### Layout
- **Desktop (md+):** shift the hero from centered to a **two-column** layout: left column = existing content (eyebrow, H1, subheadline, $0 pill, CTAs, trust line, stat bar); right column = a **compact quote-form card** (solid/blurred panel with enough contrast over the photo, matching the ink/amber design system — e.g. `bg-white` card or a dark glass `bg-white/[0.07]` panel with high-contrast inputs; pick whichever passes contrast and looks premium).
- **Mobile:** stack. **Order: offer + H1 + primary phone CTA first, then the form card** below the CTAs (keep the call button as the first action on small screens). Do not push the phone button below the fold on mobile.
- Match the existing visual system: Newsreader serif for the card heading, amber accents (`#E8915A` / `#F2B98C` / `#D9641F`), rounded corners, subtle border — consistent with the current pills/stat cards.

### Form fields (keep it SHORT — fewer fields = higher completion)
- **Name** (text, required)
- **Phone** (tel, required)
- **Service** (select, required) — reuse the option set from `src/pages/book-now/page.tsx` (`emergency`, `garage-door-repair`, `spring-replacement`, `opener-repair`, `cable-roller-repair`, `installation`, `maintenance`, `other`)
- **ZIP or City** (text, optional) — helps routing; keep optional to reduce friction
- **Email** — OMIT in the hero (email is not required for dispatch; removing it lifts completion). Collect it later on the full book-now page.
- **SMS consent checkbox** (required if you want to text leads) — TCPA-style opt-in like competitors use. Wording must be owner-approved and reference the real business name and STOP/HELP instructions. (Decision needed — Section 7.)

### Heading & CTA copy
- Card heading (h2/h3): e.g. **"Get a Free Quote"** or **"Get Your $0 Service Call"**.
- Submit button: action-oriented — e.g. **"Get My Free Quote"** (test against "Request Service"). Reuse the orange button style but ensure the standalone *phone* button still reads as primary.
- Microcopy under the button: reuse trust line — "A real person answers, usually under 30 seconds · $0 service call with any repair" + Privacy link.

---

## 4. Submit wiring (reuse existing infrastructure — do not build new backend)

- **Reuse `submitForm(formData, 'Hero Quote Form')`** from `src/utils/formSubmission.ts`. This already handles Web3Forms → Formspree → Resend API → mailto fallback, AND mirrors the lead to the CRM webhook. No new endpoint needed.
- **Analytics:** import from `src/utils/analytics.ts`.
  - Fire **`trackFormStart('Hero Quote Form', 'hero_quote_form')`** once on first field interaction (mirror the `formStarted` ref pattern in `book-now/page.tsx`).
  - On success, fire **`trackFormSubmit('Hero Quote Form', 'hero_quote_form', { service_type })`**. Using a distinct `source` (`hero_quote_form`) lets us measure the hero form separately from the book-now form in GA4.
- **Success behavior (decision needed, Section 7):** either (a) redirect to `/book-now/thank-you/` (consistent with current flow, simplest, fires existing thank-you), or (b) inline success state in the card. Recommend (a) for consistency.
- **Error/fallback:** reuse the book-now page's status handling (`success` / `fallback` / `error` messages). Note the existing `mailto` fallback returns success — see Section 6 risk.
- **Reusability:** build this as a **new standalone component** (e.g. `src/components/conversion/HeroQuoteForm.tsx`) rather than inline, so it can later be reused on `LocationPageTemplate` city-page heroes too. Optionally render `FormTrustBadges` (`src/components/conversion/FormTrustBadges.tsx`) inside the card.

---

## 5. Tracking & measurement plan
- New GA4 events: `form_start` and `form_submit` with `source: 'hero_quote_form'` (distinct from `book_now`).
- Confirm in GA4 DebugView that both fire on the preview before merge.
- Mark `form_submit` as a Key Event in GA4 Admin (owner action) if not already.
- Post-launch: compare hero-form submits vs. book-now submits vs. phone clicks for 2–4 weeks; keep/iterate based on total lead lift with no phone-click decline.

---

## 6. Risks & regression checklist
- **Single H1:** verify only one `<h1>` after change (grep prerendered output).
- **Mobile phone CTA:** confirm the call button is still first/above the fold on mobile and the sticky `data-hero-cta` logic still hides/shows correctly.
- **LCP/CLS:** confirm hero image still LCP-priority; the form card must not cause layout shift (reserve its space).
- **mailto fallback caveat:** `submitForm` can "succeed" via `mailto` if no provider responds — production currently uses Web3Forms (verified working), but if that ever fails the hero form would silently fall back. Consider hardening separately (out of scope here, tracked elsewhere).
- **Prerender:** run `scripts/prerender.mjs` and confirm the hero form markup is in the static HTML and no console errors.
- **Tracking intact:** all four existing hero CTAs still fire their events.
- **Accessibility:** every input has a `<label>` (visible or sr-only), visible focus rings, and the form card meets WCAG AA contrast over the photo.

---

## 7. Open decisions the owner must make (resolve before implementation)
1. **SMS consent:** include the opt-in checkbox? If yes, provide owner-approved TCPA wording (business name, message frequency, STOP/HELP, data rates). Required if you intend to text leads.
2. **Fields:** confirm the field set (recommended: Name, Phone, Service, optional ZIP; no email in hero).
3. **Success behavior:** redirect to `/book-now/thank-you/` (recommended) vs. inline success.
4. **Scope:** homepage only first (recommended), or also add to city-page heroes (`LocationPageTemplate`) in the same change?
5. **Card style:** light card (`bg-white`) vs. dark glass panel — pick the one that best fits the premium look (planner can request a quick preview of both).

---

## 8. Deliverables for the dev agent
- New `src/components/conversion/HeroQuoteForm.tsx` (compact, reuses `submitForm` + `trackFormStart`/`trackFormSubmit`).
- Modify `src/components/feature/Hero.tsx` to a responsive two-column layout embedding the form, preserving all constraints in Section 2.
- Branch → Vercel preview → verify build, prerendered HTML (single H1, form present), GA4 events firing, no CTA/tracking regressions → owner approval → merge.

---

### One-paragraph summary the planner can hand back as a prompt seed
"Add a compact, premium 'Get a Free Quote' form to the homepage hero (`Hero.tsx`) as a new reusable `HeroQuoteForm` component. Desktop = two-column (content left, form card right); mobile = stacked with the phone CTA staying first/above the fold. Fields: Name, Phone, Service (reuse book-now options), optional ZIP, [SMS consent if owner approves] — no email. Wire submit to the existing `submitForm()` and fire `trackFormStart`/`trackFormSubmit` with `source:'hero_quote_form'`; on success redirect to `/book-now/thank-you/`. Preserve exactly one H1, the $0 offer, the dominant phone CTA, all existing CTA tracking, location-dynamic copy, the `data-hero-cta` sticky-bar behavior, and hero-image LCP. Ship via branch → preview → verify (single H1, prerendered form markup, GA4 events, no regressions) → owner approval → merge."
