import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPhoneClick, trackWhatsAppClick, trackBookNowClick } from '../../utils/analytics';
import { getWhatsAppHref } from '../../utils/whatsapp';

/**
 * Mobile sticky CTA bar.
 *
 * To avoid showing Call/WhatsApp twice while the hero's big buttons are on
 * screen, the bar stays hidden until the element tagged [data-hero-cta]
 * scrolls out of view — then it springs up from the bottom and sticks.
 * Pages without a tagged hero show the bar right away.
 */
export default function MobileStickyCTA() {
  const [docked, setDocked] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDocked(false);
    let settled = false;

    // Re-query the element on every check — the hero can re-render (location
    // detection) and replace its DOM node, which breaks a one-time observer.
    const check = () => {
      const target = document.querySelector('[data-hero-cta]');
      if (!target) {
        if (settled) setDocked(true); // page has no hero CTAs — show the bar
        return;
      }
      settled = true;
      const rect = target.getBoundingClientRect();
      setDocked(rect.bottom < 64 || rect.top > window.innerHeight);
    };

    // Give the lazy page chunk a moment to mount its hero before the
    // "no hero on this page" fallback may kick in.
    const settleTimer = setTimeout(() => {
      settled = true;
      check();
    }, 900);

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check();

    return () => {
      clearTimeout(settleTimer);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [pathname]);

  return (
    <div
      className="mobile-sticky-cta lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      style={{
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
        transform: docked ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      aria-hidden={!docked}
    >
      <div className="flex items-stretch gap-2 px-3 pt-2">
        <a
          href={getWhatsAppHref({ message: 'Hi! I found you on your website and need help with my garage door. Can you help?' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors"
          aria-label="Message us on WhatsApp"
          tabIndex={docked ? 0 : -1}
        >
          <i className="ri-whatsapp-fill text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">WhatsApp</span>
        </a>
        <a
          href="tel:+19145576816"
          onClick={() => trackPhoneClick('(914) 557-6816', 'mobile_sticky_cta')}
          className="flex-[1.2] flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors"
          aria-label="Call Smart Garage Doors now"
          tabIndex={docked ? 0 : -1}
        >
          <i className="ri-phone-fill text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">Call Now</span>
        </a>
        <a
          href="/book-now/"
          onClick={() => trackBookNowClick('mobile_sticky_cta')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold py-3 rounded-xl transition-colors"
          aria-label="Book garage door service online"
          tabIndex={docked ? 0 : -1}
        >
          <i className="ri-calendar-check-line text-lg" aria-hidden="true" />
          <span className="text-sm font-bold">Book</span>
        </a>
      </div>
    </div>
  );
}
