import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';
import { STATIC_REVIEWS } from '../../data/staticReviews';

interface LocalBusinessSchemaProps {
  locationName?: string;
  serviceArea?: string;
  customAddress?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  /** Page path (e.g. '/queens-ny/') — used for a unique @id and url per location page */
  slug?: string;
  /** Location-specific coordinates; falls back to the primary address */
  geo?: { latitude: number | string; longitude: number | string };
  /** Local line override (e.g. Suffern's 845 number) so schema matches what customers dial */
  telephone?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  locationName,
  serviceArea,
  customAddress,
  slug,
  geo,
  telephone,
}) => {
  const primaryAddress = BUSINESS_INFO.addresses[0];
  const pageUrl = slug
    ? `${BUSINESS_INFO.website}${slug.endsWith('/') ? slug : `${slug}/`}`
    : `${BUSINESS_INFO.website}/`;
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
    "@id": `${pageUrl}#localbusiness`,
    "parentOrganization": { "@id": `${BUSINESS_INFO.website}/#organization` },
    "name": businessName,
    "legalName": BUSINESS_INFO.legalName,
    "image": "https://www.smartestgaragedoors.com/hero-van-1280.webp",
    "url": pageUrl,
    "telephone": telephone || BUSINESS_INFO.phoneFormatted,
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
      "latitude": (geo?.latitude ?? primaryAddress.latitude).toString(),
      "longitude": (geo?.longitude ?? primaryAddress.longitude).toString(),
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
    // Individual Review examples (real Google reviews, see src/data/staticReviews.ts)
    // nested inside this single LocalBusiness entity. This is a different pattern from
    // aggregateRating and does NOT reintroduce the GSC "multiple aggregate ratings on a
    // page" bug — that bug was caused by aggregateRating appearing on more than one
    // @type entity on the same page. A `review` array of individual Review objects
    // (no aggregateRating of their own) is safe and recommended by schema.org.
    "review": STATIC_REVIEWS.slice(0, 5).map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author_name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
      },
      "reviewBody": r.text,
    })),
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
    "hasMap": BUSINESS_INFO.socialMedia.googleMaps || undefined,
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

