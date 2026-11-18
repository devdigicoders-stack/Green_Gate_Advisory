import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function InsightsCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative w-full bg-[#E4F6EA]/55 font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle Concentric White Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -left-24 -bottom-24 w-[380px] sm:w-[480px] h-auto opacity-45"
      >
        {Array.from({ length: 14 }).map((_, idx) => (
          <circle
            key={idx}
            cx="180"
            cy="420"
            r={55 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white rounded-[4px] border border-[#019934]/35 px-7 py-12 sm:px-14 sm:py-16 text-center space-y-7 overflow-hidden"
        >
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

          <div className="flex flex-col items-center space-y-3">
            <span className="inline-block w-[64px] h-[2px] bg-[#019934]" aria-hidden="true" />
            <span className="text-[12.5px] sm:text-[13.5px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('insights.cta.eyebrow', 'Technical Advisory Support')}
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] font-light text-[30px] sm:text-[42px] lg:text-[48px] text-[#1A5C3B] tracking-[-0.01em] leading-[1.18] max-w-3xl mx-auto">
            {t('insights.cta.heading', 'Need Guidance on a Climate or Environmental Challenge?')}
          </h2>

          <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[17.5px] text-[#555555] max-w-2xl mx-auto leading-[1.7]">
            {t('insights.cta.description', 'Whether preparing for CBAM compliance, developing a carbon credit project, or structuring a multilateral funding proposal, our advisory team provides tailored technical support.')}
          </p>

          {/* GCC Button Pair (.btn-style1 + .btn-style2) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={getLocalizedPath('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 group focus:outline-none"
            >
              <span>{t('insights.cta.primaryBtn', 'Explore Our Services')}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-transparent border border-[#019934] text-[#019934] hover:bg-[#019934] hover:text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 focus:outline-none"
            >
              <span>{t('insights.cta.secondaryBtn', 'Request a Consultation')}</span>
            </Link>
          </div>

          {/* Professional Caution Disclaimer */}
          <div className="pt-6 border-t border-[#efefef] flex items-center justify-center text-[12.5px] text-[#555555] font-light max-w-4xl mx-auto text-center leading-relaxed">
            <p className="inline-flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#1A5C3B] whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-[#019934] flex-shrink-0" />
                <span>Independent Advisory Notice:</span>
              </span>
              <span>
                {t('insights.cta.disclaimer', 'Recommendations reflect current statutory frameworks and accredited methodologies without speculative commitments.')}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
