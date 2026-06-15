// Google Analytics 4 and event tracking utilities

type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: GtagCommand, targetId: string, config?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Respect the explicit kill-switch (set VITE_ENABLE_ANALYTICS=false on staging/preview)
const ANALYTICS_ENABLED = import.meta.env.VITE_ENABLE_ANALYTICS !== 'false';

// Block tracking on Vercel preview deployments and localhost
function isAllowedOrigin(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return false;
  if (host.endsWith('.vercel.app')) return false;
  if (host.endsWith('.netlify.app')) return false;
  return true;
}

// DebugView bypass: visiting any URL with ?ga_debug=1 enables analytics with
// debug_mode on, even on preview/localhost. Lets us validate events in GA4
// DebugView on a preview deployment without enabling real tracking for normal
// preview visitors. Persisted for the session so SPA navigation keeps it.
export function isDebugMode(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (new URLSearchParams(window.location.search).get('ga_debug') === '1') {
      sessionStorage.setItem('ga_debug', '1');
    }
    return sessionStorage.getItem('ga_debug') === '1';
  } catch {
    return false;
  }
}

function shouldTrack(): boolean {
  if (!GA_MEASUREMENT_ID || !ANALYTICS_ENABLED) return false;
  return isAllowedOrigin() || isDebugMode();
}

// ─── Attribution ─────────────────────────────────────────────────────────────
// Captures UTM params + referrer on first page load and stores in sessionStorage
// so every subsequent event and form submission carries the original source.

export interface AttributionData {
  landing_page: string;
  source_url: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  device_type: 'mobile' | 'tablet' | 'desktop';
  captured_at: string;
}

const ATTRIBUTION_KEY = 'sgd_attribution';

function detectDeviceType(): AttributionData['device_type'] {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  // Only capture once per session (first touch)
  if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const data: AttributionData = {
    landing_page: window.location.pathname + window.location.search,
    source_url: window.location.href,
    referrer: document.referrer || '',
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    device_type: detectDeviceType(),
    captured_at: new Date().toISOString(),
  };

  sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
}

export function getAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as AttributionData) : null;
  } catch {
    return null;
  }
}

// ─── Initialization ───────────────────────────────────────────────────────────

export const initAnalytics = () => {
  captureAttribution();
  initGlobalClickTracking();

  if (!shouldTrack()) return;

  const loadGA = () => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onerror = () => {
      if (import.meta.env.DEV) console.warn('Failed to load Google Analytics script');
    };
    document.head.appendChild(script);
  };

  if (document.readyState === 'complete') {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadGA, { timeout: 2000 });
    } else {
      setTimeout(loadGA, 2000);
    }
  } else {
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadGA, { timeout: 2000 });
      } else {
        setTimeout(loadGA, 2000);
      }
    });
  }

  window.dataLayer = window.dataLayer || [];
  // gtag.js consumes the raw `arguments` object from the dataLayer (the canonical
  // pattern, identical to index.html). The previous version pushed a plain array
  // ([command, targetId, config]); config/page_view still worked, but custom
  // events (call_click, form_submit, book_now_click, whatsapp_click) were silently
  // dropped — the cause of the near-zero conversions recorded in GA4.
  function gtag(_command?: GtagCommand, _targetId?: string, _config?: GtagParams) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown);
  }
  window.gtag = gtag as typeof window.gtag;
  gtag('js', new Date().toISOString());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_flags: 'SameSite=None;Secure',
    debug_mode: isDebugMode(),
  });
};

// ─── Core event helper ────────────────────────────────────────────────────────

export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
};

export const trackEvent = (
  eventName: string,
  eventParams?: {
    action?: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: unknown;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, eventParams);
};

// ─── Conversion events (mark these as key events in GA4 console) ──────────────

// Dedupe guard: the global delegated listener (initGlobalClickTracking) AND a
// component-level onClick can both fire for the same physical click. Whichever
// runs first wins; the second call within the window is dropped.
const DEDUPE_WINDOW_MS = 400;
const lastFired: Record<string, number> = {};
function isDuplicate(key: string): boolean {
  const now = Date.now();
  if (lastFired[key] && now - lastFired[key] < DEDUPE_WINDOW_MS) return true;
  lastFired[key] = now;
  return false;
}

// Safety net so EVERY tel:/sms:/WhatsApp link on the site is tracked, even ones
// without an explicit onClick handler (blog CTAs, footer, service pages, etc.).
// Component-level handlers still run and provide richer `source` labels; the
// dedupe guard prevents double-counting.
export function initGlobalClickTracking(): void {
  if (typeof document === 'undefined') return;
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const source = link.getAttribute('data-track-source') || `auto:${window.location.pathname}`;
      if (href.startsWith('tel:')) {
        trackPhoneClick(href.replace('tel:', ''), source);
      } else if (href.startsWith('sms:')) {
        trackSmsClick(source);
      } else if (href.includes('wa.me/') || href.includes('api.whatsapp.com')) {
        trackWhatsAppClick(source);
      }
    },
    { capture: true }
  );
}

