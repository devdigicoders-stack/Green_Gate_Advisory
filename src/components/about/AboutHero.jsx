import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';

export default function AboutHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[370px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white font-['Poppins',sans-serif] text-center select-none">
      {/* Preserved Background Video & Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/about-landscape.jpg"
          className="w-full h-full object-cover object-center opacity-85 scale-105"
        >
          <source src="/hero-canopy-video.webm" type="video/webm" />
          <source src="/videos/about-hero.webm" type="video/webm" />
        </video>
        <img
          src="/images/about-landscape.jpg"
          alt="Temperate forest river valley representing natural capital and climate resilience"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-105 -z-10"
          loading="eager"
        />
        {/* Clean GCC Vignette Overlay */}
        <div className="absolute inset-0 bg-[#1A5C3B]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 pointer-events-none" />
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

      {/* Top spacer for balanced vertical centering */}
      <div className="h-6 sm:h-8" aria-hidden="true" />

      {/* Center Content — Exact GCC White Top Bar + Medium Poppins Title */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-[90%] max-w-4xl mx-auto py-8 sm:py-10 flex flex-col items-center justify-center"
      >
        {/* Signature Short White Horizontal Accent Bar */}
        <span className="inline-block w-[64px] h-[3px] bg-white mb-5" aria-hidden="true" />

        {/* Subtle Eyebrow */}
        <span className="text-[11.5px] sm:text-[12.5px] font-normal tracking-[0.2em] uppercase text-[#57D182] mb-2">
          Specialised Climate Consultancy
        </span>

        {/* Primary Banner H1 — Exact GCC 40px-44px Medium White Poppins */}
        <h1 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[44px] text-white tracking-[-0.01em] leading-[1.2]">
          {t('about.hero.title', 'About Green Gate Advisory')}
        </h1>

        {/* Supporting Text */}
        <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 max-w-2xl mx-auto leading-relaxed font-['Poppins',sans-serif] font-light">
          Independent advisory connecting climate policy, carbon markets, and project finance.
        </p>
      </motion.div>

      {/* Bottom Centered Breadcrumb Trail (Exact GCC .breadcrumbs Style) */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-10 pb-5 sm:pb-6 flex items-center justify-center gap-2 text-[13px] font-['Poppins',sans-serif] font-normal"
      >
        <Link
          to={getLocalizedPath('/')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          {t('navigation.home', 'Home')}
        </Link>
        <span className="text-white/80" aria-hidden="true">&rarr;</span>
        <span className="text-white">
          {t('navigation.about', 'About Us')}
        </span>
      </nav>
    </section>
  );
}
