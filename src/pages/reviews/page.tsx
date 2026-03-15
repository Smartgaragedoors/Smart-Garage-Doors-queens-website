import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';
import { STATIC_REVIEWS } from '../../data/staticReviews';

export default function ReviewsPage() {
  const reviews = STATIC_REVIEWS;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Customer Reviews | 5-Star Garage Door Service NY NJ CT | Smartest Garage Doors"
        description="Read real customer reviews for Smartest Garage Doors. 5.0 star rating with hundreds of verified reviews across New York, New Jersey & Connecticut for repair and installation."
        canonical={buildCanonical('/reviews')}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-blue-600/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              See what our satisfied customers have to say about our garage door services across NY, NJ, and CT.
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-orange-100 font-semibold">
              Rated {BUSINESS_INFO.aggregateRating.ratingValue}★ with {BUSINESS_INFO.aggregateRating.reviewCount}+ verified reviews across the tri-state area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+19145576816" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </a>
              <a 
                href="/book-now/" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line mr-2"></i>
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read genuine reviews from our satisfied customers who have experienced our professional garage door services.
            </p>
          </div>

          {reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {review.profile_photo_url ? (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-user-line text-blue-600 text-xl"></i>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {formatDate(review.time)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Our 5-Star Service
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who trust Smartest Garage Doors for all their garage door needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Now: (914) 557-6816
            </a>
            <a 
              href="/book-now/" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
