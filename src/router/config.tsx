import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('../pages/home/page').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('../pages/contact/page').then(module => ({ default: module.default })));
const BookNowPage = lazy(() => import('../pages/book-now/page').then(module => ({ default: module.default })));
const ThankYouPage = lazy(() => import('../pages/book-now/thank-you/page').then(module => ({ default: module.default })));
const ReviewsPage = lazy(() => import('../pages/reviews/page').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('../pages/blog/page').then(module => ({ default: module.default })));
const BlogPostPage = lazy(() => import('../pages/blog/[slug]/page').then(module => ({ default: module.default })));
const GoRedirectFallbackPage = lazy(() => import('../pages/go/[slug]/page').then(module => ({ default: module.default })));
const LPWhatsAppPage = lazy(() => import('../pages/lp/whatsapp/page').then(module => ({ default: module.default })));
const ServiceAreasPage = lazy(() => import('../pages/service-areas/page').then(module => ({ default: module.default })));
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
const BronxNYPage = lazy(() => import('../pages/service-areas/bronx-ny/page').then(module => ({ default: module.default })));
const QueensNYPage = lazy(() => import('../pages/service-areas/queens-ny/page').then(module => ({ default: module.default })));
const StamfordCTPage = lazy(() => import('../pages/service-areas/stamford-ct/page').then(module => ({ default: module.default })));
const BergenCountyNJPage = lazy(() => import('../pages/service-areas/bergen-county-nj/page').then(module => ({ default: module.default })));
const DarienCTPage = lazy(() => import('../pages/service-areas/darien-ct/page').then(module => ({ default: module.default })));
const SuffernNYPage = lazy(() => import('../pages/service-areas/suffern-ny/page').then(module => ({ default: module.default })));
const WhitePlainsNYPage = lazy(() => import('../pages/service-areas/white-plains-ny/page').then(module => ({ default: module.default })));
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
const ElizabethNJPage = lazy(() => import('../pages/service-areas/elizabeth-nj/page').then(module => ({ default: module.default })));
const HauppaugeNYPage = lazy(() => import('../pages/service-areas/hauppauge-ny/page').then(module => ({ default: module.default })));
const SmithtownNYPage = lazy(() => import('../pages/service-areas/smithtown-ny/page').then(module => ({ default: module.default })));
const ParamusNJPage = lazy(() => import('../pages/service-areas/paramus-nj/page').then(module => ({ default: module.default })));
const NorwalkCTPage = lazy(() => import('../pages/service-areas/norwalk-ct/page').then(module => ({ default: module.default })));
const EdisonNJPage = lazy(() => import('../pages/service-areas/edison-nj/page').then(module => ({ default: module.default })));
const JacksonNJPage = lazy(() => import('../pages/service-areas/jackson-nj/page').then(module => ({ default: module.default })));
const FlushingNYPage = lazy(() => import('../pages/service-areas/flushing-ny/page').then(module => ({ default: module.default })));

// Premium-market service area pages (Tier 1 rollout)
const ForestHillsNYPage = lazy(() => import('../pages/service-areas/forest-hills-ny/page').then(module => ({ default: module.default })));
const BaysideNYPage = lazy(() => import('../pages/service-areas/bayside-ny/page').then(module => ({ default: module.default })));
const GreatNeckNYPage = lazy(() => import('../pages/service-areas/great-neck-ny/page').then(module => ({ default: module.default })));
const ManhassetNYPage = lazy(() => import('../pages/service-areas/manhasset-ny/page').then(module => ({ default: module.default })));
const RoslynNYPage = lazy(() => import('../pages/service-areas/roslyn-ny/page').then(module => ({ default: module.default })));
const PortWashingtonNYPage = lazy(() => import('../pages/service-areas/port-washington-ny/page').then(module => ({ default: module.default })));
const GardenCityNYPage = lazy(() => import('../pages/service-areas/garden-city-ny/page').then(module => ({ default: module.default })));
const RyeNYPage = lazy(() => import('../pages/service-areas/rye-ny/page').then(module => ({ default: module.default })));
const BronxvilleNYPage = lazy(() => import('../pages/service-areas/bronxville-ny/page').then(module => ({ default: module.default })));
const LarchmontNYPage = lazy(() => import('../pages/service-areas/larchmont-ny/page').then(module => ({ default: module.default })));
const ChappaquaNYPage = lazy(() => import('../pages/service-areas/chappaqua-ny/page').then(module => ({ default: module.default })));
const RidgewoodNJPage = lazy(() => import('../pages/service-areas/ridgewood-nj/page').then(module => ({ default: module.default })));
const TenaflyNJPage = lazy(() => import('../pages/service-areas/tenafly-nj/page').then(module => ({ default: module.default })));
const RumsonNJPage = lazy(() => import('../pages/service-areas/rumson-nj/page').then(module => ({ default: module.default })));
const HolmdelNJPage = lazy(() => import('../pages/service-areas/holmdel-nj/page').then(module => ({ default: module.default })));

