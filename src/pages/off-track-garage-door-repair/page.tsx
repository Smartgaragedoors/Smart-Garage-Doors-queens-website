import GuidePageTemplate from '../../components/feature/GuidePageTemplate';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';
import { PRICING, formatPrice, fromPrice } from '../../config/pricing';

/**
 * /off-track-garage-door-repair/ — one page for the "door off its track"
 * intent. Until now that search landed on the emergency page (triage for every
 * emergency) or the cable & roller page (hardware wear). This page owns the one
 * failure: why doors leave the track, what to do, how it is put back, and what
 * past jobs cost. Core service page for the Queens Google Business Profile,
 * tri-state-wide like every other service page.
 *
 * WHERE THE FACTS COME FROM
 * - Service claims are reused from copy already published on the site:
 *   emergency-repairs ("A door off its track can fall", "We reseat the door,
 *   replace damaged rollers or cables, and find the cause"), the emergency
 *   guide blog post ("has usually lost a cable"), second-opinion ("realignment
 *   with new rollers is a standard repair, generally from $150"),
 *   cable-roller-repair (track straightening vs replacement; cables under
 *   extreme tension), overhead-door-repair (forklift strikes, section-by-section
 *   replacement, priority commercial dispatch).
 * - "A regular call" and the past-job list come from the CRM (`all_jobs`,
 *   365 days to 2026-11-16): 29 jobs describe a door off its track (9 sold) and
 *   114 mention track work of any kind (58 sold) — roughly 1.5% and 6% of all
 *   jobs. Regular, not frequent: do NOT call it "our most common call".
 * - Past jobs are shown at county / neighborhood level with the job total,
 *   labelled as past jobs. Never add a street or a customer name. Only jobs
 *   the CRM shows as closed by us, with no external partner on the record, are
 *   listed (jobs in stage "Closed Other Comp" were left out on purpose).
 * - Prices: starting prices from src/config/pricing.ts only.
 * - No arrival-time promises: "call for an exact ETA" is the house line.
 *
 * TODO(owner): supply 2–3 real photos of an off-track door before and after;
 *   the page has no job photos of its own yet.
 */

const SLUG = '/off-track-garage-door-repair/';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${buildCanonical(SLUG)}#service`,
  name: 'Off-track garage door repair',
  url: buildCanonical(SLUG),
  serviceType: 'Off-track garage door repair and track realignment',
  areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({ '@type': area.type, name: area.name })),
  provider: { '@id': `${BUSINESS_INFO.website}/#organization` },
};

