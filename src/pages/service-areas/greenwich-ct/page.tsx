import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Greenwich, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Greenwich, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Greenwich garage door repair, garage door installation Greenwich, emergency garage door Greenwich, spring replacement Greenwich"
      slug="/greenwich-ct/"
      cityName="Greenwich"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.0262', longitude: '-73.6282' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Greenwich Village & Tod's Point","description":"The historic downtown and waterfront. Upscale properties with premium garage doors. We know how to work in high-end environments."},{"name":"Backcountry & North Mianus","description":"Rural-feeling northern Greenwich with estate properties and large custom homes. Premium installs are the norm here."},{"name":"Cos Cob & Riverside","description":"Mid-Greenwich communities with beautiful homes. We have many repeat customers in both neighborhoods."},{"name":"Old Greenwich & Sound Beach","description":"Coastal communities in east Greenwich. Salt-resistant hardware is important here — we stock it."},{"name":"Byram & Glenville","description":"Western Greenwich communities near the NY border. We can reach these areas very quickly from our Westchester routes."},{"name":"Belle Haven & Field Point","description":"Some of Connecticut's most prestigious addresses. We work discreetly and professionally in these environments."}]}
      reviews={[{"text":"New custom garage door in Backcountry. They understood exactly what the house needed, sourced the right door, and installed it beautifully. First-class service.","author":"Charles W.","location":"Backcountry, Greenwich","initials":"CW","color":"bg-blue-600"},{"text":"Spring emergency in Cos Cob. Showed up fast, replaced both springs, and the price was very fair for Greenwich.","author":"Allison B.","location":"Cos Cob, Greenwich","initials":"AB","color":"bg-orange-500"},{"text":"LiftMaster install in Old Greenwich. Tech was professional, clean, and efficient. The smart home integration worked perfectly from day one.","author":"Frederick M.","location":"Old Greenwich, CT","initials":"FM","color":"bg-green-600"}]}
      faqs={[{"question":"Do you specialize in high-end garage doors for Greenwich estates?","answer":"Yes. We work with premium brands and custom options suited for Greenwich's upscale properties. We're experienced working in high-value home environments."},{"question":"How fast can you reach Greenwich from New York?","answer":"Our Suffern-based technician covers Greenwich. Most Greenwich locations are 45–75 minutes from our base."},{"question":"What brands do you install in Greenwich?","answer":"Clopay, Wayne Dalton, Amarr, custom wood doors, and all major smart opener brands. We match the door to the home's architecture."},{"question":"What does a new garage door cost in Greenwich?","answer":"Standard installations start from $800. Custom or premium doors run higher — we provide a detailed quote before any work begins."},{"question":"Do you offer emergency service in Greenwich?","answer":"Yes, 24/7. Response times to Greenwich are typically 60–90 minutes."},{"question":"Do you work in all Greenwich neighborhoods?","answer":"Yes — all areas from downtown to the Backcountry, Byram, Old Greenwich, Cos Cob, Riverside, and Belle Haven."}]}
      
    />
  );
}
