import { useEffect, lazy, Suspense } from 'react';
import { useLocation as useRouterLocation } from 'react-router-dom';
import Hero from '../../components/feature/Hero';
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

// Lazy load below-the-fold components for better initial load performance
const RecentWork = lazy(() => import('../../components/feature/RecentWork'));
const Reviews = lazy(() => import('../../components/feature/Reviews'));

export default function HomePage() {
  const { location } = useLocation();
  const routerLocation = useRouterLocation();

  // Handle hash scrolling after navigation (e.g., from /#about) with a single rAF to reduce reflow noise
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
        title="Garage Door Repair NY NJ CT | 5.0★ Same-Day Service | Smartest Garage Doors"
        description="5.0★ rated, 392 reviews. Same-day garage door repair & installation across NY, NJ & CT. 24/7 emergency service. Licensed & insured. Call (914) 557-6816."
      />
      <WebSiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ServiceAreas />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <RecentWork />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Reviews />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}
