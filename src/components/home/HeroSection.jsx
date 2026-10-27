import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import homepageVideo from '../../assets/homepage.mp4';

export default function HeroSection() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const scrollToContent = () => {
    const nextSection = document.getElementById('about') || document.getElementById('what-we-do');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-between overflow-hidden bg-neutral-900 text-white scroll-mt-24">
      {/* Background Cinematic Video with Photography Fallback & Clean Neutral Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-canopy.jpg"
          className="w-full h-full object-cover object-center opacity-90 scale-105 sm:scale-115 transform motion-safe:transition-transform motion-safe:duration-1000"
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

        {/* Cinematic gradient overlays with neutral photography exposure */}
        <div className="absolute inset-0 bg-black/60 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Main Hero Content - Responsive compact height for mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-8 sm:pb-12 flex-grow flex flex-col justify-center w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-6 text-left items-start">
          
          {/* Eyebrow badge - Hidden on mobile to remove text clutter */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#019935] animate-pulse"></span>
            <span>CLIMATE ADVISORY</span>
          </div>

          {/* Primary H1 Headline */}
          <h1 className="font-display font-bold text-2xl xs:text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] text-white tracking-tight leading-[1.14]">
            {t('home.hero.headline', 'Turning Climate Complexity into Strategic Opportunity')}
          </h1>

          {/* Concise Supporting Text */}
          <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-sans max-w-xl font-normal">
            Strategic advisory across carbon markets and climate finance.
          </p>

          {/* Clean Action Buttons */}
          <div className="pt-2 flex flex-row items-center justify-start gap-3 w-full sm:w-auto">
            <Link
              to={getLocalizedPath('/services')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-4 rounded-full bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
            >
              <span>{t('home.hero.ctaPrimary', 'Explore Services')}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide uppercase border border-white/30 backdrop-blur-md transition-all duration-300 focus:outline-none"
            >
              <span>{t('home.hero.ctaSecondary', 'Contact Us')}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Discretion Notice - Hidden on mobile */}
      <div className="hidden sm:block relative z-10 border-t border-white/10 bg-black/25 backdrop-blur-xs py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Independent technical, regulatory and project advisory.</span>
          </div>

          <button
            type="button"
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 hover:text-gold-light transition-colors group focus:outline-none"
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
