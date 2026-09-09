import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../config/canonical';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Privacy Policy | Smart Garage Doors"
        description="How Smart Garage Doors collects and uses information from service requests, website visits, chat and advertising, and how to contact us about privacy."
        canonical={buildCanonical('/privacy-policy/')}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 md:py-12 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-600">Effective September 9, 2026</p>
        <div className="prose prose-gray mt-8 max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-a:text-blue-700">
          <p>This policy explains how Smart Garage Doors ("we," "us," or "our") handles information through smartestgaragedoors.com and related service inquiries, including requests submitted through our Facebook and Instagram lead forms. It also explains your choices and how to contact us.</p>

          <h2>Information you provide</h2>
          <p>When you request an estimate, book service, contact us or submit an advertising lead form, we collect the details you provide. These may include your name, phone number, email, service address or ZIP code, property or company details, requested work, project budget, timing, appointment preferences and messages. Photos you send for an estimate may show your property and may contain information stored by your device. Please share only what is needed to assess your request.</p>
          <p>If you apply to work with us, we also receive the application details you submit, such as experience, qualifications and availability. We use those details to consider and respond to your application.</p>

          <h2>Website visits, cookies and advertising</h2>
          <p>Our website and its service providers receive technical information such as IP address, browser and device details, pages visited, referring websites, approximate location and interactions with links, forms and buttons. Cookies, pixels and browser storage help operate the site, preserve a chat during your visit, measure usage and connect inquiries with the advertisement or link that brought you here.</p>
          <p>We use Google Analytics and Google Ads for traffic and advertising measurement, Meta Pixel for advertising measurement and audiences, and Microsoft Clarity for usage analysis, including heatmaps and session replays. These providers may receive identifiers and information about your visits and interactions and use them under their own policies, including to measure or personalize advertising. Our use of these tools can involve tracking across websites and services.</p>
          <p>Learn more from <a href="https://policies.google.com/technologies/partner-sites">Google</a>, <a href="https://www.facebook.com/privacy/policy/">Meta</a> and <a href="https://privacy.microsoft.com/privacystatement">Microsoft</a>.</p>

          <h2>How we use and share information</h2>
          <p>We use information to answer questions, prepare estimates, arrange and deliver service, communicate about appointments, maintain customer and warranty records, process applications, improve our website, measure marketing and protect against misuse.</p>
          <p>Information is available to the staff, technicians and service providers who help with these activities. Providers support website hosting, customer records, email, messaging, analytics, advertising and payment processing where applicable. Requests may be delivered to our customer relationship management system and email systems. We may also disclose information when required by law or necessary to protect legal rights or safety.</p>

          <h2>Chat and third-party services</h2>
          <p>The website chat uses an automated assistant. Messages are sent to our systems and an AI service provider, Anthropic, to generate replies and help collect your service request. Chat content can be stored in your browser for the current session. Do not enter payment card numbers, passwords or other sensitive information in chat or service-request forms.</p>
          <p>When you choose WhatsApp, Facebook, Instagram, a map, a payment service or another external link, that provider also handles information under its own privacy policy. This policy describes our handling of the information we receive from those interactions.</p>

          <h2>Calls, texts and email</h2>
          <p>We use the contact details you provide to respond to your inquiry and coordinate service. Where you opt in to text messages, message frequency varies and message and data rates may apply. Reply STOP to opt out or HELP for help. Consent to text messages is not a condition of purchase. You can also contact us to change your communication preferences or stop promotional email. We may still need to send information about work you request.</p>

          <h2>Your choices and privacy requests</h2>
          <p>You can manage or delete cookies and site storage in your browser; blocking them may affect some features. You can manage personalized advertising through <a href="https://myadcenter.google.com/">Google My Ad Center</a> and <a href="https://www.facebook.com/adpreferences/">Meta ad preferences</a>. These settings do not necessarily stop all measurement or advertising.</p>
          <p>Contact us using the details below to ask about your information, request access, correction or deletion, or object to its use for marketing. Depending on where you live and which laws apply, you may have additional rights, including rights relating to targeted advertising. We may need to verify your identity and may need to retain information for transactions, warranties, legal obligations or other permitted purposes.</p>

          <h2>Retention, security and children</h2>
          <p>Retention depends on the purpose of the information, our service relationship, warranty and recordkeeping needs, and applicable legal requirements. No internet transmission or storage system can be guaranteed completely secure. Our services are intended for adults arranging property services, not children under 13. If you believe a child has provided personal information, contact us so we can review and address it.</p>

          <h2>Contact and updates</h2>
          <p>Smart Garage Doors<br />141-24 70th Ave, Flushing, NY 11367<br />Email: <a href="mailto:info@smartestgaragedoors.com">info@smartestgaragedoors.com</a><br />Phone: <a href="tel:+19145576816">(914) 557-6816</a></p>
          <p>We may update this policy as our services or practices change. The effective date above identifies the current version. Please include "Privacy request" in your email subject so we can direct it appropriately.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