// Premium-market service area pages (Wave 2)
const WhitestoneNYPage = lazy(() => import('../pages/service-areas/whitestone-ny/page').then(module => ({ default: module.default })));
const JamaicaEstatesNYPage = lazy(() => import('../pages/service-areas/jamaica-estates-ny/page').then(module => ({ default: module.default })));
const SyossetNYPage = lazy(() => import('../pages/service-areas/syosset-ny/page').then(module => ({ default: module.default })));
const OysterBayNYPage = lazy(() => import('../pages/service-areas/oyster-bay-ny/page').then(module => ({ default: module.default })));
const RockvilleCentreNYPage = lazy(() => import('../pages/service-areas/rockville-centre-ny/page').then(module => ({ default: module.default })));
const OldWestburyNYPage = lazy(() => import('../pages/service-areas/old-westbury-ny/page').then(module => ({ default: module.default })));
const MamaroneckNYPage = lazy(() => import('../pages/service-areas/mamaroneck-ny/page').then(module => ({ default: module.default })));
const HarrisonNYPage = lazy(() => import('../pages/service-areas/harrison-ny/page').then(module => ({ default: module.default })));
const ArmonkNYPage = lazy(() => import('../pages/service-areas/armonk-ny/page').then(module => ({ default: module.default })));
const AlpineNJPage = lazy(() => import('../pages/service-areas/alpine-nj/page').then(module => ({ default: module.default })));
const FortLeeNJPage = lazy(() => import('../pages/service-areas/fort-lee-nj/page').then(module => ({ default: module.default })));
const ColtsNeckNJPage = lazy(() => import('../pages/service-areas/colts-neck-nj/page').then(module => ({ default: module.default })));
const RedBankNJPage = lazy(() => import('../pages/service-areas/red-bank-nj/page').then(module => ({ default: module.default })));

// Competitor comparison pages
const VsPrecisionGarageDoorPage = lazy(() => import('../pages/vs-precision-garage-door/page').then(module => ({ default: module.default })));
const VsOverheadDoorPage = lazy(() => import('../pages/vs-overhead-door/page').then(module => ({ default: module.default })));

// Conversion pages
const PhotoEstimatePage = lazy(() => import('../pages/photo-estimate/page').then(module => ({ default: module.default })));
const SecondOpinionPage = lazy(() => import('../pages/second-opinion/page').then(module => ({ default: module.default })));
const ReportIssuePage = lazy(() => import('../pages/report/page').then(module => ({ default: module.default })));

// Commercial / B2B pages
const CommercialGarageDoorRepairPage = lazy(() => import('../pages/commercial-garage-door-repair/page').then(module => ({ default: module.default })));
const PropertyManagersPage = lazy(() => import('../pages/property-managers/page').then(module => ({ default: module.default })));
const LoadingDockDoorRepairPage = lazy(() => import('../pages/loading-dock-door-repair/page').then(module => ({ default: module.default })));
const RollingSteelGateRepairPage = lazy(() => import('../pages/rolling-steel-gate-repair/page').then(module => ({ default: module.default })));
const CommercialMaintenanceContractsPage = lazy(() => import('../pages/commercial-maintenance-contracts/page').then(module => ({ default: module.default })));
const CommercialLongIslandPage = lazy(() => import('../pages/commercial-long-island-ny/page').then(module => ({ default: module.default })));

