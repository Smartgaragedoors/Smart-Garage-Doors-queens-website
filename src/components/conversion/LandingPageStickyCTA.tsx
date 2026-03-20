import { getWhatsAppHref } from '../../utils/whatsapp';
import { trackLandingPageWhatsAppClick, trackLandingPageCallClick, trackPhoneClick } from '../../utils/analytics';
import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Mobile-only sticky CTA for landing pages: WhatsApp + Call.
 * Used on /lp/whatsapp/ and other conversion-focused LP routes.
 */
export default function LandingPageStickyCTA() {
  const handleWhatsApp = () => {
    trackLandingPageWhatsAppClick();
  };

  const handleCall = () => {
    trackLandingPageCallClick();
    trackPhoneClick(BUSINESS_INFO.phone);
  };

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-3 px-4 py-3 max-w-7xl mx-auto">
        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors text-sm"
          aria-label="Message us on WhatsApp"
        >
          <i className="ri-whatsapp-fill text-lg" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+19145576816"
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3.5 px-4 rounded-lg transition-colors text-sm"
          aria-label="Call Smart Garage Doors"
        >
          <i className="ri-phone-fill text-lg" aria-hidden="true" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}