export const trackPhoneClick = (phoneNumber: string, source?: string) => {
  if (isDuplicate(`call:${phoneNumber.replace(/\D/g, '')}`)) return;
  const attr = getAttribution();
  trackEvent('call_click', {
    category: 'Contact',
    label: phoneNumber,
    value: 1,
    source: source || 'unknown',
    landing_page: attr?.landing_page || '',
    source_url: attr?.source_url || '',
    utm_source: attr?.utm_source || '',
    utm_medium: attr?.utm_medium || '',
    utm_campaign: attr?.utm_campaign || '',
    gclid: attr?.gclid || '',
    fbclid: attr?.fbclid || '',
    device_type: attr?.device_type || '',
  });
};

export const trackFormStart = (formName: string, source?: string) => {
  const attr = getAttribution();
  trackEvent('form_start', {
    category: 'Lead Generation',
    label: formName,
    value: 1,
    source: source || formName,
    landing_page: attr?.landing_page || '',
    source_url: attr?.source_url || '',
    utm_source: attr?.utm_source || '',
    utm_campaign: attr?.utm_campaign || '',
    gclid: attr?.gclid || '',
    fbclid: attr?.fbclid || '',
    device_type: attr?.device_type || '',
  });
};

export const trackFormSubmit = (
  formName: string,
  formType: string,
  extras?: { service_type?: string; urgency?: string }
) => {
  const attr = getAttribution();
  trackEvent('form_submit', {
    category: 'Lead Generation',
    label: formName,
    value: 1,
    form_type: formType,
    service_type: extras?.service_type || '',
    urgency: extras?.urgency || '',
    landing_page: attr?.landing_page || '',
    source_url: attr?.source_url || '',
    referrer: attr?.referrer || '',
    utm_source: attr?.utm_source || '',
    utm_medium: attr?.utm_medium || '',
    utm_campaign: attr?.utm_campaign || '',
    gclid: attr?.gclid || '',
    fbclid: attr?.fbclid || '',
    device_type: attr?.device_type || '',
  });
};

export const trackWhatsAppClick = (source?: string) => {
  if (isDuplicate('whatsapp_click')) return;
  const attr = getAttribution();
  trackEvent('whatsapp_click', {
    category: 'Contact',
    label: source || 'unknown',
    value: 1,
    landing_page: attr?.landing_page || '',
    utm_source: attr?.utm_source || '',
    utm_medium: attr?.utm_medium || '',
  });
};

export const trackBookNowClick = (source?: string) => {
  const attr = getAttribution();
  trackEvent('book_click', {
    category: 'Lead Generation',
    label: source || 'unknown',
    value: 1,
    source_url: attr?.source_url || '',
    gclid: attr?.gclid || '',
    fbclid: attr?.fbclid || '',
    device_type: attr?.device_type || '',
  });
};

export const trackChatSubmit = (source?: string) => {
  const attr = getAttribution();
  trackEvent('chat_submit', {
    category: 'Lead Generation',
    label: source || 'chat_widget',
    value: 1,
    landing_page: attr?.landing_page || '',
    utm_source: attr?.utm_source || '',
  });
};

export const trackSmsClick = (source?: string) => {
  if (isDuplicate('sms_click')) return;
  trackEvent('sms_click', {
    category: 'Contact',
    label: source || 'unknown',
    value: 1,
  });
};

// ─── Page/service tracking ────────────────────────────────────────────────────

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    category: 'Service Pages',
    label: serviceName,
    value: 1,
  });
};

export const trackLocationDetection = (location: string) => {
  trackEvent('location_detected', {
    category: 'User Behavior',
    label: location,
    value: 1,
  });
};

export const track404 = (path: string) => {
  trackEvent('page_not_found', {
    category: 'Errors',
    label: path,
    page_path: path,
  });
};

// ─── Landing page events ──────────────────────────────────────────────────────

export const trackLandingPageView = () => {
  trackEvent('landing_page_view', { category: 'Landing Page', value: 1 });
};

export const trackLandingPageWhatsAppClick = () => trackWhatsAppClick('landing_page');
export const trackLandingPageCallClick = () => trackPhoneClick('914-557-6816', 'landing_page');

export const trackLandingPageScroll = (depth: 50 | 90) => {
  trackEvent(`landing_page_scroll_${depth}`, { category: 'Landing Page', value: depth });
};

export const trackLandingPageFormStart = () => {
  trackEvent('landing_page_form_start', { category: 'Landing Page', value: 1 });
};
