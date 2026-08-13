import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Compact 5-stat trust band shown directly under the hero (design handoff).
 *
 * Navy band with an orange top accent and serif amber figures — reinforces the
 * core proof points (rating, free estimate, warranty, coverage) right after the
 * fold. Facts come from business-info.ts; nothing is invented and no dispatch
 * hubs are named (local-feel rule). Response-time and service-call-price claims
 * are deliberately absent (Google Ads Advanced Verification policy).
 */

interface Stat {
  figure: string;
  label: string;
  /** marks the rating cell so we can render a gold star before the number */
  star?: boolean;
}

const STATS: Stat[] = [
  { figure: BUSINESS_INFO.aggregateRating.ratingValue, label: `${BUSINESS_INFO.aggregateRating.reviewCount} Google Reviews`, star: true },
  { figure: 'Live', label: 'Dispatcher Answers' },
  { figure: 'Free', label: 'Written Total-Price Estimate' },
  { figure: '1-Year', label: 'Parts & Labor Warranty' },
  { figure: 'NY·NJ·CT', label: 'Licensed & Insured' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#16335B] text-white border-t-[3px] border-orange-500">
      {/* Mobile: one compact trust line (keeps the band short above the fold). */}
      <p className="sm:hidden flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-[13px] font-semibold text-center">
        <span className="text-[#F2B98C]"><span className="text-[#F5A623]" aria-hidden="true">★ </span>{BUSINESS_INFO.aggregateRating.reviewCount}+ reviews</span>
        <span className="text-white/30" aria-hidden="true">·</span>
        <span className="text-[#bccbe0]">Licensed &amp; insured</span>
        <span className="text-white/30" aria-hidden="true">·</span>
        <span className="text-[#bccbe0]">1-year warranty</span>
      </p>
      {/* sm+: full 5-stat band */}
      <div className="hidden sm:grid max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-6 grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4 text-center">
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
