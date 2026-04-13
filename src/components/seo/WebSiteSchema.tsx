import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const WebSiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.website,
    "description": `Professional garage door repair and installation services in NY, NJ & CT. Same-day service, 24/7 emergency repairs, and ${BUSINESS_INFO.aggregateRating.reviewCount} Google reviews.`,
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "legalName": BUSINESS_INFO.legalName,
      "url": BUSINESS_INFO.website,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebSiteSchema;
