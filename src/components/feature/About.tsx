import { memo } from 'react';
import ResponsiveImage from '../base/ResponsiveImage';

function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image with decorative elements */}
          <div className="relative order-2 lg:order-1 w-fit mx-auto">
            <div className="relative">
              <ResponsiveImage
                src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/54c27a0f429f46aa3708097b53c43e0e.jpeg"
                alt="Professional garage door technicians performing repair service in Queens, NY. Licensed and insured garage door specialists with years of experience."
                className="w-full max-w-[500px] h-auto rounded-xl shadow-xl"
                width={500}
                height={400}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left pr-0 lg:pr-8 xl:pr-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-4">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Smart Garage Doors
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Take advantage of our fast and reliable garage door services across Queens, Brooklyn, Long Island, Westchester County, New Jersey, and Connecticut. With multiple service locations, we provide quick, professional service throughout the tri-state area.
              </p>
              <p>
                Smart Garage Doors operates from multiple service locations across NY, NJ & CT, allowing us to serve customers throughout the region with fast response times. We tackle all kinds of garage door projects for homeowners, from new opener installations to broken track repairs.
              </p>
              <p>
                Whether you're in Queens, Brooklyn, Stamford, White Plains, or any surrounding community, our local technicians can reach you quickly. We take great pride in our superior workmanship, quick turnaround times and fair prices.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-blue-900">Ready to get started?</span>
              </p>
              <a 
                href="tel:914-557-6816" 
                className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-600 transition-colors"
              >
                <i className="ri-phone-line mr-2"></i>
                914-557-6816
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);