import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Edison, NJ Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Edison, NJ — total-price quotes, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Edison garage door repair, garage door installation Edison, emergency garage door Edison, spring replacement Edison"
      slug="/edison-nj/"
      cityName="Edison"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.5187', longitude: '-74.4121' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Edison Town Center & Oak Tree Road","description":"The commercial heart of Edison with surrounding dense residential neighborhoods. We service both residential and commercial properties."},{"name":"Metuchen border & Menlo Park Terrace","description":"Established communities in northern Edison. Strong repeat customer base in these neighborhoods."},{"name":"Piscataway border & South Edison","description":"Southern Edison communities near Piscataway. Single-family homes and townhouse developments."},{"name":"Woodbridge border & Sewaren area","description":"Eastern Edison near the Raritan Bay. We cover this area on our central NJ routes."},{"name":"North Brunswick border","description":"Northern Edison bordering North Brunswick. Suburban developments with modern garage systems."},{"name":"Rahway & Clark border","description":"Western Edison areas. We service these neighborhoods as part of our Union/Middlesex County coverage."}]}
      reviews={[]}
      faqs={[{"question":"What areas of Edison do you cover?","answer":"All of Edison — Oak Tree Road corridor, Metuchen border area, Menlo Park Terrace, South Edison, North Brunswick border, and all surrounding neighborhoods."},{"question":"How does scheduling work in Edison?","answer":"Our central NJ technician covers Edison and the surrounding Middlesex County communities every week. We confirm current availability when you call and give you an exact ETA the moment you call."},{"question":"What does spring replacement cost in Edison?","answer":"Spring replacement runs $175–$350. Upfront pricing — no surprises."},{"question":"What brands do you service in Edison?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands."},{"question":"How does scheduling work in Edison?","answer":"Yes. Our central NJ technician is in the area regularly, and a dispatcher confirms current availability for Edison when you call."},{"question":"Do you service commercial garage doors in Edison?","answer":"Yes. We service commercial roll-up doors and commercial opener systems for Edison businesses."}]}
      
    />
  );
}
