import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Staten Island, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Staten Island, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Staten Island garage door repair, garage door installation Staten Island, emergency garage door Staten Island, spring replacement Staten Island"
      slug="/staten-island-ny/"
      cityName="Staten Island"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.5795', longitude: '-74.1502' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"St. George & Stapleton","description":"North Shore neighborhoods with older homes and attached garages. Quick access from our Brooklyn hub."},{"name":"New Dorp & Great Kills","description":"Mid-Island residential areas where single-family homes with private garages are very common."},{"name":"Tottenville & Richmond Valley","description":"South Shore's suburban neighborhoods — wide streets, easy access, and plenty of garage door work."},{"name":"Bay Terrace & Westerleigh","description":"Quiet residential blocks with well-maintained homes. We service many repeat customers here."},{"name":"Mariners Harbor & Port Richmond","description":"West Shore neighborhoods we reach quickly from our Dyker Heights location."},{"name":"Grasmere & Dongan Hills","description":"East Shore communities with a mix of older and newer construction — we handle both."}]}
      reviews={[{"text":"Spring broke in New Dorp on a Friday night. They sent someone by 9pm, fixed it fast, and charged exactly what they quoted. No games.","author":"Lisa P.","location":"New Dorp, Staten Island","initials":"LP","color":"bg-blue-600"},{"text":"New opener install in Great Kills. Tech was on time, did great work, and set up the WiFi app for me. Best home service experience I've had.","author":"Frank D.","location":"Great Kills, Staten Island","initials":"FD","color":"bg-orange-500"},{"text":"Door came off track in Tottenville. Called at 8am, they were here by 10. Fixed same day. Really professional.","author":"Nina C.","location":"Tottenville, Staten Island","initials":"NC","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Staten Island do you serve?","answer":"All of Staten Island — St. George, Stapleton, New Dorp, Great Kills, Tottenville, Richmond Valley, Bay Terrace, Westerleigh, Mariners Harbor, Port Richmond, Grasmere, Dongan Hills, and everywhere else."},{"question":"How quickly can you get to Staten Island?","answer":"We can typically reach Staten Island within 60–90 minutes for emergencies. We have technicians based in Brooklyn who know the best routes to the island."},{"question":"What does a spring replacement cost on Staten Island?","answer":"Spring replacement runs $175–$350 depending on the spring type. We quote the exact price before starting — no surprise fees."},{"question":"Do you service garage doors in Staten Island townhomes?","answer":"Yes. Townhomes, attached garages, detached garages — we handle them all."},{"question":"What brands do you service on Staten Island?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more."},{"question":"Do you offer same-day service on Staten Island?","answer":"Yes. Most days we can offer same-day service. Call us in the morning for the best availability."}]}
      
    />
  );
}
