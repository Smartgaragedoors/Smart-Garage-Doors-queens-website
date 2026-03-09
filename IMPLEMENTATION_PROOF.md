# IMPLEMENTATION PROOF — SEO Improvement Pass

## 1. EXACT DIFFS

### `src/components/seo/DynamicMetaTags.tsx`

```diff
-    } else if (location && title && !title.includes(locationName)) {
-      // Add location to title if not already present
-      finalTitle = `${title} - Serving ${locationName}`;
+    } else if (location && title && !title.includes(locationName) && !title.toLowerCase().includes(location?.city?.toLowerCase() || '')) {
+      // Add location to title only if geo/location intent is not already present
+      const geoPatterns = [locationName, location?.city, location?.state, 'NY', 'NJ', 'CT', 'queens', 'brooklyn', 'long island', 'stamford', 'westchester', 'nassau', 'suffolk', 'bergen'];
+      const hasGeo = geoPatterns.some(p => p && title.toLowerCase().includes(p.toLowerCase()));
+      if (!hasGeo) {
+        finalTitle = `${title} - Serving ${locationName}`;
+      } else {
+        finalTitle = title;
+      }
+    } else if (title) {
+      finalTitle = title;
     }
```

```diff
     } else if (location && description && !description.includes(locationName)) {
-      finalDescription = `${description} Serving ${locationName} and surrounding areas.`;
+      const geoPatterns = [locationName, location?.city, location?.state, 'NY', 'NJ', 'CT'];
+      const hasGeo = geoPatterns.some(p => p && description.toLowerCase().includes(p.toLowerCase()));
+      if (!hasGeo) {
+        finalDescription = `${description} Serving ${locationName} and surrounding areas.`;
+      } else {
+        finalDescription = description;
+      }
+    } else if (description) {
+      finalDescription = description;
     }
```

```diff
     // Determine final keywords
     let finalKeywords = keywords || 'garage door repair, garage door installation, emergency garage door service';
-    if (location) {
+    if (location && keywords && !keywords.toLowerCase().includes(location?.city?.toLowerCase() || '')) {
+      finalKeywords = `${finalKeywords}, ${location.city} garage door repair, garage door service ${locationName}`;
+    } else if (location && !keywords) {
       finalKeywords = `${finalKeywords}, ${location.city} garage door repair, garage door service ${locationName}`;
     }
```

---

### `src/components/seo/ServiceAreaLinks.tsx`

```diff
 interface ServiceAreaLinksProps {
   title?: string;
   showDescription?: boolean;
   maxLinks?: number;
+  /** Service context for better anchor text (e.g. 'repair', 'installation', 'emergency', 'spring', 'opener', 'cable', 'maintenance') */
+  serviceType?: string;
 }
 
 export default function ServiceAreaLinks({ 
   title = "Service Areas",
   showDescription = true,
-  maxLinks = 8
+  maxLinks = 8,
+  serviceType = ''
 }: ServiceAreaLinksProps) {
-  const serviceAreas = getServiceAreaLinksForService('').slice(0, maxLinks);
+  const serviceAreas = getServiceAreaLinksForService(serviceType).slice(0, maxLinks);
```

---

### `src/utils/internalLinking.ts`

```diff
 // Get service area links for service pages (incoming links TO location pages)
+// serviceType: 'repair' | 'installation' | 'emergency' | 'spring' | 'opener' | 'cable' | 'maintenance' | ''
 export function getServiceAreaLinksForService(serviceType: string): InternalLink[] {
-  // Top service areas to link to from service pages
-  const topServiceAreas: InternalLink[] = [
+  const baseAreas: InternalLink[] = [
     { url: '/queens-ny/', text: 'Queens, NY', description: 'Garage door services in Queens' },
     ... (same 10 items)
   ];
 
-  return topServiceAreas;
+  // Service-aware descriptions for better anchor text (natural, not stuffed)
+  const serviceDescriptions: Record<string, Record<string, string>> = {
+    repair: { 'queens-ny': 'Garage door repair in Queens', 'brooklyn-ny': 'Garage door repair in Brooklyn', ... },
+    emergency: { 'queens-ny': 'Emergency garage door repair in Queens', ... },
+    spring: { 'queens-ny': 'Spring replacement in Queens', ... },
+    installation: { 'queens-ny': 'Garage door installation in Queens', ... },
+    opener: { 'queens-ny': 'Opener repair in Queens', ... },
+    cable: { 'queens-ny': 'Cable and roller repair in Queens', ... },
+    maintenance: { 'queens-ny': 'Garage door maintenance in Queens', ... },
+  };
+
+  const descMap = serviceType ? serviceDescriptions[serviceType] : null;
+  if (!descMap) return baseAreas;
+
+  return baseAreas.map(area => {
+    const slug = area.url.replace(/^\//, '').replace(/\/$/, '');
+    const customDesc = descMap[slug];
+    return customDesc ? { ...area, description: customDesc } : area;
+  });
 }
```

