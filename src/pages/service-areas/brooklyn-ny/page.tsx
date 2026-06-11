import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function BrooklynNY() {

  return (
    <LocationPageTemplate
      metaTitle="Brooklyn NY Garage Door Repair | Same-Day Service | Smartest Garage Doors"
      metaDescription="Garage door repair in Brooklyn, NY — same-day service, 5.0★ 479 reviews. Spring replacement, opener repair, emergency service. Brownstone specialists. Call (914) 557-6816."
      keywords="Brooklyn NY garage door repair, garage door installation Brooklyn, emergency garage door Brooklyn, brownstone garage door"
      slug="/brooklyn-ny/"
      cityName="Brooklyn"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.6782', longitude: '-73.9442' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/98b4a7fc-77e3-433e-65c9-c5c7be8bc000/hero"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10733629354!2d-74.03927096718748!3d40.67818494999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus"
      neighborhoods={[
        { name: 'Park Slope & Prospect Heights', description: 'Historic brownstones with narrow garages — we know them well. Our Dyker Heights-based technician covers Park Slope fast.' },
        { name: 'Williamsburg & Greenpoint', description: 'Industrial lofts, new construction, converted warehouses — we handle all garage types in North Brooklyn.' },
        { name: 'Bay Ridge & Dyker Heights', description: 'This is our home base. We serve Bay Ridge and Dyker Heights faster than anywhere else in Brooklyn.' },
        { name: 'Bensonhurst & Gravesend', description: 'Dense residential streets with attached garages. We stock the parts most commonly needed in these neighborhoods.' },
        { name: 'Carroll Gardens & Cobble Hill', description: 'Landmark brownstones with unique hardware requirements. We work carefully to preserve the character of older buildings.' },
        { name: 'Sheepshead Bay & Marine Park', description: 'Suburban-style homes in South Brooklyn. Easy access and quick arrivals from our Bay Ridge location.' },
      ]}
      reviews={[
        { text: 'Spring snapped in Park Slope on a Saturday. Called, got a real person, tech arrived in 90 minutes. Clean work, fair price. Exactly what you want in an emergency.', author: 'James M.', location: 'Park Slope, Brooklyn', initials: 'JM', color: 'bg-blue-600' },
        { text: 'Couldn\'t close my garage door in Williamsburg on a Sunday afternoon. They were here in under 2 hours and fixed it quickly. Professional and reasonably priced.', author: 'Amanda R.', location: 'Williamsburg, Brooklyn', initials: 'AR', color: 'bg-orange-500' },
        { text: 'New smart opener install in Dyker Heights. Tech was thorough, showed me everything, and the app setup was painless. Best contractor experience I\'ve had in Brooklyn.', author: 'Robert T.', location: 'Dyker Heights, Brooklyn', initials: 'RT', color: 'bg-green-600' },
      ]}
      faqs={[
        { question: 'Do you service all Brooklyn neighborhoods?', answer: 'Yes — Park Slope, Williamsburg, Dyker Heights, Bay Ridge, Sheepshead Bay, Brooklyn Heights, Carroll Gardens, Greenpoint, Crown Heights, Bed-Stuy, Sunset Park, Bensonhurst, Coney Island, Brighton Beach, and everywhere else in Brooklyn.' },
        { question: 'How do you handle parking and access in Brooklyn?', answer: 'Our Brooklyn technicians know alternate-side schedules, double-parking norms, and building access requirements. We coordinate with building management when needed and work efficiently in tight spaces.' },
        { question: 'Can you work on brownstone garage doors?', answer: 'Absolutely — it\'s one of our specialties. We understand older building structures, narrow access, and historic preservation considerations. We\'ve worked on hundreds of Brooklyn brownstones.' },
        { question: 'What does garage door repair cost in Brooklyn?', answer: 'Basic repairs start at $150–$300, spring replacement runs $175–$350, opener repair $150–$350. We quote the exact price upfront — no surprises.' },
        { question: 'Do you service garage doors in Brooklyn apartment buildings?', answer: 'Yes. We work with property managers and supers regularly. We handle access coordination and work without disrupting other residents.' },
        { question: 'What brands do you service in Brooklyn?', answer: 'All major brands: LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, CHI, and more.' },
      ]}
      comparisonRows={[
        { feature: 'Response Time',       ours: 'Fast dispatch — honest ETA when you call' },
        { feature: 'Same-Day Service',    ours: 'Available' },
        { feature: 'Brownstone Experience', ours: 'Specialized' },
        { feature: 'Parking Expertise',   ours: 'Urban Experts' },
        { feature: '1-Year Warranty',     ours: 'Included' },
      ]}
    />
  );
}
