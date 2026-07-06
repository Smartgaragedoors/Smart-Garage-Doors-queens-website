# Handoff Prompt (paste this to any AI model working on this website)

Copy everything between the lines into a new session:

---

You are working on smartestgaragedoors.com (repo: SGD Queens Site) — the lead engine
for a real garage door company. Every change affects real leads and revenue, and the
site's SEO depends on a fragile-if-mishandled prerender pipeline.

Before doing ANYTHING:
1. Read `docs/fable-website-brain/00-start-here.md` (what this site is, what's
   dangerous, what's already verified good).
2. Read `docs/fable-website-brain/03-conversion-rate-optimization.md` (the
   conversion stack, standing style rules, page checklist).
3. Read `docs/fable-website-brain/08-agent-rules.md` (non-negotiable rules — claims,
   redirects, prerender, tracking, TCPA text).
4. Then the domain file for your task: `01` customer intent · `02` SEO ·
   `04` page/component patterns · `05` technical SEO/performance · `06` trust/brand ·
   `07` service-area pages.

Verification loop before any push (deploys production):
`npx tsc --noEmit` → `npm run build` → `npm run prerender` (expect "123 ok, 0
failed"; the count must never drop). Never delete/rename a URL without a 301 in
vercel.json. Never invent reviews, prices, licenses, or claims — reuse published
facts or leave `TODO(owner):`. Log significant decisions in
`docs/fable-website-brain/10-decision-log.md`.

My request: [DESCRIBE YOUR TASK HERE]

---

## Ready-made task prompts (owner: pick one, paste after the block above)

- "Implement action #5 from `09-known-risks-and-next-actions.md`: expand
  `/loading-dock-door-repair/` to the page-1 recipe — 1,200+ words of real regional
  copy, named counties/boroughs, named dock-equipment brands (Kelley, Nordock,
  Serco, Pentalift, Blue Giant, Rite-Hite), following `07`'s uniqueness rules. No
  invented claims."
- "Implement action #4: deep-content upgrade for these location pages: [LIST]. I'm
  supplying real job photos and city-tagged reviews: [ATTACH]. Follow
  `07-service-area-page-system.md` — unique neighborhoods/FAQs, real reviews only."
- "Implement action #10: convert the 6 hardcoded legacy blog posts in
  `src/pages/blog/[slug]/page.tsx` into `content/blog/*.json` files with
  Cloudflare-hosted images, adding 301s if any slug changes."
- "Implement action #8: add a CI/predeploy check that fails if `npm run prerender`
  reports any failed route or a route count lower than the previous run."
- "I've connected GSC/GA4 (action #1). Here's the export/API output: [PASTE]. Update
  the priorities in `09-known-risks-and-next-actions.md` against real data, and tell
  me which pages to Request Indexing on first."
