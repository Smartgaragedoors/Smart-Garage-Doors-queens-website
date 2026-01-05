import { Link } from 'react-router-dom';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl md:text-[12rem] font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <i className="ri-home-line mr-2"></i>
              Go to Homepage
            </Link>
            <Link
              to="/garage-door-repair/"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <i className="ri-tools-line mr-2"></i>
              Our Services
            </Link>
            <a
              href="tel:914-557-6816"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <i className="ri-phone-line mr-2"></i>
              Call (914) 557-6816
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link to="/garage-door-repair/" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Garage Door Repair
              </Link>
              <Link to="/garage-door-installation/" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Garage Door Installation
              </Link>
              <Link to="/emergency-garage-door-repair/" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Emergency Repairs
              </Link>
              <Link to="/contact" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Contact Us
              </Link>
              <Link to="/spring-replacement/" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Spring Replacement
              </Link>
              <Link to="/queens-ny/" className="text-blue-600 hover:text-orange-500 transition-colors">
                <i className="ri-arrow-right-line mr-2"></i>
                Service Areas
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Need immediate assistance? <a href="tel:914-557-6816" className="text-orange-500 font-semibold hover:text-orange-600">Call us at (914) 557-6816</a> for 24/7 emergency garage door service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}