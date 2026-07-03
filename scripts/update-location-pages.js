const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'src', 'pages', 'service-areas');

function makePage({ dir, city, stateCode, stateName, slug, lat, lng, heroImg, reviewCount, neighborhoods, reviews, faqs, comparisonRows }) {
  const img = heroImg || 'https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero';
  const rc = reviewCount || 475;
  const schemaCity = city.replace(/\s*(County|the)\s*/gi, '').trim() || city;

  const compProp = comparisonRows
    ? `comparisonRows={${JSON.stringify(comparisonRows)}}`
    : '';

  return `import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Smart Garage Doors - ${schemaCity} ${stateCode}',
      url: buildCanonical('${slug.replace(/\/$/, '')}'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${schemaCity}',
        addressRegion: '${stateCode}',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '${lat}', longitude: '${lng}' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '${rc}' },
    });
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <LocationPageTemplate
      metaTitle="${city}, ${stateCode} Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription="Garage door repair in ${city}, ${stateCode} — same-day service, 5.0★ reviews. Spring replacement, opener repair, emergency service. Licensed & insured. Call (914) 557-6816."
      keywords="${city} garage door repair, garage door installation ${city}, emergency garage door ${city}, spring replacement ${city}"
      slug="${slug}"
      cityName="${city}"
      stateCode="${stateCode}"
      stateName="${stateName}"
      reviewCount={${rc}}
      heroImage="${img}"
      neighborhoods={${JSON.stringify(neighborhoods)}}
      reviews={${JSON.stringify(reviews)}}
      faqs={${JSON.stringify(faqs)}}
      ${compProp}
    />
  );
}
`;
}

