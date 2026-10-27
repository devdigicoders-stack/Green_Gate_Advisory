import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AboutHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative min-h-[50vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-center overflow-hidden bg-neutral-900 text-white pt-20 pb-8 sm:pt-28 sm:pb-16">
      {/* Background Photography & Video with Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-85 scale-115"
        >
          <source src="/videos/about-hero.webm" type="video/webm" />
        </video>
        <img
          src="/images/about-landscape.jpg"
          alt="Temperate forest river valley representing natural capital and climate resilience"
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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-white/70">
          <Link
            to={getLocalizedPath('/')}
            className="hover:text-white transition-colors focus:outline-none focus:underline"
          >
            {t('about.hero.breadcrumbHome', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white font-medium" aria-current="page">
            {t('about.hero.breadcrumbCurrent', 'About Us')}
          </span>
        </nav>

        {/* Content Block */}
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#019935]" />
            <span>Specialised Climate Consultancy</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            {t('about.hero.title', 'About Green Gate Advisory')}
          </h1>

          <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-sans font-normal">
            Independent advisory connecting climate policy, carbon markets, and project finance.
          </p>
        </div>

        {/* Advisory Credibility Strip - Hidden on mobile to prevent text clutter */}
        <div className="hidden sm:flex pt-5 sm:pt-6 border-t border-white/10 flex-wrap items-center gap-3 sm:gap-6 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>{t('about.hero.credibility1', 'Independent technical, regulatory and finance advisory')}</span>
          </div>
          <span className="inline text-white/20">|</span>
          <span className="hidden xs:inline">{t('about.hero.credibility2', 'Connecting policy to practical delivery')}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden md:inline">{t('about.hero.credibility3', 'Zero speculative claims or guaranteed credit issuances')}</span>
        </div>

      </div>
    </section>
  );
}
