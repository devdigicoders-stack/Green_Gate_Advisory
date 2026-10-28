import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HomeCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#FAFCF9] border-t border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Elevated Architectural Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-none bg-white border border-[#D5E3DA] p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.07),0_4px_16px_-2px_rgba(0,0,0,0.03)] text-center space-y-6 sm:space-y-7 overflow-hidden"
        >
          {/* Top green accent strip */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#019935] via-[#02B840] to-[#019935]" />

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-xs font-semibold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] shadow-2xs">
            <span className="w-1.5 h-1.5 bg-[#019935] rounded-none"></span>
            <span>{t('home.cta.eyebrow', 'Advisory Engagement')}</span>
          </div>

          {/* Expanded Refined Headline */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16221A] tracking-tight leading-snug max-w-4xl mx-auto">
            {t('home.cta.headline', 'Ready to move from climate complexity to practical action?')}
          </h2>

          {/* Concise Supporting Sentence */}
          <p className="text-base sm:text-lg text-[#55695D] max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Contact Green Gate Advisory to discuss your carbon market, CBAM, climate finance, or sustainability priorities.
          </p>

          {/* Action Buttons (rounded-none and smooth hover) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to={getLocalizedPath('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group focus:outline-none"
            >
              <span>{t('home.cta.btnPrimary', 'Request a Consultation')}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-none bg-white hover:bg-[#F2F8F4] text-[#16221A] hover:text-[#019935] font-semibold text-xs sm:text-sm tracking-wider uppercase border border-[#CFDFD4] hover:border-[#019935] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-none"
            >
              <span>{t('home.cta.btnSecondary', 'Contact Our Team')}</span>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
