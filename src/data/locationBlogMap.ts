// Maps location-page slugs to relevant blog guides so every location page links
// to its local content (and vice versa) — topical-cluster internal linking.
// Locations without a dedicated local guide fall back to the general guides.

export interface BlogGuideLink {
  slug: string; // blog post slug (no /blog/ prefix)
  title: string;
}

const GENERAL_GUIDES: BlogGuideLink[] = [
  { slug: 'garage-door-repair-cost-guide-2025', title: 'Garage Door Repair Cost Guide' },
  { slug: 'signs-your-garage-door-spring-needs-replacement', title: 'Signs Your Spring Needs Replacement' },
  { slug: 'emergency-garage-door-repair-guide', title: 'Emergency Garage Door Repair Guide' },
];

const LOCAL_GUIDES: Record<string, BlogGuideLink[]> = {
  'queens-ny': [{ slug: 'queens-garage-door-repair-cost', title: 'Garage Door Repair Cost in Queens' }],
  'flushing-ny': [{ slug: 'flushing-ny-garage-door-repair', title: 'Garage Door Repair in Flushing, NY' }],
  'brooklyn-ny': [{ slug: 'brooklyn-garage-door-repair-cost', title: 'Garage Door Repair Cost in Brooklyn' }],
  'staten-island-ny': [{ slug: 'staten-island-garage-door-repair', title: 'Staten Island Garage Door Repair Guide' }],
  'long-island-ny': [{ slug: 'long-island-garage-door-repair', title: 'Long Island Garage Door Repair Guide' }],
  'nassau-county-ny': [{ slug: 'long-island-garage-door-repair', title: 'Long Island Garage Door Repair Guide' }],
  'suffolk-county-ny': [{ slug: 'long-island-garage-door-repair', title: 'Long Island Garage Door Repair Guide' }],
  'hauppauge-ny': [{ slug: 'long-island-garage-door-repair', title: 'Long Island Garage Door Repair Guide' }],
  'smithtown-ny': [{ slug: 'long-island-garage-door-repair', title: 'Long Island Garage Door Repair Guide' }],
  'white-plains-ny': [{ slug: 'white-plains-ny-garage-door-service', title: 'White Plains Garage Door Service Guide' }],
  'westchester-county-ny': [{ slug: 'westchester-county-garage-door-service', title: 'Westchester County Garage Door Guide' }],
  'new-rochelle-ny': [{ slug: 'westchester-county-garage-door-service', title: 'Westchester County Garage Door Guide' }],
  'scarsdale-ny': [{ slug: 'westchester-county-garage-door-service', title: 'Westchester County Garage Door Guide' }],
  'suffern-ny': [{ slug: 'suffern-ny-garage-door-service', title: 'Suffern Garage Door Service Guide' }],
  'stamford-ct': [{ slug: 'stamford-ct-garage-door-repair', title: 'Stamford Garage Door Repair Guide' }],
  'greenwich-ct': [{ slug: 'greenwich-ct-garage-door-repair', title: 'Greenwich Garage Door Repair Guide' }],
  'fairfield-ct': [{ slug: 'fairfield-ct-garage-door-service', title: 'Fairfield Garage Door Service Guide' }],
  'darien-ct': [{ slug: 'darien-ct-garage-door-repair', title: 'Darien Garage Door Repair Guide' }],
  'norwalk-ct': [{ slug: 'fairfield-ct-garage-door-service', title: 'Fairfield County Garage Door Guide' }],
  'westport-ct': [{ slug: 'fairfield-ct-garage-door-service', title: 'Fairfield County Garage Door Guide' }],
  'new-canaan-ct': [{ slug: 'darien-ct-garage-door-repair', title: 'Darien & New Canaan Garage Door Guide' }],
  'newtown-ct': [{ slug: 'fairfield-ct-garage-door-service', title: 'Fairfield County Garage Door Guide' }],
};

/** Returns up to 3 guide links for a location page: local guides first, padded with general guides. */
export function getGuidesForLocation(locationSlug: string): BlogGuideLink[] {
  const key = locationSlug.replace(/^\/+|\/+$/g, '');
  const local = LOCAL_GUIDES[key] || [];
  const padded = [...local];
  for (const g of GENERAL_GUIDES) {
    if (padded.length >= 3) break;
    if (!padded.some((p) => p.slug === g.slug)) padded.push(g);
  }
  return padded.slice(0, 3);
}
