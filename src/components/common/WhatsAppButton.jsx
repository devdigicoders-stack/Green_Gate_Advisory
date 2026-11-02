import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { CONTACT_CONFIG } from '../../config/contactConfig';

// Official WhatsApp Vector Icon
function WhatsAppIcon({ className = 'w-6 h-6' }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const { isSpanish } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const defaultMsg = isSpanish 
    ? CONTACT_CONFIG.whatsapp.defaultMessageEs 
    : CONTACT_CONFIG.whatsapp.defaultMessageEn;

  const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp.raw}?text=${encodeURIComponent(defaultMsg)}`;

  const label = isSpanish ? 'Chat por WhatsApp' : 'Chat on WhatsApp';
  const tooltipText = isSpanish 
    ? '¿Tiene dudas sobre asesoría climática? Escríbanos directamente.' 
    : 'Have questions about climate advisory? Message our specialists directly.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden select-none">
      
      {/* Floating Prompt Bubble on First Visit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 max-w-xs sm:max-w-sm bg-white rounded-none border border-sand-border shadow-2xl p-4 text-left relative"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-[#019935] font-bold text-xs uppercase tracking-wider">
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>Green Gate Advisory</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-charcoal-muted hover:text-charcoal p-0.5 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="mt-2 text-xs text-charcoal/90 leading-relaxed font-sans">
              {tooltipText}
            </p>

            <div className="mt-3 pt-2.5 border-t border-sand-border flex items-center justify-between">
              <span className="text-[11px] text-charcoal-muted font-mono">
                {CONTACT_CONFIG.whatsapp.display}
              </span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] uppercase tracking-wider rounded-none shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>{isSpanish ? 'Abrir Chat' : 'Start Chat'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <div className="relative group">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onClick={() => setHasInteracted(true)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
        </a>

        {/* Hover Pill Label on Desktop */}
        <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 shadow-md">
          {label}
        </div>
      </div>

    </div>
  );
}

