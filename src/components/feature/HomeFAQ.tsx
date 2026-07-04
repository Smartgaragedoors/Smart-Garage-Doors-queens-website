import { memo } from 'react';
import FAQSchema from '../seo/FAQSchema';
import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Homepage FAQ — mobile accordion built on native <details>/<summary>.
 *
 * Why <details> instead of a JS-toggled accordion: the answer text stays in the
 * rendered HTML even while collapsed, so it's fully crawlable (and survives the
 * static prerender). No JS, no animation library — just CSS for the chevron.
 * FAQSchema emits the matching FAQPage JSON-LD (this is the only FAQ block on
 * the homepage, so there's exactly one FAQPage per page).
 */
const FAQS = [
  {
    question: 'How fast can you come out for a garage door repair?',
    answer:
      'In most of our New York, New Jersey, and Connecticut service area we offer same-day garage door repair when parts are on the truck. Call (914) 557-6816, tell us your city, and a real person will give you an honest arrival window — not a vague 4-hour range.',
  },
  {
    question: 'Do you charge for the service call?',
    answer:
      'Your service call is $0 with any completed repair, and you get a clear price before we start. If you decide not to move forward, there is no pressure and no obligation.',
  },
  {
    question: 'Can you fix a broken spring or snapped cable the same day?',
    answer:
      'Yes. Broken torsion springs, snapped cables, doors off track, and dead openers are the jobs we do every day. Our technicians carry common springs, cables, rollers, and opener parts so most repairs finish on the first visit.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We serve the Tri-State area — including Queens, Brooklyn, the Bronx, Staten Island, Long Island, and Westchester in New York; Bergen County and across New Jersey; and Stamford, Greenwich, and Fairfield in Connecticut. Tell us your city and we will route the closest technician.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes — Smart Garage Doors is licensed and insured for residential and commercial work across NY, NJ, and CT, and we can provide a certificate of insurance (COI) on request for property managers and businesses.',
  },
  {
    question: 'Do you handle commercial and property management work?',
    answer:
      'Absolutely. We service warehouses, loading docks, rolling steel gates, storefronts, and rental properties, and we set up one-vendor accounts for property managers with per-property documentation, COIs, and maintenance programs.',
  },
];

function HomeFAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-8 md:py-12">
      <FAQSchema faqs={FAQS} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-3">
            Garage Door Questions, Answered
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            The things homeowners ask us most before they book.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-gray-900 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="text-[15px] md:text-base">{faq.question}</span>
                <i
                  className="ri-arrow-down-s-line text-xl text-orange-500 flex-shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5 -mt-1 text-gray-600 text-sm md:text-[15px] leading-relaxed border-t border-gray-100">
                <p className="pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Still have a question?{' '}
          <a href="tel:+19145576816" className="font-semibold text-orange-600 hover:text-orange-700">
            Call (914) 557-6816
          </a>{' '}
          — {BUSINESS_INFO.aggregateRating.reviewCount}+ five-star reviews.
        </p>
      </div>
    </section>
  );
}

export default memo(HomeFAQ);
