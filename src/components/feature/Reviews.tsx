import ReviewSchema from '../seo/ReviewSchema';
import { BUSINESS_INFO } from '../../config/business-info';
import { STATIC_REVIEWS } from '../../data/staticReviews';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
}

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
            Tri-State Coverage With Local Reviews That Feel Close to Home
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6 flex-wrap">
            <div className="flex items-center space-x-1 text-gray-700">
              <div className="flex items-center">
                {renderStars(Math.round(parseFloat(BUSINESS_INFO.aggregateRating.ratingValue)))}
              </div>
              <span className="text-sm font-medium ml-1">
                {BUSINESS_INFO.aggregateRating.ratingValue} ({BUSINESS_INFO.aggregateRating.reviewCount} reviews)
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real customer feedback from homeowners across Queens, Brooklyn, Westchester, Long Island, and surrounding Tri-State service areas.
          </p>
        </div>

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
                <p className="text-gray-600 leading-relaxed line-clamp-5">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={BUSINESS_INFO.socialMedia.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-google-fill mr-2" aria-hidden="true"></i>
              View All Google Reviews
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
            We want visitors to see that while the brand serves the wider region, the service still feels local, responsive, and accountable.
          </p>
        </div>
      </div>

      <ReviewSchema aggregateRating={BUSINESS_INFO.aggregateRating} />
    </section>
  );
};

export default Reviews;
