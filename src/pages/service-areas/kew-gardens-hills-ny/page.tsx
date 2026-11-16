import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';
import { PRICING, formatPrice } from '../../../config/pricing';

// Kew Gardens Hills — ZIP 11367.
//
// OWNER RULE (brain 06): no hub cities, no drive times, nothing about where
// technicians start from. The company's Google Business Profile address is in
// this neighborhood, and this page still does not say "our shop is here" —
// leave it that way unless the owner changes the rule.
//
// recentJobs: real closed jobs from the CRM (`all_jobs`, ZIP 11367, closed
// December 2025 – October 2026). ZIP level only — never a street, a house
// number or a customer name. The totals are what was paid on those jobs, not
// quotes. In the 365 days to 2026-11-16 the CRM holds 6 live jobs in 11367, all
// 6 sold: three repairs, two door installations and one opener installation.
//
// reviews: empty on purpose. googleReviews.generated.json has no review that
// names Kew Gardens Hills, and review text never gets a city attached to it.
//
// Every price in the FAQs is a STARTING price from src/config/pricing.ts.
//
// TODO(owner): confirm the housing description (attached and semi-attached
//   brick houses, many with a single-car garage; shared rear driveways).
// TODO(owner): the October 2026 opener job ($1,675) has an external partner on
//   its CRM record. It is shown as our job because the record is closed by us;
//   delete the entry and the matching FAQ if a partner crew did the work.
// TODO(owner): supply job photos taken in 11367 for `localJobPhotos`.
export default function KewGardensHillsNY() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;

  return (
    <LocationPageTemplate
      metaTitle="Kew Gardens Hills, NY Garage Door Repair & Opener Install"
      metaDescription={`Garage door repair in Kew Gardens Hills, Queens NY (11367): springs, cables, openers, insulated doors. Total-price quotes, ${rating}★ ${reviewCount} reviews. Licensed.`}
      keywords="Kew Gardens Hills garage door repair, garage door repair 11367, garage door opener installation Kew Gardens Hills, garage door installation Kew Gardens Hills, spring replacement Kew Gardens Hills"
      slug="/kew-gardens-hills-ny/"
      cityName="Kew Gardens Hills"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7300', longitude: '-73.8220' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      localIntroduction="Springs, cables, openers and new insulated doors for Kew Gardens Hills homes in 11367. Our technician covering central Queens confirms the scope and the total price before any work starts."
      services={[
        { icon: 'ri-door-open-line', title: 'New Insulated Doors', description: 'Standard single doors replaced with insulated steel, with new molding and the old door hauled away. A door-and-opener job is quoted as one total.' },
        { icon: 'ri-remote-control-line', title: 'Opener Installation & Repair', description: 'Belt-drive openers with a keypad and phone control, including first-time installs on garages that never had an opener. LiftMaster, Chamberlain and Genie repaired.' },
        { icon: 'ri-settings-4-line', title: 'Spring Replacement', description: 'Torsion and extension springs replaced, with the pulleys, cables and rollers checked on the same visit.' },
        { icon: 'ri-links-line', title: 'Cable & Roller Repair', description: 'Cables that have come off the drum, frayed cables and worn rollers — reseated or replaced, then the door is rebalanced.' },
        { icon: 'ri-shield-check-line', title: 'Sensors & Safety Checks', description: 'A door that will not come down is often a sensor problem. We check the photo-eye sensors, the balance and the reinforcement on the door.' },
        { icon: 'ri-alarm-warning-line', title: 'Emergency Repair', description: 'Door jammed, stuck open, or stuck with the car inside — call the emergency line and a dispatcher checks current availability.' },
      ]}
      recentJobsPeriod="December 2025 – October 2026"
      recentJobs={[
        {
          completedLabel: 'October 2026',
          area: 'Kew Gardens Hills · 11367',
          service: 'New insulated door with a belt-drive opener',
          detail: 'The old door had stopped working. Replaced it with an insulated 8×7 door and new molding, installed a belt-drive opener and a keypad, and hauled the old door away.',
          outcome: 'Door, opener, keypad and haul-away: $2,400 total, on an estimate sent before the install.',
        },
        {
          completedLabel: 'October 2026',
          area: 'Kew Gardens Hills · 11367',
          service: 'First opener for a garage that never had one',
          detail: 'Installed a smart belt-drive opener with a keypad, and replaced the springs, pulleys, cables and rollers on the same job so the new opener is lifting a balanced door.',
          outcome: 'Opener, keypad and the full hardware set: $1,675 total.',
        },
        {
          completedLabel: 'June 2026',
          area: 'Kew Gardens Hills · 11367',
          service: 'Two insulated doors on one property',
          detail: 'Both doors replaced with insulated doors, with new molding and locks. The old doors were removed and hauled away.',
          outcome: 'Both doors: $3,200 total, tax included.',
        },
        {
          completedLabel: 'December 2025',
          area: 'Kew Gardens Hills · 11367',
          service: 'Cable off the drum',
          detail: 'A lifting cable had come off. Put it back on and tested the door.',
          outcome: 'Repair only: $200 total.',
        },
      ]}
      neighborhoods={[
        { name: 'Main Street corridor', description: 'Main Street runs the length of the neighborhood. The side streets off it are lined with attached and semi-attached brick houses, many with a single-car garage.' },
        { name: 'Jewel Avenue & the north side', description: 'From Jewel Avenue up to the Long Island Expressway and Queens College. One- and two-family houses — tell the dispatcher if your garage is reached from a shared driveway.' },
        { name: 'Vleigh Place to Union Turnpike', description: 'The south end of 11367, toward the Briarwood and Kew Gardens line. The same mix of attached brick houses and detached one-family homes.' },
        { name: 'Park Drive East', description: 'The west edge, alongside Flushing Meadows–Corona Park, with garden-apartment and co-op buildings. We can send license and insurance documentation to a board or management office before work begins.' },
        { name: 'Kissena & Parsons Boulevards', description: 'The east side of the neighborhood, where it meets Pomonok, Hillcrest and Fresh Meadows. We cover those blocks too.' },
        { name: 'Pomonok', description: 'East of Kissena Boulevard, around the Pomonok Houses and the Electchester co-ops. Private houses on the surrounding blocks get the same repair, opener and door service.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'Which parts of Kew Gardens Hills do you cover?', answer: 'All of ZIP 11367 — from the Long Island Expressway down to Union Turnpike, and from Park Drive East across Main Street to Kissena and Parsons Boulevards. We also cover the neighboring blocks in Pomonok, Briarwood, Hillcrest, Flushing, Forest Hills and Fresh Meadows.' },
        { question: 'My garage has never had an opener. Can you add one?', answer: `Yes. One of our recent Kew Gardens Hills jobs was a first opener on a garage that never had one: a smart belt-drive opener and keypad, with the worn springs, pulleys, cables and rollers replaced on the same job so the new opener is not dragging tired hardware. A new opener installed starts from ${formatPrice(PRICING.openerInstallFrom)}. The opener needs power at the garage, so tell the dispatcher whether there is an outlet near the door.` },
        { question: 'My garage is at the back, off a shared driveway. Is that a problem?', answer: 'No. Shared and rear driveways are a familiar setup on the attached blocks in this part of Queens. When you call, tell the dispatcher how the garage is reached and which door is yours, so the technician arrives knowing where to park and where to bring the parts.' },
        { question: 'Can you replace both doors on a two-door property so they match?', answer: `Yes. A Kew Gardens Hills job we completed in June 2026 was two insulated doors on one property, with new molding and locks, and the old doors hauled away. An insulated door installed starts from ${formatPrice(PRICING.insulatedDoorFrom)}, and a two-door job is quoted as one total before any work begins.` },
        { question: 'What does garage door repair cost in Kew Gardens Hills?', answer: `Repairs start from ${formatPrice(PRICING.repairFrom)}, spring replacement from ${formatPrice(PRICING.springFrom)} and opener repair from ${formatPrice(PRICING.openerRepairFrom)}. If nothing turns out to be broken, you pay the ${formatPrice(PRICING.diagnosticVisit)} service visit and nothing more. Those are starting prices; your total is confirmed before any work begins.` },
        { question: 'Do you work with co-op boards and building managers in Kew Gardens Hills?', answer: 'Yes. We service individual residents\' garage doors and shared building doors, and we can provide documentation of our license and insurance to your management company or board before work begins.' },
        { question: 'How does scheduling work in Kew Gardens Hills?', answer: 'Call and a dispatcher checks current technician availability for 11367 and confirms an honest arrival window. We do not publish a fixed arrival time — call for an exact ETA.' },
      ]}
    />
  );
}
