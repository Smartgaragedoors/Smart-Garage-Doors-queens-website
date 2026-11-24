import GuidePageTemplate from '../../components/feature/GuidePageTemplate';
import { PRICING, fromPrice } from '../../config/pricing';

/**
 * /garage-door-panel-replacement/ — captures the panel/section cluster the site
 * already ranked for with no page behind it. GSC export, 12 months to
 * 2026-11-23: "garage door panel replacement" 263 impr at pos 3.2, "panel
 * garage door" 498 at 5.8, "garage door section replacement" 168 at 7.0,
 * "garage panel replacement long island" 172 at 6.8, ~2,000 impressions
 * across 15 panel queries and 1 click.
 *
 * Fact discipline: prices come only from src/config/pricing.ts (panel work
 * falls under repairFrom; full doors under doorFrom). No promise that every
 * panel can be sourced — matching depends on the manufacturer still making
 * that model, which is a generic industry truth. The photo is Dan on a real
 * panel repair (same file RecentWork uses).
 */

const repair = fromPrice(PRICING.repairFrom);
const door = fromPrice(PRICING.doorFrom);

export default function GarageDoorPanelReplacementPage() {
  return (
    <GuidePageTemplate
      metaTitle="Garage Door Panel Replacement & Repair | NY, NJ, CT"
      metaDescription={`Dented or cracked garage door panel? We repair panels, replace single sections, and tell you when a new door is the better buy. Repairs ${repair.toLowerCase()}.`}
      keywords="garage door panel replacement, garage door section replacement, garage door panel repair, replace one garage door panel, dented garage door panel, garage door panel replacement long island"
      slug="/garage-door-panel-replacement/"
      heroImage="techDanDrilling"
      badge="Panel & Section Repair"
      headline="Garage Door Panel Replacement & Repair"
      subheadline="A dented, cracked or bent section doesn't always mean a new door. Send us a photo and we'll tell you honestly whether to straighten it, swap the one section, or replace the door."
      showWhatsAppHero={true}
      whatsAppMessage="Hi — one of my garage door panels is damaged. Can I send you a photo for a price?"
      intro={[
        'Most panel damage comes from the same few things: a car bumper on the bottom section, a basketball or bike against the middle, or a door that came down on something and folded. A garage door is built from horizontal sections hinged together, so the damage is usually confined to one or two of them, and that is what decides whether a single-section swap is possible.',
        'The answer depends on three things: how bad the damage is, whether the manufacturer still makes a matching section for your door, and how old the rest of the door is. We look at all three before quoting, so you are never sold a new door that a repair would have handled, or a section that won\'t match.',
        `Panel and section repairs start ${repair.toLowerCase()}, and new installed doors start ${door.toLowerCase()}. Your total is confirmed before any work begins.`,
      ]}
      featureImage={{
        src: '/images/garage-door-panel-repair-dan-hammer-smart-garage-doors.webp',
        alt: 'Dan from Smart Garage Doors straightening a dented steel garage door panel with a hammer during a panel repair',
        width: 900,
        height: 1350,
        caption: 'Dan straightening a dented steel section on a real panel repair.',
      }}
      criteria={{
        title: 'Repair, Replace One Section, or Replace the Door?',
        intro: 'What we check before recommending anything:',
        cards: [
          {
            title: 'Minor Dents',
            description: 'Shallow dents that haven\'t creased the steel or touched the hinges can often be worked out or left alone. If the door still runs straight and the section isn\'t cracked, a repair is usually enough.',
            icon: 'ri-hammer-line',
          },
          {
            title: 'Creased or Cracked Sections',
            description: 'A sharp crease weakens the section and can spread with every cycle. Cracks along the stiles or at a hinge line mean the section should be replaced, not patched.',
            icon: 'ri-error-warning-line',
          },
          {
            title: 'Bent Bottom Section',
            description: 'The bottom section takes the most hits and carries the bottom seal and cable brackets. A bent one can stop the door from sealing or closing evenly, so it is the section most often replaced on its own.',
            icon: 'ri-layout-bottom-line',
          },
          {
            title: 'Can the Section Be Matched?',
            description: 'A replacement section has to match the manufacturer, model, panel design, color and thickness. We read the door\'s labels and measure it so the new section matches the old ones.',
            icon: 'ri-search-eye-line',
          },
          {
            title: 'Discontinued Models',
            description: 'If the model is out of production, an exact match may not exist. That\'s when replacing the whole door, or every section at once, can cost less than hunting for a near-match that never looks right.',
            icon: 'ri-archive-line',
          },
          {
            title: 'Age of the Whole Door',
            description: 'Spending on one section of a door that is old, rusting, or on tired springs and rollers often doesn\'t make sense. We tell you if the rest of the door is close to the end, and leave the decision to you.',
            icon: 'ri-time-line',
          },
        ],
      }}
      sections={[
        {
          heading: 'How a Panel Replacement Works',
          paragraphs: [
            'A single-section replacement is done on site. The door is secured with the spring tension safely managed, the damaged section is unhinged and removed, and the new section is fitted with its hinges, rollers and, for a bottom section, the cable brackets and bottom seal. Then the door is balanced and run through full cycles to check that it travels and seals evenly.',
            'Do not try this with the springs under tension. The bottom brackets are connected to the cables and springs that hold the full weight of the door, and loosening them without managing that tension is one of the most common ways people get badly hurt by garage doors.',
          ],
        },
        {
          heading: 'Signs You Need Panel Work, Not Just Cosmetics',
          paragraphs: ['Get a damaged section looked at sooner rather than later if you notice any of these:'],
          bullets: [
            'The door now runs crooked, binds, or a roller is jumping out of the track near the damaged section',
            'Daylight shows along the bottom or between sections that used to seal',
            'A hinge or bracket on the damaged section is bent, cracked or pulling out of the steel',
            'The opener reverses or strains on a door that used to close smoothly',
            'The section is creased across its width, not just dented in the middle',
          ],
        },
        {
          heading: 'What We Need From You',
          paragraphs: [
            'Text us two photos: one of the whole door from the outside and one close-up of the damage. If you can, add a photo of the manufacturer\'s sticker, usually on the inside edge of a section or on the end stile. That\'s often enough for us to tell you whether a matching section exists and roughly where the job lands, before anyone comes out.',
            'We work on doors from the major manufacturers, including Clopay, Amarr, C.H.I. and Wayne Dalton, across Queens, Brooklyn, the Bronx, Manhattan, Long Island, Westchester, Rockland, northern New Jersey and Fairfield County, CT.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can you replace just one garage door panel?',
          answer: 'Usually, yes, if the manufacturer still makes a matching section for your door model. We check the manufacturer, model, panel design, color and thickness first. If an exact match isn\'t available, we tell you before quoting and go over your other options.',
        },
        {
          question: 'How much does garage door panel replacement cost?',
          answer: `Panel and section repairs start ${repair.toLowerCase()}. A replacement section is priced once we have identified your door model, because the section itself varies a lot by manufacturer and design. New installed doors start ${door.toLowerCase()}. We confirm one total price, including any fees and taxes, before any work begins.`,
        },
        {
          question: 'Is it cheaper to replace a panel or the whole garage door?',
          answer: 'One section is usually cheaper when the door is in good shape and a matching section is still made. When two or more sections are damaged, the model is discontinued, or the springs and rollers are also worn out, a new door is often the better value. We give you both numbers so you can decide.',
        },
        {
          question: 'Can a dented garage door panel be repaired instead of replaced?',
          answer: 'Shallow dents that haven\'t creased the steel or damaged a hinge can often be worked out or simply left, since they don\'t affect how the door runs. Sharp creases, cracks and bent bottom sections affect strength and sealing and are better replaced.',
        },
        {
          question: 'Will a new panel match my old door?',
          answer: 'When the same model is still in production, the panel design and factory color match. On an older door, the new section can look slightly brighter than panels that have been in the sun for years. We point that out before ordering so there are no surprises.',
        },
        {
          question: 'Is it safe to replace a garage door panel myself?',
          answer: 'We don\'t recommend it. The bottom section is attached to the cables and springs that hold the door\'s full weight, and removing it without managing spring tension can cause serious injury. Upper sections are less risky, but the door still has to be re-balanced afterward.',
        },
      ]}
      bottomLine="A damaged panel is often a smaller job than it looks. A single section can usually be replaced if it can still be matched, and minor dents often don't need anything at all. The real decision is whether the rest of the door is worth keeping. Text us two photos and the manufacturer's sticker, and we'll tell you which way to go."
      relatedLinks={{
        title: 'Related Services & Guides',
        links: [
          { label: 'Garage Door Repair', href: '/garage-door-repair/' },
          { label: 'Garage Door Styles & Materials', href: '/garage-door-styles/' },
          { label: 'New Garage Door Installation', href: '/garage-door-installation/' },
          { label: 'Emergency Repair', href: '/emergency-garage-door-repair/' },
          { label: 'Cable & Roller Repair', href: '/cable-roller-repair/' },
          { label: 'Free Photo Estimate', href: '/photo-estimate/' },
        ],
      }}
      ctaHeadline="Send Us a Photo of the Damage"
      ctaText="Two photos and the manufacturer's sticker are usually enough for us to tell you whether to repair, replace one section, or replace the door."
    />
  );
}
