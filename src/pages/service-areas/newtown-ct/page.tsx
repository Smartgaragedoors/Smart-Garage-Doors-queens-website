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
      name: 'Smart Garage Doors - Newtown CT',
      url: buildCanonical('/newtown-ct'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newtown',
        addressRegion: 'CT',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '41.4145', longitude: '-73.3068' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Newtown, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Newtown, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Newtown garage door repair, garage door installation Newtown, emergency garage door Newtown, spring replacement Newtown"
      slug="/newtown-ct/"
      cityName="Newtown"
      stateCode="CT"
      stateName="Connecticut"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Newtown Center & Main Street","description":"The historic town center with charming older homes and traditional garage door styles. We service and install all types here."},{"name":"Sandy Hook","description":"Sandy Hook Village and surrounding residential areas. Single-family homes with standard garage door systems."},{"name":"Hawleyville & Botsford","description":"Western Newtown communities along Route 25. Mix of residential and light industrial properties."},{"name":"Dodgingtown & Zoar","description":"Rural-feeling eastern Newtown areas. Larger lots with private garages."},{"name":"Taunton & Stepney","description":"Southern Newtown residential areas bordering Monroe. We cover these on our northwest CT routes."},{"name":"Berkshire & Currituck","description":"Northern Newtown's quieter, more rural areas. We schedule service efficiently for these locations."}]}
      reviews={[{"text":"Spring repair in Sandy Hook. They drove from NY, arrived when they said they would, and fixed it perfectly. Fair price, professional service.","author":"Thomas N.","location":"Sandy Hook, Newtown","initials":"TN","color":"bg-blue-600"},{"text":"New garage door in Newtown Center. Beautiful carriage-style door that fits the colonial home perfectly. Installation was quick and clean.","author":"Patricia A.","location":"Newtown Center, CT","initials":"PA","color":"bg-orange-500"},{"text":"Emergency call when door wouldn't open in winter. They came same day, fixed a broken cable, and also lubricated everything. Great service.","author":"Gerald S.","location":"Newtown, CT","initials":"GS","color":"bg-green-600"}]}
      faqs={[{"question":"Do you serve all of Newtown, CT?","answer":"Yes — Newtown Center, Sandy Hook, Hawleyville, Botsford, Dodgingtown, Zoar, Taunton, Stepney, Berkshire, and all of Newtown."},{"question":"How far do you travel to reach Newtown?","answer":"Newtown is about 90 minutes from our Suffern base. We schedule visits efficiently and always provide an honest ETA."},{"question":"What does garage door repair cost in Newtown?","answer":"Repairs start at $150–$300, spring replacement $175–$350. Upfront quotes before any work starts."},{"question":"Do you install carriage-style doors in Newtown?","answer":"Yes. Given Newtown's New England character, carriage-style and traditional wood-look doors are very popular. We carry a great selection."},{"question":"What brands do you service in Newtown?","answer":"LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands."},{"question":"Do you offer same-day service in Newtown?","answer":"We offer same-day service when availability allows. Given the distance, call early for best results."}]}
      
    />
  );
}
