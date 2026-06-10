// Maps each location page to the dispatch-hub technician who actually covers
// it, for the "Meet your technician" section. Personal, named technicians are
// the strongest trust signal for in-home services — no competitor does this.
// photo is optional: Ben has a real on-the-job photo; add headshots for Luka
// and Yitzi when available and they'll replace the initials avatar.

export interface TechProfile {
  name: string;
  initials: string;
  hub: string;            // where they're based
  photo?: string;         // path or URL; omit to show initials avatar
  photoAlt?: string;
  blurb: string;          // honest, coverage-based copy
}

const LUKA: TechProfile = {
  name: 'Luka',
  initials: 'L',
  hub: 'Brooklyn, NY',
  blurb: 'Based in Brooklyn, Luka covers NYC, Long Island, and the nearby North Shore. His truck carries the most common springs, openers, and parts so most jobs finish in one visit.',
};

const BEN: TechProfile = {
  name: 'Ben',
  initials: 'B',
  hub: 'Suffern, NY',
  photo: '/images/garage-door-repair-technician-ben-smart-garage-doors.jpg',
  photoAlt: 'Ben, Smart Garage Doors technician, working on a garage door installation',
  blurb: 'Based in Suffern, Ben covers Rockland, Westchester, the Hudson Valley, Fairfield County CT, and Northern NJ. He knows these roads — and gives honest arrival windows.',
};

const YITZI: TechProfile = {
  name: 'Yitzi',
  initials: 'Y',
  hub: 'Jackson, NJ',
  blurb: 'Based in Jackson, Yitzi covers Monmouth, Ocean, Middlesex, and the central NJ shore. Fully stocked truck, upfront pricing, and same-day availability on most calls.',
};

const TECH_BY_LOCATION: Record<string, TechProfile> = {
  // Luka — NYC + Long Island
  'brooklyn-ny': LUKA,
  'queens-ny': LUKA,
  'bronx-ny': LUKA,
  'staten-island-ny': LUKA,
  'long-island-ny': LUKA,
  'nassau-county-ny': LUKA,
  'suffolk-county-ny': LUKA,
  'hauppauge-ny': LUKA,
  'smithtown-ny': LUKA,
  // Ben — Hudson Valley, Westchester, CT, North NJ
  'suffern-ny': BEN,
  'westchester-county-ny': BEN,
  'white-plains-ny': BEN,
  'new-rochelle-ny': BEN,
  'scarsdale-ny': BEN,
  'stamford-ct': BEN,
  'greenwich-ct': BEN,
  'darien-ct': BEN,
  'new-canaan-ct': BEN,
  'westport-ct': BEN,
  'norwalk-ct': BEN,
  'fairfield-ct': BEN,
  'newtown-ct': BEN,
  'bergen-county-nj': BEN,
  'paramus-nj': BEN,
  'teaneck-nj': BEN,
  // Yitzi — Central NJ
  'jackson-nj': YITZI,
  'edison-nj': YITZI,
  'elizabeth-nj': YITZI,
};

export function getTechForLocation(locationSlug: string): TechProfile | null {
  const key = locationSlug.replace(/^\/+|\/+$/g, '');
  return TECH_BY_LOCATION[key] ?? null;
}
