import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HeroSection() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const scrollToContent = () => {
    const nextSection = document.getElementById('what-we-do');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-forest-dark text-white">
      {/* Background Photography with Sophisticated Directional Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-canopy.jpg"
          alt="Temperate rainforest canopy representing sustainable natural capital"
          className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-102 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
        />
        {/* Directional cinematic gradient: 100% readable text on left, crystal clear rainforest canopy on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/25" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 flex-grow flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>{t('home.hero.eyebrow', 'CLIMATE & ENVIRONMENTAL ADVISORY')}</span>
          </div>

          {/* Primary H1 Headline from PDF - Editorial Oversized Display */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] text-white tracking-tight leading-[1.06]">
            {t('home.hero.headline', 'Turning Climate Complexity into Strategic Opportunity')}
          </h1>

          {/* Supporting Text from PDF */}
          <p className="text-base sm:text-xl text-sand-surface/90 leading-relaxed font-sans max-w-2xl font-light">
            {t('home.hero.subheadline', 'Green Gate Advisory supports governments, companies, exporters and project developers with carbon market strategy, CBAM and ETS readiness, climate finance, nature-based solutions and environmental policy—helping turn climate priorities into practical, measurable action.')}
          </p>

          {/* Primary Action Buttons - Pill Shaped */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to={getLocalizedPath('/services')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest-dark"
            >
              <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
              <ArrowRight className="w-4 h-4 text-forest-dark transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/30 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>{t('home.hero.ctaSecondary', 'Request a Consultation')}</span>
            </Link>
          </div>

          {/* Secondary Quick Access Links */}
          <div className="pt-6 flex flex-wrap items-center gap-2.5 text-xs text-sand-surface/85">
            <span className="text-gold-light/90 uppercase tracking-widest text-[11px] font-semibold">Priority Focus:</span>
            <Link
              to={getLocalizedPath('/services/cbam-advisory')}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-sand-surface transition-all backdrop-blur-xs"
            >
              {t('home.hero.quickLinkCbam', 'Discuss Your CBAM Exposure')} →
            </Link>
            <Link
              to={getLocalizedPath('/services/carbon-market-advisory')}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-sand-surface transition-all backdrop-blur-xs"
            >
              {t('home.hero.quickLinkCarbon', 'Develop a Carbon Project')} →
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Discretion Notice */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Independent technical, regulatory and project advisory.</span>
          </div>

          <button
            type="button"
            onClick={scrollToContent}
            className="hidden sm:inline-flex items-center gap-2 hover:text-gold-light transition-colors group focus:outline-none"
            aria-label="Scroll to What We Do section"
          >
            <span>{t('home.hero.scrollText', 'Scroll to explore advisory scope')}</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
