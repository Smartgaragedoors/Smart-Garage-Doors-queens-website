import { useEffect } from 'react';
import { useLocation } from '../../contexts/LocationContext';
import { useLocation as useRouterLocation } from 'react-router-dom';

interface DynamicMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function DynamicMetaTags({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}: DynamicMetaTagsProps) {
  const { location, locationName } = useLocation();
  const routerLocation = useRouterLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com';

  useEffect(() => {
    // Determine final title with location
    let finalTitle = title;
    if (!finalTitle) {
      // Default title based on route
      const path = routerLocation.pathname;
      if (path.includes('/garage-door-repair')) {
        finalTitle = location
          ? `Garage Door Repair ${locationName} | Same-Day Service | Smartest Garage Doors`
          : 'Garage Door Repair Queens NY | Same-Day Service | Smartest Garage Doors';
      } else if (path.includes('/garage-door-installation')) {
        finalTitle = location
          ? `Garage Door Installation ${locationName} | Professional Service`
          : 'Garage Door Installation Queens NY | Professional Service';
      } else if (path.includes('/emergency')) {
        finalTitle = location
          ? `Emergency Garage Door Repair ${locationName} | 24/7 Service`
          : 'Emergency Garage Door Repair Queens NY | 24/7 Service';
      } else {
        finalTitle = location
          ? `24/7 Garage Door Repair ${locationName} | Installation | Same-Day`
          : '24/7 Garage Door Repair Queens NY | Installation | Same-Day';
      }
    } else if (location && title && !title.includes(locationName)) {
      // Add location to title if not already present
      finalTitle = `${title} - Serving ${locationName}`;
    }

    // Determine final description with location
    let finalDescription = description;
    if (!finalDescription) {
      if (location) {
        finalDescription = `Professional garage door repair and installation services in ${locationName}. Smartest Garage Doors offers same-day service, emergency repairs, and expert installation. Licensed technicians serving ${locationName} and surrounding areas.`;
      } else {
        finalDescription = 'Garage door stuck, broken spring, or opener not working? Smartest Garage Doors delivers same-day repair, professional installation, and trusted service homeowners rely on. Serving NY, NJ & CT. Fast response, fair pricing, satisfaction guaranteed.';
      }
    } else if (location && description && !description.includes(locationName)) {
      finalDescription = `${description} Serving ${locationName} and surrounding areas.`;
    }

    // Determine final keywords
    let finalKeywords = keywords || 'garage door repair, garage door installation, emergency garage door service';
    if (location) {
      finalKeywords = `${finalKeywords}, ${location.city} garage door repair, garage door service ${locationName}`;
    }

    // Determine canonical URL
    let finalCanonical = canonical;
    if (!finalCanonical) {
      finalCanonical = `${siteUrl}${routerLocation.pathname}`;
    }

    // Update document title
    document.title = finalTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDescription);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', finalKeywords);

    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

    // Update robots if noindex
    if (noIndex) {
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, nofollow');
    }

    // Update Open Graph tags
    const ogTitleFinal = ogTitle || finalTitle;
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', ogTitleFinal);

    const ogDescFinal = ogDescription || finalDescription;
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement('meta');
      ogDescTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute('content', ogDescFinal);

    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', finalCanonical);

    if (ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (!ogImageTag) {
        ogImageTag = document.createElement('meta');
        ogImageTag.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageTag);
      }
      ogImageTag.setAttribute('content', ogImage);
    }

    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', ogTitleFinal);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', ogDescFinal);
  }, [location, locationName, title, description, keywords, canonical, ogTitle, ogDescription, ogImage, noIndex, routerLocation.pathname, siteUrl]);

  return null; // This component doesn't render anything
}