---

### `public/robots.txt`

**BEFORE:**
```
User-agent: *

# Disallow any admin or booking paths (adjust if you want booking indexed)
Disallow: /book-now/

# Core site pages
Allow: /
Allow: /contact/
```

**AFTER:**
```
User-agent: *

# Core site pages (booking page is intentionally indexable)
Allow: /
Allow: /book-now/
Allow: /contact/
```

---

### `src/pages/home/page.tsx`

```diff
 import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
 import OrganizationSchema from '../../components/seo/OrganizationSchema';
 import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
+import WebSiteSchema from '../../components/seo/WebSiteSchema';
```

```diff
   return (
     <div className="min-h-screen">
-      <DynamicMetaTags />
+      <DynamicMetaTags 
+        title="Garage Door Repair NY NJ CT | 5.0★ Same-Day Service | Smartest Garage Doors"
+        description="5.0★ rated, 392 reviews. Same-day garage door repair & installation across NY, NJ & CT. 24/7 emergency service. Licensed & insured. Call (914) 557-6816."
+      />
+      <WebSiteSchema />
       <OrganizationSchema />
       <LocalBusinessSchema />
```

---

### `src/pages/garage-door-repair/page.tsx`

```diff
+import { BUSINESS_INFO } from '../../config/business-info';
```

```diff
       <DynamicMetaTags 
-        title="Professional Garage Door Repair Services | Same-Day Service"
-        description="Expert garage door repair services across NY, NJ, and CT. Fast, reliable, and affordable solutions for all your garage door problems. Same-day service available."
+        title="Garage Door Repair NY NJ CT | 5.0★ Same-Day | Smartest Garage Doors"
+        description="5.0★ rated, 392 reviews. Same-day garage door repair across NY, NJ & CT. Spring replacement, opener repair, emergency service. Licensed & insured."
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="repair"
         title="Garage Door Repair Services in Your Area"
```

---

### `src/pages/services/emergency-repairs/page.tsx`

```diff
       <DynamicMetaTags 
-        title="Emergency Garage Door Repair NYC | 24/7 Service | Same-Day Response"
-        description="24/7 emergency garage door repair in NYC, Westchester, and Connecticut. Fast response, professional technicians, immediate solutions for broken garage doors. Available 24/7."
-        keywords="emergency garage door repair, 24/7 garage door service, urgent garage door fix, broken garage door repair, emergency technician"
+        title="Emergency Garage Door Repair | 24/7 NY NJ CT | Smartest Garage Doors"
+        description="24/7 emergency garage door repair. 5.0★, 392 reviews. 60-90 min response. Same-day service. Licensed & insured. Call (914) 557-6816."
+        keywords="emergency garage door repair, 24/7 garage door service, urgent garage door fix, broken garage door repair"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="emergency"
```

---

### `src/pages/garage-door-installation-new-york/page.tsx` (route: `/garage-door-installation/`)

```diff
       <DynamicMetaTags 
-        title="Garage Door Installation NY NJ CT | Professional Installation Services"
-        description="Professional garage door installation services in NY, NJ & CT. Expert installation of all garage door styles and brands. Same-day service available. Licensed and insured technicians."
-        keywords="garage door installation, new garage door installation, garage door installer, professional garage door installation"
+        title="Garage Door Installation NY NJ CT | New Doors & Replacements | Smartest Garage Doors"
+        description="New garage door installation & replacement. 5.0★, 392 reviews. Free estimates. Same-day available. Licensed & insured. Serving NY, NJ & CT."
+        keywords="garage door installation, new garage door, garage door replacement, garage door installer"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="installation"
```

