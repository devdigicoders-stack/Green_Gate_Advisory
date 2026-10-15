import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AboutHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background Photography with Sophisticated Directional Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-landscape.jpg"
          alt="Temperate forest river valley representing natural capital and climate resilience"
          className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-102 motion-safe:transition-transform motion-safe:duration-1000"
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
            {t('about.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium" aria-current="page">
            {t('about.hero.breadcrumbCurrent', 'About Us')}
          </span>
        </nav>

        {/* Content Block */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>{t('about.hero.eyebrow', 'Specialised Climate Consultancy')}</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            {t('about.hero.title', 'About Green Gate Advisory')}
          </h1>

          <p className="text-base sm:text-xl text-sand-surface/90 leading-relaxed font-sans font-light">
            {t('about.hero.lead', 'Supporting governments, businesses, exporters, project developers, investors and institutions as they respond to climate change, evolving regulation and the transition to a low-carbon, climate-resilient economy.')}
          </p>
        </div>

        {/* Advisory Credibility Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>{t('about.hero.credibility1', 'Independent technical, regulatory and finance advisory')}</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{t('about.hero.credibility2', 'Connecting policy to practical delivery')}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{t('about.hero.credibility3', 'Zero speculative claims or guaranteed credit issuances')}</span>
        </div>

      </div>
    </section>
  );
}
