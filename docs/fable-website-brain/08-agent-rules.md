# Agent Rules — Non-Negotiable

This website is the company's lead engine. Every rule below traces to a real
incident in this repo's history, not theory.

## Truth & claims

1. **Never invent business facts** — reviews, licenses, insurance, warranty terms,
   prices, guarantees, client names, service areas. Reuse what's published or leave
   `TODO(owner):`. (Fabricated location-page testimonials had to be purged; the
   anchor commercial client must never be named.)
2. **Review numbers are live.** Rating/count come from
   `BUSINESS_INFO.aggregateRating` (synced from Google). Hardcoding "479 reviews"
   once spread to 15 files and showed stale numbers for weeks.
3. **No arrival-time promises in our copy** (LSA compliance). "Call for an exact
   ETA." Customer quotes may mention times.
4. **No hub cities or drive times on location pages** (owner rule).
5. **TCPA SMS-consent wording is legal text** — copy the existing checkbox verbatim
   onto any new form; never paraphrase.
6. **Phone number changes only with owner verification.** (914) 557-6816 from
   `BUSINESS_INFO`; Suffern's local line is the model for per-location overrides.

## SEO safety

7. **Never delete/rename a URL without a server-side 301 in `vercel.json`.**
   Client-side `<Navigate>` is not a redirect to Google — missing server 301s
   caused real GSC damage (found + fixed 2026-07-05).
8. New page ⇒ route + sitemap (coreRoutes for non-location pages) + metadata +
   prerender-count check, in the same commit.
9. noindex only utility pages (thank-you, /report/, /lp/*) — never a revenue page.
10. One intent, one page. Improve existing pages instead of spawning near-
    duplicates; no fake city pages; no keyword stuffing.
11. Meta descriptions ≤160 chars, titles ≤60. FAQ schema only for visible FAQs.

## Build & pipeline safety

12. **Verification loop before any push:** `npx tsc --noEmit` → `npm run build` →
    `npm run prerender` (expect "123 ok, 0 failed"; count must not drop). Push to
    `main` deploys production via Vercel.
13. Don't weaken `scripts/prerender.mjs` safeguards (empty-root retry, refuse-to-
    write-empty). A flaky prerender once shipped a contentless homepage to Google.
14. Touch `vite.config.ts` manualChunks only with the chunk output checked after —
    a regex bug once merged 57 city pages into one 287KB chunk.
15. New third-party script ⇒ CSP update in vercel.json + a performance
    justification. Prefer none: the site deliberately has no external widgets.
16. Never remove existing tracking calls; every new CTA gets the matching
    `track*Click(source)` with a page-specific label.

## Design & UX

17. Follow the standing style rules (visual diet): sections `py-8 md:py-12`, H2
    `text-2xl md:text-3xl`, one solid orange CTA per screen, flat bordered cards,
    no `hover:scale-105`, no new dark bands. Build from the three templates.
18. **No broad global CSS constraints** (`div { max-width... }` etc.) — a global
    rule silently broke Tailwind `max-w-*` sitewide for months.
19. Mobile first: ≥44px targets, no horizontal overflow (wide tables get their own
    `overflow-x-auto`), inputs ≥16px in standalone HTML files, exactly one
    MobileStickyCTA (it's global in App.tsx).
20. Conversion clarity over fancy design: CTA text names the outcome; phone-first
    on mobile; forms stay short (3–4 required fields).

## Process

21. Grep before building — the feature usually exists (`src/components/conversion/`
    and `feature/` first). Read the brain file for your domain before editing.
22. Small verified commits over big rewrites; repo convention is descriptive
    commits direct to `main` after the full verification loop.
23. Document uncertainty instead of guessing; log significant decisions in
    `10-decision-log.md`; update `09-known-risks-and-next-actions.md` when you fix
    or find something.
24. GSC/GA4 access: code exists in the Post Automation app (`docs/gsc-ga4-setup.md`
    there) pending owner activation. Until then, ask the owner for exports — never
    fabricate analytics numbers or "estimated" traffic.