---

### `src/pages/services/installation/page.tsx`

```diff
       <DynamicMetaTags 
         title="Garage Door Installation Services & Free Quotes | Smartest Garage Doors"
-        description="Plan your next garage door installation with a free, detailed quote. We handle residential and commercial installations across NY, NJ & CT with full warranty and expert guidance on styles, materials, and openers."
-        keywords="garage door installation services, free garage door quote, residential and commercial garage doors, professional installation team"
+        description="Plan your garage door project with a free quote. Styles, materials, openers. Residential & commercial. NY, NJ & CT. 5.0★, 392 reviews. Licensed & insured."
+        keywords="garage door installation services, free garage door quote, residential commercial garage doors, installation planning"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="installation"
```

---

### `src/pages/services/spring-replacement/page.tsx`

```diff
       <DynamicMetaTags 
-        title="Garage Door Spring Replacement NYC | Torsion & Extension Springs | Same-Day Service"
-        description="Professional garage door spring replacement in NYC, Westchester, and Connecticut. Safe installation of torsion and extension springs. Same-day service available."
-        keywords="garage door spring replacement, torsion spring repair, extension spring replacement, broken spring repair, spring installation"
+        title="Garage Door Spring Replacement NY NJ CT | Same-Day | Smartest Garage Doors"
+        description="5.0★ rated, 392 reviews. Safe spring replacement. Torsion & extension. Same-day service. NY, NJ & CT. Licensed & insured."
+        keywords="garage door spring replacement, torsion spring repair, extension spring replacement, broken spring repair"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="spring"
```

---

### `src/pages/services/opener-repair/page.tsx` (route: `/opener-repair-installation/`)

```diff
       <DynamicMetaTags 
-        title="Garage Door Opener Repair NY NJ CT | Same-Day Service | Smart Garage Doors"
-        description="Professional garage door opener repair services in NY, NJ & CT. Chain drive, belt drive, and wall mount torsion systems. Fast, reliable service with warranty."
-        keywords="garage door opener repair, chain drive, belt drive, wall mount torsion, NY, NJ, CT"
+        title="Garage Door Opener Repair NY NJ CT | Same-Day | Smartest Garage Doors"
+        description="5.0★ rated, 392 reviews. Opener repair & installation. Chain, belt, wall-mount. Same-day service. NY, NJ & CT. Licensed & insured."
+        keywords="garage door opener repair, opener installation, chain drive, belt drive, wall mount"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="opener"
```

---

### `src/pages/services/cable-roller-repair/page.tsx`

```diff
       <DynamicMetaTags 
-        title="Garage Door Cable & Roller Repair NYC | Track Repair | Same-Day Service"
-        description="Professional garage door cable and roller repair in NYC, Westchester, and Connecticut. Track alignment, cable replacement, roller installation. Same-day service."
-        keywords="garage door cable repair, roller replacement, track repair, cable replacement, garage door tracks, roller installation"
+        title="Garage Door Cable & Roller Repair NY NJ CT | Same-Day | Smartest Garage Doors"
+        description="5.0★ rated, 392 reviews. Cable, roller, track repair. Same-day service. NY, NJ & CT. Licensed & insured."
+        keywords="garage door cable repair, roller replacement, track repair, cable replacement"
         canonical={...}
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="cable"
```

---

### `src/pages/services/maintenance/page.tsx`

```diff
       <DynamicMetaTags 
-        title="Garage Door Maintenance Plans NYC | Preventive Service | Smart Garage Doors"
-        description="Professional garage door maintenance plans in NYC, Westchester, and Connecticut. Preventive maintenance to extend door life and prevent costly repairs."
-        keywords="garage door maintenance, preventive maintenance, maintenance plans, garage door service, annual maintenance"
+        title="Garage Door Maintenance Plans | NY NJ CT | Smartest Garage Doors"
+        description="Preventive garage door maintenance. Extend door life, avoid costly repairs. 5.0★, 392 reviews. Annual plans. NY, NJ & CT."
+        keywords="garage door maintenance, preventive maintenance, maintenance plans, annual garage door service"
       />
```

