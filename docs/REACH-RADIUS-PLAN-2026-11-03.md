# Reach & Radius Plan — reaching customers up to 50 miles out

Written 2026-11-03 (Fable 5.1) in answer to: "How do I expand my radius on Google
Business Profile? What about geofencing? What do we need so we reach customers in
the most locations and distances, given we drive up to 50 miles?"

Everything marked **verified** was read live today (Google Ads API via
Supermetrics, GA4, Search Console, the public Maps/Search listings, the repo).
Everything marked **owner-check** needs a Google sign-in I don't have.

---

## 1. The short answer

1. **Google Business Profile has no radius you can expand.** The "service area"
   list (up to 20 areas, roughly a 2-hour drive) tells customers where you go;
   it does not make the map pack show you farther away. Map-pack reach is set by
   the pin's location, how dense competition is around it, and review strength.
   That is why Queens' effective radius is 1–2 miles and Suffern's covers a county.
2. **The real "radius" control you own is Local Services Ads (LSA).** Its
   service-area list decides where your Google Guaranteed ad can appear, and it
   sits above the map pack. The LSA campaign is live today ($45.71/day cap) but
   its service area is **missing Connecticut, Manhattan, Orange and Putnam**, and
   it targets **all of New Jersey** instead of the counties you actually reach.
   Fixing that list is the single biggest reach change available, and it is free.
3. **"Geofencing" is a paid-ads tactic, not a GBP setting.** For emergency repair
   it is low-yield. The useful version is plain Google Ads location targeting
   (counties/towns, "Presence" only). Nothing else branded "geofencing" is worth
   money for this business right now (see §4).
4. **More city pages and more GBP pins do not expand reach.** The site already has
   62 location pages; most sit on page 3–5 for county terms (verified below). A
   second profile at an employee's address risks the profiles that earn today.

Do, in this order: fix LSA service areas → max out both GBP service-area lists →
align Bing/Apple listings → review-request SOP with town names → (later) a tight
Google Ads Search campaign if LSA proves the farther markets convert.

---

## 2. How Google's reach actually works (per channel)

| Channel | What sets how far you show | What you control | What it does NOT do |
|---|---|---|---|
| **GBP map pack / Maps** | Distance from the searcher to the **pin** (141-24 70th Ave Flushing; 31 Deerwood Rd Suffern), competitor density, reviews, category | Service-area list (≤20 areas, ~2 h drive; cities/counties/zips only — states and countries are no longer allowed) | Service areas do not change ranking distance. Hiding the address does not move the pin. |
| **Local Services Ads** | Your **service-area list** (cities / counties / zips) + proximity + reviews + responsiveness + budget | Service areas, budget, schedule, job types | Won't show outside the listed areas; won't show outside the ad schedule |
| **Google Ads Search** | Campaign **location targeting** (towns, counties, or a radius ≥ 1 km around a point) | Everything; set Location options to **Presence** (not "Presence or interest") | Smart campaigns (what exists in the account) give almost no control; all three are paused |
| **Website (organic)** | Which pages rank for "garage door repair + place" | Content depth per county/city page | A page existing ≠ reach; most location pages sit at position 25–50 |
| **Meta / display "geofencing"** | A drawn polygon or radius | Audience, creative | Reaches people who are *in* a place, not people who *need a garage door* |

Sources: Google's service-area help (20 areas, ~2 h, no states) —
https://support.google.com/business/answer/9157481 ; LSA reach help —
https://support.google.com/localservices/answer/7419052 ; Google Ads location
targeting — https://support.google.com/google-ads/answer/1722043 .

---

## 3. What is configured today (verified 2026-11-03)

### 3a. Local Services Ads — live, but the map is wrong
Google Ads account 6668814449, campaign `LocalServicesCampaign:SystemGenerated:…`
(id 20572577719): **ENABLED, ELIGIBLE, $45.71/day, running since 2023-09-19.**
(The August audit recorded "LSA not running" — that was the owner's belief; the
account says otherwise.)

Read in the LSA dashboard (Chrome, 2026-11-03; account "Smart Garage Doors",
Flushing, customer id 666-881-4449):

