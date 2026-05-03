/**
 * Location configuration for service area pages
 * 
 * This file contains data for all service area locations.
 * Existing locations are included for reference and directory page generation.
 * New locations can be added here for template-based page generation.
 */

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: 'NY' | 'NJ' | 'CT';
  county?: string;
  nearbyAreas?: string[];
  neighborhoods?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  serviceAreaText?: string;
  uniqueAngle?: string;
  faqs?: Array<{
    q: string;
    a: string;
  }>;
}

// Existing service area locations (for directory page and reference)
export const existingLocations: Location[] = [
  // New York
  { slug: 'bronx-ny', city: 'Bronx', state: 'New York', stateAbbr: 'NY', county: 'Bronx County' },
  { slug: 'brooklyn-ny', city: 'Brooklyn', state: 'New York', stateAbbr: 'NY', county: 'Kings County' },
  { slug: 'queens-ny', city: 'Queens', state: 'New York', stateAbbr: 'NY', county: 'Queens County' },
  { slug: 'long-island-ny', city: 'Long Island', state: 'New York', stateAbbr: 'NY', county: 'Nassau & Suffolk Counties' },
  { slug: 'staten-island-ny', city: 'Staten Island', state: 'New York', stateAbbr: 'NY', county: 'Richmond County' },
  { slug: 'white-plains-ny', city: 'White Plains', state: 'New York', stateAbbr: 'NY', county: 'Westchester County' },
  { slug: 'new-rochelle-ny', city: 'New Rochelle', state: 'New York', stateAbbr: 'NY', county: 'Westchester County' },
  { slug: 'scarsdale-ny', city: 'Scarsdale', state: 'New York', stateAbbr: 'NY', county: 'Westchester County' },
  { slug: 'suffern-ny', city: 'Suffern', state: 'New York', stateAbbr: 'NY', county: 'Rockland County' },
  { slug: 'hauppauge-ny', city: 'Hauppauge', state: 'New York', stateAbbr: 'NY', county: 'Suffolk County' },
  { slug: 'smithtown-ny', city: 'Smithtown', state: 'New York', stateAbbr: 'NY', county: 'Suffolk County' },
  { slug: 'nassau-county-ny', city: 'Nassau County', state: 'New York', stateAbbr: 'NY', county: 'Nassau County' },
  { slug: 'suffolk-county-ny', city: 'Suffolk County', state: 'New York', stateAbbr: 'NY', county: 'Suffolk County' },
  { slug: 'westchester-county-ny', city: 'Westchester County', state: 'New York', stateAbbr: 'NY', county: 'Westchester County' },
  
  // Connecticut
  { slug: 'stamford-ct', city: 'Stamford', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'greenwich-ct', city: 'Greenwich', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'darien-ct', city: 'Darien', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'new-canaan-ct', city: 'New Canaan', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'westport-ct', city: 'Westport', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'newtown-ct', city: 'Newtown', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  { slug: 'fairfield-ct', city: 'Fairfield', state: 'Connecticut', stateAbbr: 'CT', county: 'Fairfield County' },
  
  // New Jersey
  { slug: 'teaneck-nj', city: 'Teaneck', state: 'New Jersey', stateAbbr: 'NJ', county: 'Bergen County' },
  { slug: 'elizabeth-nj', city: 'Elizabeth', state: 'New Jersey', stateAbbr: 'NJ', county: 'Union County' },
  { slug: 'bergen-county-nj', city: 'Bergen County', state: 'New Jersey', stateAbbr: 'NJ', county: 'Bergen County' },
];

// New locations (for template-based page generation)
// Add new cities here with full data for template rendering
export const newLocations: Location[] = [
  {
    slug: 'paramus-nj',
    city: 'Paramus',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    county: 'Bergen County',
    nearbyAreas: ['Teaneck', 'Bergen County', 'Hackensack'],
    neighborhoods: ['Paramus Center', 'Ridgewood Avenue', 'Century Road', 'Farview Avenue'],
    coordinates: { lat: 40.9445, lng: -74.0754 },
    serviceAreaText: 'Professional garage door services throughout Paramus, New Jersey. We serve residential and commercial properties across Paramus neighborhoods with fast, reliable service.',
    uniqueAngle: 'Paramus is home to major shopping centers and residential communities. Our technicians understand the unique needs of Paramus homeowners, from modern suburban homes to commercial properties.',
    faqs: [
      {
        q: 'How quickly can you respond to garage door emergencies in Paramus?',
        a: 'We provide fast emergency service throughout Paramus. Our technicians are familiar with Paramus neighborhoods and can navigate efficiently to your location — call us and we\'ll give you an honest availability estimate.',
      },
      {
        q: 'Do you service commercial garage doors in Paramus?',
        a: 'Yes, we service both residential and commercial garage doors in Paramus. This includes retail locations, office buildings, and warehouses throughout the area.',
      },
      {
        q: 'What garage door brands do you work with in Paramus?',
        a: 'We service all major garage door brands including LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more. Our technicians are trained on all types of garage door systems.',
      },
      {
        q: 'Do you offer same-day service in Paramus?',
        a: 'Yes, same-day service is available for most non-emergency repairs in Paramus. Call us in the morning and we can often complete your repair the same day.',
      },
    ],
  },
  {
    slug: 'norwalk-ct',
    city: 'Norwalk',
    state: 'Connecticut',
    stateAbbr: 'CT',
    county: 'Fairfield County',
    nearbyAreas: ['Stamford', 'Westport', 'Darien', 'Fairfield'],
    neighborhoods: ['South Norwalk', 'East Norwalk', 'West Norwalk', 'Rowayton', 'Silvermine'],
    coordinates: { lat: 41.1176, lng: -73.4079 },
    serviceAreaText: 'Expert garage door repair and installation services in Norwalk, Connecticut. Serving all Norwalk neighborhoods with professional, reliable service.',
    uniqueAngle: 'Norwalk combines historic charm with modern development. Our technicians are experienced with both older homes requiring careful restoration work and newer properties needing modern garage door solutions.',
    faqs: [
      {
        q: 'Do you service historic homes in Norwalk?',
        a: 'Yes, we have experience working with historic homes throughout Norwalk. We can provide garage door solutions that complement your home\'s architectural style while ensuring modern functionality and safety.',
      },
      {
        q: 'What is your typical response time for Norwalk service calls?',
        a: 'For emergency calls in Norwalk, we dispatch based on technician availability and your location. For scheduled appointments, we offer flexible timing to fit your schedule — call us for an honest availability estimate.',
      },
      {
        q: 'Do you offer garage door installation in Norwalk?',
        a: 'Yes, we provide complete garage door installation services in Norwalk, including new construction projects and door replacements. We work with all major brands and can help you choose the right door for your home.',
      },
    ],
  },
  {
    slug: 'edison-nj',
    city: 'Edison',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    county: 'Middlesex County',
    nearbyAreas: ['Elizabeth', 'Bergen County', 'Paramus', 'Teaneck'],
    neighborhoods: ['Menlo Park', 'Metuchen', 'Highland Park', 'Piscataway', 'Woodbridge'],
    coordinates: { lat: 40.5187, lng: -74.4121 },
    serviceAreaText: 'Professional garage door repair and installation services in Edison, New Jersey. Smartest Garage Doors provides fast, reliable service throughout Edison and surrounding Middlesex County communities.',
    uniqueAngle: 'Edison is a diverse suburban community with a mix of residential neighborhoods and commercial areas. Our technicians understand the varied garage door needs of Edison homeowners, from traditional single-family homes to modern developments.',
    faqs: [
      {
        q: 'How quickly can you respond to garage door emergencies in Edison?',
        a: 'We provide fast emergency service throughout Edison. Our technicians are familiar with Edison neighborhoods and can navigate efficiently to your location — call us and we\'ll give you an honest availability estimate.',
      },
      {
        q: 'Do you service commercial garage doors in Edison?',
        a: 'Yes, we service both residential and commercial garage doors in Edison. This includes retail locations, office buildings, and warehouses throughout the area.',
      },
      {
        q: 'What garage door brands do you work with in Edison?',
        a: 'We service all major garage door brands including LiftMaster, Chamberlain, Genie, Clopay, Wayne Dalton, and more. Our technicians are trained on all types of garage door systems.',
      },
      {
        q: 'Do you offer same-day service in Edison?',
        a: 'Yes, same-day service is available for most non-emergency repairs in Edison. Call us in the morning and we can often complete your repair the same day.',
      },
    ],
  },
  {
    slug: 'jackson-nj',
    city: 'Jackson',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    county: 'Ocean County',
    nearbyAreas: ['Bergen County', 'Teaneck', 'Paramus', 'Elizabeth'],
    neighborhoods: ['Jackson Township', 'Cassville', 'Crawfords Corner', 'Leisure Village', 'Six Flags Area'],
    coordinates: { lat: 40.1204, lng: -74.3587 },
    serviceAreaText: 'Expert garage door repair and installation services in Jackson, New Jersey. Serving Jackson Township and surrounding Ocean County areas with professional, reliable garage door solutions.',
    uniqueAngle: 'Jackson is a growing suburban community with both established neighborhoods and new developments. Our technicians provide garage door services tailored to Jackson\'s diverse housing stock, from family homes to active adult communities.',
    faqs: [
      {
        q: 'Do you serve active adult communities in Jackson?',
        a: 'Yes, we provide garage door services throughout Jackson, including active adult communities like Leisure Village. We understand the specific needs of these communities and work efficiently to minimize disruption.',
      },
      {
        q: 'What is your response time for Jackson service calls?',
        a: 'For emergency calls in Jackson, we typically arrive within 60-90 minutes. For scheduled appointments, we offer flexible timing to accommodate your schedule.',
      },
      {
        q: 'Do you offer garage door installation for new construction in Jackson?',
        a: 'Yes, we provide complete garage door installation services in Jackson, including new construction projects. We work with builders and homeowners to ensure proper installation and warranty coverage.',
      },
      {
        q: 'Are your technicians licensed and insured in New Jersey?',
        a: 'Yes, all our technicians are fully licensed and insured in New Jersey. We maintain proper licensing and carry comprehensive liability insurance for all work performed in Jackson.',
      },
    ],
  },
];

// Helper function to get all locations (existing + new)
export function getAllLocations(): Location[] {
  return [...existingLocations, ...newLocations];
}

// Helper function to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return getAllLocations().find(loc => loc.slug === slug);
}

// Helper function to get locations by state
export function getLocationsByState(stateAbbr: 'NY' | 'NJ' | 'CT'): Location[] {
  return getAllLocations().filter(loc => loc.stateAbbr === stateAbbr);
}
