# Google Business Profile Playbook — Smart Garage Doors

Dashboard work (not code). Last updated: 2026-06-11.

---

## 1. Website links + UTM tracking

GBP traffic currently shows up in GA4 as generic organic/direct. Tag every link you control:

| GBP field | Link to | URL with UTM |
|---|---|---|
| Primary website | Homepage | `https://www.smartestgaragedoors.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-profile` |
| Appointment link | Booking page | `https://www.smartestgaragedoors.com/book-now/?utm_source=google&utm_medium=organic&utm_campaign=gbp-appointment` |
| Products (each) | Matching service/cost page | append `?utm_source=google&utm_medium=organic&utm_campaign=gbp-product` |
| GBP posts | Page the post is about | append `?utm_source=google&utm_medium=organic&utm_campaign=gbp-post` |

**Why homepage (not a dedicated LP) for the primary link:** the homepage matches the business entity (name/NAP/schema), is prerendered, and already has call/book/WhatsApp paths. A separate GBP landing page would split entity signals for no conversion gain. The appointment link is where the booking intent goes.

In GA4: create a `session_campaign begins with gbp` exploration to see calls/forms/WhatsApp by GBP surface.

## 2. Services list (add all; plain descriptions, no city stuffing)

- Emergency garage door repair (24/7)
- Garage door spring replacement (same-day in most cases)
- Garage door opener repair
- LiftMaster smart/WiFi opener installation
- Quiet belt-drive opener upgrade
- Insulated garage door replacement
- Carriage-style garage door installation
- Custom and full-view glass garage doors
- Garage door cable and roller repair
- Garage door off-track repair
- New garage door + opener packages
- Free photo estimate (text us pictures on WhatsApp)

## 3. Products (each links to a page with UTM)

| Product | Price display | Link |
|---|---|---|
| Free Photo Estimate | Free | /photo-estimate/ |
| Second Opinion on a Replacement Quote | Free | /second-opinion/ |
| Garage Door Spring Replacement | From $175 | /spring-replacement/ |
| LiftMaster Belt-Drive WiFi Opener Installed | From $450 | /liftmaster-opener-installation/ |
| Insulated Garage Door Replacement | From $1,200 | /insulated-garage-door-cost-long-island/ |
| New Garage Door Installed | From $800 | /garage-door-installation/ |

## 4. Q&A seeding (post from owner account, answer from owner account — allowed and underused)

- Do you install quiet garage door openers for attached garages? → Yes — belt-drive LiftMaster with WiFi; most popular upgrade for bedrooms above the garage.
- Can I text photos of my garage door before booking? → Yes — WhatsApp photo estimate; a real technician replies with an honest range. (Link /photo-estimate/.)
- Do you install insulated garage doors? → Yes — double- and triple-layer, with honest advice on when insulation is worth it.
- Do you offer same-day spring replacement? → Often yes — call and we'll give you an exact ETA.
- Do you give second opinions on replacement quotes? → Yes, free — send the quote + photos. (Link /second-opinion/.)
- Do you service [LiftMaster/Chamberlain/Genie] openers? → Yes, all major brands.

Never answer with keyword-stuffed text; write like a human reply.

## 5. Review request SOP (compliant)

1. Finish the job, confirm the customer is happy in person.
2. Same day, text the direct Google review link from the tech's phone.
3. Say (verbal, not scripted text): "If you have a minute, a review really helps — mentioning your town and what we did helps neighbors find us."
4. Never incentivize, never gate (don't filter unhappy customers away from the link), never write or draft text for the customer.
5. Reply to every review within 48h, naturally repeating town + service when true ("Glad the new insulated door in Manhasset is working out").

Target velocity: ask 100% of completed jobs; 2–4 new reviews/week is realistic.

## 6. Photos + posts cadence

- Weekly: 2–3 real job photos (before/after of installs, opener swaps, spring jobs). Shoot wide + detail. No stock.
- Weekly post alternating: premium service spotlight ↔ real recent job ("Insulated Clopay install in Garden City this week" — only when true).
- Name files descriptively before upload (insulated-garage-door-install-garden-city.jpg).

## 7. Profile hygiene

- Business name exactly the legal/signage name — never append cities/keywords (suspension risk).
- Categories: primary "Garage door supplier" or "Garage door repair" (keep current primary; add secondary: Door supplier, Contractor as applicable).
- Service areas: up to 20, weighted premium (Forest Hills, Bayside, Whitestone, Jamaica Estates, Great Neck, Manhasset, Roslyn, Port Washington, Garden City, Syosset, Scarsdale, Rye, Bronxville, Larchmont, Greenwich, Stamford, Darien, Ridgewood NJ, Tenafly, Fort Lee).
- NAP identical everywhere (site footer, GBP, Yelp, FB, manufacturer locators). Audit quarterly.

---

## 8. Second profiles / multi-location (added 2026-08-24)

**Context:** owner asked about opening a second GBP in Pearl River, NY (Rockland
County) at an employee's home address, 124 W Crooked Hill Rd.

**Google's rule that governs this:** a service-area business gets *one* profile
per real, staffed, distinct business location — not one per town it serves. A
second profile only qualifies if the location is genuinely separate: its own
lease/deed, its own staffed hours, its own signage, its own local phone number,
and ideally its own registered DBA at that address. An employee's residence used
only as a place a technician parks a truck does **not** qualify.

**Why this is high-stakes here:** we already run a Rockland-area profile tied to
31 Deerwood Road, Suffern. Pearl River is the same county, same category, same
service area, same brand — Google reads that as a duplicate. The realistic
downside is not "the new profile doesn't rank," it's **the existing profile gets
suspended**, and profiles under one account share risk. Suffern's map presence
already reaches Pearl River, so the upside is small and the downside is a
revenue event.

**Decision:** do not open a second profile off a home address. If the owner
stands up a genuine leased, signed, staffed Pearl River location, revisit — the
checklist is the "real location" branch in the 2026-08-24 conversation notes
(lease, DBA at that address, dedicated 845 line, signage photos, video
verification showing exterior signage → interior → equipment → proof of
authority).

**What we did instead:** built `/pearl-river-ny/` as an organic service-area page
(commit "Add Pearl River, NY service-area page"), and the Pearl River / Orangetown /
Bergen-border towns belong in the **existing** profile's service-area list.
