import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Scarsdale, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Scarsdale, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Scarsdale garage door repair, garage door installation Scarsdale, emergency garage door Scarsdale, spring replacement Scarsdale"
      slug="/scarsdale-ny/"
      cityName="Scarsdale"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.9895', longitude: '-73.7846' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Scarsdale Village","description":"The village center with beautiful homes and high-end garage doors. We install premium custom doors throughout the village."},{"name":"Fox Meadow & Quaker Ridge","description":"Scarsdale's most prestigious neighborhoods. Carriage-style and custom wood doors are our most common installs here."},{"name":"Murray Hill & Greenacres","description":"Established residential areas with large homes. We service everything from opener upgrades to full door replacements."},{"name":"Edgewood & Heathcote","description":"Eastern Scarsdale neighborhoods with a mix of colonial and contemporary homes."},{"name":"Secor Road & Crane Road areas","description":"Premium residential streets with custom homes. We specialize in high-end installations that match the home's architecture."},{"name":"Scarsdale borders (Hartsdale/Eastchester)","description":"We serve homes in the surrounding areas bordering Scarsdale — same quality, same response time."}]}
      reviews={[{"text":"New Clopay door in Fox Meadow. They helped me choose the right style, installed it beautifully, and cleaned up perfectly. Our house looks so much better.","author":"Jennifer W.","location":"Fox Meadow, Scarsdale","initials":"JW","color":"bg-blue-600"},{"text":"Spring emergency in Scarsdale Village on a Wednesday. They were here in under an hour, fixed both springs, and the price was very fair.","author":"Thomas H.","location":"Scarsdale, NY","initials":"TH","color":"bg-orange-500"},{"text":"Opener upgrade in Greenacres. Tech installed a new LiftMaster with full WiFi setup. Clean work, great price, very professional.","author":"Barbara M.","location":"Greenacres, Scarsdale","initials":"BM","color":"bg-green-600"}]}
      faqs={[{"question":"Do you specialize in high-end garage doors for Scarsdale homes?","answer":"Yes. We work with premium brands like Clopay, Wayne Dalton, and custom wood doors that suit Scarsdale's upscale homes. We'll help you choose the right style."},{"question":"How fast can you reach Scarsdale?","answer":"Our Westchester-area technician covers Scarsdale. Most calls are reached within 45–75 minutes."},{"question":"What does a new garage door installation cost in Scarsdale?","answer":"Installation starts from $800 for standard doors and goes up for premium or custom options. We provide a detailed quote before any work begins."},{"question":"What brands do you install in Scarsdale?","answer":"We install Clopay, Wayne Dalton, Amarr, and other premium brands suited for Scarsdale's high-end homes."},{"question":"Do you match garage doors to the home architecture in Scarsdale?","answer":"Absolutely. We take the home's style into consideration — colonial, Tudor, contemporary, or custom — and help you choose a door that complements it."},{"question":"Do you offer same-day service in Scarsdale?","answer":"Yes. With our Westchester technician, same-day service is usually available. Call us in the morning for best availability."}]}
      
    />
  );
}
