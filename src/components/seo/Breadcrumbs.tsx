import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '/home') {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  // Parse pathname into breadcrumbs
  const segments = pathname.split('/').filter(Boolean);

  let currentPath = '';
  segments.forEach((segment, _index) => {
    currentPath += `/${segment}`;
    
    // Format label from segment
    let label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Handle special cases
    if (segment === 'garage-door-repair') {
      label = 'Garage Door Repair';
    } else if (segment === 'garage-door-installation') {
      label = 'Garage Door Installation';
    } else if (segment === 'emergency-garage-door-repair') {
      label = 'Emergency Garage Door Repair';
    } else if (segment === 'spring-replacement') {
      label = 'Spring Replacement';
    } else if (segment === 'opener-repair-installation') {
      label = 'Opener Repair & Installation';
    } else if (segment === 'cable-roller-repair') {
      label = 'Cable & Roller Repair';
    } else if (segment === 'service-areas') {
      label = 'Service Areas';
      // Skip adding this as a clickable item, it's just a category
      return;
    } else if (segment.includes('brooklyn-ny')) {
      label = 'Brooklyn, NY';
    } else if (segment.includes('queens-ny') || segment.includes('flushing-ny')) {
      label = 'Queens, NY';
    } else if (segment.includes('stamford-ct')) {
      label = 'Stamford, CT';
    } else if (segment.includes('darien-ct')) {
      label = 'Darien, CT';
    } else if (segment.includes('suffern-ny')) {
      label = 'Suffern, NY';
    } else if (segment.includes('white-plains-ny')) {
      label = 'White Plains, NY';
    } else if (segment.includes('long-island-ny')) {
      label = 'Long Island, NY';
    } else if (segment.includes('staten-island-ny')) {
      label = 'Staten Island, NY';
    } else if (segment.includes('greenwich-ct')) {
      label = 'Greenwich, CT';
    } else if (segment.includes('new-canaan-ct')) {
      label = 'New Canaan, CT';
    } else if (segment.includes('westport-ct')) {
      label = 'Westport, CT';
    } else if (segment.includes('newtown-ct')) {
      label = 'Newtown, CT';
    } else if (segment.includes('fairfield-ct')) {
      label = 'Fairfield, CT';
    } else if (segment.includes('teaneck-nj')) {
      label = 'Teaneck, NJ';
    } else if (segment.includes('bergen-county-nj')) {
      label = 'Bergen County, NJ';
    } else if (segment.includes('nassau-county-ny')) {
      label = 'Nassau County, NY';
    } else if (segment.includes('suffolk-county-ny')) {
      label = 'Suffolk County, NY';
    } else if (segment.includes('westchester-county-ny')) {
      label = 'Westchester County, NY';
    } else if (segment.includes('scarsdale-ny')) {
      label = 'Scarsdale, NY';
    } else if (segment.includes('new-rochelle-ny')) {
      label = 'New Rochelle, NY';
    }

    breadcrumbs.push({ label, path: currentPath });
  });

  // Generate BreadcrumbList schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `${window.location.origin}${crumb.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}

