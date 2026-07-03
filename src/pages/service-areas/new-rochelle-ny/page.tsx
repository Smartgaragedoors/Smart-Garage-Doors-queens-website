import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="New Rochelle, NY Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in New Rochelle, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="New Rochelle garage door repair, garage door installation New Rochelle, emergency garage door New Rochelle, spring replacement New Rochelle"
      slug="/new-rochelle-ny/"
      cityName="New Rochelle"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.9115', longitude: '-73.7823' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown & Echo Bay","description":"Waterfront and urban neighborhoods in south New Rochelle. We serve both residential condos and commercial properties here."},{"name":"Wykagyl & Residence Park","description":"Upscale north New Rochelle neighborhoods with large homes and premium garage doors."},{"name":"Beechmont & Larchmont Manor","description":"Established neighborhoods bordering Larchmont. Single-family homes with a mix of older and newer garage systems."},{"name":"Jefferson Park & Eastchester","description":"Mid-city residential areas with high density. We know these streets well from regular service calls."},{"name":"North End & Pelham Gardens","description":"Northern New Rochelle neighborhoods close to the Pelham border. Quick arrivals from our Westchester routes."},{"name":"Trinity Place & Glen Island","description":"Southern waterfront area with a range of housing types. We service everything from older systems to new smart openers."}]}
      reviews={[{"text":"Door off track in New Rochelle. They were here same afternoon, got it back on track, adjusted the cables, and the door runs perfectly now.","author":"Rachel G.","location":"New Rochelle, NY","initials":"RG","color":"bg-blue-600"},{"text":"Spring replacement in Wykagyl. Professional, on time, fair price. No upselling, no nonsense. Will definitely call again.","author":"Steve J.","location":"New Rochelle, NY","initials":"SJ","color":"bg-orange-500"},{"text":"Called at 9pm when my garage door wouldn't close. Tech arrived within 90 minutes and fixed a sensor issue. Lifesaver.","author":"Maria C.","location":"New Rochelle, NY","initials":"MC","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of New Rochelle do you cover?","answer":"All of New Rochelle — downtown, Echo Bay, Wykagyl, Residence Park, Beechmont, Larchmont Manor, Jefferson Park, Eastchester, and surrounding areas."},{"question":"How fast can you get to New Rochelle?","answer":"Our Westchester-area technician covers New Rochelle and the surrounding Sound Shore communities every week. Emergency calls are prioritized, and we give you an exact ETA the moment you call."},{"question":"What does spring replacement cost in New Rochelle?","answer":"Spring replacement runs $175–$350. We give you the exact price before we start — always upfront."},{"question":"What brands do you service in New Rochelle?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands."},{"question":"Do you offer emergency service in New Rochelle?","answer":"Yes, 24/7. Call anytime and we'll give you an honest ETA."},{"question":"Can you install a new garage door in New Rochelle?","answer":"Absolutely. We install all styles — steel, wood, carriage-style, insulated — and can help you choose what fits your home."}]}
      
    />
  );
}
