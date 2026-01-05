// Geolocation service for detecting visitor location and personalizing content
// Covers 50-mile radius around Queens, NY (40.7282, -73.7949)

export interface LocationData {
  city: string;
  state: string;
  stateCode: string;
  zipCode?: string;
  latitude: number;
  longitude: number;
  distance: number; // Distance from Queens in miles
  serviceAreaPage?: string;
}

export interface DetectedLocation {
  data: LocationData | null;
  isLoading: boolean;
  error: string | null;
}

// Service area mapping within 50 miles of Queens
const QUEENS_COORDS = { lat: 40.7282, lng: -73.7949 };

const SERVICE_AREAS: Array<{
  city: string;
  state: string;
  stateCode: string;
  zipCodes?: string[];
  coords: { lat: number; lng: number };
  serviceAreaPage: string;
}> = [
  // Queens neighborhoods
  { city: 'Queens', state: 'New York', stateCode: 'NY', coords: { lat: 40.7282, lng: -73.7949 }, serviceAreaPage: '/queens-ny/' },
  { city: 'Flushing', state: 'New York', stateCode: 'NY', coords: { lat: 40.7624, lng: -73.8301 }, serviceAreaPage: '/queens-ny/' },
  { city: 'Astoria', state: 'New York', stateCode: 'NY', coords: { lat: 40.7648, lng: -73.9235 }, serviceAreaPage: '/queens-ny/' },
  { city: 'Long Island City', state: 'New York', stateCode: 'NY', coords: { lat: 40.7447, lng: -73.9485 }, serviceAreaPage: '/queens-ny/' },
  { city: 'Forest Hills', state: 'New York', stateCode: 'NY', coords: { lat: 40.7184, lng: -73.8448 }, serviceAreaPage: '/queens-ny/' },
  { city: 'Jamaica', state: 'New York', stateCode: 'NY', coords: { lat: 40.6915, lng: -73.8053 }, serviceAreaPage: '/queens-ny/' },
  
  // Brooklyn
  { city: 'Brooklyn', state: 'New York', stateCode: 'NY', coords: { lat: 40.6782, lng: -73.9442 }, serviceAreaPage: '/brooklyn-ny/' },
  { city: 'Dyker Heights', state: 'New York', stateCode: 'NY', coords: { lat: 40.6189, lng: -74.0126 }, serviceAreaPage: '/brooklyn-ny/' },
  
  // Long Island - Nassau County
  { city: 'Long Island', state: 'New York', stateCode: 'NY', coords: { lat: 40.7891, lng: -73.1350 }, serviceAreaPage: '/long-island-ny/' },
  { city: 'Nassau County', state: 'New York', stateCode: 'NY', coords: { lat: 40.7389, lng: -73.5891 }, serviceAreaPage: '/nassau-county-ny/' },
  { city: 'Suffolk County', state: 'New York', stateCode: 'NY', coords: { lat: 40.8546, lng: -72.4853 }, serviceAreaPage: '/suffolk-county-ny/' },
  
  // Staten Island
  { city: 'Staten Island', state: 'New York', stateCode: 'NY', coords: { lat: 40.5795, lng: -74.1502 }, serviceAreaPage: '/staten-island-ny/' },
  
  // Westchester County
  { city: 'White Plains', state: 'New York', stateCode: 'NY', coords: { lat: 41.0340, lng: -73.7629 }, serviceAreaPage: '/white-plains-ny/' },
  { city: 'New Rochelle', state: 'New York', stateCode: 'NY', coords: { lat: 40.9115, lng: -73.7824 }, serviceAreaPage: '/new-rochelle-ny/' },
  { city: 'Scarsdale', state: 'New York', stateCode: 'NY', coords: { lat: 41.0051, lng: -73.7846 }, serviceAreaPage: '/scarsdale-ny/' },
  { city: 'Suffern', state: 'New York', stateCode: 'NY', coords: { lat: 41.1148, lng: -74.1496 }, serviceAreaPage: '/suffern-ny/' },
  { city: 'Westchester County', state: 'New York', stateCode: 'NY', coords: { lat: 41.1220, lng: -73.7949 }, serviceAreaPage: '/westchester-county-ny/' },
  
  // Connecticut - Fairfield County
  { city: 'Stamford', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.0534, lng: -73.5387 }, serviceAreaPage: '/stamford-ct/' },
  { city: 'Greenwich', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.0262, lng: -73.6282 }, serviceAreaPage: '/greenwich-ct/' },
  { city: 'Darien', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.0787, lng: -73.4693 }, serviceAreaPage: '/darien-ct/' },
  { city: 'New Canaan', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.1468, lng: -73.4948 }, serviceAreaPage: '/new-canaan-ct/' },
  { city: 'Westport', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.1415, lng: -73.3579 }, serviceAreaPage: '/westport-ct/' },
  { city: 'Fairfield', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.1406, lng: -73.2637 }, serviceAreaPage: '/fairfield-ct/' },
  { city: 'Newtown', state: 'Connecticut', stateCode: 'CT', coords: { lat: 41.4148, lng: -73.3026 }, serviceAreaPage: '/newtown-ct/' },
  
  // New Jersey - Bergen County
  { city: 'Teaneck', state: 'New Jersey', stateCode: 'NJ', coords: { lat: 40.8976, lng: -74.0160 }, serviceAreaPage: '/teaneck-nj/' },
  { city: 'Bergen County', state: 'New Jersey', stateCode: 'NJ', coords: { lat: 40.9600, lng: -74.0746 }, serviceAreaPage: '/bergen-county-nj/' },
];

