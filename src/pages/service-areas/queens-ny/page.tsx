import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';

export default function QueensNY() {

  return (
    <LocationPageTemplate
      metaTitle="Queens NY Garage Door Repair | Same-Day Service | Smart Garage Doors"
      metaDescription={`Garage door repair in Queens, NY — same-day service, ${BUSINESS_INFO.aggregateRating.ratingValue}★ ${BUSINESS_INFO.aggregateRating.reviewCount} reviews. Spring, opener & emergency repair. Licensed & insured.`}
      keywords="Queens NY garage door repair, garage door installation Queens, emergency garage door Queens, spring replacement Queens"
      slug="/queens-ny/"
      cityName="Queens"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7282', longitude: '-73.7949' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34!2d-73.9442!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b00bd15f%3A0x860f6a4080430fde!2sQueens%2C%20NY!5e0!3m2!1sen!2sus"
      neighborhoods={[
        { name: 'Astoria & Long Island City', description: 'Fast service for Astoria\'s dense residential blocks and LIC\'s converted lofts. We know the parking situation — our guys get in and out without drama.' },
        { name: 'Flushing & Whitestone', description: 'Deep coverage in Flushing and Whitestone. Lots of attached garages here — we\'ve fixed hundreds in these neighborhoods.' },
        { name: 'Forest Hills & Kew Gardens', description: 'The tudor-style homes in Forest Hills have older hardware. We stock parts for legacy systems and can usually fix same day.' },
        { name: 'Jamaica & St. Albans', description: 'Reliable, fairly priced service for Jamaica and St. Albans. No upselling, no surprises — just the work that needs doing.' },
        { name: 'Bayside & Little Neck', description: 'These suburban-style streets are easy for us to reach quickly. Spring replacements and opener installs are our most common calls here.' },
        { name: 'Elmhurst & Jackson Heights', description: 'Dense housing, narrow driveways — we handle it. Our techs are experienced with the tight-access garages common in these neighborhoods.' },
      ]}
      reviews={[
        { text: 'Spring broke Sunday morning in Forest Hills. They were here in under 2 hours, fixed it, cleaned up, and the price was exactly what they quoted. Will 100% call again.', author: 'Maria K.', location: 'Forest Hills, Queens', initials: 'MK', color: 'bg-blue-600' },
        { text: 'Got a new LiftMaster installed in my Flushing garage. Tech was patient, showed me how to set it up with my phone, and didn\'t try to sell me stuff I didn\'t need. Great experience.', author: 'James C.', location: 'Flushing, Queens', initials: 'JC', color: 'bg-orange-500' },
        { text: 'Track came off at midnight in Astoria. Called, they picked up, had someone here by 1am. Fixed in 45 minutes. Honestly couldn\'t believe it. Highly recommend.', author: 'Sarah L.', location: 'Astoria, Queens', initials: 'SL', color: 'bg-green-600' },
      ]}
      faqs={[
        { question: 'Which Queens neighborhoods do you serve?', answer: 'All of them — Astoria, Flushing, Forest Hills, Jamaica, Bayside, Elmhurst, Corona, Long Island City, Whitestone, Kew Gardens, Little Neck, St. Albans, Rego Park, Woodside, Sunnyside, Jackson Heights, Fresh Meadows, and everywhere in between.' },
        { question: 'How fast can you get to Queens for an emergency?', answer: 'We have technicians based in Queens and the surrounding area. Emergency calls are prioritized, and we\'ll always give you an honest ETA when you call.' },
        { question: 'Do you work on garage doors in Queens apartment buildings?', answer: 'Yes. We work with property managers and building supers regularly. We handle access coordination, understand building requirements, and work without disrupting other residents.' },
        { question: 'What does a spring replacement cost in Queens?', answer: 'Spring replacement in Queens typically runs $175–$350 for one spring, depending on the spring type and size. We quote the exact price before starting — no surprises.' },
        { question: 'What garage door brands do you service in Queens?', answer: 'All major brands: LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, CHI, and more. If it\'s a garage door, we can fix it.' },
        { question: 'Do you offer financing for new garage door installation in Queens?', answer: 'Yes. We offer flexible payment options for garage door installations. Call us to discuss what works for your budget.' },
        { question: 'Is Smart Garage Doors a good choice for garage door repair in Queens?', answer: `Yes — we're rated ${BUSINESS_INFO.aggregateRating.ratingValue}★ across ${BUSINESS_INFO.aggregateRating.reviewCount} Google reviews, hold NYC DCWP License #2130164-DCWP, and give upfront pricing before any work starts, with no hidden fees. For a full side-by-side comparison against other Queens garage door companies, see our full comparison guide at /best-garage-door-company-queens/.` },
      ]}
    />
  );
}
