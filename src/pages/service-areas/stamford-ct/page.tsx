import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Stamford, CT Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Stamford, CT — 5.0★ reviews, total-price quotes. Spring replacement, opener repair, emergency line. Licensed & insured. Call (914) 557-6816."
      keywords="Stamford garage door repair, garage door installation Stamford, emergency garage door Stamford, spring replacement Stamford"
      slug="/stamford-ct/"
      cityName="Stamford"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.0534', longitude: '-73.5387' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown & South End","description":"Urban core with condos and commercial properties. We handle all garage door types including commercial systems."},{"name":"Shippan Point","description":"Waterfront neighborhood with upscale homes. Premium installs and quality repairs are the standard here."},{"name":"Glenbrook & Springdale","description":"Mid-city residential areas with single-family homes. High volume of spring and opener calls in these neighborhoods."},{"name":"Newfield & Long Ridge","description":"Northern Stamford's residential and semi-rural communities. Larger homes with premium garage door systems."},{"name":"Turn of River & High Ridge","description":"Established neighborhoods in northern Stamford. We service a growing number of customers here."},{"name":"Cove & Waterfront areas","description":"South Stamford coastal neighborhoods. Salt air environments — we stock corrosion-resistant hardware for these locations."}]}
      reviews={[{"text":"Spring broke in downtown Stamford. They drove from NY and had it fixed. Professional service and fair Connecticut pricing.","author":"Ellen R.","location":"Stamford, CT","initials":"ER","color":"bg-blue-600"},{"text":"New garage door in Shippan Point. Helped us choose the right style for the neighborhood, installed it perfectly.","author":"Gregory T.","location":"Shippan, Stamford","initials":"GT","color":"bg-orange-500"},{"text":"Emergency in Glenbrook — couldn't get into my garage. They fixed a cable issue on the spot. Lifesaver.","author":"Patricia H.","location":"Glenbrook, Stamford","initials":"PH","color":"bg-green-600"}]}
      faqs={[{"question":"How does scheduling work in Stamford?","answer":"Our Fairfield County technician covers Stamford and the surrounding towns every week. Call and a dispatcher checks current technician availability — actual arrival depends on the technician's current job, traffic, and your distance from our nearest crew, and we confirm an honest window on the call."},{"question":"What does garage door repair cost in Stamford?","answer":"Repairs run $150–$300, spring replacement $175–$350, opener repair $150–$350 — total prices inclusive of any fees, surcharges, and applicable taxes. Upfront pricing — no surprises."},{"question":"What areas of Stamford do you cover?","answer":"All of Stamford — downtown, Shippan, Glenbrook, Springdale, Newfield, Long Ridge, Turn of River, High Ridge, Cove, and surrounding areas."},{"question":"Do you handle commercial garage doors in Stamford?","answer":"Yes. We service commercial roll-up doors and commercial opener systems throughout Stamford."},{"question":"What brands do you service in Stamford?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you offer emergency service in Stamford?","answer":"Yes — call our emergency line any time. Emergency calls in Stamford are prioritized, and we confirm an honest arrival window on the call."}]}
      
    />
  );
}
