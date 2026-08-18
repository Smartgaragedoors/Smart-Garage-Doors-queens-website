import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Hauppauge, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Hauppauge, NY — upfront total-price quotes, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Hauppauge garage door repair, garage door installation Hauppauge, emergency garage door Hauppauge, spring replacement Hauppauge"
      slug="/hauppauge-ny/"
      cityName="Hauppauge"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.8223', longitude: '-73.2040' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Hauppauge Industrial Park","description":"One of the largest industrial parks in the Northeast — we service commercial roll-up doors and loading dock systems throughout."},{"name":"Hauppauge Residential North","description":"Quiet suburban streets north of the LIE with well-maintained homes and attached garages."},{"name":"Hauppauge Residential South","description":"Southern residential areas near Smithtown border. Single-family homes with a high rate of spring and opener calls."},{"name":"Veterans Memorial Highway Corridor","description":"The commercial strip running through Hauppauge — we handle both commercial and residential properties here."},{"name":"Hauppauge bordering Commack","description":"Western residential sections of Hauppauge that blend into Commack. We service both communities."},{"name":"Hauppauge bordering Brentwood","description":"Southern areas near Brentwood. Working-class neighborhoods with practical, dependable service needs."}]}
      reviews={[{"text":"Commercial garage door at our Hauppauge warehouse. They assessed the problem and had it fixed. Minimal downtime for our business.","author":"Paul V.","location":"Hauppauge Industrial Park","initials":"PV","color":"bg-blue-600"},{"text":"Spring broke at my house in Hauppauge. Replaced both springs, done. Clean and professional.","author":"Ann M.","location":"Hauppauge, NY","initials":"AM","color":"bg-orange-500"},{"text":"New opener installed in my Hauppauge garage. Tech was efficient and the WiFi setup worked perfectly. Really happy with the whole experience.","author":"Brian K.","location":"Hauppauge, NY","initials":"BK","color":"bg-green-600"}]}
      faqs={[{"question":"Do you service commercial garage doors in Hauppauge?","answer":"Yes. The Hauppauge Industrial Park is a significant part of our business. We service commercial roll-up doors, loading dock doors, and large-format commercial openers throughout the park."},{"question":"How does scheduling work in Hauppauge?","answer":"Call and a dispatcher checks current technician availability for Hauppauge and the surrounding business corridor. Actual arrival time depends on the technician's current job, traffic, and your distance from our nearest crew — we confirm an honest window on the call."},{"question":"What does garage door repair cost in Hauppauge?","answer":"Residential repairs run $150–$300 — the total price inclusive of any fees, surcharges, and applicable taxes. Commercial jobs are quoted based on scope. We always provide pricing before work begins."},{"question":"Do you service residential garages in Hauppauge too?","answer":"Yes. About half our Hauppauge calls are residential — homeowners in the surrounding neighborhoods."},{"question":"What brands do you service in Hauppauge?","answer":"All brands — LiftMaster, Genie, Chamberlain, Amarr, Clopay, commercial-grade operators, and more."},{"question":"Do you offer emergency commercial garage door service in Hauppauge?","answer":"Yes. A commercial door stuck open or closed is an emergency — call anytime and we'll prioritize it."}]}
      
    />
  );
}
