import { memo } from 'react';

function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-blue-900 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 mb-4">Why People Choose Us</p>
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-400 text-xl mt-0.5" aria-hidden="true"></i>
                  <span>Live answer for urgent calls when the garage door will not move safely.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-400 text-xl mt-0.5" aria-hidden="true"></i>
                  <span>Tri-State coverage paired with local-feeling dispatch language for each service area.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-400 text-xl mt-0.5" aria-hidden="true"></i>
                  <span>Upfront quote before work starts, plus workmanship you can hold us to.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-400 text-xl mt-0.5" aria-hidden="true"></i>
                  <span>475 Google reviews from real local customers who needed fast, reliable help.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left pr-0 lg:pr-8 xl:pr-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-4">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Real Local Service, Not a Generic Lead Site
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                When homeowners call us, they are usually under pressure. The spring snapped, the car is trapped, or the door will not close securely. Our job is to answer fast, give a clear next step, and send a technician who can actually solve the problem.
              </p>
              <p>
                We are built for emergency repair first: broken springs, off-track doors, opener failures, cable issues, and urgent safety problems. We also handle replacements and upgrades for homeowners who want a clean install and dependable long-term performance.
              </p>
              <p>
                If you are anywhere in our Tri-State footprint, the goal of this site is simple: make it easy to call, easy to trust us, and easy to feel like we work in your area every day.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-blue-900">Need an answer right now?</span>
              </p>
              <a
                href="tel:914-557-6816"
                className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-600 transition-colors"
              >
                <i className="ri-phone-line mr-2" aria-hidden="true"></i>
                (914) 557-6816
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
