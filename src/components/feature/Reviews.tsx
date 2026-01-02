
import { useEffect } from 'react';
import ReviewSchema from '../seo/ReviewSchema';
import { BUSINESS_INFO } from '../../config/business-info';

const Reviews = () => {
  useEffect(() => {
    // Load the Google Reviews widget script if not already loaded
    if (!document.querySelector('script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1 text-green-600">
              <i className="ri-verified-badge-fill"></i>
              <span className="text-sm font-medium">Google Verified</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about our garage door services across New York and Connecticut.
          </p>
        </div>

        {/* Live Google Reviews Widget */}
        <div className="mb-12">
          <div className='sk-ww-google-reviews' data-embed-id='25618359'></div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJucuPoePGzGMRGWWH9YOmAX4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-google-fill mr-2"></i>
              View All Google Reviews
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJucuPoePGzGMRGWWH9YOmAX4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-star-fill mr-2"></i>
              Leave a Review
            </a>
            <a
              href="tel:+19145576816"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
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
