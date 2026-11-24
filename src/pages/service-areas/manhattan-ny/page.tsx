import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { LOCATIONS } from '../../../config/branchContacts';

// Manhattan — new location at 323 W 96th St (Upper West Side / Manhattan Valley),
// owner-provided 2026-09-22. Phone comes from LOCATIONS.manhattan ((929) 456-5610,
// the dedicated GHL line) so the CTAs, tracking label and LocalBusiness schema
// always match the number the customer dials.
//
// reviews={[]} and no recentJobs: the CRM holds one Manhattan customer (a
// commercial account) and no verified job detail yet. Add jobs only from the
// job log — never invent them.
export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Garage Door & Torsion Spring Repair in Manhattan, NY"
      metaDescription="Broken garage door spring in Manhattan? Torsion spring, opener and rolling gate repair from our W 96th St location. Springs from $175. Call (929) 456-5610."
      keywords="Manhattan garage door repair, garage door spring repair Manhattan, torsion spring repair Manhattan NY, broken spring repair NYC, garage door repair NYC, rolling gate repair Manhattan, garage door opener repair Manhattan, parking garage door repair Manhattan"
      slug="/manhattan-ny/"
      cityName="Manhattan"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7959', longitude: '-73.9742' }}
      phone={LOCATIONS.manhattan.phone}
      phoneTel={LOCATIONS.manhattan.phoneTel}
      localIntroduction="Broken springs are the most common garage door call we get in Manhattan, on townhouse garages and building garages alike. We replace torsion and extension springs, repair openers and rolling gates, and confirm the total price before any work starts."
      services={[
        { icon: 'ri-settings-4-line', title: 'Torsion Spring Repair', description: 'Broken torsion springs replaced in matched pairs with high-cycle springs sized to your door\'s weight. Springs from $175.' },
        { icon: 'ri-alarm-warning-line', title: 'Broken Spring Emergencies', description: 'Door stuck shut with the car inside? Call the Manhattan line and a dispatcher checks current technician availability.' },
        { icon: 'ri-door-closed-line', title: 'Rolling Gate Springs & Motors', description: 'Storefront and garage rolling gates: barrel springs, gate motors, chain hoists and bottom bars.' },
        { icon: 'ri-remote-control-line', title: 'Opener Repair & Install', description: 'LiftMaster, Chamberlain and Genie openers repaired, or replaced with a Wi-Fi opener.' },
        { icon: 'ri-building-2-line', title: 'Building Garage Doors', description: 'High-cycle sectional and rolling doors for co-ops, condos and parking garages, with maintenance plans for supers.' },
        { icon: 'ri-links-line', title: 'Cables, Rollers & Off-Track Doors', description: 'Snapped cables, worn rollers and doors that came off the track, fixed and re-balanced.' },
      ]}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[
        {
          name: 'Upper West Side & Manhattan Valley',
          description: 'Our own block — the Manhattan location is on West 96th Street. Pre-war buildings with below-grade parking garages, a handful of private townhouse garages on the side streets, and rolling gates on the Broadway and Amsterdam storefronts.',
        },
        {
          name: 'Upper East Side & Yorkville',
          description: 'Building garages with sectional or rolling steel doors that run hundreds of cycles a day, plus townhouse garages off the avenues. Supers and managing agents call us for doors the building crew cannot get moving.',
        },
        {
          name: 'Harlem, Hamilton Heights & Washington Heights',
          description: 'Brownstone garages, mixed-use buildings and hill streets where doors take more weather. Rolling gate motors, springs and off-track doors are the everyday calls here.',
        },
        {
          name: 'Inwood & Marble Hill',
          description: 'The northern tip, closer to our Bronx work than to Midtown — attached and detached residential garages and small commercial doors along Broadway and 207th Street.',
        },
        {
          name: 'Chelsea, West Village & the Far West Side',
          description: 'Loft buildings, converted warehouses and commercial garages along the West Side Highway corridor. Rolling steel doors, high-cycle openers and loading-dock equipment for commercial tenants.',
        },
        {
          name: 'Midtown & Downtown parking garages',
          description: 'Parking-structure doors and gates that cannot be out of service for a day. We repair and replace commercial door systems and set up maintenance contracts for operators with several locations.',
        },
      ]}
      reviews={[]}
      faqs={[
        {
          question: 'Do you actually have a location in Manhattan?',
          answer: 'Yes — 323 West 96th Street on the Upper West Side. It is the base for our Manhattan work, and the same address appears on this page, in our footer, and in our business listings. Call and a dispatcher confirms an honest arrival window from current technician availability.',
        },
        {
          question: 'Which parts of Manhattan do you cover?',
          answer: 'All of it — Inwood and Washington Heights down through Harlem, the Upper West and Upper East Sides, Midtown, Chelsea, the Village and Lower Manhattan. Most Manhattan garage doors are on buildings rather than houses, and that is most of what we do here.',
        },
        {
          question: 'Do you work with supers, managing agents and co-op boards?',
          answer: 'Constantly. We provide a certificate of insurance before the first visit, coordinate access and elevator or garage-ramp timing with the super, and invoice the managing agent or board directly. For buildings with several doors we set up a maintenance schedule so the garage does not become an emergency.',
        },
        {
          question: 'Do you repair broken garage door springs in Manhattan?',
          answer: 'Yes. It is our most common Manhattan call. We replace broken torsion and extension springs on townhouse and building garage doors, in matched pairs, with springs sized to the door\'s actual weight, and check the cables, drums and balance while we are there. Spring replacement starts at $175, and the total is confirmed before work begins.',
        },
        {
          question: 'Is it safe to open a garage door with a broken spring?',
          answer: 'No. With a broken spring the opener or the person lifting is carrying the full weight of the door, which can damage the opener or let the door drop. Leave it closed, don\'t pull the emergency release on a raised door, and call us. If a car is trapped inside, tell the dispatcher.',
        },
        {
          question: 'Can you fix a broken spring on a rolling gate?',
          answer: 'Yes. Rolling steel gates use a spring inside the barrel above the opening, and a broken or weak barrel spring is why a gate gets heavy or won\'t stay up. We re-tension or replace the spring and service the motor or chain hoist at the same visit.',
        },
        {
          question: 'Can you repair rolling steel gates and parking garage doors?',
          answer: 'Yes. Rolling steel gates, sectional overhead doors, high-speed parking-garage doors and loading-dock equipment are a core part of our Manhattan work — including gate motors, chain hoists, bottom bars and the springs and barrels behind them.',
        },
        {
          question: 'How do you handle parking and street access in Manhattan?',
          answer: 'Our technicians work Manhattan every week and plan around alternate-side rules, loading zones and building delivery windows. Tell the dispatcher what the building requires and we arrive ready for it.',
        },
        {
          question: 'What does garage door repair cost in Manhattan?',
          answer: 'Residential repairs typically run from $150, spring replacement from $175, and opener repair from $150 — starting prices; your total, including any fees, surcharges and taxes, is confirmed before work begins, quoted before we start. Commercial and rolling-gate work is quoted per door after we see it, and the quote is the price.',
        },
        {
          question: 'What brands do you service in Manhattan?',
          answer: 'All major residential and commercial brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, Cornell and Cookson rolling doors, and more. Our trucks carry the springs, rollers, cables and gate-motor parts that cover the majority of calls.',
        },
        {
          question: 'Is Smart Garage Doors a good choice for garage door repair in Manhattan?',
          answer: 'We are licensed and insured — NYC DCWP #2130164-DCWP — with a 5.0★ average across our Google reviews and a 4.9★ Top Pro rating on Thumbtack, upfront total-price quotes, and a 1-year warranty on parts and labor. Call and a dispatcher will check current availability for Manhattan.',
        },
      ]}
    />
  );
}
