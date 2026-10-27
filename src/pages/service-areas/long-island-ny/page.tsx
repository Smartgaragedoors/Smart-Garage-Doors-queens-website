import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';
import { LOCATIONS } from '../../../config/branchContacts';

// Long Island — the REGIONAL HUB for Nassau + Suffolk. It owns the island-wide
// queries ("garage door repair long island", "custom garage doors long island")
// and links DOWN to /nassau-county-ny/ and /suffolk-county-ny/ with exact
// anchors. Nassau-specific pricing and tune-up detail lives on the Nassau page
// (2026-10-27 audit: the two pages were splitting the same Nassau queries).
//
// localJobPhotos: the two owner-confirmed Long Island install photos (same
// assignment as RecentWork.tsx, owner-confirmed 2026-07-14). The gallery photos
// in the custom-door section carry no location claim. No Suffolk/Long Island
// entries exist in the repo's job logs, so there is no recentJobs block here.
// Reviews stay empty: googleReviews.generated.json has no Long Island-tagged
// quotes, so the Google profile link is the proof instead.
// TODO(owner): supply 3 Nassau/Suffolk jobs from the CRM (date, town, work done, total price)
// TODO(owner): confirm East End (Hamptons / North Fork) coverage — the Suffolk page
// says western and central Suffolk, so this page keeps the East End call-ahead only.
export default function LongIslandNY() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;

  return (
    <LocationPageTemplate
      metaTitle="Garage Door Repair & Custom Doors on Long Island, NY"
      metaDescription={`Garage door repair, installation & custom doors across Long Island — Nassau & Suffolk counties. Total-price quotes, ${rating}★ ${reviewCount} reviews. Licensed & insured.`}
      keywords="garage door repair Long Island, custom garage doors Long Island, garage door installation Long Island, garage doors Long Island, garage door replacement Long Island"
      slug="/long-island-ny/"
      cityName="Long Island"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7891', longitude: '-73.1350' }}
      heroTitle="Garage Door Repair & Custom Doors Across Long Island, NY"
      localIntroduction="Garage door repair, new door installation and custom doors for homes across Long Island — all of Nassau County and western and central Suffolk. Our technicians covering the island confirm the scope and the total price before any work starts."
      reviewProfileUrl={LOCATIONS.queens.mapsUrl}
      reviewProfileLabel="Smart Garage Doors Google profile"
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      localJobPhotos={[
        {
          image: '/images/jobs/brown-raised-panel-double-garage-doors-brick-home.webp',
          alt: 'Two matching brown raised-panel garage doors with windows installed on a Long Island, NY brick home',
          title: 'Double Door Replacement',
          result: 'Two matching doors, one visit',
        },
        {
          image: '/images/jobs/wide-double-garage-door-window-inserts.webp',
          alt: 'Wide double garage door with two rows of divided-light window inserts, freshly installed on Long Island, NY',
          title: 'Double-Width Door Install',
          result: 'Flush panels, full window row',
        },
      ]}
      focusSections={[
        {
          id: 'custom-doors',
          eyebrow: 'Installation & custom doors',
          heading: 'Garage Door Installation & Custom Garage Doors on Long Island',
          paragraphs: [
            'The garage door is the largest opening in a Long Island home\'s envelope and the first thing anyone sees from the street. We install steel, insulated, carriage-style, full-view glass and custom-sized doors for colonials, capes, splits and estate-style homes across Nassau and Suffolk, at every price point.',
            'Custom means matching the house, not just the opening: flush modern panels in wood-grain finishes, long or short raised panels, window rows and decorative inserts, carriage-house hardware, aluminum-and-glass full-view doors, and custom sizing for openings no stock door fits. Near the water we spec galvanized tracks and coastal-grade fasteners, and wind-load-rated doors where the location calls for it.',
            'Every installation includes new tracks, rollers and hinges, springs balanced to the new door, weather sealing, haul-away of the old door and a 1-year parts and labor warranty. Standard steel doors start around $800 installed; carriage-style runs $2,500–$6,500 and true wood, custom or full-view glass $4,000–$10,000+, all total prices inclusive of any fees, surcharges and applicable taxes. Financing and 0% promotional options are available on door replacements.',
          ],
          links: [
            { href: '/garage-door-installation/', label: 'New garage door installation' },
            { href: '/garage-door-replacement-cost-nassau-county/', label: 'Nassau County garage door replacement cost' },
            { href: '/insulated-garage-door-cost-long-island/', label: 'Insulated garage door cost on Long Island' },
          ],
          images: [
            {
              src: '/images/gallery/modern-flush-wood-grain-garage-door-side-windows-900.webp',
              alt: 'Modern flush-panel garage door in a wood-grain finish with a column of long windows on one side and black trim — installed by Smart Garage Doors',
              width: 900,
              height: 506,
            },
            {
              src: '/images/gallery/full-view-aluminum-glass-garage-door-900.webp',
              alt: 'Full-view garage door with a black aluminum frame and glass panels, torsion springs above and a wall-mounted opener — installed by Smart Garage Doors',
              width: 900,
              height: 1200,
            },
          ],
        },
        {
          id: 'repair',
          eyebrow: 'Repair across the island',
          heading: 'Garage Door Repair on Long Island, County by County',
          paragraphs: [
            'Broken springs, snapped cables, worn rollers, doors off track, dented panels and openers that will not lift — we repair them across Long Island, in Nassau and in western and central Suffolk. Repairs run $150–$300, spring replacement $175–$350 and opener repair $150–$350, total prices inclusive of any fees, surcharges and applicable taxes, confirmed before the work starts.',
            'For town-level detail — what replacement costs in Nassau, which Suffolk towns we cover, tune-ups and maintenance — start with your county page.',
          ],
          links: [
            { href: '/nassau-county-ny/', label: 'Garage door repair in Nassau County' },
            { href: '/suffolk-county-ny/', label: 'Garage door repair in Suffolk County' },
            { href: '/emergency-garage-door-repair/', label: 'Emergency garage door repair' },
          ],
        },
      ]}
      areaLinks={{
        heading: 'Garage Door Repair by County and Town on Long Island',
        intro: 'Start with your county page, or go straight to your town.',
        featured: [
          { href: '/nassau-county-ny/', label: 'Garage door repair in Nassau County', description: 'The Nassau page: replacement and installation pricing, tune-ups and maintenance, and repair services for Nassau homes from Great Neck to Valley Stream.' },
          { href: '/suffolk-county-ny/', label: 'Garage door repair in Suffolk County', description: 'Western and central Suffolk — Huntington, Smithtown, Hauppauge, Commack, Babylon, Bay Shore, Islip and Brentwood.' },
        ],
        townsTitle: 'Town pages',
        towns: [
          { href: '/great-neck-ny/', label: 'Great Neck, NY' },
          { href: '/manhasset-ny/', label: 'Manhasset, NY' },
          { href: '/port-washington-ny/', label: 'Port Washington, NY' },
          { href: '/roslyn-ny/', label: 'Roslyn, NY' },
          { href: '/old-westbury-ny/', label: 'Old Westbury, NY' },
          { href: '/syosset-ny/', label: 'Syosset, NY' },
          { href: '/oyster-bay-ny/', label: 'Oyster Bay, NY' },
          { href: '/garden-city-ny/', label: 'Garden City, NY' },
          { href: '/rockville-centre-ny/', label: 'Rockville Centre, NY' },
          { href: '/hauppauge-ny/', label: 'Hauppauge, NY' },
          { href: '/smithtown-ny/', label: 'Smithtown, NY' },
        ],
      }}
      neighborhoods={[
        { name: 'Nassau — North Shore', description: 'Great Neck, Manhasset, Port Washington, Roslyn and Oyster Bay: premium homes where the door has to match the architecture, and salt air that calls for galvanized tracks and coastal-grade fasteners.' },
        { name: 'Nassau — South Shore & Mid-Island', description: 'Rockville Centre, Valley Stream, Garden City, Hicksville and Plainview: established neighborhoods of colonials, capes and splits with attached garages, where insulated replacements and spring and opener repairs are the usual work.' },
        { name: 'Suffolk — North Shore', description: 'Huntington, Cold Spring Harbor, Smithtown and St. James: North Shore Suffolk homes with premium garage doors. We install and service all the high-end brands here.' },
        { name: 'Suffolk — Central', description: 'Hauppauge, Commack, Islip and Brentwood: dense residential areas and light commercial properties with a high volume of spring replacements and opener upgrades.' },
        { name: 'Suffolk — South Shore', description: 'Babylon, Bay Shore and the Farmingdale border: South Shore communities covered on our Suffolk routes, with wind-load-rated doors specified where the location calls for it.' },
        { name: 'East End — Hamptons & North Fork', description: 'Seasonal and year-round homes further east. Our regular coverage is Nassau and western and central Suffolk; for East End addresses, call ahead and a dispatcher confirms availability before anything is booked.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'What parts of Long Island do you serve?', answer: 'All of Nassau County — Great Neck, Manhasset, Garden City, Rockville Centre, Valley Stream and every town in between — plus western and central Suffolk County: Huntington, Commack, Smithtown, Hauppauge, Babylon, Bay Shore, Islip and Brentwood. For East End addresses, call ahead and a dispatcher confirms availability.' },
        { question: 'How does scheduling work on Long Island?', answer: 'Call and a dispatcher checks current technician availability for your town. Our technicians cover Nassau County and western and central Suffolk, North Shore to South Shore; the arrival window depends on the technician\'s current job and traffic, and we confirm an honest window on the call rather than promising a time.' },
        { question: 'Do you install custom garage doors on Long Island?', answer: 'Yes. We install steel, insulated, carriage-style, full-view aluminum-and-glass, wood and custom-sized doors across Nassau and Suffolk, with window rows, decorative inserts, and wood-grain or flush modern finishes matched to colonials, capes, splits and estate-style homes. Carriage-style doors run $2,500–$6,500 installed and true wood, custom or full-view glass doors $4,000–$10,000+, total prices inclusive of any fees, surcharges and applicable taxes. Text us photos of your current door for an exact quote.' },
        { question: 'What does garage door repair cost on Long Island?', answer: 'Basic repairs run $150–$300, spring replacement $175–$350, opener repair $150–$350 — all total prices inclusive of any fees, surcharges, and applicable taxes. We quote upfront before any work begins, and every repair carries a 1-year parts and labor warranty.' },
        { question: 'What does a new garage door cost on Long Island?', answer: 'A standard single steel door typically runs $800–$1,600 installed, an insulated double- or triple-layer door $1,200–$2,800, carriage-style $2,500–$6,500 and custom, wood or full-view glass $4,000–$10,000+. Our Nassau County garage door replacement cost guide has the full breakdown and what a complete quote includes; its ranges are typical for our whole service area.' },
        { question: 'Do you offer garage door tune-ups or maintenance on Long Island?', answer: 'Yes. A tune-up covers a full inspection, lubrication, balance test and safety-sensor check, and annual maintenance plans are available. Nassau homeowners can read what a tune-up includes on our Nassau County page; Suffolk homeowners should start from the Suffolk County page.' },
        { question: 'Do you cover the Hamptons and the North Fork?', answer: 'Our regular coverage is Nassau County and western and central Suffolk. For East End addresses, call and a dispatcher confirms availability before anything is booked.' },
        { question: 'What brands do you service on Long Island?', answer: 'All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and specialty brands used in custom installations.' },
        { question: 'Is Smart Garage Doors a good choice for garage door repair on Long Island?', answer: `We're rated ${rating}★ across ${reviewCount} Google reviews, licensed under NYC DCWP License #2130164-DCWP, and quote pricing upfront before any work begins. Every repair and installation is backed by a 1-year parts and labor warranty.` },
      ]}
    />
  );
}
