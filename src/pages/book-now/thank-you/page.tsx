import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../../config/canonical';
import { BUSINESS_INFO } from '../../../config/business-info';

export default function ThankYouPage() {
  useEffect(() => {
    // Fire GA4 conversion event
    if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
        event_category: 'lead',
        event_label:    'book_now_form',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Booking Confirmed | Smartest Garage Doors"
        description="Thanks for booking with Smartest Garage Doors. We'll be in touch shortly to confirm your appointment."
        canonical={buildCanonical('/book-now/thank-you')}
        noIndex={true}
      />
      <Header />

      <section className="py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-double-line text-4xl text-green-600" aria-hidden="true" />
          </div>
          <h1 className="font-newsreader font-medium text-4xl text-gray-900 mb-4 tracking-[-0.02em]">You're all set!</h1>
          <p className="text-lg text-gray-600 mb-2">
            We got your request and someone will reach out shortly to confirm your appointment.
            Remember: <strong className="text-gray-900">$0 service call</strong> when we do the repair.
          </p>
          <p className="text-gray-500 mb-10">
            Need us faster? Call directly:
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            <i className="ri-phone-fill" aria-hidden="true" />
            {BUSINESS_INFO.phone}
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
