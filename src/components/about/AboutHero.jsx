import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AboutHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white pt-24 pb-14 sm:pt-36 sm:pb-24">
      {/* Background Photography & Video with Sophisticated Directional Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-85 scale-102"
        >
          <source src="/videos/about-hero.webm" type="video/webm" />
        </video>
        <img
          src="/images/about-landscape.jpg"
          alt="Temperate forest river valley representing natural capital and climate resilience"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-center opacity-85 scale-102 -z-10"
          loading="eager"
        />
        {/* Mobile vertical gradient: ensures 100% contrast on mobile screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/90 to-forest-dark/80 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 via-50% to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

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
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>{t('about.hero.eyebrow', 'Specialised Climate Consultancy')}</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.12]">
            {t('about.hero.title', 'About Green Gate Advisory')}
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-sand-surface/90 leading-relaxed font-sans font-light">
            {t('about.hero.lead', 'Supporting governments, businesses, exporters, project developers, investors and institutions as they respond to climate change, evolving regulation and the transition to a low-carbon, climate-resilient economy.')}
          </p>
        </div>

        {/* Advisory Credibility Strip */}
        <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>{t('about.hero.credibility1', 'Independent technical, regulatory and finance advisory')}</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden xs:inline">{t('about.hero.credibility2', 'Connecting policy to practical delivery')}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden md:inline">{t('about.hero.credibility3', 'Zero speculative claims or guaranteed credit issuances')}</span>
        </div>

      </div>
    </section>
  );
}
