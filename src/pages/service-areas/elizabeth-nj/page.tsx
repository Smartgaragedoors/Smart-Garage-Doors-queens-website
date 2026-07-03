import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Elizabeth, NJ Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in Elizabeth, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Elizabeth garage door repair, garage door installation Elizabeth, emergency garage door Elizabeth, spring replacement Elizabeth"
      slug="/elizabeth-nj/"
      cityName="Elizabeth"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.6640', longitude: '-74.2107' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown & Port Area","description":"Dense urban core and industrial waterfront. We service commercial roll-up doors and residential garages throughout."},{"name":"Elmora & Weehawken Hill","description":"Residential areas in western Elizabeth. Single-family homes with attached and detached garages."},{"name":"Peterstown & Kesbrough","description":"Historic neighborhoods in northeast Elizabeth with a mix of housing types."},{"name":"Bayway & Elizabethport","description":"Industrial and residential mix near the waterfront. Commercial and residential garage door service."},{"name":"North Elizabeth","description":"Residential neighborhoods adjacent to Hillside. We cover these on our Union County routes."},{"name":"Elizabeth border areas","description":"Communities bordering Linden, Hillside, and Union — we serve all of them."}]}
      reviews={[{"text":"Commercial roll-up door at our Elizabeth warehouse. They came next day, assessed it, and had it working within a few hours. Minimal business disruption.","author":"Victor R.","location":"Elizabeth, NJ","initials":"VR","color":"bg-blue-600"},{"text":"Spring replacement in Elmora. Called in the morning, they came same afternoon. Fast, professional, fair price.","author":"Maria S.","location":"Elmora, Elizabeth","initials":"MS","color":"bg-orange-500"},{"text":"New opener in my Elizabeth home. Tech was efficient and showed me how to set it up. Works great. Good service at a fair price.","author":"Carlos M.","location":"Elizabeth, NJ","initials":"CM","color":"bg-green-600"}]}
      faqs={[{"question":"Do you serve all of Elizabeth, NJ?","answer":"Yes — downtown, Elmora, Weehawken Hill, Peterstown, Kesbrough, Bayway, Elizabethport, and all surrounding areas."},{"question":"How fast can you reach Elizabeth?","answer":"Our technicians cover Elizabeth and the surrounding Union County communities every week. Emergency calls are prioritized, and we'll give you an honest ETA the moment you call."},{"question":"Do you handle commercial garage doors in Elizabeth?","answer":"Yes. We service commercial roll-up doors and industrial garage systems throughout Elizabeth, including the port area."},{"question":"What does spring replacement cost in Elizabeth?","answer":"Spring replacement runs $175–$350. Upfront pricing before we start."},{"question":"What brands do you service in Elizabeth?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands."},{"question":"Do you offer emergency service in Elizabeth?","answer":"Yes, 24/7. For both residential and commercial emergency calls."}]}
      
    />
  );
}
