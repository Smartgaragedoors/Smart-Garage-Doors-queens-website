import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

interface LocalBusinessSchemaProps {
  locationName?: string;
  serviceArea?: string;
  customAddress?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  locationName,
  serviceArea,
  customAddress,
}) => {
  const primaryAddress = BUSINESS_INFO.addresses[0];
  const address = customAddress || {
    streetAddress: primaryAddress.streetAddress,
    addressLocality: customAddress?.addressLocality || primaryAddress.addressLocality,
    addressRegion: customAddress?.addressRegion || primaryAddress.addressRegion,
    postalCode: customAddress?.postalCode || primaryAddress.postalCode,
  };

  const businessName = locationName 
    ? `${BUSINESS_INFO.name} - ${locationName}`
    : BUSINESS_INFO.name;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "legalName": BUSINESS_INFO.legalName,
    "image": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/4d43fd0bc8f747590e796db153cdd63c.png",
    "url": BUSINESS_INFO.website,
    "telephone": BUSINESS_INFO.phoneFormatted,
    "priceRange": BUSINESS_INFO.priceRange,
    "paymentAccepted": BUSINESS_INFO.paymentAccepted.join(", "),
    "currenciesAccepted": BUSINESS_INFO.currenciesAccepted,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": primaryAddress.latitude.toString(),
      "longitude": primaryAddress.longitude.toString(),
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
      BUSINESS_INFO.socialMedia.googleMaps,
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.aggregateRating.ratingValue,
      "reviewCount": BUSINESS_INFO.aggregateRating.reviewCount,
      "bestRating": BUSINESS_INFO.aggregateRating.bestRating,
      "worstRating": BUSINESS_INFO.aggregateRating.worstRating,
    },
    "areaServed": serviceArea 
      ? [
          {
            "@type": "City",
            "name": serviceArea
          },
          ...BUSINESS_INFO.serviceAreas.map(area => ({
            "@type": area.type,
            "name": area.name
          }))
        ]
      : BUSINESS_INFO.serviceAreas.map(area => ({
          "@type": area.type,
          "name": area.name
        })),
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
            "name": "Emergency Garage Door Service",
            "description": "24/7 emergency garage door repair services for urgent situations"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;

