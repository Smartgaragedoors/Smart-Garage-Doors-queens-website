import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

// Pearl River, NY — Rockland County (Town of Orangetown), directly on the NJ line.
// Phone: (551) 345-5592 — the dedicated Pearl River line, owner-confirmed
// 2026-08-24. Passed as a prop so the CTAs, the tracking label, and the
// LocalBusiness schema all match the number the customer actually dials.
// 551 is the NJ overlay for Bergen County, which is the market immediately
// across the line from Pearl River.
export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Garage Door Repair Pearl River, NY | Smart Garage Doors"
      metaDescription="Garage door repair in Pearl River, NY. Spring replacement, opener repair, new doors. Total-price quotes, licensed in NY & NJ. Call (551) 345-5592."
      keywords="Pearl River garage door repair, garage door installation Pearl River NY, garage door spring replacement Pearl River, garage door opener repair Rockland County"
      slug="/pearl-river-ny/"
      cityName="Pearl River"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '41.0587', longitude: '-74.0215' }}
      phone="(551) 345-5592"
      phoneTel="+15513455592"
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[
        {
          name: 'Village Center & Central Avenue',
          description: 'The older core around the train station and Central Avenue — narrow driveways and single detached garages, often with original wood doors and a 7-foot opening. We size replacement doors and openers to fit the existing framing instead of forcing a standard kit.',
        },
        {
          name: 'Blue Hill',
          description: 'The streets around Blue Hill Golf Course, where most homes are post-war colonials with attached two-car garages. Quiet belt-drive opener upgrades and insulated door replacements are the two jobs we do most here.',
        },
        {
          name: 'Nauraushaun',
          description: 'Split-levels and capes on the east side toward Orangeburg. Garages here are usually under living space, so opener noise and door insulation matter more than they do on a detached garage.',
        },
        {
          name: 'Sickletown & Crooked Hill Road',
          description: 'Longer sloped driveways off Sickletown and Crooked Hill mean doors take more weather and more debris in the tracks — rollers, cables, and bottom seals wear faster than average.',
        },
        {
          name: 'Orangeburg & Blauvelt',
          description: 'Neighboring Orangetown hamlets we cover on the same runs as Pearl River, including the business-park buildings along the Route 303 corridor.',
        },
        {
          name: 'Montvale, Park Ridge & River Vale, NJ',
          description: "Right over the state line. We're licensed in New Jersey as well as New York, so crossing into northern Bergen County from Pearl River is routine for us.",
        },
      ]}
      reviews={[]}
      faqs={[
        {
          question: 'Do you serve Pearl River and the rest of Orangetown?',
          answer: 'Yes — Pearl River, Orangeburg, Blauvelt, Tappan, Nanuet, and the surrounding Rockland County communities. Call and a dispatcher will check current availability for your address and confirm an honest window on the phone.',
        },
        {
          question: 'Can you cross into Bergen County, NJ from Pearl River?',
          answer: 'Yes. Pearl River sits on the state line, and we hold a New Jersey Home Improvement Contractor registration (#13VH14195600) alongside our New York license, so we work both sides of the border — Montvale, Park Ridge, River Vale, Old Tappan, and Northvale included.',
        },
        {
          question: 'My Pearl River house has an old single detached garage — can you still fit a modern opener?',
          answer: 'Almost always. Older village-center garages often have low headroom or a non-standard opening, which is why an off-the-shelf opener kit sometimes will not fit. We measure headroom, backroom, and the door height first, then quote the right opener — including low-headroom rail kits when the ceiling is tight.',
        },
        {
          question: 'Do you do commercial overhead and dock doors in Pearl River?',
          answer: 'Yes. The business-park buildings around Pearl River and the Route 303 corridor in Orangeburg run rolling steel doors, sectional overhead doors, and loading-dock equipment. We repair and replace all of it, and we set up scheduled maintenance for property managers with several buildings.',
        },
        {
          question: 'Is an insulated garage door worth it in Rockland County?',
          answer: 'If the garage is attached or has living space above it — common in the Nauraushaun and Blue Hill sections — yes. An insulated door meaningfully cuts how cold that room runs in January and how much opener noise carries upstairs. On a detached garage you use for storage, it usually is not worth the upgrade, and we will tell you so.',
        },
        {
          question: 'What does garage door repair cost in Pearl River?',
          answer: 'Repairs typically run $150–$300, spring replacement $175–$350, and opener repair $150–$350. Those are total prices — inclusive of any fees, surcharges, and applicable taxes — quoted before we start, not estimates that grow on the invoice.',
        },
        {
          question: 'What brands do you service in Pearl River?',
          answer: 'All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, and more. Our trucks carry the springs, rollers, cables, and opener parts that fit the majority of homes in this area, so most repairs finish in one visit.',
        },
        {
          question: 'Is Smart Garage Doors a good choice for garage door repair in Pearl River?',
          answer: 'We are a licensed and insured company — NYC DCWP #2130164-DCWP and NJ HIC #13VH14195600 — with a 5.0★ average across our Google reviews, upfront total-price quotes, and a 1-year warranty on parts and labor. Call (551) 345-5592 and a dispatcher will check current availability for Pearl River.',
        },
      ]}
    />
  );
}
