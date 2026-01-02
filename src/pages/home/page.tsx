import { useEffect } from 'react';
import { useLocation as useRouterLocation } from 'react-router-dom';
import Hero from '../../components/feature/Hero';
import Services from '../../components/feature/Services';
import About from '../../components/feature/About';
import WhyChooseUs from '../../components/feature/WhyChooseUs';
import ServiceAreas from '../../components/feature/ServiceAreas';
import RecentWork from '../../components/feature/RecentWork';
import Reviews from '../../components/feature/Reviews';
import Contact from '../../components/feature/Contact';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { useLocation } from '../../contexts/LocationContext';
import { BUSINESS_INFO } from '../../config/business-info';

export default function HomePage() {
  const { location } = useLocation();
  const routerLocation = useRouterLocation();
  const siteUrl = BUSINESS_INFO.website;

  // Handle hash scrolling after navigation (e.g., from /#about)
  useEffect(() => {
    // #region agent log
    const hash = routerLocation.hash;
    fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Hash scroll effect triggered',data:{hash,pathname:routerLocation.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion agent log

    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Looking for element with hash',data:{elementId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion agent log
      
      // Wait for the next frame to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(elementId);
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Element found check',data:{elementId,elementFound:!!element},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion agent log
        
        if (element) {
          // #region agent log
          const scrollYBefore = window.scrollY;
          fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Scrolling to element',data:{elementId,scrollYBefore,elementTop:element.offsetTop},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
          // #endregion agent log
          
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // #region agent log
          setTimeout(() => {
            const scrollYAfter = window.scrollY;
            fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Scroll completed',data:{elementId,scrollYAfter,scrollYBefore},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
          }, 500);
          // #endregion agent log
        } else {
          // #region agent log
          fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HomePage.tsx:hash-scroll',message:'Element not found for hash',data:{elementId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
          // #endregion agent log
        }
      }, 100);
    }
  }, [routerLocation.hash, routerLocation.pathname]);

  useEffect(() => {
    // Add Schema.org JSON-LD with location-aware data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
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
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [location, siteUrl]);

  return (
    <div className="min-h-screen">
      <DynamicMetaTags />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ServiceAreas />
      <RecentWork />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
