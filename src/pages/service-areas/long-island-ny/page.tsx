import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Long Island, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Long Island, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Long Island garage door repair, garage door installation Long Island, emergency garage door Long Island, spring replacement Long Island"
      slug="/long-island-ny/"
      cityName="Long Island"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7891', longitude: '-73.1350' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Nassau County (North Shore)","description":"Great Neck, Manhasset, Roslyn — premium homes with high-quality garage doors. We specialize in upscale installs here."},{"name":"Nassau County (South Shore)","description":"Rockville Centre, Valley Stream, Freeport — well-established neighborhoods with high demand for repair and maintenance."},{"name":"Suffolk County (West)","description":"Huntington, Commack, Smithtown — suburban neighborhoods where we run regular routes."},{"name":"Suffolk County (East)","description":"Farmingdale, Babylon, Bay Shore — we cover these areas with same-day availability most days."},{"name":"The Hamptons & East End","description":"Seasonal and year-round homes in the Hamptons. We service all door brands and install premium custom doors."},{"name":"North Fork","description":"Quieter East End communities. We schedule service efficiently for this area — call ahead for availability."}]}
      reviews={[{"text":"Spring snapped in Great Neck on a Sunday. Called, got a real person, tech was there in 90 minutes. Replaced both springs, checked everything. Great job.","author":"Michael S.","location":"Great Neck, Long Island","initials":"MS","color":"bg-blue-600"},{"text":"New garage door install in Huntington. They helped me pick the right style, came on time, and the installation was flawless.","author":"Karen W.","location":"Huntington, Long Island","initials":"KW","color":"bg-orange-500"},{"text":"Emergency call in Valley Stream at night. They picked up, showed up, fixed it. Exactly what you hope for. Highly recommend.","author":"Jason T.","location":"Valley Stream, Long Island","initials":"JT","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Long Island do you serve?","answer":"All of Long Island — Nassau County including Great Neck, Manhasset, Garden City, Rockville Centre, and Valley Stream; plus western and central Suffolk County including Huntington, Commack, Smithtown, Babylon, and Bay Shore."},{"question":"How fast can you get to Long Island?","answer":"Our technicians cover Nassau County and western Suffolk every week, from the North Shore to the South Shore. We give you an honest ETA when you call, and same-day appointments are often available."},{"question":"Do you install custom garage doors on Long Island?","answer":"Yes. We install a wide range of garage door styles — steel, wood, carriage-style, glass — for Long Island homes at all price points."},{"question":"What does garage door repair cost on Long Island?","answer":"Basic repairs start at $150–$300, spring replacement runs $175–$350, opener repair $150–$350. We quote upfront before any work begins."},{"question":"Do you service high-end garage doors in the Hamptons?","answer":"Yes. We service all brands and price points, including custom and high-end doors common in Hamptons properties."},{"question":"What brands do you service on Long Island?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and specialty brands used in custom installations."}]}
      
    />
  );
}
