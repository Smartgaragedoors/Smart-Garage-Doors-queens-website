import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Nassau County, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Nassau County, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Nassau County garage door repair, garage door installation Nassau County, emergency garage door Nassau County, spring replacement Nassau County"
      slug="/nassau-county-ny/"
      cityName="Nassau County"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7329', longitude: '-73.5900' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Great Neck & Manhasset","description":"North Shore's most prestigious addresses. We install and service premium garage doors that match the architecture of these homes."},{"name":"Garden City & Hempstead","description":"Classic Long Island communities with a mix of older and newer homes. High volume of spring and opener work here."},{"name":"Rockville Centre & Lynbrook","description":"South Shore neighborhoods where we have a strong repeat customer base. Fast arrivals from our nearby routes."},{"name":"Hicksville & Plainview","description":"Mid-Island communities with dense residential areas. We run regular service routes through both neighborhoods."},{"name":"Syosset & Woodbury","description":"Premium communities in the Oyster Bay area. Custom and carriage-style door installations are common here."},{"name":"Valley Stream & Elmont","description":"South Nassau neighborhoods on our regular service routes. We're in the area every week."}]}
      reviews={[{"text":"Garage door spring broke in Garden City on a cold morning. They arrived in 90 minutes, replaced both springs, and the door works better than ever.","author":"Patricia L.","location":"Garden City, Nassau County","initials":"PL","color":"bg-blue-600"},{"text":"Installed a new Clopay door in Great Neck. They helped me choose the right style and the installation looks amazing. Worth every penny.","author":"Richard K.","location":"Great Neck, Nassau County","initials":"RK","color":"bg-orange-500"},{"text":"Emergency repair in Rockville Centre at night. The tech arrived fast, fixed the cable, and had the door working within the hour.","author":"Susan M.","location":"Rockville Centre, Nassau County","initials":"SM","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Nassau County do you serve?","answer":"All of Nassau County — Great Neck, Manhasset, Garden City, Hempstead, Rockville Centre, Lynbrook, Hicksville, Plainview, Syosset, Woodbury, Valley Stream, Elmont, Mineola, Westbury, and more."},{"question":"How fast can you get to Nassau County?","answer":"Our Nassau team covers the county every day and gives you an honest ETA the moment you call. Emergency calls are our top priority."},{"question":"Do you install premium garage doors in Nassau County?","answer":"Yes. We carry and install Clopay, Wayne Dalton, Amarr, and other premium brands popular in Nassau's upscale neighborhoods."},{"question":"What does garage door repair cost in Nassau County?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350, new installation from $800. All quotes are upfront."},{"question":"Do you offer maintenance contracts in Nassau County?","answer":"Yes. We offer annual maintenance plans to keep your door running safely year-round."},{"question":"What brands do you service in Nassau County?","answer":"All brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."}]}
      
    />
  );
}
