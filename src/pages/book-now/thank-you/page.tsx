import { useLocation } from 'react-router-dom';
import { getLocationContact } from '../../../config/branchContacts';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../../config/canonical';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';
import { getWhatsAppHref } from '../../../utils/whatsapp';
import type { LeadType } from '../../../utils/leadType';

/**
 * Shown after every accepted customer form. Its job is to turn "request sent"
 * into a conversation right away: a web lead that waits for a callback closes
 * far less often than a caller, so the page leads with Call and WhatsApp
 * instead of a dead-end "thanks". Forms pass the lead type in router state so
 * the follow-up prompt fits the request; opened directly, the page falls back
 * to the general wording. No arrival-time promises here (agent rule 3).
 */

const FOLLOW_UP: Record<'installation' | 'commercial' | 'default', { hint: string; whatsappLabel: string; whatsappMessage: string }> = {
  installation: {
    hint: 'Planning a new door? A photo of your current door and the opening, taken from the driveway, helps us prepare your quote.',
    whatsappLabel: 'Send a photo on WhatsApp',
    whatsappMessage: 'Hi! I just requested a garage door quote on your website. Here is a photo of my garage door:',
  },
  commercial: {
    hint: 'For a commercial site, have the site address and the number of doors ready. Certificates of insurance are available on request.',
    whatsappLabel: 'Message us on WhatsApp',
    whatsappMessage: 'Hi! I just sent a commercial service request on your website.',
  },
  default: {
    hint: 'A photo or short video of the problem helps the technician arrive prepared.',
    whatsappLabel: 'Send a photo on WhatsApp',
    whatsappMessage: 'Hi! I just sent a service request on your website. Here is a photo of my garage door:',
  },
};

export default function ThankYouPage() {
  const route = useLocation();
  const contact = getLocationContact(route.pathname, route.search);
  const leadType = (route.state as { leadType?: LeadType } | null)?.leadType;
  const followUp = leadType === 'installation' || leadType === 'commercial' ? FOLLOW_UP[leadType] : FOLLOW_UP.default;

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        personalizeLocation={false}
        title="Callback Request | Smart Garage Doors"
        description="Thanks for booking with Smart Garage Doors. We'll be in touch shortly to confirm your appointment."
        canonical={buildCanonical('/book-now/thank-you')}
        noIndex={true}
      />
      <Header />

      <section className="py-10 md:py-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-check-double-line text-3xl text-green-600" aria-hidden="true" />
          </div>
          <h1 className="font-newsreader font-medium text-3xl md:text-4xl text-gray-900 mb-3 tracking-[-0.02em]">Thank you for getting in touch</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            We have your request. Want to get scheduled sooner? Call now and speak with dispatch directly.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`tel:${contact.phoneTel}`}
              data-track-source="thank_you_page"
              onClick={() => trackPhoneClick(contact.phone, 'thank_you_page')}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 min-h-[48px] rounded-xl font-bold text-lg transition-colors"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              Call {contact.phone}
            </a>
            <a
              href={getWhatsAppHref({ message: followUp.whatsappMessage })}
              target="_blank"
              rel="noopener noreferrer"
              data-track-source="thank_you_page"
              onClick={() => trackWhatsAppClick('thank_you_page')}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-3.5 min-h-[48px] rounded-xl font-semibold transition-colors"
            >
              <i className="ri-whatsapp-line text-green-600 text-xl" aria-hidden="true" />
              {followUp.whatsappLabel}
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-3">{followUp.hint}</p>

          <div className="mt-8 text-left rounded-xl border border-gray-200 p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">What happens next</h2>
            <ol className="space-y-2.5 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="flex-none w-6 h-6 rounded-full bg-gray-100 text-gray-900 font-bold text-xs flex items-center justify-center" aria-hidden="true">1</span>
                <span>After your request is submitted, dispatch will contact you to confirm availability.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-none w-6 h-6 rounded-full bg-gray-100 text-gray-900 font-bold text-xs flex items-center justify-center" aria-hidden="true">2</span>
                <span>Your appointment is confirmed only after you speak with our team.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-none w-6 h-6 rounded-full bg-gray-100 text-gray-900 font-bold text-xs flex items-center justify-center" aria-hidden="true">3</span>
                <span>
                  You get a <strong className="text-gray-900">free written estimate</strong> — the total price, including any fees, surcharges, and applicable taxes — before any work begins.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
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
