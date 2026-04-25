import { memo } from 'react';
import { getCFImageUrl } from '../../data/cloudflareImages';

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
    title: '475 Five-Star Reviews.',
    body: 'Every review was left by a real homeowner who called us with a real problem. We show up, fix it, and leave the garage working.',
    highlight: '5.0★ rated',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 font-semibold rounded-full text-sm mb-4 tracking-wide uppercase">
            Why Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Three Things That Matter When Your Garage Door Breaks
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Speed, honesty, and a job done right. That is the whole model.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — pillars */}
          <div className="space-y-6">
            {PILLARS.map(({ icon, title, body, highlight }) => (
              <div key={title} className="flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                  <i className={`${icon} text-2xl text-white`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
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
            <div className="relative w-full max-w-sm lg:max-w-none">
              <img
                src={getCFImageUrl('7afb363e-9199-4fb7-599f-c037e1439b00', 'card')}
                alt="Dan, Smart Garage Doors technician, smiling on the job — the face of a real local service company"
                className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover mx-auto lg:mx-0"
                width={480}
                height={640}
                loading="lazy"
              />
              {/* Floating review badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-2xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-none">475+ reviews</p>
                <p className="text-xs text-gray-500 mt-0.5">Google · 5.0 average</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+19145576816"
              className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg mt-6"
            >
              <i className="ri-phone-fill text-xl" aria-hidden="true" />
              Call (914) 557-6816
            </a>
            <p className="text-blue-300 text-sm">Live dispatch, not a call center.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(WhyChooseUs);