| Setting / result | Value |
|---|---|
| Ad status | On, custom hours |
| Average weekly budget | $320 |
| Lead spend, Oct 5 – Nov 3 | $752.88 (phone $171.39, message $581.49) |
| Charged leads, same period | 12 (2 phone, 10 message) → about $63 per lead |
| Leads, previous 7 days | 3 |
| Leads in inbox, all time | 85 |
| Ad impressions, same period | 1,759; top-of-page 90.6%, absolute top 4.2% |
| License on file | NJ HIC 13VH14195600 only — no NY (DCWP 2130164-DCWP), no CT (HIC.0704479) |
| Status label | "Verified". The GBP panel still prompts "Next: Background check — 2 steps away from earning your badge", so the Google Guaranteed badge appears not to be earned |
| Policy manager | no violations |
| Excluded areas | none |

Lead towns in October: Garden City, Roslyn Heights, Great Neck, Sands Point,
Westbury, West Islip, North Great River (Nassau/Suffolk); Mount Kisco, White
Plains, Dobbs Ferry, Ossining, Katonah (Westchester); Suffern, Valley Cottage
(Rockland); "New York" ×5. Nothing from New Jersey despite statewide targeting.
Spend ($753) is far under the budget cap (about $1,390/month), so budget is not
the limiter; impressions are. More service area and the badge raise impressions.

Service area, confirmed in the dashboard's editor (matches the API):

| Included today | Missing vs. the 50-mile territory |
|---|---|
| Queens, Brooklyn, The Bronx, Staten Island, Nassau County, Suffolk County, Westchester County, Rockland County, **New Jersey (entire state)** | **Manhattan**, **all of Connecticut** (Greenwich/Stamford/Darien/Westport — the premium CT pages), **Orange County NY**, **Putnam County NY**. NJ-statewide includes Cape May and Atlantic City (120+ miles) — leads you can't serve and have to dispute. Suffolk-as-county reaches Montauk (100 mi). |

Ad schedule: Mon–Thu 8–19, Fri 8–16, Sun 9–18, **no Saturday** (consistent with
how the business operates; leave it). Note the GBP says "Open 24 hours" and the
site sells 24/7 emergency — LSA will not show nights; that is a choice, not a bug.

### 3b. Google Business Profiles
- Queens "Smart Garage Doors" — 5.0 ★ (501), category *Garage door supplier*,
  address shown, Open 24 hours. (public listing, verified)
- Suffern "Smart Garage Doors LLC" — separate 845 line. Name differs from Queens
  by "LLC" (minor NAP inconsistency; pick one spelling everywhere).
- **Service-area lists (read in Business Profile Manager, 2026-11-03):**
  - *Queens, 20 of 20 used:* Queens · Brooklyn · Bronx · Nassau County · Suffolk
    County · Westchester County · Stamford CT · Tenafly NJ · Ridgewood NJ · Rye ·
    Roslyn · Manhasset · Great Neck · White Plains · Scarsdale · Astoria · Bayside
    · Whitestone · Forest Hills · Jamaica Estates. **Eleven slots are spent on
    places already inside a listed county or borough** (the five Queens
    neighborhoods; Rye, White Plains, Scarsdale inside Westchester; Roslyn,
    Manhasset, Great Neck inside Nassau). Missing: Manhattan, Staten Island,
    Rockland, Fairfield County, Bergen County, and every other NJ county.
  - *Suffern, 15 of 20 used:* Suffern · Monsey · Mt Ivy · Nanuet · Pomona ·
    Hillburn · New City · Woodbury · New Square · Nyack · Wesley Hills · New
    Hempstead · Ladentown · Haverstraw · Stony Point. **All inside Rockland
    County** — no Orange, Putnam, Westchester, Bergen, Passaic, Morris, or CT.
    Five slots unused.
  - Also seen: the Queens profile lists Suffern's (845) 262-2034 as an additional
    phone — remove it (two profiles sharing a number is a duplicate signal).
    Queens secondary categories are *Handyman* and *Door supplier*; Suffern has
    no secondary category.

