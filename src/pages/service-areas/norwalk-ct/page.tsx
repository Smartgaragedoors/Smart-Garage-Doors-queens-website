import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Norwalk, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Norwalk, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Norwalk garage door repair, garage door installation Norwalk, emergency garage door Norwalk, spring replacement Norwalk"
      slug="/norwalk-ct/"
      cityName="Norwalk"
      stateCode="CT"
      stateName="Connecticut"
      geo={{ latitude: '41.1176', longitude: '-73.4082' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"South Norwalk (SoNo)","description":"Trendy waterfront district with a mix of historic buildings and new construction. We service all garage types including commercial."},{"name":"East Norwalk & Rowayton","description":"Coastal neighborhoods in east Norwalk. Waterfront homes require corrosion-resistant hardware — we stock it."},{"name":"West Norwalk","description":"Upscale residential area in western Norwalk. Custom garage doors are popular in the larger homes here."},{"name":"Cranbury & Silvermine","description":"Historic neighborhoods in north Norwalk. Older architecture with interesting garage door challenges — we handle them."},{"name":"Broad River & Wolfpit","description":"Mid-city residential areas with dense neighborhoods. High volume of repair calls."},{"name":"Calf Pasture Beach area","description":"Waterfront recreational area and surrounding homes. Coastal hardware is important here."}]}
      reviews={[{"text":"Cable snapped in SoNo. Called, they came same afternoon, fixed it fast. Professional and efficient. Would use again without hesitation.","author":"Nicole F.","location":"South Norwalk, CT","initials":"NF","color":"bg-blue-600"},{"text":"New garage door in West Norwalk. They walked us through the options, chose a beautiful Wayne Dalton carriage door, and installed it perfectly.","author":"Raymond B.","location":"West Norwalk, CT","initials":"RB","color":"bg-orange-500"},{"text":"Spring emergency in East Norwalk. They were here in about 90 minutes, replaced both springs, and the door runs great.","author":"Christine D.","location":"East Norwalk, CT","initials":"CD","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of Norwalk do you serve?","answer":"All of Norwalk — South Norwalk, East Norwalk, Rowayton, West Norwalk, Cranbury, Silvermine, Broad River, Wolfpit, and surrounding areas."},{"question":"How fast can you reach Norwalk?","answer":"Our Fairfield County technician covers Norwalk and the surrounding shoreline communities every week. Emergency calls get prioritized, and we give you an exact ETA the moment you call."},{"question":"Do you handle coastal garage doors in Norwalk?","answer":"Yes. We use corrosion-resistant hardware for homes near Rowayton and the Norwalk waterfront, where salt air accelerates wear."},{"question":"What does spring replacement cost in Norwalk?","answer":"Spring replacement runs $175–$350. Exact quote before we start."},{"question":"What brands do you service in Norwalk?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands."},{"question":"Do you offer emergency service in Norwalk?","answer":"Yes, 24/7. We'll give you an honest ETA the moment you call."}]}
      
    />
  );
}
