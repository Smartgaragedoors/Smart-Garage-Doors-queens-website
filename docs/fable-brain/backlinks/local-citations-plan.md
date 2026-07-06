# Local Citations Plan — Smart Garage Doors

Citations are table stakes: consistency caps trust rather than boosting it, but
inconsistency actively hurts. All submissions/edits are OWNER tasks (accounts,
verification); AI prepares exact data + tracks status here.

## The canonical NAP (single source of truth)

Whatever `src/config/business-info.ts` says, everywhere, character-for-character:
- **Name:** Smart Garage Doors — exactly; never "Smart Garage Doors of Queens"
  or name+keywords (GBP suspension risk, per `docs/gbp-playbook.md`)
- **Phone:** (914) 557-6816 (the Suffern 845 line is a location page detail, not
  a citation-level NAP variant — one primary number across citations)
- **Website:** `https://www.smartestgaragedoors.com/` (https + www + slash)
- **Address policy:** service-area business. Decide ONCE with the owner whether
  citations show an address or are SAB/hidden-address, then apply uniformly —
  mixed address presence across directories is the classic local-SEO wound.
  `TODO(owner): confirm address/SAB policy before the citation sweep.`

## Tier 1 — the majors (do first, in order)

| Platform | Status | Notes |
|---|---|---|
| Google Business Profile | LIVE — 4 listings known: Flushing/main (486 reviews), Suffern (105), a duplicate Suffern (0), Jackson NJ (0) | **Owner: remove/merge the duplicate Suffern listing** — duplicates are a ranking and trust liability. Optimize per `docs/gbp-playbook.md` (services, products, Q&A, UTM links) |
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
- **Manufacturer/dealer locators** — LiftMaster (ProVia dealer program), Clopay,
  Amarr, CHI, Wayne Dalton: if we hold dealer/authorized status with ANY of them,
  their locators are high-trust links. `TODO(owner): list actual
  dealer/authorized relationships so we only pursue real ones.`
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

1. Owner confirms address/SAB policy + dealer relationships (blockers above).
2. Owner kills the duplicate GBP listing.
3. Work Tier 1 top-to-bottom (one platform per week alongside the weekly system —
   verification codes take days anyway).
4. Log every completed citation in `backlink-opportunities.csv` (`Opportunity
   Type = citation`, status `won`) so the record survives.
5. Quarterly: re-check the majors for NAP drift or rogue duplicates.
