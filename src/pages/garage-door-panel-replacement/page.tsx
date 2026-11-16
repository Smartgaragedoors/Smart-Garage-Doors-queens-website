import GuidePageTemplate from '../../components/feature/GuidePageTemplate';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';
import { PRICING, formatPrice, fromPrice } from '../../config/pricing';

/**
 * /garage-door-panel-replacement/ — one page for the "panel / section" intent.
 * Before this page the site only mentioned panels in passing (emergency page,
 * second-opinion, loading-dock). Core service page for the Queens Google
 * Business Profile, but tri-state-wide like every other service page.
 *
 * WHERE THE FACTS COME FROM
 * - Service claims are reused from copy already published on the site:
 *   emergency-repairs ("forcing a bent panel through the track makes it worse",
 *   "Panel replacement or straightening, track realignment, and a full safety
 *   check of rollers and hinges"), second-opinion ("individual panels can be
 *   replaced or straightened"), loading-dock-door-repair (section replacement
 *   "provided the model is still in production"; full door "when damage spans
 *   multiple sections or the tracks and frame are compromised").
 * - "Most panel jobs end as a repair" and the past-job list come from the CRM
 *   (`all_jobs`, 365 days to 2026-11-16): 58 jobs mention a panel or section
 *   (about 3% of all jobs), 27 of them sold. Of those 27: 19 were panel repairs
 *   (straighten / reinforce / realign), 1 was replacement panels, 2 were new
 *   doors after panel damage, 5 were new-door orders where "panel" only
 *   described the style. At 3% of jobs, do NOT call panel work "a common call".
 * - Past jobs are shown at county level with the job total, labelled as past
 *   jobs. Never add a town, street, or customer name. Only jobs the CRM shows
 *   as closed by us, with no external partner on the record, are listed.
 * - Prices: starting prices from src/config/pricing.ts only. `repairFrom`
 *   covers "panel work" per the comment in that file.
 *
 * TODO(owner): there is no published starting price for a single replacement
 *   section, so the table says "Quoted per door". Give a figure (and add it to
 *   pricing.ts) if you want one shown.
 * TODO(owner): supply 2–3 real before/after photos of panel work; the page has
 *   no job photos of its own yet.
 */

const SLUG = '/garage-door-panel-replacement/';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${buildCanonical(SLUG)}#service`,
  name: 'Garage door panel replacement and repair',
  url: buildCanonical(SLUG),
  serviceType: 'Garage door panel replacement',
  areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({ '@type': area.type, name: area.name })),
  provider: { '@id': `${BUSINESS_INFO.website}/#organization` },
};

