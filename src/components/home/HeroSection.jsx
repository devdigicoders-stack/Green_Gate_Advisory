import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import homepageVideo from '../../assets/homepage.mp4';

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
    <section className="relative min-h-[88vh] sm:min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-forest-dark text-white">
      {/* Background Cinematic Video with Photography Fallback & Directional Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-canopy.jpg"
          className="w-full h-full object-cover object-center opacity-85 scale-102 transform motion-safe:transition-transform motion-safe:duration-1000"
        >
          <source 
            src={homepageVideo} 
            type="video/mp4" 
          />
          {/* Fallback image if video fails to load or low-power mode */}
          <img
            src="/images/hero-canopy.jpg"
            alt="Temperate rainforest canopy representing sustainable natural capital"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* Mobile vertical gradient: ensures 100% contrast on mobile portrait screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/85 to-forest-dark/80 sm:hidden pointer-events-none" />
        {/* Desktop directional cinematic gradient for ultra-crisp typography readability */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 via-50% to-forest-dark/40 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 xs:pt-24 sm:pt-28 lg:pt-30 pb-6 sm:pb-8 flex-grow flex flex-col justify-center w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-5 text-left items-start">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse"></span>
            <span>{t('home.hero.eyebrow', 'CLIMATE & ENVIRONMENTAL ADVISORY')}</span>
          </div>

          {/* Primary H1 Headline from PDF - Editorial Responsive Display */}
          <h1 className="font-display font-bold text-2xl xs:text-3xl sm:text-5xl lg:text-[3.15rem] xl:text-[3.65rem] text-white tracking-tight leading-[1.12]">
            {t('home.hero.headline', 'Turning Climate Complexity into Strategic Opportunity')}
          </h1>

          {/* Supporting Text from PDF */}
          <p className="text-xs xs:text-sm sm:text-base text-sand-surface/90 leading-relaxed font-sans max-w-2xl font-light">
            {t('home.hero.subheadline', 'Green Gate Advisory supports governments, companies, exporters and project developers with carbon market strategy, CBAM and ETS readiness, climate finance, nature-based solutions and environmental policy—helping turn climate priorities into practical, measurable action.')}
          </p>

          {/* Primary Action Buttons - Stacked on Mobile, Inline on Tablet/Desktop */}
          <div className="pt-1.5 sm:pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to={getLocalizedPath('/services')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest-dark"
            >
              <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
              <ArrowRight className="w-4 h-4 text-forest-dark transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide uppercase border border-white/30 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>{t('home.hero.ctaSecondary', 'Request a Consultation')}</span>
            </Link>
          </div>

          {/* Secondary Quick Access Links */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2.5 text-xs text-sand-surface/85">
            <span className="text-gold-light/90 uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold w-full sm:w-auto">
              Priority Focus:
            </span>
            <Link
              to={getLocalizedPath('/services/cbam-advisory')}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-sand-surface transition-all backdrop-blur-xs hover:border-gold/40 hover:text-white text-[11px] sm:text-xs"
            >
              {t('home.hero.quickLinkCbam', 'Discuss Your CBAM Exposure')} →
            </Link>
            <Link
              to={getLocalizedPath('/services/carbon-market-advisory')}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-sand-surface transition-all backdrop-blur-xs hover:border-gold/40 hover:text-white text-[11px] sm:text-xs"
            >
              {t('home.hero.quickLinkCarbon', 'Develop a Carbon Project')} →
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Discretion Notice */}
      <div className="relative z-10 border-t border-white/10 bg-black/25 backdrop-blur-xs py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2 text-center sm:text-left">
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