```diff
       <ServiceAreaLinks 
+        serviceType="maintenance"
```

---

### `src/pages/blog/[slug]/page.tsx`

```diff
-import { useEffect } from 'react';
+import BlogPostingSchema from '../../../components/seo/BlogPostingSchema';
```

```diff
-  useEffect(() => {
-    if (post) {
-      document.title = `${post.title} | Smart Garage Doors Blog`;
-      const metaDescription = document.querySelector('meta[name="description"]');
-      if (metaDescription) {
-        metaDescription.setAttribute('content', post.description);
-      }
-    }
-  }, [post]);
-
   if (!post) { ... }
 
+  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com';
+  const postUrl = `${siteUrl}/blog/${post.slug}/`;
+
   return (
     <div className="min-h-screen bg-white">
       <DynamicMetaTags 
-        title={`${post.title} | Smart Garage Doors Blog`}
+        title={`${post.title} | Smartest Garage Doors Blog`}
         description={post.description}
         keywords={...}
+        canonical={postUrl}
       />
+      <BlogPostingSchema
+        title={post.title}
+        description={post.description}
+        image={post.image}
+        author={post.author}
+        datePublished={post.date}
+        url={postUrl}
+        articleSection={post.category}
+      />
       {post.faqs && <FAQSchema faqs={post.faqs} />}
```

---

### Service-area pages (representative: `white-plains-ny`)

```diff
-import { useEffect } from 'react';
-import { useLocation } from 'react-router-dom';
 import Header from ...;
 const WhitePlainsNY = () => {
-  const location = useLocation();
   const siteUrl = ...;
-  useEffect(() => {
-    document.title = 'White Plains NY Garage Door Repair | Smart Garage Doors | Licensed Technicians';
-    const metaDescription = document.querySelector('meta[name="description"]');
-    if (metaDescription) { metaDescription.setAttribute('content', '...'); }
-    const metaKeywords = document.querySelector('meta[name="keywords"]');
-    if (metaKeywords) { metaKeywords.setAttribute('content', '...'); }
-  }, [location.pathname, siteUrl]);
   return (
     <DynamicMetaTags 
-      title="White Plains NY Garage Door Repair | Smart Garage Doors | Licensed Technicians"
-      description="Professional garage door repair services in White Plains, NY. Smart Garage Doors offers emergency repairs..."
-      keywords="... Smart Garage Doors"
+      title="White Plains NY Garage Door Repair | Smartest Garage Doors | Licensed Technicians"
+      description="Professional garage door repair in White Plains, NY. 5.0★ rated, 392 reviews. Same-day service, emergency repairs, spring replacement. Licensed & insured."
+      keywords="White Plains NY garage door repair, garage door installation White Plains, emergency garage door service Westchester"
       canonical={...}
     />
-    <button className="bg-white text-blue-900 ...">Get Free Estimate</button>
+    <a href="/book-now/" className="bg-white text-blue-900 ... inline-block text-center">Get Free Estimate</a>
```

---

## 2. META CHANGE TABLE

