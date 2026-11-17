// Google Analytics 4 and event tracking utilities
import { classifyLeadType } from './leadType';

type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: GtagCommand, targetId: string | Date, config?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

// G-GBBR220BZD is the site's real GA4 measurement id — verified 2026-07-14 by
// reading the deployed Google tag's destination config (gtag/js?id=AW-17709307308
// lists it as the linked GA4 destination; owner confirmed GA4 account 347177237).
// The env var still wins when set (e.g. to disable or swap properties).
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-GBBR220BZD';

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
// Two records, both first-party browser storage (covered by the privacy policy's
// "connect inquiries with the advertisement or link that brought you here"):
//   • this visit  — sessionStorage, written once per session on the first page
//   • first visit — localStorage, kept 90 days, so someone who clicks an ad or a
//     Business Profile link, leaves, and comes back directly a few days later to
//     request a quote is still credited to the channel that found them.
// Every conversion event and form submission carries both.

/** Where a visit came from, in the terms the business buys and measures. */
export type LeadChannel =
  | 'google_ads'
  | 'microsoft_ads'
  | 'paid_search'
  | 'google_business_profile'
  | 'ai_assistant'
  | 'paid_social'
  | 'social'
  | 'organic_search'
  | 'referral'
  | 'campaign'
  | 'direct';

export const LEAD_CHANNEL_LABEL: Record<LeadChannel, string> = {
  google_ads: 'Google Ads',
  microsoft_ads: 'Microsoft Ads',
  paid_search: 'Paid search',
  google_business_profile: 'Google Business Profile',
  ai_assistant: 'AI assistant',
  paid_social: 'Paid social',
  social: 'Social',
  organic_search: 'Organic search',
  referral: 'Referral',
  campaign: 'Tagged campaign',
  direct: 'Direct',
};

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
  /** Google Ads click ids used when gclid is unavailable (iOS app / web-to-app). */
  gbraid: string;
  wbraid: string;
  /** Microsoft Ads click id. */
  msclkid: string;
  fbclid: string;
  channel: LeadChannel;
  device_type: 'mobile' | 'tablet' | 'desktop';
  captured_at: string;
}

const ATTRIBUTION_KEY = 'sgd_attribution';
const FIRST_TOUCH_KEY = 'sgd_first_touch';
// 90 days = the longest click-through conversion window Google Ads allows.
const FIRST_TOUCH_TTL_MS = 90 * 24 * 60 * 60 * 1000;

function detectDeviceType(): AttributionData['device_type'] {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

const AI_SOURCE = /chatgpt|openai|perplexity|claude|gemini|copilot|deepseek|grok/i;
const AI_HOST = /(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|you\.com|grok\.com|x\.ai|meta\.ai|deepseek\.com)$/i;
const SEARCH_HOST = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|brave\.com|startpage\.com|aol\.com)$/i;
const SOCIAL_HOST = /(^|\.)(facebook\.com|instagram\.com|tiktok\.com|nextdoor\.com|linkedin\.com|youtube\.com|x\.com|twitter\.com|pinterest\.com|t\.co)$/i;
const OWN_HOST = /(^|\.)smartestgaragedoors\.com$/i;