// Calculate distance between two coordinates in miles (Haversine formula)
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find closest service area to given coordinates
function findClosestServiceArea(lat: number, lng: number): LocationData | null {
  let closest: LocationData | null = null;
  let minDistance = Infinity;

  for (const area of SERVICE_AREAS) {
    const distance = calculateDistance(lat, lng, area.coords.lat, area.coords.lng);
    if (distance < minDistance && distance <= 50) {
      minDistance = distance;
      closest = {
        city: area.city,
        state: area.state,
        stateCode: area.stateCode,
        latitude: area.coords.lat,
        longitude: area.coords.lng,
        distance: Math.round(distance * 10) / 10,
        serviceAreaPage: area.serviceAreaPage,
      };
    }
  }

  return closest;
}

// Match location to service area by city/state name
function matchLocationByCity(city: string, state: string, stateCode: string): LocationData | null {
  const normalizedCity = city.toLowerCase().trim();
  const normalizedState = state.toLowerCase().trim();
  const normalizedStateCode = stateCode.toUpperCase().trim();

  for (const area of SERVICE_AREAS) {
    const areaCity = area.city.toLowerCase();
    const areaState = area.state.toLowerCase();
    const areaStateCode = area.stateCode.toUpperCase();

    if (
      (areaCity.includes(normalizedCity) || normalizedCity.includes(areaCity)) &&
      (areaStateCode === normalizedStateCode || areaState === normalizedState)
    ) {
      const distance = calculateDistance(QUEENS_COORDS.lat, QUEENS_COORDS.lng, area.coords.lat, area.coords.lng);
      return {
        city: area.city,
        state: area.state,
        stateCode: area.stateCode,
        latitude: area.coords.lat,
        longitude: area.coords.lng,
        distance: Math.round(distance * 10) / 10,
        serviceAreaPage: area.serviceAreaPage,
      };
    }
  }

  return null;
}

