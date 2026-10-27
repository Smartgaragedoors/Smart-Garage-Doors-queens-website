import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';
import { LOCATIONS } from '../../../config/branchContacts';

// Nassau County — THE Nassau page. /long-island-ny/ is the regional hub and
// links down here; this page owns the Nassau intents GSC shows (2026-10-27
// audit): replacement/installation, tune-ups/maintenance, repair services.
// Every price below is reused from /garage-door-replacement-cost-nassau-county/
// or the repair ranges already published on this page — never add a figure
// that is not already on the site.
//
// recentJobs: the one real Nassau job in the repo (Great Neck, belt/track,
// ~$1,730 — owner's Drive jobs export + CRM notes; the same entry is on
// /great-neck-ny/). Reviews stay empty: googleReviews.generated.json has no
// Nassau-tagged quotes, so the Google profile link is the proof instead.
// TODO(owner): supply 3 Nassau/Suffolk jobs from the CRM (date, town, work done, total price)
export default function NassauCountyNY() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;

  return (
    <LocationPageTemplate
      metaTitle="Nassau County Garage Door Repair, Replacement & Tune-Ups"
      metaDescription={`Garage door repair, replacement, installation & tune-ups across Nassau County, NY — Great Neck to Rockville Centre. Total-price quotes, ${rating}★ ${reviewCount} reviews.`}
      keywords="garage door repair services Nassau County, garage door replacement Nassau County, residential garage door installation Nassau County, garage door tune-ups Nassau County, garage door maintenance Nassau County"
      slug="/nassau-county-ny/"
      cityName="Nassau County"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7329', longitude: '-73.5900' }}
      heroTitle="Garage Door Repair, Replacement & Tune-Ups in Nassau County"
      localIntroduction="Garage door repair, new door installation and seasonal tune-ups for Nassau County homes, North Shore to South Shore. Our technician covering Nassau confirms the scope and the total price before any work starts."
      reviewProfileUrl={LOCATIONS.queens.mapsUrl}
      reviewProfileLabel="Smart Garage Doors Google profile"
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      focusSections={[
        {
          id: 'replacement',
          eyebrow: 'Replacement & installation',
          heading: 'Garage Door Replacement & Installation in Nassau County',
          paragraphs: [
            'Most Nassau County replacement calls come from attached garages on the colonials, capes and splits in Garden City, Manhasset, Rockville Centre and Valley Stream, often with a bedroom or den above the garage. On those homes an insulated double- or triple-layer steel door changes how the rooms around the garage feel in January, and it is where most of our Nassau customers land.',
            'Homes near the water, the North Shore especially, deal with salt air that corrodes cheap hardware fast, so we spec galvanized tracks and coastal-grade fasteners. Some South Shore areas call for wind-load-rated doors. Windows, decorative hardware and premium finishes each add to the total, and the exact price is confirmed upfront before any work begins.',
            'We carry and install Clopay, Wayne Dalton and Amarr, from a standard single steel door to carriage-style and custom doors for Great Neck, Roslyn and Old Westbury homes. Every residential installation includes:',
          ],
          bullets: [
            'New tracks, rollers and hinges — we do not hang a new door on worn hardware',
            'New springs balanced to the exact weight of the new door',
            'Removal and haul-away of the old door and hardware',
            'Weather sealing: bottom seal and perimeter stop molding',
            'Safety inspection and opener adjustment, or a new LiftMaster opener if you bundle one',
            '1-year parts and labor warranty on the installation',
          ],
          links: [
            { href: '/garage-door-installation/', label: 'New garage door installation' },
            { href: '/insulated-garage-door-cost-long-island/', label: 'Insulated garage door cost guide' },
          ],
        },
        {
          id: 'tune-ups',
          eyebrow: 'Tune-ups & maintenance',
          heading: 'Garage Door Tune-Ups & Maintenance in Nassau County',
          paragraphs: [
            'A tune-up is the visit that keeps a Nassau door from turning into an emergency call: a full inspection of the springs, cables, rollers and tracks, lubrication of every moving part, a balance test, a track-alignment check, opener and safety-sensor testing, and a look at the weatherstripping.',
            'Salt air along the North Shore in Port Washington and Oyster Bay, and on the South Shore, wears hardware faster than it does on inland streets in Syosset or Old Westbury, so a yearly check earns its keep on coastal blocks. The tune-up is quoted as a total price before the visit, and anything the technician finds is priced before it is touched.',
            'Book a tune-up on its own, or put the visit on the calendar every year with one of our maintenance plans.',
          ],
          links: [
            { href: '/maintenance/', label: 'Garage door maintenance plans' },
            { href: '/spring-replacement/', label: 'Spring replacement' },
          ],
        },
        {
          id: 'repair',
          eyebrow: 'Repair services',
          heading: 'Garage Door Repair Services in Nassau County',
          paragraphs: [
            'Broken torsion springs, snapped cables, worn rollers, doors off track, dented panels and openers that hum but will not lift — these are the Nassau County repair calls we handle, from Great Neck to Valley Stream, in homes, apartment-building garages and small commercial buildings.',
            'Repairs run $150–$300, spring replacement $175–$350 and opener repair $150–$350 — total prices inclusive of any fees, surcharges and applicable taxes, confirmed before the work starts. Every repair is backed by a 1-year parts and labor warranty, and our trucks carry the common springs, rollers and opener parts.',
            'For a door that will not close tonight, call the emergency line and a dispatcher checks current technician availability for your address. Ask about any diagnostic or visit charge before scheduling, including visits where no repair is needed.',
          ],
          links: [
            { href: '/garage-door-repair/', label: 'Garage door repair' },
            { href: '/opener-repair-installation/', label: 'Opener repair & installation' },
            { href: '/emergency-garage-door-repair/', label: 'Emergency garage door repair' },
          ],
        },
      ]}
      pricingBlock={{
        heading: 'What Nassau County Homeowners Pay for a New Garage Door',
        intro: 'Typical installed ranges from our Nassau County cost guide. Every home differs — the exact price is confirmed upfront before any work begins.',
        rows: [
          { item: 'Standard single steel door (8x7 or 9x7)', range: '$800–$1,600', notes: 'Single-layer steel, basic panel styles, standard hardware' },
          { item: 'Insulated double-layer steel', range: '$1,200–$2,000', notes: 'Steel + polystyrene backing; warmer, sturdier, quieter' },
          { item: 'Insulated triple-layer steel (premium quiet)', range: '$1,800–$2,800', notes: 'Steel-insulation-steel sandwich; best R-value and quietest operation' },
          { item: 'Carriage-style door', range: '$2,500–$6,500', notes: 'Overlay or stamped carriage designs, decorative hardware, window options' },
          { item: 'Custom, wood, or full-view glass', range: '$4,000–$10,000+', notes: 'True wood, custom sizing, aluminum-and-glass modern doors' },
          { item: 'Double-car door (16x7)', range: 'Add roughly 50–80%', notes: 'Wider doors cost more in materials and reinforcement, not double' },
          { item: 'LiftMaster belt-drive WiFi opener (add-on)', range: '$450–$900 installed', notes: 'Quiet belt drive, myQ smartphone control, battery backup options' },
        ],
        footnote: 'All figures are total prices inclusive of any fees, surcharges, and applicable taxes. Financing and 0% promotional options are available on door replacements.',
        link: { href: '/garage-door-replacement-cost-nassau-county/', label: 'Nassau County garage door replacement cost' },
      }}
      areaLinks={{
        heading: 'Nassau County Towns We Serve',
        intro: 'Every town below has its own page with local detail. For the whole island, including Suffolk County, start from our regional page.',
        featured: [
          { href: '/long-island-ny/', label: 'Garage door repair on Long Island', description: 'Our regional page for Nassau and Suffolk, including custom door installation across the island.' },
          { href: '/garage-door-replacement-cost-nassau-county/', label: 'Nassau County garage door replacement cost', description: '2026 installed price ranges for steel, insulated, carriage-style and custom doors, and what a complete quote includes.' },
        ],
        townsTitle: 'Town pages',
        towns: [
          { href: '/great-neck-ny/', label: 'Garage door repair in Great Neck' },
          { href: '/manhasset-ny/', label: 'Garage door repair in Manhasset' },
          { href: '/garden-city-ny/', label: 'Garage door repair in Garden City' },
          { href: '/rockville-centre-ny/', label: 'Garage door repair in Rockville Centre' },
          { href: '/roslyn-ny/', label: 'Garage door repair in Roslyn' },
          { href: '/port-washington-ny/', label: 'Garage door repair in Port Washington' },
          { href: '/oyster-bay-ny/', label: 'Garage door repair in Oyster Bay' },
          { href: '/syosset-ny/', label: 'Garage door repair in Syosset' },
          { href: '/old-westbury-ny/', label: 'Garage door repair in Old Westbury' },
        ],
      }}
      recentJobs={[
        {
          service: 'Ripped opener belt, track adjustment and hardware refresh',
          area: 'Great Neck — Amherst Road area',
          detail: 'Belt-drive opener let go and the door had drifted out of track alignment. Replaced the belt, adjusted the tracks, and refreshed worn hardware in the same visit.',
          outcome: 'About $1,730 all-in — quoted in full before the work started.',
        },
      ]}
      neighborhoods={[
        { name: 'Great Neck & Manhasset', description: 'North Shore homes where the door has to match the architecture — carriage-style, wood-grain and custom doors — with galvanized tracks and coastal-grade fasteners, because salt air corrodes cheap hardware fast.' },
        { name: 'Port Washington & Roslyn', description: 'Harbor-side and hillside streets where attached garages sit under living space, so insulated double- and triple-layer doors are the usual recommendation, with coastal-grade hardware near the water.' },
        { name: 'Syosset, Woodbury & Oyster Bay', description: 'Premium communities in the Oyster Bay area where custom and carriage-style door installations are common, from standard-width colonials to estate-style homes with oversized openings.' },
        { name: 'Garden City, Old Westbury & Hempstead', description: 'A mix of older and newer homes: classic colonials and estate properties alongside postwar capes and splits. Spring and opener work is a large share of what we do here, with insulated replacements on attached garages.' },
        { name: 'Rockville Centre & Lynbrook', description: 'South Shore neighborhoods with a strong repeat customer base. Some South Shore blocks call for wind-load-rated doors, and we spec them where the location requires it.' },
        { name: 'Valley Stream & Elmont', description: 'South Nassau neighborhoods on our regular Nassau coverage, with Hicksville, Plainview, Mineola and Westbury covered mid-island.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'What parts of Nassau County do you serve?', answer: 'All of Nassau County — Great Neck, Manhasset, Port Washington, Roslyn, Old Westbury, Syosset, Woodbury, Oyster Bay, Garden City, Hempstead, Mineola, Westbury, Hicksville, Plainview, Rockville Centre, Lynbrook, Valley Stream, Elmont, and the towns in between. Great Neck, Manhasset, Garden City, Rockville Centre, Roslyn, Port Washington, Oyster Bay, Syosset and Old Westbury each have their own page with local detail.' },
        { question: 'How does scheduling work in Nassau County?', answer: 'Call and a dispatcher checks current technician availability for your town. The arrival window depends on the technician\'s current job and traffic, and we confirm an honest window on the call rather than promising a time. Emergency calls are prioritized.' },
        { question: 'What does garage door replacement cost in Nassau County?', answer: 'Most Nassau County replacements land between $800 and $2,800 installed: roughly $800–$1,600 for a standard single steel door and $1,200–$2,800 for an insulated double- or triple-layer door. Carriage-style doors run $2,500–$6,500 and custom, wood or full-view glass doors $4,000–$10,000+. A double-car door adds roughly 50–80%, not double. All figures are total prices inclusive of any fees, surcharges and applicable taxes, and the exact price is confirmed upfront before any work begins — see our Nassau County garage door replacement cost guide for the full breakdown.' },
        { question: 'Do you handle residential garage door installation in Nassau County?', answer: 'Yes. From a standard single steel door to an insulated, carriage-style or custom door, a Nassau County installation includes the door itself (Clopay, Wayne Dalton, Amarr), new tracks, rollers and hinges, new springs balanced to the door, weather sealing, haul-away of the old door, a safety inspection and opener adjustment, and a 1-year parts and labor warranty. Financing and 0% promotional options are available on door replacements.' },
        { question: 'Is an insulated garage door worth it in Nassau County?', answer: 'For most Nassau homes, yes. The majority of houses here have attached garages, and many have living space above or beside them. An insulated double- or triple-layer door keeps that whole zone warmer in winter, runs noticeably quieter, and holds up better to daily use because the sandwich construction makes the panels stiffer. If your garage is detached and you only park in it, a standard steel door is usually fine.' },
        { question: 'What does a garage door tune-up in Nassau County include?', answer: 'A full inspection of the springs, cables, rollers and tracks, lubrication of the moving parts, a balance test, a track-alignment check, opener and safety-sensor testing, and a weatherstripping check, with a plain-English report of anything wearing out. We also offer annual maintenance plans so the visit happens every year without you having to remember it — see our maintenance page for the plan tiers.' },
        { question: 'What garage door repair services do you offer in Nassau County, and what do they cost?', answer: 'Spring replacement, cable and roller repair, opener repair, off-track doors, broken or dented panels, and emergency repair. Repairs run $150–$300, spring replacement $175–$350 and opener repair $150–$350 — total prices inclusive of any fees, surcharges and applicable taxes, quoted before the work starts, with a 1-year parts and labor warranty on every repair.' },
        { question: 'What brands do you service in Nassau County?', answer: 'All brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more. For new doors we carry Clopay, Wayne Dalton and Amarr, with LiftMaster belt-drive WiFi openers as the usual add-on.' },
        { question: 'Is Smart Garage Doors a good choice for garage door repair in Nassau County?', answer: `Yes. We're rated ${rating}★ across ${reviewCount} Google reviews, licensed (NYC DCWP License #2130164-DCWP), and back every repair with a 1-year parts and labor warranty. All quotes are upfront before any work starts, with no hidden fees.` },
      ]}
    />
  );
}
