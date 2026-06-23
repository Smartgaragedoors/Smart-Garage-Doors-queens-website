# Smart Garage Doors — Growth & Commercial Plan
**Date:** June 22, 2026
**Prepared by:** Growth/Dev partner (Claude)
**Scope:** Competitor intelligence (T&W, Garage Door Pro's and Co, Precision), site-improvement plan, online-booking decision, and a commercial/B2B acquisition strategy.

> Guardrails: every site change goes branch → Vercel preview → verify → your approval → merge. No business facts (reviews, prices, claims, credentials, COI/financing terms) get published unless you confirm they're real and you honor them.

---

## 1. Where we stand today (the data behind this plan)

- **Search Console (3 mo):** 355 clicks · 120K impressions · **0.3% CTR** · **avg position 14.6** (you sit on page 2 for your money terms).
- **Indexing:** **35 of 237 pages indexed.** 139 city/area pages are "crawled/discovered – not indexed" — Google's verdict that they're too thin/templated.
- **GA4 (28 days):** 569 users, but conversions are low — `form_submit` 5, `phone_click` 2, `book_click` 10, `whatsapp_click` 0. Some traffic is bot/junk (a June 6 US spike of 1→630 in a day).
- **Form:** verified working end-to-end (Web3Forms email + CRM webhook). The drop-off is mostly shallow starts + low/low-quality traffic, not a broken form.
- **Assets you already have:** $0-service-call offer, ~479 reviews, prerendered SPA on Vercel, existing `/commercial-garage-door-repair/` and `/property-managers/` pages.

The throughline: **demand exists, but you under-capture it because (a) you rank on page 2, (b) 85% of pages aren't indexed, and (c) conversion prompts (phone, booking) are under-used.**

---

## 2. Competitor structure & sitemaps (what you asked to see)

### T&W Garage Doors Repairs — runs TWO WordPress sites
1. **twgaragedoorsrepair.com** (main; All-in-One SEO). Sitemap index → `post-sitemap.xml`, `page-sitemap.xml`, `category-sitemap.xml`, `post_tag-sitemap.xml`.
   - ~40 **city pages** across three states: NY (NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, Long Island, Buffalo, Rochester, Yonkers, Syracuse, Albany, White Plains, New Rochelle, Mount Vernon), NJ (Deal, Elizabeth, Long Branch, Orange, Red Bank, Woodbridge, Newark, Jersey City, Paterson, Edison, Lakewood, Toms River, Trenton, Clifton), CT (Greenwich, Stamford, Darien).
   - Service pages: repair, installation, spring, opener, cable. Plus blog posts + about/contact.
2. **nj.twgaragedoorsrepair.com** (separate WordPress; Rank Math). A newer, NJ-focused build. Full page list (12): home, `commercial-garage-door-repair`, `west-milford-garage-door-repair`, `bergenfield-garage-door-repair`, `garage-door-inspection-tune-up-maintenance`, `garage-door-roller-replacement`, `garage-door-panel-replacement`, `garage-door-installation`, `garage-door-spring-repair`, `emergency-garage-door-repair`, `about`, `garage-door-opener-repair`.

**Subdomains:** only `nj.` exists. `ny.` and `ct.` are not set up (empty/no sitemap).

**Why it matters / what they do right:** their `nj.` city pages carry **real before/after job photos** from actual local jobs (Bergenfield, West Milford) — that's genuinely unique content, which is exactly why those pages get indexed and rank while templated pages don't. They also keep a dedicated commercial page. The two-site setup is an SEO hedge, not something you need to copy; the **real-job-photos-per-city tactic is.**

### Garage Door Pro's and Co (garagedoorprosnj.com) — small, single-county
- WordPress, Passaic County NJ only. Pages: repair, installation, opener, maintenance; area pages (Passaic, Paterson, Clifton, Rutherford); about, gallery, blog, contact.
- **Does well:** a clean **"How It Works" 3-step** (Request quote → Written estimate → Job done), a real **FAQ section** (great for SEO + AI answers), **brand-serviced logo wall** (Clopay, Amarr, CHI, LiftMaster, Wayne Dalton, Raynor), **before/after photos + gallery**, embedded **Google Map + NAP + hours**, and a **1-year labor warranty**. Sells **commercial doors and rolling gates**.
- **Weaknesses (your opening):** sloppy execution — leftover copy from another brand ("At Garden State Garage Doors…", a "geaux overhead doors" review link), and thin/empty review proof. You can out-execute them easily.

### Precision (pdsnj.com) — the franchise gold standard
- **11,078 reviews at 95.3% five-star**, with **per-county and per-town review pages** (Bergen 2,494, Morris 2,643, Wayne 432…) and **per-technician bios + reviews**.
- **Stacked offers:** free service call ($69) with repair, $50 off door + install, $20 off openers, senior/military/first-responder 5% off.
- **Financing**, an **interactive online showroom**, **online booking** (incentivized), owner photo + personal guarantee, and a concrete trust stack (BBB A+, IDA, Angi award, "25-point safety inspection," "live operator 24/7," "we call 30 min before arrival").

---

## 3. Should you add "book right away"? — Yes, with a smart implementation

Precision's "Book Online" works because **real-time scheduling removes friction** for ready-to-buy visitors. Recommendation:

- **Add a true online scheduling option** (pick an arrival window) **alongside** the existing callback form — don't replace it. Use your existing CRM/GHL calendar if it supports booking; otherwise a scheduling widget.
- **Incentivize it** with what you already have: "Book online now — $0 service call with any repair." (Precision dangles a $69 value; yours is genuinely better.)
- **Keep the simple form as the fallback** for people who'd rather be called.
- **Instrument it** so `book_now`/scheduling completions are a GA4 key event, and watch completion rate vs. the plain form.
- **Caveat:** only expose real, dispatchable windows. A booking that can't be honored is worse than a callback. Start with a couple of daily windows and expand.

Net: worth doing, medium effort, and it directly attacks your low `book_click`/booking numbers.

---

## 4. Site-improvement plan (prioritized)

### P1 — Reviews engine with per-city display *(highest leverage — fixes conversion AND indexing)*
- Automate a **review request** to every completed job (text + email with a one-tap Google link).
- Show **count + star rating prominently** on every page (you have ~479 — surface it everywhere like T&W's "290+ 5-star").
- Put **city-specific reviews on each city page.** Real local reviews are unique content → helps those 139 unindexed pages get indexed, and is the only way to chip at Precision's review moat. *This single move serves both CRO and SEO.*

### P2 — Make city pages genuinely unique *(fixes the 35/237 indexing problem)*
- Copy T&W's best move: **real before/after job photos per city**, plus true local specifics (neighborhoods served, a real recent job description). **I need real photos/facts from you per page — I won't invent them.**
- Tighten internal links between city ↔ service ↔ guide pages; request indexing on priority pages.

### P3 — Conversion upgrades
- **Phone CTA prominence** — only 2 phone clicks in 28 days is the loudest signal on the board. Make the call button unmissable, especially sticky on mobile.
- **SMS opt-in checkbox** on forms (like T&W) → lets you **text leads back in seconds** (speed-to-lead is a top home-services lever).
- **A menu of offers**, not one: keep $0 service call, add senior/military/first-responder discount + a new-door-install incentive.
- **Trust stack:** brands-serviced logo wall, license numbers up front (you hold NYC DCWP + CT HIC), a concrete promise ("X-point safety inspection," "we call before arrival").
- **Financing** for installs (removes the price objection on high-ticket jobs).

### P4 — Online booking (Section 3).

### P5 — Content & credibility depth
- "How It Works" 3-step, FAQ with FAQ schema, project gallery, optional learning-center/videos. All help SEO, AI answers, and trust.

### P6 — Tracking hygiene (carry-over)
- Wire/verify `whatsapp_click` (currently 0), confirm which events are marked Key Events in GA4, add bot filtering.

---

## 5. Commercial / B2B strategy (warehouses, PMs, repeat high-value accounts)

**Why this is the right ambition:** commercial jobs run **$5K–$100K+**, and **maintenance contracts create recurring revenue** with far less price-shopping than residential. A commercial mix above ~30% also materially raises the value of the business. You already have `/commercial-garage-door-repair/` and `/property-managers/` — this is about turning them into a real channel.

### 5a. Who to target
Warehouses, distribution/logistics centers, manufacturing plants, auto dealerships, self-storage, fire/EMS stations, retail chains, HOAs/condos, and the **property-management and facilities-management firms** that control many buildings at once. The PM/FM firm is the highest-leverage target — one relationship = many doors.

### 5b. Website (what to build — I can do this)
Expand the commercial pages into a real hub, with dedicated, search-optimized pages for:
- Commercial overhead doors, **rolling steel gates/grilles**, **loading-dock doors & levelers**, **high-cycle spring** replacement, **roll-up door repair**, fire/smoke door service.
- **Preventive-maintenance contracts** page (the recurring-revenue product).
- A **separate "Commercial / Maintenance Quote" form** (fields that matter to B2B: company, # of doors, # of sites, building type, PO/net-terms) — not the residential form.
- Commercial proof: **case studies, real job photos, brands serviced** (Amarr/CHI/Raynor/Clopay commercial), response-time promise, and **credibility items you must confirm you can offer:** COI per building, net-30 billing, multi-site/fleet support, 24/7 emergency SLA, per-door pricing, photo documentation.

### 5c. Commercial SEO (less competitive than residential)
Target commercial-intent terms where the big residential players are thinner: "commercial garage door repair [city]", "loading dock door repair [area]", "rolling gate repair NYC/Queens", "warehouse overhead door maintenance", "high cycle spring replacement", "storefront roll-up gate repair." Build a page per service × key market.

### 5d. Outbound (this is mostly you/your team, I can support)
- Build **target lists by role, not building**: "facilities manager [city]", "property management companies [county]", logistics/3PL operators, dealership groups. Sources: county property records, building-permit feeds, LinkedIn, Google Maps lists.
- Direct outreach (call/email/LinkedIn) offering a **free site assessment + preventive-maintenance proposal**. Lead with downtime cost, not door specs.
- Local relationships: chambers/BNI, general contractors, and PM firms; ask existing commercial customers for referrals.

### 5e. Offer & process
- Productize a **Preventive Maintenance Program** (e.g., scheduled tune-ups + priority response + discounted repairs) with a simple contract template.
- Stand up a **commercial pipeline in your CRM** with a follow-up cadence, and name **one commercial point person** (sales follow-through is where most trades win or lose B2B).
- Decisions you need to make (so I can write the pages accurately): Can you offer COI per building? Net-30? A guaranteed response window? A maintenance-contract structure/price? Financing partner?

---

## 6. 30 / 60 / 90-day roadmap

**Days 0–30 (foundation + quick conversion wins)**
- Reviews: launch review-request automation; surface count/rating site-wide. *(you: enable review flow / I: site display)*
- Phone CTA prominence + SMS opt-in on forms.
- Rebuild 10 priority city pages with **real job photos + local facts**. *(you: supply photos/facts)*
- Expand commercial hub + add the dedicated commercial quote form.
- Tracking hygiene (whatsapp event, key-event config, bot filter).

**Days 31–60 (booking, offers, commercial SEO)**
- Online booking with $0-service-call incentive.
- Offer menu + financing; trust stack (badges, brands, license, guarantees).
- Publish commercial service × market pages (loading dock, rolling gate, warehouse maintenance).
- Build first commercial target list + begin PM/FM outreach.

**Days 61–90 (compounding + B2B pipeline)**
- Per-city review pages; commercial case studies.
- Launch the Preventive Maintenance Program with contract template.
- Land first 1–3 anchor PM/facilities accounts; measure and iterate.

---

## 7. What I need from you to execute
1. **Real local content** for city pages: before/after job photos + a few true specifics per city.
2. **Reviews:** access/instructions for your review-request flow (GHL?) so we automate requests and pull per-city reviews.
3. **Commercial capabilities** (yes/no + terms): COI per building, net-30, response-time SLA, maintenance-contract structure/pricing, financing partner.
4. **A commercial point person** for outbound follow-up.
5. **Approvals** at each preview before merge.

Everything in Sections 4–5 that is "build on the site" I can do directly via branch → preview → your review.
