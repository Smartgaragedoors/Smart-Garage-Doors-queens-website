import { trackPhoneClick, trackWhatsAppClick, trackBookNowClick } from '../../utils/analytics';
import { getWhatsAppHref } from '../../utils/whatsapp';

export default function MobileStickyCTA() {
  return (
    <div
      className="mobile-sticky-cta lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-stretch gap-2 px-3 pt-2">
        <a
          href={getWhatsAppHref({ message: 'Hi! I found you on your website and need help with my garage door. Can you help?' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors"
          aria-label="Message us on WhatsApp"
        >
          <i className="ri-whatsapp-fill text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">WhatsApp</span>
        </a>
        <a
          href="tel:+19145576816"
          onClick={() => trackPhoneClick('(914) 557-6816', 'mobile_sticky_cta')}
          className="flex-[1.2] flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors"
          aria-label="Call Smart Garage Doors now"
        >
          <i className="ri-phone-fill text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">Call Now</span>
        </a>
        <a
          href="/book-now/"
          onClick={() => trackBookNowClick('mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold py-3 rounded-xl transition-colors"
          aria-label="Book garage door service online"
        >
          <i className="ri-calendar-check-line text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">Book</span>
        </a>
      </div>
    </div>
  );
}
