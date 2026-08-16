import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="White Plains, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in White Plains, NY — total-price quotes, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="White Plains garage door repair, garage door installation White Plains, emergency garage door White Plains, spring replacement White Plains"
      slug="/white-plains-ny/"
      cityName="White Plains"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '41.0340', longitude: '-73.7629' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown White Plains","description":"Urban center with mixed residential and commercial properties. We handle both apartment building garages and commercial doors downtown."},{"name":"Battle Hill & Gedney Farms","description":"Established residential neighborhoods with single-family homes and attached garages. Quick arrivals from our regular Westchester routes."},{"name":"Soundview & Ridgeway","description":"Mid-city neighborhoods with a mix of condo complexes and single-family homes. We service both."},{"name":"North White Plains","description":"Quieter residential area bordering Harrison. Suburban-style homes with private garages."},{"name":"Highlands & Fisher Hill","description":"Upscale neighborhoods in south White Plains. Custom door installations are popular in these areas."},{"name":"Ferris Ave & Prospect Hill","description":"Central White Plains residential areas with a steady flow of repair and maintenance calls."}]}
      reviews={[{"text":"Spring snapped in downtown White Plains midweek. They fit me in and got it done. Fair price, professional tech. Very happy.","author":"Andrew K.","location":"White Plains, NY","initials":"AK","color":"bg-blue-600"},{"text":"New LiftMaster installed in Gedney Farms. Tech was on time, did clean work, and walked me through the app setup. Would recommend to anyone in Westchester.","author":"Diane L.","location":"White Plains, NY","initials":"DL","color":"bg-orange-500"},{"text":"Called for an emergency at 7pm — door wouldn't close. They showed up within the hour and fixed a cable issue. Quick, clean, and professional.","author":"Chris B.","location":"White Plains, NY","initials":"CB","color":"bg-green-600"}]}
      faqs={[{"question":"What neighborhoods in White Plains do you serve?","answer":"All of White Plains — downtown, Battle Hill, Gedney Farms, Soundview, Ridgeway, North White Plains, Highlands, Fisher Hill, and surrounding areas."},{"question":"How does scheduling work in White Plains?","answer":"Our Westchester-area technician covers White Plains and the surrounding communities every week. A dispatcher confirms an honest arrival window when you call, based on current technician availability."},{"question":"What does garage door repair cost in White Plains?","answer":"Repairs run $150–$300 (total price inclusive of any fees, surcharges, and applicable taxes), spring replacement $175–$350, opener repair $150–$350. We quote upfront before starting."},{"question":"Do you handle commercial garage doors in White Plains?","answer":"Yes. We service commercial roll-up doors and commercial opener systems for White Plains businesses and properties."},{"question":"What brands do you service in White Plains?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more."},{"question":"How does scheduling work in White Plains?","answer":"Yes. Our Westchester-area technician is in White Plains regularly, so call and a dispatcher confirms current availability — calling early helps."}]}
      
    />
  );
}
