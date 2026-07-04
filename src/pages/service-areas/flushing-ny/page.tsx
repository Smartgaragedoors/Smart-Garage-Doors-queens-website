import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Flushing, NY Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in Flushing, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Flushing garage door repair, garage door installation Flushing, emergency garage door Flushing, spring replacement Flushing"
      slug="/flushing-ny/"
      cityName="Flushing"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7670', longitude: '-73.8330' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Downtown Flushing","description":"The heart of Queens' most diverse neighborhood. Dense housing with a mix of attached garages and multi-unit buildings."},{"name":"Murray Hill & Queensboro Hill","description":"Residential areas east of downtown with single-family homes and attached garages — our most common call type here."},{"name":"Auburndale & Bayside Hills","description":"Quieter residential streets north of Flushing. We have strong repeat customer bases in both areas."},{"name":"College Point & Whitestone","description":"Waterfront communities north of Flushing. Easy access, fast response."},{"name":"Fresh Meadows & Jamaica Hills","description":"Southern areas bordering Jamaica. Dense residential with a mix of housing types."},{"name":"Kissena Park & Pomonok","description":"Central Flushing neighborhoods. We run regular routes here and can usually come same day."}]}
      reviews={[{"text":"They answered the phone on the first call. They listened to my issue. Were able to come same day to assess the problem. Was friendly and professional in answering all our questions and concerned being our first time requesting garage repairs/replacement. They were able to fit us into their schedule within two days. They arrived on time and worked quickly. Got the job done in less than an hour and a half. They seem professional. I would highly recommend them.","author":"Mable P.","location":"Flushing, Queens","initials":"MP","color":"bg-blue-600"},{"text":"EXCELLENT SERVICE. Prompt communication and a dedicated team— these guys love what they do! We worked with Ben from smart garage doors and he helped us stay in budget and delivered a great product! Would recommend to friends, neighbors and people who like high quality service with a smile.","author":"Jacob H.","location":"Flushing, Queens","initials":"JH","color":"bg-orange-500"},{"text":"Great communication, great work. All around decent and a joy to work with. If you need your garage door repaired contact these guys, they will take care of you.","author":"Cristos S.","location":"Flushing, Queens","initials":"CS","color":"bg-green-600"}]}
      faqs={[{"question":"Do you service all of Flushing?","answer":"Yes — downtown Flushing, Murray Hill, Queensboro Hill, Auburndale, Bayside Hills, College Point, Whitestone, Fresh Meadows, Jamaica Hills, Kissena Park, Pomonok, and surrounding areas."},{"question":"How fast can you reach Flushing?","answer":"We're based in Flushing — our primary address is on 70th Ave in Flushing. Because we're based right here, Flushing calls are usually our fastest dispatches — we give an honest ETA when you call."},{"question":"What does garage door repair cost in Flushing?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. All quotes are upfront."},{"question":"Do you work on garage doors in Flushing apartment buildings?","answer":"Yes. We work with supers and property managers regularly for multi-unit buildings throughout Flushing."},{"question":"What brands do you service in Flushing?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more."},{"question":"Do you offer emergency service in Flushing?","answer":"Yes, 24/7. Flushing is one of our fastest response areas. Call anytime."}]}
      
    />
  );
}
