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
      name: 'Smart Garage Doors - Teaneck NJ',
      url: buildCanonical('/teaneck-nj'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Teaneck',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '40.8945', longitude: '-74.0152' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Teaneck, NJ Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Teaneck, NJ — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Teaneck garage door repair, garage door installation Teaneck, emergency garage door Teaneck, spring replacement Teaneck"
      slug="/teaneck-nj/"
      cityName="Teaneck"
      stateCode="NJ"
      stateName="New Jersey"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Teaneck Center & Queen Anne Road","description":"The heart of Teaneck with dense residential neighborhoods. We run regular routes here and have many repeat customers."},{"name":"Glenpointe & Cedar Lane","description":"Commercial and mixed-use corridor plus surrounding residential areas. We handle both."},{"name":"Englewood Cliffs border","description":"Northern Teaneck bordering Englewood Cliffs. Upscale single-family homes with quality garage systems."},{"name":"Bogota & River Edge border","description":"Western Teaneck areas bordering neighboring towns. We cover these smoothly on our Bergen County routes."},{"name":"Fort Lee border","description":"Southeastern Teaneck near Fort Lee. Convenient for our Hudson River corridor routes."},{"name":"Bergenfield border","description":"Eastern Teaneck areas. Dense residential with high service demand."}]}
      reviews={[{"text":"Spring broke in Teaneck on a cold Monday. They had someone here by noon, fixed it cleanly, and the price was exactly as quoted.","author":"Hannah K.","location":"Teaneck, NJ","initials":"HK","color":"bg-blue-600"},{"text":"New opener installed in our Teaneck home. Works great with the app. Tech was friendly and efficient. Would definitely recommend.","author":"David R.","location":"Teaneck, NJ","initials":"DR","color":"bg-orange-500"},{"text":"Door off track in Teaneck. Called and they came same day, got it back on properly, and adjusted everything. Solid work at a fair price.","author":"Leah B.","location":"Teaneck, NJ","initials":"LB","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Teaneck do you serve?","answer":"All of Teaneck — the center, Queen Anne Road corridor, Glenpointe area, and all residential neighborhoods throughout the township."},{"question":"How fast can you reach Teaneck?","answer":"Teaneck is about 45–60 minutes from our Suffern base. Our Bergen County routes include regular stops in Teaneck."},{"question":"What does garage door repair cost in Teaneck?","answer":"Repairs start at $150–$300, spring replacement $175–$350. Upfront quotes always."},{"question":"Do you service garage doors in Teaneck apartment complexes?","answer":"Yes. We work with property managers and building management for multi-family properties in Teaneck."},{"question":"What brands do you service in Teaneck?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr."},{"question":"Do you offer same-day service in Teaneck?","answer":"Yes. Bergen County is well within our regular service area — same-day slots are usually available."}]}
      
    />
  );
}
