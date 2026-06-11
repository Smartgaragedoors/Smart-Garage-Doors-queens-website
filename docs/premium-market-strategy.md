# Premium-Market SEO & Lead-Quality Strategy

**Goal:** dominate local SEO and lead generation in high-income service areas around Queens and the
tri-state region — optimizing for *lead quality* (insulated/custom door installs, opener upgrades,
full packages) over raw lead volume.

Last updated: 2026-06-11

---

## 1. Where things stand (audit summary)

### Healthy (verified 2026-06-11)
- Per-route prerendered HTML in production (Puppeteer post-build, deployed 2026-06-03) — every
  indexable route serves unique title/description/canonical/H1/LocalBusiness+FAQ schema.
- Self-referencing canonicals via `buildCanonical()` (https, www, trailing slash) on every page.
- 404 page is `noindex, nofollow`.
- Sitemap is generated at build time (`scripts/generate-sitemap.js`) from real routes; redirects
  excluded automatically.
- Default OG image (`/hero-van-1280.webp`) on every page; per-page og:title/og:url correct.
- `/services/installation/` repositioned as a quote-funnel page (distinct title/intent from
  `/garage-door-installation/`) — no longer a duplicate.
- Form leads mirrored to CRM; full click/lead tracking in GA4 (commits 4816e3a, 13efaeb, 3f3b0b8).

### Fixed this session
- Remaining LSA-risk arrival promises ("Most calls are reached within 45–75 minutes") softened to
  honest availability language on: Flushing, Nassau County, Scarsdale, White Plains, Westchester
  County, Suffern + Brooklyn comparison row. Honest *drive-time facts* from real hubs were kept.
- `/flushing-ny/` un-redirected — the business's own address city now has its real page routed,
  indexed, and in the sitemap.
- LocationPageTemplate reviews section now renders only when a page has attributable quotes
  (new pages launch without fabricated testimonials).

### 16 new premium pages shipped this session (Tier 1 rollout)
| Cluster | Pages | Dispatch hub (honest) |
|---|---|---|
| Queens | /flushing-ny/, /forest-hills-ny/, /bayside-ny/ | Flushing base |
| Nassau North Shore | /great-neck-ny/, /manhasset-ny/, /roslyn-ny/, /port-washington-ny/, /garden-city-ny/ | Queens/Brooklyn hubs |
| Westchester | /rye-ny/, /bronxville-ny/, /larchmont-ny/, /chappaqua-ny/ | Suffern-based Westchester tech |
| Bergen NJ | /ridgewood-nj/, /tenafly-nj/ | Suffern base |
| Monmouth NJ | /rumson-nj/, /holmdel-nj/ | Jackson NJ tech |

Each: unique H1/title/meta, 6 real neighborhoods with home-style context, 6 town-specific FAQs
(FAQ schema), premium angles (insulated/carriage/custom doors, quiet belt-drive, smart WiFi
openers, battery backup, coastal hardware), repair-vs-replace section, honest hub language,
no fabricated reviews/job history, no minute promises.

---

## 2. Next city waves (in priority order)

**Wave 2 — SHIPPED 2026-06-11 (13 pages):** /whitestone-ny/ (covers Malba/Beechhurst),
/jamaica-estates-ny/ (covers Fresh Meadows/Holliswood), /syosset-ny/, /oyster-bay-ny/,
/rockville-centre-ny/, /old-westbury-ny/ (covers Brookville/Muttontown), /mamaroneck-ny/,
/harrison-ny/ (covers Purchase), /armonk-ny/, /alpine-nj/ (covers Northern Valley borders),
/fort-lee-nj/ (covers Englewood Cliffs), /colts-neck-nj/, /red-bank-nj/ (covers Fair Haven/
Little Silver). Also: sitewide proximity-language rewrite — all hub-city and drive-time
disclosures removed from location pages; regional-technician framing only (owner directive).

**Wave 2b (remaining Tier 1):** Douglaston–Little Neck (if Bayside gets traction), Bedford,
Irvington, Spring Lake, Tarrytown/Dobbs Ferry.

**Wave 3 (Tier 2):** Huntington, Glen Cove, Plainview/Woodbury/Melville, Montclair,
Livingston/Short Hills/Summit/Westfield (only if Jackson/Suffern dispatch is practical),
Tarrytown/Dobbs Ferry/Ardsley, Mount Kisco, Trumbull, Ridgefield.

