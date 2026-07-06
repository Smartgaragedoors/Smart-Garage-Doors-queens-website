# Service-Area Page System

~57 live location pages at root slugs (`/queens-ny/`, `/great-neck-ny/`,
`/bergen-county-nj/`…), all on `LocationPageTemplate`, auto-included in the sitemap
by the generator's service-area scrape. This system is the local-SEO backbone AND
the site's biggest algorithmic risk if handled lazily.

## The doorway-page line (where we must stay on the right side)

Google suppresses scaled near-identical city pages ("scaled content abuse"). A GSC
audit showed a large "crawled – currently not indexed" bucket — the technical causes
(redirects, prerender) were fixed 2026-07-05, so **what remains is content quality**:
templated pages don't get indexed. The fix is depth per page, not more pages.

**Unique per city (the value):**
- `neighborhoods[]` — real neighborhood names with real one-liners (Park Slope
  brownstone garages, Forest Hills tudor hardware…). This is where local knowledge
  shows; it can't be city-swapped.
- City-specific FAQs (parking/access in Brooklyn, co-op boards, coastal hardware on
  the North Shore) — not the same six questions everywhere.
- **Real city-tagged reviews when they exist; `reviews={[]}` otherwise.** Fabricated
  local testimonials were purged once — never again.
- Meta title/description, geo coordinates, hero image, map embed.
- Per-location phone when one exists (Suffern's 845 line) so CTAs/tracking/schema
  match what the customer dials.

**Reused (the frame):** template layout, default services/advantages lists, trust
bar, how-it-works, final CTA. A shared frame is fine — Google punishes duplicated
*content*, not consistent design.

## Accuracy rules

- **Only real service areas.** Never create a page for a city we don't serve; the
  service-area list is a business decision, not a keyword decision.
- Local-feel language rule applies (no hub cities/drive times — see `06`).
- Never claim an office/address in a city where none exists ("serving X" not
  "located in X").

## Internal linking (the mesh that makes both page types rank)

- Location → services: template's services grid + `ServiceLinks`.
- Service → locations: `getServiceAreaLinksForService()` in
  `src/utils/internalLinking.ts`; related-location clusters via
  `getRelatedLocations()`.
- Homepage CoverageStrip → top cities + `/service-areas/` index; header dropdown
  lists key cities + "View All Service Areas."
- New city page ⇒ add to its neighbor cluster so it's not an orphan.

## Nearby towns

Prefer strengthening an existing county/region page over spawning micro-pages for
every hamlet. A new page must clear this bar: real search demand + we genuinely
serve it + we can write unique local substance for it. Otherwise it's a
neighborhoods[] entry on the parent page.

## Reusable outline for a new city page

1. Props: metaTitle/metaDescription (≤160, live review interpolation), slug
   `/city-st/`, cityName/stateCode/stateName, geo lat/lng, heroImage, mapEmbedUrl.
2. 4–6 real neighborhoods with substantive local one-liners.
3. 4–6 city-specific FAQs (at least half must be questions unique to this city).
4. Real reviews tagged to this city, or `reviews={[]}`.
5. Wire: route in router config (sitemap picks it up automatically), neighbor-
   cluster links, GBP service area (owner, per `docs/gbp-playbook.md`).
6. Verify: tsc → build → prerender count +1 → the page's raw HTML in `out/` has
   unique title/description/schema.

## Commercial location pages (planned pattern — build carefully)

The page-1 plan calls for `/commercial/long-island/`-style pages. Same uniqueness
bar applies, aimed at B2B: named counties, industrial-corridor specifics, dock-
equipment brands, CommercialLeadForm. Build 1–2, watch GSC indexing, only then
expand. Never city-swap commercial copy — that's how the residential mistake gets
repeated at higher stakes.
