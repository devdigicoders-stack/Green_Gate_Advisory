import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import sectorVideo from '../../assets/sectorpage.mp4';

export default function SectorsHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-20 pb-8 sm:pt-36 sm:pb-24">
      {/* Background Cinematic Video with Photography Fallback & Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/infrastructure.jpg"
          className="w-full h-full object-cover object-center opacity-85 scale-115"
        >
          <source 
            src={sectorVideo} 
            type="video/mp4" 
          />
          <img
            src="/images/infrastructure.jpg"
            alt="Sustainable industrial and natural infrastructure representing cross-sector climate resilience"
            className="w-full h-full object-cover object-right sm:object-center opacity-85"
          />
        </video>
        {/* Neutral contrast gradient overlays */}
        <div className="absolute inset-0 bg-black/60 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-sand-surface/75">
          <Link 
            to={getLocalizedPath('/')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('sectors.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium" aria-current="page">
            {t('sectors.hero.breadcrumbCurrent', 'Sectors')}
          </span>
        </nav>

        {/* Content Block with Elegant Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl space-y-3 sm:space-y-6"
        >
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>{t('sectors.hero.eyebrow', 'Sectoral Advisory Practice')}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.12]">
            {t('sectors.hero.title', 'Sectors We Support')}
          </h1>

          <p className="text-sm sm:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal">
            {t('sectors.hero.leadShort', 'Context-specific advisory aligned with sector operations and climate compliance.')}
          </p>
        </motion.div>

        {/* Advisory Quality Notice - Hidden on mobile */}
        <div className="hidden sm:flex pt-5 sm:pt-6 border-t border-white/10 flex-wrap items-center gap-3 sm:gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Eleven priority sectors · Context-specific regulatory analysis</span>
          </div>
          <span className="inline text-white/20">|</span>
          <span className="hidden xs:inline">Connecting compliance mandates to capital allocation</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden md:inline">Zero speculative or unverified claims</span>
        </div>

      </div>
    </section>
  );
}
