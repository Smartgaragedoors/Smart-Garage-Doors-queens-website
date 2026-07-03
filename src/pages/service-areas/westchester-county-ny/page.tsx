import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Westchester County, NY Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in Westchester County, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Westchester County garage door repair, garage door installation Westchester County, emergency garage door Westchester County, spring replacement Westchester County"
      slug="/westchester-county-ny/"
      cityName="Westchester County"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '41.1220', longitude: '-73.7949' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Yonkers & Tarrytown","description":"Southern Westchester's most populated areas. We run regular routes here and can usually arrive same day."},{"name":"White Plains & Scarsdale","description":"County center and its premium neighborhoods — we cover both with our Westchester-based technician."},{"name":"New Rochelle & Pelham","description":"Eastern Westchester along the Long Island Sound. Quick arrivals from our regular service routes."},{"name":"Rye & Port Chester","description":"South Westchester communities bordering Connecticut. We serve both sides of the border."},{"name":"Chappaqua & Briarcliff Manor","description":"Northern Westchester's affluent communities. Premium garage doors and smart opener installs are common here."},{"name":"Mount Vernon & Bronxville","description":"Dense urban communities in lower Westchester. We handle residential and light commercial garage doors."}]}
      reviews={[{"text":"Couldn't get into my garage in Yonkers — spring snapped at 7am. They were there by 9, fixed it, and I made it to work on time. Amazing service.","author":"Kevin O.","location":"Yonkers, Westchester","initials":"KO","color":"bg-blue-600"},{"text":"New door installation in Chappaqua. Beautiful job. They measured, helped me choose the right style, and the installation was perfect.","author":"Laura S.","location":"Chappaqua, Westchester","initials":"LS","color":"bg-orange-500"},{"text":"Emergency repair in Rye on a Sunday night. Tech showed up, fixed a broken cable, tested everything. Outstanding response and quality work.","author":"Mark F.","location":"Rye, Westchester","initials":"MF","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Westchester County do you serve?","answer":"All of Westchester — Yonkers, White Plains, Scarsdale, New Rochelle, Pelham, Rye, Port Chester, Chappaqua, Briarcliff Manor, Tarrytown, Sleepy Hollow, Mount Vernon, Bronxville, Larchmont, and more."},{"question":"How fast can you reach Westchester?","answer":"Our Westchester-area technician covers the entire county and gives an honest ETA the moment you call."},{"question":"What does garage door repair cost in Westchester?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350, new installation from $800."},{"question":"Do you install premium garage doors in Westchester?","answer":"Yes. We work with all premium brands and custom styles for Westchester's upscale homes."},{"question":"Do you offer emergency service throughout Westchester?","answer":"Yes, 24/7. Call anytime and our Westchester technician will respond."},{"question":"What brands do you service in Westchester?","answer":"All brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and custom brands."}]}
      
    />
  );
}
