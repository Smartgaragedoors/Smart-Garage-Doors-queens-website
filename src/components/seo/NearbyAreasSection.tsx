import { Link } from 'react-router-dom';
import { getRelatedLocations } from '../../utils/internalLinking';

interface NearbyAreasSectionProps {
  /** Current page path (e.g. /stamford-ct/ or /queens-ny/) */
  currentPath: string;
  /** Optional city name for heading (e.g. "Stamford") */
  cityName?: string;
  /** Optional max links to show (default 5) */
  maxLinks?: number;
}

export default function NearbyAreasSection({ 
  currentPath, 
  cityName,
  maxLinks = 5 
}: NearbyAreasSectionProps) {
  const nearbyLinks = getRelatedLocations(currentPath).slice(0, maxLinks);

  if (nearbyLinks.length === 0) return null;

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Also Serving Nearby Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {cityName 
              ? `We provide garage door repair and installation throughout ${cityName} and surrounding communities.`
              : 'We provide garage door services throughout the tri-state area.'}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {nearbyLinks.map((area, index) => (
            <Link
              key={index}
              to={area.url}
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-lg font-medium transition-colors"
            >
              {area.text}
              <i className="ri-arrow-right-line ml-2 text-sm" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
