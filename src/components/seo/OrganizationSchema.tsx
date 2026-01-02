import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.website,
    "logo": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/b5abc60311785d6f2fb733a6d104ca55.webp",
    "image": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/4d43fd0bc8f747590e796db153cdd63c.png",
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


