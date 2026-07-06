# Page & Component Patterns

The prime rule: **new pages are built from the three templates + existing conversion
components.** Don't hand-roll page layouts — consistency is what keeps 120+ pages
maintainable.

## The three page templates (`src/components/feature/`)

All three share the premium hero (ink `#161D29`, Newsreader serif H1, pulsing-dot
eyebrow, orange call CTA, trust row) — unified 2026-07-05; don't fork the style.

1. **`LocationPageTemplate.tsx`** — all ~57 city pages. Props drive everything:
   metaTitle/metaDescription/keywords/slug, cityName/state/geo (feeds
   LocalBusinessSchema), heroImage, neighborhoods[], reviews[] (empty array HIDES
   the section — never fabricate to fill it), faqs[], optional comparisonRows /
   services / advantages / mapEmbedUrl / per-location phone override (Suffern's 845
   number pattern).
2. **`GuidePageTemplate.tsx`** — service pages, cost guides, commercial pages.
   Sections: hero → trust bar → optional CommercialLeadForm
   (`showCommercialLeadForm` — commercial pages only) → intro paragraphs → optional
   costTable → criteria cards → prose sections (paragraphs + check-bullets) →
   bottomLine → FAQ accordion → relatedLinks pills → final CTA (call + WhatsApp or
   book) → ServiceLinks footer block.
3. **`ComparisonPageTemplate.tsx`** — vs-competitor pages: hero → intro → comparison
   table (ours vs theirs) → bottom line → FAQ → final CTA.

**Blog** is data, not components: `content/blog/{slug}.json` (title, description,
slug, image, keywords, h1, intro, sections[], faq[], cta). Routes/sitemap/prerender
pick it up automatically. The Post Automation app publishes here.

## Homepage structure (settled after the visual-diet redesign — change with care)

Hero (call + collapsible quote form) → CommonProblems symptom links → WhyChooseUs
(3 pillars + real tech photo) → Reviews (live Google) → BrandsServed → Services grid
→ RecentWork photos → BookingCTABar (light band) → CommercialStrip (the ONE navy
band) → HomeFAQ → [desktop-only: VideoSection, About] → CoverageStrip (city links)
→ [desktop-only: Contact form] → Footer. Mobile hides the long secondary content to
keep the phone funnel short — respect those `hidden md:block` decisions.

## Shared component rules

- **Header:** logo, nav with Services/Service Areas/Commercial dropdowns (+ "View
  All Service Areas →"), phone always visible, mobile Call button ≥44px. Dropdowns
  need `overflow: visible` — there's CSS in index.css protecting this; test after
  any header change.
- **Footer:** NAP (must match GBP exactly), service links, area links, Blog +
  Customer Reviews links, licenses.
- **Reviews:** `Reviews.tsx` renders real Google reviews from the generated JSON,
  natively (never an iframe widget). Location pages show city-tagged real reviews
  or nothing.
- **Forms:** see `03-conversion-rate-optimization.md`. All new forms: submit via
  `submitForm()`, include the verbatim TCPA checkbox, track start/submit, redirect
  to the thank-you page or show an inline success state (IssueReportForm pattern).
- **Cards:** flat `border border-gray-200 shadow-sm`, `rounded-xl/2xl`; hover =
  border/shadow shift, never scale.
- **Icons:** Remix Icon classes (`ri-*`) with `aria-hidden="true"` — never external
  icon images (14 wp-content checkmark <img>s were replaced for this reason).

## Mobile layout rules

- Verified clean at 320–1920px with zero horizontal overflow — keep it that way:
  wide tables get their own `overflow-x-auto` wrapper.
- **Never add broad global CSS constraints.** A global `div{max-width:100%}` rule
  silently overrode Tailwind `max-w-*` sitewide for months (commit `b0d8c66`). If a
  capped element renders full-width, check `getComputedStyle(el).maxWidth` before
  blaming the component.
- Standalone HTML (like `public/lead-widget.html`) doesn't inherit the app's 16px
  input floor — inputs under 16px make iOS Safari auto-zoom. Keep inputs ≥16px there.

## Accessibility rules

- Every icon-only or ambiguous control gets an aria-label (chat input, menu button
  already do). Labels on all form fields (visible or aria).
- One H1 per page; heading order sane; focus states visible (orange ring pattern).
- Tap targets ≥44px on mobile.

## Verification loop for any UI change

`npx tsc --noEmit` → `npm run build` → `npm run prerender` (123 ok expected) →
if a dev server is available, check the changed page at mobile + desktop widths.
Note: `preview_screenshot` times out in this project (external images) — verify with
DOM inspection (`preview_eval`/`preview_inspect`) instead.
