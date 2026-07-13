import GuidePageTemplate from '../../components/feature/GuidePageTemplate';

/**
 * /garage-door-insulation/ — captures the "garage door insulation" query
 * cluster (812 impressions/28d at position ~7.7 as of 2026-07-13, ranking with
 * the HOMEPAGE at 0% CTR because its title says "Same-Day Repair"). No page
 * targeted this intent: /insulated-garage-door-cost-long-island/ is cost-and-
 * market-specific. This is the general educational/service page that funnels
 * to an insulated-door estimate.
 *
 * Fact discipline: generic technical truths only (R-value mechanics, panel
 * construction types, spring-balance physics). No prices — the LI cost guide
 * carries the published ranges. Our service framing is insulated door
 * installation/replacement + weather sealing, NOT retrofit kit installation
 * (unverified offering — kits are described neutrally as a DIY option).
 */

export default function GarageDoorInsulationPage() {
  return (
    <GuidePageTemplate
      metaTitle="Garage Door Insulation: R-Values, Options & Is It Worth It?"
      metaDescription="What garage door insulation actually does, how R-values work, polystyrene vs. polyurethane, and when an insulated door pays off in the NY tri-state climate."
      keywords="garage door insulation, insulated garage door, garage door r value, polyurethane vs polystyrene garage door, insulate garage door"
      slug="/garage-door-insulation/"
      heroImage="homeHero"
      badge="Insulation Guide"
      headline="Garage Door Insulation, Explained"
      subheadline="Your garage door is the largest moving wall in your house — and usually the least insulated surface on it. Here's how insulation actually works, what the options are, and when it's worth the money."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — I'm interested in an insulated garage door. Can you help me figure out my options?"
      intro={[
        'In a tri-state winter, an uninsulated single-layer steel door does almost nothing to slow heat loss — the garage tracks the outdoor temperature, and every wall or ceiling the garage shares with living space becomes a cold radiator. In summer the same physics runs in reverse: a west-facing door can push an attached garage well past the outdoor temperature by late afternoon.',
        'Insulation changes three things at once: the temperature swing in the garage, how solid and quiet the door feels, and how well the panels resist dents and flex. Whether that\'s worth paying for depends almost entirely on whether the garage is attached, what\'s above it, and how you use the space — which is what this guide helps you work out.',
        'If you already know you want numbers, the Long Island insulated-door cost guide linked below carries our published pricing ranges. If you\'re still weighing options, read on.',
      ]}
      criteria={{
        title: 'The Basics That Actually Matter',
        intro: 'Six things to understand before comparing doors — everything else is marketing.',
        cards: [
          {
            title: 'What R-Value Means',
            description:
              'R-value measures resistance to heat flow — higher is better. But it isn\'t linear in practice: going from R-0 to R-9 transforms a garage; going from R-13 to R-18 is a much smaller real-world difference. Don\'t overpay for the last few points unless the garage is heated.',
            icon: 'ri-temp-cold-line',
          },
          {
            title: 'Polystyrene vs. Polyurethane',
            description:
              'Polystyrene is a rigid foam board slotted into the panel — economical, decent R-value. Polyurethane is foamed-in-place, bonding to both steel skins — higher R-value per inch and a noticeably stiffer, quieter door.',
            icon: 'ri-stack-line',
          },
          {
            title: 'Construction Layers',
            description:
              'Single-layer doors are one steel sheet, no insulation. Double-layer adds foam backing. Triple-layer (sandwich) construction seals insulation between two steel skins — the standard for insulated doors worth buying.',
            icon: 'ri-layout-bottom-2-line',
          },
          {
            title: 'Quieter Operation',
            description:
              'The foam core damps panel vibration, so an insulated door runs noticeably quieter on the tracks — worth knowing if a bedroom or office sits above or beside the garage.',
            icon: 'ri-volume-mute-line',
          },
          {
            title: 'Stronger Panels',
            description:
              'Sandwich construction resists dents from basketballs, bikes, and hand-truck bumps far better than single-skin steel, and panels flex less in wind — a real durability difference, not just comfort.',
            icon: 'ri-shield-line',
          },
          {
            title: 'Sealing Is Half the Job',
            description:
              'An insulated panel with daylight visible at the bottom seal or side stops is defeated before it starts. Bottom seals, perimeter weatherstripping, and between-panel seals do as much for comfort as the foam itself.',
            icon: 'ri-drag-move-2-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'Insulated Door vs. Add-On Insulation Kits',
          paragraphs: [
            'DIY insulation kits — foam boards or reflective batts cut to fit each panel — exist, and for a detached storage garage they can take the edge off for little money. But they come with a mechanical catch most homeowners don\'t hear about until something breaks: garage door springs are matched to the door\'s exact weight. Adding tens of pounds of insulation changes that balance, which strains the opener, accelerates spring wear, and in the worst case leaves the door unable to stay put halfway open.',
            'A purpose-built insulated door avoids all of that: the springs are specified for the finished weight, the insulation is bonded into the panel rather than resting in it, and the R-value ratings are tested for the assembled door rather than estimated. If a door is older, dented, or due for spring work anyway, replacement is usually the smarter spend than retrofitting a kit onto tired panels.',
            'If you do add a kit to an existing door, have the spring balance checked afterward — a door that won\'t hold position halfway open is telling you the springs are now underweighted for it.',
          ],
        },
        {
          heading: 'When Insulation Is Worth It — and When It Isn\'t',
          paragraphs: [
            'The honest answer depends on what the garage touches and how it\'s used:',
          ],
          bullets: [
            'Attached garage with living space above or beside it — the strongest case; the garage wall/ceiling is effectively part of your home\'s thermal envelope',
            'Garage used as a workshop, gym, or laundry area — comfort in January and August is the difference between using the space and abandoning it half the year',
            'Bedrooms over the garage — insulation plus sealing noticeably evens out floor temperature in the room above',
            'Heated or cooled garages — insulation stops paying rent on every degree; this is where higher R-values genuinely matter',
            'Detached garage used only for parking — the weakest case; a mid-range insulated door is often still worth it for panel strength and resale, but chasing high R-values isn\'t',
          ],
        },
        {
          heading: 'What We Do',
          paragraphs: [
            'We install insulated steel garage doors from the major manufacturers we service every day — including Clopay, Amarr, and C.H.I. — across Queens, Brooklyn, Long Island, Westchester, northern New Jersey, and Fairfield County, CT. That includes measuring, spring specification for the new door\'s weight, opener compatibility, and full perimeter sealing.',
            'We also replace bottom seals and weatherstripping on existing doors — the highest-value fix per dollar if your current door is structurally fine but drafty at the edges.',
            'Not sure which side of the replace-vs-seal line you\'re on? Text us a photo of your door and we\'ll tell you honestly — it takes two minutes and costs nothing.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is garage door insulation worth it?',
          answer:
            'For an attached garage — especially with living space above or beside it, or any workshop/gym use — yes, it\'s one of the better comfort-per-dollar upgrades in the house. For a detached, parking-only garage the case is weaker: a mid-range insulated door still adds panel strength and quieter operation, but high R-values won\'t pay for themselves.',
        },
        {
          question: 'Can you insulate an existing garage door?',
          answer:
            'DIY panel kits exist and can help a storage garage, but added weight changes the door\'s spring balance — which strains the opener and wears springs faster if the balance isn\'t corrected. Bonded, purpose-built insulated doors avoid the problem entirely, and if your door is older or due for spring work, replacement is usually the smarter spend.',
        },
        {
          question: 'What R-value do I need for a garage door?',
          answer:
            'For an unheated attached garage in the NY area, roughly R-9 to R-13 covers most homes — the jump from uninsulated to R-9 does most of the work. Heated garages or rooms above the garage justify R-13 to R-18. Beyond that, returns diminish quickly unless the garage is fully conditioned.',
        },
        {
          question: 'Does an insulated garage door help in summer?',
          answer:
            'Yes — the same resistance to heat flow works in both directions. A west- or south-facing insulated door keeps an attached garage meaningfully cooler on hot afternoons, which matters for anything stored inside and for the rooms that share walls with the garage.',
        },
        {
          question: 'Will an insulated door be quieter?',
          answer:
            'Noticeably. The foam core stiffens the panels and damps vibration, so the door rattles less on the tracks and transmits less noise into the house — a real benefit when a bedroom or office sits above the garage.',
        },
      ]}
      bottomLine="Insulation is the rare garage door upgrade that changes daily comfort, not just curb appeal — but only when the situation calls for it. Attached garage, room above, workshop use, or a heated space: strong yes. Detached parking-only garage: spend modestly. Either way, sealing the door's perimeter is half the result, and any added insulation has to respect the spring balance. Text us a photo of your door and we'll give you an honest read on which path fits."
      relatedLinks={{
        title: 'Related Guides & Services',
        links: [
          { label: 'Insulated Door Cost Guide (Long Island)', href: '/insulated-garage-door-cost-long-island/' },
          { label: 'Garage Door Installation', href: '/garage-door-installation/' },
          { label: 'Spring Replacement', href: '/spring-replacement/' },
          { label: 'Maintenance & Tune-Ups', href: '/maintenance/' },
          { label: 'Free Photo Estimate', href: '/photo-estimate/' },
        ],
      }}
      ctaHeadline="Get an Honest Read on Your Door"
      ctaText="Text us a photo — we'll tell you whether sealing, a kit, or a new insulated door actually fits your situation, with no pressure either way."
    />
  );
}
