import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

export default function CommercialMaintenanceContractsPage() {
  return (
    <GuidePageTemplate
      metaTitle="Commercial Garage Door Maintenance Contracts | NY, NJ & CT"
      metaDescription="Preventive maintenance contracts for commercial garage doors, dock doors & gates. Quarterly inspections, per-door records, priority breakdown dispatch. NY, NJ & CT."
      keywords="commercial garage door maintenance contract, preventive maintenance overhead doors, loading dock door maintenance program, facilities maintenance bay doors, commercial door inspection program"
      slug="/commercial-maintenance-contracts/"
      heroImage="homeHero"
      badge="Preventive Maintenance Programs"
      headline="Commercial Door Maintenance Contracts Across NY, NJ & CT"
      subheadline="Stop running bay doors and gates to failure. Scheduled quarterly inspections, per-door asset records, and priority breakdown dispatch — planned OPEX instead of emergency invoices."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — interested in a maintenance contract for our commercial doors/gates. Can we set up a baseline survey?"
      showCommercialLeadForm={true}
      intro={[
        'Every facilities manager has lived this one: a bay door dies at 7am with a trailer backed up to it, and somebody upstairs wants to know why a known wear item took the dock down. The door didn\'t fail suddenly — it failed predictably, after months of telegraphing it through fraying cables and a spring near the end of its rated cycle life.',
        'Commercial doors are one of the few pieces of building equipment that are simultaneously mission-critical and almost universally run to failure. We build preventive maintenance programs that change that: scheduled inspections, a written per-door asset record, and priority dispatch when something does break between visits.',
        'The practical first step isn\'t signing anything — it\'s a baseline survey. A technician walks every door and gate at your facility, documents condition and estimated remaining spring life, and flags anything needing immediate attention. Call to set one up.',
        'We run maintenance programs for warehouses, distribution centers, retail storefronts, and residential/commercial buildings across Queens, Brooklyn, Staten Island, Long Island, Westchester and Rockland counties, Bergen, Passaic, Hudson, and Essex counties in New Jersey, and Fairfield County, CT — with fast-cycling doors and levelers at food & beverage and cold-storage facilities, and documented visit records for pharma and manufacturing accounts that answer to their own compliance audits.',
      ]}
      criteria={{
        title: 'What a Real Maintenance Contract Includes',
        intro: 'The inspection scope is half the agreement — how we operate around it is the other half.',
        cards: [
          {
            title: 'Scheduled Inspections',
            description:
              'Quarterly is the standard rhythm for working dock and bay doors; high-cycle bays may justify more frequent visits, low-use doors less. The cadence follows your door\'s actual cycle count, not a flat template.',
            icon: 'ri-calendar-check-line',
          },
          {
            title: 'Written Documentation Per Visit',
            description:
              'A dated report per door: condition found, work performed, photos, and a flag list of components entering their wear window — the record that lets you budget next quarter\'s replacements.',
            icon: 'ri-file-list-3-line',
          },
          {
            title: 'Priority Breakdown Dispatch',
            description:
              'Contract accounts go to the front of the line when a door fails between visits. 24/7 emergency line, exact ETA when you call.',
            icon: 'ri-alarm-warning-line',
          },
          {
            title: 'Per-Door Asset Records',
            description:
              'Size, manufacturer, spring specs, operator model, and install date on file for every door — so repairs and quotes don\'t start with a measuring visit every time.',
            icon: 'ri-database-2-line',
          },
          {
            title: 'One Accountable Contact',
            description:
              'A single point of contact who knows your facility and door history, not a call center that treats every ticket as a first encounter.',
            icon: 'ri-user-voice-line',
          },
          {
            title: 'Pricing Fixed in Writing',
            description:
              'Labor rates and common wear parts priced in the agreement up front, so a breakdown during the contract term doesn\'t come with emergency-rate math.',
            icon: 'ri-price-tag-3-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'Cycle Counts: Why Door Failures Are Predictable',
          paragraphs: [
            'Commercial door springs are rated in cycles — one cycle is one full open and close. A door cycling 10 times a day burns roughly 2,500 cycles a year, so a standard spring lasts about four years. A door cycling 25 times a day burns through the same spring in under two years. A busy cross-dock bay cycling 40+ times a day can exhaust a standard spring in about a year.',
            'That means failure timing isn\'t random — it\'s a curve. A technician who knows a door\'s age, spring rating, and daily cycles can tell you which doors are entering their failure window, and replace the spring on a Tuesday morning you chose instead of the Friday afternoon it chooses for you.',
          ],
        },
        {
          heading: 'What a Quarterly Visit Actually Covers',
          paragraphs: [
            'A real preventive maintenance visit is a systematic pass over every wear point, not a squirt of lubricant and a signature:',
          ],
          bullets: [
            'Springs — inspected for gaps, rust, and stretch; balance-tested to confirm the springs, not the operator, carry the door\'s weight',
            'Cables and drums — checked for fraying, kinks, corrosion, and proper seating',
            'Tracks and rollers — alignment, secure mounting, impact damage, worn or seized rollers',
            'Operator — drive chain/gear condition, limit and force settings, manual disconnect function',
            'Safety devices — photo eyes and sensing edges tested; a door that closes on a person or forklift is a liability event',
            'Hardware and panels — hinges, fasteners, struts, and panel condition documented before damage spreads',
          ],
        },
        {
          heading: 'Planned OPEX Beats Emergency Spend',
          paragraphs: [
            'Without a program, door spend arrives as emergency invoices — after-hours rates, expedited parts, plus whatever the downtime cost the operation. None of it is in the budget, and finance asks why nobody saw it coming.',
            'With a program, the contract is a fixed line item, and the inspection reports give you a forward view: "bay 3\'s springs are at roughly 80% of rated life; plan replacement next quarter." Wear parts still cost money, but you replace them at scheduled-visit pricing, on a date you picked, with the rest of the facility running normally.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'How often should commercial doors be inspected?',
          answer:
            'Quarterly is the standard for working dock and bay doors; high-cycle doors (20+ cycles a day) may justify more frequent visits, and lightly used doors can often run semi-annually. A baseline survey establishes which doors need which schedule.',
        },
        {
          question: 'What does a maintenance contract cost?',
          answer:
            'It depends on the number of doors, size and type, cycle duty, and visit frequency — we quote per site after a walkthrough rather than publishing flat rates. The contract fixes the visit fee, labor rates, and common wear-part pricing in writing up front.',
        },
        {
          question: 'Does preventive maintenance actually prevent breakdowns?',
          answer:
            'It prevents most of the expensive, schedule-wrecking kind. Door components fail on predictable wear curves driven by cycle counts, so quarterly inspections catch fraying cables, worn rollers, and springs nearing rated life before they fail in service.',
        },
        {
          question: 'Do contract customers get faster emergency response?',
          answer:
            'Yes — priority dispatch for contract accounts is one of the main reasons to sign one. Contract breakdown calls go ahead of cold calls on our schedule, with an exact ETA when you call.',
        },
        {
          question: 'How do we get started?',
          answer:
            'With a baseline survey, not a signature. A technician walks every door at your facility, documents condition and estimated remaining spring life, and flags anything needing immediate attention. From there we group doors by duty cycle and propose a visit schedule and pricing in writing.',
        },
      ]}
      bottomLine="Running commercial doors to failure is a budgeting strategy — just a bad one. We build maintenance programs for warehouses, distribution centers, retail, and multi-site portfolios across Queens, Brooklyn, Staten Island, Long Island, Westchester, Rockland, Bergen, Passaic, Hudson, Essex, and Fairfield County, CT: documented quarterly inspections, per-door asset records, priority breakdown dispatch, and pricing fixed in writing before the first visit. Call for a baseline survey."
      relatedLinks={{
        title: 'Related Commercial Services',
        links: [
          { label: 'Commercial Garage Door Repair', href: '/commercial-garage-door-repair/' },
          { label: 'For Property Managers', href: '/property-managers/' },
          { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
          { label: 'Rolling Steel Gate Repair', href: '/rolling-steel-gate-repair/' },
          { label: 'Commercial — Long Island', href: '/commercial-long-island-ny/' },
          { label: 'Maintenance Contracts Guide (Blog)', href: '/blog/commercial-garage-door-maintenance-contracts/' },
          { label: 'High-Cycle Spring Ratings (Blog)', href: '/blog/commercial-garage-door-spring-cycle-ratings/' },
        ],
      }}
      ctaHeadline="Start With a Baseline Survey"
      ctaText="No commitment to get a walkthrough and a written proposal — just a clear picture of what your doors need and what it costs to keep them running."
    />
  );
}