function hostOf(url: string): string {
  if (!url) return '';
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

type ChannelInput = Pick<
  AttributionData,
  'referrer' | 'utm_source' | 'utm_medium' | 'utm_campaign' | 'gclid' | 'gbraid' | 'wbraid' | 'msclkid' | 'fbclid'
>;

/**
 * Classify a visit into one acquisition channel. Order matters: paid click ids
 * win, then the Business Profile campaign tag (those links also say
 * utm_medium=organic), then AI assistants (gemini.google.com would otherwise
 * read as a search engine).
 */
export function classifyChannel(t: Partial<ChannelInput>): LeadChannel {
  const source = (t.utm_source || '').toLowerCase();
  const medium = (t.utm_medium || '').toLowerCase();
  const campaign = (t.utm_campaign || '').toLowerCase();
  const host = hostOf(t.referrer || '');

  if (t.gclid || t.gbraid || t.wbraid) return 'google_ads';
  if (t.msclkid) return 'microsoft_ads';
  if (/^gbp([-_]|$)/.test(campaign) || medium === 'gbp' || source === 'gbp') return 'google_business_profile';
  if (AI_SOURCE.test(source) || AI_HOST.test(host)) return 'ai_assistant';
  if (/^(cpc|ppc|paid|paidsearch|paid_search|sem)$/.test(medium)) return 'paid_search';
  if (/^(paid_social|paidsocial|paid-social)$/.test(medium)) return 'paid_social';
  if (t.fbclid || /^(social|organic_social)$/.test(medium) || SOCIAL_HOST.test(host)) return 'social';
  if (medium === 'organic' || SEARCH_HOST.test(host)) return 'organic_search';
  if (host && !OWN_HOST.test(host)) return 'referral';
  if (source || campaign) return 'campaign';
  return 'direct';
}

/** Fill fields added after a record was stored, so old sessions keep working. */
function normalizeAttribution(raw: Partial<AttributionData>): AttributionData {
  const base = {
    landing_page: raw.landing_page || '',
    source_url: raw.source_url || '',
    referrer: raw.referrer || '',
    utm_source: raw.utm_source || '',
    utm_medium: raw.utm_medium || '',
    utm_campaign: raw.utm_campaign || '',
    utm_term: raw.utm_term || '',
    utm_content: raw.utm_content || '',
    gclid: raw.gclid || '',
    gbraid: raw.gbraid || '',
    wbraid: raw.wbraid || '',
    msclkid: raw.msclkid || '',
    fbclid: raw.fbclid || '',
    device_type: raw.device_type || 'desktop',
    captured_at: raw.captured_at || '',
  };
  return { ...base, channel: raw.channel || classifyChannel(base) };
}

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;

  // This visit: capture once per session.
  let current: AttributionData | null = null;
  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (stored) current = normalizeAttribution(JSON.parse(stored) as Partial<AttributionData>);
  } catch {
    current = null;
  }

  if (!current) {
    const params = new URLSearchParams(window.location.search);
    current = normalizeAttribution({
      landing_page: window.location.pathname + window.location.search,
      source_url: window.location.href,
      referrer: document.referrer || '',
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      gclid: params.get('gclid') || '',
      gbraid: params.get('gbraid') || '',
      wbraid: params.get('wbraid') || '',
      msclkid: params.get('msclkid') || '',
      fbclid: params.get('fbclid') || '',
      device_type: detectDeviceType(),
      captured_at: new Date().toISOString(),
    });
    try {
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
    } catch {
      // Storage blocked (private mode): the visit still works, it just isn't attributed.
    }
  }

  // First visit: keep the earliest record for 90 days, then start over.
  try {
    if (!readFirstTouch()) localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(current));
  } catch {
    // Same as above.
  }
}

export function getAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? normalizeAttribution(JSON.parse(raw) as Partial<AttributionData>) : null;
  } catch {
    return null;
  }
}

function readFirstTouch(): AttributionData | null {
  const raw = localStorage.getItem(FIRST_TOUCH_KEY);
  if (!raw) return null;
  const data = normalizeAttribution(JSON.parse(raw) as Partial<AttributionData>);
  const age = Date.now() - Date.parse(data.captured_at);
  return Number.isFinite(age) && age >= 0 && age < FIRST_TOUCH_TTL_MS ? data : null;
}

