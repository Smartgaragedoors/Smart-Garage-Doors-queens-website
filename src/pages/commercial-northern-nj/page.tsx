import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

/**
 * /commercial-northern-nj/ — the Northern NJ counterpart to
 * /commercial-long-island-ny/, called for in the growth plan and decision log.
 * Geography named here stays inside the counties already published sitewide
 * for commercial work (Bergen, Passaic, Hudson, Essex) plus Elizabeth/Union
 * (existing service-area page). The Meadowlands and port-corridor references
 * are real NJ industrial geography within those counties, not client claims.
 */

export default function CommercialNorthernNJPage() {
  return (
    <GuidePageTemplate
      metaTitle="Commercial Garage Door Repair in Northern NJ | 24/7 Service"
      metaDescription="Commercial overhead door, dock door & rolling gate repair across Bergen, Passaic, Hudson & Essex counties, NJ. 24/7 priority dispatch, COI on request."
      keywords="commercial garage door repair NJ, warehouse door repair Bergen County, loading dock repair Meadowlands, rolling gate repair Newark, commercial overhead door northern New Jersey"
      slug="/commercial-northern-nj/"
      heroImage="homeHero"
      badge="Northern New Jersey — Bergen, Passaic, Hudson & Essex"
      headline="Commercial Garage Door Repair Across Northern New Jersey"
      subheadline="Overhead doors, loading dock doors and levelers, and rolling steel gates for warehouses, distribution centers, and commercial buildings across Bergen, Passaic, Hudson, and Essex counties — 24/7 priority dispatch, COI on request."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — we have a commercial door/gate issue at our New Jersey facility. Sending photos for a fast assessment."
      showCommercialLeadForm={true}
      intro={[
        'Northern New Jersey runs one of the densest logistics footprints in the country. The Meadowlands corridor — Secaucus, Carlstadt, Moonachie, East Rutherford — is wall-to-wall warehouse and distribution space, and the port-adjacent corridor through Newark and Elizabeth moves freight around the clock. Every one of those buildings depends on dock doors, overhead doors, and rolling gates that were never designed to sit broken until Monday.',
        'We service commercial overhead sectional doors, rolling steel service doors and security gates, loading dock doors and levelers, and the commercial operators that drive them — across Bergen County (the Meadowlands towns, Fort Lee, Ridgewood, Tenafly), Passaic County (Paterson, Clifton), Hudson County (Secaucus, Jersey City corridor), and Essex County (Newark and the surrounding industrial blocks). NJ Home Improvement Contractor Registration #13VH14195600, priority dispatch on the emergency line, and a written record of every job.',
        'If a door or gate is down right now, call the number above — priority dispatch, exact ETA when you call. If it can wait an hour, send photos over WhatsApp and a technician will assess it and reply with what it needs and what it costs.',
      ]}
      criteria={{
        title: 'Commercial Door Services in Northern NJ',
        intro: 'The same commercial scope we run across the tri-state, applied to North Jersey\'s warehouse and logistics footprint.',
        cards: [
          {
            title: 'Loading Dock & Bay Doors',
            description:
              'Forklift-damage repair, track and roller service, high-cycle spring replacement, and dock leveler repair (Kelley, Nordock, Serco, Pentalift, Blue Giant, Rite-Hite) for warehouses and distribution centers.',
            icon: 'ri-truck-line',
          },
          {
            title: 'Rolling Steel Gates',
            description:
              'Slat, barrel spring, and motor repair for storefront security gates and warehouse service doors — priority dispatch for stuck-open or stuck-closed emergencies.',
            icon: 'ri-shield-flash-line',
          },
          {
            title: 'Commercial Overhead Doors',
            description:
              'Sectional and rolling steel commercial doors for light-industrial, retail, and mixed-use buildings — panel, track, hinge, cable, and spring repair.',
            icon: 'ri-door-line',
          },
          {
            title: 'Multi-Site Accounts',
            description:
              'One contact, one rate structure, and per-door records across every North Jersey location you manage — no re-explaining your facilities to a new vendor at each address.',
            icon: 'ri-building-2-line',
          },
          {
            title: 'Preventive Maintenance',
            description:
              'Scheduled quarterly inspections of springs, cables, tracks, and operators, with a written condition report per door — see our maintenance contracts page for the full program.',
            icon: 'ri-calendar-check-line',
          },
          {
            title: 'COI & Documentation',
            description:
              'Licensed and insured — NJ HIC Registration #13VH14195600 — with a certificate of insurance available on request and photo-documented work on every visit.',
            icon: 'ri-file-shield-2-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'The Meadowlands and Port Corridor Run on Doors',
          paragraphs: [
            'A large share of North Jersey\'s commercial door work comes from the logistics belt: the Meadowlands warehouse district in Bergen and Hudson counties, and the freight corridor feeding Port Newark through Newark and Elizabeth. Doors in these buildings run brutal cycle counts — cross-dock bays cycling 40+ times a day burn through standard springs in about a year — and the failure patterns are predictable: forklift-damaged tracks, worn rollers, and springs never spec\'d to the door\'s actual duty.',
            'Passaic and Essex counties add a different mix — older industrial buildings in Paterson and Newark with rolling steel service doors, plus retail storefront gates in the commercial strips. We carry parts for both ends of that spread on the same truck.',
          ],
        },
        {
          heading: 'Why North Jersey Facilities Standardize on One Vendor',
          paragraphs: [
            'Every additional door vendor multiplies overhead — another COI to chase, another rate sheet, another dispatcher who doesn\'t know your doors. Standardizing on one vendor across Bergen, Passaic, Hudson, and Essex buys per-door records at every site, one rate structure, and consistent documentation on every invoice, whether you\'re running two storefronts or a multi-building distribution lease.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Which New Jersey counties do you cover for commercial work?',
          answer:
            'Bergen, Passaic, Hudson, and Essex counties — including the Meadowlands warehouse corridor (Secaucus, Carlstadt, Moonachie, East Rutherford), Paterson, Clifton, Newark, and Elizabeth. One vendor, one contact, across all of them.',
        },
        {
          question: 'Do you service warehouses in the Meadowlands?',
          answer:
            'Yes — the Meadowlands distribution corridor is a regular part of our commercial coverage: loading dock doors and levelers, rolling gates, and commercial overhead doors, with priority dispatch for down bays.',
        },
        {
          question: 'Are you licensed in New Jersey?',
          answer:
            'Yes — NJ Home Improvement Contractor Registration #13VH14195600, and we carry insurance with a certificate of insurance available on request, named to your building or facility\'s requirements.',
        },
        {
          question: 'What\'s the difference between this page and your residential NJ pages?',
          answer:
            'This page covers commercial, warehouse, and multi-site accounts. If you\'re a homeowner in Bergen County or elsewhere in North Jersey looking for residential garage door repair, see our Bergen County service area page instead.',
        },
        {
          question: 'How fast can you respond to a down bay door or stuck gate in North Jersey?',
          answer:
            'Commercial calls get priority dispatch on our 24/7 line — we give you an exact ETA when you call based on technician position at that moment.',
        },
      ]}
      bottomLine="From Meadowlands distribution bays to Newark storefront gates, we repair commercial overhead doors, loading dock doors and levelers, and rolling steel gates across Bergen, Passaic, Hudson, and Essex counties — 24/7 priority dispatch, high-cycle parts on the truck, and per-door records for multi-site accounts."
      relatedLinks={{
        title: 'Related Commercial Services & Areas',
        links: [
          { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
          { label: 'Rolling Steel Gate Repair', href: '/rolling-steel-gate-repair/' },
          { label: 'Commercial Maintenance Contracts', href: '/commercial-maintenance-contracts/' },
          { label: 'Commercial Garage Door Repair', href: '/commercial-garage-door-repair/' },
          { label: 'For Property Managers', href: '/property-managers/' },
          { label: 'Commercial — Long Island', href: '/commercial-long-island-ny/' },
          { label: 'Bergen County, NJ (Residential)', href: '/bergen-county-nj/' },
        ],
      }}
      ctaHeadline="Get Your New Jersey Facility Back in Service"
      ctaText="24/7 commercial emergency line with priority dispatch across Bergen, Passaic, Hudson, and Essex counties — or text photos of the door for a fast assessment and price before we roll."
    />
  );
}
