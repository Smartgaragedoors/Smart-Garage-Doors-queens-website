import { useEffect, useRef } from 'react';

interface ServiceLocation {
  name: string;
  lat: number;
  lng: number;
}

interface ServiceAreasMapProps {
  locations: ServiceLocation[];
}

export default function ServiceAreasMap({ locations }: ServiceAreasMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create Google Maps URL with all locations
    // Using Google Maps with multiple markers via URL
    // This creates a map showing all service locations
    if (mapRef.current) {
      // Calculate center point (average of all locations)
      const avgLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
      const avgLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
      
      // For now, use Google Maps embed showing the region
      // The map will show the area covering all locations
      const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3022.6!2d${avgLng}!3d${avgLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v${Date.now()}`;
      
      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = mapUrl;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.title = 'Smart Garage Doors Service Areas Map';
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, [locations]);

  return (
    <div className="relative">
      <div ref={mapRef} className="w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-200"></div>
    </div>
  );
}

