import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getRelatedServices } from '../../utils/internalLinking';

interface RelatedServicesProps {
  title?: string;
  showDescription?: boolean;
}

export default function RelatedServices({ 
  title = "Related Services",
  showDescription = true 
}: RelatedServicesProps) {
  const location = useLocation();
  const relatedServices = getRelatedServices(location.pathname);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {showDescription && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our other professional garage door services
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.slice(0, 6).map((service, index) => (
            <Link
              key={index}
              to={service.url}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-orange-500 transition-colors">
                  {service.text}
                </h3>
                <i className="ri-arrow-right-line text-blue-600 group-hover:text-orange-500 transition-colors text-xl"></i>
              </div>
              {service.description && (
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




