import { memo } from 'react';

function About() {
  return (
    <section id="about" className="py-8 lg:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two real customer photos — visual proof at a glance */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <img
              src="/images/happy-customer-garage-door-repair-smart-garage-doors.jpg"
              alt="Happy customer giving thumbs up with Smart Garage Doors technician after repair"
              className="w-full h-full object-cover object-top"
              width={400} height={300} loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <img
              src="/images/satisfied-customer-new-garage-door-smart-garage-doors.jpg"
              alt="Satisfied homeowner with Smart Garage Doors technician after new door installation"
              className="w-full h-full object-cover object-top"
              width={400} height={300} loading="lazy"
            />
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <img
              src="/images/garage-door-repair-team-job-site-smart-garage-doors.webp"
              alt="Smart Garage Doors team kneeling at a residential garage job site"
              className="w-full h-full object-cover object-top"
              width={400} height={300} loading="lazy"
            />
          </div>
        </div>

        {/* Copy block */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-5">
            About Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5 leading-tight">
            Real Technicians. Real Reviews. Real Local Service.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            When your garage door breaks, you are usually under pressure — the car is stuck, the door won't close, or a spring snapped loud enough to scare the whole house. You need someone who answers fast and sends a real technician, not a call center that farms the job out.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We built Smart Garage Doors around one idea: show up, fix it right, and leave you with our number in case anything ever needs attention. Our techs carry common parts on every truck so most jobs finish on the first visit. We quote the price before we start, and we don't charge you for the estimate.
          </p>
          {/* Stat cards + CTA removed — rating/24-7/$0 already appear in the hero and
              WhyChooseUs, and the Contact section directly below carries the CTA. */}
        </div>

      </div>
    </section>
  );
}

export default memo(About);
