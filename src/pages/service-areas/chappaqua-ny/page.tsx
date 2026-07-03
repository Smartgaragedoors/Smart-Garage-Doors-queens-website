import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Chappaqua, NY Garage Door Repair & Custom Door Installation | Smart Garage Doors"
      metaDescription="Premium garage door service in Chappaqua, NY — custom and insulated doors, quiet smart openers, same-day repair. Licensed & insured. Call (914) 557-6816."
      keywords="Chappaqua garage door repair, garage door installation Chappaqua NY, custom garage doors Chappaqua, garage door spring replacement Chappaqua, smart garage door opener Westchester"
      slug="/chappaqua-ny/"
      cityName="Chappaqua"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '41.1598', longitude: '-73.7649' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Lawrence Farms","description":"Estate properties on generous wooded lots, many with detached or oversized garages. We install custom and insulated doors built to complement these distinguished homes."},{"name":"Riverwoods","description":"A newer community of townhomes and single-family houses where quiet operation matters. Belt-drive LiftMaster openers and well-balanced insulated doors are our go-to recommendation here."},{"name":"Old Farm Lake","description":"Wooded townhome and condo enclave where doors see heavy daily use. We handle spring replacements, roller upgrades, and opener tune-ups that keep them running smoothly."},{"name":"Whippoorwill","description":"Hilltop estates with long driveways and large multi-car garages. We recommend smart openers with battery backup so an outage never leaves you stuck at the top of the hill."},{"name":"Chappaqua Hamlet","description":"Classic colonials and Tudors near the train station and King Street. We help owners choose carriage-style and custom wood doors that match the home's original character."},{"name":"Town of New Castle (Millwood borders)","description":"Contemporary and colonial homes throughout the surrounding town of New Castle. Full door and opener packages, repairs, and architectural matching all available."}]}
      reviews={[]}
      faqs={[{"question":"What does a new garage door installation cost in Chappaqua?","answer":"New installation starts from $800 for standard doors. Premium insulated, carriage-style, and custom wood doors run higher depending on size and materials. We provide a detailed quote before any work begins."},{"question":"Should I repair or replace my garage door in Chappaqua?","answer":"If the door has a broken spring, worn rollers, or a misaligned track, a repair ($150–$300, springs $175–$350) usually makes sense. If panels are rotting, the door is poorly insulated, or it no longer suits the home, replacement is often the better long-term investment. We give you an honest assessment either way."},{"question":"Can you install a quiet, smart garage door opener?","answer":"Yes. We install LiftMaster belt-drive openers that run far quieter than old chain units, with WiFi app setup so you can monitor and operate the door from your phone. Battery backup models keep the door working during Chappaqua's storm-related outages."},{"question":"How fast can you get to Chappaqua?","answer":"Our Westchester-area technician covers Chappaqua and the surrounding communities every week. Same-day appointments are often available, and we give you an honest ETA when you call — no inflated promises."},{"question":"Do you handle estate properties with long driveways and detached garages?","answer":"Yes. Many Chappaqua homes in Lawrence Farms and Whippoorwill have oversized or detached garages on wooded lots. We install custom-sized doors, heavy-duty hardware, and battery-backup openers suited to power outages on these properties."},{"question":"Can you match a new door to my colonial or contemporary home?","answer":"Absolutely. We help you select carriage-style, custom wood, or modern flush designs that complement colonials, Tudors, and contemporaries alike — with samples and a detailed quote before installation."}]}

    />
  );
}
