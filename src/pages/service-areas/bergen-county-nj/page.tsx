import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Bergen County, NJ Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Bergen County, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Bergen County garage door repair, garage door installation Bergen County, emergency garage door Bergen County, spring replacement Bergen County"
      slug="/bergen-county-nj/"
      cityName="Bergen County"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.9587', longitude: '-74.0741' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Paramus & Hackensack","description":"Bergen's commercial and population centers. We run regular routes and offer fast response in both municipalities."},{"name":"Teaneck & Englewood","description":"Dense residential communities in eastern Bergen. We have a strong customer base throughout both towns."},{"name":"Ridgewood & Glen Rock","description":"Upscale residential communities in mid-Bergen. Custom and carriage-style doors are popular in these well-preserved neighborhoods."},{"name":"Fort Lee & Edgewater","description":"Hudson River communities with luxury high-rises and single-family homes. We handle both types."},{"name":"Ramsey & Mahwah","description":"Northern Bergen communities our technician covers constantly — some of our fastest response times in the county."},{"name":"River Edge & Oradell","description":"Quiet residential areas in central Bergen. Well-maintained homes with quality garage systems."}]}
      reviews={[{"text":"Spring snapped in Paramus. They came from NY, arrived in about an hour, fixed it perfectly. Fair price and very professional.","author":"Anthony G.","location":"Paramus, Bergen County","initials":"AG","color":"bg-blue-600"},{"text":"New carriage door in Ridgewood. Beautiful job — the tech helped me pick the right style for our Tudor home. Neighbors keep asking who did the work.","author":"Donna C.","location":"Ridgewood, Bergen County","initials":"DC","color":"bg-orange-500"},{"text":"Emergency in Teaneck on a Sunday night. Opener completely dead. They came Monday morning first thing and installed a new one.","author":"Samuel L.","location":"Teaneck, Bergen County","initials":"SL","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Bergen County do you serve?","answer":"All of Bergen County — Paramus, Hackensack, Teaneck, Englewood, Ridgewood, Glen Rock, Fort Lee, Edgewater, Ramsey, Mahwah, River Edge, Oradell, Westwood, Wyckoff, and more."},{"question":"How fast can you get to Bergen County?","answer":"Our Bergen County technician covers the county every week, from Ramsey and Mahwah down to River Edge and Oradell. Same-day appointments are often available, and we give you an exact ETA the moment you call."},{"question":"What does garage door repair cost in Bergen County?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always."},{"question":"Do you install premium doors in Bergen County?","answer":"Yes. Bergen County's upscale communities — Ridgewood, Glen Rock, Wyckoff, Ho-Ho-Kus — are a strong market for us. We carry premium brands."},{"question":"What brands do you service in Bergen County?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands."},{"question":"Do you offer emergency service in Bergen County?","answer":"Yes, 24/7. Call anytime."}]}
      
    />
  );
}
