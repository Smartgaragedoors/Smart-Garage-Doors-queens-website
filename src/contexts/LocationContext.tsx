import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
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

  const loadLocation = async () => {
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
  };

  useEffect(() => {
    loadLocation();
  }, []);

  const locationName = getLocationDisplayName(location);
  const responseTime = getResponseTime(location);

  return (
    <LocationContext.Provider
      value={{
        location,
        locationName,
        responseTime,
        isLoading,
        error,
        refreshLocation: loadLocation,
      }}
    >
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