export default function GarageDoorPanelReplacementPage() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GuidePageTemplate
        metaTitle="Garage Door Panel Replacement & Repair | NY, NJ & CT"
        metaDescription={`Dented or cracked garage door panel? We straighten, reinforce or replace the section, or quote a new door when that is the better buy. NY, NJ & CT. ${rating}★ rated.`}
        keywords="garage door panel replacement, garage door panel repair, replace garage door section, dented garage door panel, bent garage door panel repair, garage door section replacement"
        slug={SLUG}
        heroImage="doorInteriorWindows"
        badge="Dented, Cracked or Bent Sections"
        headline="Garage Door Panel Replacement & Repair"
        subheadline="A damaged section does not always mean a new door. We straighten and reinforce what can be saved, replace a single section when the model is still made, and tell you plainly when a new door is the better buy."
        showWhatsAppHero={true}
        whatsAppMessage="Hi — I have a damaged garage door panel. Sending photos for an assessment."
        intro={[
          'A sectional garage door is a stack of hinged panels, and one bad panel affects all of them. A bent section forced through the track damages the track and the neighboring panels, so the first rule after a bumper or a storm is the same: leave the door where it is and stop using the opener.',
          'What people search for is panel replacement. What most doors need is less than that. In our job records for the twelve months to November 2026, most of the panel jobs we completed ended as a repair to the existing section — straightened, reinforced or realigned — rather than a new panel. New sections were the exception, and a couple of damaged doors were replaced outright.',
          'So this page covers all three outcomes — a repair, a replacement section, or a new door — and how we choose between them. If you would rather know before anyone comes out, text photos of the door over WhatsApp and a technician replies with what it needs and what it costs.',
        ]}
        costTable={{
          title: 'Panel Work: Starting Prices',
          caption: 'A replacement section is priced by the door\'s brand, model, size and finish, so it is quoted per door rather than listed here.',
          rows: [
            { item: 'Panel repair — straighten, reinforce or realign a section', range: fromPrice(PRICING.repairFrom), notes: 'How deep the crease is, and whether hinges, rollers or the track were damaged with it' },
            { item: 'Replacement section for a current-model door', range: 'Quoted per door', notes: 'Brand, model, size, color and insulation — and whether the section is still in production' },
            { item: 'New standard steel door, installed', range: fromPrice(PRICING.doorFrom), notes: 'When damage spans multiple sections or the model is discontinued' },
            { item: 'New insulated door, installed', range: fromPrice(PRICING.insulatedDoorFrom), notes: 'Double- or triple-layer steel with an insulated core' },
          ],
        }}
        criteria={{
          title: 'Repair, Replace the Section, or Replace the Door?',
          intro: 'Three honest outcomes. Which one fits depends on the damage and on whether your door model is still made.',
          cards: [
            {
              title: 'Straighten and reinforce',
              description: 'A dent or crease in one section, with the rest of the door square. On many common door models, individual panels can be straightened. This is how most of our panel jobs end.',
              icon: 'ri-hammer-line',
            },
            {
              title: 'Replace one section',
              description: 'A section that is cracked or crushed while the tracks and the remaining panels are straight. Sectional doors are built for it, provided the model is still in production.',
              icon: 'ri-layout-row-line',
            },
            {
              title: 'Replace the door',
              description: 'Damage that spans multiple sections, or tracks and frame that are compromised. We quote panel replacement against a full new door in writing and tell you which we would pick.',
              icon: 'ri-door-open-line',
            },
            {
              title: 'Check what the impact touched',
              description: 'A hit that bends a panel can also bend the track or damage rollers and hinges. A panel job includes track realignment where it is needed and a full safety check of the rollers and hinges.',
              icon: 'ri-search-eye-line',
            },
            {
              title: 'Commercial and oversized doors',
              description: 'Dock doors, storefront sectional doors and oversized residential doors. Our panel repairs in the past year included a 12×14 door.',
              icon: 'ri-building-line',
            },
            {
              title: 'Photos before a visit',
              description: 'A dented panel is one of the problems a technician can usually read from a few clear photos. Send the whole door from outside, then the damage up close.',
              icon: 'ri-whatsapp-line',
            },
          ],
        }}
        sections={[
          {
            heading: 'What to Do Right After the Door Is Hit',
            paragraphs: [
              'Leave the door exactly where it is. A bent panel forced through the track damages the track and the neighboring panels, and that is how a one-section repair turns into a bigger job.',
            ],
            bullets: [
              'Do not run the opener. Unplug it so nobody in the house tries.',
              'Do not try to lift, push or straighten the door by hand.',
              'Photograph the damage — the whole door, then the damaged section up close — for us and for your insurer.',
              'If the door is stuck open and the house is not secure, call the emergency line rather than waiting for a booked visit.',
            ],
          },
          {
            heading: 'What Our Job Records Show',
            paragraphs: [
              'These are real panel jobs from the past year, with the total on each job. They are past jobs, not quotes — every door is assessed and priced on its own.',
            ],
            bullets: [
              'July 2026, Rockland County: roller put back in the track, bent panel straightened, weatherstrip replaced. Job total: $250.',
              'May 2026, Queens: door panel alignment rebuilt. Job total: $300.',
              'February 2026, Brooklyn: panel repair. Job total: $320.',
              'February 2026, Passaic County, NJ: panel repair. Job total: about $372.',
              'September 2026, Orange County, NY: panel repair. Job total: $490.',
              'December 2025, Westchester County: panel repair with new hinges. Job total: $1,100.',
              'May 2026, an oversized 12×14 door: panel repair. Job total: $4,990.',
              'May 2026, Putnam County: lower panel damaged, door replaced with a new non-insulated 8×7 door and the old one hauled away. Job total: $1,700.',
            ],
          },
          {
            heading: 'Why a Matching Section Is Not Always Available',
            paragraphs: [
              'A replacement section has to come from the same door model, in the same size and finish. Sectional doors are built for section replacement, provided the model is still in production — a discontinued door can force the full-door decision off one dead panel.',
              'That is why we ask for photos first: the full door from outside, far enough back to show its size and panel style, and the damaged section up close. If a matching section exists, we quote it. If it does not, we say so, and quote a repair to the existing panel and a new door side by side.',
            ],
          },
          {
            heading: 'When a New Door Is the Better Buy',
            paragraphs: [
              `Sometimes replacement is the honest answer. When damage spans multiple sections, when the tracks or frame are compromised, or when the door is old enough that new panels would be going onto worn-out hardware, a new door is usually the better buy. A standard steel door installed starts ${fromPrice(PRICING.doorFrom).toLowerCase()} and an insulated door ${fromPrice(PRICING.insulatedDoorFrom).toLowerCase()}. Financing and 0% promotional options are available.`,
              'The reverse happens too: one or two bent panels pitched as a reason for a whole new door. If you have been told that and are not sure, send us the quote and photos for a second opinion.',
            ],
          },
        ]}
        faqs={[
          {
            question: 'Can you replace just one panel of a garage door?',
            answer: 'Often, yes. On many common door models, individual panels can be replaced or straightened. Sectional doors are built for it, provided the model is still in production. When a matching section is no longer made, we repair the existing panel if it can be saved, or quote a new door.',
          },
          {
            question: 'How much does garage door panel replacement cost?',
            answer: `Panel repair — straightening, reinforcing or realigning a section — starts from ${formatPrice(PRICING.repairFrom)}. A replacement section depends on the door's brand, model, size and finish, so it is quoted per door. When a new door is the better option, a standard steel door installed starts from ${formatPrice(PRICING.doorFrom)}. Your total is confirmed before any work begins.`,
          },
          {
            question: 'Is it safe to use the door with a dented or bent panel?',
            answer: 'Not until someone has looked at it. Leave the door where it is — forcing a bent panel through the track makes it worse — and unplug the opener so nobody tries. If the door is stuck open, call the emergency line.',
          },
          {
            question: 'Do I need a whole new door if several panels are damaged?',
            answer: 'Often. When damage spans multiple sections, or the tracks and frame are compromised, a new door is normally the better buy than several replacement sections. We quote both in writing and tell you which we would pick.',
          },
          {
            question: 'Can you tell from photos whether my panel can be repaired?',
            answer: 'Usually. Text us the full door from outside and the damaged section up close, and a technician replies with what it needs. If the photos are not enough to be sure, we tell you that too.',
          },
          {
            question: 'Do you repair panels on commercial and loading dock doors?',
            answer: 'Yes. If one or two sections are crushed but the tracks and remaining panels are straight, section replacement is usually right. Full replacement makes sense when damage spans multiple sections or the tracks and frame are compromised.',
          },
          {
            question: 'Which areas do you cover for panel repair and replacement?',
            answer: 'Queens, Brooklyn, the Bronx, Staten Island and Manhattan; Nassau, Suffolk, Westchester and Rockland counties; northern and central New Jersey; and Fairfield County, Connecticut. Call to confirm availability for your address.',
          },
        ]}
        bottomLine="A damaged panel is a decision, not a verdict. Most of the time the section can be straightened and reinforced. Sometimes it needs replacing, if the model is still made. Occasionally the door is past it. We tell you which, with one total price confirmed before any work begins."
        relatedLinks={{
          title: 'Related Services',
          links: [
            { label: 'Garage Door Repair', href: '/garage-door-repair/' },
            { label: 'Off-Track Garage Door Repair', href: '/off-track-garage-door-repair/' },
            { label: 'Emergency Garage Door Repair', href: '/emergency-garage-door-repair/' },
            { label: 'New Garage Door Installation', href: '/garage-door-installation/' },
            { label: 'Free Photo Estimate', href: '/photo-estimate/' },
            { label: 'Second Opinion', href: '/second-opinion/' },
            { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
            { label: 'Garage Door Repair in Queens', href: '/queens-ny/' },
          ],
        }}
        ctaHeadline="Send Us a Photo of the Damage"
        ctaText="Call, or text photos of the door. One total price before any work begins, and a 1-year parts and labor warranty."
      />
    </>
  );
}
