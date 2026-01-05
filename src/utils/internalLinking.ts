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
      url: '/services/maintenance/', 
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
export function getServiceAreaLinksForService(serviceType: string): InternalLink[] {
  // Top service areas to link to from service pages
  const topServiceAreas: InternalLink[] = [
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

  return topServiceAreas;
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
  // Extract location from path
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
      { url: '/staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/nassau-county-ny/', text: 'Nassau County, NY' },
      { url: '/suffolk-county-ny/', text: 'Suffolk County, NY' },
    ],
    'stamford-ct': [
      { url: '/greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/darien-ct/', text: 'Darien, CT' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
      { url: '/westport-ct/', text: 'Westport, CT' },
      { url: '/white-plains-ny/', text: 'White Plains, NY' },
    ],
    'white-plains-ny': [
      { url: '/scarsdale-ny/', text: 'Scarsdale, NY' },
      { url: '/new-rochelle-ny/', text: 'New Rochelle, NY' },
      { url: '/westchester-county-ny/', text: 'Westchester County, NY' },
      { url: '/stamford-ct/', text: 'Stamford, CT' },
      { url: '/suffern-ny/', text: 'Suffern, NY' },
    ],
  };

  // Try to match current path
  for (const [key, links] of Object.entries(locationMap)) {
    if (currentLocationPath.includes(key)) {
      return links;
    }
  }

  // Default: return top locations
  return [
    { url: '/queens-ny/', text: 'Queens, NY' },
    { url: '/brooklyn-ny/', text: 'Brooklyn, NY' },
    { url: '/long-island-ny/', text: 'Long Island, NY' },
    { url: '/stamford-ct/', text: 'Stamford, CT' },
    { url: '/white-plains-ny/', text: 'White Plains, NY' },
  ];
}

