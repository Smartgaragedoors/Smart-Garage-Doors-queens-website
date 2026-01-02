import { Link } from 'react-router-dom';
import { getServiceAreaLinksForService } from '../../utils/internalLinking';

interface ServiceAreaLinksProps {
  title?: string;
  showDescription?: boolean;
  maxLinks?: number;
}

export default function ServiceAreaLinks({ 
  title = "Service Areas",
  showDescription = true,
  maxLinks = 8
}: ServiceAreaLinksProps) {
  const serviceAreas = getServiceAreaLinksForService('').slice(0, maxLinks);

  if (serviceAreas.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {showDescription && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional garage door services throughout the tri-state area
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {serviceAreas.map((area, index) => (
            <Link
              key={index}
              to={area.url}
              className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 hover:shadow-md transition-all duration-200 group border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {area.text}
                  </h3>
                  {area.description && (
                    <p className="text-xs text-gray-500 mt-1">
                      {area.description}
                    </p>
                  )}
                </div>
                <i className="ri-arrow-right-line text-gray-400 group-hover:text-blue-600 transition-colors ml-2"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

