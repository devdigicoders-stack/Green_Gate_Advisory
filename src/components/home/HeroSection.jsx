import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const SLIDES = [
  {
    image: '/images/hero-slide-1.jpg',
    alt: 'Temperate rainforest and natural carbon capital',
    badge: 'NATURE-BASED SOLUTIONS',
    headlineKey: 'home.hero.headline',
    defaultHeadline: 'Turning Climate Complexity into Strategic Opportunity',
    desc: 'Strategic advisory across carbon markets, Article 6, and natural capital.'
  },
  {
    image: '/images/hero-slide-2.jpg',
    alt: 'Renewable energy transition and carbon pricing',
    badge: 'CLEAN ENERGY & DECARBONIZATION',
    headlineKey: 'home.hero.headlineCleanEnergy',
    defaultHeadline: 'Accelerating High-Integrity Energy Transition',
    desc: 'Technical expertise in emissions trading systems (ETS), CBAM, and industrial decarbonization.'
  },
  {
    image: '/images/hero-slide-3.jpg',
    alt: 'Sustainable global finance and corporate ESG',
    badge: 'CLIMATE FINANCE & ESG',
    headlineKey: 'home.hero.headlineClimateFinance',
    defaultHeadline: 'Mobilizing Capital for Global Sustainable Impact',
    desc: 'Independent fiduciary advisory, corporate sustainability, and carbon credit monetization.'
  }
];

export default function HeroSection() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  // Continuous automatic scroll slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToContent = () => {
    const nextSection = document.getElementById('about') || document.getElementById('what-we-do');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = SLIDES[currentSlide];

  return (
    <section 
      id="home" 
      aria-label="Hero slider"
      className="relative min-h-[56vh] sm:min-h-[66vh] lg:min-h-[72vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white scroll-mt-24 select-none"
    >
      {/* Background Image Carousel with Smooth Fade and Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Cinematic Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-black/60 sm:hidden pointer-events-none z-[2]" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 pointer-events-none z-[2]" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none z-[2]" />
      </div>

      {/* Main Hero Content - Responsive on Mobile & Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-14 flex-grow flex flex-col justify-center w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-4 text-left items-start">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-none bg-[#019935] animate-pulse"></span>
            <span>{active.badge}</span>
          </div>

          {/* Primary H1 Headline - Fully Responsive */}
          <h1 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] text-white tracking-tight leading-[1.2] flex items-center transition-all duration-500">
            {t(active.headlineKey, active.defaultHeadline)}
          </h1>

          {/* Concise Supporting Text */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-sans max-w-xl font-normal transition-all duration-500">
            {active.desc}
          </p>

          {/* Action Buttons: Full Responsive Stack on Phone, Side-by-Side on Desktop, rounded-none on both */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to={getLocalizedPath('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none"
            >
              <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
            >
              <span>{t('home.hero.ctaSecondary', 'Request a Consultation')}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Discretion Notice */}
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
