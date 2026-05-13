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
      name: 'Smart Garage Doors - Hauppauge NY',
      url: buildCanonical('/hauppauge-ny'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hauppauge',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '40.8223', longitude: '-73.2040' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Hauppauge, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Hauppauge, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Hauppauge garage door repair, garage door installation Hauppauge, emergency garage door Hauppauge, spring replacement Hauppauge"
      slug="/hauppauge-ny/"
      cityName="Hauppauge"
      stateCode="NY"
      stateName="New York"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Hauppauge Industrial Park","description":"One of the largest industrial parks in the Northeast — we service commercial roll-up doors and loading dock systems throughout."},{"name":"Hauppauge Residential North","description":"Quiet suburban streets north of the LIE with well-maintained homes and attached garages."},{"name":"Hauppauge Residential South","description":"Southern residential areas near Smithtown border. Single-family homes with a high rate of spring and opener calls."},{"name":"Veterans Memorial Highway Corridor","description":"The commercial strip running through Hauppauge — we handle both commercial and residential properties here."},{"name":"Hauppauge bordering Commack","description":"Western residential sections of Hauppauge that blend into Commack. We service both communities."},{"name":"Hauppauge bordering Brentwood","description":"Southern areas near Brentwood. Working-class neighborhoods with practical, dependable service needs."}]}
      reviews={[{"text":"Commercial garage door at our Hauppauge warehouse. They came next day, assessed the problem, and had it fixed fast. Minimal downtime for our business.","author":"Paul V.","location":"Hauppauge Industrial Park","initials":"PV","color":"bg-blue-600"},{"text":"Spring broke at my house in Hauppauge. Called at 8am, they were here by noon, replaced both springs, done. Clean and professional.","author":"Ann M.","location":"Hauppauge, NY","initials":"AM","color":"bg-orange-500"},{"text":"New opener installed in my Hauppauge garage. Tech was efficient and the WiFi setup worked perfectly. Really happy with the whole experience.","author":"Brian K.","location":"Hauppauge, NY","initials":"BK","color":"bg-green-600"}]}
      faqs={[{"question":"Do you service commercial garage doors in Hauppauge?","answer":"Yes. The Hauppauge Industrial Park is a significant part of our business. We service commercial roll-up doors, loading dock doors, and large-format commercial openers throughout the park."},{"question":"How fast can you reach Hauppauge?","answer":"Hauppauge is 60–90 minutes from our Queens hub. We schedule efficiently to minimize your wait, especially for commercial clients."},{"question":"What does garage door repair cost in Hauppauge?","answer":"Residential repairs start at $150–$300. Commercial jobs are quoted based on scope. We always provide pricing before work begins."},{"question":"Do you service residential garages in Hauppauge too?","answer":"Yes. About half our Hauppauge calls are residential — homeowners in the surrounding neighborhoods."},{"question":"What brands do you service in Hauppauge?","answer":"All brands — LiftMaster, Genie, Chamberlain, Amarr, Clopay, commercial-grade operators, and more."},{"question":"Do you offer emergency commercial garage door service in Hauppauge?","answer":"Yes. A commercial door stuck open or closed is an emergency — call anytime and we'll prioritize it."}]}
      
    />
  );
}
