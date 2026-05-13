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
      name: 'Smart Garage Doors - Suffern NY',
      url: buildCanonical('/suffern-ny'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Suffern',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '41.1148', longitude: '-74.1496' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '475' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="Suffern, NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Suffern, NY — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="Suffern garage door repair, garage door installation Suffern, emergency garage door Suffern, spring replacement Suffern"
      slug="/suffern-ny/"
      cityName="Suffern"
      stateCode="NY"
      stateName="New York"
      reviewCount={475}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Suffern Village","description":"Our home base. We're as local as it gets — our Suffern technician lives and works here. Fastest response time of any location we serve."},{"name":"Airmont & Montebello","description":"Neighboring communities we reach in minutes. We have longtime customers throughout both villages."},{"name":"Wesley Hills & Pomona","description":"Rockland communities just north of Suffern. Quick arrivals from our base."},{"name":"Mahwah & Ramsey NJ","description":"Just across the state line. We serve northern Bergen County with the same fast response as Suffern."},{"name":"Hillburn & Tuxedo","description":"Small communities along the NY/NJ border. We know these roads well."},{"name":"Sloatsburg & Tuxedo Park","description":"Route 17 corridor communities. We cover this stretch regularly."}]}
      reviews={[{"text":"Broken spring in Suffern Village — they were literally here in 30 minutes. Fixed it fast, price was exactly as quoted. As good as it gets.","author":"Eric D.","location":"Suffern, NY","initials":"ED","color":"bg-blue-600"},{"text":"New garage door in Airmont. Beautiful installation, on time, and cleaned up perfectly. This is the company to call in Rockland County.","author":"Susan P.","location":"Airmont, NY","initials":"SP","color":"bg-orange-500"},{"text":"Emergency in Wesley Hills on a Sunday. Door wouldn't open and it was 20 degrees. They were here in 45 minutes. Fixed it. Can't thank them enough.","author":"Robert M.","location":"Wesley Hills, NY","initials":"RM","color":"bg-green-600"}]}
      faqs={[{"question":"Why is Suffern your base?","answer":"Suffern is central to Rockland County, close to the NJ border, and gives us great access to northern NJ and the Hudson Valley. Our technician Ben is based here and knows the area extremely well."},{"question":"How fast can you reach Suffern?","answer":"Faster than anywhere else we serve. Our Suffern tech can be at most local addresses in 15–30 minutes."},{"question":"Do you serve areas around Suffern?","answer":"Yes — Airmont, Montebello, Wesley Hills, Pomona, Sloatsburg, Tuxedo, Hillburn, and across the border into Mahwah and Ramsey NJ."},{"question":"What does garage door repair cost in Suffern?","answer":"Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always."},{"question":"What brands do you service in Suffern?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you offer same-day service in Suffern?","answer":"Almost always. This is our home territory — we prioritize local calls and usually have same-day availability."}]}
      
    />
  );
}
