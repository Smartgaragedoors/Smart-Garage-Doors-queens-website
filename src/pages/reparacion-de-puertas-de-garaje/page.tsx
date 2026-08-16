import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import { buildCanonical } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { getWhatsAppHref } from '../../utils/whatsapp';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

/**
 * /reparacion-de-puertas-de-garaje/ — the site's Spanish landing page.
 *
 * Why it exists (GSC 90d, 2026-08-11): Spanish repair-intent queries surface
 * the site with ZERO clicks — "reparar puertas de garaje" (pos 40),
 * "reparación de puertas de garaje cerca de mi" (pos 20), "puerta de garaje
 * no cierra" (pos 48) — because no Spanish content exists. One hand-written
 * page targets the whole cluster. Deliberately ONE page, not a per-city
 * translation set (see brain: scaled thin content is the site's documented
 * indexing risk).
 *
 * Language rules: natural es-419-neutral Spanish, usted form, hand-written
 * (never machine-translate — Google's spam policy names it). No round-the-clock
 * or rapid-response promises in Spanish (Google Ads Advanced Verification):
 * Spanish is available, hours vary — WhatsApp is pushed as the always-works
 * Spanish channel. Prices reused from published English FAQs.
 * Wrapper carries lang="es" for a11y/SEO.
 */

const SERVICIOS = [
  { icon: 'ri-loop-left-line', title: 'Resortes rotos', desc: 'Reemplazo de resortes de torsión y extensión — la falla más común. La puerta no abre o se siente muy pesada.' },
  { icon: 'ri-links-line', title: 'Cables y rodillos', desc: 'Cables deshilachados o reventados, rodillos gastados o atascados. Llámenos para confirmar la disponibilidad de citas.' },
  { icon: 'ri-settings-4-line', title: 'Motores y openers', desc: 'Reparación e instalación de motores LiftMaster, Chamberlain, Genie y más — incluyendo modelos con WiFi.' },
  { icon: 'ri-alert-line', title: 'Puerta fuera de riel', desc: 'Puerta torcida, atascada o fuera de su riel. No intente forzarla — llámenos y la dejamos funcionando con seguridad.' },
  { icon: 'ri-door-open-line', title: 'Instalación de puertas nuevas', desc: 'Puertas de acero, aisladas, estilo carruaje y modernas — medimos, cotizamos por escrito e instalamos.' },
  { icon: 'ri-building-2-line', title: 'Puertas comerciales', desc: 'Cortinas enrollables, puertas de almacén y muelles de carga para negocios, bodegas y edificios.' },
];

const RAZONES = [
  { icon: 'ri-customer-service-2-fill', title: 'Le contesta una persona real', desc: 'Cuando llame, le atiende nuestro equipo — sin menús automáticos ni centros de llamadas lejanos.' },
  { icon: 'ri-chat-3-line', title: 'WhatsApp en español', desc: 'Envíe fotos de su puerta por WhatsApp y le respondemos en español con un diagnóstico y precio estimado.' },
  { icon: 'ri-star-fill', title: `${BUSINESS_INFO.aggregateRating.reviewCount}+ reseñas de 5 estrellas`, desc: 'Calificación de 5.0 en Google — vecinos reales de Queens, Brooklyn, Long Island y más.' },
  { icon: 'ri-shield-check-line', title: 'Con licencia y seguro', desc: 'Licencias en NY, NJ y CT. Garantía de 1 año en partes y mano de obra.' },
  { icon: 'ri-price-tag-3-line', title: 'Precios claros por adelantado', desc: 'Le decimos el precio antes de empezar el trabajo. Sin sorpresas ni cargos ocultos.' },
  { icon: 'ri-flashlight-line', title: 'Citas según disponibilidad', desc: 'Llame para confirmar la disponibilidad actual, y línea de emergencia para casos urgentes.' },
];

