import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Suffolk County, NY Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in Suffolk County, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Suffolk County garage door repair, garage door installation Suffolk County, emergency garage door Suffolk County, spring replacement Suffolk County"
      slug="/suffolk-county-ny/"
      cityName="Suffolk County"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.9148', longitude: '-72.7000' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Huntington & Cold Spring Harbor","description":"North Shore Suffolk with beautiful homes and premium garage doors. We install and service all high-end brands here."},{"name":"Smithtown & St. James","description":"Well-established mid-Suffolk communities. We run regular routes and offer quick service throughout these towns."},{"name":"Hauppauge & Commack","description":"Dense residential areas in central Suffolk. High volume of spring replacements and opener upgrades here."},{"name":"Babylon & Bay Shore","description":"South Shore communities with easy access from our routes. Fast arrivals for this part of Suffolk."},{"name":"Islip & Brentwood","description":"Central Suffolk's most populated areas. We service a large number of homes and light commercial properties here."},{"name":"Patchogue & Medford","description":"East Suffolk areas we reach efficiently. Call ahead for availability — typically same-day slots available."}]}
      reviews={[{"text":"Door spring snapped in Huntington on a Saturday. They had someone here by noon, fixed both springs, and the door is running perfectly. Quick, professional, fair.","author":"Daniel R.","location":"Huntington, Suffolk County","initials":"DR","color":"bg-blue-600"},{"text":"New opener in Smithtown. Installed fast, works great with the app. Tech was friendly and explained everything clearly. Would call again.","author":"Michelle T.","location":"Smithtown, Suffolk County","initials":"MT","color":"bg-orange-500"},{"text":"Cable broke in Babylon. They came same day, fixed it, and also adjusted the tension. Door runs smoother now than it did before it broke.","author":"George N.","location":"Babylon, Suffolk County","initials":"GN","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Suffolk County do you serve?","answer":"Western and central Suffolk — Huntington, Cold Spring Harbor, Smithtown, St. James, Hauppauge, Commack, Babylon, Bay Shore, Islip, Brentwood, Patchogue, and surrounding areas."},{"question":"How fast can you reach Suffolk County?","answer":"Our Long Island team covers western and central Suffolk every week. Same-day appointments are often available, and we'll give you an honest ETA when you call."},{"question":"What does a spring replacement cost in Suffolk County?","answer":"Spring replacement runs $175–$350. We quote the exact price before starting — no hidden fees ever."},{"question":"Do you install new garage doors in Suffolk County?","answer":"Yes. We install a full range of garage doors — steel, wood, carriage-style, insulated — for all home types in Suffolk."},{"question":"What brands do you service in Suffolk County?","answer":"All major brands including LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and Amarr."},{"question":"Do you offer emergency service in Suffolk County?","answer":"Yes, 24/7 emergency service is available throughout Suffolk County. Response times are longer than NYC but we'll get there."}]}
      
    />
  );
}
