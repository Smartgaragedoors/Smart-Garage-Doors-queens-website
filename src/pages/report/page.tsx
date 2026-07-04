import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../config/canonical';
import IssueReportForm from '../../components/conversion/IssueReportForm';

/**
 * Fast-path issue report for on-site staff at commercial properties — meant
 * to be reached via a QR code on a door placard, not organic search, so it's
 * noindexed and has no SEO copy padding around the form.
 */
export default function ReportIssuePage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Report a Door Issue | Smart Garage Doors"
        description="Report a commercial garage door or gate issue and we'll call you back."
        canonical={buildCanonical('/report')}
        noIndex={true}
      />
      <Header />

      <section className="py-8 md:py-12 bg-gray-50 min-h-[70vh] flex items-center">
        <div className="max-w-md mx-auto px-4 w-full">
          <IssueReportForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
