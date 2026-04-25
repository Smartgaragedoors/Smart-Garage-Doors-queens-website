import { memo } from 'react';

function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two real customer photos — visual proof at a glance */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Real Technicians. Real Reviews. Real Local Service.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When your garage door breaks, you are usually under pressure — the car is stuck, the door won't close, or a spring snapped loud enough to scare the whole house. You need someone who answers fast and sends a real technician, not a call center that farms the job out.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We built Smart Garage Doors around one idea: show up, fix it right, and leave you with our number in case anything ever needs attention. Our techs carry common parts on every truck so most jobs finish on the first visit. We quote the price before we start, and we don't charge you for the estimate.
          </p>

          {/* 3 key facts inline */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: '475+', label: 'Google reviews', sub: '5.0 average' },
              { value: '24/7', label: 'Emergency line', sub: 'Live answer' },
              { value: '$0', label: 'Estimate cost', sub: 'Price before we start' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
                <p className="text-3xl font-extrabold text-orange-500 leading-none">{value}</p>
                <p className="text-sm font-semibold text-blue-900 mt-1">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          <a
            href="tel:+19145576816"
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
          >
            <i className="ri-phone-fill text-xl" aria-hidden="true" />
            Call (914) 557-6816
          </a>
        </div>

      </div>
    </section>
  );
}

export default memo(About);
