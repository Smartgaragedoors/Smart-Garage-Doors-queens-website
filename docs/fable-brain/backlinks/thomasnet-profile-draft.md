# ThomasNet Supplier Profile — Draft for Owner Review

**Status: DRAFT ONLY. Nothing in this document has been submitted or uploaded
anywhere.** Review, edit, and approve before anything goes into the ThomasNet
Company Profile Manager or Catalog Manager.

Everything below is pulled from the live site codebase (`src/config/business-info.ts`,
service/commercial page content, component copy) — nothing invented. Anywhere
I couldn't verify a fact from the code, I've flagged it as a question for you
rather than guessing.

---

## ✅ Confirmed by owner (2026-07-09)

1. **Legal name:** "Smart Garage Doors" — no LLC suffix on the listing.
2. **Plan:** Free basic profile (not the paid $7K–10K tier) — keep content
   effort proportional to that; don't assume premium placement/catalog reach.
3. **Established:** 2023.
4. **Owner:** Daniel Abraham — listed as Owner (see Key Personnel below).
5. **NJ license:** 13VH14195600 — added under Certifications below.
6. **Facebook:** facebook.com/smartgaragedoorss (vanity URL — site config
   currently has the numeric `profile.php?id=...` link instead; worth updating
   `business-info.ts` to the vanity URL separately, not blocking this listing).
7. **Instagram:** instagram.com/smartgaragedoorss — matches what's already in
   the site config.

## ⚠️ Still open

