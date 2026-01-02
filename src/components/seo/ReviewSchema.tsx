import React from 'react';

interface Review {
  author: string;
  rating: number;
  reviewBody?: string;
  datePublished?: string;
}

interface ReviewSchemaProps {
  reviews?: Review[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ 
  reviews = [],
  aggregateRating 
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Smartest Garage Doors",
  };

  // Add individual reviews if provided
  if (reviews.length > 0) {
    schema.review = reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
      },
      ...(review.reviewBody && { "reviewBody": review.reviewBody }),
      ...(review.datePublished && { "datePublished": review.datePublished }),
    }));
  }

  // Add aggregate rating if provided
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || "5",
      "worstRating": aggregateRating.worstRating || "1",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;


