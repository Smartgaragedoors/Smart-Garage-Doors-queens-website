
import Button from '../base/Button';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Quote Icon */}
        <div className="mb-8">
          <img 
            src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/qoute.png" 
            alt=""
            className="w-16 h-16 mx-auto"
            loading="lazy"
            width="64"
            height="64"
            decoding="async"
            fetchpriority="low"
            style={{ aspectRatio: '1 / 1' }}
          />
        </div>

        <h2 className="text-4xl font-bold text-white mb-8">Clients Testimonials</h2>

        {/* Testimonials would be loaded here via external widget */}
        <div className="bg-white/10 rounded-lg p-8 mb-12" style={{ backdropFilter: 'blur(4px)', willChange: 'transform', transform: 'translateZ(0)' }}>
          <p className="text-white text-lg mb-4">
            "Excellent service! The team was professional, punctual, and fixed our garage door quickly. Highly recommend Smart Garage Doors for anyone in need of reliable garage door services."
          </p>
          <div className="text-orange-500 font-semibold">- Satisfied Customer</div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-6">
          A Beautiful And Functional Garage Door Is Within Reach
        </h3>
        <p className="text-xl text-gray-100 mb-8">
          Contact us right away to get garage door repair, replacement or installation services in Flushing, Hempstead & Queens, NY.
        </p>

        <Button size="lg" className="text-lg">
          CONTACT US <span className="ml-2">(914) 557-6816</span>
        </Button>
      </div>
    </section>
  );
}