// Detect location using IP geolocation API
export async function detectLocation(): Promise<LocationData | null> {
  try {
    // Check if geolocation is disabled via environment variable
    if (import.meta.env.VITE_DISABLE_GEOLOCATION === 'true') {
      return {
        city: 'Queens',
        state: 'New York',
        stateCode: 'NY',
        latitude: QUEENS_COORDS.lat,
        longitude: QUEENS_COORDS.lng,
        distance: 0,
          serviceAreaPage: '/queens-ny/',
      };
    }

    // Check cache first - extended cache to reduce API calls
    const cached = localStorage.getItem('detected_location');
    if (cached) {
      const cachedData = JSON.parse(cached);
      const cacheTime = cachedData.timestamp;
      const now = Date.now();
      // Cache valid for 7 days (increased from 24 hours to reduce API calls)
      if (now - cacheTime < 7 * 24 * 60 * 60 * 1000) {
        return cachedData.location;
      }
    }

    // Rate limiting: Check if we've made a request recently (within last 5 minutes)
    const lastRequest = localStorage.getItem('geolocation_last_request');
    if (lastRequest) {
      const lastRequestTime = parseInt(lastRequest, 10);
      const now = Date.now();
      // If request was made within last 5 minutes, use cached data or return default
      if (now - lastRequestTime < 5 * 60 * 1000) {
        if (cached) {
          const cachedData = JSON.parse(cached);
          return cachedData.location;
        }
        // Return default without making API call
        return {
          city: 'Queens',
          state: 'New York',
          stateCode: 'NY',
          latitude: QUEENS_COORDS.lat,
          longitude: QUEENS_COORDS.lng,
          distance: 0,
          serviceAreaPage: '/queens-ny/',
        };
      }
    }

    // Record request time for rate limiting
    localStorage.setItem('geolocation_last_request', Date.now().toString());

    // Try multiple free IP geolocation APIs (fallback chain)
    let locationData: LocationData | null = null;

    // Try ip-api.com (free, no key required) with timeout and retry logic
    const maxRetries = 2;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
        
        const response = await fetch('https://ip-api.com/json/?fields=status,message,city,regionName,zip,lat,lon', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          },
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'success') {
          // Try to match by city/state first
          locationData = matchLocationByCity(data.city, data.regionName, data.regionName);
          
          // If no match, use coordinates to find closest
          if (!locationData && data.lat && data.lon) {
            locationData = findClosestServiceArea(data.lat, data.lon);
          }

          if (locationData) {
            locationData.zipCode = data.zip;
            // Cache the result
            localStorage.setItem('detected_location', JSON.stringify({
              location: locationData,
              timestamp: Date.now(),
            }));
            return locationData;
          }
        }
        
        // If we got here, the API returned but no location matched
        break;
      } catch (error) {
        // Don't retry if request was aborted
        if (error instanceof Error && error.name === 'AbortError') {
          break;
        }
        
        // Retry with exponential backoff
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
          continue;
        }
        
        // Silently fail after max retries - will use default location
        if (import.meta.env.DEV) {
          console.warn('ip-api.com failed after retries:', error);
        }
      }
    }

    // Fallback: Try ipgeolocation.io (requires free API key but more reliable)
    // For now, return default Queens location if all APIs fail
    if (!locationData) {
      return {
        city: 'Queens',
        state: 'New York',
        stateCode: 'NY',
        latitude: QUEENS_COORDS.lat,
        longitude: QUEENS_COORDS.lng,
        distance: 0,
        serviceAreaPage: '/queens-ny/',
      };
    }

    return locationData;
  } catch (error) {
    // Silently fail - return default location
    if (process.env.NODE_ENV === 'development') {
      console.error('Location detection failed:', error);
    }
    // Return default Queens location
    return {
      city: 'Queens',
      state: 'New York',
      stateCode: 'NY',
      latitude: QUEENS_COORDS.lat,
      longitude: QUEENS_COORDS.lng,
      distance: 0,
      serviceAreaPage: '/queens-ny/',
    };
  }
}

// Get location display name
export function getLocationDisplayName(location: LocationData | null): string {
  if (!location) return 'Queens, NY';
  return `${location.city}, ${location.stateCode}`;
}

// Get response time estimate based on distance
export function getResponseTime(location: LocationData | null): string {
  if (!location) return '45-60 minutes';
  
  if (location.distance <= 5) return '30-45 minutes';
  if (location.distance <= 15) return '45-60 minutes';
  if (location.distance <= 30) return '60-90 minutes';
  return '90-120 minutes';
}


