import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('../pages/home/page').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('../pages/contact/page').then(module => ({ default: module.default })));
const BookNowPage = lazy(() => import('../pages/book-now/page').then(module => ({ default: module.default })));
const ReviewsPage = lazy(() => import('../pages/reviews/page').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('../pages/blog/page').then(module => ({ default: module.default })));
const BlogPostPage = lazy(() => import('../pages/blog/[slug]/page').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Service pages
const GarageDoorRepairPage = lazy(() => import('../pages/garage-door-repair/page').then(module => ({ default: module.default })));
const GarageDoorInstallationPage = lazy(() => import('../pages/garage-door-installation-new-york/page').then(module => ({ default: module.default })));
const EmergencyRepairsPage = lazy(() => import('../pages/services/emergency-repairs/page').then(module => ({ default: module.default })));
const SpringReplacementPage = lazy(() => import('../pages/services/spring-replacement/page').then(module => ({ default: module.default })));
const OpenerRepairPage = lazy(() => import('../pages/services/opener-repair/page').then(module => ({ default: module.default })));
const CableRollerRepairPage = lazy(() => import('../pages/services/cable-roller-repair/page').then(module => ({ default: module.default })));
const MaintenancePage = lazy(() => import('../pages/services/maintenance/page').then(module => ({ default: module.default })));
const InstallationPage = lazy(() => import('../pages/services/installation/page').then(module => ({ default: module.default })));

// Service area pages
const BrooklynNYPage = lazy(() => import('../pages/service-areas/brooklyn-ny/page').then(module => ({ default: module.default })));
const QueensNYPage = lazy(() => import('../pages/service-areas/queens-ny/page').then(module => ({ default: module.default })));
const StamfordCTPage = lazy(() => import('../pages/service-areas/stamford-ct/page').then(module => ({ default: module.default })));
const BergenCountyNJPage = lazy(() => import('../pages/service-areas/bergen-county-nj/page').then(module => ({ default: module.default })));
const DarienCTPage = lazy(() => import('../pages/service-areas/darien-ct/page').then(module => ({ default: module.default })));
const SuffernNYPage = lazy(() => import('../pages/service-areas/suffern-ny/page').then(module => ({ default: module.default })));
const WhitePlainsNYPage = lazy(() => import('../pages/service-areas/white-plains-ny/page').then(module => ({ default: module.default })));
const FlushingNYPage = lazy(() => import('../pages/service-areas/flushing-ny/page').then(module => ({ default: module.default })));
const LongIslandNYPage = lazy(() => import('../pages/service-areas/long-island-ny/page').then(module => ({ default: module.default })));
const StatenIslandNYPage = lazy(() => import('../pages/service-areas/staten-island-ny/page').then(module => ({ default: module.default })));
const TeaneckNJPage = lazy(() => import('../pages/service-areas/teaneck-nj/page').then(module => ({ default: module.default })));
const GreenwichCTPage = lazy(() => import('../pages/service-areas/greenwich-ct/page').then(module => ({ default: module.default })));
const NewCanaanCTPage = lazy(() => import('../pages/service-areas/new-canaan-ct/page').then(module => ({ default: module.default })));
const WestportCTPage = lazy(() => import('../pages/service-areas/westport-ct/page').then(module => ({ default: module.default })));
const NewtownCTPage = lazy(() => import('../pages/service-areas/newtown-ct/page').then(module => ({ default: module.default })));
const NewRochelleNYPage = lazy(() => import('../pages/service-areas/new-rochelle-ny/page').then(module => ({ default: module.default })));
const ScarsdalePage = lazy(() => import('../pages/service-areas/scarsdale-ny/page').then(module => ({ default: module.default })));
const WestchesterCountyNYPage = lazy(() => import('../pages/service-areas/westchester-county-ny/page').then(module => ({ default: module.default })));
const NassauCountyNYPage = lazy(() => import('../pages/service-areas/nassau-county-ny/page').then(module => ({ default: module.default })));
const SuffolkCountyNYPage = lazy(() => import('../pages/service-areas/suffolk-county-ny/page').then(module => ({ default: module.default })));
const FairfieldCTPage = lazy(() => import('../pages/service-areas/fairfield-ct/page').then(module => ({ default: module.default })));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/book-now/',
    element: <BookNowPage />
  },
  {
    path: '/reviews/',
    element: <ReviewsPage />
  },
  {
    path: '/blog/',
    element: <BlogPage />
  },
  {
    path: '/blog/:slug',
    element: <BlogPostPage />
  },
  
  // Service pages with exact URLs
  {
    path: '/garage-door-repair/',
    element: <GarageDoorRepairPage />
  },
  {
    path: '/garage-door-installation/', // Updated path
    element: <GarageDoorInstallationPage />
  },
  {
    path: '/emergency-garage-door-repair/',
    element: <EmergencyRepairsPage />
  },
  {
    path: '/spring-replacement/',
    element: <SpringReplacementPage />
  },
  {
    path: '/opener-repair-installation/',
    element: <OpenerRepairPage />
  },
  {
    path: '/cable-roller-repair/',
    element: <CableRollerRepairPage />
  },
  {
    path: '/services/maintenance/',
    element: <MaintenancePage />
  },
  {
    path: '/services/installation/',
    element: <InstallationPage />
  },
  
  // Service area pages with exact URLs
  {
    path: '/garage-door-repair-brooklyn-ny/',
    element: <BrooklynNYPage />
  },
  {
    path: '/garage-door-repair-stamford-ct/',
    element: <StamfordCTPage />
  },
  {
    path: '/garage-door-repair-darien-ct/',
    element: <DarienCTPage />
  },
  {
    path: '/garage-door-repair-suffern-ny/',
    element: <SuffernNYPage />
  },
  {
    path: '/garage-door-repair-white-plains-ny/',
    element: <WhitePlainsNYPage />
  },
  {
    path: '/garage-door-repair-flushing-ny/',
    element: <FlushingNYPage />
  },
  {
    path: '/garage-door-repair-long-island-ny/',
    element: <LongIslandNYPage />
  },
  {
    path: '/garage-door-repair-staten-island-ny/',
    element: <StatenIslandNYPage />
  },
  {
    path: '/teaneck-nj/',
    element: <TeaneckNJPage />
  },
  {
    path: '/garage-door-repair-greenwich-ct/',
    element: <GreenwichCTPage />
  },
  {
    path: '/new-canaan-ct/',
    element: <NewCanaanCTPage />
  },
  {
    path: '/westport-ct/',
    element: <WestportCTPage />
  },
  {
    path: '/newtown-ct/',
    element: <NewtownCTPage />
  },
  {
    path: '/garage-door-installation-suffern-ny/',
    element: <SuffernNYPage />
  },
  {
    path: '/garage-door-installers-white-plains-ny/',
    element: <WhitePlainsNYPage />
  },
  {
    path: '/garage-door-installation-stamford-ct/',
    element: <StamfordCTPage />
  },
  
  // 404 page
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
