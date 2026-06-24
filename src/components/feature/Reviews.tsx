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
    <section id="reviews" className="py-14 md:py-20 bg-gray-50 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '1280px' }}>
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center items-center gap-1.5 mb-3">
            {renderStars(Math.round(parseFloat(BUSINESS_INFO.aggregateRating.ratingValue)))}
            <span className="text-gray-900 font-bold text-lg ml-1">{BUSINESS_INFO.aggregateRating.ratingValue}</span>
            <span className="text-gray-500 text-sm">({BUSINESS_INFO.aggregateRating.reviewCount} reviews on Google)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Homeowners Say After We Leave
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            These are real reviews from people who called us with a real problem. Read what they say about the response, the work, and the price.
          </p>
        </div>

        {/* Mobile: horizontal swipe carousel (one card + a peek of the next) so the
            section stays compact; md+: the familiar responsive grid. */}
        <div className="mb-8 md:mb-12">
          <div
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <div
                key={`${review.author_name}-${review.time}-${index}`}
                className="bg-white rounded-lg shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow snap-start shrink-0 w-[82%] sm:w-[55%] md:w-auto"
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
              </div>
            ))}
          </div>
          {/* Swipe affordance — mobile only */}
          <p className="md:hidden text-center text-xs text-gray-400 mt-3">
            <i className="ri-arrow-left-right-line align-middle mr-1" aria-hidden="true" />
            Swipe to read more reviews
          </p>
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
            Every review above is from a real customer across our service area. We earn them one job at a time.
          </p>
        </div>
      </div>

      {/* aggregateRating schema lives only on LocalBusinessSchema (GSC: one per page) */}
    </section>
  );
};

export default Reviews;
