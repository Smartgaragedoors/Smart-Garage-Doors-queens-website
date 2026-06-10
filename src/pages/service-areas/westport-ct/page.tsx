import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Westport, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Westport, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Westport garage door repair, garage door installation Westport, emergency garage door Westport, spring replacement Westport"
      slug="/westport-ct/"
      cityName="Westport"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.1415', longitude: '-73.3579' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Saugatuck & Downtown","description":"Westport's vibrant center with beautiful homes along the Saugatuck River. We service the full range of garage systems here."},{"name":"Greens Farms & Southport","description":"Coastal neighborhoods with premium homes and upscale garage doors. Custom installs are common in these areas."},{"name":"Compo Beach & Sherwood Island area","description":"Waterfront properties near the beach. Coastal exposure means we stock corrosion-resistant hardware for these homes."},{"name":"Coleytown & Kings Highway","description":"Northern Westport residential areas with large homes and quality garage systems."},{"name":"Long Lots & Gorham Island","description":"Prestigious Westport communities. We're experienced with the premium door brands common here."},{"name":"Westport borders (Weston/Wilton)","description":"We serve homes in the areas bordering Westport — same professional service, same response time."}]}
      reviews={[{"text":"Spring emergency in Greens Farms. Called on a Saturday, tech arrived 90 minutes later, fixed it on the spot. Clean work, fair price.","author":"Stephanie C.","location":"Greens Farms, Westport","initials":"SC","color":"bg-blue-600"},{"text":"New Wayne Dalton door in Coleytown. They guided us through the selection process, and the installation was perfect.","author":"Martin V.","location":"Coleytown, Westport","initials":"MV","color":"bg-orange-500"},{"text":"Opener died at Compo Beach house. They came same week, installed a new WiFi-enabled unit, and set everything up. Great service for coastal properties.","author":"Diane K.","location":"Compo, Westport","initials":"DK","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Westport do you serve?","answer":"All of Westport — Saugatuck, downtown, Greens Farms, Southport, Compo Beach, Sherwood Island area, Coleytown, Kings Highway, Long Lots, and Gorham Island."},{"question":"How quickly can you reach Westport?","answer":"Westport is 75–90 minutes from our Suffern base. We aim to respond to emergencies as quickly as possible."},{"question":"Do you handle coastal garage door issues in Westport?","answer":"Yes. Salt air and humidity affect hardware differently — we use corrosion-resistant springs, cables, and hardware for coastal properties near Compo Beach."},{"question":"What does a new garage door installation cost in Westport?","answer":"Standard installations from $800. Premium and custom options run higher. We provide a full quote before starting."},{"question":"What brands do you service in Westport?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and custom brands."},{"question":"Do you offer emergency service in Westport?","answer":"Yes, 24/7. Call anytime — we'll give you an honest ETA."}]}
      
    />
  );
}
