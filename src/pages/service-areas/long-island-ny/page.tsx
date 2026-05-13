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
      name: 'Smart Garage Doors - Long Island NY',
      url: buildCanonical('/long-island-ny'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Long Island',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '40.7891', longitude: '-73.1350' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Long Island, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Long Island, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Long Island garage door repair, garage door installation Long Island, emergency garage door Long Island, spring replacement Long Island"
      slug="/long-island-ny/"
      cityName="Long Island"
      stateCode="NY"
      stateName="New York"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Nassau County (North Shore)","description":"Great Neck, Manhasset, Roslyn — premium homes with high-quality garage doors. We specialize in upscale installs here."},{"name":"Nassau County (South Shore)","description":"Rockville Centre, Valley Stream, Freeport — well-established neighborhoods with high demand for repair and maintenance."},{"name":"Suffolk County (West)","description":"Huntington, Commack, Smithtown — suburban neighborhoods where we run regular routes."},{"name":"Suffolk County (East)","description":"Farmingdale, Babylon, Bay Shore — we cover these areas with same-day availability most days."},{"name":"The Hamptons & East End","description":"Seasonal and year-round homes in the Hamptons. We service all door brands and install premium custom doors."},{"name":"North Fork","description":"Quieter East End communities. We schedule service efficiently for this area — call ahead for availability."}]}
      reviews={[{"text":"Spring snapped in Great Neck on a Sunday. Called, got a real person, tech was there in 90 minutes. Replaced both springs, checked everything. Great job.","author":"Michael S.","location":"Great Neck, Long Island","initials":"MS","color":"bg-blue-600"},{"text":"New garage door install in Huntington. They helped me pick the right style, came on time, and the installation was flawless.","author":"Karen W.","location":"Huntington, Long Island","initials":"KW","color":"bg-orange-500"},{"text":"Emergency call in Valley Stream at night. They picked up, showed up, fixed it. Exactly what you hope for. Highly recommend.","author":"Jason T.","location":"Valley Stream, Long Island","initials":"JT","color":"bg-green-600"}]}
      faqs={[{"question":"What parts of Long Island do you serve?","answer":"All of Long Island — Nassau County including Great Neck, Manhasset, Garden City, Rockville Centre, and Valley Stream; plus western and central Suffolk County including Huntington, Commack, Smithtown, Babylon, and Bay Shore."},{"question":"How long does it take to get to Long Island?","answer":"From our Brooklyn hub, we can reach most of Nassau County within 45–90 minutes. Western Suffolk is 60–90 minutes. We give you an honest ETA when you call."},{"question":"Do you install custom garage doors on Long Island?","answer":"Yes. We install a wide range of garage door styles — steel, wood, carriage-style, glass — for Long Island homes at all price points."},{"question":"What does garage door repair cost on Long Island?","answer":"Basic repairs start at $150–$300, spring replacement runs $175–$350, opener repair $150–$350. We quote upfront before any work begins."},{"question":"Do you service high-end garage doors in the Hamptons?","answer":"Yes. We service all brands and price points, including custom and high-end doors common in Hamptons properties."},{"question":"What brands do you service on Long Island?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and specialty brands used in custom installations."}]}
      
    />
  );
}
