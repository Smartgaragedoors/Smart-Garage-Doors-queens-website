import { trackPhoneClick } from '../../utils/analytics';

interface BookingCTABarProps {
  title?: string;
  subtitle?: string;
  callLabel?: string;
  bookLabel?: string;
  className?: string;
}

export default function BookingCTABar({
  title = 'Ready to Schedule Service?',
  subtitle,
  callLabel = 'Call Now',
  bookLabel = 'Request Service',
  className = '',
}: BookingCTABarProps) {
  return (
    <section className={`bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">{title}</h2>
            {subtitle ? (
              <p className="text-blue-100 text-sm md:text-base">{subtitle}</p>
            ) : (
              <p className="text-blue-100 text-sm md:text-base">
                Fast local response, upfront quotes, licensed and insured service, and 475 Google reviews.
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/book-now/"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Book garage door service online"
            >
              <i className="ri-calendar-check-line" aria-hidden="true" />
              {bookLabel}
            </a>
            <a
              href="tel:+19145576816"
              onClick={() => trackPhoneClick('(914) 557-6816')}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Call Smart Garage Doors"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {callLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
