// Internal linking utility for SEO and user navigation

interface InternalLink {
  url: string;
  text: string;
  description?: string;
}

// Get related service links based on current page
export function getRelatedServices(currentPath: string): InternalLink[] {
  const allServices: InternalLink[] = [
    { 
      url: '/garage-door-repair/', 
      text: 'Garage Door Repair',
      description: 'Professional repair services for all garage door issues'
    },
    { 
      url: '/garage-door-installation/', 
      text: 'Garage Door Installation',
      description: 'Expert installation of new garage doors'
    },
    { 
      url: '/emergency-garage-door-repair/', 
      text: 'Emergency Repairs',
      description: '24/7 emergency garage door repair service'
    },
    { 
      url: '/spring-replacement/', 
      text: 'Spring Replacement',
      description: 'Safe professional spring replacement'
    },
    { 
      url: '/opener-repair-installation/', 
      text: 'Opener Repair',
      description: 'Garage door opener repair and installation'
    },
    { 
      url: '/cable-roller-repair/', 
      text: 'Cable & Roller Repair',
      description: 'Cable and roller replacement services'
    },
    { 
      url: '/maintenance/', 
      text: 'Maintenance',
      description: 'Preventive maintenance plans'
    },
    { 
      url: '/services/installation/', 
      text: 'Installation',
      description: 'Professional garage door installation services'
    },
  ];

  // Filter out current service
  return allServices.filter(service => !currentPath.includes(service.url.split('/')[1]));
}

