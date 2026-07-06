# Internal Linking Plan

External links land somewhere; internal links decide where that authority flows.
Rule of thumb: every page earning external links must pass authority DOWN to the
money pages it supports, and every money page must be ≤2 clicks from the homepage.

## Smart Garage Doors (mesh largely built — maintain + extend)

**Existing structure (verified):** homepage CoverageStrip → cities; header
dropdowns (Services / Service Areas / Commercial incl. all 5 commercial pages);
`internalLinking.ts` utilities (`getRelatedServices`, `getServiceAreaLinksForService`,
`getRelatedLocations`); templates' relatedLinks pills; ServiceLinks footer block;
blog guides link up to service/commercial pages.

**Standing rules:**
1. Blog guides (the link magnets) must each link to their money page with a
   descriptive anchor — e.g. the PM vendor checklist → `/property-managers/`
   ("set up a vendor account"), dock guide → `/loading-dock-door-repair/`.
   Verified pattern exists; keep it on every new post.
2. New city page ⇒ joins its neighbor cluster (never an orphan).
3. Commercial pages cross-link as a hub (done 2026-07-05) — extend to any new
   commercial/vertical page.
4. Anchors are descriptive phrases ("loading dock door repair", "our maintenance
   program"), never "click here", never exact-match stuffing site-wide.

**Priority additions when assets ship:** safety guide → emergency + spring pages;
case studies → the commercial page for their vertical + the city page where the
job happened; before/after gallery → linked from WhyChooseUs area + city pages.

## Zack & Elle (Shopify — the real gap of the three)

Current state: education blog exists but collection/product internal linking is
default-Shopify thin. Plan (owner/theme edit — flag as implementation work):
1. **Blog → collections:** every guide links to its natural collection with a
   descriptive anchor (carat-size guide → studs collection per size mentioned;
   IGI-vs-GIA → engagement rings). This is where earned education links flow to
   money pages.
2. **Collection descriptions:** 100–200 words on top collections (studs,
   engagement, three-stone) linking to the relevant guide ("not sure what size?
   see the carat size guide") — helps both rankings and conversion.
3. **Product → guide + collection:** product descriptions link back to the size
   guide and their parent collection.
4. **About page → collections + guides** (currently a cul-de-sac).
5. Remove/hide empty legacy collections so internal equity isn't wasted on
   0-product pages.

## Trojan (single-page funnel — minimal by design)

The funnel intentionally concentrates on one conversion path — don't dilute it.
Only additions: author bio page (once built) linked from the footer, linking back
to buy + magnet. External links can point to the magnet page and homepage; no
deep architecture needed.

## Maintenance

When an external link lands on a deep page (weekly system, Friday): check that
page links onward to its money page and is linked FROM at least two relevant
pages. Quarterly: crawl for orphans (pages in sitemap with no internal inlinks).
