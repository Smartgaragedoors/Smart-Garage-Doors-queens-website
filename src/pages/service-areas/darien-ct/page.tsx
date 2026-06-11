import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Darien, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Darien, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Darien garage door repair, garage door installation Darien, emergency garage door Darien, spring replacement Darien"
      slug="/darien-ct/"
      cityName="Darien"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.0726', longitude: '-73.4696' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Darien Center & Post Road","description":"The heart of Darien with a mix of residential and commercial properties. We handle both."},{"name":"Tokeneke & Noroton","description":"Upscale waterfront neighborhoods in south Darien. Custom and carriage-style doors are popular here."},{"name":"Darien Heights & Middlesex","description":"Established residential areas in north Darien. Well-maintained homes with quality garage systems."},{"name":"Pear Tree Point & Long Neck Point","description":"Exclusive coastal areas. We work professionally and discreetly in these neighborhoods."},{"name":"Noroton Heights","description":"Residential area in east Darien. Single-family homes with a high rate of spring and cable calls."},{"name":"West Darien","description":"Quieter residential areas bordering Stamford. We cover this area efficiently from our CT routes."}]}
      reviews={[{"text":"Spring repair in Tokeneke. They were professional, on time, and the quality of work was excellent. Fair pricing for Darien.","author":"Carolyn J.","location":"Tokeneke, Darien","initials":"CJ","color":"bg-blue-600"},{"text":"New carriage-style door in Darien Center. Perfect installation — matched our colonial home beautifully.","author":"William P.","location":"Darien Center, CT","initials":"WP","color":"bg-orange-500"},{"text":"Emergency in Noroton Heights when door wouldn't close before a storm. They came fast and fixed a broken cable. Very grateful.","author":"Helen R.","location":"Noroton Heights, Darien","initials":"HR","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of Darien do you cover?","answer":"All of Darien — the center, Tokeneke, Noroton, Darien Heights, Middlesex, Pear Tree Point, Long Neck Point, Noroton Heights, and West Darien."},{"question":"How fast can you reach Darien?","answer":"Our Fairfield County technician covers Darien and the surrounding shoreline towns every week. We prioritize emergency calls and give you an exact ETA the moment you call."},{"question":"Do you install carriage-style garage doors in Darien?","answer":"Yes. Carriage-style and custom doors are among our most common installs in Darien. We work with premium brands that complement New England architecture."},{"question":"What does spring replacement cost in Darien?","answer":"Spring replacement runs $175–$350. Exact quote before we start."},{"question":"What brands do you service in Darien?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands."},{"question":"Do you offer emergency service in Darien?","answer":"Yes, 24/7. We'll give you an honest ETA when you call."}]}
      
    />
  );
}
