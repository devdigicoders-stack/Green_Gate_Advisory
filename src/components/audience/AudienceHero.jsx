import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Users } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AudienceHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background Photography with Sophisticated Directional Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/forestry.jpg"
          alt="Diverse international forest landscape representing governments, industrial sectors and conservation initiatives"
          className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-102"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-sand-surface/75">
          <Link 
            to={getLocalizedPath('/')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('audience.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium" aria-current="page">
            {t('audience.hero.breadcrumbCurrent', 'Who We Serve')}
          </span>
        </nav>

        {/* Content Block with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-gold" />
            <span>{t('audience.hero.eyebrow', 'Client & Stakeholder Ecosystem')}</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            {t('audience.hero.title', 'Who We Serve')}
          </h1>

          <p className="text-base sm:text-xl text-sand-surface/90 leading-relaxed font-sans font-light">
            {t('audience.hero.lead', 'Green Gate Advisory supports public institutions, industrial exporters, carbon developers, investors and international organisations as they navigate climate complexity, regulatory exposure and sustainable project delivery.')}
          </p>
        </motion.div>

        {/* Advisory Context Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Five distinct client groups · Bespoke technical advisory</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Sovereign policy to corporate carbon compliance</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Zero generic templates or speculative commitments</span>
        </div>

      </div>
    </section>
  );
}
