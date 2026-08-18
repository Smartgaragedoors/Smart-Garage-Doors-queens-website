import LocationPageTemplate from '../../../components/feature/LocationPageTemplate';

export default function LocationPage() {

  return (
    <LocationPageTemplate
      metaTitle="Suffern, NY Garage Door Repair | Licensed & Insured | Smart Garage Doors"
      metaDescription="Garage door repair in Suffern, NY — 5.0★ reviews, total-price quotes. Spring replacement, opener repair, emergency line. Licensed & insured. Call (845) 262-2034."
      keywords="Suffern garage door repair, garage door installation Suffern, emergency garage door Suffern, spring replacement Suffern"
      slug="/suffern-ny/"
      cityName="Suffern"
      stateCode="NY"
      stateName="New York"
      geo={{ latitude: '41.1148', longitude: '-74.1496' }}
      phone="(845) 262-2034"
      phoneTel="+18452622034"
      localJobPhotos={[
        {
          image: '/images/jobs/mahogany-wood-grain-raised-panel-garage-door.webp',
          alt: 'Mahogany wood-grain raised-panel garage door after full replacement in Suffern, NY',
          title: 'Wood-Grain Door — Mahogany Finish',
          result: 'Full raised-panel replacement',
        },
      ]}
      heroImage="https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/251bb224-5425-49d4-7ab9-6fceaf7a3b00/hero"
      neighborhoods={[{"name":"Suffern Village","description":"Our home base. We're as local as it gets — our Suffern technician lives and works here."},{"name":"Airmont & Montebello","description":"Neighboring communities right next to our base. We have longtime customers throughout both villages."},{"name":"Wesley Hills & Pomona","description":"Rockland communities just north of Suffern, close to our base."},{"name":"Mahwah & Ramsey NJ","description":"Just across the state line. We serve northern Bergen County from our Suffern base."},{"name":"Hillburn & Tuxedo","description":"Small communities along the NY/NJ border. We know these roads well."},{"name":"Sloatsburg & Tuxedo Park","description":"Route 17 corridor communities. We cover this stretch regularly."}]}
      reviews={[{"text":"Great team, good communication, and efficient work. They ultimately suggested that I repair my current doors instead of installing new ones. They priced out both options (both very reasonable) and I ended up going with the door repair with new openers. Everything works great now. Definitely recommend!","author":"Carl B.","location":"Suffern, NY","initials":"CB","color":"bg-blue-600"},{"text":"Amazing service and quality work! Showed up on a Sunday to evaluate my door that had a spring broken. Highly recommend! 5 stars all way.","author":"Luis G.","location":"Suffern, NY","initials":"LG","color":"bg-orange-500"},{"text":"We recently had our garage door springs and cables replaced, and the service was outstanding from start to finish. The technician arrived on time, was professional, knowledgeable. The garage door now operates smoothly and quietly. I highly recommend this company to anyone in need of garage door repairs!","author":"Vicki C.","location":"Suffern, NY","initials":"VC","color":"bg-green-600"},{"text":"Had a pleasure working with Ben and discussing options for my garage door. He is very professional, meticulous, and responsive. He took time to review everything and ensured every detail was covered.","author":"Ilyas A.","location":"Suffern, NY","initials":"IA","color":"bg-purple-600"}]}
      faqs={[{"question":"Why is Suffern your base?","answer":"Suffern is central to Rockland County, close to the NJ border, and gives us great access to northern NJ and the Hudson Valley. Our technician Ben is based here and knows the area extremely well."},{"question":"How does scheduling work in Suffern?","answer":"Our technician is based right in Suffern. Call and a dispatcher checks his current availability — actual arrival depends on his current job, traffic, and your distance from him, and we confirm an honest window on the call."},{"question":"Do you serve areas around Suffern?","answer":"Yes — Airmont, Montebello, Wesley Hills, Pomona, Sloatsburg, Tuxedo, Hillburn, and across the border into Mahwah and Ramsey NJ."},{"question":"What does garage door repair cost in Suffern?","answer":"Repairs run $150–$300, spring replacement $175–$350, opener $150–$350 — total prices inclusive of any fees, surcharges, and applicable taxes. Upfront pricing always."},{"question":"What brands do you service in Suffern?","answer":"All major brands — LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, Amarr, and more."},{"question":"Do you prioritize Suffern calls?","answer":"This is our home territory — we prioritize local calls, and a dispatcher confirms an honest arrival window when you phone."},{"question":"Is Smart Garage Doors a good choice for garage door repair in Suffern?","answer":"Yes — we're a licensed (NY DCWP #2130164-DCWP), insured company with a 5.0★ average from 479+ Google reviews, including customers right here in Suffern. We back our work with upfront pricing (no surprise fees) and a warranty on parts and labor. Suffern is our home base, so you're calling a technician who lives and works in this area. Call (845) 262-2034 to check availability."}]}
      
    />
  );
}
