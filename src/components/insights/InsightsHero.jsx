import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, BookOpen } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import insightsEcoVideo from '../../assets/insights-eco.mp4';

export default function InsightsHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-20 pb-8 sm:pt-36 sm:pb-24">
      {/* Background Photography & Video with Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key="insights-eco-video"
          src={insightsEcoVideo || '/insights-eco.mp4'}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-85 scale-115 transform motion-safe:transition-transform motion-safe:duration-1000"
        >
          <source src={insightsEcoVideo || '/insights-eco.mp4'} type="video/mp4" />
        </video>
        <img
          alt="Modern climate research institute and ESG intelligence center"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-center opacity-85 scale-105 -z-10"
          loading="eager"
        />
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
            {t('insights.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium" aria-current="page">
            {t('insights.hero.breadcrumbCurrent', 'Insights & Resources')}
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
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            <span>{t('insights.hero.eyebrow', 'Knowledge & Technical Publications')}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.12]">
            {t('insights.hero.title', 'Insights & Resources')}
          </h1>

          <p className="text-sm sm:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal">
            {t('insights.hero.leadShort', 'Practical briefings and statutory intelligence on carbon markets, CBAM, and climate finance.')}
          </p>
        </motion.div>

        {/* Advisory Quality Notice - Hidden on mobile */}
        <div className="hidden sm:flex pt-5 sm:pt-6 border-t border-white/10 flex-wrap items-center gap-3 sm:gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Subject-matter expert review · Current international frameworks</span>
          </div>
          <span className="inline text-white/20">|</span>
          <span className="hidden xs:inline">Technical checklists & policy intelligence</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden md:inline">Zero speculative or unverified claims</span>
        </div>

      </div>
    </section>
  );
}
