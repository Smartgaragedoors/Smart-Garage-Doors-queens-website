import { memo } from 'react';
import ResponsiveImage from '../base/ResponsiveImage';

function WhyChooseUs() {
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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Your Trusted Garage Door Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to providing the highest quality garage door services with exceptional customer care
          </p>
        </div>

        {/* Main Content: Image and Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1 w-fit mx-auto">
            <div className="relative">
              <ResponsiveImage
                src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/22be8a4aee48d1bbee63b5199aec8007.webp"
                alt="Professional garage door technicians"
                className="w-full max-w-[500px] h-auto rounded-xl shadow-xl"
                width={500}
                height={400}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0 pr-0 lg:pr-8 xl:pr-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WhyChooseUs);