export default function OffTrackGarageDoorRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GuidePageTemplate
        metaTitle="Off-Track Garage Door Repair | NY, NJ & CT"
        metaDescription="Garage door off its track or hanging crooked? Do not run the opener. We reseat the door, replace failed rollers or cables and realign the track. NY, NJ & CT."
        keywords="off track garage door repair, garage door off track, garage door came off track, garage door track repair, garage door track realignment, garage door roller out of track"
        slug={SLUG}
        heroImage="techDanDrilling"
        badge="Door Crooked, Jammed or Off the Track"
        headline="Off-Track Garage Door Repair"
        subheadline="Do not run the opener and do not try to lift it. We reseat the door, replace the rollers or cables that failed, realign the track and find the cause. Emergency line available — call for an exact ETA."
        showWhatsAppHero={true}
        whatsAppMessage="Hi — my garage door is off its track. Sending photos."
        intro={[
          'A garage door that has come off its track looks worse than it usually is. Off-track doors look dramatic, but realignment with new rollers is a standard repair. What makes it urgent is safety, not cost: a door off its track can fall, so nobody should run the opener or try to lift it until it has been secured.',
          'Doors do not leave the track for no reason. A door that has come off its track or dropped on one side has usually lost a cable; worn rollers, a bent track, a broken spring and a bump from the car are the other causes we find. Putting the door back without fixing the cause only books the next call, so we find the cause first.',
          'It is a regular call for us across Queens, Brooklyn, Long Island, Westchester and New Jersey — from a single roller out of a home garage track to a commercial roll-up door that has left its guides. Past jobs, with their totals, are listed further down this page.',
        ]}
        costTable={{
          title: 'Off-Track Repair: Starting Prices',
          caption: 'Which line applies depends on why the door left the track. Past jobs with their totals are listed further down.',
          rows: [
            { item: 'Reseat the door, realign the track, replace rollers', range: fromPrice(PRICING.repairFrom), notes: 'How many rollers are damaged, and whether the track is bent or only out of line' },
            { item: 'Cable and roller replacement', range: fromPrice(PRICING.cableRollerFrom), notes: 'When a slipped or snapped cable let one side of the door drop' },
            { item: 'Spring replacement', range: fromPrice(PRICING.springFrom), notes: 'When a broken spring is what started it; springs are replaced in pairs' },
            { item: 'Service visit when nothing needs repair', range: formatPrice(PRICING.diagnosticVisit), notes: 'If the door checks out, this is all you pay' },
          ],
        }}
        criteria={{
          title: 'Why Garage Doors Come Off the Track',
          intro: 'The repair depends on the cause, so the first job is finding it.',
          cards: [
            {
              title: 'A cable let go',
              description: 'The usual story behind a door that has dropped on one side. When a cable slips or snaps, the door is no longer lifted evenly and ends up jammed diagonally in its tracks.',
              icon: 'ri-links-line',
            },
            {
              title: 'Worn or damaged rollers',
              description: 'Worn rollers do not roll smoothly, and a cracked or flattened roller can leave the track altogether. We have been called to doors where the rollers kept coming out on both sides.',
              icon: 'ri-record-circle-line',
            },
            {
              title: 'A bent or loose track',
              description: 'Minor track damage — small dents or slight bends — can often be straightened. Severely bent, rusted or warped track is replaced.',
              icon: 'ri-road-map-line',
            },
            {
              title: 'Hit by the car',
              description: 'An impact bends panels and track together. Forcing a bent panel through the track makes it worse, so the door should stay exactly where it stopped.',
              icon: 'ri-car-line',
            },
            {
              title: 'A broken spring',
              description: 'A spring break can damage the cables and bearings with it. When that is what happened, the springs are replaced and the door rebalanced as part of the same repair.',
              icon: 'ri-settings-4-line',
            },
            {
              title: 'Forced entry',
              description: 'A door that has been pried at can be left jammed or out of its track. We have repaired track and replaced rollers after a break-in.',
              icon: 'ri-door-lock-line',
            },
          ],
        }}
        sections={[
          {
            heading: 'First, Make It Safe',
            paragraphs: [
              'This is the garage door problem people most often make worse. A door off its track can fall, and the cables and springs attached to it are under extreme tension.',
            ],
            bullets: [
              'Do not run the opener. Unplug it so nobody in the house tries.',
              'Do not try to lift the door, straighten it, or push the rollers back in.',
              'Keep people and pets out of the garage until the door is secured.',
              'If the door is stuck open or the car is trapped, call the emergency line and say so. A door that will not close is a security problem, and it is prioritized.',
              'A photo of the door, and of the roller or cable that came loose, helps the technician arrive with the right parts.',
            ],
          },
          {
            heading: 'How We Put a Door Back on Its Track',
            paragraphs: [
              'The visible problem is the roller outside the track. The repair is everything that let it get there.',
            ],
            bullets: [
              'Secure the door first, so it cannot drop while it is being worked on.',
              'Inspect the cables, drums, springs, rollers, hinges and both tracks to find the cause.',
              'Reseat the door and replace the damaged rollers or cables.',
              'Straighten and realign the track, or replace the length of track that cannot be saved.',
              'Run a full safety check of the rollers and hinges, rebalance the door and test it with the opener.',
              'Tell you what caused it, so it does not happen again.',
            ],
          },
          {
            heading: 'Past Off-Track Jobs From Our Records',
            paragraphs: [
              'Real jobs from the past year, with the total on each. They are past jobs, not quotes — the spread shows how much the cause matters.',
            ],
            bullets: [
              'May 2026, Brooklyn: rollers coming out of the tracks on both sides. Job total: $220.',
              'June 2026, Fresh Meadows, Queens: door misaligned and off its tracks; reattached to the track and one roller replaced. Job total: $350.',
              'March 2026, Union County, NJ: track repair and new cables on a door that kept getting stuck. Job total: $360.',
              'June 2026, Westchester County: cable off; new cable and bottom bracket, track realigned. Job total: $489.',
              'March 2026, Queens: roller and track problem on one side of the door. Job total: $550.',
              'October 2026, Nassau County: a door that had been off its track for years, with failed springs. New springs, pulleys, cables, rollers and weatherstrip. Job total: $1,700.',
              'September 2026, Queens: commercial roll-up door off its track. Track alignment, slat adjustment and spring adjustment. Job total: $2,231.',
            ],
          },
          {
            heading: 'Does an Off-Track Door Mean a New Door?',
            paragraphs: [
              'Usually not. A door declared "off its tracks beyond repair" is one of the verdicts we see most often in second opinions, and realignment with new rollers is a standard repair.',
              'Replacement comes into it when the door was bent on the way out. If panels are creased, our panel replacement and repair page explains how one damaged section can often be straightened or replaced. When damage spans multiple sections, or the tracks and frame are compromised, we quote the repair against a new door and tell you which we would pick.',
            ],
          },
          {
            heading: 'Commercial and Roll-Up Doors',
            paragraphs: [
              'Sectional doors on warehouses and storefronts leave the track for the same reasons home doors do, plus one more: forklift and trailer strikes. Rolling steel doors come out of their guides instead. We repair both — bent tracks straightened or replaced, seized rollers replaced, panels replaced section by section so one bad panel does not force a whole new door — and commercial calls get priority dispatch on the emergency line.',
            ],
          },
        ]}
        faqs={[
          {
            question: 'Can I put my garage door back on the track myself?',
            answer: 'We strongly advise against it. A door off its track can fall, and the cables and springs attached to it are under extreme tension. Do not run the opener, do not try to lift or straighten the door, and keep people and pets out of the garage until it is secured.',
          },
          {
            question: 'How much does it cost to put a garage door back on track?',
            answer: `Reseating the door and realigning the track with new rollers generally starts from ${formatPrice(PRICING.repairFrom)}. If a cable let go, cable and roller replacement starts from ${formatPrice(PRICING.cableRollerFrom)}; if a broken spring caused it, spring replacement starts from ${formatPrice(PRICING.springFrom)}. Your total is confirmed before any work begins.`,
          },
          {
            question: 'Is a garage door off its track an emergency?',
            answer: 'It is if the door is stuck open, the car is trapped, or the door is hanging and could fall. Call the emergency line and say what is happening; a dispatcher checks current technician availability. Call for an exact ETA. If the door is closed and stable, leave it shut, unplug the opener and book a visit.',
          },
          {
            question: 'Why did my garage door come off the track?',
            answer: 'A door that has come off its track or dropped on one side has usually lost a cable. Worn or cracked rollers, a bent or loose track, a broken spring and an impact from the car are the other causes we find. We identify which one it was before putting the door back.',
          },
          {
            question: 'Does an off-track door mean I need a new garage door?',
            answer: 'Usually not. Off-track doors look dramatic, but realignment with new rollers is a standard repair. A new door only comes into it when panels were badly bent on the way out, or the tracks and frame are compromised.',
          },
          {
            question: 'Can a bent garage door track be repaired, or does it need replacing?',
            answer: 'Minor track damage such as small dents or slight bends can often be straightened. Severely damaged track — large dents, major bends, rusted or warped sections — typically needs replacement for the door to run safely.',
          },
          {
            question: 'Do you fix off-track commercial and roll-up doors?',
            answer: 'Yes. In September 2026 we put a commercial roll-up door in Queens back on its track with a track alignment, slat adjustment and spring adjustment. Commercial calls get priority dispatch on the emergency line.',
          },
        ]}
        bottomLine="An off-track door is a safety problem first and a standard repair second. Leave it alone, unplug the opener and call. We reseat the door, replace what failed, realign the track and tell you why it happened, with one total price confirmed before any work begins."
        relatedLinks={{
          title: 'Related Services',
          links: [
            { label: 'Cable & Roller Repair', href: '/cable-roller-repair/' },
            { label: 'Emergency Garage Door Repair', href: '/emergency-garage-door-repair/' },
            { label: 'Garage Door Repair', href: '/garage-door-repair/' },
            { label: 'Spring Replacement', href: '/spring-replacement/' },
            { label: 'Garage Door Panel Replacement', href: '/garage-door-panel-replacement/' },
            { label: 'Free Photo Estimate', href: '/photo-estimate/' },
            { label: 'Overhead Door Repair', href: '/overhead-door-repair/' },
            { label: 'Garage Door Repair in Queens', href: '/queens-ny/' },
            { label: 'Garage Door Repair in Fresh Meadows', href: '/fresh-meadows-ny/' },
          ],
        }}
        ctaHeadline="Door Off Its Track? Leave It and Call"
        ctaText="Emergency line available — call for an exact ETA. One total price before any work begins, and a 1-year parts and labor warranty."
      />
    </>
  );
}
