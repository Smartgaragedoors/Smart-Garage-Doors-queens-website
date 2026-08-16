import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function BronxNY() {

  return (
    <LocationPageTemplate
      metaTitle="Bronx NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in the Bronx, NY — upfront total-price quotes, 5.0★ reviews. Spring replacement, opener repair, emergency line. Licensed & insured. Call (914) 557-6816."
      keywords="Bronx NY garage door repair, garage door installation Bronx, emergency garage door Bronx, spring replacement Bronx"
      slug="/bronx-ny/"
      cityName="the Bronx"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.8448', longitude: '-73.8648' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[
        { name: 'Riverdale & Fieldston', description: 'Upscale homes with private garages — we handle premium installs and repairs in these hillside neighborhoods.' },
        { name: 'Pelham Bay & Throgs Neck', description: 'East Bronx residential areas with lots of single-family homes and attached garages. Regular coverage from our nearby techs.' },
        { name: 'Fordham & University Heights', description: 'Dense urban neighborhoods where we handle apartment building garage systems and multi-unit properties.' },
        { name: 'Morris Park & Parkchester', description: 'Well-established residential communities. We\'re a familiar face here — repeat customers across both neighborhoods.' },
        { name: 'City Island & Schuylerville', description: 'Coastal and suburban-style blocks. Salt air is hard on hardware — we stock corrosion-resistant parts for these areas.' },
        { name: 'Mott Haven & Port Morris', description: 'South Bronx coverage including commercial garage doors and residential properties in developing neighborhoods.' },
      ]}
      reviews={[
        { text: 'Broken spring in Riverdale on a holiday. Fair price, no nonsense. Exactly what I needed.', author: 'David H.', location: 'Riverdale, Bronx', initials: 'DH', color: 'bg-blue-600' },
        { text: 'Opener died in Pelham Bay. Tech had the part on the truck, and got it working same visit. Great service.', author: 'Carmen R.', location: 'Pelham Bay, Bronx', initials: 'CR', color: 'bg-orange-500' },
        { text: 'Called for an emergency in Morris Park at 9pm. Fixed the cable, checked everything else, and the price was reasonable. Very impressed.', author: 'Tony B.', location: 'Morris Park, Bronx', initials: 'TB', color: 'bg-green-600' },
      ]}
      faqs={[
        { question: 'What areas of the Bronx do you cover?', answer: 'The entire Bronx — Riverdale, Fieldston, Pelham Bay, Throgs Neck, Fordham, Morris Park, Parkchester, City Island, Mott Haven, Co-op City, Kingsbridge, and everywhere in between.' },
        { question: 'How does scheduling work in the Bronx?', answer: 'Our technicians cover the Bronx every week. Call and a dispatcher checks current technician availability for your neighborhood — actual arrival time depends on the technician\'s current job, traffic, and your distance from our nearest crew, and we confirm an honest window on the call. Emergency calls are prioritized.' },
        { question: 'Do you work on commercial garage doors in the Bronx?', answer: 'Yes. We service both residential and commercial garage doors throughout the Bronx, including roll-up doors and multi-unit building systems.' },
        { question: 'What does spring replacement cost in the Bronx?', answer: 'Spring replacement runs $175–$350 depending on spring type and size — the range is the total price, inclusive of any fees, surcharges, and applicable taxes. We give you the exact price before starting — no surprise charges.' },
        { question: 'Do you work in Bronx apartment buildings?', answer: 'Yes. We coordinate with building management, work around residents, and handle all access requirements for apartment building garages.' },
        { question: 'What garage door brands do you service in the Bronx?', answer: 'All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more. We carry common parts on the truck.' },
      ]}
    />
  );
}
