import { LOCATIONS } from '../../config/branchContacts';
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
  telephone,
}) => {
  const branch = slug === '/queens-ny/' ? LOCATIONS.queens : slug === '/suffern-ny/' ? LOCATIONS.suffern : undefined;
  const primaryAddress = branch?.address || BUSINESS_INFO.addresses[0]!;
  const pageUrl = slug
    ? `${BUSINESS_INFO.website}${slug.endsWith('/') ? slug : `${slug}/`}`
    : `${BUSINESS_INFO.website}/`;
  const address = branch?.address || customAddress || {
    streetAddress: primaryAddress.streetAddress,
    addressLocality: primaryAddress.addressLocality,
    addressRegion: primaryAddress.addressRegion,
    postalCode: primaryAddress.postalCode,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.website}${branch?.path || "/queens-ny/"}#localbusiness`,
    "parentOrganization": { "@id": `${BUSINESS_INFO.website}/#organization` },
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "image": "https://www.smartestgaragedoors.com/hero-van-1280.webp",
    "url": pageUrl,
    "telephone": branch?.phoneTel || telephone || BUSINESS_INFO.phoneFormatted,
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
    "sameAs": [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram,
      ...(branch?.mapsUrl ? [branch.mapsUrl] : []),
    ],
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
    "hasMap": branch?.mapsUrl,
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
            "description": "Emergency garage door repair line for urgent situations"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(slug && !branch ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Garage door service in ${locationName}`,
        url: pageUrl,
        serviceType: "Garage door repair and installation",
        areaServed: { "@type": "Place", name: serviceArea || locationName },
        provider: { "@id": `${BUSINESS_INFO.website}/#organization` },
      } : schema) }}
    />
  );
};

export default LocalBusinessSchema;

