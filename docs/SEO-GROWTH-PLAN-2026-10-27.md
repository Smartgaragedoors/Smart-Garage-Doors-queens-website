# SEO & Growth Plan — 2026-10-27

Written by Fable 5.1 after a full-site audit (code, live HTTP, Search Console, GA4,
Vercel). Companion to `fable-website-brain/09-known-risks-and-next-actions.md`
(what was fixed) — this file is **what to do next and in what order**. Numbers are
exact Search Console / GA4 values for 2026-09-29 → 2026-10-26 unless stated.

## 1. Where we actually are

| Metric (28 days) | Now | Prior 28d |
|---|---|---|
| Google Search clicks | 59 | 82 |
| Impressions | 17,814 | 21,143 |
| Avg position | 16.2 | 12.5 |
| GA4 users / sessions | 526 / 556 | — |
| Form leads (`generate_lead`) | 15 | — |
| Call-button clicks (`call_click`) | 10 (5 users) | — |
| WhatsApp clicks | 5 | — |

**Where the impressions come from.** Two Google Business Profile website links carry
the site: the Queens/Flushing profile link (`/?utm_campaign=gbp_flushing`) had
7,960 impressions / 32 clicks at position 4.4, and the Suffern profile link
(`/suffern-ny/?utm_campaign=gbp_suffern`) 2,507 / 8 at position 3.4. Everything
that is *not* a map-pack link is small: clean homepage 1,003 impressions,
`/emergency-garage-door-repair/` 2,317 (0 clicks, position 17), `/long-island-ny/`
1,185 (1 click, position 52), `/queens-ny/` 353, and **the whole blog — 58 posts —
343 impressions and 1 click**.

**The "homepage decline" is mostly bookkeeping.** The clean homepage URL fell from
~250–400 impressions/day to ~30/day on exactly 2026-09-28, the day the Suffern
profile's UTM URL first appears in Search Console. The Suffern map-pack
impressions simply moved from `/` to `/suffern-ny/?utm…`. There is still a real,
modest site-wide decline (−28% clicks) to watch, but no ranking collapse.

**What converts.** Of 30 call/WhatsApp/lead events with a page attached: homepage 17,
`/pedestrian-garage-doors/` 4, `/book-now/` 3, the pedestrian-door blog post 2,
`/property-managers/` 2, contact 1, emergency 1. Organic Search sessions convert
at 10 key events / 168 sessions; Direct at 5 / 358.

**Conclusion:** the business is a map-pack business today. Organic pages rank on
page 2–5 for the terms that matter. That is an authority problem (links, citations,
review velocity) plus a depth problem on five specific pages — not a technical one.
The technical layer is clean: 151/151 routes prerender, canonicals correct, 404s
real, redirects 308, robots and sitemap fine, Googlebot last fetched the homepage
successfully 2026-10-25.

## 2. Fixed today (2026-10-27)

- **21 location pages carried composed testimonials** left over from the 2026-05-13
  template batch (Bergen, Darien, Edison, Elizabeth, Fairfield, Hauppauge, Long
  Island, Nassau, New Canaan, New Rochelle, Newtown, Norwalk, Paramus, Scarsdale,
  Smithtown, Stamford, Suffolk, Teaneck, Westchester, Westport, White Plains).
  None of the 63 quotes exist in the Google review feed; several promised arrival
  times. All set to `reviews={[]}` (section hides). Suffern's four quotes are real
  (commit `bbba966`) and were kept. Fake reviews are an FTC-rule liability and
  violate the owner's standing rule — this was the single most important fix.
- Six legacy blog posts still referenced dead `wp-content` image URLs (403). They
  were never rendered (the manifest image wins) but shipped in the JS bundle;
  swapped for the manifest paths so nothing points at the old WordPress host.
- The two newest repair-diagnosis posts now link to `/emergency-garage-door-repair/`
  with the exact anchor — it is the site's biggest page-2 query (2,196 impressions
  at position 14.9, 0 clicks) and had only 7 internal links from the blog.
- Five new Post-Automation posts submitted to the Indexing API.
- Local checkout was 6 commits behind `origin/main` (Post Automation commits
  directly). Always `git pull` before editing in this repo.
- Session scratch folders (`tmp/`, `output/`, `outputs/`, root `*.png`) gitignored.

