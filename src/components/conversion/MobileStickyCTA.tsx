import { trackPhoneClick } from '../../utils/analytics';

export default function MobileStickyCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-stretch divide-x divide-gray-200">
        <a
          href="tel:+19145576816"
          onClick={() => trackPhoneClick('(914) 557-6816')}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3.5 transition-colors"
          aria-label="Call Smart Garage Doors now"
        >
          <i className="ri-phone-fill text-xl" aria-hidden="true" />
          <span className="text-sm font-bold">Call Now</span>
          <span className="text-[10px] text-orange-100">(914) 557-6816</span>
        </a>
        <a
          href="/book-now/"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold py-3.5 transition-colors"
          aria-label="Book garage door service online"
        >
          <i className="ri-calendar-check-line text-xl" aria-hidden="true" />
          <span className="text-sm font-bold">Book Online</span>
          <span className="text-[10px] text-blue-300">Free estimate</span>
        </a>
      </div>
    </div>
  );
}
