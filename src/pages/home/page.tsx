import { useEffect } from 'react';
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

export default function HomePage() {
  useEffect(() => {
    // Set page title and meta tags
    document.title = '24/7 Garage Door Repair | Installation | Same-Day';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Garage door stuck, broken spring, or opener not working? Smartest Garage Doors delivers same-day repair, professional installation, and trusted service homeowners rely on. Serving NY & CT. Fast response, fair pricing, satisfaction guaranteed.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'garage door opener repair, chain drive, belt drive, wall mount torsion, NY, NJ, CT');
    }

    // Add Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smartest Garage Doors",
      "image": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/4d43fd0bc8f747590e796db153cdd63c.png",
      "@id": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
      "telephone": "(914) 557-6816",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
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
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "sameAs": [],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
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
  }, []);

  return (
    <div className="min-h-screen">
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
