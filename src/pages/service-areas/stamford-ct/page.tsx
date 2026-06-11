import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Stamford, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Stamford, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Stamford garage door repair, garage door installation Stamford, emergency garage door Stamford, spring replacement Stamford"
      slug="/stamford-ct/"
      cityName="Stamford"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.0534', longitude: '-73.5387' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown & South End","description":"Urban core with condos and commercial properties. We handle all garage door types including commercial systems."},{"name":"Shippan Point","description":"Waterfront neighborhood with upscale homes. Premium installs and quality repairs are the standard here."},{"name":"Glenbrook & Springdale","description":"Mid-city residential areas with single-family homes. High volume of spring and opener calls in these neighborhoods."},{"name":"Newfield & Long Ridge","description":"Northern Stamford's residential and semi-rural communities. Larger homes with premium garage door systems."},{"name":"Turn of River & High Ridge","description":"Established neighborhoods in northern Stamford. We service a growing number of customers here."},{"name":"Cove & Waterfront areas","description":"South Stamford coastal neighborhoods. Salt air environments — we stock corrosion-resistant hardware for these locations."}]}
      reviews={[{"text":"Spring broke in downtown Stamford. They drove from NY, arrived in about 90 minutes, and had it fixed quickly. Professional service and fair Connecticut pricing.","author":"Ellen R.","location":"Stamford, CT","initials":"ER","color":"bg-blue-600"},{"text":"New garage door in Shippan Point. Helped us choose the right style for the neighborhood, installed it perfectly.","author":"Gregory T.","location":"Shippan, Stamford","initials":"GT","color":"bg-orange-500"},{"text":"Emergency in Glenbrook — couldn't get into my garage. They were here within 2 hours and fixed a cable issue on the spot. Lifesaver.","author":"Patricia H.","location":"Glenbrook, Stamford","initials":"PH","color":"bg-green-600"}]}
      faqs={[{"question":"Do you offer same-day service in Stamford?","answer":"Often, yes. Our Fairfield County technician covers Stamford and the surrounding towns every week, and we give you an exact ETA the moment you call."},{"question":"What does garage door repair cost in Stamford?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. Upfront pricing — no surprises."},{"question":"What areas of Stamford do you cover?","answer":"All of Stamford — downtown, Shippan, Glenbrook, Springdale, Newfield, Long Ridge, Turn of River, High Ridge, Cove, and surrounding areas."},{"question":"Do you handle commercial garage doors in Stamford?","answer":"Yes. We service commercial roll-up doors and commercial opener systems throughout Stamford."},{"question":"What brands do you service in Stamford?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you offer emergency service in Stamford?","answer":"Yes, 24/7. Emergency calls in Stamford are prioritized, and we give you an honest ETA the moment you call."}]}
      
    />
  );
}
