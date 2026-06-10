import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Paramus, NJ Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Paramus, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Paramus garage door repair, garage door installation Paramus, emergency garage door Paramus, spring replacement Paramus"
      slug="/paramus-nj/"
      cityName="Paramus"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.9454', longitude: '-74.0710' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Route 4 & Route 17 Corridor","description":"Paramus's retail hubs and surrounding commercial properties. We service commercial roll-up doors and warehouses throughout both corridors."},{"name":"East Paramus","description":"Residential eastern section with single-family homes. Our most common residential call area in Paramus."},{"name":"West Paramus & Century Road","description":"Mixed residential and commercial in western Paramus. We cover both types efficiently."},{"name":"Ridgewood border area","description":"Northern Paramus near Ridgewood. Upscale homes transitioning from commercial Paramus to suburban Ridgewood."},{"name":"Maywood & Fair Lawn border","description":"Eastern Paramus borders. We cover these as part of our Bergen County routes."},{"name":"Rochelle Park border","description":"Southern Paramus. Convenient access from our regular Bergen County circuit."}]}
      reviews={[{"text":"Commercial door at our Paramus location. Called, they came fast, assessed the issue and fixed it same day. No downtime for the business.","author":"Stephen C.","location":"Paramus, NJ","initials":"SC","color":"bg-blue-600"},{"text":"Spring replacement at my house in east Paramus. Tech was professional, on time, and the price was fair. Would definitely call again.","author":"Lisa R.","location":"East Paramus, NJ","initials":"LR","color":"bg-orange-500"},{"text":"New opener installed in Paramus. Works perfectly with the app. Quick job, clean installation. Very happy with the service.","author":"Adam H.","location":"Paramus, NJ","initials":"AH","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of Paramus do you serve?","answer":"All of Paramus — Route 4 and Route 17 corridors, east and west residential sections, and bordering areas near Ridgewood, Fair Lawn, Maywood, and Rochelle Park."},{"question":"How fast can you reach Paramus?","answer":"Paramus is 45–60 minutes from our Suffern base. We know the Routes 4 and 17 corridors well and navigate them efficiently."},{"question":"Do you service commercial properties in Paramus?","answer":"Yes. Commercial roll-up doors, loading dock systems, and commercial openers are a significant part of our Paramus business."},{"question":"What does garage door repair cost in Paramus?","answer":"Residential repairs start at $150–$300, spring replacement $175–$350. Commercial quotes are based on scope. Upfront pricing always."},{"question":"What brands do you service in Paramus?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands."},{"question":"Do you offer same-day service in Paramus?","answer":"Yes. Bergen County is well within our regular routes — same-day slots are usually available."}]}
      
    />
  );
}
