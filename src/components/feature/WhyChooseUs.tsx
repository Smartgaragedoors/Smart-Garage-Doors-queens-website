import { memo } from 'react';
import CFImage from '../base/CFImage';
import { getCloudflareImage } from '../../data/cloudflareImages';

function WhyChooseUs() {
  const whyImage = getCloudflareImage('whyChooseUs');

  const features = [
    {
      icon: 'ri-time-line',
      title: '24/7 Emergency Calls',
      description: 'When the door is stuck or unsafe, we make it easy to reach a real person and get a real arrival window.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed & Insured',
      description: 'Professional service with the paperwork and accountability serious homeowners expect.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Upfront Quotes',
      description: 'You get the repair recommendation and quote before work begins, so there are no surprise charges.'
    },
    {
      icon: 'ri-star-line',
      title: '475 Google Reviews',
      description: 'A major trust signal earned from real customers who needed quick, reliable garage door help.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Stocked Service Trucks',
      description: 'Common parts are already on the truck, which helps us finish many repairs on the first visit.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Local-Feeling Routing',
      description: 'The brand covers the whole Tri-State area, but the messaging and service pages still feel specific to each location.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Why This Site Should Earn the Call
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Emergency buyers need speed, proof, and clarity. These are the trust signals we want them to see immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="relative order-2 lg:order-1 w-fit mx-auto">
            <div className="relative">
              <CFImage
                id={whyImage.id}
                variant="card"
                alt={whyImage.alt}
                className="w-full max-w-[500px] h-auto rounded-xl shadow-xl"
                width={500}
                height={400}
                sizes="(max-width: 1024px) 100vw, 500px"
                fallbackSrc={whyImage.fallbackSrc}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0 pr-0 lg:pr-8 xl:pr-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`} aria-hidden="true"></i>
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
