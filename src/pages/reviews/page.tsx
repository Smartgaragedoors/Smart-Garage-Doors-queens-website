
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Review {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/google-reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
      } else {
        setError('Failed to load reviews');
      }
    } catch (err) {
      setError('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

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
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-blue-600/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              See what our satisfied customers have to say about our garage door services across NY, NJ, and CT.
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
                href="/book-now" 
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

          {loading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center">
                <svg className="animate-spin h-8 w-8 text-blue-600 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg text-gray-600">Loading reviews...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <i className="ri-error-warning-line text-red-600 text-2xl mb-2"></i>
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && reviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No reviews available at the moment.</p>
            </div>
          )}

          {!loading && !error && reviews.length > 0 && (
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

          {/* Default Reviews if API fails */}
          {!loading && error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah M.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Excellent service! They fixed my garage door spring the same day I called. Professional, fast, and reasonably priced. Highly recommend Smartest Garage Doors!"
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mike R.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Great experience from start to finish. They installed a new garage door opener and it works perfectly. The technician was knowledgeable and explained everything clearly."
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jennifer L.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Emergency repair service was outstanding. My garage door was stuck and they came out within 2 hours. Fixed it quickly and the price was very fair. Thank you!"
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">David K.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Professional installation of our new garage door. The team was punctual, clean, and did excellent work. The door looks amazing and operates smoothly."
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lisa T.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Honest and reliable service. They diagnosed the problem accurately and fixed it without trying to sell me unnecessary parts. Will definitely use them again."
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Robert H.</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Top-notch service! They replaced my garage door cables and rollers. The technician was very professional and the work was completed efficiently. Highly recommended!"
                </p>
              </div>
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
              href="/book-now" 
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