| URL | Old Title | New Title | Old Meta Description | New Meta Description | Canonical |
|-----|-----------|-----------|----------------------|----------------------|-----------|
| `/` | (fallback) | Garage Door Repair NY NJ CT \| 5.0★ Same-Day Service \| Smartest Garage Doors | (fallback) | 5.0★ rated, 392 reviews. Same-day garage door repair & installation across NY, NJ & CT. 24/7 emergency service. Licensed & insured. Call (914) 557-6816. | (auto) |
| `/garage-door-repair/` | Professional Garage Door Repair Services \| Same-Day Service | Garage Door Repair NY NJ CT \| 5.0★ Same-Day \| Smartest Garage Doors | Expert garage door repair services across NY, NJ, and CT. Fast, reliable, and affordable solutions for all your garage door problems. Same-day service available. | 5.0★ rated, 392 reviews. Same-day garage door repair across NY, NJ & CT. Spring replacement, opener repair, emergency service. Licensed & insured. | (auto) |
| `/emergency-garage-door-repair/` | Emergency Garage Door Repair NYC \| 24/7 Service \| Same-Day Response | Emergency Garage Door Repair \| 24/7 NY NJ CT \| Smartest Garage Doors | 24/7 emergency garage door repair in NYC, Westchester, and Connecticut. Fast response, professional technicians, immediate solutions for broken garage doors. Available 24/7. | 24/7 emergency garage door repair. 5.0★, 392 reviews. 60-90 min response. Same-day service. Licensed & insured. Call (914) 557-6816. | (auto) |
| `/garage-door-installation/` | Garage Door Installation NY NJ CT \| Professional Installation Services | Garage Door Installation NY NJ CT \| New Doors & Replacements \| Smartest Garage Doors | Professional garage door installation services in NY, NJ & CT. Expert installation of all garage door styles and brands. Same-day service available. Licensed and insured technicians. | New garage door installation & replacement. 5.0★, 392 reviews. Free estimates. Same-day available. Licensed & insured. Serving NY, NJ & CT. | (auto) |
| `/services/installation/` | Garage Door Installation Services & Free Quotes \| Smartest Garage Doors | (unchanged) | Plan your next garage door installation with a free, detailed quote. We handle residential and commercial installations across NY, NJ & CT with full warranty and expert guidance on styles, materials, and openers. | Plan your garage door project with a free quote. Styles, materials, openers. Residential & commercial. NY, NJ & CT. 5.0★, 392 reviews. Licensed & insured. | (auto) |
| `/spring-replacement/` | Garage Door Spring Replacement NYC \| Torsion & Extension Springs \| Same-Day Service | Garage Door Spring Replacement NY NJ CT \| Same-Day \| Smartest Garage Doors | Professional garage door spring replacement in NYC, Westchester, and Connecticut. Safe installation of torsion and extension springs. Same-day service available. | 5.0★ rated, 392 reviews. Safe spring replacement. Torsion & extension. Same-day service. NY, NJ & CT. Licensed & insured. | (auto) |
| `/opener-repair-installation/` | Garage Door Opener Repair NY NJ CT \| Same-Day Service \| Smart Garage Doors | Garage Door Opener Repair NY NJ CT \| Same-Day \| Smartest Garage Doors | Professional garage door opener repair services in NY, NJ & CT. Chain drive, belt drive, and wall mount torsion systems. Fast, reliable service with warranty. | 5.0★ rated, 392 reviews. Opener repair & installation. Chain, belt, wall-mount. Same-day service. NY, NJ & CT. Licensed & insured. | (auto) |
| `/cable-roller-repair/` | Garage Door Cable & Roller Repair NYC \| Track Repair \| Same-Day Service | Garage Door Cable & Roller Repair NY NJ CT \| Same-Day \| Smartest Garage Doors | Professional garage door cable and roller repair in NYC, Westchester, and Connecticut. Track alignment, cable replacement, roller installation. Same-day service. | 5.0★ rated, 392 reviews. Cable, roller, track repair. Same-day service. NY, NJ & CT. Licensed & insured. | `.../cable-roller-repair/` |
| `/maintenance/` | Garage Door Maintenance Plans NYC \| Preventive Service \| Smart Garage Doors | Garage Door Maintenance Plans \| NY NJ CT \| Smartest Garage Doors | Professional garage door maintenance plans in NYC, Westchester, and Connecticut. Preventive maintenance to extend door life and prevent costly repairs. | Preventive garage door maintenance. Extend door life, avoid costly repairs. 5.0★, 392 reviews. Annual plans. NY, NJ & CT. | (auto) |
| `/queens-ny/` | Queens NY Garage Door Repair \| Smart Garage Doors \| 24/7 Emergency Service | Queens NY Garage Door Repair \| Smartest Garage Doors \| 24/7 | Professional garage door repair services in Queens, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Queens neighborhoods. Licensed technicians serving all Queens areas. | Garage door repair in Queens, NY. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured. | `.../queens-ny/` |
| `/brooklyn-ny/` | Brooklyn NY Garage Door Repair \| Smart Garage Doors \| 24/7 Emergency Service | Brooklyn NY Garage Door Repair \| Smartest Garage Doors \| 24/7 | Professional garage door repair services in Brooklyn, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Brooklyn neighborhoods. Licensed technicians serving all Brooklyn areas. | Garage door repair in Brooklyn, NY. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured. | `.../brooklyn-ny/` |
| `/long-island-ny/` | Long Island NY Garage Door Repair \| Smart Garage Doors \| 24/7 Emergency Service | Long Island NY Garage Door Repair \| Smartest Garage Doors \| 24/7 | Professional garage door repair services in Long Island, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Nassau and Suffolk Counties. Licensed technicians serving all Long Island areas. | Garage door repair on Long Island, NY. 5.0★, 392 reviews. Nassau & Suffolk. Same-day service, emergency repairs. Licensed & insured. | `.../long-island-ny/` |
| `/white-plains-ny/` | White Plains NY Garage Door Repair \| Smart Garage Doors \| Licensed Technicians | White Plains NY Garage Door Repair \| Smartest Garage Doors \| Licensed Technicians | Professional garage door repair services in White Plains, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout White Plains and surrounding Westchester County areas. | Professional garage door repair in White Plains, NY. 5.0★ rated, 392 reviews. Same-day service, emergency repairs, spring replacement. Licensed & insured. | `.../white-plains-ny/` |
| `/stamford-ct/` | Stamford CT Garage Door Repair \| Smart Garage Doors \| 24/7 Emergency Service | Stamford CT Garage Door Repair \| Smartest Garage Doors \| 24/7 | Professional garage door repair services in Stamford, CT. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Stamford neighborhoods. Licensed technicians serving all Stamford areas. | Garage door repair in Stamford, CT. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured. | `.../stamford-ct/` |
| `/westchester-county-ny/` | Westchester County NY Garage Door Repair \| Smart Garage Doors \| 24/7 Emergency Service | Westchester County NY Garage Door Repair \| Smartest Garage Doors \| 24/7 | Professional garage door repair services in Westchester County, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Westchester County neighborhoods. Licensed technicians serving all Westchester County areas. | Garage door repair in Westchester County, NY. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured. | `.../westchester-county-ny/` |
| `/blog/:slug/` | {title} \| Smart Garage Doors Blog | {title} \| Smartest Garage Doors Blog | (post.description) | (unchanged) | `.../blog/{slug}/` |

