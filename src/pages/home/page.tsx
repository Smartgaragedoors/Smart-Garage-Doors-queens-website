import { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useLocation as useRouterLocation } from 'react-router-dom';
import Hero from '../../components/feature/Hero';
import BookingCTABar from '../../components/conversion/BookingCTABar';
import Services from '../../components/feature/Services';
import RecentWork from '../../components/feature/RecentWork';
import VideoSection from '../../components/feature/VideoSection';
import About from '../../components/feature/About';
import WhyChooseUs from '../../components/feature/WhyChooseUs';
import Contact from '../../components/feature/Contact';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import OrganizationSchema from '../../components/seo/OrganizationSchema';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import WebSiteSchema from '../../components/seo/WebSiteSchema';
import { useLocation } from '../../contexts/LocationContext';
import { BUSINESS_INFO } from '../../config/business-info';

const Reviews = lazy(() => import('../../components/feature/Reviews'));

function CoverageStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
          We Come to You — Anywhere in New York, New Jersey, or Connecticut
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          Call us, tell us your city, and we will confirm your technician and give you an honest arrival window.
          No routing centers. No third parties. Your call goes directly to our dispatch.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { city: 'Queens', path: '/queens-ny/' },
            { city: 'Brooklyn', path: '/brooklyn-ny/' },
            { city: 'The Bronx', path: '/bronx-ny/' },
            { city: 'Staten Island', path: '/staten-island-ny/' },
            { city: 'Westchester', path: '/westchester-county-ny/' },
            { city: 'Long Island', path: '/long-island-ny/' },
            { city: 'Suffern', path: '/suffern-ny/' },
            { city: 'Stamford', path: '/stamford-ct/' },
            { city: 'Greenwich', path: '/greenwich-ct/' },
            { city: 'Fairfield', path: '/fairfield-ct/' },
            { city: 'Bergen County', path: '/bergen-county-nj/' },
            { city: 'Jackson NJ', path: '/jackson-nj/' },
          ].map(({ city, path }) => (
            <Link
              key={city}
              to={path}
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:border-orange-300 hover:text-orange-600 transition-colors"
            >
              <i className="ri-map-pin-2-line text-orange-500" aria-hidden="true" />
              {city}
            </Link>
          ))}
          <Link
            to="/service-areas/"
            className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-orange-100 transition-colors"
          >
            View all areas →
          </Link>
        </div>
        <a
          href="tel:+19145576816"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
        >
          <i className="ri-phone-fill" aria-hidden="true" />
          Call (914) 557-6816 — We Answer 24/7
        </a>
        <p className="text-sm text-gray-500 mt-3">
          A real person answers — usually in under 30 seconds.
        </p>
      </div>
    </section>
  );
}

function CommercialStrip() {
  return (
    <section className="bg-blue-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-800/60 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Commercial &amp; Property Management
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            One Door Vendor for Your Whole Portfolio
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Warehouses, loading docks, rolling gates, parking garages, and multi-property buildings —
            with COIs, per-property documentation, and maintenance programs built for facilities teams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <Link
            to="/commercial-garage-door-repair/"
            className="group bg-blue-900/60 border border-blue-800 rounded-2xl p-8 hover:bg-blue-900 hover:border-orange-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
              <i className="ri-building-2-line text-2xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              Commercial Door Repair
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Overhead doors, rolling steel gates, loading docks, high-cycle springs, and commercial
              operators. Priority dispatch — because a dead bay door stops revenue.
            </p>
            <span className="text-orange-400 font-semibold text-sm">Learn more →</span>
          </Link>
          <Link
            to="/property-managers/"
            className="group bg-blue-900/60 border border-blue-800 rounded-2xl p-8 hover:bg-blue-900 hover:border-orange-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
              <i className="ri-community-line text-2xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              For Property Managers
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              One contact for every property. COI per building, photo documentation on every job,
              per-property invoicing, and preventive maintenance across your portfolio.
            </p>
            <span className="text-orange-400 font-semibold text-sm">Set up a vendor account →</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-blue-200">
          <span className="inline-flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-orange-400" aria-hidden="true" />
            COI on request
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-orange-400" aria-hidden="true" />
            Multi-location accounts across NY, NJ &amp; CT
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-orange-400" aria-hidden="true" />
            Maintenance contracts
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-orange-400" aria-hidden="true" />
            24/7 emergency line
          </span>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { location } = useLocation();
  const routerLocation = useRouterLocation();

  useEffect(() => {
    const hash = routerLocation.hash || window.location.hash;
    if (!hash) return;
    const elementId = hash.substring(1);
    const scrollToHash = () => {
      const element = document.getElementById(elementId);
      if (!element) return;
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    };
    requestAnimationFrame(scrollToHash);
  }, [routerLocation.hash, routerLocation.pathname]);

  return (
    <div className="min-h-screen pb-[68px] md:pb-0">
      <DynamicMetaTags
        title={`Garage Door Repair | Same-Day Service | (914) 557-6816 | Smartest Garage Doors`}
        description={`⭐ ${BUSINESS_INFO.aggregateRating.ratingValue} · ${BUSINESS_INFO.aggregateRating.reviewCount} reviews. Same-day garage door repair, spring & opener fix & installation. $0 service call with any repair · licensed & insured · 24/7 — call (914) 557-6816.`}
      />
      <WebSiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema locationName={location?.city} serviceArea={location?.city || 'New York'} />
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-[400px] bg-gray-50" />}>
        <Reviews />
      </Suspense>
      <BookingCTABar
        title="Need Service Today?"
        subtitle="Call us and we will confirm your problem, give you a price, and dispatch the nearest tech."
      />
      <WhyChooseUs />
      <Services />
      <RecentWork />
      <CommercialStrip />
      <VideoSection />
      <About />
      <CoverageStrip />
      <Contact />
      <Footer />
      {/* MobileStickyCTA is rendered globally in App.tsx — rendering it here too stacked two identical bars */}
    </div>
  );
}
