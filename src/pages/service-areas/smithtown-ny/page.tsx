import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Smithtown, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Smithtown, NY — 5.0★ reviews, total-price quotes. Spring replacement, opener repair, emergency line. Licensed & insured. Call (914) 557-6816."
      keywords="Smithtown garage door repair, garage door installation Smithtown, emergency garage door Smithtown, spring replacement Smithtown"
      slug="/smithtown-ny/"
      cityName="Smithtown"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.8568', longitude: '-73.2007' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Smithtown Village","description":"The historic village center with older homes and a range of garage door styles. We service everything from antique hardware to modern smart openers."},{"name":"St. James & Head of the Harbor","description":"Affluent communities bordering Smithtown with custom homes and premium garage doors."},{"name":"Kings Park & Commack","description":"Western Smithtown areas with dense residential neighborhoods. High volume of spring and opener calls."},{"name":"Nesconset & Lake Grove","description":"Growing communities in the center of Smithtown. Newer construction with modern garage door systems."},{"name":"Stony Brook & Setauket","description":"University area with a mix of residential and academic facilities. We service both."},{"name":"Hauppauge border areas","description":"Eastern Smithtown neighborhoods that blend into Hauppauge. We cover all of it."}]}
      reviews={[]}
      faqs={[{"question":"What areas of Smithtown do you cover?","answer":"All of Smithtown — the village, St. James, Head of the Harbor, Kings Park, Commack, Nesconset, Lake Grove, Stony Brook, Setauket, and surrounding areas."},{"question":"How does scheduling work in Smithtown?","answer":"Our Long Island team covers Smithtown and the surrounding communities every week. Call and a dispatcher checks current technician availability — actual arrival depends on the technician's current job, traffic, and your distance from our nearest crew, and we confirm an honest window on the call."},{"question":"What does spring replacement cost in Smithtown?","answer":"Spring replacement runs $175–$350 — the total price inclusive of any fees, surcharges, and applicable taxes. We quote the exact price before starting."},{"question":"Do you install custom garage doors in Smithtown?","answer":"Yes. We install all styles including premium custom doors for the upscale homes in St. James and Head of the Harbor."},{"question":"What brands do you service in Smithtown?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you handle urgent garage door problems in Smithtown?","answer":"Yes — call our emergency line and a dispatcher will check current technician availability and confirm an honest arrival window for Smithtown."}]}
      
    />
  );
}
