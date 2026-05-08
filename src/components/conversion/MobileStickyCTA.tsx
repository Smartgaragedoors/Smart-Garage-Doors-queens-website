import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';
import { getWhatsAppHref } from '../../utils/whatsapp';

export default function MobileStickyCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-gray-300"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-stretch divide-x divide-gray-200">
        <a
          href={getWhatsAppHref({ message: 'Hi! I found you on your website and need help with my garage door. Can you help?' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2.5 transition-colors"
          aria-label="Message us on WhatsApp"
        >
          <i className="ri-whatsapp-fill text-base" aria-hidden="true" />
          <span className="text-sm font-bold">WhatsApp</span>
        </a>
        <a
          href="tel:+19145576816"
          onClick={() => trackPhoneClick('(914) 557-6816', 'mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2.5 transition-colors"
          aria-label="Call Smart Garage Doors now"
        >
          <i className="ri-phone-fill text-base" aria-hidden="true" />
          <span className="flex flex-col items-center leading-tight">
            <span className="text-sm font-bold">Call Now</span>
            <span className="text-[10px] font-normal opacity-80">Live answer</span>
          </span>
        </a>
        <a
          href="/book-now/"
          className="flex-1 flex items-center justify-center gap-1.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold py-2.5 transition-colors"
          aria-label="Book garage door service online"
        >
          <i className="ri-calendar-check-line text-base" aria-hidden="true" />
          <span className="text-sm font-bold">Book</span>
        </a>
      </div>
    </div>
  );
}
