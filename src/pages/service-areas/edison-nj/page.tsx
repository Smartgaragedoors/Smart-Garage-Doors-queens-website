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
      name: 'Smart Garage Doors - Edison NJ',
      url: buildCanonical('/edison-nj'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Edison',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '40.5187', longitude: '-74.4121' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Edison, NJ Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Edison, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Edison garage door repair, garage door installation Edison, emergency garage door Edison, spring replacement Edison"
      slug="/edison-nj/"
      cityName="Edison"
      stateCode="NJ"
      stateName="New Jersey"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Edison Town Center & Oak Tree Road","description":"The commercial heart of Edison with surrounding dense residential neighborhoods. We service both residential and commercial properties."},{"name":"Metuchen border & Menlo Park Terrace","description":"Established communities in northern Edison. Strong repeat customer base in these neighborhoods."},{"name":"Piscataway border & South Edison","description":"Southern Edison communities near Piscataway. Single-family homes and townhouse developments."},{"name":"Woodbridge border & Sewaren area","description":"Eastern Edison near the Raritan Bay. We cover this area on our central NJ routes."},{"name":"North Brunswick border","description":"Northern Edison bordering North Brunswick. Suburban developments with modern garage systems."},{"name":"Rahway & Clark border","description":"Western Edison areas. We service these neighborhoods as part of our Union/Middlesex County coverage."}]}
      reviews={[{"text":"Spring replacement in Edison. Our Jackson-based tech came same day, replaced both springs, and everything works great. Fair price, professional service.","author":"Raj P.","location":"Edison, NJ","initials":"RP","color":"bg-blue-600"},{"text":"New LiftMaster opener in our Edison home. Installed fast, WiFi works great, and the tech was very knowledgeable. Highly recommend.","author":"Priya K.","location":"Edison, NJ","initials":"PK","color":"bg-orange-500"},{"text":"Emergency call in Edison when my cable snapped. Tech came same day and had it fixed in under an hour. Very grateful for the quick response.","author":"Michael T.","location":"Edison, NJ","initials":"MT","color":"bg-green-600"}]}
      faqs={[{"question":"What areas of Edison do you cover?","answer":"All of Edison — Oak Tree Road corridor, Metuchen border area, Menlo Park Terrace, South Edison, North Brunswick border, and all surrounding neighborhoods."},{"question":"How fast can you reach Edison?","answer":"Our Jackson-based technician covers Edison in about 30–45 minutes. Fast response for central NJ."},{"question":"What does spring replacement cost in Edison?","answer":"Spring replacement runs $175–$350. Upfront pricing — no surprises."},{"question":"What brands do you service in Edison?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands."},{"question":"Do you offer same-day service in Edison?","answer":"Yes. With our Jackson-based technician, same-day service is usually available in Edison."},{"question":"Do you service commercial garage doors in Edison?","answer":"Yes. We service commercial roll-up doors and commercial opener systems for Edison businesses."}]}
      
    />
  );
}
