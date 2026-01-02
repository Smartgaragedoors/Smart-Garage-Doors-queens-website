import { createContext, useContext, useEffect, useState, useMemo, useCallback, ReactNode } from 'react';
import { detectLocation, getLocationDisplayName, getResponseTime, LocationData } from '../services/geolocation';

interface LocationContextType {
  location: LocationData | null;
  locationName: string;
  responseTime: string;
  isLoading: boolean;
  error: string | null;
  refreshLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadLocation = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const detected = await detectLocation();
      setLocation(detected);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to detect location');
      // Set default to Queens on error
      setLocation({
        city: 'Queens',
        state: 'New York',
        stateCode: 'NY',
        latitude: 40.7282,
        longitude: -73.7949,
        distance: 0,
        serviceAreaPage: '/garage-door-repair-flushing-ny/',
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Delay geolocation call to reduce initial load triggers
    // Wait for page to be fully loaded before making API call
    const timer = setTimeout(() => {
      loadLocation();
    }, 1000); // 1 second delay to let page load first
    
    return () => clearTimeout(timer);
  }, [loadLocation]);

  const locationName = useMemo(() => getLocationDisplayName(location), [location]);
  const responseTime = useMemo(() => getResponseTime(location), [location]);

  const contextValue = useMemo(
    () => ({
      location,
      locationName,
      responseTime,
      isLoading,
      error,
      refreshLocation: loadLocation,
    }),
    [location, locationName, responseTime, isLoading, error, loadLocation]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}




