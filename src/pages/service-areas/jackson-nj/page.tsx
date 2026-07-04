import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Jackson, NJ Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in Jackson, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Jackson garage door repair, garage door installation Jackson, emergency garage door Jackson, spring replacement Jackson"
      slug="/jackson-nj/"
      cityName="Jackson"
      stateCode="NJ"
      stateName="New Jersey"
      geo={{ latitude: '40.0971', longitude: '-74.3568' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Jackson Center & Cooks Bridge","description":"The heart of Jackson with suburban residential neighborhoods. Our home base tech is based in Jackson."},{"name":"Cassville & Prospertown","description":"Rural and semi-rural Jackson communities. We know these back roads well."},{"name":"Legler & Whitesville","description":"Western Jackson areas with a mix of older homes and newer developments."},{"name":"Six Flags area & Hyson Road","description":"Entertainment district and surrounding residential developments. We service all types here."},{"name":"Toms River border","description":"Southern Jackson bordering Toms River. We cover this corridor efficiently from our base."},{"name":"Howell border area","description":"Northwestern Jackson near Howell township. We service both Jackson and Howell."}]}
      reviews={[]}
      faqs={[{"question":"Is Jackson really your home base?","answer":"Yes! Our technician Yitzi is based in Jackson and covers the area every week — call us and we'll give you an honest arrival estimate based on current availability."},{"question":"What parts of Jackson do you cover?","answer":"All of Jackson — the center, Cassville, Prospertown, Legler, Whitesville, the Six Flags area, and all surrounding communities."},{"question":"What does garage door repair cost in Jackson?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always."},{"question":"Do you also serve towns near Jackson?","answer":"Yes — Toms River, Howell, Manchester, Lakewood, Brick, and surrounding Ocean/Monmouth County towns are all within our service range."},{"question":"What brands do you service in Jackson?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands."},{"question":"Do you offer same-day service in Jackson?","answer":"Often, yes — this is our home base. Call for current availability."}]}
      
    />
  );
}
