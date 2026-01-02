export default function WhyChooseUs() {
  const features = [
    {
      icon: 'ri-time-line',
      title: '24/7 Emergency Service',
      description: 'Available around the clock for emergency repairs. We respond quickly when you need us most.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured technicians. Your property and safety are protected.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with no hidden fees. Quality service at affordable rates.'
    },
    {
      icon: 'ri-star-line',
      title: '15+ Years Experience',
      description: 'Over 15 years serving NY, NJ & CT. Trusted by thousands of satisfied customers.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Expert Technicians',
      description: 'Highly trained professionals with expertise in all garage door brands and models.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Same-Day Service',
      description: 'Fast response times with same-day service available. We get the job done right, fast.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">
            Your Trusted Garage Door Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality garage door services with exceptional customer care
          </p>
        </div>

        {/* Two column layout with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative overflow-hidden">
            <img 
              src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/22be8a4aee48d1bbee63b5199aec8007.webp"
              alt="Professional garage door technicians"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="absolute bottom-0 right-0 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}