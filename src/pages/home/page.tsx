import { useEffect, lazy, Suspense } from 'react';
import { useLocation as useRouterLocation } from 'react-router-dom';
import Hero from '../../components/feature/Hero';
import BookingCTABar from '../../components/conversion/BookingCTABar';
import Services from '../../components/feature/Services';
import About from '../../components/feature/About';
import WhyChooseUs from '../../components/feature/WhyChooseUs';
import ServiceAreas from '../../components/feature/ServiceAreas';
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
    <div className="min-h-screen">
      <DynamicMetaTags
        title={`NYC Metro & Tri-State Garage Door Repair | ${BUSINESS_INFO.aggregateRating.reviewCount} Reviews | Smartest Garage Doors`}
        description={`24/7 emergency garage door repair with dispatch from Brooklyn, Suffern, and Jackson, NJ—covering the NYC metro, Long Island, Westchester, Fairfield County CT, and Northern & Central NJ. ${BUSINESS_INFO.aggregateRating.reviewCount}+ Google reviews. Licensed & insured. Call (914) 557-6816.`}
      />
      <WebSiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema locationName={location?.city} serviceArea={location?.city || 'New York'} />
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Reviews />
      </Suspense>
      <BookingCTABar
        title="Need Service Today?"
        subtitle="Call first for urgent issues. We will confirm the problem, give you a clear next step, and dispatch as quickly as possible."
      />
      <Services />
      <WhyChooseUs />
      <About />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  );
}