/** The earliest visit on record in the last 90 days (may be this visit). */
export function getFirstTouch(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    return readFirstTouch();
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

  // Load the GA4 container immediately (async script — doesn't block paint).
  // The previous idle-callback + 2s delay meant short visits (common for an
  // emergency-service site) left before GA ever loaded, silently undercounting
  // users and losing conversion events entirely on quick bounce-to-call visits.
  // Diagnosed 2026-08-12: production pages showed only the AW containers in
  // google_tag_manager — the G- container frequently never initialized.
  loadGA();

  window.dataLayer = window.dataLayer || [];
  // gtag.js consumes the raw `arguments` object from the dataLayer (the canonical
  // pattern, identical to index.html). The previous version pushed a plain array
  // ([command, targetId, config]); config/page_view still worked, but custom
  // events (call_click, form_submit, book_now_click, whatsapp_click) were silently
  // dropped — the cause of the near-zero conversions recorded in GA4.
  function gtag(_command?: GtagCommand, _targetId?: string | Date, _config?: GtagParams) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown);
  }
  window.gtag = gtag as typeof window.gtag;
  // gtag.js requires a Date object here, not a string — the `js` command sets the
  // container load time and a string is not a valid value per the gtag contract.
  gtag('js', new Date());
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

  // Book-now safety net. Deliberately BUBBLE phase (not capture): React's root
  // listeners run before a document-level bubble listener, so components that
  // already call trackBookNowClick('header'|'footer'|...) record first with
  // their richer label and this call is dropped by the dedupe guard. Links with
  // no handler (service-page heroes, blog body CTAs rendered from HTML) are
  // caught here. book_click is an intent signal, not a lead — leads are
  // generate_lead on accepted form submissions.
  document.addEventListener('click', (e) => {
    const target = e.target as Element | null;
    const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!link) return;
    let url: URL;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;
    if (!url.pathname.startsWith('/book-now') || url.pathname.startsWith('/book-now/thank-you')) return;
    trackBookNowClick(link.getAttribute('data-track-source') || `auto:${window.location.pathname}`);
  });
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
    lead_channel: attr?.channel || '',
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
    lead_channel: attr?.channel || '',
  });
};

// Customer-acquisition forms: an accepted submission from one of these is a
// lead. Recruiting and staff issue reports are deliberately not in the list.
const LEAD_FORM_TYPES = [
  'contact',
  'book_now',
  'hero_quote_form',
  'installation_quote_form',
  'opener_quote_form',
  'commercial_lead_form',
  'emergency_garage_door_repair',
];

export const trackFormSubmit = (
  formName: string,
  formType: string,
  extras?: { service_type?: string; urgency?: string; lead_type?: string }
) => {
  const attr = getAttribution();
  const first = getFirstTouch();
  const params = {
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
    // Register lead_type, lead_channel and first_touch_channel as event-scoped
    // custom dimensions in GA4 to report on them (Admin → Custom definitions).
    lead_type:
      extras?.lead_type ||
      classifyLeadType({ formName, formType, serviceType: extras?.service_type }),
    lead_channel: attr?.channel || '',
    first_touch_channel: first?.channel || attr?.channel || '',
  };
  trackEvent('form_submit', params);
  // A distinct success event avoids GA4's automatic form_submit event, which
  // can fire before delivery. Exclude recruiting and staff issue reports from
  // customer-acquisition conversions. Existing diagnostic events are retained.
  if (LEAD_FORM_TYPES.includes(formType)) {
    trackEvent('generate_lead', { ...params, lead_status: 'accepted', value: undefined });
  }
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
    lead_channel: attr?.channel || '',
  });
};

export const trackBookNowClick = (source?: string) => {
  // Shared dedupe key: a component onClick and the global bubble-phase
  // listener can both see one physical click. Whichever runs first wins.
  if (isDuplicate('book')) return;
  const attr = getAttribution();
  trackEvent('book_click', {
    category: 'Lead Generation',
    label: source || 'unknown',
    value: 1,
    source_url: attr?.source_url || '',
    gclid: attr?.gclid || '',
    fbclid: attr?.fbclid || '',
    device_type: attr?.device_type || '',
    lead_channel: attr?.channel || '',
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
