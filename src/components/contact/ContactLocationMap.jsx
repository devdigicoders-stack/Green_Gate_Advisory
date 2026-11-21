import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  ExternalLink,
  Clock,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { CONTACT_CONFIG } from '../../config/contactConfig';
import { openOutlookCompose } from '../../utils/emailHandler';

export default function ContactLocationMap() {
  const { isSpanish } = useLocale();

  const title = isSpanish
    ? 'Sede Central en Barcelona'
    : 'Barcelona Headquarters & European Office';

  const subtitle = isSpanish
    ? 'Visítenos en nuestro despacho principal o coordine una reunión técnica con nuestro equipo de especialistas.'
    : 'Visit our principal advisory chambers or schedule a technical briefing with our climate policy and carbon markets team.';

  const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp.raw}?text=${encodeURIComponent(
    isSpanish ? CONTACT_CONFIG.whatsapp.defaultMessageEs : CONTACT_CONFIG.whatsapp.defaultMessageEn
  )}`;

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Header — GCC Left-Aligned Institutional Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
            <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
            <span>{isSpanish ? 'Ubicación Oficial' : 'Official Location'}</span>
          </div>

          <h2 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[42px] text-[#1A5C3B] leading-[1.18] tracking-[-0.01em]">
            {title}
          </h2>

          <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[17px] text-[#555555] leading-[1.65]">
            {subtitle}
          </p>
        </motion.div>

        {/* Exact GCC 3-Column Solid Deep Navy (#1A5C3B) Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Barcelona Office / Physical Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative bg-[#1A5C3B] text-white rounded-none p-8 sm:p-9 min-h-[215px] flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-2.5 pr-8">
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#57D182]">
                Green Gate Advisory
              </span>
              <h3 className="font-['Poppins',sans-serif] font-light uppercase text-[24px] sm:text-[26px] tracking-[0.02em] text-white leading-tight">
                Barcelona Office
              </h3>
              <div className="pt-1 space-y-0.5 font-['Poppins',sans-serif] font-light text-[14.5px] text-[#57D182] leading-[1.6]">
                <span className="block">{CONTACT_CONFIG.address.street}</span>
                <span className="block">
                  {CONTACT_CONFIG.address.postalCode} {CONTACT_CONFIG.address.city}
                </span>
                <span className="block">{CONTACT_CONFIG.address.country}</span>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <MapPin className="w-7 h-7 text-white stroke-[1.6]" />
            </div>
          </motion.div>

          {/* Card 2: Institutional Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            className="relative bg-[#1A5C3B] text-white rounded-none p-8 sm:p-9 min-h-[215px] flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-2.5 pr-8">
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#57D182]">
                Green Gate Advisory
              </span>
              <h3 className="font-['Poppins',sans-serif] font-light uppercase text-[24px] sm:text-[26px] tracking-[0.02em] text-white leading-tight">
                {isSpanish ? 'Correo Institucional' : 'Institutional Enquiries'}
              </h3>
              <div className="pt-1">
                <a
                  href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(CONTACT_CONFIG.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openOutlookCompose({ to: CONTACT_CONFIG.email });
                  }}
                  className="font-['Poppins',sans-serif] font-light text-[15px] text-[#57D182] hover:text-white transition-colors break-all"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Mail className="w-7 h-7 text-white stroke-[1.6]" />
            </div>
          </motion.div>

          {/* Card 3: Direct WhatsApp Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.16 }}
            className="relative bg-[#1A5C3B] text-white rounded-none p-8 sm:p-9 min-h-[215px] flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-2.5 pr-8">
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#57D182]">
                {isSpanish ? 'WhatsApp Directo (España)' : 'Direct WhatsApp Line (Spain)'}
              </span>
              <h3 className="font-['Poppins',sans-serif] font-light uppercase text-[24px] sm:text-[26px] tracking-[0.02em] text-white leading-tight">
                WhatsApp
              </h3>
              <div className="pt-1 space-y-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Poppins',sans-serif] font-light text-[15.5px] text-[#57D182] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{CONTACT_CONFIG.whatsapp.display}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="flex items-start gap-2 text-[12.5px] font-light text-white/70 leading-relaxed pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#57D182] flex-shrink-0 mt-0.5" />
                  <span>
                    {isSpanish
                      ? 'Lunes a Viernes: 09:00 - 18:00 (Hora de Europa Central - CET)'
                      : 'Monday to Friday: 09:00 - 18:00 (Central European Time - CET)'}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <MessageCircle className="w-7 h-7 text-white stroke-[1.6]" />
            </div>
          </motion.div>
        </div>

        {/* Full-Width Sharp-Corner Google Maps Block (Exact GCC "Our Location" Map Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white border border-[#e5e7eb] rounded-none overflow-hidden flex flex-col"
        >
          <iframe
            title="Green Gate Advisory Office Location - Barcelona"
            src={CONTACT_CONFIG.address.mapsEmbedUrl}
            className="w-full h-[380px] sm:h-[440px] lg:h-[480px] border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Clean GCC Map Utility & Action Bar */}
          <div className="p-4 sm:px-6 sm:py-4 bg-[#f7f7f7] border-t border-[#e5e7eb] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[13px] text-[#555555] font-light">
              <span className="font-medium text-[#1A5C3B]">
                {CONTACT_CONFIG.address.fullFormatted}
              </span>
              <a
                href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#019934] font-medium hover:text-[#1A5C3B] hover:underline inline-flex items-center gap-1 transition-colors"
              >
                <span>{isSpanish ? 'Abrir en mapa completo' : 'View larger map'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white text-[13.5px] font-normal transition-colors duration-200"
              >
                <Navigation className="w-4 h-4" />
                <span>{isSpanish ? 'Cómo Llegar (Google Maps)' : 'Get Directions'}</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[5px] bg-transparent border border-[#019934] text-[#019934] hover:bg-[#019934] hover:text-white text-[13.5px] font-normal transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
