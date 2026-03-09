import ReviewSchema from '../seo/ReviewSchema';
import { BUSINESS_INFO } from '../../config/business-info';
import { STATIC_REVIEWS } from '../../data/staticReviews';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time: number;
}

// Use static reviews (no Supabase/API calls) - sorted newest first, top 6
const reviews: GoogleReview[] = [...STATIC_REVIEWS]
  .sort((a, b) => b.time - a.time)
  .slice(0, 6);

const Reviews = () => {

  const formatReviewDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '1280px' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1 text-green-600">
              <i className="ri-verified-badge-fill" aria-hidden="true"></i>
              <span className="text-sm font-medium">Google Verified</span>
            </div>
            {BUSINESS_INFO.aggregateRating && (
              <div className="flex items-center space-x-1 text-gray-700">
                <div className="flex items-center">
                  {renderStars(Math.round(parseFloat(BUSINESS_INFO.aggregateRating.ratingValue)))}
                </div>
                <span className="text-sm font-medium ml-1">
                  {BUSINESS_INFO.aggregateRating.ratingValue} ({BUSINESS_INFO.aggregateRating.reviewCount} reviews)
                </span>
              </div>
            )}
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about our garage door services across New York and Connecticut.
          </p>
        </div>

        {/* Reviews Display */}
        {reviews.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={`${review.author_name}-${review.time}-${index}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                        loading="lazy"
                        width="48"
                        height="48"
                        style={{ aspectRatio: '1 / 1' }}
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ri-user-line text-blue-600 text-xl" aria-hidden="true"></i>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{review.author_name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {formatReviewDate(review.time)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed line-clamp-4">{review.text}</p>
                  {review.author_url && (
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
                    >
                      Read full review →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJucuPoePGzGMRGWWH9YOmAX4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-google-fill mr-2" aria-hidden="true"></i>
              View All Google Reviews
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJucuPoePGzGMRGWWH9YOmAX4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-star-fill mr-2" aria-hidden="true"></i>
              Leave a Review
            </a>
            <a
              href="tel:+19145576816"
              aria-label="Call Smart Garage Doors from reviews section"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2" aria-hidden="true"></i>
              Call (914) 557-6816
            </a>
          </div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Smart Garage Doors for reliable, professional service. 
            Your feedback helps us continue providing exceptional garage door solutions.
          </p>
        </div>
      </div>

      {/* Enhanced Schema.org structured data for SEO */}
      <ReviewSchema aggregateRating={BUSINESS_INFO.aggregateRating} />
    </section>
  );
};

export default Reviews;
