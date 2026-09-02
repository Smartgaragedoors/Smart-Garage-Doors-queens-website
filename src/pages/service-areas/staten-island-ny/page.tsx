import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Staten Island, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Staten Island, NY — 5.0★ reviews, total-price quotes. Spring replacement, opener repair, emergency line. Licensed & insured. Call (914) 557-6816."
      keywords="Staten Island garage door repair, garage door installation Staten Island, emergency garage door Staten Island, spring replacement Staten Island"
      slug="/staten-island-ny/"
      cityName="Staten Island"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '40.5795', longitude: '-74.1502' }}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"St. George & Stapleton","description":"North Shore neighborhoods with older homes and attached garages. We service this part of the island regularly."},{"name":"New Dorp & Great Kills","description":"Mid-Island residential areas where single-family homes with private garages are very common."},{"name":"Tottenville & Richmond Valley","description":"South Shore's suburban neighborhoods — wide streets, easy access, and plenty of garage door work."},{"name":"Bay Terrace & Westerleigh","description":"Quiet residential blocks with well-maintained homes. We service many repeat customers here."},{"name":"Mariners Harbor & Port Richmond","description":"West Shore neighborhoods on our regular service routes."},{"name":"Grasmere & Dongan Hills","description":"East Shore communities with a mix of older and newer construction — we handle both."}]}
      recentJobs={[
        {
          service: 'Insulated door replacement, full system',
          area: 'Willowbrook / Bulls Head',
          detail: 'Supplied and installed an insulated brown door with a complete new system — springs, tracks and hardware — rather than hanging a new door on tired parts.',
          outcome: 'Flat $1,900 installed, with no fees added on afterwards.',
        },
        {
          service: 'Door opening on its own',
          area: 'Saint Andrews Road, Richmondtown',
          detail: 'Door was opening at random — usually a control, wiring or remote-interference fault rather than anything mechanical. Diagnosed on-site and corrected.',
          outcome: 'Sorted on the visit and closed out in our job log.',
        },
      ]}
      reviews={[]}
      faqs={[{"question":"What parts of Staten Island do you serve?","answer":"All of Staten Island — St. George, Stapleton, New Dorp, Great Kills, Tottenville, Richmond Valley, Bay Terrace, Westerleigh, Mariners Harbor, Port Richmond, Grasmere, Dongan Hills, and everywhere else."},{"question":"How does scheduling work on Staten Island?","answer":"Our technicians cover Staten Island every week and know the island's roads well. Call and a dispatcher checks current technician availability — actual arrival depends on the technician's current job, traffic, and your distance from our nearest crew, and we confirm an honest window on the call."},{"question":"What does a spring replacement cost on Staten Island?","answer":"Spring replacement runs $175–$350 depending on the spring type — the total price inclusive of any fees, surcharges, and applicable taxes. We quote the exact price before starting — no surprise fees."},{"question":"Do you service garage doors in Staten Island townhomes?","answer":"Yes. Townhomes, attached garages, detached garages — we handle them all."},{"question":"What brands do you service on Staten Island?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more."},{"question":"Do you handle urgent garage door problems on Staten Island?","answer":"Yes — call our emergency line and a dispatcher will check current technician availability and confirm an honest arrival window for your part of the island."}]}
      
    />
  );
}