// Buyer's guide pages
const LocalVsNationalGarageDoorCompanyPage = lazy(() => import('../pages/local-vs-national-garage-door-company/page').then(module => ({ default: module.default })));
const BestGarageDoorCompanyQueensPage = lazy(() => import('../pages/best-garage-door-company-queens/page').then(module => ({ default: module.default })));
const BestGarageDoorCompanyTriStatePage = lazy(() => import('../pages/best-garage-door-company-tri-state/page').then(module => ({ default: module.default })));

// Cost guide + brand pages
const ReplacementCostNassauPage = lazy(() => import('../pages/garage-door-replacement-cost-nassau-county/page').then(module => ({ default: module.default })));
const InstallationCostWestchesterPage = lazy(() => import('../pages/garage-door-installation-cost-westchester/page').then(module => ({ default: module.default })));
const InsulatedCostLongIslandPage = lazy(() => import('../pages/insulated-garage-door-cost-long-island/page').then(module => ({ default: module.default })));
const LiftMasterInstallationPage = lazy(() => import('../pages/liftmaster-opener-installation/page').then(module => ({ default: module.default })));
const PedestrianGarageDoorsPage = lazy(() => import('../pages/pedestrian-garage-doors/page').then(module => ({ default: module.default })));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/home/',
    element: <Navigate to="/" replace />
  },
  {
    path: '/contact/',
    element: <ContactPage />
  },
  {
    path: '/book-now/',
    element: <BookNowPage />
  },
  {
    path: '/book-now/thank-you/',
    element: <ThankYouPage />
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
    path: '/blog/:slug/',
    element: <BlogPostPage />
  },
  {
    path: '/go/:slug/',
    element: <GoRedirectFallbackPage />
  },
  {
    path: '/lp/whatsapp/',
    element: <LPWhatsAppPage />
  },
  {
    path: '/service-areas/',
    element: <ServiceAreasPage />
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
    path: '/maintenance/',
    element: <MaintenancePage />
  },
  {
    path: '/services/installation/',
    element: <InstallationPage />
  },
  
  // Service area pages with exact URLs
  {
    path: '/brooklyn-ny/',
    element: <BrooklynNYPage />
  },
  {
    path: '/bronx-ny/',
    element: <BronxNYPage />
  },
  {
    path: '/stamford-ct/',
    element: <StamfordCTPage />
  },
  {
    path: '/darien-ct/',
    element: <DarienCTPage />
  },
  {
    path: '/suffern-ny/',
    element: <SuffernNYPage />
  },
  {
    path: '/white-plains-ny/',
    element: <WhitePlainsNYPage />
  },
  {
    path: '/flushing-ny/',
    element: <FlushingNYPage />
  },
  {
    path: '/long-island-ny/',
    element: <LongIslandNYPage />
  },
  {
    path: '/staten-island-ny/',
    element: <StatenIslandNYPage />
  },
  {
    path: '/teaneck-nj/',
    element: <TeaneckNJPage />
  },
  {
    path: '/greenwich-ct/',
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
    path: '/queens-ny/',
    element: <QueensNYPage />
  },
  {
    path: '/elizabeth-nj/',
    element: <ElizabethNJPage />
  },
  {
    path: '/fairfield-ct/',
    element: <FairfieldCTPage />
  },
  {
    path: '/bergen-county-nj/',
    element: <BergenCountyNJPage />
  },
  {
    path: '/nassau-county-ny/',
    element: <NassauCountyNYPage />
  },
  {
    path: '/new-rochelle-ny/',
    element: <NewRochelleNYPage />
  },
  {
    path: '/scarsdale-ny/',
    element: <ScarsdalePage />
  },
  {
    path: '/suffolk-county-ny/',
    element: <SuffolkCountyNYPage />
  },
  {
    path: '/westchester-county-ny/',
    element: <WestchesterCountyNYPage />
  },
  {
    path: '/hauppauge-ny/',
    element: <HauppaugeNYPage />
  },
  {
    path: '/smithtown-ny/',
    element: <SmithtownNYPage />
  },
  {
    path: '/paramus-nj/',
    element: <ParamusNJPage />
  },
  {
    path: '/norwalk-ct/',
    element: <NorwalkCTPage />
  },
  {
    path: '/edison-nj/',
    element: <EdisonNJPage />
  },
  {
    path: '/jackson-nj/',
    element: <JacksonNJPage />
  },

  // Premium-market service area pages (Tier 1 rollout)
  {
    path: '/forest-hills-ny/',
    element: <ForestHillsNYPage />
  },
  {
    path: '/bayside-ny/',
    element: <BaysideNYPage />
  },
  {
    path: '/great-neck-ny/',
    element: <GreatNeckNYPage />
  },
  {
    path: '/greatneck-ny/',
    element: <Navigate to="/great-neck-ny/" replace />
  },
  {
    path: '/greatneck/',
    element: <Navigate to="/great-neck-ny/" replace />
  },
  {
    path: '/manhasset-ny/',
    element: <ManhassetNYPage />
  },
  {
    path: '/roslyn-ny/',
    element: <RoslynNYPage />
  },
  {
    path: '/port-washington-ny/',
    element: <PortWashingtonNYPage />
  },
  {
    path: '/garden-city-ny/',
    element: <GardenCityNYPage />
  },
  {
    path: '/rye-ny/',
    element: <RyeNYPage />
  },
  {
    path: '/bronxville-ny/',
    element: <BronxvilleNYPage />
  },
  {
    path: '/larchmont-ny/',
    element: <LarchmontNYPage />
  },
  {
    path: '/chappaqua-ny/',
    element: <ChappaquaNYPage />
  },
  {
    path: '/ridgewood-nj/',
    element: <RidgewoodNJPage />
  },
  {
    path: '/tenafly-nj/',
    element: <TenaflyNJPage />
  },
  {
    path: '/rumson-nj/',
    element: <RumsonNJPage />
  },
  {
    path: '/holmdel-nj/',
    element: <HolmdelNJPage />
  },

  // Premium-market service area pages (Wave 2)
  {
    path: '/whitestone-ny/',
    element: <WhitestoneNYPage />
  },
  {
    path: '/jamaica-estates-ny/',
    element: <JamaicaEstatesNYPage />
  },
  {
    path: '/syosset-ny/',
    element: <SyossetNYPage />
  },
  {
    path: '/oyster-bay-ny/',
    element: <OysterBayNYPage />
  },
  {
    path: '/rockville-centre-ny/',
    element: <RockvilleCentreNYPage />
  },
  {
    path: '/old-westbury-ny/',
    element: <OldWestburyNYPage />
  },
  {
    path: '/mamaroneck-ny/',
    element: <MamaroneckNYPage />
  },
  {
    path: '/harrison-ny/',
    element: <HarrisonNYPage />
  },
  {
    path: '/armonk-ny/',
    element: <ArmonkNYPage />
  },
  {
    path: '/alpine-nj/',
    element: <AlpineNJPage />
  },
  {
    path: '/fort-lee-nj/',
    element: <FortLeeNJPage />
  },
  {
    path: '/colts-neck-nj/',
    element: <ColtsNeckNJPage />
  },
  {
    path: '/red-bank-nj/',
    element: <RedBankNJPage />
  },

  // Competitor comparison pages
  {
    path: '/vs-precision-garage-door/',
    element: <VsPrecisionGarageDoorPage />
  },
  {
    path: '/vs-overhead-door/',
    element: <VsOverheadDoorPage />
  },

  // Conversion pages
  {
    path: '/photo-estimate/',
    element: <PhotoEstimatePage />
  },
  {
    path: '/second-opinion/',
    element: <SecondOpinionPage />
  },
  {
    path: '/report/',
    element: <ReportIssuePage />
  },

  // Commercial / B2B pages
  {
    path: '/commercial-garage-door-repair/',
    element: <CommercialGarageDoorRepairPage />
  },
  {
    path: '/property-managers/',
    element: <PropertyManagersPage />
  },
  {
    path: '/loading-dock-door-repair/',
    element: <LoadingDockDoorRepairPage />
  },
  {
    path: '/rolling-steel-gate-repair/',
    element: <RollingSteelGateRepairPage />
  },
  {
    path: '/commercial-maintenance-contracts/',
    element: <CommercialMaintenanceContractsPage />
  },
  {
    path: '/commercial-long-island-ny/',
    element: <CommercialLongIslandPage />
  },

  // Buyer's guide pages
  {
    path: '/local-vs-national-garage-door-company/',
    element: <LocalVsNationalGarageDoorCompanyPage />
  },
  {
    path: '/best-garage-door-company-queens/',
    element: <BestGarageDoorCompanyQueensPage />
  },
  {
    path: '/best-garage-door-company-tri-state/',
    element: <BestGarageDoorCompanyTriStatePage />
  },

  // Cost guide + brand pages
  {
    path: '/garage-door-replacement-cost-nassau-county/',
    element: <ReplacementCostNassauPage />
  },
  {
    path: '/garage-door-installation-cost-westchester/',
    element: <InstallationCostWestchesterPage />
  },
  {
    path: '/insulated-garage-door-cost-long-island/',
    element: <InsulatedCostLongIslandPage />
  },
  {
    path: '/liftmaster-opener-installation/',
    element: <LiftMasterInstallationPage />
  },
  {
    path: '/pedestrian-garage-doors/',
    element: <PedestrianGarageDoorsPage />
  },
  // Legacy routes - redirect to new format (keep for SEO)
  { path: '/garage-door-replacement/', element: <Navigate to="/garage-door-installation/" replace /> },
  { path: '/garage-door-repair-darien-ct/', element: <Navigate to="/darien-ct/" replace /> },
  { path: '/garage-door-repair-white-plains-ny/', element: <Navigate to="/white-plains-ny/" replace /> },
  { path: '/garage-door-repair-suffolk-county-ny/', element: <Navigate to="/suffolk-county-ny/" replace /> },
  { path: '/garage-door-repair-nassau-county-ny/', element: <Navigate to="/nassau-county-ny/" replace /> },
  { path: '/garage-door-repair-westchester-county-ny/', element: <Navigate to="/westchester-county-ny/" replace /> },
  { path: '/install-garage-door-opener-stamford-ct/', element: <Navigate to="/stamford-ct/" replace /> },
  { path: '/service-areas/brooklyn-ny/', element: <Navigate to="/brooklyn-ny/" replace /> },
  { path: '/service-areas/newtown-ct/', element: <Navigate to="/newtown-ct/" replace /> },
  { path: '/service-areas/new-canaan-ct/', element: <Navigate to="/new-canaan-ct/" replace /> },
  { path: '/how-to-repair-dented-garage-door/', element: <Navigate to="/garage-door-repair/" replace /> },
  { path: '/garage-door-roller-repair-prevention/', element: <Navigate to="/cable-roller-repair/" replace /> },
  { path: '/how-to-repair-garage-door-opener/', element: <Navigate to="/opener-repair-installation/" replace /> },
  { path: '/garage-door-sensor-repair-easy-guide/', element: <Navigate to="/garage-door-repair/" replace /> },
  { path: '/garage-door-installation-new-york/', element: <Navigate to="/garage-door-installation/" replace /> },
  { path: '/garage-door-shifts-to-left-when-it-opens/', element: <Navigate to="/garage-door-repair/" replace /> },
  { path: '/install-new-garage-door-opener/', element: <Navigate to="/opener-repair-installation/" replace /> },
  { path: '/sliding-garage-doors-maintenance-tips/', element: <Navigate to="/maintenance/" replace /> },
  { path: '/choose-right-commercial-garage-door-opener/', element: <Navigate to="/opener-repair-installation/" replace /> },
  { path: '/types-of-garage-doors/', element: <Navigate to="/garage-door-installation/" replace /> },
  {
    path: '/home',
    element: <Navigate to="/" replace />
  },
  {
    path: '/contact',
    element: <Navigate to="/contact/" replace />
  },
  {
    path: '/garage-door-repair-brooklyn-ny/',
    element: <Navigate to="/brooklyn-ny/" replace />
  },
  {
    path: '/garage-door-repair-stamford-ct/',
    element: <Navigate to="/stamford-ct/" replace />
  },
  {
    path: '/garage-door-installers-white-plains-ny/',
    element: <Navigate to="/white-plains-ny/" replace />
  },
  {
    path: '/garage-door-installation-suffern-ny/',
    element: <Navigate to="/suffern-ny/" replace />
  },
  {
    path: '/garage-door-installation-stamford-ct/',
    element: <Navigate to="/stamford-ct/" replace />
  },
  
  // 404 page
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