// Get service area links for service pages (incoming links TO location pages)
// serviceType: 'repair' | 'installation' | 'emergency' | 'spring' | 'opener' | 'cable' | 'maintenance' | ''
export function getServiceAreaLinksForService(serviceType: string): InternalLink[] {
  const baseAreas: InternalLink[] = [
    { url: '/queens-ny/', text: 'Queens, NY', description: 'Garage door services in Queens' },
    { url: '/brooklyn-ny/', text: 'Brooklyn, NY', description: 'Garage door services in Brooklyn' },
    { url: '/long-island-ny/', text: 'Long Island, NY', description: 'Garage door services on Long Island' },
    { url: '/staten-island-ny/', text: 'Staten Island, NY', description: 'Garage door services in Staten Island' },
    { url: '/white-plains-ny/', text: 'White Plains, NY', description: 'Garage door services in White Plains' },
    { url: '/stamford-ct/', text: 'Stamford, CT', description: 'Garage door services in Stamford' },
    { url: '/greenwich-ct/', text: 'Greenwich, CT', description: 'Garage door services in Greenwich' },
    { url: '/westchester-county-ny/', text: 'Westchester County, NY', description: 'Garage door services in Westchester County' },
    { url: '/nassau-county-ny/', text: 'Nassau County, NY', description: 'Garage door services in Nassau County' },
    { url: '/suffolk-county-ny/', text: 'Suffolk County, NY', description: 'Garage door services in Suffolk County' },
  ];

  // Service-aware descriptions for better anchor text (natural, not stuffed)
  const serviceDescriptions: Record<string, Record<string, string>> = {
    repair: {
      'queens-ny': 'Garage door repair in Queens',
      'brooklyn-ny': 'Garage door repair in Brooklyn',
      'long-island-ny': 'Garage door repair on Long Island',
      'staten-island-ny': 'Garage door repair in Staten Island',
      'white-plains-ny': 'Garage door repair in White Plains',
      'stamford-ct': 'Garage door repair in Stamford',
      'greenwich-ct': 'Garage door repair in Greenwich',
    },
    emergency: {
      'queens-ny': 'Emergency garage door repair in Queens',
      'brooklyn-ny': 'Emergency garage door repair in Brooklyn',
      'long-island-ny': 'Emergency garage door repair on Long Island',
      'white-plains-ny': 'Emergency garage door repair in White Plains',
      'stamford-ct': 'Emergency garage door repair in Stamford',
    },
    spring: {
      'queens-ny': 'Spring replacement in Queens',
      'brooklyn-ny': 'Spring replacement in Brooklyn',
      'long-island-ny': 'Spring replacement on Long Island',
      'white-plains-ny': 'Spring replacement in White Plains',
      'stamford-ct': 'Spring replacement in Stamford',
    },
    installation: {
      'queens-ny': 'Garage door installation in Queens',
      'brooklyn-ny': 'Garage door installation in Brooklyn',
      'long-island-ny': 'Garage door installation on Long Island',
      'white-plains-ny': 'Garage door installation in White Plains',
      'stamford-ct': 'Garage door installation in Stamford',
    },
    opener: {
      'queens-ny': 'Opener repair in Queens',
      'brooklyn-ny': 'Opener repair in Brooklyn',
      'long-island-ny': 'Opener repair on Long Island',
      'white-plains-ny': 'Opener repair in White Plains',
      'stamford-ct': 'Opener repair in Stamford',
    },
    cable: {
      'queens-ny': 'Cable and roller repair in Queens',
      'brooklyn-ny': 'Cable and roller repair in Brooklyn',
      'long-island-ny': 'Cable and roller repair on Long Island',
      'white-plains-ny': 'Cable and roller repair in White Plains',
      'stamford-ct': 'Cable and roller repair in Stamford',
    },
    maintenance: {
      'queens-ny': 'Garage door maintenance in Queens',
      'brooklyn-ny': 'Garage door maintenance in Brooklyn',
      'long-island-ny': 'Garage door maintenance on Long Island',
      'white-plains-ny': 'Garage door maintenance in White Plains',
      'stamford-ct': 'Garage door maintenance in Stamford',
    },
  };

  const descMap = serviceType ? serviceDescriptions[serviceType] : null;
  if (!descMap) return baseAreas;

  return baseAreas.map(area => {
    const slug = area.url.replace(/^\//, '').replace(/\/$/, ''); // e.g. "queens-ny"
    const customDesc = descMap[slug];
    return customDesc ? { ...area, description: customDesc } : area;
  });
}

// Get service links for location pages (incoming links TO service pages)
export function getServiceLinksForLocation(locationPath: string): InternalLink[] {
  // All services that should be linked from location pages
  const allServices: InternalLink[] = [
    { 
      url: '/garage-door-repair/', 
      text: 'Garage Door Repair',
      description: 'Professional garage door repair services'
    },
    { 
      url: '/garage-door-installation/', 
      text: 'Garage Door Installation',
      description: 'Expert garage door installation'
    },
    { 
      url: '/emergency-garage-door-repair/', 
      text: 'Emergency Repairs',
      description: '24/7 emergency garage door service'
    },
    { 
      url: '/spring-replacement/', 
      text: 'Spring Replacement',
      description: 'Professional spring replacement'
    },
    { 
      url: '/opener-repair-installation/', 
      text: 'Opener Repair',
      description: 'Garage door opener services'
    },
    { 
      url: '/cable-roller-repair/', 
      text: 'Cable & Roller Repair',
      description: 'Cable and roller replacement'
    },
  ];

  return allServices;
}

// Get related location pages (for cross-linking between location pages)
export function getRelatedLocations(currentLocationPath: string): InternalLink[] {
  const locationMap: Record<string, InternalLink[]> = {
    'queens-ny': [
      { url: '/flushing-ny/', text: 'Flushing, NY' },
      { url: '/forest-hills-ny/', text: 'Forest Hills, NY' },
      { url: '/bayside-ny/', text: 'Bayside, NY' },
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
    ],
    'bronx-ny': [
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
    ],
    'brooklyn-ny': [
      { url: '/bronx-ny/', text: 'Bronx, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'long-island-ny': [
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/suffolk-county-ny/', text: 'Suffolk County, NY' },
      { url: '/hauppauge-ny/', text: 'Hauppauge, NY' },
      { url: '/smithtown-ny/', text: 'Smithtown, NY' },
    ],
    'staten-island-ny': [
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
    ],
    'nassau-county-ny': [
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/garden-city-ny/', text: 'Garden City, NY' },
      { url: '/port-washington-ny/', text: 'Port Washington, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
    ],
    'suffolk-county-ny': [
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/hauppauge-ny/', text: 'Hauppauge, NY' },
      { url: '/smithtown-ny/', text: 'Smithtown, NY' },
    ],
    'stamford-ct': [
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'greenwich-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'darien-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/fairfield-ct/', text: 'Fairfield, CT' },
    ],
    'new-canaan-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
    ],
    'westport-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/fairfield-ct/', text: 'Fairfield, CT' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
    ],
    'fairfield-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
    ],
    'newtown-ct': [
      { url: '/fairfield-ct/', text: 'Fairfield, CT' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
    ],
    'white-plains-ny': [
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/suffern-ny/', text: 'Suffern, NY' },
    ],
    'new-rochelle-ny': [
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
    ],
    'scarsdale-ny': [
      { url: '/bronxville-ny/', text: 'Bronxville, NY' },
      { url: '/larchmont-ny/', text: 'Larchmont, NY' },
      { url: '/rye-ny/', text: 'Rye, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/chappaqua-ny/', text: 'Chappaqua, NY' },
    ],
    'westchester-county-ny': [
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/rye-ny/', text: 'Rye, NY' },
      { url: '/bronxville-ny/', text: 'Bronxville, NY' },
      { url: '/chappaqua-ny/', text: 'Chappaqua, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'suffern-ny': [
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
    ],
    'hauppauge-ny': [
      { url: '/smithtown-ny/', text: 'Smithtown, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/suffolk-county-ny/', text: 'Suffolk County, NY' },
    ],
    'smithtown-ny': [
      { url: '/hauppauge-ny/', text: 'Hauppauge, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/suffolk-county-ny/', text: 'Suffolk County, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
    ],
    'elizabeth-nj': [
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
    ],
    'bergen-county-nj': [
      { url: '/ridgewood-nj/', text: 'Ridgewood, NJ' },
      { url: '/tenafly-nj/', text: 'Tenafly, NJ' },
      { url: '/paramus-nj/', text: 'Paramus, NJ' },
      { url: '/suffern-ny/', text: 'Suffern, NY' },
    ],
    'teaneck-nj': [
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/paramus-nj/', text: 'Paramus, NJ' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'paramus-nj': [
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'norwalk-ct': [
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/fairfield-ct/', text: 'Fairfield, CT' },
    ],
    'edison-nj': [
      { url: '/elizabeth-nj/', text: 'Elizabeth, NJ' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/queens-ny/', text: 'Queens, NY' },
    ],
    'jackson-nj': [
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/elizabeth-nj/', text: 'Elizabeth, NJ' },
      { url: '/rumson-nj/', text: 'Rumson, NJ' },
      { url: '/holmdel-nj/', text: 'Holmdel, NJ' },
    ],
    // Premium-market cluster (Tier 1 rollout)
    'flushing-ny': [
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/forest-hills-ny/', text: 'Forest Hills, NY' },
      { url: '/bayside-ny/', text: 'Bayside, NY' },
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
    ],
    'forest-hills-ny': [
      { url: '/jamaica-estates-ny/', text: 'Jamaica Estates, NY' },
      { url: '/flushing-ny/', text: 'Flushing, NY' },
      { url: '/bayside-ny/', text: 'Bayside, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
    ],
    'bayside-ny': [
      { url: '/whitestone-ny/', text: 'Whitestone, NY' },
      { url: '/flushing-ny/', text: 'Flushing, NY' },
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
    ],
    'great-neck-ny': [
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/port-washington-ny/', text: 'Port Washington, NY' },
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/bayside-ny/', text: 'Bayside, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
    ],
    'manhasset-ny': [
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/port-washington-ny/', text: 'Port Washington, NY' },
      { url: '/garden-city-ny/', text: 'Garden City, NY' },
    ],
    'roslyn-ny': [
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/old-westbury-ny/', text: 'Old Westbury, NY' },
      { url: '/port-washington-ny/', text: 'Port Washington, NY' },
      { url: '/syosset-ny/', text: 'Syosset, NY' },
    ],
    'port-washington-ny': [
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
    ],
    'garden-city-ny': [
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
    ],
    'rye-ny': [
      { url: '/harrison-ny/', text: 'Harrison, NY' },
      { url: '/mamaroneck-ny/', text: 'Mamaroneck, NY' },
      { url: '/larchmont-ny/', text: 'Larchmont, NY' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
    ],
    'bronxville-ny': [
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/larchmont-ny/', text: 'Larchmont, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
    ],
    'larchmont-ny': [
      { url: '/mamaroneck-ny/', text: 'Mamaroneck, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/rye-ny/', text: 'Rye, NY' },
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
    ],
    'chappaqua-ny': [
      { url: '/armonk-ny/', text: 'Armonk, NY' },
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
    ],
    'ridgewood-nj': [
      { url: '/paramus-nj/', text: 'Paramus, NJ' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/suffern-ny/', text: 'Suffern, NY' },
      { url: '/tenafly-nj/', text: 'Tenafly, NJ' },
    ],
    'tenafly-nj': [
      { url: '/alpine-nj/', text: 'Alpine, NJ' },
      { url: '/fort-lee-nj/', text: 'Fort Lee, NJ' },
      { url: '/teaneck-nj/', text: 'Teaneck, NJ' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
    ],
    'rumson-nj': [
      { url: '/red-bank-nj/', text: 'Red Bank, NJ' },
      { url: '/holmdel-nj/', text: 'Holmdel, NJ' },
      { url: '/colts-neck-nj/', text: 'Colts Neck, NJ' },
      { url: '/jackson-nj/', text: 'Jackson, NJ' },
    ],
    'holmdel-nj': [
      { url: '/rumson-nj/', text: 'Rumson, NJ' },
      { url: '/colts-neck-nj/', text: 'Colts Neck, NJ' },
      { url: '/red-bank-nj/', text: 'Red Bank, NJ' },
      { url: '/jackson-nj/', text: 'Jackson, NJ' },
    ],
    // Premium-market cluster (Wave 2)
    'whitestone-ny': [
      { url: '/bayside-ny/', text: 'Bayside, NY' },
      { url: '/flushing-ny/', text: 'Flushing, NY' },
      { url: '/great-neck-ny/', text: 'Great Neck, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
    ],
    'jamaica-estates-ny': [
      { url: '/forest-hills-ny/', text: 'Forest Hills, NY' },
      { url: '/flushing-ny/', text: 'Flushing, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/garden-city-ny/', text: 'Garden City, NY' },
    ],
    'syosset-ny': [
      { url: '/oyster-bay-ny/', text: 'Oyster Bay, NY' },
      { url: '/old-westbury-ny/', text: 'Old Westbury, NY' },
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
    ],
    'oyster-bay-ny': [
      { url: '/syosset-ny/', text: 'Syosset, NY' },
      { url: '/old-westbury-ny/', text: 'Old Westbury, NY' },
      { url: '/port-washington-ny/', text: 'Port Washington, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
    ],
    'rockville-centre-ny': [
      { url: '/garden-city-ny/', text: 'Garden City, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
    ],
    'old-westbury-ny': [
      { url: '/roslyn-ny/', text: 'Roslyn, NY' },
      { url: '/syosset-ny/', text: 'Syosset, NY' },
      { url: '/manhasset-ny/', text: 'Manhasset, NY' },
      { url: '/garden-city-ny/', text: 'Garden City, NY' },
    ],
    'mamaroneck-ny': [
      { url: '/larchmont-ny/', text: 'Larchmont, NY' },
      { url: '/rye-ny/', text: 'Rye, NY' },
      { url: '/harrison-ny/', text: 'Harrison, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
    ],
    'harrison-ny': [
      { url: '/rye-ny/', text: 'Rye, NY' },
      { url: '/mamaroneck-ny/', text: 'Mamaroneck, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
    ],
    'armonk-ny': [
      { url: '/chappaqua-ny/', text: 'Chappaqua, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
    ],
    'alpine-nj': [
      { url: '/tenafly-nj/', text: 'Tenafly, NJ' },
      { url: '/fort-lee-nj/', text: 'Fort Lee, NJ' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
      { url: '/ridgewood-nj/', text: 'Ridgewood, NJ' },
    ],
    'fort-lee-nj': [
      { url: '/alpine-nj/', text: 'Alpine, NJ' },
      { url: '/tenafly-nj/', text: 'Tenafly, NJ' },
      { url: '/teaneck-nj/', text: 'Teaneck, NJ' },
      { url: '/bergen-county-nj/', text: 'Bergen County, NJ' },
    ],
    'colts-neck-nj': [
      { url: '/holmdel-nj/', text: 'Holmdel, NJ' },
      { url: '/red-bank-nj/', text: 'Red Bank, NJ' },
      { url: '/rumson-nj/', text: 'Rumson, NJ' },
      { url: '/jackson-nj/', text: 'Jackson, NJ' },
    ],
    'red-bank-nj': [
      { url: '/rumson-nj/', text: 'Rumson, NJ' },
      { url: '/holmdel-nj/', text: 'Holmdel, NJ' },
      { url: '/colts-neck-nj/', text: 'Colts Neck, NJ' },
      { url: '/jackson-nj/', text: 'Jackson, NJ' },
    ],
  };

  for (const [key, links] of Object.entries(locationMap)) {
    if (currentLocationPath.includes(key)) {
      return links;
    }
  }

  return [
    { url: '/bronx-ny/', text: 'Bronx, NY' },
    { url: '/queens-ny/', text: 'Queens, NY' },
    { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
    { url: '/long-island-ny/', text: 'Long Island, NY' },
    { url: '/stamford-ct/', text: 'Stamford, CT' },
    { url: '/white-plains-ny/', text: 'White Plains, NY' },
  ];
}

