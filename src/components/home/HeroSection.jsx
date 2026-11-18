import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Continuous automatic slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
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
      className="w-full bg-white font-['Poppins',sans-serif] scroll-mt-24 select-none"
    >
      {/* Boxed-Wide Hero Slider Container aligned identically to Header (w-[90%] max-w-[1680px]) */}
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="relative w-full min-h-[520px] sm:min-h-[560px] md:h-[600px] lg:h-[660px] xl:h-[700px] overflow-hidden bg-[#1A5C3B]">
          {/* 1. Background Image Carousel with Smooth Crossfade & Gentle Zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.image}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className={`w-full h-full object-cover object-center transform transition-transform duration-[6500ms] ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* 2. Concentric Thin White Arcs Watermark (Bottom-Left Signature Motif) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 520 520"
            fill="none"
            className="pointer-events-none absolute -left-24 -bottom-28 w-[340px] sm:w-[440px] lg:w-[520px] h-auto z-[2] opacity-25"
          >
            {Array.from({ length: 18 }).map((_, idx) => (
              <circle
                key={idx}
                cx="190"
                cy="330"
                r={55 + idx * 18}
                stroke="#ffffff"
                strokeWidth="1.25"
                strokeOpacity={Math.max(0.18, 0.55 - idx * 0.02)}
              />
            ))}
          </svg>

          {/* 3. Signature Layered Slanted Translucent Brand-Green Geometric Overlays */}
          {/* Desktop / Tablet Stepped Diagonal Polygons */}
          <div className="hidden md:block pointer-events-none absolute inset-0 z-[3]">
            {/* Band A (0%–19%): Top-left translucent logo-green diagonal canopy */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 153, 52, 0.70) 0%, rgba(34, 178, 82, 0.60) 100%)',
                clipPath: 'polygon(0 0, 62% 0, 56% 19%, 0 19%)'
              }}
            />

            {/* Band B (19%–67%): Main vibrant logo-green diagonal ribbon (Headline & Subtitle) */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(110deg, rgba(1, 153, 52, 0.92) 0%, rgba(40, 182, 86, 0.88) 100%)',
                clipPath: 'polygon(0 19%, 61% 19%, 50.5% 67%, 0 67%)'
              }}
            />

            {/* Band C (67%–86%): Lower-left balanced botanical-green diagonal panel (CTA Buttons) */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 122, 56, 0.84) 0%, rgba(1, 153, 52, 0.76) 100%)',
                clipPath: 'polygon(0 67%, 54% 67%, 48% 86%, 0 86%)'
              }}
            />
          </div>

          {/* Mobile / Small Tablet Translucent Logo-Green Overlay */}
          <div className="md:hidden pointer-events-none absolute inset-0 z-[3]">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(155deg, rgba(1, 153, 52, 0.90) 0%, rgba(20, 130, 58, 0.84) 72%, rgba(26, 92, 59, 0.68) 100%)'
              }}
            />
          </div>

          {/* 4. Bottom-Right Slanted Translucent Brand-Green Strip */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 left-[22%] sm:left-[26%] h-[44px] sm:h-[54px] lg:h-[62px] z-[4]"
            style={{
              background: 'rgba(1, 153, 52, 0.62)',
              clipPath: 'polygon(34px 0, 100% 0, 100% 100%, 0 100%)'
            }}
          />

          {/* 5A. Desktop / Tablet Band-Aligned Editorial Content (Zero seam overlap!) */}
          <div className="hidden md:block relative z-[10] w-full h-full">
            {/* Band B Content: Badge + Bold Uppercase White Headline + Light White Subtitle (19%–67%) */}
            <div className="absolute left-0 right-0 top-[19%] h-[48%] flex items-center px-12 lg:px-16 xl:px-20">
              <div className="max-w-[440px] lg:max-w-[500px] xl:max-w-[560px] text-left">
                <div className="mb-2 inline-flex items-center gap-2 text-[11px] lg:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#E4F6EA]">
                  <span className="inline-block w-5 h-[2px] bg-[#E4F6EA]" aria-hidden="true" />
                  <span>{active.badge}</span>
                </div>

                <h1 className="font-['Poppins',sans-serif] font-bold uppercase text-[26px] lg:text-[32px] xl:text-[38px] text-white leading-[1.15] tracking-[-0.01em] transition-all duration-500">
                  {t(active.headlineKey, active.defaultHeadline)}
                </h1>

                <p className="mt-3 lg:mt-4 font-['Poppins',sans-serif] font-light text-[17px] lg:text-[20px] xl:text-[23px] text-white/95 leading-[1.35] max-w-[480px] transition-all duration-500">
                  {active.desc}
                </p>
              </div>
            </div>

            {/* Band C Content: Clean Rounded-[5px] Action Buttons (67%–86%) */}
            <div className="absolute left-0 right-0 top-[67%] h-[19%] flex items-center px-12 lg:px-16 xl:px-20">
              <div className="flex items-center gap-3.5">
                <Link
                  to={getLocalizedPath('/services')}
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-[5px] border border-white/90 bg-transparent hover:bg-white hover:text-[#1A5C3B] text-white font-['Poppins',sans-serif] font-medium text-[13.5px] lg:text-[14.5px] tracking-normal whitespace-nowrap transition-all duration-200 focus:outline-none"
                >
                  <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
                </Link>

                <Link
                  to={getLocalizedPath('/contact')}
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-[5px] border border-white/45 bg-[#1A5C3B]/85 hover:bg-[#1A5C3B] hover:border-white text-white font-['Poppins',sans-serif] font-medium text-[13.5px] lg:text-[14.5px] tracking-normal whitespace-nowrap transition-all duration-200 focus:outline-none"
                >
                  <span>{t('home.hero.ctaSecondary', 'Request a Consultation')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 5B. Mobile Stacked Editorial Content */}
          <div className="md:hidden relative z-[10] w-full min-h-[520px] sm:min-h-[560px] flex flex-col justify-center px-6 sm:px-10 pt-10 pb-24">
            <div className="max-w-lg text-left">
              <div className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#E4F6EA]">
                <span className="inline-block w-5 h-[2px] bg-[#E4F6EA]" aria-hidden="true" />
                <span>{active.badge}</span>
              </div>

              <h1 className="font-['Poppins',sans-serif] font-bold uppercase text-[24px] sm:text-[30px] text-white leading-[1.16] tracking-[-0.01em] transition-all duration-500">
                {t(active.headlineKey, active.defaultHeadline)}
              </h1>

              <p className="mt-3 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18px] text-white/95 leading-[1.38] transition-all duration-500">
                {active.desc}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={getLocalizedPath('/services')}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-[5px] border border-white/90 bg-transparent hover:bg-white hover:text-[#1A5C3B] text-white font-['Poppins',sans-serif] font-medium text-[14px] transition-all duration-200 focus:outline-none"
                >
                  <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
                </Link>

                <Link
                  to={getLocalizedPath('/contact')}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-[5px] border border-white/50 bg-[#1A5C3B]/80 hover:bg-[#1A5C3B] hover:border-[#1A5C3B] text-white font-['Poppins',sans-serif] font-medium text-[14px] transition-all duration-200 focus:outline-none"
                >
                  <span>{t('home.hero.ctaSecondary', 'Request a Consultation')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 6. Minimalist Bottom-Right Thin White Carousel Arrows (< >) — Exact GCC Placement */}
          <div className="absolute right-5 sm:right-10 lg:right-14 bottom-[50px] sm:bottom-[62px] lg:bottom-[70px] z-[15] flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-1.5 text-white/95 hover:text-[#57D182] transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.35]" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-1.5 text-white/95 hover:text-[#57D182] transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.35]" />
            </button>
          </div>
        </div>
      </div>

      {/* 7. Full-Width Slim Cool-Grey Strip Directly Beneath Hero (Exact GCC Ticker Bar Aesthetic) */}
      <div className="w-full bg-[#EAEFEC] border-t border-white">
        <div className="w-[90%] max-w-[1680px] mx-auto py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-center text-[13px] sm:text-[14px] font-['Poppins',sans-serif] font-normal text-[#3C3C3C]">
          <span>Independent technical, regulatory and project advisory.</span>
          <span className="hidden sm:inline text-[#a0a5aa]" aria-hidden="true">|</span>
          <button
            type="button"
            onClick={scrollToContent}
            className="text-[#019934] hover:text-[#0A7A32] font-medium transition-colors duration-200 cursor-pointer focus:outline-none"
            aria-label="Scroll to What We Do section"
          >
            {t('home.hero.scrollText', 'Scroll to explore advisory scope')}
          </button>
        </div>
      </div>
    </section>
  );
}
