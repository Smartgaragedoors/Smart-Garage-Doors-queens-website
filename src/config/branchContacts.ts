import { BUSINESS_INFO } from './business-info';

// NAP confirmed in docs/fable-brain/backlinks/local-citations-plan.md (2026-07-06).
// A missing profile URL must never fall back to another branch's profile.
export const LOCATIONS = {
  queens: { id: 'queens', city: 'Queens, NY', path: '/queens-ny/', phone: BUSINESS_INFO.phone, phoneTel: BUSINESS_INFO.phoneFormatted, address: BUSINESS_INFO.addresses[0], mapsUrl: BUSINESS_INFO.socialMedia.googleMaps },
  suffern: { id: 'suffern', city: 'Suffern, NY', path: '/suffern-ny/', phone: '(845) 262-2034', phoneTel: '+18452622034', address: BUSINESS_INFO.addresses[2], mapsUrl: undefined },
  pearlRiver: { id: 'pearl-river', city: 'Pearl River, NY', path: '/pearl-river-ny/', phone: '(551) 345-5592', phoneTel: '+15513455592', address: undefined, mapsUrl: undefined },
};

export function getLocationContact(pathname: string, search = '') {
  const context = pathname + ' ' + (new URLSearchParams(search).get('location') || '').toLowerCase();
  if (context.includes('suffern')) return LOCATIONS.suffern;
  if (context.includes('pearl-river') || context.includes('pearl river')) return LOCATIONS.pearlRiver;
  return LOCATIONS.queens;
}

export function getBookingHref(pathname: string, search = '') {
  const local = getLocationContact(pathname, search);
  const hasLocalContext = pathname.includes(local.id) || new URLSearchParams(search).has('location');
  return hasLocalContext ? `/book-now/?location=${encodeURIComponent(local.city)}` : '/book-now/';
}