---

## 3. SERVICE-AREA PAGES CLEANED

| Page | document.title removed | Meta description removed | Keywords removed | DynamicMetaTags | JSON-LD |
|------|------------------------|--------------------------|------------------|-----------------|---------|
| white-plains-ny | ✓ | ✓ | ✓ | Already existed | N/A (none) |
| westchester-county-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| staten-island-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| suffolk-county-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| scarsdale-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| new-rochelle-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| nassau-county-ny | ✓ | ✓ | ✓ | **Added** | N/A |
| long-island-ny | ✓ | ✓ | ✓ | Already existed | N/A |
| elizabeth-nj | ✓ | ✓ | ✓ | Already existed | Preserved |
| smithtown-ny | ✓ | ✓ | ✓ | **Added** | Preserved |
| hauppauge-ny | ✓ | ✓ | ✓ | **Added** | Preserved |
| fairfield-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| suffern-ny | ✓ | ✓ | ✓ | **Added** | Preserved |
| westport-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| newtown-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| new-canaan-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| greenwich-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| darien-ct | ✓ | ✓ | ✓ | **Added** | Preserved |
| flushing-ny | ✓ | ✓ | ✓ | Already existed | Preserved |
| brooklyn-ny | ✓ | ✓ | ✓ | Already existed | Preserved |
| queens-ny | N/A (DynamicMetaTags only) | N/A | N/A | Already existed | Preserved |
| stamford-ct | N/A (empty useEffect) | N/A | N/A | Already existed | N/A |
| bergen-county-nj | ✓ | ✓ | ✓ | **Added** | N/A |

---

## 4. CTA CHANGES