const PREGUNTAS = [
  {
    question: '¿Por qué mi puerta de garaje no cierra?',
    answer: 'Las causas más comunes son sensores de seguridad desalineados o sucios, un resorte roto, cables dañados o un problema con el motor. Si la puerta empieza a cerrar y se regresa, casi siempre son los sensores. Envíenos una foto por WhatsApp y le decimos qué tiene y cuánto costaría repararla.',
  },
  {
    question: '¿Cuánto cuesta reparar una puerta de garaje?',
    answer: 'Las reparaciones básicas van de $150 a $300. El cambio de resortes cuesta entre $175 y $350, y la reparación del motor entre $150 y $350. Una puerta nueva instalada va de $800 a $1,600 según el modelo. Siempre le damos el precio exacto por adelantado, antes de empezar — el precio total, con todos los cargos e impuestos aplicables incluidos.',
  },
  {
    question: '¿Atienden en español?',
    answer: 'Sí. Puede llamarnos o escribirnos por WhatsApp en español y nuestro equipo le atiende. Por WhatsApp puede enviar fotos de su puerta a cualquier hora y le respondemos en español.',
  },
  {
    question: '¿Atienden emergencias?',
    answer: 'Sí — tenemos una línea de emergencia para casos urgentes. Si su puerta no cierra o su carro quedó atrapado, llámenos y nuestro despachador le confirma una ventana de llegada honesta según la disponibilidad del momento.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'Queens, Brooklyn, El Bronx, Staten Island, Long Island (Nassau y Suffolk), Westchester y Rockland, el norte y centro de Nueva Jersey, y el condado de Fairfield en Connecticut.',
  },
  {
    question: '¿Qué marcas reparan?',
    answer: 'Todas las marcas principales: LiftMaster, Chamberlain, Genie, Clopay, Amarr, C.H.I., Wayne Dalton y Raynor, entre otras.',
  },
];

const PHONE = BUSINESS_INFO.phone;
const PHONE_TEL = BUSINESS_INFO.phoneFormatted;

export default function ReparacionPuertasGarajePage() {
  const whatsAppHref = getWhatsAppHref({
    message: 'Hola — necesito ayuda con mi puerta de garaje. ¿Me pueden atender en español?',
  });

  return (
    <div className="min-h-screen bg-white" lang="es">
      <DynamicMetaTags
        title="Reparación de Puertas de Garaje | NY · NJ · CT | En Español"
        description="Reparación de puertas de garaje en español — resortes, motores, cables y puertas que no cierran. Servicio en NY, NJ y CT. Precios claros. Llame o escriba por WhatsApp."
        keywords="reparación de puertas de garaje, reparar puerta de garaje, puerta de garaje no cierra, resortes de puerta de garaje, técnico de puertas de garaje español"
        canonical={buildCanonical('/reparacion-de-puertas-de-garaje')}
      />
      <FAQSchema faqs={PREGUNTAS} />
      <Header />
      <Breadcrumbs />

      {/* ── HERO (mismo sistema ink/serif del sitio) ── */}
      <section className="relative bg-[#161D29] text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(22,29,41,0.92), rgba(11,15,23,0.88))' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none hidden md:block"
          style={{ background: 'radial-gradient(circle at 75% 25%, rgba(217,100,31,0.16), transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-20 text-center">
          <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
            <span
              className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
              style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
              aria-hidden="true"
            />
            Se Habla Español · Con Licencia y Seguro
          </p>
          <h1 className="font-newsreader font-medium text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.05] tracking-[-0.02em]">
            Reparación de Puertas de Garaje
          </h1>

          {/* Prueba social directamente bajo el titular */}
          <p className="flex items-center justify-center gap-2 mb-4 text-[15px] md:text-base text-[#cdd9ea]">
            <span className="text-[#F5A623] tracking-[1px]" aria-hidden="true">★★★★★</span>
            <b className="text-white">{BUSINESS_INFO.aggregateRating.ratingValue}</b>
            <span>· {BUSINESS_INFO.aggregateRating.reviewCount}+ reseñas en Google</span>
          </p>

          <div className="mb-7 text-gray-200 max-w-xl mx-auto space-y-1 leading-snug">
            <p className="text-base md:text-lg font-semibold text-white">
              Resortes · Motores · Cables · Puertas que no cierran
            </p>
            <p className="text-sm md:text-base">
              Servicio en NY · NJ · CT — precios claros por adelantado. Llame para confirmar disponibilidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, 'es_landing_hero')}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              Llame al {PHONE}
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('es_landing_hero')}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" />
              WhatsApp en Español
            </a>
          </div>
          <p className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-5 text-[13px] md:text-sm text-[#cdd9ea]">
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
              Técnicos locales
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
              Licencia y seguro
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
              Precios por adelantado
            </span>
          </p>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">¿Qué le pasa a su puerta?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reparamos todo tipo de puertas de garaje — residenciales y comerciales.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ NOSOTROS ── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Por qué los vecinos nos llaman
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAZONES.map((r, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <i className={`${r.icon} text-lg`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONAS ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Zonas de servicio</h2>
          <p className="text-gray-700 leading-relaxed">
            Queens · Brooklyn · El Bronx · Staten Island · Long Island (Nassau y Suffolk) ·
            Westchester · Rockland · Norte y centro de Nueva Jersey · Fairfield, Connecticut
          </p>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-6">
            {PREGUNTAS.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{p.question}</h3>
                <p className="text-gray-600 leading-relaxed">{p.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-8 md:py-12 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Su puerta no funciona?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Llámenos o envíe una foto por WhatsApp — le decimos qué tiene y cuánto cuesta, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, 'es_landing_final')}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('es_landing_final')}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
