import { trackPhoneClick } from '../../utils/analytics';

export default function MobileStickyCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-3 px-4 py-3 max-w-7xl mx-auto">
        <a
          href="tel:+19145576816"
          onClick={() => trackPhoneClick('(914) 557-6816')}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors text-sm"
          aria-label="Call Smart Garage Doors"
        >
          <i className="ri-phone-fill text-lg" aria-hidden="true" />
          <span>Call Dispatch</span>
        </a>
        <a
          href="/book-now/"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors text-sm"
          aria-label="Book garage door service online"
        >
          <i className="ri-calendar-check-line text-lg" aria-hidden="true" />
          <span>Get Local Quote</span>
        </a>
      </div>
    </div>
  );
}
