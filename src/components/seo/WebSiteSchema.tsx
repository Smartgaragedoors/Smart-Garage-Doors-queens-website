import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const WebSiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.website}/#website`,
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.website,
    "description": `Professional garage door repair and installation services in NY, NJ & CT. Same-day service, 24/7 emergency repairs, and ${BUSINESS_INFO.aggregateRating.reviewCount} Google reviews.`,
    "publisher": {
      "@type": "Organization",
      "@id": `${BUSINESS_INFO.website}/#organization`,
      "name": BUSINESS_INFO.name,
      "legalName": BUSINESS_INFO.legalName,
      "url": BUSINESS_INFO.website,
    },
    // Flags the homepage hero headline (src/components/feature/Hero.tsx — the single
    // <h1> on the page) and the FAQ section (src/components/feature/HomeFAQ.tsx,
    // id="faq", answers rendered in crawlable <details>/<summary> markup) as the best
    // candidates for voice-assistant / AI Overview short-answer extraction.
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "#faq"],
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
