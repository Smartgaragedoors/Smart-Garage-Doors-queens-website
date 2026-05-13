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
      name: 'Smart Garage Doors - New Canaan CT',
      url: buildCanonical('/new-canaan-ct'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Canaan',
        addressRegion: 'CT',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '41.1468', longitude: '-73.4950' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="New Canaan, CT Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in New Canaan, CT — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="New Canaan garage door repair, garage door installation New Canaan, emergency garage door New Canaan, spring replacement New Canaan"
      slug="/new-canaan-ct/"
      cityName="New Canaan"
      stateCode="CT"
      stateName="Connecticut"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"New Canaan Center","description":"The charming village center with beautiful homes nearby. We service the full range of residential garage doors throughout the center area."},{"name":"Oenoke Ridge & Country Club Road","description":"New Canaan's most prestigious addresses. Custom garage doors are standard here — we install and service them all."},{"name":"Silver Hill & Ponus Ridge","description":"Larger homes on private lots in northern New Canaan. Estate-style properties with premium door systems."},{"name":"Weed Street & Pine Road area","description":"Classic New Canaan neighborhood feel. Colonial homes with traditional garage door styles."},{"name":"Stamford border areas","description":"Southern New Canaan near the Stamford line. We cover these areas on our Fairfield County routes."},{"name":"Wilton border area","description":"Northern New Canaan's quieter residential sections. We serve these homes on our regular Connecticut routes."}]}
      reviews={[{"text":"New custom door in New Canaan. They matched the door perfectly to our colonial home. Installation was flawless. These are professionals who take pride in their work.","author":"Catherine S.","location":"New Canaan, CT","initials":"CS","color":"bg-blue-600"},{"text":"Spring snapped in New Canaan Center. Called, they came the same afternoon, replaced both springs, and the price was very fair.","author":"Andrew L.","location":"New Canaan, CT","initials":"AL","color":"bg-orange-500"},{"text":"Opener upgrade in Ponus Ridge. Switched to a WiFi-enabled LiftMaster — tech was thorough and the setup was seamless. Very satisfied.","author":"Victoria H.","location":"Ponus Ridge, New Canaan","initials":"VH","color":"bg-green-600"}]}
      faqs={[{"question":"Do you install custom garage doors in New Canaan?","answer":"Yes. New Canaan homes often call for custom and premium carriage-style doors. We carry and install top brands that complement New Canaan's New England architecture."},{"question":"How fast can you reach New Canaan?","answer":"New Canaan is about 75–90 minutes from our Suffern base. Emergency calls are prioritized."},{"question":"What does garage door repair cost in New Canaan?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. Exact quote upfront."},{"question":"What brands do you install in New Canaan?","answer":"Clopay, Wayne Dalton, Amarr, and premium custom brands — plus LiftMaster and Chamberlain for smart opener systems."},{"question":"Do you offer emergency service in New Canaan?","answer":"Yes, 24/7. We'll get there as fast as we can and give you an honest ETA."},{"question":"Do you service all of New Canaan?","answer":"Yes — the center, Oenoke Ridge, Country Club Road, Silver Hill, Ponus Ridge, and all surrounding areas."}]}
      
    />
  );
}