- **YouTube.** A YouTube video ("Smart Garage Doors: Expert Installations &
  Repairs in Queens & Brooklyn") exists publicly, but no channel URL was
  provided — send the channel handle/URL if you want it listed.
- **LinkedIn / TikTok / X (Twitter):** none confirmed — skip unless you tell
  me otherwise.

---

## 1. Company Description (for B2B/industrial buyers)

Draft — edit freely, this is written for a facilities/procurement audience,
not homeowners:

> Smart Garage Doors is a licensed, insured garage door and loading dock door
> contractor serving commercial and residential clients across New York, New
> Jersey, and Connecticut. We install, repair, and maintain commercial overhead
> doors, loading dock doors and levelers, rolling steel service doors and
> security gates, and the operators that drive them — for warehouses,
> distribution centers, retail storefronts, parking facilities, and
> multi-location commercial accounts.
>
> Our technicians work on all major manufacturer lines, including Clopay,
> Amarr, CHI, LiftMaster, Chamberlain, Wayne Dalton, Raynor, and Genie for
> doors and operators; Kelley, Nordock, Serco, Pentalift, Blue Giant, and
> Rite-Hite dock levelers; and Cornell, Atlas, Wayne Dalton, Cookson, and
> McKeon rolling steel gates. We carry high-cycle commercial-grade springs,
> cables, rollers, and hardware rated for real duty cycles — not residential
> parts pressed into commercial service.
>
> Commercial clients use us for emergency breakdown response with priority
> dispatch, scheduled preventive maintenance contracts with written per-door
> condition records, and multi-site accounts that need one vendor across
> several facilities instead of a different contractor at every location.
> Certificates of insurance are available on request, including COIs naming a
> building, property manager, or facility owner where vendor access requires it.
>
> We serve Queens, Brooklyn, Staten Island, Long Island (Nassau & Suffolk),
> the Bronx, Westchester and Rockland counties in New York; Bergen, Passaic,
> Hudson, and Essex counties in New Jersey; and Fairfield County, Connecticut.
> Buyers choose us because we document every job with photos and a written
> summary, quote before we start work, and give one point of contact who
> knows a facility's door history instead of starting from zero on every call.

*(2 paragraphs shown broken into 4 blocks above — trim to 2–4 as ThomasNet's
field allows. Nothing here claims "authorized dealer" status for any brand —
only "we service/install," consistent with the rest of the site's copy rules.)*

---

## 2. Product Catalog (organized by category)

Note: ThomasNet's Catalog Manager is built for physical parts/products, and
you're primarily a service/installation contractor. These categories describe
what you supply and install (as verified in site copy) — frame catalog entries
as "supplied and installed by us," not "manufactured by us."

**Garage Doors**
- Sectional overhead doors — steel, aluminum, wood, fiberglass, vinyl
- Insulated sectional doors (R-6 to R-18+)
- Full-view aluminum/glass panel doors
- Carriage-house style doors
- Roll-up and side-hinged doors

**Garage Door Openers & Operators**
- Residential smart openers (WiFi, smartphone control, Alexa/Google Home/Apple HomeKit integration)
- Commercial operators — jackshaft, trolley, and hoist models (LiftMaster commercial line)

**Springs, Cables & Hardware**
- Standard residential torsion springs (~10,000-cycle rated)
- High-cycle commercial torsion springs (25,000 / 50,000 / 100,000-cycle rated)
- Cables, drums, rollers, tracks, hinges, struts

**Loading Dock Equipment**
- Dock levelers — hydraulic and mechanical (serviced brands: Kelley, Nordock, Serco, Pentalift, Blue Giant, Rite-Hite)
- Dock seals and weather seals
- Loading dock doors

**Rolling Steel Doors & Security Gates**
- Rolling steel service doors (slats, barrel springs, bottom bars, guides)
- Storefront security gates — rolling and scissor-style
- Manual chain hoist and motorized gate operators
- Serviced brands: Cornell, Atlas, Wayne Dalton, Cookson, McKeon

*(All brand names above reflect "we service/repair/install parts from these
manufacturers" — not dealer/distributor status for any of them.)*

---

## 3. Services (organized by category)

**Emergency & Repair Services**
- 24/7 emergency garage door repair
- Broken spring replacement
- Cable and roller repair
- Off-track door repair
- Panel and full-door replacement

**Installation**
- New garage door installation (residential and commercial)
- Garage door opener installation, including smart/WiFi openers
- Old door removal and disposal

**Commercial Services**
- Commercial overhead door repair and installation
- Loading dock door and dock leveler repair
- Rolling steel gate and security gate repair
- Commercial maintenance contracts — scheduled quarterly inspections, written per-door condition reports, priority breakdown dispatch
- Multi-location/multi-site account service

**Maintenance**
- Preventive maintenance tune-ups
- Safety inspections (springs, cables, tracks, photo-eye sensors)
- Lubrication and hardware adjustment

---

## 4. Key Personnel

| Name | Title |
|---|---|
| Daniel Abraham | Owner |
| Ben | Technician — Suffern, NY hub (Rockland, Westchester, Hudson Valley, Fairfield County CT, Northern NJ) |
| Luka | Technician — Brooklyn, NY hub (NYC, Long Island Nassau & western Suffolk, North Shore) |
| Yitzi | Technician — Jackson, NJ hub (Monmouth, Ocean, Middlesex, central NJ shore) |
| Dan | Technician (appears in installation/repair photos sitewide) |

Note: ThomasNet profiles usually only need 1–2 named contacts (owner +
optionally a operations/service contact) rather than the full crew — you may
want to trim this down to just Daniel Abraham, Owner, when filling out the
actual form.

---

## 5. Certifications, Licenses & Registrations

From `business-info.ts` (site's single source of truth for NAP/legal data):

- **NYC DCWP License #2130164-DCWP** (NY)
- **CT HIC Registration #HIC.0704479** (CT)
- **NJ Home Improvement Contractor Registration #13VH14195600** (NJ) —
  confirmed by owner 2026-07-09; **not yet in `business-info.ts`**, should be
  added there too so it's consistent sitewide, not just on this listing.
- General claim used sitewide: "Licensed and insured in NY, NJ, and CT."

**Still open:**
- Any manufacturer dealer/distributor certifications (none confirmed yet —
  per the backlink brain, Clopay/Amarr/Raynor/Overhead Door/Garaga/C.H.I./Haas/
  Wayne Dalton are apply-for targets, not confirmed status).

---

## 6. Social Media & Website

- **Website:** https://www.smartestgaragedoors.com
- **Facebook:** https://www.facebook.com/smartgaragedoorss
- **Instagram:** https://www.instagram.com/smartgaragedoorss/
- **Google Business Profile (Flushing/main, 486 reviews):** https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8
- **YouTube / LinkedIn / TikTok / X:** none confirmed — skip for now.

---

## 7. Logo File

Found locally: **`public/smart-garage-doors-logo.webp`**
Full path: `C:\App Projects\SGD Queens Site\public\smart-garage-doors-logo.webp`

This is a `.webp` file — ThomasNet's upload tools sometimes require `.png` or
`.jpg`. Let me know if you want me to convert a copy to a more compatible
format before you upload it.

---

## Next steps

Nothing here has been submitted anywhere. Content is now finalized against
your confirmed answers (2026-07-09) — remaining open items are just YouTube/
LinkedIn/TikTok/X (skip unless you say otherwise) and the logo file format.
Two loose ends worth fixing in the actual site config while we're at it (not
blocking this listing): sync the Facebook URL to the vanity link above, and
add the NJ license number to `business-info.ts`. Say the word and I'll make
those two small code updates. Otherwise, this document is ready for you to
copy into ThomasNet's Company Profile Manager and Catalog Manager yourself.
