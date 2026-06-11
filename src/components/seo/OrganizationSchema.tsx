import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.website}/#organization`,
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
    // NOTE: aggregateRating intentionally lives ONLY on LocalBusinessSchema.
    // Emitting it on multiple entities on one page triggers GSC's critical
    // "Review has multiple aggregate ratings" error.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;




