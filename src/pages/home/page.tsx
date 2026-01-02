import { useEffect, lazy, Suspense, useMemo } from 'react';
import { useLocation as useRouterLocation } from 'react-router-dom';
import Hero from '../../components/feature/Hero';
import Services from '../../components/feature/Services';
import About from '../../components/feature/About';
import Header from '../../components/feature/Header';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import OrganizationSchema from '../../components/seo/OrganizationSchema';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import { useLocation } from '../../contexts/LocationContext';
import { BUSINESS_INFO } from '../../config/business-info';
import { PageLoadingSkeleton } from '../../components/base/LoadingSkeleton';
import ErrorBoundary from '../../components/ErrorBoundary';

// Lazy load below-the-fold components for better initial load performance
const WhyChooseUs = lazy(() => import('../../components/feature/WhyChooseUs'));
const ServiceAreas = lazy(() => import('../../components/feature/ServiceAreas'));
const RecentWork = lazy(() => import('../../components/feature/RecentWork'));
const Reviews = lazy(() => import('../../components/feature/Reviews'));
const Contact = lazy(() => import('../../components/feature/Contact'));
const Footer = lazy(() => import('../../components/feature/Footer'));

export default function HomePage() {
  const { location } = useLocation();
  const routerLocation = useRouterLocation();
  const siteUrl = BUSINESS_INFO.website;

  // Handle hash scrolling after navigation (e.g., from /#about)
  useEffect(() => {
    // Check both React Router location hash and window.location.hash (for page reloads)
    const hash = routerLocation.hash || window.location.hash;

    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      
      // Function to scroll to the element
      const scrollToHash = () => {
        const element = document.getElementById(elementId);
        
        if (element) {
          // Calculate position with offset for sticky header (approximately 150px)
          const headerOffset = 150;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          
          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Wait for DOM to be ready - use requestAnimationFrame for better timing
      const attemptScroll = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToHash();
          });
        });
      };

      // Try immediately, and also after a delay to catch late-loading content
      attemptScroll();
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        requestAnimationFrame(attemptScroll);
      });
      // Fallback timeout for late-loading content
      setTimeout(attemptScroll, 300);
    }
  }, [routerLocation.hash, routerLocation.pathname]);

  const schemaData = useMemo(() => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "legalName": BUSINESS_INFO.legalName,
      "image": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/4d43fd0bc8f747590e796db153cdd63c.png",
      "@id": siteUrl,
      "url": siteUrl,
      "telephone": BUSINESS_INFO.phoneFormatted,
      "priceRange": BUSINESS_INFO.priceRange,
      "paymentAccepted": BUSINESS_INFO.paymentAccepted.join(", "),
      "currenciesAccepted": BUSINESS_INFO.currenciesAccepted,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.addresses[0].streetAddress,
        "addressLocality": BUSINESS_INFO.addresses[0].addressLocality,
        "addressRegion": BUSINESS_INFO.addresses[0].addressRegion,
        "postalCode": BUSINESS_INFO.addresses[0].postalCode,
        "addressCountry": BUSINESS_INFO.addresses[0].addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location?.latitude || BUSINESS_INFO.addresses[0].latitude,
        "longitude": location?.longitude || BUSINESS_INFO.addresses[0].longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": BUSINESS_INFO.openingHours.monday.opens,
          "closes": BUSINESS_INFO.openingHours.monday.closes
        }
      ],
      "sameAs": [
        BUSINESS_INFO.socialMedia.facebook,
        BUSINESS_INFO.socialMedia.instagram,
        BUSINESS_INFO.socialMedia.googleMaps
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": BUSINESS_INFO.aggregateRating.ratingValue,
        "reviewCount": BUSINESS_INFO.aggregateRating.reviewCount,
        "bestRating": BUSINESS_INFO.aggregateRating.bestRating,
        "worstRating": BUSINESS_INFO.aggregateRating.worstRating
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "New York"
        },
        {
          "@type": "State",
          "name": "New York"
        },
        {
          "@type": "State",
          "name": "Connecticut"
        },
        {
          "@type": "State",
          "name": "New Jersey"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Repair",
              "description": "Professional garage door repair services including spring replacement, cable repair, and track alignment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Installation",
              "description": "Complete garage door installation services with professional setup and warranty"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Opener Repair",
              "description": "Repair and installation of garage door openers including chain drive, belt drive, and wall mount systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Service",
              "description": "24/7 emergency garage door repair services for urgent situations"
            }
          }
        ]
      }
  }), [location, siteUrl]);

  useEffect(() => {
    // Add Schema.org JSON-LD with location-aware data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [schemaData]);

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="absolute left-[-9999px] focus:left-4 focus:top-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Skip to main content
      </a>
      <DynamicMetaTags />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[400px]" />}>
            <WhyChooseUs />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[400px]" />}>
            <ServiceAreas />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[400px]" />}>
            <RecentWork />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[400px]" />}>
            <Reviews />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[400px]" />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<PageLoadingSkeleton height="min-h-[200px]" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}