## 3. Owner actions (dashboard-only, ~30 minutes total)

1. **Vercel → Domains → `smartestgaragedoors.com` → redirect to www as 308.** Still
   307 Temporary live today. One click; stops split-canonical signals.
2. **GA4 Admin → Events → mark `call_click` a key event** (it is the main lead
   action and still isn't); un-mark `book_click`. Then map in Google Ads.
3. **CRM subdomain is indexed by Google.** `crm.smartestgaragedoors.com` returns
   200 with no `noindex` and no `robots.txt`; it shows up for brand searches (9
   impressions this month). Fix lives in the CRM repo (`E:\SGD CRM\crm-live`): add
   `X-Robots-Tag: noindex` header + `robots.txt` + meta robots. Proposed as a
   separate session.
4. **Review velocity.** 486 reviews is the moat; the map pack is 80% of traffic. Ask
   every completed job (SMS link to the Queens *or* Suffern profile depending on
   dispatch). Target: 8–10 new reviews/month, with the city named in the review
   text when the customer is willing — those are the only "local reviews" we are
   allowed to show on city pages.
5. Confirm every GBP website field carries its UTM (Queens and Suffern do; any
   future profile must, or its clicks land as "Direct").

## 4. Next 30 days — content work that follows real demand

Rule: improve the page that already gets impressions. Do not spawn new city pages.

| Page | Demand it is already shown for (90d) | Work |
|---|---|---|
| `/emergency-garage-door-repair/` | "emergency garage door repair" 2,196 impr pos 15; "…near me" 473 pos 21; "…opener repair" 122 | Add a *what happens on an emergency call* section with real job examples from the CRM/QuickBooks log (no times promised), a "which borough/county tonight" block linking the 8 strongest city pages, 3–4 more H2s. Add an "Emergency" link from the homepage services grid with the exact anchor. Target: page 1 in 6–8 weeks. |
| `/long-island-ny/` + `/nassau-county-ny/` | Nassau queries split 3 ways: "garage door replacement nassau county" 149, "residential installation nassau county" 150, "tune-ups nassau county" 163, "repair services nassau county" 143, "garage door repair long island" 231, "custom garage doors in long island" 150 | Make `/nassau-county-ny/` the Nassau page (installation/replacement/tune-up sections, real Nassau jobs) and `/long-island-ny/` the regional hub that links down to Nassau and Suffolk by name. Cross-link with exact anchors. Both pages just lost their (fake) review section — replace with the real-jobs block used on Queens/Bronx. |
| `/maintenance/` | "garage door maintenance plans" 249 impr pos 60 | Real plan tiers, what a tune-up covers, price (owner confirms), FAQ with FAQ schema, link from every location page's "Related services". |
| `/brooklyn-ny/` | "garage door repair crown heights" 164, "overhead door repair crown heights" 117, "red hook garage doors" 57, "garage door repair brooklyn" 96 | Neighborhood section (Crown Heights, Red Hook, Park Slope, Bay Ridge, Williamsburg…) with real jobs — sections on the existing page, never new pages. |
| Smart-opener intent | "smart garage door" 262 pos 8, "smart garage" 220, "smart garage opener" 65, "home automation garage door" 77, "smart garage door openers" 49 — all landing on the homepage via the brand name | Upgrade `/liftmaster-opener-installation/` into the Wi-Fi/myQ/smart-opener installation page (or a new `/smart-garage-door-opener-installation/` if the LiftMaster page must stay brand-specific) — ~670 impressions/month sitting at positions 4–9 with 0 clicks. |

Secondary (after the five above): `/commercial-maintenance-contracts/` ("commercial
garage door maintenance" 148 impr pos 82), `/loading-dock-door-repair/` (84 impr
pos 45), `/bergen-county-nj/` (~230 impr across three queries, pos 37–46), Spanish
pages should set `<html lang="es">` (currently `en` sitewide).

## 5. Blog — yes, but a different kind

Today's 58 posts earn 1 click a month combined. More generic how-to posts will earn
the same. The posts that *do* surface are the commercial ones (loading-dock guide
position 12, maintenance-schedule position 5) and the ones answering a question
nobody local has answered. New cadence: **2 posts/month, every one tied to a query
we already get impressions for and linking up to one money page.** The Post
Automation app already publishes JSON to `content/blog/`; feed it these briefs.

| # | Working title | Target query (impr/90d) | Links up to |
|---|---|---|---|
| 1 | What a garage door tune-up in Nassau County actually includes (and costs) | "garage door tune-ups nassau county" 163 | `/maintenance/`, `/nassau-county-ny/` |
| 2 | Garage door replacement cost on Long Island: 2026 real invoices | "garage door replacement cost long island" 96, "…estimate long island" 47+47 | `/garage-door-replacement-cost-nassau-county/` |
| 3 | Emergency garage door repair in NYC: what "24/7" really means and what it costs | "emergency garage door repair near me" 473 | `/emergency-garage-door-repair/` |
| 4 | Crown Heights & Red Hook: the garage door problems we see most in Brooklyn | "garage door repair crown heights" 164 | `/brooklyn-ny/` |
| 5 | Smart garage door opener buyer's guide (myQ, Aladdin, Chamberlain) for NY homes | "smart garage door openers" 49, "home automation garage door" 77 | smart-opener page |
| 6 | Commercial garage door maintenance: what a quarterly contract covers | "commercial garage door maintenance" 148 | `/commercial-maintenance-contracts/` |
| 7 | Loading dock door repair costs: levelers, seals, panels | "loading dock door repair" 84 | `/loading-dock-door-repair/` |
| 8 | Bergen County garage door repair: what Paramus/Teaneck/Ridgewood homeowners ask | "garage door repair bergen county" 95+71 | `/bergen-county-nj/` |
| 9 | Garage door opener repair vs replacement on Long Island (with real job costs) | "garage door opener repair long island" 85 | `/opener-repair-installation/`, `/long-island-ny/` |
| 10 | Insulated garage doors in Suffolk County: R-value, cost, and when it pays | "custom garage doors in long island" 150, insulation cluster | `/garage-door-insulation/`, `/suffolk-county-ny/` |

Every post: real job photo (unique — the build enforces it), real price from
QuickBooks where cited, no arrival-time promises, exact-anchor link to the money
page, FAQ block.

## 6. Backlinks & authority — the thing the site is missing

No technical fix moves a page from 15 to 5; links and citations do. Realistic goal:
**15–25 real citations/links in 90 days**, in this order of effort/value:

1. **Manufacturer dealer locators** (free, high-trust): LiftMaster/Chamberlain
   dealer locator, Clopay, Amarr, Wayne Dalton — whichever brands are actually
   installed. One form each.
2. **Citations that still aren't done:** ThomasNet (commercial buyers search it),
   Angi/HomeAdvisor, Houzz, Porch, Nextdoor business page, Alignable, Apple Business
   Connect (location record "In Review" since Sept 9 — chase it). Yelp, Thumbtack,
   Bing are done. Identical NAP everywhere.
3. **Commercial-procurement memberships** (the growth bet): BOMA New York, IREM
   NYC/Westchester chapters, Avetta or ISNetworld registration — each gives a
   member-directory link and puts us in front of property managers.
4. **Chambers of commerce:** Queens Chamber, Rockland Business Association
   (Suffern), Business Council of Westchester, Long Island Association — member
   directory links, event pages.
5. **Local sponsorships & news:** youth sports/community org sponsorship pages
   (Flushing, Suffern), local-paper "ask the expert" pieces, Patch business
   listing. Cheap, local, real.
6. **Partner pages:** real-estate agents and property managers we already work
   for — a "preferred vendors" link each. Supplier/distributor "where to buy" pages.
7. **Unlinked mentions:** search the brand name monthly; ask for the link.

Skip: paid guest posts, PBNs, directory-blast services. One bad batch undoes the
rest.

## 7. What to watch (and when)

- **2026-11-10:** emergency page position (was 14.9), Nassau/LI query positions,
  whether the 21 purged pages lost or gained impressions (expect flat).
- **2026-11-24:** Search Console 28d vs today's 59 clicks / 17.8K impressions.
  Separate GBP-UTM URLs from clean URLs when reading it.
- **Monthly:** `quick_wins`, `content_gaps`, `cannibalization_check` via the GSC
  MCP; GA4 `call_click` + `generate_lead` by landing page.
- Do not read daily GSC alerts as trends; the site's volume is too small.
