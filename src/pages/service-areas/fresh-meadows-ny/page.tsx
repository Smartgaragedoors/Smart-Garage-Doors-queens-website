import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';
import { PRICING, formatPrice } from '../../../config/pricing';

// Fresh Meadows — ZIPs 11365 and 11366.
//
// What makes this page its own page: in the 365 days to 2026-11-16 the CRM
// (`all_jobs`) holds 9 jobs in 11365/11366, 4 of them sold, and all 4 sold jobs
// were repairs — springs and cables (twice), a door off its tracks, and an
// opener arm. No door installation closed here in that window. The copy is
// repair-first because the job records are.
//
// recentJobs: those four closed jobs, January – July 2026. ZIP level only —
// never a street, a house number or a customer name. Totals are what was paid
// on those jobs, not quotes.
//
// reviews: empty on purpose. googleReviews.generated.json has no review that
// names Fresh Meadows.
//
// Every price in the FAQs is a STARTING price from src/config/pricing.ts.
// OWNER RULE (brain 06): no hub cities or drive times on this page.
//
// TODO(owner): supply job photos taken in 11365/11366 for `localJobPhotos`.
export default function FreshMeadowsNY() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;

  return (
    <LocationPageTemplate
      metaTitle="Fresh Meadows, NY Garage Door Repair | Smart Garage Doors"
      metaDescription={`Garage door repair in Fresh Meadows, Queens NY (11365, 11366): springs, cables, rollers, off-track doors and openers. Total-price quotes, ${rating}★ ${reviewCount} reviews.`}
      keywords="Fresh Meadows garage door repair, garage door repair 11365, garage door repair 11366, garage door spring replacement Fresh Meadows, garage door off track Fresh Meadows, opener repair Fresh Meadows"
      slug="/fresh-meadows-ny/"
      cityName="Fresh Meadows"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7350', longitude: '-73.7840' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      localIntroduction="Springs, cables, rollers, off-track doors and opener repairs for Fresh Meadows homes in 11365 and 11366. Our technician covering northeast Queens confirms the scope and the total price before any work starts."
      services={[
        { icon: 'ri-settings-4-line', title: 'Spring Replacement', description: 'Torsion and extension springs replaced, with the cables, rollers and hinges checked while the door is apart.' },
        { icon: 'ri-links-line', title: 'Cable, Roller & Bracket Repair', description: 'Frayed or slipped cables, worn rollers and loose brackets — repaired or replaced, then the door is rebalanced.' },
        { icon: 'ri-git-merge-line', title: 'Off-Track Doors', description: 'A door that has come off its tracks is reseated, the damaged roller replaced and the track realigned. Do not run the opener in the meantime.' },
        { icon: 'ri-remote-control-line', title: 'Opener Repair', description: 'Opener runs but the door stays put? Often it is the arm between the opener and the door, not the motor. LiftMaster, Chamberlain and Genie repaired.' },
        { icon: 'ri-door-open-line', title: 'New Door Installation', description: 'Steel, insulated and carriage-style doors when a repair no longer makes sense — quoted as one total before any work begins.' },
        { icon: 'ri-shield-check-line', title: 'Safety Tune-Up', description: 'Full inspection, lubrication, balance test and sensor check, so worn parts are found before they fail.' },
      ]}
      recentJobsPeriod="January – July 2026"
      recentJobs={[
        {
          completedLabel: 'June 2026',
          area: 'Fresh Meadows · 11366',
          service: 'Door off its tracks',
          detail: 'The door was misaligned and had come off its tracks. Reattached it to the track and replaced one roller at no extra charge.',
          outcome: 'Back in its tracks for $350 total.',
        },
        {
          completedLabel: 'July 2026',
          area: 'Fresh Meadows · 11366',
          service: 'Springs, cables and brackets',
          detail: 'Fixed the brackets and replaced the springs and cables.',
          outcome: 'Repair only: $435 total, tax included.',
        },
        {
          completedLabel: 'June 2026',
          area: 'Fresh Meadows · 11366',
          service: 'Opener running, door not moving',
          detail: 'The opener\'s trolley was no longer connected to the door, so it would not open or close electrically. Repaired the J-bar — the arm that joins the two.',
          outcome: 'No new opener needed: $160 total.',
        },
        {
          completedLabel: 'January 2026',
          area: 'Fresh Meadows · 11365',
          service: 'Springs, cables, a roller and a hinge',
          detail: 'Replaced the springs and cables, along with one roller and one hinge.',
          outcome: 'Repair only: $425 total.',
        },
      ]}
      neighborhoods={[
        { name: '188th Street & the Fresh Meadows development', description: 'The Fresh Meadows housing development, built by New York Life in the late 1940s, sits at the center of the neighborhood, with its shops along 188th Street. The private houses on the blocks around it are mostly post-war colonials, capes and ranches with attached garages.' },
        { name: 'South Fresh Meadows · 11366', description: 'The southern half of the neighborhood, toward Union Turnpike. Three of the four Fresh Meadows jobs we completed in the past year were here: springs and cables, an off-track door and an opener arm.' },
        { name: 'Utopia Parkway blocks', description: 'Residential streets either side of Utopia Parkway, on the west side of the neighborhood toward Pomonok and Hillcrest.' },
        { name: 'West Cunningham Park', description: 'The east side of the neighborhood, along Francis Lewis Boulevard and the edge of Cunningham Park.' },
        { name: 'North of the Expressway · 11365', description: '11365 continues north of the Long Island Expressway toward Auburndale and Flushing. Same service, same starting prices.' },
        { name: 'Hillcrest & the Jamaica Estates line', description: 'To the south and west the neighborhood meets Hillcrest and Jamaica Estates. We cover both; Jamaica Estates has its own page.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'What garage door problems do you fix most in Fresh Meadows?', answer: 'Repairs. Every Fresh Meadows job we completed in the twelve months to November 2026, across 11365 and 11366, was a repair rather than a replacement: springs and cables twice, brackets, a roller and a hinge, an opener arm that had come away from the door, and one door that had come off its tracks.' },
        { question: 'My garage door came off its track. Can it be put back, or do I need a new door?', answer: `Usually it can be put back. Off-track doors look dramatic, but realignment with new rollers is a standard repair, generally from ${formatPrice(PRICING.repairFrom)}. On a June 2026 job in 11366 we reattached the door to its track and replaced a roller for $350 total. Until someone looks at it, do not run the opener — a door off its track can fall.` },
        { question: 'The opener runs but the door does not move. What is wrong?', answer: `Often the opener has come apart from the door: the release cord was pulled, or the arm that joins the opener's trolley to the door has bent or come loose. That is a repair, not a new opener — a June 2026 job in Fresh Meadows was exactly this, and the arm was repaired for $160 total. Opener repair starts from ${formatPrice(PRICING.openerRepairFrom)}.` },
        { question: 'Should I repair an older garage door or replace it?', answer: `If the panels are sound and the problem is a spring, cable, roller or opener, a repair usually makes sense — repairs start from ${formatPrice(PRICING.repairFrom)} and spring replacement from ${formatPrice(PRICING.springFrom)}. If the door is badly dented, rotting, or failing again and again, replacement is often the better long-term value. We give you an honest assessment either way.` },
        { question: 'What does garage door repair cost in Fresh Meadows?', answer: `Repairs start from ${formatPrice(PRICING.repairFrom)}, spring replacement from ${formatPrice(PRICING.springFrom)}, cable and roller work from ${formatPrice(PRICING.cableRollerFrom)} and opener repair from ${formatPrice(PRICING.openerRepairFrom)}. If nothing turns out to be broken, you pay the ${formatPrice(PRICING.diagnosticVisit)} service visit and nothing more. Those are starting prices; your total is confirmed before any work begins.` },
        { question: 'Which parts of Fresh Meadows do you cover?', answer: 'Both Fresh Meadows ZIP codes, 11365 and 11366 — the blocks around 188th Street, the Utopia Parkway side, West Cunningham Park, south to Union Turnpike and north of the Long Island Expressway toward Auburndale. We also cover neighboring Kew Gardens Hills, Pomonok, Hillcrest, Jamaica Estates, Flushing and Bayside.' },
        { question: 'How does scheduling work in Fresh Meadows?', answer: 'Call and a dispatcher checks current technician availability for your ZIP and confirms an honest arrival window. We do not publish a fixed arrival time — call for an exact ETA.' },
      ]}
    />
  );
}
