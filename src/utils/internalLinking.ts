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

// Get nearby service area links
export function getNearbyServiceAreas(currentCity: string): InternalLink[] {
  const serviceAreas: Record<string, InternalLink[]> = {
    'Queens': [
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'Brooklyn': [
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'Stamford': [
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
    ],
    'White Plains': [
      { url: '/suffern-ny/', text: 'Suffern, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
    ],
  };

  return serviceAreas[currentCity] || [
    { url: '/queens-ny/', text: 'Queens, NY' },
    { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
    { url: '/stamford-ct/', text: 'Stamford, CT' },
    { url: '/white-plains-ny/', text: 'White Plains, NY' },
  ];
}

// Get location-specific content suggestions
export function getLocationContext(locationName: string): {
  nearbyAreas: string[];
  serviceDescription: string;
} {
  const contexts: Record<string, { nearbyAreas: string[]; serviceDescription: string }> = {
    'Brooklyn, NY': {
      nearbyAreas: ['Queens', 'Long Island', 'Staten Island', 'Manhattan'],
      serviceDescription: 'serving all Brooklyn neighborhoods including Dyker Heights, Park Slope, Williamsburg, and more'
    },
    'Queens, NY': {
      nearbyAreas: ['Brooklyn', 'Long Island', 'Manhattan', 'Flushing'],
      serviceDescription: 'serving all Queens neighborhoods including Flushing, Astoria, Forest Hills, and more'
    },
    'Stamford, CT': {
      nearbyAreas: ['Greenwich', 'Darien', 'New Canaan', 'Norwalk'],
      serviceDescription: 'serving Stamford and all Fairfield County communities'
    },
    'White Plains, NY': {
      nearbyAreas: ['Yonkers', 'New Rochelle', 'Scarsdale', 'Mount Kisco'],
      serviceDescription: 'serving White Plains and all Westchester County communities'
    },
  };

  return contexts[locationName] || {
    nearbyAreas: ['Queens', 'Brooklyn', 'Long Island', 'Westchester'],
    serviceDescription: 'serving communities throughout the tri-state area'
  };
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
      { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'brooklyn-ny': [
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
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/long-island-ny/', text: 'Long Island, NY' },
      { url: '/suffolk-county-ny/', text: 'Suffolk County, NY' },
      { url: '/hauppauge-ny/', text: 'Hauppauge, NY' },
      { url: '/smithtown-ny/', text: 'Smithtown, NY' },
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
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
    ],
    'westchester-county-ny': [
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/suffern-ny/', text: 'Suffern, NY' },
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
      { url: '/suffern-ny/', text: 'Suffern, NY' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
      { url: '/queens-ny/', text: 'Queens, NY' },
      { url: '/paramus-nj/', text: 'Paramus, NJ' },
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
      { url: '/long-island-ny/', text: 'Long Island, NY' },
    ],
  };

  for (const [key, links] of Object.entries(locationMap)) {
    if (currentLocationPath.includes(key)) {
      return links;
    }
  }

  return [
    { url: '/queens-ny/', text: 'Queens, NY' },
    { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
    { url: '/long-island-ny/', text: 'Long Island, NY' },
    { url: '/stamford-ct/', text: 'Stamford, CT' },
    { url: '/white-plains-ny/', text: 'White Plains, NY' },
  ];
}

