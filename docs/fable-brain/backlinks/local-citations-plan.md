# Local Citations Plan — Smart Garage Doors

Citations are table stakes: consistency caps trust rather than boosting it, but
inconsistency actively hurts. All submissions/edits are OWNER tasks (accounts,
verification); AI prepares exact data + tracks status here.

## The canonical NAP (single source of truth) — CONFIRMED 2026-07-06

Two real, addressable locations exist (matches `src/config/business-info.ts`
exactly — always pull from there, never retype):

**Primary — Flushing:**
- Smart Garage Doors
- 141-24 70th Ave, Flushing, NY 11367
- (914) 557-6816
- This is the main GBP listing (486 reviews) — the anchor citation for most
  directories.

**Secondary — Suffern (own local line, own service-area content):**
- Smart Garage Doors
- 31 Deerwood Road, Suffern, NY 10901
- (845) 262-2034 — a genuinely separate line, not a NAP inconsistency; this
  location's own citations (and its GBP listing, 105 reviews) should use THIS
  number, not the Flushing one. The `/suffern-ny/` page already uses it correctly.
- Business-info.ts also lists a third address (71st/12th Ave, Dyker Heights,
  Brooklyn — secondary, no dedicated phone line noted). Use it only where a
  directory specifically wants a Brooklyn-area listing; default to Flushing.

**Address policy — RESOLVED:** show the real street address (not SAB/hidden).
Two locations, two sets of citations, each with its own correct phone number.
Never mix — a Flushing citation with the Suffern phone (or vice versa) IS the
NAP-inconsistency failure mode this plan exists to prevent.
- **Website:** `https://www.smartestgaragedoors.com/` (https + www + slash)

## Tier 1 — the majors (do first, in order)

| Platform | Status | Notes |
|---|---|---|
| Google Business Profile | LIVE — 4 listings known: Flushing/main (486 reviews, real, use Flushing NAP above), Suffern (105 reviews, real, use Suffern NAP above), a duplicate Suffern (0 reviews — NOT a real third location, a dupe), Jackson NJ (0 reviews) | **Owner: remove/merge the duplicate 0-review Suffern listing** — duplicates are a ranking and trust liability. The 105-review Suffern listing is the real one to keep. Optimize both real listings per `docs/gbp-playbook.md` (services, products, Q&A, UTM links) |
| Bing Places | Unverified | Import from GBP (Bing supports GBP sync) |
| Apple Business Connect | Unverified | Free; Apple Maps matters for iPhone "garage door repair near me" |
| Yelp | Unverified — check for an unclaimed auto-generated listing first | Claim, complete, DON'T buy ads under pressure (their sales calls will follow) |
| Thumbtack | ACTIVE — real reviews exist (a Google review this session mentioned finding us there) | Ensure profile links to the site; keep review flow |
| Angi | Unverified | Claim the free listing at minimum |
| Nextdoor | Unverified | Business page; neighborhood presence for Queens/Westchester |
| Facebook Business | Linked from site footer | Verify NAP matches canon |
| BBB | Unverified | Listing is free; accreditation is paid — owner's call, log as paid if pursued |

## Tier 2 — trade & commercial directories (double as backlinks)

From verified competitive research (2026-07-05 page-1 plan):
- **ThomasNet** — competitors (Overhead Door Co. of the Meadowlands, LoadingDock.com)
  hold indexed category listings for Overhead Doors / Dock Equipment in this region.
  Create/claim listing. Free tier exists.
- **IDA (International Door Association, doors.org)** — member directory +
  commercial dealer recognition lists. Membership = citation + industry trust badge.
- **BOMA / IREM local chapters (NY/NJ/CT)** — membership-gated Allied-Member/vendor
  directories that property managers actually browse. Costly but on-target for the
  commercial goal.
- **Manufacturer dealer/distributor locators — CONFIRMED target list (owner,
  2026-07-06):** Clopay, Amarr, Raynor, Overhead Door, Garaga, C.H.I., Haas, Wayne
  Dalton. Treat these as "apply for dealer/distributor locator inclusion,"
  not as an existing-status claim — never publish "authorized Clopay dealer"
  language on the site or in outreach until the manufacturer actually confirms
  dealer status in writing. High-trust links once granted (see
  `backlink-opportunities.csv` — rows expanded from 2 to all 8 brands).
- Chambers of commerce: Queens Chamber, Brooklyn Chamber, Business Council of
  Westchester — membership includes directory listing + local legitimacy.

## Tier 3 — general/local (batch later, low value each)

Apple/Bing done → then: Foursquare, YellowPages, Superpages, Chamber-affiliated
locals, Alignable, Porch/Houzz (if profiles make sense). Skip any directory that
exists only to sell links.

## Service-area consistency

GBP service areas (≤20, weighted premium per gbp-playbook) should match the site's
CoverageStrip and top location pages. When citations ask for service areas, use the
same core list: Queens, Brooklyn, Flushing, Bronx, Long Island (Nassau/Suffolk),
Westchester (New Rochelle, White Plains), Bergen County NJ, Fairfield County CT.

## Process

1. ~~Owner confirms address/SAB policy + dealer relationships~~ — DONE 2026-07-06,
   see above.
2. Owner kills the duplicate GBP listing.
3. Work Tier 1 top-to-bottom (one platform per week alongside the weekly system —
   verification codes take days anyway).
4. Log every completed citation in `backlink-opportunities.csv` (`Opportunity
   Type = citation`, status `won`) so the record survives.
5. Quarterly: re-check the majors for NAP drift or rogue duplicates.
