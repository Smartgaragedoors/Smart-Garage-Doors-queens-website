import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

// Yonkers, NY — Westchester County, largest city in the county and fourth
// largest in the state. Directly north of the Bronx, so it rides the same
// dispatch runs as our Bronx and lower-Westchester work. Uses the default
// (914) line — no dedicated Yonkers number exists yet.
export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Garage Door Repair Yonkers, NY | Smart Garage Doors"
      metaDescription="Garage door repair in Yonkers, NY. Spring replacement, opener repair, new doors — total-price quotes, licensed & insured. Call (914) 557-6816."
      keywords="Yonkers garage door repair, garage door installation Yonkers NY, garage door spring replacement Yonkers, garage door opener repair Yonkers"
      slug="/yonkers-ny/"
      cityName="Yonkers"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.9312', longitude: '-73.8988' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[
        {
          name: 'Getty Square & Southwest Yonkers',
          description: 'The oldest part of the city — rowhouses and pre-war multifamilies around Getty Square, Ludlow, and the waterfront. Garages here are often detached, reached from a rear alley, and running hardware that predates modern safety sensors. We retrofit rather than force a full replacement when the structure is sound.',
        },
        {
          name: 'Park Hill',
          description: 'Hillside streets with some of the steepest driveways in Westchester. Doors on a grade take more strain on springs and cables, and water running downhill pushes grit into the tracks — roller and cable wear shows up here years earlier than on flat lots.',
        },
        {
          name: 'Crestwood & Colonial Heights',
          description: 'Commuter neighborhoods off the Harlem Line with Tudors and post-war colonials, most with attached one- or two-car garages. Insulated door replacements and quiet belt-drive opener upgrades are the two jobs we do most on these streets.',
        },
        {
          name: 'Dunwoodie & Lincoln Park',
          description: 'Capes and split-levels where the garage sits under living space. Opener noise carries straight into the bedroom above, so a quiet opener and a properly sealed, insulated door matter more here than almost anywhere else in the city.',
        },
        {
          name: 'Bryn Mawr & Northwest Yonkers',
          description: 'Larger lots toward Hastings-on-Hudson with older detached garages, some still on original wood doors. We repair what can be repaired and quote total prices on replacement when the panels or framing are past saving.',
        },
        {
          name: 'Saw Mill River & Nepperhan Avenue corridor',
          description: 'The industrial spine of the city — warehouses, auto shops, and mixed commercial buildings running rolling steel and sectional overhead doors. We repair and replace commercial doors along the corridor and set up scheduled maintenance for property managers.',
        },
      ]}
      reviews={[]}
      faqs={[
        {
          question: 'Do you cover all of Yonkers?',
          answer: 'Yes — from Getty Square and the waterfront up through Crestwood, and everything between: Park Hill, Ludlow, Dunwoodie, Lincoln Park, Bryn Mawr, Colonial Heights, Homefield. Call and a dispatcher checks current technician availability for your address and confirms an honest arrival window on the phone.',
        },
        {
          question: 'What does garage door repair cost in Yonkers?',
          answer: 'Repairs typically run $150–$300, spring replacement $175–$350, and opener repair $150–$350. Those are total prices — inclusive of any fees, surcharges, and applicable taxes — quoted before we start, not estimates that grow on the invoice.',
        },
        {
          question: 'My driveway is on a steep hill — does that affect the garage door?',
          answer: 'In Yonkers, often yes. On graded lots — common in Park Hill and much of the west side — runoff carries grit into the tracks and the door frame settles unevenly over time, so rollers, cables, and bottom seals wear faster than they would on a flat lot. We check the tracks and balance on every visit rather than just swapping the broken part.',
        },
        {
          question: 'Can you work on the older detached garages in southwest Yonkers?',
          answer: 'Yes — that housing stock is a regular part of our week. Pre-war garages often have low headroom, non-standard openings, or original wood doors, which is why an off-the-shelf kit sometimes will not fit. We measure headroom, backroom, and the opening first, then quote the right door or opener for the structure, including low-headroom rail kits when the ceiling is tight.',
        },
        {
          question: 'The garage is under our bedroom and the opener wakes everyone up. What are the options?',
          answer: 'A common Yonkers problem in Dunwoodie, Lincoln Park, and anywhere the garage sits under living space. A belt-drive opener runs far quieter than an old chain drive, and worn rollers are usually half the noise — swapping them for sealed nylon rollers makes a bigger difference than most people expect. We can usually do both in one visit.',
        },
        {
          question: 'Do you handle commercial overhead doors in Yonkers?',
          answer: 'Yes. The buildings along Nepperhan Avenue and the Saw Mill River corridor run rolling steel doors, sectional overhead doors, and loading-dock equipment — we repair and replace all of it, and we set up scheduled maintenance contracts for property managers with several buildings.',
        },
        {
          question: 'What brands do you service in Yonkers?',
          answer: 'All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, and more. Our trucks carry the springs, rollers, cables, and opener parts that fit the majority of homes in this area, so most repairs finish in one visit.',
        },
        {
          question: 'Is Smart Garage Doors a good choice for garage door repair in Yonkers?',
          answer: 'We are a licensed and insured company with a 5.0★ average across our Google reviews, upfront total-price quotes, and a 1-year warranty on parts and labor. Call (914) 557-6816 and a dispatcher will check current availability for Yonkers.',
        },
      ]}
    />
  );
}
