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
      { url: '/garage-door-repair-brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/garage-door-repair-long-island-ny/', text: 'Long Island, NY' },
      { url: '/garage-door-repair-staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/garage-door-repair-white-plains-ny/', text: 'White Plains, NY' },
    ],
    'Brooklyn': [
      { url: '/garage-door-repair-flushing-ny/', text: 'Queens, NY' },
      { url: '/garage-door-repair-long-island-ny/', text: 'Long Island, NY' },
      { url: '/garage-door-repair-staten-island-ny/', text: 'Staten Island, NY' },
      { url: '/garage-door-repair-white-plains-ny/', text: 'White Plains, NY' },
    ],
    'Stamford': [
      { url: '/garage-door-repair-greenwich-ct/', text: 'Greenwich, CT' },
      { url: '/garage-door-repair-darien-ct/', text: 'Darien, CT' },
      { url: '/garage-door-repair-white-plains-ny/', text: 'White Plains, NY' },
      { url: '/new-canaan-ct/', text: 'New Canaan, CT' },
    ],
    'White Plains': [
      { url: '/garage-door-repair-suffern-ny/', text: 'Suffern, NY' },
      { url: '/garage-door-repair-stamford-ct/', text: 'Stamford, CT' },
      { url: '/garage-door-repair-brooklyn-ny/', text: 'Brooklyn, NY' },
      { url: '/garage-door-repair-greenwich-ct/', text: 'Greenwich, CT' },
    ],
  };

  return serviceAreas[currentCity] || [
    { url: '/garage-door-repair-flushing-ny/', text: 'Queens, NY' },
    { url: '/garage-door-repair-brooklyn-ny/', text: 'Brooklyn, NY' },
    { url: '/garage-door-repair-stamford-ct/', text: 'Stamford, CT' },
    { url: '/garage-door-repair-white-plains-ny/', text: 'White Plains, NY' },
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