### 3c. Google Ads Search — nothing running
Three Smart campaigns, all **PAUSED** ("Garage Door Repair" $65/day, "Garage
Doors Sales New York" $48/day, "Campaign #7" $9.60/day). Fine for now.

### 3d. Website coverage (62 location pages)
Pages by county: Westchester 12, Nassau 10, Fairfield CT 8, Bergen 7, Queens 6,
Monmouth 4, Suffolk 3, Rockland 2, one each for Union / Richmond / Ocean /
Manhattan / Middlesex / Kings / Bronx. **Zero pages** for Orange, Putnam, Dutchess
(NY); Hudson, Essex, Passaic, Morris, Somerset, Mercer (NJ); New Haven (CT).

Search Console, 90 days to 2026-11-01, location pages by impressions:

| Page | Impr. | Clicks | Avg. pos. |
|---|---|---|---|
| /long-island-ny/ | 3,391 | 1 | 46 |
| /brooklyn-ny/ | 1,733 | 0 | 36 |
| /fairfield-ct/ | 1,586 | 0 | 30 |
| /queens-ny/ | 1,565 | 4 | 34 |
| /westchester-county-ny/ | 727 | 0 | 34 |
| /bergen-county-nj/ | 571 | 0 | 36 |
| /nassau-county-ny/ | 551 | 0 | 45 |
| /suffern-ny/ | 194 | 2 | 12 |

Reading: the county/region pages have demand but rank on page 3–5, so organic is
not currently a reach engine beyond Queens. Pages that do rank (Manhasset 7.9,
Rumson 7.7, Ridgewood 9.2) get 20–100 impressions a quarter. Worth a look in the
GSC UI: "garage door repair manhattan" (298 impr, pos 1.4, **0 clicks**),
"garage door repair in rockland county" (73, pos 1.7, 0 clicks), "garage door
repair mahwah nj" (38, pos 1.2, 0 clicks) — position 1 with zero clicks usually
means an AI Overview / image / local-pack-adjacent slot, not a blue link.

GA4 (90 days, tri-state only — the raw total is 80% bots from Singapore etc.):
190 users, 22 key events. NYC = 112 users / 12 key events; NJ and CT single digits.
The site's measured customers are overwhelmingly within ~15 miles of Flushing.

---

## 4. Geofencing — what it is and whether to buy it

Three different things get sold under the word:

1. **Programmatic geofencing** (Simpli.fi-type vendors): display ads to phones
   that entered a drawn polygon — competitors' lots, Home Depot, new subdivisions.
   Cheap impressions, no intent, attribution by "we saw their phone later." For
   urgent repair (people search the moment the spring snaps) this converts poorly.
   It can work for **commercial** prospecting (warehouse districts, property-
   management offices) as a brand-awareness layer — only after the commercial
   outreach list is being worked. **Verdict: not now.**
2. **Google Ads location / radius targeting**: the legitimate version. Target
   counties/towns or a radius (minimum 1 km) and set Location options to
   *Presence*. This is a setting, not a product. **Verdict: use it when a Search
   campaign is turned back on (§5, step 6).**
3. **LSA service areas**: the same idea inside Local Services Ads, by city /
   county / zip. **Verdict: fix today (§5, step 1).**

Nobody can "geofence" the map pack or a Business Profile. Anyone offering to
expand your GBP radius for a fee is selling (1) or selling fake profiles.

---

## 5. Action plan (ranked by reach gained per dollar)

### Step 1 — Fix the LSA service area (owner, 20 minutes, $0)
Open ads.google.com/localservices → Profile → Service area. Replace the current
list with counties, and towns where a county runs too far:

- **NY:** Queens · Brooklyn · The Bronx · Manhattan · Staten Island · Nassau
  County · Westchester County · Rockland County · Orange County · Putnam County ·
  Suffolk **towns only**: Huntington, Smithtown, Babylon, Islip, Hauppauge,
  Commack (not the whole county).
- **NJ:** Bergen · Passaic · Hudson · Essex · Union · Morris · Somerset ·
  Middlesex · Monmouth · Mercer · Ocean **towns**: Jackson, Lakewood, Toms River,
  Brick, Howell (remove "New Jersey" the state).
- **CT:** Fairfield County (Greenwich, Stamford, Darien, New Canaan, Norwalk,
  Westport, Fairfield, Danbury). Google will ask for the CT license for the
  state check: HIC.0704479 is already in `business-info.ts`.

Then: raise the weekly budget only after a month of lead data from the new areas;
check "Job types" has spring, opener, off-track, installation, commercial.
Measure in the LSA dashboard by lead zip code — that is the only place that shows
whether the 30–50-mile ring actually produces booked jobs.

### Step 2 — Max out both GBP service-area lists (owner, 15 minutes, $0)
business.google.com → each profile → Edit profile → Location and areas →
Service area. Counties first (breadth); towns inside a listed county are optional.

**Queens profile (20):** Queens · Brooklyn · The Bronx · Manhattan · Staten
Island · Nassau County · Huntington · Babylon · Islip · Smithtown · Westchester
County · Rockland County · Fairfield County CT · Bergen County NJ · Hudson County
NJ · Essex County NJ · Union County NJ · Middlesex County NJ · Monmouth County NJ
· Morris County NJ.

**Suffern profile (20):** Rockland County · Orange County · Putnam County ·
Westchester County · Dutchess County · Bergen County NJ · Passaic County NJ ·
Morris County NJ · Sussex County NJ · Essex County NJ · Hudson County NJ ·
Fairfield County CT · The Bronx · Manhattan · Pearl River · Nanuet · New City ·
Nyack · Monsey · Mahwah NJ.

Overlap between the two profiles' lists is allowed; what is not allowed is a third
profile for the same territory (see `gbp-launch-workbook.md`). While there: make
the business name identical on both ("Smart Garage Doors"), and add the secondary
category *Garage door repair service* if it is missing (categories, not service
areas, are the ranking input you can edit).

### Step 3 — Mirror the lists on Bing Places and Apple Business Connect ($0)
Bing Places already exists (ypid YNE137082C20C446F4 — never create a second).
Apple Business Connect feeds Siri/Apple Maps "near me" on iPhones; claim it if not
yet claimed, same NAP, same service areas.

### Step 4 — Reviews that name the town (ongoing, $0)
This is the one lever that nudges the map pack for a farther town: a review that
says "Scarsdale" or "Mahwah" helps that town's searches. Keep the playbook SOP
(ask 100% of jobs, same day, tech's phone, never incentivize) and reply naming the
town when true. Route Rockland/Orange/Bergen-north jobs to the Suffern link.

### Step 5 — Website: deepen, don't multiply (dev, after 1–4)
- Do **not** add city pages (brain rule). Strengthen the county pages that already
  have demand but rank poorly (Long Island, Brooklyn, Fairfield, Westchester,
  Bergen, Nassau) with real neighborhoods, FAQs and real reviews.
- Consider at most two new **county** pages for counties with zero coverage and a
  dispatch hub next door: *Ocean County NJ* (Jackson hub) and *Orange County NY*
  (Suffern hub). Only with the uniqueness bar in brain `07`; watch GSC indexing
  before any third.
- [x] Code fix, done 2026-11-03 (working tree, not committed):
  `SERVICE_COUNTIES` in `src/config/business-info.ts` is now the single source
  for the county list (NY: five boroughs + Nassau, Suffolk, Westchester,
  Rockland, Orange, Putnam; NJ: Bergen, Passaic, Hudson, Essex, Union, Morris,
  Somerset, Middlesex, Monmouth, Mercer, Ocean; CT: Fairfield). It feeds
  `BUSINESS_INFO.serviceAreas` → Organization and LocalBusiness `areaServed`
  (23 `AdministrativeArea` entries, no more `State`), the footer's local-page
  links (11, now incl. The Bronx, Manhattan, Jackson NJ, Stamford CT) and a
  "Counties and boroughs we cover" strip + FAQ answer on `/service-areas/`.
  `ServiceAreas.tsx` was updated as well but it is not mounted anywhere
  (dropped from the homepage in commit 4caa52a), so it changes nothing live.
  Radius copy there went from "60+ mile" to "50-mile" to match the owner's
  stated reach. Verified: typecheck clean, build clean, prerender 151 ok /
  0 failed, homepage root non-empty.

### Step 6 — Google Ads Search, only if LSA data says the ring converts
When a month of LSA zip-code data shows booked jobs 25–50 miles out, turn on one
**Search** campaign (not Smart): county targeting from Step 1, Location options =
*Presence*, exact/phrase keywords for spring/opener/off-track/emergency, tracked
to the existing "Website - Accepted Lead" conversion (7755193645). Budget from
the $30.5K/yr "Lead Generating Platforms" line once the owner identifies it.

### Step 7 — Meta radius ads (blocked on owner 2FA)
The qualified-lead campaign is built and OFF (handoff 2026-09-09). Radius
targeting there is fine for install/upgrade work, not emergency repair. Owner
needs to clear the Billing / Business Settings 2FA first.

---

## 6. What NOT to do (each has cost us or nearly did)
- No GBP at an employee's home (Pearl River) — duplicate-territory profile;
  enforcement hits the whole account incl. Queens and Suffern.
- No keywords or cities appended to the business name.
- No "verified-for-LSA" profile purchases (`powerhouse-growth-plan.md` §Q1).
- No geofencing vendor retainer before LSA + GBP lists are fixed and measured.
- No batch of new city pages — indexing already filters templated pages out.
- No arrival-time promises in ads or copy (LSA compliance).

---

## 7. Owner checklist (what I could not verify)
- [x] LSA dashboard: service areas, budget, spend, leads — read 2026-11-03 (§3a).
- [x] GBP: live service-area lists on both profiles — read 2026-11-03 (§3b).
- [ ] LSA: add the NY DCWP and CT HIC licenses to the profile, then add
      Connecticut, Manhattan, Orange and Putnam; replace "New Jersey" with the
      county list in §5 Step 1.
- [ ] LSA: finish the background check so the Google Guaranteed badge shows
      (free; it is the green check that lifts click-through on the ad).
- [ ] GBP: whether customers ever visit 141-24 70th Ave. If not, Google's rule for
      service-area businesses is to clear the address (ranking pin stays the
      same; it removes a suspension risk).
- [ ] Confirm which "Lead Generating Platforms" spend ($30.5K/yr in QuickBooks) is
      actually LSA — that would explain the $45.71/day.
- [ ] Apple Business Connect: claimed or not.

---

## 8. GBP posts — are they going through, and are the keywords right? (verified)

Posting runs through the **GoHighLevel Social Planner** (location
`pRmfWahQa2abjlbIhvBE`). Connected Google account: the **Queens profile only**
(location 16597559663500673010). **The Suffern profile is not connected and has
never received a post.**

Posts to the Queens profile, 2026-07-04 → 2026-11-02 (read from GHL today):

| | |
|---|---|
| Posts created | 54 |
| Published | 49 |
| Failed | 5 — Jul 8, Jul 13, Jul 28, Sep 7 (×2); error "token expired / not enough permissions" |
| Posts with a photo | 54 of 54 |
| Posts with a CTA button / link | **0 of 54** |
| Posts naming a town | **2 of 54** (Jamaica, once) |
| Review re-posts (the Sunday 2 pm stream) | ~6, all published |

Cadence by week: 3–5 posts/week July–September (job-photo posts Mon/Wed/Fri
~7–10 am + a Sunday review re-post), then **1–2/week from October 5** — the
job-photo stream almost stopped (Oct 1 and Oct 23 only); what still goes out is
the weekly review re-post. So: posts *are* going through every week, but at a
third of the summer volume, and the Google connection's token shows an expiry of
**2026-11-02 16:04 UTC**. The Nov 2 post went out an hour before that. Reconnect
Google in Social Planner → Settings → Integrations (owner, 2 minutes) before next
Sunday, or that post will fail the way the September ones did.

**What "correct keywords" means on a GBP post.** Post text is a weak ranking
signal; Google reads it for *justifications* ("their post mentions spring
repair") and for the customer who opens the profile. The strong "keyword" fields
on a profile are the **primary + secondary categories, the Services list, the
Q&A, and the words customers use in reviews** — those are set once (playbook §2,
§4, §7) and matter more than any post. For posts, the rule is one service phrase +
one real town + one button, written like a human:

> Torsion spring replacement in Great Neck this morning — both springs swapped,
> door balanced, same-day. Spring replacement starts at $175. → **Call now** /
> **Learn more** → /spring-replacement/?utm_campaign=gbp-post

Today's captions are generic ("Just wrapped up a new door install. The new white
garage door…") with no town and no button, so they neither tell Google where the
job was nor give the reader a next step.

**Cadence to run (per profile):** 2 posts a week is enough — one real job photo
with service + town + button, one review re-post or seasonal offer. Daily posting
adds nothing; missing a month does cost (posts stop showing after ~6 months and
the "Updates" row goes empty). Rotate the service phrases: garage door spring
replacement · garage door opener installation (LiftMaster / Chamberlain) ·
off-track / cable / roller repair · emergency garage door repair · new garage door
installation · insulated garage door · commercial / overhead door. Never promise
arrival times (rule 3).

**Do now (owner, in GHL):** reconnect the Google account; add the Suffern profile
as a second Google account and point Rockland/Bergen/Orange job photos at it; fix
the composer template so every post gets a town, a service phrase and a CTA button
with the UTM from `gbp-playbook.md` §1; check Social Planner → Posts → *Failed*
on the first of each month.

---

## 9. "Your domain rating is 3/100 — it needs to be 20" (assessment)

- **What DR is.** Domain Rating is Ahrefs' private 0–100 score of how strong a
  site's backlink profile is, on a logarithmic scale (3 → 10 is easy, 60 → 70 is
  very hard). Moz's "DA" is the same idea. **Google does not use either number.**
  They are a thermometer for links, not a ranking requirement.
- **Is 3 plausible?** Yes. A one-to-two-year-old local service site with few
  real links sits at DR 0–10. The brain already records this as the site's known
  gap ("weak backlink profile", risk 3 in `09`) and no backlink-tool data has
  ever been pulled, so 3 is believable but unverified.
- **Is "minimum 20" true?** No. There is no threshold at which Google starts
  ranking a site. Local garage-door competitors that out-rank us for "garage door
  repair queens" are DR 5–25 sites with strong profiles and reviews. What is true:
  more real links would help the county pages that sit at position 30–46 (Long
  Island, Brooklyn, Fairfield, Westchester, Bergen, Nassau) move toward page 1.
  Links do **nothing** for the map pack (proximity, categories, reviews) or for
  LSA — and those two produce most of the calls today.
- **"That's why we're not getting customers."** The data does not support that as
  the main cause. Queens GBP alone produces ~35 calls/month; organic website
  traffic is ~59 clicks/28 days. Growth is gated first by LSA/GBP reach (§3, §5),
  second by location-page depth and indexing (`SEO-GROWTH-PLAN` §4–5), and third
  by links (§6 of the same plan). DR is a symptom of the third item, not the
  explanation for the first two.
- **How to get to 100.** Nobody does — DR 90+ is Google, YouTube, Wikipedia.
  A realistic, honest target is **DR 10–20 within 6–12 months** by executing the
  plan that already exists, in order: manufacturer dealer locators (LiftMaster,
  Chamberlain, Clopay, Amarr, Wayne Dalton), remaining citations (ThomasNet, Angi,
  Houzz, Nextdoor, Apple Business Connect), chambers (Queens Chamber, Rockland
  Business Association, Business Council of Westchester), BOMA/IREM membership
  directories, local sponsorship pages, partner "preferred vendor" pages, and
  unlinked brand mentions. All of it is in `docs/fable-brain/backlinks/`
  (`implementation-roadmap.md`, `weekly-backlink-system.md`,
  `backlink-opportunities.csv`) and is white-hat only.
- **If the person is selling links** (guest posts, "DR 50 backlink packages",
  private blog networks): decline. The policy file forbids it because one bad
  batch can cost more than the links earn, and it would not fix the reach or
  depth problems above.
- **Measure it yourself, free:** Ahrefs "Website Authority Checker" and Moz
  "Domain Analysis" both give the number without an account. Record it quarterly
  in `backlink-kpi-dashboard.md` so the trend, not the single number, is what
  gets discussed.

---

Related: `docs/gbp-playbook.md`, `docs/gbp-launch-workbook.md`,
`docs/SEO-GROWTH-PLAN-2026-10-27.md`, `docs/PRIVACY-AND-MARKETING-HANDOFF-2026-09-09.md`,
`docs/fable-brain/backlinks/README.md`.