| Page | Old Code | New Code | Destination |
|------|----------|----------|-------------|
| white-plains-ny | `<button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">Get Free Estimate</button>` | `<a href="/book-now/" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap inline-block text-center">Get Free Estimate</a>` | `/book-now/` |
| westchester-county-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| staten-island-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| suffolk-county-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| scarsdale-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| new-rochelle-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| nassau-county-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| long-island-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| smithtown-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| hauppauge-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| elizabeth-nj | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| elizabeth-nj (CTA 2) | `<button ...>Schedule Service Online</button>` | `<a href="/book-now/" ...>Schedule Service Online</a>` | `/book-now/` |
| fairfield-ct | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| stamford-ct | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| queens-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| queens-ny (CTA 2) | `<button ...>Schedule Service Online</button>` | `<a href="/book-now/" ...>Schedule Service Online</a>` | `/book-now/` |
| brooklyn-ny | `<button ...>Get Free Estimate</button>` | `<a href="/book-now/" ...>Get Free Estimate</a>` | `/book-now/` |
| westport-ct | `<a href="#contact">Get Free Quote</a>` | `<a href="/book-now/">Get Free Quote</a>` | `/book-now/` |
| newtown-ct | `<a href="#contact">Get Free Quote</a>` | `<a href="/book-now/">Get Free Quote</a>` | `/book-now/` |
| flushing-ny | `<a href="#contact">Get Free Quote</a>` | `<a href="/book-now/">Get Free Quote</a>` | `/book-now/` |

**Not changed (still buttons or /contact):**
- **bergen-county-nj:** Hero "Get Free Estimate" still `<button>`; "Schedule Service Online" still `<button>`.
- **fairfield-ct, hauppauge-ny, smithtown-ny, nassau-county-ny, long-island-ny, suffolk-county-ny, staten-island-ny, westchester-county-ny:** "Schedule Service Online" (lower CTA) still `<button>`.
- **suffern-ny:** Hero "Get Free Quote" uses `href="#contact"`; lower "Schedule Service" uses `href="/contact"`.

---

## 5. SCHEMA ADDITIONS

### `src/components/seo/WebSiteSchema.tsx` (full file)

```tsx
import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

const WebSiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.website,
    "description": "Professional garage door repair and installation services in NY, NJ & CT. Same-day service, 24/7 emergency repairs. 5.0★ rated, 392 reviews.",
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
```

**Insertion point:** `src/pages/home/page.tsx`, inside the return, after `DynamicMetaTags` and before `OrganizationSchema`:

```tsx
<DynamicMetaTags ... />
<WebSiteSchema />
<OrganizationSchema />
<LocalBusinessSchema />
```

---

### `src/components/seo/BlogPostingSchema.tsx` (full file)

```tsx
import React from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  image: string;
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
  author,
  datePublished,
  dateModified,
  url,
  articleSection,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
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
        "url": "https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/b5abc60311785d6f2fb733a6d104ca55.webp",
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
```

**Insertion point:** `src/pages/blog/[slug]/page.tsx`, after `DynamicMetaTags` and before `FAQSchema`:

```tsx
<DynamicMetaTags ... />
<BlogPostingSchema
  title={post.title}
  description={post.description}
  image={post.image}
  author={post.author}
  datePublished={post.date}
  url={postUrl}
  articleSection={post.category}
/>
{post.faqs && <FAQSchema faqs={post.faqs} />}
```

---

## 6. DYNAMICMETATAGS CHANGES

### Geo detection (title)

**Before:** Append ` - Serving {locationName}` whenever `location && title && !title.includes(locationName)`.

**After:**
1. Extra guard: `!title.toLowerCase().includes(location?.city?.toLowerCase() || '')`.
2. Geo patterns: `[locationName, location?.city, location?.state, 'NY', 'NJ', 'CT', 'queens', 'brooklyn', 'long island', 'stamford', 'westchester', 'nassau', 'suffolk', 'bergen']`.
3. `hasGeo = geoPatterns.some(p => p && title.toLowerCase().includes(p.toLowerCase()))`.
4. If `hasGeo` → use `title` as-is. Else → append ` - Serving {locationName}`.
5. Fallback: `else if (title) { finalTitle = title; }`.

### Append logic (description)

**Before:** Always append ` Serving {locationName} and surrounding areas.` when `location && description && !description.includes(locationName)`.

