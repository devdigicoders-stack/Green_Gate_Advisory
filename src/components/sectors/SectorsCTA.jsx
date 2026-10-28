import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function SectorsCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#16221A] text-white py-16 sm:py-20 lg:py-24 border-t border-[#1E3025]">
      {/* Background subtle gradient & accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#16221A] via-[#0E1712] to-[#16221A] opacity-95" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-none bg-[#019935]/10 blur-3xl pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-none bg-[#019935] animate-pulse" />
          <span>{t('sectors.cta.eyebrow', 'Sectoral Consultation')}</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {t('sectors.cta.heading', 'Navigate Climate Challenges in Your Sector')}
        </h2>

        <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
          {t('sectors.cta.description', 'Connect with Green Gate Advisory to discuss regulatory exposure, decarbonisation options, or project opportunities tailored to your sector.')}
        </p>

        {/* Buttons: Request a Consultation & Explore Our Services */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-[#019935] hover:bg-[#017A2A] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_16px_-2px_rgba(1,153,53,0.4)] hover:shadow-[0_8px_24px_-4px_rgba(1,153,53,0.6)]"
          >
            <span>{t('sectors.cta.primaryBtn', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            to={getLocalizedPath('/services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all duration-300"
          >
            <span>{t('sectors.cta.secondaryBtn', 'Explore Our Services')}</span>
          </Link>
        </div>

        {/* Professional Disclaimer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-center text-xs text-white/70 font-sans max-w-4xl mx-auto text-center leading-relaxed">
          <p className="inline-flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-white whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-[#019935] flex-shrink-0" />
              <span>Independent Advisory Notice:</span>
            </span>
            <span>
              {t('sectors.cta.disclaimer', 'Recommendations are customized to sector-specific legislation, verified carbon accounting standards, and international funding rules.')}
            </span>
          </p>
        </div>

      </motion.div>
    </section>
  );
}
