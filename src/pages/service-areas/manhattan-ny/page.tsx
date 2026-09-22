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
      metaTitle="Garage Door Repair Manhattan, NY | Smart Garage Doors"
      metaDescription="Garage door and rolling gate repair in Manhattan from our Upper West Side location on W 96th St. Springs, openers, building garage doors — total-price quotes. Call (929) 456-5610."
      keywords="Manhattan garage door repair, garage door repair NYC, rolling gate repair Manhattan, garage door opener repair Manhattan, parking garage door repair Manhattan"
      slug="/manhattan-ny/"
      cityName="Manhattan"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7959', longitude: '-73.9742' }}
      phone={LOCATIONS.manhattan.phone}
      phoneTel={LOCATIONS.manhattan.phoneTel}
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
          question: 'Can you repair rolling steel gates and parking garage doors?',
          answer: 'Yes. Rolling steel gates, sectional overhead doors, high-speed parking-garage doors and loading-dock equipment are a core part of our Manhattan work — including gate motors, chain hoists, bottom bars and the springs and barrels behind them.',
        },
        {
          question: 'How do you handle parking and street access in Manhattan?',
          answer: 'Our technicians work Manhattan every week and plan around alternate-side rules, loading zones and building delivery windows. Tell the dispatcher what the building requires and we arrive ready for it.',
        },
        {
          question: 'What does garage door repair cost in Manhattan?',
          answer: 'Residential repairs typically run $150–$300, spring replacement $175–$350, and opener repair $150–$350 — total prices, inclusive of any fees, surcharges and applicable taxes, quoted before we start. Commercial and rolling-gate work is quoted per door after we see it, and the quote is the price.',
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
