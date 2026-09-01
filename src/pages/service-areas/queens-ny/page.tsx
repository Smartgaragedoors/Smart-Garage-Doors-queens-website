import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';
import { BUSINESS_INFO } from '../../../config/business-info';

// Queens — the home borough (the shop is on 70th Ave in Flushing).
// recentJobs are real completed jobs from the Drive jobs export
// (smart-garage-doors-jobs-export, Jun–Jul 2025), neighborhood-level only:
// no house numbers, no customer names. Never add an entry that isn't in
// the job log. Reviews are intentionally empty until real Queens-tagged
// review quotes exist (standing rule: no fabricated testimonials).
export default function QueensNY() {

  return (
    <LocationPageTemplate
      metaTitle="Queens NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription={`Garage door repair in Queens, NY — total-price quotes, ${BUSINESS_INFO.aggregateRating.ratingValue}★ ${BUSINESS_INFO.aggregateRating.reviewCount} reviews. Spring, opener & emergency repair. Licensed & insured.`}
      keywords="Queens NY garage door repair, garage door installation Queens, emergency garage door Queens, spring replacement Queens"
      slug="/queens-ny/"
      cityName="Queens"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.7282', longitude: '-73.7949' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34!2d-73.9442!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b00bd15f%3A0x860f6a4080430fde!2sQueens%2C%20NY!5e0!3m2!1sen!2sus"
      localJobPhotos={[
        {
          image: '/images/jobs/wood-grain-raised-panel-garage-door-install.webp',
          alt: 'Newly installed wood-grain steel raised-panel garage door with insulated windows on a Queens, NY home',
          title: 'New Install — Wood-Grain Steel',
          result: 'Raised panels + insulated window row',
        },
        {
          image: '/images/jobs/commercial-loading-dock-door-installation.webp',
          alt: 'White insulated commercial loading dock door installed at a Queens, NY warehouse',
          title: 'Commercial Dock Door — Queens',
          result: 'Insulated dock door back in service',
        },
      ]}
      recentJobs={[
        {
          service: 'Full door replacement with new opener',
          area: 'Elmhurst',
          detail: 'Old door past saving. Supplied and installed a new door with matching molding, cut to fit the existing opening, plus a new opener — one job, one crew.',
          outcome: 'Door, molding, opener and tax came to about $3,550 all-in, quoted before we started.',
        },
        {
          service: 'Camera-equipped smart opener install',
          area: 'Jackson Heights',
          detail: 'Homeowner wanted to see the garage from their phone. Installed a WiFi opener with a built-in camera and set the app up before we left.',
          outcome: 'About $1,000 installed. Attached-garage blocks like these are most of what we do here.',
        },
        {
          service: 'Opener work on a two-door garage',
          area: 'Woodhaven',
          detail: 'Two doors off the same driveway, one opener dead and one struggling. Repaired what was repairable instead of pushing two new units.',
          outcome: 'Both doors running for about $900 total.',
        },
        {
          service: 'Commercial spring pair for a managed building',
          area: 'Kew Gardens',
          detail: "Property management called after a cheap quick fix on a bent top panel failed. Replaced the commercial spring pair and added a heavy-duty reinforcement bracket so it doesn't happen again.",
          outcome: 'About $1,460 for the pair plus reinforcement — coordinated timing with the super.',
        },
        {
          service: 'Service call — honest no-repair visit',
          area: 'Queens Village',
          detail: "Door reportedly wouldn't close. It worked fine when our tech arrived and tested it, so he said exactly that instead of inventing a repair.",
          outcome: 'Charged the $115 service visit and nothing else. That is the whole story.',
        },
        {
          service: 'Pulley replacement',
          area: 'Briarwood',
          detail: 'Worn pulleys were making the door grind and jerk on the way up. Replaced the set and rebalanced the door.',
          outcome: 'Running smooth again for about $540, done in one visit.',
        },
      ]}
      neighborhoods={[
        { name: 'Astoria & Long Island City', description: 'Reliable service for Astoria\'s dense residential blocks and LIC\'s converted lofts. We know the parking situation — our guys get in and out without drama.' },
        { name: 'Flushing & Whitestone', description: 'Our own shop is on 70th Ave in Flushing, so these blocks are home territory — attached garages, tight driveways, and all.' },
        { name: 'Forest Hills & Kew Gardens', description: 'The tudor-style homes in Forest Hills have older hardware, and Kew Gardens has managed buildings running commercial doors. We stock parts for both.' },
        { name: 'Jamaica & St. Albans', description: 'Reliable, fairly priced service for Jamaica, Briarwood and St. Albans. No upselling, no surprises — just the work that needs doing.' },
        { name: 'Bayside & Little Neck', description: 'These suburban-style streets are easy for us to reach quickly. Spring replacements and opener installs are our most common calls here.' },
        { name: 'Elmhurst & Jackson Heights', description: 'Dense housing, narrow driveways — we handle it. Our techs are experienced with the tight-access garages common in these neighborhoods.' },
      ]}
      reviews={[]}
      faqs={[
        { question: 'Which Queens neighborhoods do you serve?', answer: 'All of them — Astoria, Flushing, Forest Hills, Jamaica, Bayside, Elmhurst, Corona, Long Island City, Whitestone, Kew Gardens, Little Neck, St. Albans, Rego Park, Woodside, Sunnyside, Jackson Heights, Fresh Meadows, and everywhere in between.' },
        { question: 'How does scheduling work in Queens for an emergency?', answer: 'Our shop is in Flushing, so Queens is our home borough. Emergency calls are prioritized, and we\'ll always give you an honest ETA when you call.' },
        { question: 'Do you work on garage doors in Queens apartment buildings?', answer: 'Yes. We work with property managers and building supers regularly — including commercial spring and panel work on managed buildings in Kew Gardens and Forest Hills. We handle access coordination and work without disrupting other residents.' },
        { question: 'What does a spring replacement cost in Queens?', answer: 'Spring replacement in Queens typically runs $175–$350 for one spring, depending on the spring type and size. We quote the exact price before starting — no surprises.' },
        { question: 'What if the door turns out to be fine when you arrive?', answer: 'Then we tell you it\'s fine. We\'ve closed out Queens service calls charging only the $115 visit fee because nothing needed replacing — we\'d rather keep you as a customer than invent a repair.' },
        { question: 'What garage door brands do you service in Queens?', answer: 'All major brands: LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, Raynor, CHI, and more. If it\'s a garage door, we can fix it.' },
        { question: 'Do you offer financing for new garage door installation in Queens?', answer: 'Yes. We offer flexible payment options for garage door installations. Call us to discuss what works for your budget.' },
        { question: 'Is Smart Garage Doors a good choice for garage door repair in Queens?', answer: `Yes — we're rated ${BUSINESS_INFO.aggregateRating.ratingValue}★ across ${BUSINESS_INFO.aggregateRating.reviewCount} Google reviews, hold NYC DCWP License #2130164-DCWP, and give upfront pricing before any work starts, with no hidden fees. For a full side-by-side comparison against other Queens garage door companies, see our full comparison guide at /best-garage-door-company-queens/.` },
      ]}
    />
  );
}