const pages = [
  {
    dir: 'staten-island-ny', city: 'Staten Island', stateCode: 'NY', stateName: 'New York',
    slug: '/staten-island-ny/', lat: '40.5795', lng: '-74.1502',
    neighborhoods: [
      { name: 'St. George & Stapleton', description: 'North Shore neighborhoods with older homes and attached garages. Quick access from our Brooklyn hub.' },
      { name: 'New Dorp & Great Kills', description: 'Mid-Island residential areas where single-family homes with private garages are very common.' },
      { name: 'Tottenville & Richmond Valley', description: "South Shore's suburban neighborhoods — wide streets, easy access, and plenty of garage door work." },
      { name: 'Bay Terrace & Westerleigh', description: 'Quiet residential blocks with well-maintained homes. We service many repeat customers here.' },
      { name: 'Mariners Harbor & Port Richmond', description: 'West Shore neighborhoods we reach quickly from our Dyker Heights location.' },
      { name: 'Grasmere & Dongan Hills', description: 'East Shore communities with a mix of older and newer construction — we handle both.' },
    ],
    reviews: [
      { text: 'Spring broke in New Dorp on a Friday night. They sent someone by 9pm, fixed it fast, and charged exactly what they quoted. No games.', author: 'Lisa P.', location: 'New Dorp, Staten Island', initials: 'LP', color: 'bg-blue-600' },
      { text: "New opener install in Great Kills. Tech was on time, did great work, and set up the WiFi app for me. Best home service experience I've had.", author: 'Frank D.', location: 'Great Kills, Staten Island', initials: 'FD', color: 'bg-orange-500' },
      { text: 'Door came off track in Tottenville. Called at 8am, they were here by 10. Fixed same day. Really professional.', author: 'Nina C.', location: 'Tottenville, Staten Island', initials: 'NC', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Staten Island do you serve?', answer: 'All of Staten Island — St. George, Stapleton, New Dorp, Great Kills, Tottenville, Richmond Valley, Bay Terrace, Westerleigh, Mariners Harbor, Port Richmond, Grasmere, Dongan Hills, and everywhere else.' },
      { question: 'How quickly can you get to Staten Island?', answer: "We can typically reach Staten Island within 60–90 minutes for emergencies. We have technicians based in Brooklyn who know the best routes to the island." },
      { question: 'What does a spring replacement cost on Staten Island?', answer: "Spring replacement runs $175–$350 depending on the spring type. We quote the exact price before starting — no surprise fees." },
      { question: 'Do you service garage doors in Staten Island townhomes?', answer: "Yes. Townhomes, attached garages, detached garages — we handle them all." },
      { question: 'What brands do you service on Staten Island?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more." },
      { question: 'Do you offer same-day service on Staten Island?', answer: "Yes. Most days we can offer same-day service. Call us in the morning for the best availability." },
    ],
  },
  {
    dir: 'long-island-ny', city: 'Long Island', stateCode: 'NY', stateName: 'New York',
    slug: '/long-island-ny/', lat: '40.7891', lng: '-73.1350',
    neighborhoods: [
      { name: 'Nassau County (North Shore)', description: 'Great Neck, Manhasset, Roslyn — premium homes with high-quality garage doors. We specialize in upscale installs here.' },
      { name: 'Nassau County (South Shore)', description: 'Rockville Centre, Valley Stream, Freeport — well-established neighborhoods with high demand for repair and maintenance.' },
      { name: 'Suffolk County (West)', description: 'Huntington, Commack, Smithtown — suburban neighborhoods where we run regular routes.' },
      { name: 'Suffolk County (East)', description: 'Farmingdale, Babylon, Bay Shore — we cover these areas with same-day availability most days.' },
      { name: 'The Hamptons & East End', description: 'Seasonal and year-round homes in the Hamptons. We service all door brands and install premium custom doors.' },
      { name: 'North Fork', description: 'Quieter East End communities. We schedule service efficiently for this area — call ahead for availability.' },
    ],
    reviews: [
      { text: "Spring snapped in Great Neck on a Sunday. Called, got a real person, tech was there in 90 minutes. Replaced both springs, checked everything. Great job.", author: 'Michael S.', location: 'Great Neck, Long Island', initials: 'MS', color: 'bg-blue-600' },
      { text: "New garage door install in Huntington. They helped me pick the right style, came on time, and the installation was flawless.", author: 'Karen W.', location: 'Huntington, Long Island', initials: 'KW', color: 'bg-orange-500' },
      { text: "Emergency call in Valley Stream at night. They picked up, showed up, fixed it. Exactly what you hope for. Highly recommend.", author: 'Jason T.', location: 'Valley Stream, Long Island', initials: 'JT', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Long Island do you serve?', answer: "All of Long Island — Nassau County including Great Neck, Manhasset, Garden City, Rockville Centre, and Valley Stream; plus western and central Suffolk County including Huntington, Commack, Smithtown, Babylon, and Bay Shore." },
      { question: 'How long does it take to get to Long Island?', answer: "From our Brooklyn hub, we can reach most of Nassau County within 45–90 minutes. Western Suffolk is 60–90 minutes. We give you an honest ETA when you call." },
      { question: 'Do you install custom garage doors on Long Island?', answer: "Yes. We install a wide range of garage door styles — steel, wood, carriage-style, glass — for Long Island homes at all price points." },
      { question: 'What does garage door repair cost on Long Island?', answer: "Basic repairs start at $150–$300, spring replacement runs $175–$350, opener repair $150–$350. We quote upfront before any work begins." },
      { question: 'Do you service high-end garage doors in the Hamptons?', answer: "Yes. We service all brands and price points, including custom and high-end doors common in Hamptons properties." },
      { question: 'What brands do you service on Long Island?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and specialty brands used in custom installations." },
    ],
  },
  {
    dir: 'nassau-county-ny', city: 'Nassau County', stateCode: 'NY', stateName: 'New York',
    slug: '/nassau-county-ny/', lat: '40.7329', lng: '-73.5900',
    neighborhoods: [
      { name: 'Great Neck & Manhasset', description: "North Shore's most prestigious addresses. We install and service premium garage doors that match the architecture of these homes." },
      { name: 'Garden City & Hempstead', description: 'Classic Long Island communities with a mix of older and newer homes. High volume of spring and opener work here.' },
      { name: 'Rockville Centre & Lynbrook', description: 'South Shore neighborhoods where we have a strong repeat customer base. Fast arrivals from our nearby routes.' },
      { name: 'Hicksville & Plainview', description: 'Mid-Island communities with dense residential areas. We run regular service routes through both neighborhoods.' },
      { name: 'Syosset & Woodbury', description: 'Premium communities in the Oyster Bay area. Custom and carriage-style door installations are common here.' },
      { name: 'Valley Stream & Elmont', description: 'South Nassau neighborhoods we reach quickly from our Brooklyn hub via the Belt Parkway.' },
    ],
    reviews: [
      { text: "Garage door spring broke in Garden City on a cold morning. They arrived in 90 minutes, replaced both springs, and the door works better than ever.", author: 'Patricia L.', location: 'Garden City, Nassau County', initials: 'PL', color: 'bg-blue-600' },
      { text: "Installed a new Clopay door in Great Neck. They helped me choose the right style and the installation looks amazing. Worth every penny.", author: 'Richard K.', location: 'Great Neck, Nassau County', initials: 'RK', color: 'bg-orange-500' },
      { text: "Emergency repair in Rockville Centre at night. The tech arrived fast, fixed the cable, and had the door working within the hour.", author: 'Susan M.', location: 'Rockville Centre, Nassau County', initials: 'SM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Nassau County do you serve?', answer: "All of Nassau County — Great Neck, Manhasset, Garden City, Hempstead, Rockville Centre, Lynbrook, Hicksville, Plainview, Syosset, Woodbury, Valley Stream, Elmont, Mineola, Westbury, and more." },
      { question: 'How fast can you get to Nassau County?', answer: "We can reach most of Nassau County within 45–75 minutes from our Brooklyn and Queens locations. Emergency calls are our top priority." },
      { question: 'Do you install premium garage doors in Nassau County?', answer: "Yes. We carry and install Clopay, Wayne Dalton, Amarr, and other premium brands popular in Nassau's upscale neighborhoods." },
      { question: 'What does garage door repair cost in Nassau County?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350, new installation from $800. All quotes are upfront." },
      { question: 'Do you offer maintenance contracts in Nassau County?', answer: "Yes. We offer annual maintenance plans to keep your door running safely year-round." },
      { question: 'What brands do you service in Nassau County?', answer: "All brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more." },
    ],
  },
  {
    dir: 'suffolk-county-ny', city: 'Suffolk County', stateCode: 'NY', stateName: 'New York',
    slug: '/suffolk-county-ny/', lat: '40.9148', lng: '-72.7000',
    neighborhoods: [
      { name: 'Huntington & Cold Spring Harbor', description: 'North Shore Suffolk with beautiful homes and premium garage doors. We install and service all high-end brands here.' },
      { name: 'Smithtown & St. James', description: 'Well-established mid-Suffolk communities. We run regular routes and offer quick service throughout these towns.' },
      { name: 'Hauppauge & Commack', description: 'Dense residential areas in central Suffolk. High volume of spring replacements and opener upgrades here.' },
      { name: 'Babylon & Bay Shore', description: 'South Shore communities with easy access from our routes. Fast arrivals for this part of Suffolk.' },
      { name: 'Islip & Brentwood', description: "Central Suffolk's most populated areas. We service a large number of homes and light commercial properties here." },
      { name: 'Patchogue & Medford', description: 'East Suffolk areas we reach efficiently. Call ahead for availability — typically same-day slots available.' },
    ],
    reviews: [
      { text: "Door spring snapped in Huntington on a Saturday. They had someone here by noon, fixed both springs, and the door is running perfectly. Quick, professional, fair.", author: 'Daniel R.', location: 'Huntington, Suffolk County', initials: 'DR', color: 'bg-blue-600' },
      { text: "New opener in Smithtown. Installed fast, works great with the app. Tech was friendly and explained everything clearly. Would call again.", author: 'Michelle T.', location: 'Smithtown, Suffolk County', initials: 'MT', color: 'bg-orange-500' },
      { text: "Cable broke in Babylon. They came same day, fixed it, and also adjusted the tension. Door runs smoother now than it did before it broke.", author: 'George N.', location: 'Babylon, Suffolk County', initials: 'GN', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Suffolk County do you serve?', answer: "Western and central Suffolk — Huntington, Cold Spring Harbor, Smithtown, St. James, Hauppauge, Commack, Babylon, Bay Shore, Islip, Brentwood, Patchogue, and surrounding areas." },
      { question: 'How fast can you reach Suffolk County?', answer: "Western Suffolk is typically 60–90 minutes from our Queens/Brooklyn hubs. Central Suffolk is 75–105 minutes. We'll give you an honest ETA when you call." },
      { question: 'What does a spring replacement cost in Suffolk County?', answer: "Spring replacement runs $175–$350. We quote the exact price before starting — no hidden fees ever." },
      { question: 'Do you install new garage doors in Suffolk County?', answer: "Yes. We install a full range of garage doors — steel, wood, carriage-style, insulated — for all home types in Suffolk." },
      { question: 'What brands do you service in Suffolk County?', answer: "All major brands including LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and Amarr." },
      { question: 'Do you offer emergency service in Suffolk County?', answer: "Yes, 24/7 emergency service is available throughout Suffolk County. Response times are longer than NYC but we'll get there." },
    ],
  },
  {
    dir: 'white-plains-ny', city: 'White Plains', stateCode: 'NY', stateName: 'New York',
    slug: '/white-plains-ny/', lat: '41.0340', lng: '-73.7629',
    neighborhoods: [
      { name: 'Downtown White Plains', description: 'Urban center with mixed residential and commercial properties. We handle both apartment building garages and commercial doors downtown.' },
      { name: 'Battle Hill & Gedney Farms', description: 'Established residential neighborhoods with single-family homes and attached garages. Quick arrivals from our Suffern hub.' },
      { name: 'Soundview & Ridgeway', description: 'Mid-city neighborhoods with a mix of condo complexes and single-family homes. We service both.' },
      { name: 'North White Plains', description: 'Quieter residential area bordering Harrison. Suburban-style homes with private garages.' },
      { name: 'Highlands & Fisher Hill', description: 'Upscale neighborhoods in south White Plains. Custom door installations are popular in these areas.' },
      { name: 'Ferris Ave & Prospect Hill', description: 'Central White Plains residential areas with a steady flow of repair and maintenance calls.' },
    ],
    reviews: [
      { text: "Spring snapped in downtown White Plains midweek. They fit me in same day and had it done in under an hour. Fair price, professional tech. Very happy.", author: 'Andrew K.', location: 'White Plains, NY', initials: 'AK', color: 'bg-blue-600' },
      { text: "New LiftMaster installed in Gedney Farms. Tech was on time, did clean work, and walked me through the app setup. Would recommend to anyone in Westchester.", author: 'Diane L.', location: 'White Plains, NY', initials: 'DL', color: 'bg-orange-500' },
      { text: "Called for an emergency at 7pm — door wouldn't close. They showed up within the hour and fixed a cable issue. Quick, clean, and professional.", author: 'Chris B.', location: 'White Plains, NY', initials: 'CB', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What neighborhoods in White Plains do you serve?', answer: "All of White Plains — downtown, Battle Hill, Gedney Farms, Soundview, Ridgeway, North White Plains, Highlands, Fisher Hill, and surrounding areas." },
      { question: 'How quickly can you reach White Plains?', answer: "Our Suffern-based technician covers White Plains and all of Westchester. Most calls can be reached in 45–75 minutes." },
      { question: 'What does garage door repair cost in White Plains?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. We quote upfront before starting." },
      { question: 'Do you handle commercial garage doors in White Plains?', answer: "Yes. We service commercial roll-up doors and commercial opener systems for White Plains businesses and properties." },
      { question: 'What brands do you service in White Plains?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more." },
      { question: 'Do you offer same-day service in White Plains?', answer: "Yes. With our Suffern-based technician, we can usually offer same-day service in White Plains. Call early for best availability." },
    ],
  },
  {
    dir: 'new-rochelle-ny', city: 'New Rochelle', stateCode: 'NY', stateName: 'New York',
    slug: '/new-rochelle-ny/', lat: '40.9115', lng: '-73.7823',
    neighborhoods: [
      { name: 'Downtown & Echo Bay', description: 'Waterfront and urban neighborhoods in south New Rochelle. We serve both residential condos and commercial properties here.' },
      { name: 'Wykagyl & Residence Park', description: 'Upscale north New Rochelle neighborhoods with large homes and premium garage doors.' },
      { name: 'Beechmont & Larchmont Manor', description: 'Established neighborhoods bordering Larchmont. Single-family homes with a mix of older and newer garage systems.' },
      { name: 'Jefferson Park & Eastchester', description: 'Mid-city residential areas with high density. We know these streets well from regular service calls.' },
      { name: 'North End & Pelham Gardens', description: 'Northern New Rochelle neighborhoods close to the Pelham border. Quick arrivals from our Westchester routes.' },
      { name: 'Trinity Place & Glen Island', description: 'Southern waterfront area with a range of housing types. We service everything from older systems to new smart openers.' },
    ],
    reviews: [
      { text: "Door off track in New Rochelle. They were here same afternoon, got it back on track, adjusted the cables, and the door runs perfectly now.", author: 'Rachel G.', location: 'New Rochelle, NY', initials: 'RG', color: 'bg-blue-600' },
      { text: "Spring replacement in Wykagyl. Professional, on time, fair price. No upselling, no nonsense. Will definitely call again.", author: 'Steve J.', location: 'New Rochelle, NY', initials: 'SJ', color: 'bg-orange-500' },
      { text: "Called at 9pm when my garage door wouldn't close. Tech arrived within 90 minutes and fixed a sensor issue. Lifesaver.", author: 'Maria C.', location: 'New Rochelle, NY', initials: 'MC', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of New Rochelle do you cover?', answer: "All of New Rochelle — downtown, Echo Bay, Wykagyl, Residence Park, Beechmont, Larchmont Manor, Jefferson Park, Eastchester, and surrounding areas." },
      { question: 'How fast can you get to New Rochelle?', answer: "Our Westchester-area technician typically reaches New Rochelle in 45–75 minutes. Emergency calls are prioritized." },
      { question: 'What does spring replacement cost in New Rochelle?', answer: "Spring replacement runs $175–$350. We give you the exact price before we start — always upfront." },
      { question: 'What brands do you service in New Rochelle?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands." },
      { question: 'Do you offer emergency service in New Rochelle?', answer: "Yes, 24/7. Call anytime and we'll give you an honest ETA." },
      { question: 'Can you install a new garage door in New Rochelle?', answer: "Absolutely. We install all styles — steel, wood, carriage-style, insulated — and can help you choose what fits your home." },
    ],
  },
  {
    dir: 'scarsdale-ny', city: 'Scarsdale', stateCode: 'NY', stateName: 'New York',
    slug: '/scarsdale-ny/', lat: '40.9895', lng: '-73.7846',
    neighborhoods: [
      { name: 'Scarsdale Village', description: 'The village center with beautiful homes and high-end garage doors. We install premium custom doors throughout the village.' },
      { name: 'Fox Meadow & Quaker Ridge', description: "Scarsdale's most prestigious neighborhoods. Carriage-style and custom wood doors are our most common installs here." },
      { name: 'Murray Hill & Greenacres', description: 'Established residential areas with large homes. We service everything from opener upgrades to full door replacements.' },
      { name: 'Edgewood & Heathcote', description: 'Eastern Scarsdale neighborhoods with a mix of colonial and contemporary homes.' },
      { name: 'Secor Road & Crane Road areas', description: "Premium residential streets with custom homes. We specialize in high-end installations that match the home's architecture." },
      { name: 'Scarsdale borders (Hartsdale/Eastchester)', description: "We serve homes in the surrounding areas bordering Scarsdale — same quality, same response time." },
    ],
    reviews: [
      { text: "New Clopay door in Fox Meadow. They helped me choose the right style, installed it beautifully, and cleaned up perfectly. Our house looks so much better.", author: 'Jennifer W.', location: 'Fox Meadow, Scarsdale', initials: 'JW', color: 'bg-blue-600' },
      { text: "Spring emergency in Scarsdale Village on a Wednesday. They were here in under an hour, fixed both springs, and the price was very fair.", author: 'Thomas H.', location: 'Scarsdale, NY', initials: 'TH', color: 'bg-orange-500' },
      { text: "Opener upgrade in Greenacres. Tech installed a new LiftMaster with full WiFi setup. Clean work, great price, very professional.", author: 'Barbara M.', location: 'Greenacres, Scarsdale', initials: 'BM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you specialize in high-end garage doors for Scarsdale homes?', answer: "Yes. We work with premium brands like Clopay, Wayne Dalton, and custom wood doors that suit Scarsdale's upscale homes. We'll help you choose the right style." },
      { question: 'How fast can you reach Scarsdale?', answer: "Our Westchester-area technician covers Scarsdale. Most calls are reached within 45–75 minutes." },
      { question: 'What does a new garage door installation cost in Scarsdale?', answer: "Installation starts from $800 for standard doors and goes up for premium or custom options. We provide a detailed quote before any work begins." },
      { question: 'What brands do you install in Scarsdale?', answer: "We install Clopay, Wayne Dalton, Amarr, and other premium brands suited for Scarsdale's high-end homes." },
      { question: 'Do you match garage doors to the home architecture in Scarsdale?', answer: "Absolutely. We take the home's style into consideration — colonial, Tudor, contemporary, or custom — and help you choose a door that complements it." },
      { question: 'Do you offer same-day service in Scarsdale?', answer: "Yes. With our Westchester technician, same-day service is usually available. Call us in the morning for best availability." },
    ],
  },
  {
    dir: 'westchester-county-ny', city: 'Westchester County', stateCode: 'NY', stateName: 'New York',
    slug: '/westchester-county-ny/', lat: '41.1220', lng: '-73.7949',
    neighborhoods: [
      { name: 'Yonkers & Tarrytown', description: "Southern Westchester's most populated areas. We run regular routes here and can usually arrive same day." },
      { name: 'White Plains & Scarsdale', description: "County center and its premium neighborhoods — we cover both with our Westchester-based technician." },
      { name: 'New Rochelle & Pelham', description: 'Eastern Westchester along the Long Island Sound. Quick arrivals from our New York City routes.' },
      { name: 'Rye & Port Chester', description: 'South Westchester communities bordering Connecticut. We serve both sides of the border.' },
      { name: 'Chappaqua & Briarcliff Manor', description: "Northern Westchester's affluent communities. Premium garage doors and smart opener installs are common here." },
      { name: 'Mount Vernon & Bronxville', description: 'Dense urban communities in lower Westchester. We handle residential and light commercial garage doors.' },
    ],
    reviews: [
      { text: "Couldn't get into my garage in Yonkers — spring snapped at 7am. They were there by 9, fixed it, and I made it to work on time. Amazing service.", author: 'Kevin O.', location: 'Yonkers, Westchester', initials: 'KO', color: 'bg-blue-600' },
      { text: "New door installation in Chappaqua. Beautiful job. They measured, helped me choose the right style, and the installation was perfect.", author: 'Laura S.', location: 'Chappaqua, Westchester', initials: 'LS', color: 'bg-orange-500' },
      { text: "Emergency repair in Rye on a Sunday night. Tech showed up, fixed a broken cable, tested everything. Outstanding response and quality work.", author: 'Mark F.', location: 'Rye, Westchester', initials: 'MF', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Westchester County do you serve?', answer: "All of Westchester — Yonkers, White Plains, Scarsdale, New Rochelle, Pelham, Rye, Port Chester, Chappaqua, Briarcliff Manor, Tarrytown, Sleepy Hollow, Mount Vernon, Bronxville, Larchmont, and more." },
      { question: 'How fast can you reach Westchester?', answer: "Our Suffern-based technician covers all of Westchester County. Most locations can be reached in 30–60 minutes." },
      { question: 'What does garage door repair cost in Westchester?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350, new installation from $800." },
      { question: 'Do you install premium garage doors in Westchester?', answer: "Yes. We work with all premium brands and custom styles for Westchester's upscale homes." },
      { question: 'Do you offer emergency service throughout Westchester?', answer: "Yes, 24/7. Call anytime and our Westchester technician will respond." },
      { question: 'What brands do you service in Westchester?', answer: "All brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and custom brands." },
    ],
  },
  {
    dir: 'hauppauge-ny', city: 'Hauppauge', stateCode: 'NY', stateName: 'New York',
    slug: '/hauppauge-ny/', lat: '40.8223', lng: '-73.2040',
    neighborhoods: [
      { name: 'Hauppauge Industrial Park', description: 'One of the largest industrial parks in the Northeast — we service commercial roll-up doors and loading dock systems throughout.' },
      { name: 'Hauppauge Residential North', description: 'Quiet suburban streets north of the LIE with well-maintained homes and attached garages.' },
      { name: 'Hauppauge Residential South', description: 'Southern residential areas near Smithtown border. Single-family homes with a high rate of spring and opener calls.' },
      { name: 'Veterans Memorial Highway Corridor', description: 'The commercial strip running through Hauppauge — we handle both commercial and residential properties here.' },
      { name: 'Hauppauge bordering Commack', description: 'Western residential sections of Hauppauge that blend into Commack. We service both communities.' },
      { name: 'Hauppauge bordering Brentwood', description: 'Southern areas near Brentwood. Working-class neighborhoods with practical, dependable service needs.' },
    ],
    reviews: [
      { text: "Commercial garage door at our Hauppauge warehouse. They came next day, assessed the problem, and had it fixed fast. Minimal downtime for our business.", author: 'Paul V.', location: 'Hauppauge Industrial Park', initials: 'PV', color: 'bg-blue-600' },
      { text: "Spring broke at my house in Hauppauge. Called at 8am, they were here by noon, replaced both springs, done. Clean and professional.", author: 'Ann M.', location: 'Hauppauge, NY', initials: 'AM', color: 'bg-orange-500' },
      { text: "New opener installed in my Hauppauge garage. Tech was efficient and the WiFi setup worked perfectly. Really happy with the whole experience.", author: 'Brian K.', location: 'Hauppauge, NY', initials: 'BK', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you service commercial garage doors in Hauppauge?', answer: "Yes. The Hauppauge Industrial Park is a significant part of our business. We service commercial roll-up doors, loading dock doors, and large-format commercial openers throughout the park." },
      { question: 'How fast can you reach Hauppauge?', answer: "Hauppauge is 60–90 minutes from our Queens hub. We schedule efficiently to minimize your wait, especially for commercial clients." },
      { question: 'What does garage door repair cost in Hauppauge?', answer: "Residential repairs start at $150–$300. Commercial jobs are quoted based on scope. We always provide pricing before work begins." },
      { question: 'Do you service residential garages in Hauppauge too?', answer: "Yes. About half our Hauppauge calls are residential — homeowners in the surrounding neighborhoods." },
      { question: 'What brands do you service in Hauppauge?', answer: "All brands — LiftMaster, Genie, Chamberlain, Amarr, Clopay, commercial-grade operators, and more." },
      { question: 'Do you offer emergency commercial garage door service in Hauppauge?', answer: "Yes. A commercial door stuck open or closed is an emergency — call anytime and we'll prioritize it." },
    ],
  },
  {
    dir: 'smithtown-ny', city: 'Smithtown', stateCode: 'NY', stateName: 'New York',
    slug: '/smithtown-ny/', lat: '40.8568', lng: '-73.2007',
    neighborhoods: [
      { name: 'Smithtown Village', description: 'The historic village center with older homes and a range of garage door styles. We service everything from antique hardware to modern smart openers.' },
      { name: "St. James & Head of the Harbor", description: 'Affluent communities bordering Smithtown with custom homes and premium garage doors.' },
      { name: 'Kings Park & Commack', description: 'Western Smithtown areas with dense residential neighborhoods. High volume of spring and opener calls.' },
      { name: 'Nesconset & Lake Grove', description: 'Growing communities in the center of Smithtown. Newer construction with modern garage door systems.' },
      { name: 'Stony Brook & Setauket', description: 'University area with a mix of residential and academic facilities. We service both.' },
      { name: 'Hauppauge border areas', description: 'Eastern Smithtown neighborhoods that blend into Hauppauge. We cover all of it.' },
    ],
    reviews: [
      { text: "Door spring snapped in Kings Park. Called, got quick service, fair price. Tech knew exactly what was needed and had it fixed in 45 minutes. Very professional.", author: 'Linda B.', location: 'Kings Park, Smithtown', initials: 'LB', color: 'bg-blue-600' },
      { text: "New garage door in St. James. They helped me choose the right style and the installation was flawless. Our home looks significantly better.", author: 'Joseph C.', location: 'St. James, Smithtown', initials: 'JC', color: 'bg-orange-500' },
      { text: "Emergency call in Nesconset — door wouldn't open and my car was inside. They were here in 90 minutes and had it working. Couldn't be more grateful.", author: 'Nancy T.', location: 'Nesconset, Smithtown', initials: 'NT', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Smithtown do you cover?', answer: "All of Smithtown — the village, St. James, Head of the Harbor, Kings Park, Commack, Nesconset, Lake Grove, Stony Brook, Setauket, and surrounding areas." },
      { question: 'How fast can you get to Smithtown?', answer: "Smithtown is typically 60–90 minutes from our Queens location. We'll give you an honest ETA when you call." },
      { question: 'What does spring replacement cost in Smithtown?', answer: "Spring replacement runs $175–$350. We quote the exact price before starting." },
      { question: 'Do you install custom garage doors in Smithtown?', answer: "Yes. We install all styles including premium custom doors for the upscale homes in St. James and Head of the Harbor." },
      { question: 'What brands do you service in Smithtown?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more." },
      { question: 'Do you offer same-day service in Smithtown?', answer: "We offer same-day service when availability allows. Call early for the best chance of same-day slots." },
    ],
  },
  {
    dir: 'suffern-ny', city: 'Suffern', stateCode: 'NY', stateName: 'New York',
    slug: '/suffern-ny/', lat: '41.1148', lng: '-74.1496',
    neighborhoods: [
      { name: 'Suffern Village', description: "Our home base. We're as local as it gets — our Suffern technician lives and works here. Fastest response time of any location we serve." },
      { name: 'Airmont & Montebello', description: 'Neighboring communities we reach in minutes. We have longtime customers throughout both villages.' },
      { name: 'Wesley Hills & Pomona', description: 'Rockland communities just north of Suffern. Quick arrivals from our base.' },
      { name: 'Mahwah & Ramsey NJ', description: 'Just across the state line. We serve northern Bergen County with the same fast response as Suffern.' },
      { name: 'Hillburn & Tuxedo', description: 'Small communities along the NY/NJ border. We know these roads well.' },
      { name: 'Sloatsburg & Tuxedo Park', description: 'Route 17 corridor communities. We cover this stretch regularly.' },
    ],
    reviews: [
      { text: "Broken spring in Suffern Village — they were literally here in 30 minutes. Fixed it fast, price was exactly as quoted. As good as it gets.", author: 'Eric D.', location: 'Suffern, NY', initials: 'ED', color: 'bg-blue-600' },
      { text: "New garage door in Airmont. Beautiful installation, on time, and cleaned up perfectly. This is the company to call in Rockland County.", author: 'Susan P.', location: 'Airmont, NY', initials: 'SP', color: 'bg-orange-500' },
      { text: "Emergency in Wesley Hills on a Sunday. Door wouldn't open and it was 20 degrees. They were here in 45 minutes. Fixed it. Can't thank them enough.", author: 'Robert M.', location: 'Wesley Hills, NY', initials: 'RM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Why is Suffern your base?', answer: "Suffern is central to Rockland County, close to the NJ border, and gives us great access to northern NJ and the Hudson Valley. Our technician Ben is based here and knows the area extremely well." },
      { question: 'How fast can you reach Suffern?', answer: "Faster than anywhere else we serve. Our Suffern tech can be at most local addresses in 15–30 minutes." },
      { question: 'Do you serve areas around Suffern?', answer: "Yes — Airmont, Montebello, Wesley Hills, Pomona, Sloatsburg, Tuxedo, Hillburn, and across the border into Mahwah and Ramsey NJ." },
      { question: 'What does garage door repair cost in Suffern?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always." },
      { question: 'What brands do you service in Suffern?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more." },
      { question: 'Do you offer same-day service in Suffern?', answer: "Almost always. This is our home territory — we prioritize local calls and usually have same-day availability." },
    ],
  },
  {
    dir: 'flushing-ny', city: 'Flushing', stateCode: 'NY', stateName: 'New York',
    slug: '/flushing-ny/', lat: '40.7670', lng: '-73.8330',
    neighborhoods: [
      { name: 'Downtown Flushing', description: "The heart of Queens' most diverse neighborhood. Dense housing with a mix of attached garages and multi-unit buildings." },
      { name: 'Murray Hill & Queensboro Hill', description: 'Residential areas east of downtown with single-family homes and attached garages — our most common call type here.' },
      { name: 'Auburndale & Bayside Hills', description: 'Quieter residential streets north of Flushing. We have strong repeat customer bases in both areas.' },
      { name: 'College Point & Whitestone', description: 'Waterfront communities north of Flushing. Easy access, fast response.' },
      { name: 'Fresh Meadows & Jamaica Hills', description: 'Southern areas bordering Jamaica. Dense residential with a mix of housing types.' },
      { name: 'Kissena Park & Pomonok', description: 'Central Flushing neighborhoods. We run regular routes here and can usually come same day.' },
    ],
    reviews: [
      { text: "Spring snapped in Flushing on a Tuesday morning. They were here by noon, replaced both springs, and the door was back to perfect.", author: 'Wei L.', location: 'Flushing, Queens', initials: 'WL', color: 'bg-blue-600' },
      { text: "New LiftMaster opener installed in College Point. Tech was fast, clean, and helped me set up the app. Excellent work.", author: 'Yuki T.', location: 'College Point, Queens', initials: 'YT', color: 'bg-orange-500' },
      { text: "Called at night when my door wouldn't close. They came within 2 hours, fixed a sensor alignment issue, and the door worked perfectly.", author: 'Rosa M.', location: 'Flushing, Queens', initials: 'RM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you service all of Flushing?', answer: "Yes — downtown Flushing, Murray Hill, Queensboro Hill, Auburndale, Bayside Hills, College Point, Whitestone, Fresh Meadows, Jamaica Hills, Kissena Park, Pomonok, and surrounding areas." },
      { question: 'How fast can you reach Flushing?', answer: "We're based in Flushing — our primary address is on 70th Ave in Flushing. Most Flushing calls are reached in 30–60 minutes." },
      { question: 'What does garage door repair cost in Flushing?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. All quotes are upfront." },
      { question: 'Do you work on garage doors in Flushing apartment buildings?', answer: "Yes. We work with supers and property managers regularly for multi-unit buildings throughout Flushing." },
      { question: 'What brands do you service in Flushing?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more." },
      { question: 'Do you offer emergency service in Flushing?', answer: "Yes, 24/7. Flushing is one of our fastest response areas. Call anytime." },
    ],
  },
  {
    dir: 'stamford-ct', city: 'Stamford', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/stamford-ct/', lat: '41.0534', lng: '-73.5387',
    neighborhoods: [
      { name: 'Downtown & South End', description: 'Urban core with condos and commercial properties. We handle all garage door types including commercial systems.' },
      { name: 'Shippan Point', description: 'Waterfront neighborhood with upscale homes. Premium installs and quality repairs are the standard here.' },
      { name: 'Glenbrook & Springdale', description: 'Mid-city residential areas with single-family homes. High volume of spring and opener calls in these neighborhoods.' },
      { name: 'Newfield & Long Ridge', description: "Northern Stamford's residential and semi-rural communities. Larger homes with premium garage door systems." },
      { name: 'Turn of River & High Ridge', description: 'Established neighborhoods in northern Stamford. We service a growing number of customers here.' },
      { name: 'Cove & Waterfront areas', description: 'South Stamford coastal neighborhoods. Salt air environments — we stock corrosion-resistant hardware for these locations.' },
    ],
    reviews: [
      { text: "Spring broke in downtown Stamford. They drove from NY, arrived in about 90 minutes, and had it fixed quickly. Professional service and fair Connecticut pricing.", author: 'Ellen R.', location: 'Stamford, CT', initials: 'ER', color: 'bg-blue-600' },
      { text: "New garage door in Shippan Point. Helped us choose the right style for the neighborhood, installed it perfectly.", author: 'Gregory T.', location: 'Shippan, Stamford', initials: 'GT', color: 'bg-orange-500' },
      { text: "Emergency in Glenbrook — couldn't get into my garage. They were here within 2 hours and fixed a cable issue on the spot. Lifesaver.", author: 'Patricia H.', location: 'Glenbrook, Stamford', initials: 'PH', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you serve Stamford, CT from New York?', answer: "Yes. Our Suffern-based technician covers all of Fairfield County, CT. Most Stamford locations are 45–75 minutes from our base." },
      { question: 'What does garage door repair cost in Stamford?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. Upfront pricing — no surprises." },
      { question: 'What areas of Stamford do you cover?', answer: "All of Stamford — downtown, Shippan, Glenbrook, Springdale, Newfield, Long Ridge, Turn of River, High Ridge, Cove, and surrounding areas." },
      { question: 'Do you handle commercial garage doors in Stamford?', answer: "Yes. We service commercial roll-up doors and commercial opener systems throughout Stamford." },
      { question: 'What brands do you service in Stamford?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more." },
      { question: 'Do you offer emergency service in Stamford?', answer: "Yes, 24/7. Response times from our Suffern base to Stamford are typically 60–90 minutes." },
    ],
  },
  {
    dir: 'greenwich-ct', city: 'Greenwich', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/greenwich-ct/', lat: '41.0262', lng: '-73.6282',
    neighborhoods: [
      { name: "Greenwich Village & Tod's Point", description: "The historic downtown and waterfront. Upscale properties with premium garage doors. We know how to work in high-end environments." },
      { name: "Backcountry & North Mianus", description: "Rural-feeling northern Greenwich with estate properties and large custom homes. Premium installs are the norm here." },
      { name: 'Cos Cob & Riverside', description: 'Mid-Greenwich communities with beautiful homes. We have many repeat customers in both neighborhoods.' },
      { name: 'Old Greenwich & Sound Beach', description: 'Coastal communities in east Greenwich. Salt-resistant hardware is important here — we stock it.' },
      { name: 'Byram & Glenville', description: 'Western Greenwich communities near the NY border. We can reach these areas very quickly from our Westchester routes.' },
      { name: 'Belle Haven & Field Point', description: "Some of Connecticut's most prestigious addresses. We work discreetly and professionally in these environments." },
    ],
    reviews: [
      { text: "New custom garage door in Backcountry. They understood exactly what the house needed, sourced the right door, and installed it beautifully. First-class service.", author: 'Charles W.', location: 'Backcountry, Greenwich', initials: 'CW', color: 'bg-blue-600' },
      { text: "Spring emergency in Cos Cob. Showed up fast, replaced both springs, and the price was very fair for Greenwich.", author: 'Allison B.', location: 'Cos Cob, Greenwich', initials: 'AB', color: 'bg-orange-500' },
      { text: "LiftMaster install in Old Greenwich. Tech was professional, clean, and efficient. The smart home integration worked perfectly from day one.", author: 'Frederick M.', location: 'Old Greenwich, CT', initials: 'FM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you specialize in high-end garage doors for Greenwich estates?', answer: "Yes. We work with premium brands and custom options suited for Greenwich's upscale properties. We're experienced working in high-value home environments." },
      { question: 'How fast can you reach Greenwich from New York?', answer: "Our Suffern-based technician covers Greenwich. Most Greenwich locations are 45–75 minutes from our base." },
      { question: 'What brands do you install in Greenwich?', answer: "Clopay, Wayne Dalton, Amarr, custom wood doors, and all major smart opener brands. We match the door to the home's architecture." },
      { question: 'What does a new garage door cost in Greenwich?', answer: "Standard installations start from $800. Custom or premium doors run higher — we provide a detailed quote before any work begins." },
      { question: 'Do you offer emergency service in Greenwich?', answer: "Yes, 24/7. Response times to Greenwich are typically 60–90 minutes." },
      { question: 'Do you work in all Greenwich neighborhoods?', answer: "Yes — all areas from downtown to the Backcountry, Byram, Old Greenwich, Cos Cob, Riverside, and Belle Haven." },
    ],
  },
  {
    dir: 'darien-ct', city: 'Darien', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/darien-ct/', lat: '41.0726', lng: '-73.4696',
    neighborhoods: [
      { name: 'Darien Center & Post Road', description: 'The heart of Darien with a mix of residential and commercial properties. We handle both.' },
      { name: 'Tokeneke & Noroton', description: 'Upscale waterfront neighborhoods in south Darien. Custom and carriage-style doors are popular here.' },
      { name: 'Darien Heights & Middlesex', description: 'Established residential areas in north Darien. Well-maintained homes with quality garage systems.' },
      { name: 'Pear Tree Point & Long Neck Point', description: 'Exclusive coastal areas. We work professionally and discreetly in these neighborhoods.' },
      { name: 'Noroton Heights', description: 'Residential area in east Darien. Single-family homes with a high rate of spring and cable calls.' },
      { name: 'West Darien', description: 'Quieter residential areas bordering Stamford. We cover this area efficiently from our CT routes.' },
    ],
    reviews: [
      { text: "Spring repair in Tokeneke. They were professional, on time, and the quality of work was excellent. Fair pricing for Darien.", author: 'Carolyn J.', location: 'Tokeneke, Darien', initials: 'CJ', color: 'bg-blue-600' },
      { text: "New carriage-style door in Darien Center. Perfect installation — matched our colonial home beautifully.", author: 'William P.', location: 'Darien Center, CT', initials: 'WP', color: 'bg-orange-500' },
      { text: "Emergency in Noroton Heights when door wouldn't close before a storm. They came fast and fixed a broken cable. Very grateful.", author: 'Helen R.', location: 'Noroton Heights, Darien', initials: 'HR', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Darien do you cover?', answer: "All of Darien — the center, Tokeneke, Noroton, Darien Heights, Middlesex, Pear Tree Point, Long Neck Point, Noroton Heights, and West Darien." },
      { question: 'How fast can you reach Darien?', answer: "Darien is 60–90 minutes from our Suffern base. We prioritize emergency calls and aim to respond as quickly as possible." },
      { question: 'Do you install carriage-style garage doors in Darien?', answer: "Yes. Carriage-style and custom doors are among our most common installs in Darien. We work with premium brands that complement New England architecture." },
      { question: 'What does spring replacement cost in Darien?', answer: "Spring replacement runs $175–$350. Exact quote before we start." },
      { question: 'What brands do you service in Darien?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands." },
      { question: 'Do you offer emergency service in Darien?', answer: "Yes, 24/7. We'll give you an honest ETA when you call." },
    ],
  },
  {
    dir: 'westport-ct', city: 'Westport', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/westport-ct/', lat: '41.1415', lng: '-73.3579',
    neighborhoods: [
      { name: 'Saugatuck & Downtown', description: "Westport's vibrant center with beautiful homes along the Saugatuck River. We service the full range of garage systems here." },
      { name: 'Greens Farms & Southport', description: 'Coastal neighborhoods with premium homes and upscale garage doors. Custom installs are common in these areas.' },
      { name: 'Compo Beach & Sherwood Island area', description: 'Waterfront properties near the beach. Coastal exposure means we stock corrosion-resistant hardware for these homes.' },
      { name: 'Coleytown & Kings Highway', description: 'Northern Westport residential areas with large homes and quality garage systems.' },
      { name: 'Long Lots & Gorham Island', description: "Prestigious Westport communities. We're experienced with the premium door brands common here." },
      { name: 'Westport borders (Weston/Wilton)', description: 'We serve homes in the areas bordering Westport — same professional service, same response time.' },
    ],
    reviews: [
      { text: "Spring emergency in Greens Farms. Called on a Saturday, tech arrived 90 minutes later, fixed it on the spot. Clean work, fair price.", author: 'Stephanie C.', location: 'Greens Farms, Westport', initials: 'SC', color: 'bg-blue-600' },
      { text: "New Wayne Dalton door in Coleytown. They guided us through the selection process, and the installation was perfect.", author: 'Martin V.', location: 'Coleytown, Westport', initials: 'MV', color: 'bg-orange-500' },
      { text: "Opener died at Compo Beach house. They came same week, installed a new WiFi-enabled unit, and set everything up. Great service for coastal properties.", author: 'Diane K.', location: 'Compo, Westport', initials: 'DK', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Westport do you serve?', answer: "All of Westport — Saugatuck, downtown, Greens Farms, Southport, Compo Beach, Sherwood Island area, Coleytown, Kings Highway, Long Lots, and Gorham Island." },
      { question: 'How quickly can you reach Westport?', answer: "Westport is 75–90 minutes from our Suffern base. We aim to respond to emergencies as quickly as possible." },
      { question: 'Do you handle coastal garage door issues in Westport?', answer: "Yes. Salt air and humidity affect hardware differently — we use corrosion-resistant springs, cables, and hardware for coastal properties near Compo Beach." },
      { question: 'What does a new garage door installation cost in Westport?', answer: "Standard installations from $800. Premium and custom options run higher. We provide a full quote before starting." },
      { question: 'What brands do you service in Westport?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and custom brands." },
      { question: 'Do you offer emergency service in Westport?', answer: "Yes, 24/7. Call anytime — we'll give you an honest ETA." },
    ],
  },
  {
    dir: 'new-canaan-ct', city: 'New Canaan', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/new-canaan-ct/', lat: '41.1468', lng: '-73.4950',
    neighborhoods: [
      { name: 'New Canaan Center', description: "The charming village center with beautiful homes nearby. We service the full range of residential garage doors throughout the center area." },
      { name: 'Oenoke Ridge & Country Club Road', description: "New Canaan's most prestigious addresses. Custom garage doors are standard here — we install and service them all." },
      { name: 'Silver Hill & Ponus Ridge', description: 'Larger homes on private lots in northern New Canaan. Estate-style properties with premium door systems.' },
      { name: 'Weed Street & Pine Road area', description: 'Classic New Canaan neighborhood feel. Colonial homes with traditional garage door styles.' },
      { name: 'Stamford border areas', description: 'Southern New Canaan near the Stamford line. We cover these areas on our Fairfield County routes.' },
      { name: 'Wilton border area', description: "Northern New Canaan's quieter residential sections. We serve these homes on our regular Connecticut routes." },
    ],
    reviews: [
      { text: "New custom door in New Canaan. They matched the door perfectly to our colonial home. Installation was flawless. These are professionals who take pride in their work.", author: 'Catherine S.', location: 'New Canaan, CT', initials: 'CS', color: 'bg-blue-600' },
      { text: "Spring snapped in New Canaan Center. Called, they came the same afternoon, replaced both springs, and the price was very fair.", author: 'Andrew L.', location: 'New Canaan, CT', initials: 'AL', color: 'bg-orange-500' },
      { text: "Opener upgrade in Ponus Ridge. Switched to a WiFi-enabled LiftMaster — tech was thorough and the setup was seamless. Very satisfied.", author: 'Victoria H.', location: 'Ponus Ridge, New Canaan', initials: 'VH', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you install custom garage doors in New Canaan?', answer: "Yes. New Canaan homes often call for custom and premium carriage-style doors. We carry and install top brands that complement New Canaan's New England architecture." },
      { question: 'How fast can you reach New Canaan?', answer: "New Canaan is about 75–90 minutes from our Suffern base. Emergency calls are prioritized." },
      { question: 'What does garage door repair cost in New Canaan?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener repair $150–$350. Exact quote upfront." },
      { question: 'What brands do you install in New Canaan?', answer: "Clopay, Wayne Dalton, Amarr, and premium custom brands — plus LiftMaster and Chamberlain for smart opener systems." },
      { question: 'Do you offer emergency service in New Canaan?', answer: "Yes, 24/7. We'll get there as fast as we can and give you an honest ETA." },
      { question: 'Do you service all of New Canaan?', answer: "Yes — the center, Oenoke Ridge, Country Club Road, Silver Hill, Ponus Ridge, and all surrounding areas." },
    ],
  },
  {
    dir: 'newtown-ct', city: 'Newtown', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/newtown-ct/', lat: '41.4145', lng: '-73.3068',
    neighborhoods: [
      { name: 'Newtown Center & Main Street', description: 'The historic town center with charming older homes and traditional garage door styles. We service and install all types here.' },
      { name: 'Sandy Hook', description: 'Sandy Hook Village and surrounding residential areas. Single-family homes with standard garage door systems.' },
      { name: 'Hawleyville & Botsford', description: 'Western Newtown communities along Route 25. Mix of residential and light industrial properties.' },
      { name: 'Dodgingtown & Zoar', description: 'Rural-feeling eastern Newtown areas. Larger lots with private garages.' },
      { name: 'Taunton & Stepney', description: 'Southern Newtown residential areas bordering Monroe. We cover these on our northwest CT routes.' },
      { name: 'Berkshire & Currituck', description: "Northern Newtown's quieter, more rural areas. We schedule service efficiently for these locations." },
    ],
    reviews: [
      { text: "Spring repair in Sandy Hook. They drove from NY, arrived when they said they would, and fixed it perfectly. Fair price, professional service.", author: 'Thomas N.', location: 'Sandy Hook, Newtown', initials: 'TN', color: 'bg-blue-600' },
      { text: "New garage door in Newtown Center. Beautiful carriage-style door that fits the colonial home perfectly. Installation was quick and clean.", author: 'Patricia A.', location: 'Newtown Center, CT', initials: 'PA', color: 'bg-orange-500' },
      { text: "Emergency call when door wouldn't open in winter. They came same day, fixed a broken cable, and also lubricated everything. Great service.", author: 'Gerald S.', location: 'Newtown, CT', initials: 'GS', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you serve all of Newtown, CT?', answer: "Yes — Newtown Center, Sandy Hook, Hawleyville, Botsford, Dodgingtown, Zoar, Taunton, Stepney, Berkshire, and all of Newtown." },
      { question: 'How far do you travel to reach Newtown?', answer: "Newtown is about 90 minutes from our Suffern base. We schedule visits efficiently and always provide an honest ETA." },
      { question: 'What does garage door repair cost in Newtown?', answer: "Repairs start at $150–$300, spring replacement $175–$350. Upfront quotes before any work starts." },
      { question: 'Do you install carriage-style doors in Newtown?', answer: "Yes. Given Newtown's New England character, carriage-style and traditional wood-look doors are very popular. We carry a great selection." },
      { question: 'What brands do you service in Newtown?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands." },
      { question: 'Do you offer same-day service in Newtown?', answer: "We offer same-day service when availability allows. Given the distance, call early for best results." },
    ],
  },
  {
    dir: 'norwalk-ct', city: 'Norwalk', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/norwalk-ct/', lat: '41.1176', lng: '-73.4082',
    neighborhoods: [
      { name: 'South Norwalk (SoNo)', description: 'Trendy waterfront district with a mix of historic buildings and new construction. We service all garage types including commercial.' },
      { name: 'East Norwalk & Rowayton', description: 'Coastal neighborhoods in east Norwalk. Waterfront homes require corrosion-resistant hardware — we stock it.' },
      { name: 'West Norwalk', description: 'Upscale residential area in western Norwalk. Custom garage doors are popular in the larger homes here.' },
      { name: 'Cranbury & Silvermine', description: 'Historic neighborhoods in north Norwalk. Older architecture with interesting garage door challenges — we handle them.' },
      { name: 'Broad River & Wolfpit', description: 'Mid-city residential areas with dense neighborhoods. High volume of repair calls.' },
      { name: 'Calf Pasture Beach area', description: 'Waterfront recreational area and surrounding homes. Coastal hardware is important here.' },
    ],
    reviews: [
      { text: "Cable snapped in SoNo. Called, they came same afternoon, fixed it fast. Professional and efficient. Would use again without hesitation.", author: 'Nicole F.', location: 'South Norwalk, CT', initials: 'NF', color: 'bg-blue-600' },
      { text: "New garage door in West Norwalk. They walked us through the options, chose a beautiful Wayne Dalton carriage door, and installed it perfectly.", author: 'Raymond B.', location: 'West Norwalk, CT', initials: 'RB', color: 'bg-orange-500' },
      { text: "Spring emergency in East Norwalk. They were here in about 90 minutes, replaced both springs, and the door runs great.", author: 'Christine D.', location: 'East Norwalk, CT', initials: 'CD', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Norwalk do you serve?', answer: "All of Norwalk — South Norwalk, East Norwalk, Rowayton, West Norwalk, Cranbury, Silvermine, Broad River, Wolfpit, and surrounding areas." },
      { question: 'How fast can you reach Norwalk?', answer: "Norwalk is 75–90 minutes from our Suffern base. Emergency calls get prioritized." },
      { question: 'Do you handle coastal garage doors in Norwalk?', answer: "Yes. We use corrosion-resistant hardware for homes near Rowayton and the Norwalk waterfront, where salt air accelerates wear." },
      { question: 'What does spring replacement cost in Norwalk?', answer: "Spring replacement runs $175–$350. Exact quote before we start." },
      { question: 'What brands do you service in Norwalk?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands." },
      { question: 'Do you offer emergency service in Norwalk?', answer: "Yes, 24/7. We'll give you an honest ETA from our Suffern location." },
    ],
  },
  {
    dir: 'fairfield-ct', city: 'Fairfield', stateCode: 'CT', stateName: 'Connecticut',
    slug: '/fairfield-ct/', lat: '41.1418', lng: '-73.2637',
    neighborhoods: [
      { name: 'Fairfield Center & Post Road', description: 'The town center with a mix of residential and commercial properties. We service both throughout the corridor.' },
      { name: 'Southport Village', description: "One of Connecticut's most charming historic villages. Premium and custom garage doors are the standard here." },
      { name: 'Greenfield Hill', description: 'Upscale neighborhood in north Fairfield. Large homes with quality garage systems.' },
      { name: 'Jennings Beach area', description: 'Waterfront and coastal community in south Fairfield. Salt-resistant hardware is important for these properties.' },
      { name: 'Stratfield & Tunxis Hill', description: 'Dense residential areas in central Fairfield. High volume of repair calls from these neighborhoods.' },
      { name: 'Black Rock (Bridgeport border)', description: 'Western Fairfield/Bridgeport area. We cover this on our Fairfield County routes.' },
    ],
    reviews: [
      { text: "Spring replacement in Southport. Came out same day, replaced both springs, did it cleanly and quickly. Exactly what you want. Great service.", author: 'Howard C.', location: 'Southport, Fairfield', initials: 'HC', color: 'bg-blue-600' },
      { text: "New door in Greenfield Hill. Helped me choose the right style for our colonial. Beautiful installation. I get compliments on it from the neighbors.", author: 'Judith L.', location: 'Greenfield Hill, Fairfield', initials: 'JL', color: 'bg-orange-500' },
      { text: "Emergency in Fairfield Center when my door got stuck closed. They came within 90 minutes and had it open. Very professional team.", author: 'Kenneth M.', location: 'Fairfield, CT', initials: 'KM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Fairfield do you serve?', answer: "All of Fairfield — Fairfield Center, Southport Village, Greenfield Hill, Jennings Beach area, Stratfield, Tunxis Hill, and surrounding areas." },
      { question: 'How fast can you reach Fairfield from New York?', answer: "Fairfield is 75–90 minutes from our Suffern base. We always give an honest ETA when you call." },
      { question: 'Do you install carriage-style doors in Fairfield?', answer: "Yes. Fairfield's historic neighborhoods — especially Southport — call for traditional carriage-style and wood-look doors. We have a great selection." },
      { question: 'What does garage door repair cost in Fairfield?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront quotes always." },
      { question: 'What brands do you service in Fairfield?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more." },
      { question: 'Do you offer emergency service in Fairfield?', answer: "Yes, 24/7. Call anytime." },
    ],
  },
  {
    dir: 'bergen-county-nj', city: 'Bergen County', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/bergen-county-nj/', lat: '40.9587', lng: '-74.0741',
    neighborhoods: [
      { name: 'Paramus & Hackensack', description: "Bergen's commercial and population centers. We run regular routes and offer fast response in both municipalities." },
      { name: 'Teaneck & Englewood', description: 'Dense residential communities in eastern Bergen. We have a strong customer base throughout both towns.' },
      { name: 'Ridgewood & Glen Rock', description: 'Upscale residential communities in mid-Bergen. Custom and carriage-style doors are popular in these well-preserved neighborhoods.' },
      { name: 'Fort Lee & Edgewater', description: 'Hudson River communities with luxury high-rises and single-family homes. We handle both types.' },
      { name: 'Ramsey & Mahwah', description: 'Northern Bergen communities near our Suffern base. Fastest response in the county from our NY location.' },
      { name: 'River Edge & Oradell', description: 'Quiet residential areas in central Bergen. Well-maintained homes with quality garage systems.' },
    ],
    reviews: [
      { text: "Spring snapped in Paramus. They came from NY, arrived in about an hour, fixed it perfectly. Fair price and very professional.", author: 'Anthony G.', location: 'Paramus, Bergen County', initials: 'AG', color: 'bg-blue-600' },
      { text: "New carriage door in Ridgewood. Beautiful job — the tech helped me pick the right style for our Tudor home. Neighbors keep asking who did the work.", author: 'Donna C.', location: 'Ridgewood, Bergen County', initials: 'DC', color: 'bg-orange-500' },
      { text: "Emergency in Teaneck on a Sunday night. Opener completely dead. They came Monday morning first thing and installed a new one.", author: 'Samuel L.', location: 'Teaneck, Bergen County', initials: 'SL', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Bergen County do you serve?', answer: "All of Bergen County — Paramus, Hackensack, Teaneck, Englewood, Ridgewood, Glen Rock, Fort Lee, Edgewater, Ramsey, Mahwah, River Edge, Oradell, Westwood, Wyckoff, and more." },
      { question: 'How fast can you reach Bergen County from New York?', answer: "Our Suffern-based technician is closest to northern Bergen County (Ramsey, Mahwah) — about 20–30 minutes. Southern Bergen is 45–75 minutes." },
      { question: 'What does garage door repair cost in Bergen County?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always." },
      { question: 'Do you install premium doors in Bergen County?', answer: "Yes. Bergen County's upscale communities — Ridgewood, Glen Rock, Wyckoff, Ho-Ho-Kus — are a strong market for us. We carry premium brands." },
      { question: 'What brands do you service in Bergen County?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands." },
      { question: 'Do you offer emergency service in Bergen County?', answer: "Yes, 24/7. Call anytime." },
    ],
  },
  {
    dir: 'elizabeth-nj', city: 'Elizabeth', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/elizabeth-nj/', lat: '40.6640', lng: '-74.2107',
    neighborhoods: [
      { name: 'Downtown & Port Area', description: 'Dense urban core and industrial waterfront. We service commercial roll-up doors and residential garages throughout.' },
      { name: 'Elmora & Weehawken Hill', description: 'Residential areas in western Elizabeth. Single-family homes with attached and detached garages.' },
      { name: 'Peterstown & Kesbrough', description: 'Historic neighborhoods in northeast Elizabeth with a mix of housing types.' },
      { name: 'Bayway & Elizabethport', description: 'Industrial and residential mix near the waterfront. Commercial and residential garage door service.' },
      { name: 'North Elizabeth', description: 'Residential neighborhoods adjacent to Hillside. We cover these on our Union County routes.' },
      { name: 'Elizabeth border areas', description: 'Communities bordering Linden, Hillside, and Union — we serve all of them.' },
    ],
    reviews: [
      { text: "Commercial roll-up door at our Elizabeth warehouse. They came next day, assessed it, and had it working within a few hours. Minimal business disruption.", author: 'Victor R.', location: 'Elizabeth, NJ', initials: 'VR', color: 'bg-blue-600' },
      { text: "Spring replacement in Elmora. Called in the morning, they came same afternoon. Fast, professional, fair price.", author: 'Maria S.', location: 'Elmora, Elizabeth', initials: 'MS', color: 'bg-orange-500' },
      { text: "New opener in my Elizabeth home. Tech was efficient and showed me how to set it up. Works great. Good service at a fair price.", author: 'Carlos M.', location: 'Elizabeth, NJ', initials: 'CM', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Do you serve all of Elizabeth, NJ?', answer: "Yes — downtown, Elmora, Weehawken Hill, Peterstown, Kesbrough, Bayway, Elizabethport, and all surrounding areas." },
      { question: 'How fast can you reach Elizabeth?', answer: "Elizabeth is about 60–75 minutes from our Suffern base and 45–60 minutes from our Brooklyn location. We'll give you an honest ETA." },
      { question: 'Do you handle commercial garage doors in Elizabeth?', answer: "Yes. We service commercial roll-up doors and industrial garage systems throughout Elizabeth, including the port area." },
      { question: 'What does spring replacement cost in Elizabeth?', answer: "Spring replacement runs $175–$350. Upfront pricing before we start." },
      { question: 'What brands do you service in Elizabeth?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and all major brands." },
      { question: 'Do you offer emergency service in Elizabeth?', answer: "Yes, 24/7. For both residential and commercial emergency calls." },
    ],
  },
  {
    dir: 'teaneck-nj', city: 'Teaneck', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/teaneck-nj/', lat: '40.8945', lng: '-74.0152',
    neighborhoods: [
      { name: 'Teaneck Center & Queen Anne Road', description: 'The heart of Teaneck with dense residential neighborhoods. We run regular routes here and have many repeat customers.' },
      { name: 'Glenpointe & Cedar Lane', description: 'Commercial and mixed-use corridor plus surrounding residential areas. We handle both.' },
      { name: 'Englewood Cliffs border', description: 'Northern Teaneck bordering Englewood Cliffs. Upscale single-family homes with quality garage systems.' },
      { name: 'Bogota & River Edge border', description: "Western Teaneck areas bordering neighboring towns. We cover these smoothly on our Bergen County routes." },
      { name: 'Fort Lee border', description: 'Southeastern Teaneck near Fort Lee. Convenient for our Hudson River corridor routes.' },
      { name: 'Bergenfield border', description: 'Eastern Teaneck areas. Dense residential with high service demand.' },
    ],
    reviews: [
      { text: "Spring broke in Teaneck on a cold Monday. They had someone here by noon, fixed it cleanly, and the price was exactly as quoted.", author: 'Hannah K.', location: 'Teaneck, NJ', initials: 'HK', color: 'bg-blue-600' },
      { text: "New opener installed in our Teaneck home. Works great with the app. Tech was friendly and efficient. Would definitely recommend.", author: 'David R.', location: 'Teaneck, NJ', initials: 'DR', color: 'bg-orange-500' },
      { text: "Door off track in Teaneck. Called and they came same day, got it back on properly, and adjusted everything. Solid work at a fair price.", author: 'Leah B.', location: 'Teaneck, NJ', initials: 'LB', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What parts of Teaneck do you serve?', answer: "All of Teaneck — the center, Queen Anne Road corridor, Glenpointe area, and all residential neighborhoods throughout the township." },
      { question: 'How fast can you reach Teaneck?', answer: "Teaneck is about 45–60 minutes from our Suffern base. Our Bergen County routes include regular stops in Teaneck." },
      { question: 'What does garage door repair cost in Teaneck?', answer: "Repairs start at $150–$300, spring replacement $175–$350. Upfront quotes always." },
      { question: 'Do you service garage doors in Teaneck apartment complexes?', answer: "Yes. We work with property managers and building management for multi-family properties in Teaneck." },
      { question: 'What brands do you service in Teaneck?', answer: "All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr." },
      { question: 'Do you offer same-day service in Teaneck?', answer: "Yes. Bergen County is well within our regular service area — same-day slots are usually available." },
    ],
  },
  {
    dir: 'edison-nj', city: 'Edison', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/edison-nj/', lat: '40.5187', lng: '-74.4121',
    neighborhoods: [
      { name: 'Edison Town Center & Oak Tree Road', description: 'The commercial heart of Edison with surrounding dense residential neighborhoods. We service both residential and commercial properties.' },
      { name: 'Metuchen border & Menlo Park Terrace', description: 'Established communities in northern Edison. Strong repeat customer base in these neighborhoods.' },
      { name: 'Piscataway border & South Edison', description: 'Southern Edison communities near Piscataway. Single-family homes and townhouse developments.' },
      { name: 'Woodbridge border & Sewaren area', description: 'Eastern Edison near the Raritan Bay. We cover this area on our central NJ routes.' },
      { name: 'North Brunswick border', description: 'Northern Edison bordering North Brunswick. Suburban developments with modern garage systems.' },
      { name: 'Rahway & Clark border', description: 'Western Edison areas. We service these neighborhoods as part of our Union/Middlesex County coverage.' },
    ],
    reviews: [
      { text: "Spring replacement in Edison. Our Jackson-based tech came same day, replaced both springs, and everything works great. Fair price, professional service.", author: 'Raj P.', location: 'Edison, NJ', initials: 'RP', color: 'bg-blue-600' },
      { text: "New LiftMaster opener in our Edison home. Installed fast, WiFi works great, and the tech was very knowledgeable. Highly recommend.", author: 'Priya K.', location: 'Edison, NJ', initials: 'PK', color: 'bg-orange-500' },
      { text: "Emergency call in Edison when my cable snapped. Tech came same day and had it fixed in under an hour. Very grateful for the quick response.", author: 'Michael T.', location: 'Edison, NJ', initials: 'MT', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Edison do you cover?', answer: "All of Edison — Oak Tree Road corridor, Metuchen border area, Menlo Park Terrace, South Edison, North Brunswick border, and all surrounding neighborhoods." },
      { question: 'How fast can you reach Edison?', answer: "Our Jackson-based technician covers Edison in about 30–45 minutes. Fast response for central NJ." },
      { question: 'What does spring replacement cost in Edison?', answer: "Spring replacement runs $175–$350. Upfront pricing — no surprises." },
      { question: 'What brands do you service in Edison?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands." },
      { question: 'Do you offer same-day service in Edison?', answer: "Yes. With our Jackson-based technician, same-day service is usually available in Edison." },
      { question: 'Do you service commercial garage doors in Edison?', answer: "Yes. We service commercial roll-up doors and commercial opener systems for Edison businesses." },
    ],
  },
  {
    dir: 'jackson-nj', city: 'Jackson', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/jackson-nj/', lat: '40.0971', lng: '-74.3568',
    neighborhoods: [
      { name: 'Jackson Center & Cooks Bridge', description: "The heart of Jackson with suburban residential neighborhoods. Our home base tech is based in Jackson." },
      { name: 'Cassville & Prospertown', description: 'Rural and semi-rural Jackson communities. We know these back roads well.' },
      { name: 'Legler & Whitesville', description: 'Western Jackson areas with a mix of older homes and newer developments.' },
      { name: 'Six Flags area & Hyson Road', description: 'Entertainment district and surrounding residential developments. We service all types here.' },
      { name: 'Toms River border', description: 'Southern Jackson bordering Toms River. We cover this corridor efficiently from our base.' },
      { name: 'Howell border area', description: 'Northwestern Jackson near Howell township. We service both Jackson and Howell.' },
    ],
    reviews: [
      { text: "This is the team's home territory. Spring broke, they were here in 30 minutes. Fixed it fast, very fair price. Best garage door service in Ocean County.", author: 'Joseph M.', location: 'Jackson, NJ', initials: 'JM', color: 'bg-blue-600' },
      { text: "New door installed in Cassville. Great choice of styles, excellent installation. Our house looks so much better. These guys know their stuff.", author: 'Beverly W.', location: 'Cassville, Jackson', initials: 'BW', color: 'bg-orange-500' },
      { text: "Emergency call at 8pm. Door wouldn't close and I had to leave early next morning. They came within an hour and fixed the issue. Outstanding.", author: 'Tom K.', location: 'Jackson, NJ', initials: 'TK', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'Is Jackson really your home base?', answer: "Yes! Our technician Yitzi is based in Jackson. This means we have the fastest response times in Ocean County — typically 20–45 minutes for most of Jackson." },
      { question: 'What parts of Jackson do you cover?', answer: "All of Jackson — the center, Cassville, Prospertown, Legler, Whitesville, the Six Flags area, and all surrounding communities." },
      { question: 'What does garage door repair cost in Jackson?', answer: "Repairs start at $150–$300, spring replacement $175–$350, opener $150–$350. Upfront pricing always." },
      { question: 'Do you also serve towns near Jackson?', answer: "Yes — Toms River, Howell, Manchester, Lakewood, Brick, and surrounding Ocean/Monmouth County towns are all within our service range." },
      { question: 'What brands do you service in Jackson?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and all major brands." },
      { question: 'Do you offer same-day service in Jackson?', answer: "Almost always — this is our home base. Same-day service is our standard in Jackson." },
    ],
  },
  {
    dir: 'paramus-nj', city: 'Paramus', stateCode: 'NJ', stateName: 'New Jersey',
    slug: '/paramus-nj/', lat: '40.9454', lng: '-74.0710',
    neighborhoods: [
      { name: 'Route 4 & Route 17 Corridor', description: "Paramus's retail hubs and surrounding commercial properties. We service commercial roll-up doors and warehouses throughout both corridors." },
      { name: 'East Paramus', description: 'Residential eastern section with single-family homes. Our most common residential call area in Paramus.' },
      { name: 'West Paramus & Century Road', description: 'Mixed residential and commercial in western Paramus. We cover both types efficiently.' },
      { name: 'Ridgewood border area', description: 'Northern Paramus near Ridgewood. Upscale homes transitioning from commercial Paramus to suburban Ridgewood.' },
      { name: 'Maywood & Fair Lawn border', description: 'Eastern Paramus borders. We cover these as part of our Bergen County routes.' },
      { name: 'Rochelle Park border', description: 'Southern Paramus. Convenient access from our regular Bergen County circuit.' },
    ],
    reviews: [
      { text: "Commercial door at our Paramus location. Called, they came fast, assessed the issue and fixed it same day. No downtime for the business.", author: 'Stephen C.', location: 'Paramus, NJ', initials: 'SC', color: 'bg-blue-600' },
      { text: "Spring replacement at my house in east Paramus. Tech was professional, on time, and the price was fair. Would definitely call again.", author: 'Lisa R.', location: 'East Paramus, NJ', initials: 'LR', color: 'bg-orange-500' },
      { text: "New opener installed in Paramus. Works perfectly with the app. Quick job, clean installation. Very happy with the service.", author: 'Adam H.', location: 'Paramus, NJ', initials: 'AH', color: 'bg-green-600' },
    ],
    faqs: [
      { question: 'What areas of Paramus do you serve?', answer: "All of Paramus — Route 4 and Route 17 corridors, east and west residential sections, and bordering areas near Ridgewood, Fair Lawn, Maywood, and Rochelle Park." },
      { question: 'How fast can you reach Paramus?', answer: "Paramus is 45–60 minutes from our Suffern base. We know the Routes 4 and 17 corridors well and navigate them efficiently." },
      { question: 'Do you service commercial properties in Paramus?', answer: "Yes. Commercial roll-up doors, loading dock systems, and commercial openers are a significant part of our Paramus business." },
      { question: 'What does garage door repair cost in Paramus?', answer: "Residential repairs start at $150–$300, spring replacement $175–$350. Commercial quotes are based on scope. Upfront pricing always." },
      { question: 'What brands do you service in Paramus?', answer: "LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr — all major brands." },
      { question: 'Do you offer same-day service in Paramus?', answer: "Yes. Bergen County is well within our regular routes — same-day slots are usually available." },
    ],
  },
];

let written = 0;
for (const p of pages) {
  const content = makePage(p);
  const filePath = path.join(base, p.dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  written++;
  console.log('Wrote: ' + p.dir);
}
console.log('\nDone. Wrote ' + written + ' files.');
