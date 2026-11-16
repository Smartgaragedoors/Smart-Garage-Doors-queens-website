import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';
import { PRICING, formatPrice } from '../../../config/pricing';

// Jamaica — ZIPs 11432 through 11436. NOT Jamaica Estates: that neighborhood
// has its own page at /jamaica-estates-ny/ (premium installs, Tudor homes).
// This page owns Jamaica proper — downtown, South Jamaica, Briarwood, Jamaica
// Hills — where the CRM shows a different mix: repairs, two-door jobs, openers
// and commercial doors.
//
// CRM (`all_jobs`), 365 days to 2026-11-16, ZIPs 11432–11436: 31 jobs, 14 sold.
// By job type: 17 repair (10 sold), 5 door installation (2 sold), 1 opener
// installation (sold), 8 untyped (1 sold).
//
// recentJobs: real closed jobs, February – August 2026. ZIP level only — never
// a street, a house number or a customer name. Totals are what was paid on
// those jobs, not quotes.
//
// reviews: empty on purpose. googleReviews.generated.json has no review that
// names Jamaica.
//
// Every price in the FAQs is a STARTING price from src/config/pricing.ts.
// OWNER RULE (brain 06): no hub cities or drive times on this page.
//
// TODO(owner): one recentJobs entry is a customer-supplied door we installed.
//   Confirm you are happy to show that kind of job; delete the entry if not.
// TODO(owner): the February 2026 commercial torsion-door job (11435) is in the
//   CRM as closed by us, but its note says another company's crew worked on it
//   with ours. Delete the entry and the FAQ sentence if you would rather not
//   present it as our repair.
// TODO(owner): supply job photos taken in 11432–11436 for `localJobPhotos`.
export default function JamaicaNY() {
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;
  const nyLicense = BUSINESS_INFO.licenses.find((l) => l.region === 'NY')?.label;

  return (
    <LocationPageTemplate
      metaTitle="Jamaica, Queens NY Garage Door Repair | Smart Garage Doors"
      metaDescription={`Garage door repair in Jamaica, Queens NY (11432–11436): springs, cables, openers, new doors and commercial doors. Total-price quotes, ${rating}★ ${reviewCount} reviews.`}
      keywords="Jamaica NY garage door repair, garage door repair Jamaica Queens, garage door installation Jamaica NY, garage door opener repair Jamaica Queens, commercial garage door repair Jamaica NY, garage door repair 11432"
      slug="/jamaica-ny/"
      cityName="Jamaica"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7020', longitude: '-73.7960' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      localIntroduction="Springs, cables, openers, new doors and commercial doors across Jamaica, 11432 through 11436. Our technician covering Jamaica confirms the scope and the total price before any work starts."
      services={[
        { icon: 'ri-settings-4-line', title: 'Spring, Cable & Pulley Repair', description: 'Torsion and extension springs, lifting cables, safety cables and pulleys replaced, then the door is rebalanced.' },
        { icon: 'ri-remote-control-line', title: 'Opener Repair & Install', description: 'Openers that reverse, stall or stop responding — repaired, or replaced with a WiFi opener when the motor is done.' },
        { icon: 'ri-door-open-line', title: 'New Door Installation', description: 'Single doors, matched pairs and door-and-opener jobs, with new molding and the old door hauled away.' },
        { icon: 'ri-building-line', title: 'Commercial Doors', description: 'Commercial sectional doors and rolling gates for shops and mixed-use buildings. A certificate of insurance is available on request.' },
        { icon: 'ri-alarm-warning-line', title: 'Stuck & Off-Track Doors', description: 'Door jammed, crooked, or stuck with the car inside — call the emergency line and a dispatcher checks current availability.' },
        { icon: 'ri-shield-check-line', title: 'Maintenance Visits', description: 'Rollers, cables, safety cables and weatherstrip checked and replaced before they fail.' },
      ]}
      recentJobsPeriod="February – August 2026"
      recentJobs={[
        {
          completedLabel: 'August 2026',
          area: 'Jamaica · 11432',
          service: 'Two doors and two WiFi openers',
          detail: 'Both doors replaced and a WiFi opener installed on each, with new molding.',
          outcome: 'The whole job: $5,759 total, tax included, on an estimate sent before we started.',
        },
        {
          completedLabel: 'August 2026',
          area: 'Jamaica · 11434',
          service: 'Stuck door: full hardware and a new opener',
          detail: 'The door would not move at all on its worn rollers. Replaced the springs, pulleys, cables and rollers, then installed a new opener with a keypad.',
          outcome: 'Hardware, opener and keypad: $1,550 total.',
        },
        {
          completedLabel: 'July 2026',
          area: 'Jamaica · 11436',
          service: 'Customer-supplied door on a new garage',
          detail: 'A newly built garage, and an 8×7 door the owner had already bought. We installed the owner\'s door and opener.',
          outcome: 'Installation only: $900 total, tax included.',
        },
        {
          completedLabel: 'June 2026',
          area: 'Jamaica · 11432',
          service: 'Preventive maintenance on a two-car door',
          detail: 'An insulated two-car door that was working well; the owner wanted it kept that way. Replaced the cables and rollers, added safety cables and fitted new weatherstrip.',
          outcome: 'Maintenance visit: $563 total, tax included.',
        },
        {
          completedLabel: 'June 2026',
          area: 'Jamaica · 11432',
          service: 'Cables, springs and pulleys',
          detail: 'Replaced two cables, two springs, two pulleys and an eye bolt on one door.',
          outcome: 'Repair only: about $490 total, tax included.',
        },
        {
          completedLabel: 'February 2026',
          area: 'Jamaica · 11435',
          service: 'Commercial torsion-spring door',
          detail: 'Repaired a commercial door with two new cables and adjusted the opener.',
          outcome: 'Commercial repair: about $980 total, tax included.',
        },
      ]}
      neighborhoods={[
        { name: 'Downtown Jamaica · 11432, 11435', description: 'Jamaica Avenue, Sutphin Boulevard and the blocks around Jamaica Station. Shops and mixed-use buildings sit alongside houses here, so we see commercial doors as well as residential ones.' },
        { name: 'South Jamaica · 11433, 11434, 11436', description: 'One- and two-family houses south of downtown, along Sutphin, Guy R. Brewer and Merrick Boulevards. All three ZIP codes are covered for repairs, openers and new doors.' },
        { name: 'Briarwood · 11435', description: 'North of Hillside Avenue, around Queens Boulevard and Main Street. Apartment buildings and one- and two-family houses — we service residents\' doors and shared building doors.' },
        { name: 'Jamaica Hills · 11432', description: 'The hilly blocks north of Hillside Avenue, with detached houses. The neighboring Jamaica Estates streets have their own page.' },
        { name: 'Baisley Park & Rochdale · 11434', description: 'The blocks around Baisley Pond Park and Rochdale Village, down toward Rockaway Boulevard.' },
        { name: 'Toward Hollis & St. Albans', description: 'The east side of Jamaica, out along Hillside Avenue and Merrick Boulevard. We cover Hollis and St. Albans too.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'Is this the page for Jamaica or for Jamaica Estates?', answer: 'This page covers Jamaica itself — ZIP codes 11432 through 11436, which take in downtown Jamaica, South Jamaica, Briarwood, Jamaica Hills and the Baisley Park and Rochdale area. Jamaica Estates and Holliswood have their own page at /jamaica-estates-ny/.' },
        { question: 'Can you replace two garage doors and both openers in one job?', answer: `Yes. In August 2026 we replaced two doors and installed two WiFi openers on one Jamaica property, with new molding, as a single job with a single total. Earlier that summer another two-door job here was two new openers and full new hardware on both doors. A new opener installed starts from ${formatPrice(PRICING.openerInstallFrom)} and a new door from ${formatPrice(PRICING.doorFrom)}; a multi-door job is quoted as one total before any work begins.` },
        { question: 'Do you service commercial doors and gates in Jamaica?', answer: 'Yes — commercial sectional doors, rolling steel gates and the operators that drive them, for shops, garages and mixed-use buildings. In February 2026 we repaired a commercial torsion-spring door in 11435 with two new cables and an opener adjustment. We are licensed and insured, and a certificate of insurance is available on request.' },
        { question: 'Can I see your license and insurance before you start?', answer: `Yes — ask, and we send it before the job. We hold ${nyLicense}, and we can provide documentation of our license and insurance to you, your landlord or your management company before work begins.` },
        { question: 'My door is old. Will you repair it or tell me to replace it?', answer: `We tell you which we would do, and you decide. If the door's structure is sound and the problem is a spring, cable, roller or opener, a repair usually makes sense — repairs start from ${formatPrice(PRICING.repairFrom)}. On one recent Jamaica call we recommended replacing an old door, the customer preferred to repair it, and we did the repair.` },
        { question: 'What does garage door repair cost in Jamaica?', answer: `Repairs start from ${formatPrice(PRICING.repairFrom)}, spring replacement from ${formatPrice(PRICING.springFrom)}, opener repair from ${formatPrice(PRICING.openerRepairFrom)} and a new door from ${formatPrice(PRICING.doorFrom)}. If nothing turns out to be broken, you pay the ${formatPrice(PRICING.diagnosticVisit)} service visit and nothing more. Those are starting prices; your total is confirmed before any work begins.` },
        { question: 'How does scheduling work in Jamaica?', answer: 'Call and a dispatcher checks current technician availability for your ZIP and confirms an honest arrival window. We do not publish a fixed arrival time — call for an exact ETA.' },
      ]}
    />
  );
}
