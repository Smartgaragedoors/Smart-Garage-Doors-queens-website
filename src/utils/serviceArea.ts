/**
 * Service-area resolution + local-feel copy.
 *
 * Goal: every visitor should feel like we're their *local* garage door company,
 * wherever in the Tri-State they are — without ever disclosing dispatch-hub cities
 * or drive times. We localize by the visitor's detected city (IP) or the city of
 * the location page they're on, and frame everything as local technicians serving
 * that city. Physical addresses are surfaced ONLY on their own dedicated location
 * pages (Flushing/Suffern), where showing the office is intended and truthful.
 */

import type { LocationData } from '../services/geolocation';

// Surrounding areas shown alongside each detected city — regional framing only
// (neighbors of the visitor's city, never our hubs).
export const NEARBY_AREAS: Record<string, string> = {
  'Queens': 'Brooklyn & Long Island',
  'Flushing': 'Queens & Long Island',
  'Astoria': 'Queens & Long Island City',
  'Long Island City': 'Queens & Brooklyn',
  'Forest Hills': 'Queens & Brooklyn',
  'Jamaica': 'Queens & Long Island',
  'Brooklyn': 'Queens & Staten Island',
  'Dyker Heights': 'Brooklyn & Staten Island',
  'Long Island': 'Nassau County & Queens',
  'Nassau County': 'Long Island & Queens',
  'Suffolk County': 'Long Island & Nassau County',
  'Staten Island': 'Brooklyn & New Jersey',
  'Bronx': 'Queens & Westchester',
  'White Plains': 'New Rochelle & Scarsdale',
  'New Rochelle': 'White Plains & Westchester',
  'Scarsdale': 'White Plains & New Rochelle',
  'Suffern': 'Westchester & New Jersey',
  'Westchester County': 'White Plains & New Rochelle',
  'Stamford': 'Greenwich & Darien',
  'Greenwich': 'Stamford & Darien',
  'Darien': 'Greenwich & Stamford',
  'New Canaan': 'Greenwich & Darien',
  'Westport': 'Fairfield & Norwalk',
  'Fairfield': 'Westport & Norwalk',
  'Newtown': 'Fairfield & Westport',
  'Norwalk': 'Westport & Stamford',
  'Teaneck': 'Bergen County & NYC',
  'Bergen County': 'Teaneck & NYC',
  'Hauppauge': 'Smithtown & Long Island',
  'Smithtown': 'Hauppauge & Long Island',
};

// Derive the city from a route path when no IP location is available.
export function cityFromPath(path: string): string | null {
  if (path.includes('brooklyn')) return 'Brooklyn';
  if (path.includes('suffern')) return 'Suffern';
  if (path.includes('queens') || path.includes('flushing')) return 'Queens';
  if (path.includes('bronx')) return 'Bronx';
  if (path.includes('staten-island')) return 'Staten Island';
  if (path.includes('long-island')) return 'Long Island';
  if (path.includes('nassau-county')) return 'Nassau County';
  if (path.includes('suffolk-county')) return 'Suffolk County';
  if (path.includes('white-plains')) return 'White Plains';
  if (path.includes('new-rochelle')) return 'New Rochelle';
  if (path.includes('scarsdale')) return 'Scarsdale';
  if (path.includes('westchester')) return 'Westchester County';
  if (path.includes('stamford')) return 'Stamford';
  if (path.includes('greenwich')) return 'Greenwich';
  if (path.includes('darien')) return 'Darien';
  if (path.includes('new-canaan')) return 'New Canaan';
  if (path.includes('westport')) return 'Westport';
  if (path.includes('fairfield')) return 'Fairfield';
  if (path.includes('newtown')) return 'Newtown';
  if (path.includes('norwalk')) return 'Norwalk';
  if (path.includes('teaneck')) return 'Teaneck';
  if (path.includes('bergen-county')) return 'Bergen County';
  if (path.includes('hauppauge')) return 'Hauppauge';
  if (path.includes('smithtown')) return 'Smithtown';
  return null;
}

// Physical office address — shown ONLY on its own dedicated location page.
export function physicalAddressForPath(path: string): string | null {
  if (path.includes('queens') || path.includes('flushing')) return '141-24 70th Ave, Flushing, NY 11367';
  if (path.includes('suffern')) return '31 Deerwood Road, Suffern, NY';
  return null;
}

export function buildServiceAreaText(city: string): string {
  const nearby = NEARBY_AREAS[city];
  return nearby ? `Serving ${city}, ${nearby}` : `Serving ${city} & Surrounding Areas`;
}

// The active city for local-feel copy: the page's city (location pages) wins,
// then the visitor's IP-detected city, else null (no city known yet).
export function resolveActiveCity(location: LocationData | null, path: string): string | null {
  return cityFromPath(path) || location?.city || null;
}

// Short serving-area label for the slim bar. On a dedicated location page we show
// the real office address; otherwise the visitor's local serving area; otherwise
// the regional fallback. Never drive times, never hub cities.
export function localServiceAreaLabel(location: LocationData | null, path: string): string {
  const address = physicalAddressForPath(path);
  if (address) return address;
  const city = resolveActiveCity(location, path);
  return city ? buildServiceAreaText(city) : 'Serving NY, NJ & CT';
}
