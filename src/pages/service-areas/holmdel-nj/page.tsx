import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Holmdel, NJ Garage Door Repair & Premium Door Installation | Smartest Garage Doors"
      metaDescription="Garage door service in Holmdel, NJ — insulated doors, quiet smart openers, full door & opener packages, same-day repair. Licensed & insured. (914) 557-6816."
      keywords="Holmdel garage door repair, garage door installation Holmdel NJ, insulated garage doors Holmdel, garage door spring replacement Holmdel, quiet garage door opener Monmouth County"
      slug="/holmdel-nj/"
      cityName="Holmdel"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.3451', longitude: '-74.1840' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Holmdel Road Estates","description":"Estate neighborhoods off Holmdel Road with large custom homes and three-car garages. We install matched sets of premium insulated doors with coordinated hardware and finishes."},{"name":"Telegraph Hill Area","description":"Upscale homes near Telegraph Hill Road and the parkway. Quiet belt-drive openers are a favorite upgrade here — smooth, near-silent operation for garages under bedrooms."},{"name":"Bell Works / Crawfords Corner Area","description":"Newer luxury developments near the landmark Bell Works campus. Full door-and-opener packages with WiFi smart access suit these modern multi-car garages."},{"name":"Hop Brook & Ramanessin Area","description":"Colonial-style homes on generous lots near the Ramanessin Greenway. Insulated doors keep attached garages comfortable year-round and cut street noise."},{"name":"Centerville (Route 520 corridor)","description":"Established neighborhoods along Main Street and Route 520 with a mix of classic and updated homes. Spring replacement, opener repair, and full door upgrades all available."},{"name":"Holmdel Village Area","description":"Homes near Village School and town center, many built in the 1980s–2000s with original doors now due for renewal. We replace aging builder-grade doors with quieter, insulated upgrades."}]}
      reviews={[]}
      faqs={[{"question":"What does a new garage door installation cost in Holmdel?","answer":"New installation starts from $800 for standard doors. Premium insulated, carriage-style, and custom wood doors run higher depending on size and design. You receive a detailed quote before any work begins."},{"question":"Should I repair or replace my garage door in Holmdel?","answer":"Most issues — broken springs, frayed cables, worn rollers, opener faults — are repairable: repairs run $150–$300, spring replacement $175–$350, opener repair $150–$350. If your builder-grade door is dented, uninsulated, or noisy beyond tuning, replacement is often the better value. We'll advise honestly on site."},{"question":"Do you install quiet, smart garage door openers?","answer":"Yes. We install LiftMaster belt-drive openers that run dramatically quieter than older chain drives — ideal for Holmdel homes with bedrooms over the garage. WiFi app setup is included, and battery backup models are available."},{"question":"How fast can you get to Holmdel?","answer":"Our Monmouth County technician covers Holmdel and the surrounding communities every week. Same-day appointments are often available, and we give an honest ETA when you call rather than minute-level promises."},{"question":"Can you outfit a three-car garage with matching doors?","answer":"Yes. Three-car garages are common in Holmdel's estate neighborhoods, and we install matched sets — same panel design, windows, and finish — with synchronized smart openers, all priced upfront in a single detailed quote."},{"question":"Do you offer complete door and opener packages?","answer":"Yes. For Holmdel's newer luxury developments we offer full packages: premium insulated door, LiftMaster belt-drive opener, WiFi setup, new tracks and hardware, and haul-away of the old equipment — clean installation, warranty-backed."}]}

    />
  );
}
