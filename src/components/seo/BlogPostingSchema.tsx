import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  articleSection?: string;
}

const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({
  title,
  description,
  image,
  imageAlt,
  author,
  datePublished,
  dateModified,
  url,
  articleSection,
}) => {
  const imageValue =
    imageAlt != null
      ? { "@type": "ImageObject" as const, contentUrl: image, caption: imageAlt }
      : image;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageValue,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smartestgaragedoors.com/smart-garage-doors-logo.webp",
      },
    },
    ...(articleSection && { articleSection }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BlogPostingSchema;
