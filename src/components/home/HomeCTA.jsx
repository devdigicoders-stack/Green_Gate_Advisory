import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HomeCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section
      id="contact"
      className="relative w-full bg-white font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24 overflow-hidden"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-[4px] bg-[#57D182]/[0.14] border border-[#019934]/40 px-6 py-10 sm:px-12 sm:py-14 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-3.5" aria-hidden="true" />
            <span className="text-[12.5px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('home.cta.eyebrow', 'Advisory Engagement')}
            </span>

            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[28px] sm:text-[38px] lg:text-[44px] text-[#1A5C3B] leading-[1.18]">
              {t('home.cta.headline', 'Ready to Move from Climate Complexity to Action?')}
            </h2>

            <p className="mt-3 font-['Poppins',sans-serif] font-light text-[15px] sm:text-[17px] text-[#3C3C3C]/85 max-w-2xl leading-[1.6]">
              Speak with our team on carbon markets, CBAM, climate finance, or ESG priorities.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200 group"
              >
                <span>{t('home.cta.btnPrimary', 'Request a Consultation')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[5px] bg-white hover:bg-[#019934] text-[#1A5C3B] hover:text-white border border-[#019934] font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200"
              >
                <span>{t('home.cta.btnSecondary', 'Contact Our Team')}</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