**Rules per page (unchanged):** real neighborhoods, premium service angles, FAQ schema, honest
service-area language, no fake addresses, no fabricated proof, interlink within the cluster.
Add real before/after photos and city-mention reviews as they accumulate — pages are structured
to accept them later.

## 3. Competitor content plan

Existing: `/vs-precision-garage-door/`, `/vs-overhead-door/` (both indexed).
Add next (same legal rules — truthful, "offerings vary by franchise/location" disclaimer,
neutral tables, no unsupported competitor claims):
1. "Best garage door companies for premium homes in Queens" (list-style, we appear honestly among criteria)
2. "Precision Garage Door alternatives in Nassau County"
3. "What to compare before hiring a garage door company for a high-end home"
4. `/vs-sears-garage-doors/` or other franchise brands only if search volume justifies.

## 4. Bottom-of-funnel content calendar (one per week, premium intent)

1. Best garage doors for luxury homes in Queens (link: forest-hills, jamaica-estates, installation)
2. Insulated garage doors: are they worth it on Long Island? (great-neck, manhasset, nassau)
3. Carriage-house vs modern steel doors (garden-city, ridgewood, installation)
4. Quiet garage door openers for attached garages (bronxville, larchmont, opener page)
5. Smart garage door opener installation in Westchester (scarsdale, chappaqua, rye)
6. Garage door replacement cost in Nassau County (nassau cluster + book-now)
7. Garage door installation cost in Scarsdale (scarsdale + westchester cluster)
8. Best garage doors for curb appeal before selling (realtor angle — links everywhere)
9. LiftMaster smart opener installation guide (opener page + smart FAQs)
10. Repair vs replace: when a garage door is worth upgrading (all city pages link here)
11. Custom garage door options for high-end homes (kings point, rumson, tenafly)
12. Best garage doors for coastal/weather-exposed homes (port-washington, rye, rumson, larchmont)

Each: strong CTAs (call / book / WhatsApp photo estimate), internal links to premium city pages,
no generic filler. Blog infrastructure already exists (`/blog/[slug]/`).

## 5. GBP optimization checklist (do in GBP dashboard — not code)

- [ ] Service areas: set up to 20, weighted premium — Forest Hills, Bayside, Whitestone, Jamaica
  Estates, Fresh Meadows (Queens); Great Neck, Manhasset, Roslyn, Port Washington, Garden City,
  Syosset (Nassau); Scarsdale, Rye, Bronxville, Larchmont (Westchester); Greenwich, Stamford,
  Darien (CT); Ridgewood, Tenafly (NJ).
- [ ] Services list: add "Insulated garage door installation", "Carriage-style garage doors",
  "Custom garage doors", "Smart/WiFi opener installation", "Quiet belt-drive opener upgrade",
  "Emergency garage door repair", "Spring replacement", "Full door + opener packages".
- [ ] Photos: upload real before/after from premium jobs weekly; geotag where the platform allows.
- [ ] Posts: 1/week alternating premium service spotlight ↔ recent local job (real ones only).
- [ ] Review requests: after every completed job, text the direct review link; ask customers (when
  true) to mention the town, the service, and what stood out. Never script or incentivize content.
