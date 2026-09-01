import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

// Flushing — the shop's own neighborhood (141-24 70th Ave, public on the
// Google Business Profile, so naming it here is fine and is the page's
// strongest trust signal). recentJobs come from the Drive jobs export
// (Jun–Jul 2025) — real completed jobs, neighborhood/street level only,
// no house numbers, no customer names. Reviews below are REAL Google
// review texts from googleReviews.generated.json, quoted verbatim; the
// location label says "Google review" because the reviews are not
// city-tagged — never re-attach a city to a quote.
export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Flushing, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Flushing, NY from the company based on 70th Ave in Flushing. Total-price quotes, 5.0★ reviews, springs, openers, emergency line. Call (914) 557-6816."
      keywords="Flushing garage door repair, garage door installation Flushing, emergency garage door Flushing, spring replacement Flushing"
      slug="/flushing-ny/"
      cityName="Flushing"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7670', longitude: '-73.8330' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      recentJobs={[
        {
          service: 'Opener replacement, one block from our shop',
          area: 'Kew Gardens Hills — 69th Road',
          detail: 'A dead opener around the corner from our own address on 70th Ave. Replaced the unit and hardware the same trip — the shortest drive we will ever bill.',
          outcome: 'New opener installed for about $1,350, total price quoted upfront.',
        },
        {
          service: 'Commercial remotes and keypad programming',
          area: 'Downtown Flushing — Parsons Boulevard',
          detail: 'Commercial building needed remotes replaced and reprogrammed so the right people — and only the right people — could open the door.',
          outcome: 'Programmed and tested on-site for about $235.',
        },
      ]}
      neighborhoods={[
        { name: 'Downtown Flushing', description: 'The heart of Queens\' most diverse neighborhood — dense housing, multi-unit buildings, and commercial doors along the Parsons Boulevard and Kissena corridors. We service both sides of that mix.' },
        { name: 'Murray Hill & Queensboro Hill', description: 'Residential areas east of downtown with single-family homes and attached garages — our most common call type here.' },
        { name: 'Kew Gardens Hills & Pomonok', description: 'Our own blocks — the shop is on 70th Ave. Openers, springs, and tight attached garages we can practically walk to.' },
        { name: 'Auburndale & Bayside Hills', description: 'Quieter residential streets north of Flushing. We have strong repeat customer bases in both areas.' },
        { name: 'College Point & Whitestone', description: 'Waterfront communities north of Flushing. Easy access from our Flushing base.' },
        { name: 'Fresh Meadows & Jamaica Hills', description: 'Southern areas bordering Jamaica. Dense residential with a mix of housing types.' },
      ]}
      reviews={[
        { text: 'They answered the phone on the first call. They listened to my issue. Were able to come same day to assess the problem. Was friendly and professional in answering all our questions and concerned being our first time requesting garage repairs/replacement. They were able to fit us into their schedule within two days. They arrived on time and worked quickly. Got the job done in less than an hour and a half. They seem professional. I would highly recommend them.', author: 'Mable P.', location: 'Google review', initials: 'MP', color: 'bg-blue-600' },
        { text: 'EXCELLENT SERVICE. Prompt communication and a dedicated team — these guys love what they do! We worked with Ben from smart garage doors and he helped us stay in budget and delivered a great product! Would recommend to friends, neighbors and people who like high quality service with a smile.', author: 'Jacob H.', location: 'Google review', initials: 'JH', color: 'bg-orange-500' },
        { text: 'Great communication, great work. All around decent and a joy to work with. If you need your garage door repaired contact these guys, they will take care of you.', author: 'Cristos S.', location: 'Google review', initials: 'CS', color: 'bg-green-600' },
      ]}
      faqs={[
        { question: 'Do you service all of Flushing?', answer: 'Yes — downtown Flushing, Murray Hill, Queensboro Hill, Auburndale, Bayside Hills, College Point, Whitestone, Fresh Meadows, Jamaica Hills, Kissena Park, Pomonok, and surrounding areas.' },
        { question: 'Are you actually based in Flushing?', answer: 'Yes — our address is on 70th Ave in Flushing, the same one on our Google Business Profile. Some of our jobs are literally around the corner from the shop.' },
        { question: 'How does scheduling work in Flushing?', answer: 'Because Flushing is our home base, this is the easiest area for us to cover. Call and a dispatcher confirms an honest arrival window from current technician availability.' },
        { question: 'What does garage door repair cost in Flushing?', answer: 'Repairs run $150–$300 (total price inclusive of any fees, surcharges, and applicable taxes), spring replacement $175–$350, opener repair $150–$350. All quotes are upfront. If nothing turns out to be broken, you pay the $115 service visit and nothing more.' },
        { question: 'Do you work on garage doors in Flushing apartment buildings?', answer: 'Yes. We work with supers and property managers regularly for multi-unit buildings throughout Flushing, including commercial remotes, keypads, and rolling doors on mixed-use buildings downtown.' },
        { question: 'What brands do you service in Flushing?', answer: 'All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more.' },
        { question: 'Do you offer emergency service in Flushing?', answer: 'Our emergency line is available, and we\'re based right in Flushing. Call anytime.' },
      ]}
    />
  );
}
