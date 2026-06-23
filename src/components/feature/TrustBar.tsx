import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Compact 5-stat trust band shown directly under the hero (design handoff).
 *
 * Navy band with an orange top accent and serif amber figures — reinforces the
 * core proof points (rating, 24/7 answer, $0 offer, same-day, coverage) right
 * after the fold. Facts come from business-info.ts; nothing is invented and no
 * dispatch hubs are named (local-feel rule).
 */

interface Stat {
  figure: string;
  label: string;
  /** marks the rating cell so we can render a gold star before the number */
  star?: boolean;
}

const STATS: Stat[] = [
  { figure: BUSINESS_INFO.aggregateRating.ratingValue, label: `${BUSINESS_INFO.aggregateRating.reviewCount} Google Reviews`, star: true },
  { figure: '24/7', label: 'Live Emergency Answer' },
  { figure: '$0', label: 'Service Call w/ Repair' },
  { figure: 'Same-Day', label: 'When parts are on the truck' },
  { figure: 'NY·NJ·CT', label: 'Licensed & Insured' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#16335B] text-white border-t-[3px] border-orange-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4 text-center">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              'px-2',
              i > 0 ? 'lg:border-l lg:border-white/10' : '',
              // last (5th) cell would orphan on the 2-col layout — center it
              i === STATS.length - 1 ? 'max-sm:col-span-2' : '',
            ].join(' ')}
          >
            <div className="font-newsreader text-2xl md:text-[26px] text-[#F2B98C] leading-none">
              {stat.star && <span className="text-[#F5A623]" aria-hidden="true">★ </span>}
              {stat.figure}
            </div>
            <div className="text-xs md:text-[13px] text-[#bccbe0] mt-1.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
