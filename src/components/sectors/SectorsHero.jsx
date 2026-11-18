import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import sectorVideo from '../../assets/services-CBAM.mp4';

export default function SectorsHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[395px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white font-['Poppins',sans-serif] text-center select-none">
      {/* Preserved Background Video & Photography Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          key="sectors-hero-video"
          poster="/images/sustainable-industry.jpg"
          className="w-full h-full object-cover object-center opacity-80 scale-105"
        >
          <source src="/videos/clean-energy-sectors.webm" type="video/webm" />
          <source src={sectorVideo} type="video/mp4" />
          <source src="/videos/services-hero.webm" type="video/webm" />
          <source src="/services-CBAM.mp4" type="video/mp4" />
          <img
            src="/images/sustainable-industry.jpg"
            alt="Sustainable industrial and natural infrastructure representing cross-sector climate resilience"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </video>
        {/* Clean GCC Vignette Overlay */}
        <div className="absolute inset-0 bg-[#1A5C3B]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60 pointer-events-none" />
      </div>

      {/* Signature GCC Bottom-Left Concentric Thin White Rings Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 480 480"
        fill="none"
        className="pointer-events-none absolute -left-24 -bottom-28 w-[280px] sm:w-[360px] lg:w-[440px] h-auto z-[1] opacity-30"
      >
        {Array.from({ length: 16 }).map((_, idx) => (
          <circle
            key={idx}
            cx="170"
            cy="310"
            r={45 + idx * 17}
            stroke="#ffffff"
            strokeWidth="1.15"
            strokeOpacity={Math.max(0.18, 0.55 - idx * 0.02)}
          />
        ))}
      </svg>

      <div className="h-6 sm:h-8" aria-hidden="true" />

      {/* Center Content — Exact GCC Short White Bar + Medium White Poppins Title */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-[90%] max-w-4xl mx-auto py-8 sm:py-10 flex flex-col items-center justify-center"
      >
        <span className="inline-block w-[64px] h-[3px] bg-white mb-5" aria-hidden="true" />

        <span className="text-[11.5px] sm:text-[12.5px] font-normal tracking-[0.2em] uppercase text-[#57D182] mb-2">
          {t('sectors.hero.eyebrow', 'Sectoral Advisory Practice')}
        </span>

        <h1 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[44px] text-white tracking-[-0.01em] leading-[1.2] max-w-2xl mx-auto">
          {t('sectors.hero.title', 'Sectors We Support')}
        </h1>

        <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 max-w-2xl mx-auto leading-relaxed font-['Poppins',sans-serif] font-light">
          {t('sectors.hero.leadShort', 'Context-specific advisory aligned with sector operations and climate compliance.')}
        </p>

        {/* Advisory Quality Notice */}
        <div className="hidden sm:flex mt-5 pt-4 border-t border-white/15 flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] text-white/85 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#57D182] stroke-[1.6] flex-shrink-0" />
            <span>Eleven priority sectors · Context-specific regulatory analysis</span>
          </div>
          <span className="inline text-white/30">|</span>
          <span>Zero speculative or unverified claims</span>
        </div>
      </motion.div>

      {/* Bottom Centered GCC Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-10 pb-5 sm:pb-6 flex items-center justify-center gap-2 text-[13px] font-['Poppins',sans-serif] font-normal"
      >
        <Link
          to={getLocalizedPath('/')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          {t('sectors.hero.breadcrumbHome', t('navigation.home', 'Home'))}
        </Link>
        <span className="text-white/75" aria-hidden="true">&rarr;</span>
        <span className="text-white">
          {t('sectors.hero.breadcrumbCurrent', t('navigation.sectors', 'Sectors'))}
        </span>
      </nav>
    </section>
  );
}
