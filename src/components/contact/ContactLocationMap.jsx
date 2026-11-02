import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Clock, 
  Navigation,
  MessageCircle
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { CONTACT_CONFIG } from '../../config/contactConfig';

export default function ContactLocationMap() {
  const { t } = useTranslation();
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
    <section className="py-12 sm:py-16 lg:py-20 bg-sage/20 border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-xs font-semibold tracking-widest uppercase bg-[#019935]/10 text-[#019935] border border-[#019935]/20">
            <MapPin className="w-3.5 h-3.5 text-[#019935]" />
            <span>{isSpanish ? 'Ubicación Oficial' : 'Official Location'}</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid: Office Details Card + Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card: Office Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white border border-sand-border p-6 sm:p-8 flex flex-col justify-between shadow-sm space-y-6"
          >
            <div className="space-y-6">
              
              {/* Brand Header */}
              <div className="border-b border-sand-border pb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#019935]">
                  Green Gate Advisory
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal mt-1">
                  Barcelona Office
                </h3>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-[#E7F6ED] text-[#019935] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 text-sm">
                  <span className="block font-bold text-charcoal">
                    {CONTACT_CONFIG.address.street}
                  </span>
                  <span className="block text-charcoal-muted">
                    {CONTACT_CONFIG.address.postalCode} {CONTACT_CONFIG.address.city}
                  </span>
                  <span className="block text-charcoal-muted font-medium">
                    {CONTACT_CONFIG.address.country}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-none bg-[#E7F6ED] text-[#019935] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <span className="text-xs text-charcoal-muted block">
                    {isSpanish ? 'Correo Institucional' : 'Institutional Enquiries'}
                  </span>
                  <a 
                    href={`mailto:${CONTACT_CONFIG.email}`} 
                    className="font-semibold text-charcoal hover:text-[#019935] transition-colors"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp & Direct Contact */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-none bg-[#E7F9EE] text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="text-sm">
                  <span className="text-xs text-charcoal-muted block">
                    {isSpanish ? 'WhatsApp Directo (España)' : 'Direct WhatsApp Line (Spain)'}
                  </span>
                  <a 
                    href={waUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0C3B1E] hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.whatsapp.display}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center gap-3.5 pt-2 border-t border-sand-border/70">
                <Clock className="w-4 h-4 text-[#019935] flex-shrink-0" />
                <span className="text-xs text-charcoal-muted">
                  {isSpanish 
                    ? 'Lunes a Viernes: 09:00 - 18:00 (Hora de Europa Central - CET)'
                    : 'Monday to Friday: 09:00 - 18:00 (Central European Time - CET)'}
                </span>
              </div>

            </div>

            {/* Actions: Directions + WhatsApp CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none bg-[#019935] hover:bg-[#017A2A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>{isSpanish ? 'Cómo Llegar (Google Maps)' : 'Get Directions'}</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </motion.div>

          {/* Interactive Google Map Embed (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-sand-border shadow-sm min-h-[380px] lg:min-h-full relative overflow-hidden flex flex-col"
          >
            <iframe
              title="Green Gate Advisory Office Location - Barcelona"
              src={CONTACT_CONFIG.address.mapsEmbedUrl}
              className="w-full h-full min-h-[380px] border-0 flex-grow"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Footer Bar with Verification Badge */}
            <div className="p-3 bg-white border-t border-sand-border/80 flex items-center justify-between text-xs text-charcoal-muted">
              <span className="font-mono text-[11px]">
                {CONTACT_CONFIG.address.fullFormatted}
              </span>
              <a
                href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#019935] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>{isSpanish ? 'Abrir en mapa completo' : 'View larger map'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

