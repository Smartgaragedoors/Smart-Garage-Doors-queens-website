import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="New Rochelle, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in New Rochelle, NY — total-price quotes, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="New Rochelle garage door repair, garage door installation New Rochelle, emergency garage door New Rochelle, spring replacement New Rochelle"
      slug="/new-rochelle-ny/"
      cityName="New Rochelle"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.9115', longitude: '-73.7823' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown & Echo Bay","description":"Waterfront and urban neighborhoods in south New Rochelle. We serve both residential condos and commercial properties here."},{"name":"Wykagyl & Residence Park","description":"Upscale north New Rochelle neighborhoods with large homes and premium garage doors."},{"name":"Beechmont & Larchmont Manor","description":"Established neighborhoods bordering Larchmont. Single-family homes with a mix of older and newer garage systems."},{"name":"Jefferson Park & Eastchester","description":"Mid-city residential areas with high density. We know these streets well from regular service visits."},{"name":"North End & Pelham Gardens","description":"Northern New Rochelle neighborhoods close to the Pelham border. Quick arrivals from our Westchester routes."},{"name":"Trinity Place & Glen Island","description":"Southern waterfront area with a range of housing types. We service everything from older systems to new smart openers."}]}
      reviews={[]}
      faqs={[{"question":"What areas of New Rochelle do you cover?","answer":"All of New Rochelle — downtown, Echo Bay, Wykagyl, Residence Park, Beechmont, Larchmont Manor, Jefferson Park, Eastchester, and surrounding areas."},{"question":"How does scheduling work in New Rochelle?","answer":"Our Westchester-area technician covers New Rochelle and the surrounding Sound Shore communities every week. Emergency calls are prioritized, and we give you an exact ETA the moment you call."},{"question":"What does spring replacement cost in New Rochelle?","answer":"Spring replacement runs $175–$350. We give you the exact price before we start — always upfront."},{"question":"What brands do you service in New Rochelle?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands."},{"question":"Do you offer emergency service in New Rochelle?","answer":"Our emergency line is available — call and a dispatcher confirms an honest arrival window based on current technician availability."},{"question":"Can you install a new garage door in New Rochelle?","answer":"Absolutely. We install all styles — steel, wood, carriage-style, insulated — and can help you choose what fits your home."}]}
      
    />
  );
}
