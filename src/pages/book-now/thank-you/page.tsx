import { useLocation } from 'react-router-dom';
import { getLocationContact } from '../../../config/branchContacts';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../../config/canonical';

export default function ThankYouPage() {
  const route = useLocation();
  const contact = getLocationContact(route.pathname, route.search);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Callback Request | Smart Garage Doors"
        description="Thanks for booking with Smart Garage Doors. We'll be in touch shortly to confirm your appointment."
        canonical={buildCanonical('/book-now/thank-you')}
        noIndex={true}
      />
      <Header />

      <section className="py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-double-line text-4xl text-green-600" aria-hidden="true" />
          </div>
          <h1 className="font-newsreader font-medium text-4xl text-gray-900 mb-4 tracking-[-0.02em]">Thank you for getting in touch</h1>
          <p className="text-lg text-gray-600 mb-2">
            After your request is submitted, dispatch will contact you to confirm availability. Your appointment is confirmed only after you speak with our team.
            Remember: you get a <strong className="text-gray-900">free written estimate</strong> — the total price, including any fees, surcharges, and applicable taxes.
          </p>
          <p className="text-gray-500 mb-10">
            Prefer to talk it through? Call directly:
          </p>
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            <i className="ri-phone-fill" aria-hidden="true" />
            {contact.phone}
          </a>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to homepage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