- [ ] Review replies: thank by name, naturally repeat city + service ("Glad the new insulated door
  in Manhasset is working out…").
- [ ] Brand-name consistency: keep GBP name exactly matching signage/legal usage — do not append
  cities or keywords to the business name (suspension risk).

## 6. Local authority / backlinks (outreach list)

- Chambers of commerce: Great Neck, Garden City, Scarsdale, Rye, Greenwich, Westport, Ridgewood.
- Realtor/stager/builder partner pages (curb-appeal angle); offer a "pre-listing garage door
  assessment" they can link to.
- Interior designers, GCs, property managers in Nassau North Shore + Westchester.
- Manufacturer dealer locators: Clopay, LiftMaster, Wayne Dalton, Amarr (verify/claim listings).
- HOA & community newsletters (Bay Terrace, Garden City sections, North Shore Towers, Holmdel
  developments) — sponsorships, not link schemes.
- Publish real before/after case studies per premium town as link-worthy assets.

## 7. Lead-quality analytics (track in GA4/CRM)

- Calls, form submits, WhatsApp clicks **by landing page** (already instrumented — segment new
  premium pages once indexed).
- Lead mix: repair vs install/upgrade per source and per city page.
- Install-estimate requests as a separate conversion from generic "book now".
- GSC: clicks/impressions for premium-city queries (set up regex filter: forest hills|great neck|
  manhasset|roslyn|port washington|garden city|rye|bronxville|larchmont|chappaqua|ridgewood|
  tenafly|rumson|holmdel|bayside|flushing).
- GBP insights: calls + direction/website actions monthly.
- Review velocity (reviews/month, % mentioning premium services).
- Competitor-page (/vs-*) conversion rate.
- If CRM captures job value: average ticket by source + landing page → the real success metric.

## 8. 30 / 60 / 90 roadmap

**Days 0–30:** deploy this rollout; submit sitemap in GSC + request indexing for the 16 new URLs;
GBP service-area + services update; first 4 blog articles; start chamber/dealer-locator listings.
**Days 31–60:** Wave 2 city pages (8–10); 4 more articles; 2 new competitor pages; first realtor/
builder partnerships; collect city-tagged photos + reviews and add real proof to new pages.
**Days 61–90:** Wave 3 selective pages; remaining articles; case studies; evaluate GSC data —
double-down on towns showing impressions; prune/merge any page with no impressions after 90 days.

## 8b. High-intent page layer — SHIPPED 2026-06-11

Built on the new reusable `GuidePageTemplate` (src/components/feature/GuidePageTemplate.tsx —
hero, prose sections, cost table, criteria cards, FAQ schema, WhatsApp CTA, related links):

| Page | Intent captured |
|---|---|
| /photo-estimate/ | "garage door photo estimate", "send photos quote" — WhatsApp funnel, now indexable |
| /second-opinion/ | "do I really need a new garage door", quote-shoppers mid-decision |
| /local-vs-national-garage-door-company/ | franchise-alternative searches, neutral editorial |
| /best-garage-door-company-queens/ | "best garage door company queens" — criteria guide, no self-crowning |
| /garage-door-replacement-cost-nassau-county/ | high-ticket replacement cost intent, Nassau |
| /garage-door-installation-cost-westchester/ | same, Westchester |
| /insulated-garage-door-cost-long-island/ | premium product cost intent, LI |
| /liftmaster-opener-installation/ | brand-intent ("LiftMaster installation near me") — no dealer claims |

All: prerendered (106/106 OK), FAQ schema, sitemap + robots + footer links wired,
pricing canon consistent, compliance scan clean (no hub cities, minutes, #1 claims).
GBP dashboard work: see docs/gbp-playbook.md.

### Next in this layer (backlog, in priority order)
1. **Cost pages wave 2:** custom garage door cost Greenwich/Fairfield County; opener
   installation cost Great Neck/Nassau; emergency repair cost Westchester. Same template.
2. **Buyer guides wave 2:** "best garage door companies in Nassau County",
   "…for luxury homes in Westchester/Greenwich". Same criteria-based format.
3. **Problem pages (city + symptom):** "garage door won't open", "broken spring",
   "door off track" × Scarsdale/Great Neck/Greenwich/Queens — only 3–4 to start, each
   needs unique diagnostic content (use GuidePageTemplate; WhatsApp hero).
4. **Case-study pages (needs real jobs):** template spec — Problem → Diagnosis → Solution
   → Parts used → Timeline → Before/after photo → CTA + city/service links. URL:
   /projects/<service>-<town>/. Launch only with real photos; 1 per premium town as they accumulate.
5. **Image layer (needs real photos):** replace stock-style heroes with real city-tagged
   job photos; descriptive filenames + alt ("insulated Clopay install, Garden City NY").
   Current alt-text hygiene is fine; the gap is photo authenticity, not markup.
6. **Realtor/home-sale content:** "garage door upgrades before selling" blog cluster
   (calendar item 8) + outreach page for realtor partnerships.

## 9. Standing working rules

No doorway pages, no fake locations, no fabricated reviews/job history, no minute-level arrival
promises, no "cheap/lowest price" positioning. Premium language: upfront pricing, premium parts,
quiet operation, clean installation, licensed & insured, warranty-backed, same-day availability.
