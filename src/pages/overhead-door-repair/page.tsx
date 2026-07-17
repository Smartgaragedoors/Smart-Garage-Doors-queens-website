import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

/**
 * /overhead-door-repair/ — captures the "overhead door" query cluster found in
 * GSC 2026-07-17 (250+ impressions/90d ranking 16-55 with NO page speaking the
 * term): "overhead door repair crown heights" 85 imp, "overhead doors" 64,
 * "emergency overhead door repair" 21, "overhead door spring replacement"
 * pos 5, plus six "overhead door * fairfield ct" variants. "Overhead door" is
 * the commercial/industry vocabulary; the site previously only said
 * "commercial garage door" and "rolling gate".
 *
 * Note: "Overhead Door" is also a competitor brand (see /vs-overhead-door/) —
 * this page uses the term ONLY as the generic service noun, makes no brand
 * affiliation claims, and links the comparison page for brand-intent visitors.
 */

export default function OverheadDoorRepairPage() {
  return (
    <GuidePageTemplate
      metaTitle="Overhead Door Repair & Installation | 24/7 | NY, NJ & CT"
      metaDescription="24/7 overhead door repair for warehouses, storefronts & garages — sectional and rolling steel service doors across NYC, Long Island, NJ & Fairfield CT."
      keywords="overhead door repair, overhead doors, emergency overhead door repair, overhead door spring replacement, overhead door installation, commercial overhead door service"
      slug="/overhead-door-repair/"
      heroImage="homeHero"
      badge="Overhead Door Service — Commercial & Residential"
      headline="Overhead Door Repair, Around the Clock"
      subheadline="Sectional overhead doors, rolling steel service doors, and the operators that drive them — repaired and installed across NYC, Long Island, Westchester, northern NJ, and Fairfield County CT. 24/7 emergency line, exact ETA when you call."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — we have an overhead door problem. Sending photos for a fast assessment."
      showCommercialLeadForm={true}
      intro={[
        'Whether the sign on the building says warehouse, firehouse, auto shop, or storefront, the door everyone depends on is an overhead door — a sectional door riding tracks to the ceiling, or a rolling steel door coiling above the opening. When it stops halfway, comes off track, or drops a spring, the building stops working with it.',
        'We repair and install overhead doors of every construction: commercial sectional doors, rolling steel service doors and grilles, insulated dock doors, and high-lift and vertical-lift track configurations, along with the commercial operators — jackshaft, trolley, and hoist — that drive them. Residential overhead doors get the same treatment on the same trucks.',
        'Down door right now? Call the number above — the emergency line answers 24/7 and commercial calls get priority dispatch with an exact ETA. Not urgent? Text photos over WhatsApp and a technician will reply with what it needs and what it costs.',
      ]}
      criteria={{
        title: 'What We Repair on Overhead Doors',
        intro: 'The failure points are predictable — springs, tracks, cables, and operators account for most down doors we see.',
        cards: [
          {
            title: 'Spring Replacement',
            description:
              'Torsion and extension springs for sectional doors, barrel springs for rolling steel — matched to the door\'s weight and duty cycle, including high-cycle springs for doors running 20+ cycles a day.',
            icon: 'ri-loop-left-line',
          },
          {
            title: 'Off-Track & Impact Damage',
            description:
              'Forklift strikes, bent tracks, seized rollers, and panel damage — straightened, re-tracked, or replaced section by section so one bad panel doesn\'t force a whole new door.',
            icon: 'ri-alert-line',
          },
          {
            title: 'Cables & Drums',
            description:
              'Frayed, snapped, or jumped cables re-spooled and replaced with drums checked for wear — the fix that prevents the crooked, jammed door from becoming a dropped one.',
            icon: 'ri-links-line',
          },
          {
            title: 'Operators & Openers',
            description:
              'Commercial jackshaft, trolley, and hoist operators plus residential openers — repair, replacement, limit and force adjustment, and safety-eye alignment.',
            icon: 'ri-settings-4-line',
          },
          {
            title: 'Rolling Steel Doors',
            description:
              'Slat replacement, barrel spring service, and motor repair on rolling steel service doors and security grilles — storefronts, warehouses, and parking garages.',
            icon: 'ri-shield-flash-line',
          },
          {
            title: 'Full Door Installation',
            description:
              'New sectional and rolling steel overhead doors, spec\'d for the opening and duty cycle, with springs and operator matched to the finished weight.',
            icon: 'ri-door-open-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'Commercial Overhead Doors: Downtime Is the Real Cost',
          paragraphs: [
            'For a warehouse or distribution operation, an overhead door failure isn\'t a repair ticket — it\'s a blocked bay, a trailer that can\'t unload, or a building that can\'t be secured overnight. That\'s why commercial calls get priority dispatch on our 24/7 line, technicians carry high-cycle springs and common commercial parts on the truck, and every job closes with a written record of what was done.',
            'We service overhead doors for warehouses, distribution centers, auto shops, fire stations, self-storage facilities, and retail storefronts across Queens, Brooklyn, Staten Island, Long Island, Westchester and Rockland counties, Bergen, Passaic, Hudson, and Essex counties in New Jersey, and Fairfield County, Connecticut.',
            'Multi-site accounts get one contact, one rate structure, and per-door records at every location — and our maintenance contracts put the whole thing on a scheduled footing with priority breakdown response built in.',
          ],
        },
        {
          heading: 'Residential Overhead Doors Too',
          paragraphs: [
            'The same overhead door mechanics live in your home garage — torsion springs, tracks, rollers, and an opener. We repair and replace residential overhead doors across the same service area, same-day in most cases, with upfront pricing before any work begins and a 1-year parts and labor warranty.',
          ],
        },
        {
          heading: 'Looking for the Overhead Door™ Brand?',
          paragraphs: [
            '"Overhead door" is the industry term for the door type — it\'s also the name of a specific national company. If you\'re comparing us against the Overhead Door Corporation\'s local distributors, we\'ve written an honest side-by-side comparison so you can decide with the facts in front of you.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Do you offer emergency overhead door repair?',
          answer:
            'Yes — the emergency line answers 24/7, and commercial down-door calls get priority dispatch. We give you an exact ETA when you call based on technician position at that moment.',
        },
        {
          question: 'What does overhead door spring replacement involve?',
          answer:
            'The springs are matched to the door\'s exact weight and rated in cycles. We replace torsion and extension springs on sectional doors and barrel springs on rolling steel doors, balance-test the door afterward, and for high-use commercial doors we quote high-cycle springs rated for the door\'s real duty.',
        },
        {
          question: 'Do you repair rolling steel overhead doors?',
          answer:
            'Yes — slats, barrel springs, motors, and manual chain hoists on rolling steel service doors and security grilles. It\'s one of our core commercial services, for storefronts and warehouses alike.',
        },
        {
          question: 'Which areas do you cover for overhead door service?',
          answer:
            'Queens, Brooklyn, Staten Island, and the Bronx; Long Island (Nassau and Suffolk); Westchester and Rockland counties; Bergen, Passaic, Hudson, and Essex counties in New Jersey; and Fairfield County, Connecticut.',
        },
        {
          question: 'Do you handle overhead doors for warehouses with loading docks?',
          answer:
            'Yes — insulated dock doors, high-lift track, and the dock levelers and shelters around them. See our loading dock door repair page for the full scope.',
        },
        {
          question: 'Are you affiliated with the Overhead Door brand?',
          answer:
            'No — we\'re Smart Garage Doors, an independent local company. "Overhead door" on this page refers to the door type. If you\'re deciding between us and an Overhead Door Corporation distributor, see our comparison page for an honest side-by-side.',
        },
      ]}
      bottomLine="Sectional or rolling steel, warehouse bay or home garage — overhead doors fail at the same points: springs, cables, tracks, and operators. We fix all of them across NYC, Long Island, Westchester, northern NJ, and Fairfield County CT, with a 24/7 emergency line, priority commercial dispatch, upfront pricing, and a written record on every job."
      relatedLinks={{
        title: 'Related Services',
        links: [
          { label: 'Commercial Garage Door Repair', href: '/commercial-garage-door-repair/' },
          { label: 'Rolling Steel Gate Repair', href: '/rolling-steel-gate-repair/' },
          { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
          { label: 'Commercial Maintenance Contracts', href: '/commercial-maintenance-contracts/' },
          { label: 'Spring Replacement', href: '/spring-replacement/' },
          { label: 'vs. Overhead Door Corporation', href: '/vs-overhead-door/' },
        ],
      }}
      ctaHeadline="Get Your Overhead Door Back in Service"
      ctaText="24/7 emergency line with priority commercial dispatch — or text photos of the door and get an assessment with pricing before we roll a truck."
    />
  );
}
