import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Smart Garage Doors - Jackson NJ',
      url: buildCanonical('/jackson-nj'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jackson',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '40.0971', longitude: '-74.3568' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Jackson, NJ Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Jackson, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Jackson garage door repair, garage door installation Jackson, emergency garage door Jackson, spring replacement Jackson"
      slug="/jackson-nj/"
      cityName="Jackson"
      stateCode="NJ"
      stateName="New Jersey"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Jackson Center & Cooks Bridge","description":"The heart of Jackson with suburban residential neighborhoods. Our home base tech is based in Jackson."},{"name":"Cassville & Prospertown","description":"Rural and semi-rural Jackson communities. We know these back roads well."},{"name":"Legler & Whitesville","description":"Western Jackson areas with a mix of older homes and newer developments."},{"name":"Six Flags area & Hyson Road","description":"Entertainment district and surrounding residential developments. We service all types here."},{"name":"Toms River border","description":"Southern Jackson bordering Toms River. We cover this corridor efficiently from our base."},{"name":"Howell border area","description":"Northwestern Jackson near Howell township. We service both Jackson and Howell."}]}
      reviews={[{"text":"This is the team's home territory. Spring broke, they were here in 30 minutes. Fixed it fast, very fair price. Best garage door service in Ocean County.","author":"Joseph M.","location":"Jackson, NJ","initials":"JM","color":"bg-blue-600"},{"text":"New door installed in Cassville. Great choice of styles, excellent installation. Our house looks so much better. These guys know their stuff.","author":"Beverly W.","location":"Cassville, Jackson","initials":"BW","color":"bg-orange-500"},{"text":"Emergency call at 8pm. Door wouldn't close and I had to leave early next morning. They came within an hour and fixed the issue. Outstanding.","author":"Tom K.","location":"Jackson, NJ","initials":"TK","color":"bg-green-600"}]}
      faqs={[{"question":"Is Jackson really your home base?","answer":"Yes! Our technician Yitzi is based in Jackson. This means we have the fastest response times in Ocean County — typically 20–45 minutes for most of Jackson."},{"question":"What parts of Jackson do you cover?","answer":"All of Jackson — the center, Cassville, Prospertown, Legler, Whitesville, the Six Flags area, and all surrounding communities."},{"question":"What does garage door repair cost in Jackson?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always."},{"question":"Do you also serve towns near Jackson?","answer":"Yes — Toms River, Howell, Manchester, Lakewood, Brick, and surrounding Ocean/Monmouth County towns are all within our service range."},{"question":"What brands do you service in Jackson?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands."},{"question":"Do you offer same-day service in Jackson?","answer":"Almost always — this is our home base. Same-day service is our standard in Jackson."}]}
      
    />
  );
}