**After:**
1. Geo patterns: `[locationName, location?.city, location?.state, 'NY', 'NJ', 'CT']`.
2. `hasGeo = geoPatterns.some(p => p && description.toLowerCase().includes(p.toLowerCase()))`.
3. If `hasGeo` → use `description` as-is. Else → append.
4. Fallback: `else if (description) { finalDescription = description; }`.

### Keyword logic

**Before:** If `location`, always append `, ${location.city} garage door repair, garage door service ${locationName}`.

**After:**
- If `location && keywords && !keywords.toLowerCase().includes(location?.city?.toLowerCase() || '')` → append.
- Else if `location && !keywords` → append.
- Otherwise → no append.

---

## 7. INTERNAL LINKING CHANGES

### `serviceType` API on `ServiceAreaLinks`

```tsx
interface ServiceAreaLinksProps {
  title?: string;
  showDescription?: boolean;
  maxLinks?: number;
  /** Service context for better anchor text (e.g. 'repair', 'installation', 'emergency', 'spring', 'opener', 'cable', 'maintenance') */
  serviceType?: string;
}

// Usage: serviceType = '' (default) | 'repair' | 'installation' | 'emergency' | 'spring' | 'opener' | 'cable' | 'maintenance'
const serviceAreas = getServiceAreaLinksForService(serviceType).slice(0, maxLinks);
```

### `internalLinking.ts` changes

- `getServiceAreaLinksForService(serviceType)` now uses `serviceType`.
- Added `serviceDescriptions` map for repair, emergency, spring, installation, opener, cable, maintenance.
- For each area, if `descMap[slug]` exists, use it as `description`; otherwise keep base description.

### Example outputs

**repair** (first 3):
- Queens, NY → "Garage door repair in Queens"
- Brooklyn, NY → "Garage door repair in Brooklyn"
- Long Island, NY → "Garage door repair on Long Island"

**installation** (first 3):
- Queens, NY → "Garage door installation in Queens"
- Brooklyn, NY → "Garage door installation in Brooklyn"
- Long Island, NY → "Garage door installation on Long Island"

**spring** (first 3):
- Queens, NY → "Spring replacement in Queens"
- Brooklyn, NY → "Spring replacement in Brooklyn"
- Long Island, NY → "Spring replacement on Long Island"

**opener** (first 3):
- Queens, NY → "Opener repair in Queens"
- Brooklyn, NY → "Opener repair in Brooklyn"
- Long Island, NY → "Opener repair on Long Island"

**maintenance** (first 3):
- Queens, NY → "Garage door maintenance in Queens"
- Brooklyn, NY → "Garage door maintenance in Brooklyn"
- Long Island, NY → "Garage door maintenance on Long Island"

---

## 8. FINAL BUILD / TYPE SAFETY

- **Build:** Succeeds (`npm run build` exits 0).
- **TypeScript errors:** None introduced by these changes.
- **Lint errors:** None in modified files.
- **Pre-existing warnings (unchanged by this pass):**
  - `LocationData` is not exported by `src/services/geolocation.ts` (used in `LocationContext.tsx`).
  - `Location` is not exported by `src/config/locations.ts` (used in `CityServiceAreaPage.tsx`).
- **Runtime warnings:** None observed from these changes.

---

## 9. REMAINING UNRESOLVED SEO ISSUES

1. **Schema duplication:** Home page has both `LocalBusinessSchema` and an inline LocalBusiness in `useEffect`; no deduplication done.
2. **Brooklyn, Stamford, Bergen:** "Schedule Service Online" still links to `/contact` instead of `/book-now/`.
3. **Suffern:** Hero CTA still uses `href="/contact"` instead of `/book-now/`.
4. **Bergen County meta:** Title/description still use "Smart Garage Doors" instead of "Smartest Garage Doors".
5. **Blog-to-service links:** Some blog posts already have internal links; no systematic audit or expansion of blog-to-service/city links.
6. **Flushing page:** `/flushing-ny/` redirects to `/queens-ny/`; flushing page file is updated but not used.
7. **LocationData / Location exports:** Pre-existing TypeScript/import warnings remain.
