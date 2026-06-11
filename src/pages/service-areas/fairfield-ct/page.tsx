import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Fairfield, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Fairfield, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Fairfield garage door repair, garage door installation Fairfield, emergency garage door Fairfield, spring replacement Fairfield"
      slug="/fairfield-ct/"
      cityName="Fairfield"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.1418', longitude: '-73.2637' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Fairfield Center & Post Road","description":"The town center with a mix of residential and commercial properties. We service both throughout the corridor."},{"name":"Southport Village","description":"One of Connecticut's most charming historic villages. Premium and custom garage doors are the standard here."},{"name":"Greenfield Hill","description":"Upscale neighborhood in north Fairfield. Large homes with quality garage systems."},{"name":"Jennings Beach area","description":"Waterfront and coastal community in south Fairfield. Salt-resistant hardware is important for these properties."},{"name":"Stratfield & Tunxis Hill","description":"Dense residential areas in central Fairfield. High volume of repair calls from these neighborhoods."},{"name":"Black Rock (Bridgeport border)","description":"Western Fairfield/Bridgeport area. We cover this on our Fairfield County routes."}]}
      reviews={[{"text":"Spring replacement in Southport. Came out same day, replaced both springs, did it cleanly and quickly. Exactly what you want. Great service.","author":"Howard C.","location":"Southport, Fairfield","initials":"HC","color":"bg-blue-600"},{"text":"New door in Greenfield Hill. Helped me choose the right style for our colonial. Beautiful installation. I get compliments on it from the neighbors.","author":"Judith L.","location":"Greenfield Hill, Fairfield","initials":"JL","color":"bg-orange-500"},{"text":"Emergency in Fairfield Center when my door got stuck closed. They came within 90 minutes and had it open. Very professional team.","author":"Kenneth M.","location":"Fairfield, CT","initials":"KM","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of Fairfield do you serve?","answer":"All of Fairfield — Fairfield Center, Southport Village, Greenfield Hill, Jennings Beach area, Stratfield, Tunxis Hill, and surrounding areas."},{"question":"How fast can you get to Fairfield?","answer":"Our Fairfield County technician covers Fairfield and the neighboring shoreline towns every week. We always give an honest ETA when you call, and same-day appointments are often available."},{"question":"Do you install carriage-style doors in Fairfield?","answer":"Yes. Fairfield's historic neighborhoods — especially Southport — call for traditional carriage-style and wood-look doors. We have a great selection."},{"question":"What does garage door repair cost in Fairfield?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront quotes always."},{"question":"What brands do you service in Fairfield?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you offer emergency service in Fairfield?","answer":"Yes, 24/7. Call anytime."}]}
      
    />
  );
}
