export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img 
              src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/54c27a0f429f46aa3708097b53c43e0e.jpeg" 
              alt="Garage door technicians in queens"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-4">
              <span className="text-orange-500 font-semibold text-lg">About Us</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Smart Garage Doors</h2>
            <p className="text-lg text-gray-600 mb-6">
              Take advantage of our fast and reliable garage door services in Queens, Newark, Hempstead, Long Island & Surrounding NY Areas
            </p>
            <p className="text-gray-600 mb-6">
              Smart Garage Doors is a local garage door company based in NY and serving the surrounding areas. We tackle all kinds of garage door projects for homeowners, from new opener installations to broken track repairs. No matter what you need help with, you can expect us to deliver high-quality garage door services in a rapid and affordable manner. We take great pride in our superior workmanship, quick turnaround times and fair prices.
            </p>
            <p className="text-gray-600">
              Call <a href="tel:914-557-6816" className="text-orange-500 font-semibold hover:text-orange-600">914-557-6816</a> now to speak with our licensed and insured garage door technicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}