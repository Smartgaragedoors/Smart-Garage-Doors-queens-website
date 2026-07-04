import { memo } from 'react';
import { getCFImageUrl } from '../../data/cloudflareImages';
import { BUSINESS_INFO } from '../../config/business-info';

const PILLARS = [
  {
    icon: 'ri-flashlight-line',
    title: 'We Answer. We Show Up.',
    body: 'Call us any time — a real person picks up. We dispatch the nearest tech and give you an honest arrival window, not a 4-hour range.',
    highlight: '24/7 live answer',
  },
  {
    icon: 'ri-price-tag-3-line',
    title: 'Price Before We Start.',
    body: 'You get a clear quote before our tech touches anything. No surprises, no hidden fees, no pressure. If you say no, you owe nothing for the visit.',
    highlight: 'Free on-site estimate',
  },
  {
    icon: 'ri-star-smile-line',
    title: `${BUSINESS_INFO.aggregateRating.reviewCount} Five-Star Reviews.`,
    body: 'Every review was left by a real homeowner who called us with a real problem. We show up, fix it, and leave the garage working.',
    highlight: '5.0★ rated',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-8 lg:py-12 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-sm mb-4 tracking-wide uppercase">
            Why Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 lg:mb-4 leading-tight">
            Three Things That Matter When Your Garage Door Breaks
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-base lg:text-lg">
            Speed, honesty, and a job done right. That is the whole model.
          </p>
        </div>

        {/* Content grid — real technician photo first on mobile (trust, high on page) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — pillars */}
          <div className="space-y-4 lg:space-y-6 order-last lg:order-first">
            {PILLARS.map(({ icon, title, body, highlight }) => (
              <div key={title} className="flex gap-4 lg:gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 lg:p-6 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                  <i className={`${icon} text-xl lg:text-2xl text-white`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-2">{body}</p>
                  <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {highlight}
                  </span>
                </div>
              </div>
            ))}

            {/* Guarantee strip */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <i className="ri-shield-check-fill text-3xl text-green-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-blue-200 text-sm leading-relaxed">
                <span className="text-white font-semibold">Our guarantee:</span> If we can't diagnose the problem on the first visit, you don't pay for the call. Licensed and insured in NY, NJ, and CT.
              </p>
            </div>
          </div>

          {/* Right — photo + social proof */}
          <div className="flex flex-col items-center lg:items-end gap-5">
            <div className="relative w-full max-w-[240px] lg:max-w-none">
              <img
                src={getCFImageUrl('7afb363e-9199-4fb7-599f-c037e1439b00', 'card')}
                alt="Dan, Smart Garage Doors technician, smiling on the job — the face of a real local service company"
                className="w-full max-h-[280px] lg:max-h-[440px] max-w-[240px] lg:max-w-md rounded-2xl shadow-lg object-cover object-top mx-auto lg:mx-0"
                width={480}
                height={640}
                loading="lazy"
              />
              {/* Floating review badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-2xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-none">{BUSINESS_INFO.aggregateRating.reviewCount}+ reviews</p>
                <p className="text-xs text-gray-500 mt-0.5">Google · {BUSINESS_INFO.aggregateRating.ratingValue} average</p>
              </div>
            </div>

            {/* CTA — hidden on mobile (hero + sticky bar already carry the call) */}
            <a
              href="tel:+19145576816"
              className="hidden lg:inline-flex items-center gap-2.5 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-lg mt-6"
            >
              <i className="ri-phone-fill text-xl" aria-hidden="true" />
              Call (914) 557-6816
            </a>
            <p className="text-blue-300 text-sm text-center lg:text-left">Live dispatch, not a call center.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(WhyChooseUs);
