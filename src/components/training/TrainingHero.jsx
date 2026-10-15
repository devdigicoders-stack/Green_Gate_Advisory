import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background Photography with Sophisticated Directional Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/training-hero.jpg"
          alt="Executive training, technical capacity building and institutional climate education"
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
            {t('training.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium" aria-current="page">
            {t('training.hero.breadcrumbCurrent', 'Training & Capacity Building')}
          </span>
        </nav>

        {/* Content Block with Elegant Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            <span>{t('training.hero.eyebrow', 'Institutional Capability')}</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            {t('training.hero.title', 'Training & Capacity Building')}
          </h1>

          <p className="text-base sm:text-xl text-sand-surface/90 leading-relaxed font-sans font-light">
            {t('training.hero.lead', 'Green Gate Advisory supports training and capacity-building programmes tailored to the knowledge requirements of public institutions, businesses, exporters, project teams and other stakeholders. Training formats, scope and depth are discussed and confirmed based on institutional objectives.')}
          </p>

          <div className="pt-2">
            <Link
              to={getLocalizedPath('/contact?service=training')}
              state={{ serviceInterest: 'Training and Capacity Building' }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>{t('training.hero.primaryBtn', 'Discuss a Training Programme')}</span>
              <ArrowRight className="w-4 h-4 text-forest-dark" />
            </Link>
          </div>
        </motion.div>

        {/* Advisory Quality Notice */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Tailored institutional scope · Zero pre-set course fees or rigid packages</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Interactive workshops & executive briefings</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Zero unverified completion claims</span>
        </div>

      </div>
    </section>
  );
}
