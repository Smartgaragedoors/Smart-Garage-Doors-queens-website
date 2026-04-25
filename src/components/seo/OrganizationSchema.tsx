import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.website,
    "logo": "https://www.smartestgaragedoors.com/smart-garage-doors-logo.webp",
    "image": "https://www.smartestgaragedoors.com/hero-van-1280.webp",
    "telephone": BUSINESS_INFO.phoneFormatted,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.addresses[0].streetAddress,
      "addressLocality": BUSINESS_INFO.addresses[0].addressLocality,
      "addressRegion": BUSINESS_INFO.addresses[0].addressRegion,
      "postalCode": BUSINESS_INFO.addresses[0].postalCode,
      "addressCountry": BUSINESS_INFO.addresses[0].addressCountry,
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phoneFormatted,
      "contactType": "customer service",
      "areaServed": ["US"],
      "availableLanguage": ["en"],
    },
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;




