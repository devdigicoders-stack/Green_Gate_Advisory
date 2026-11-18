import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import trainingVideo from '../../assets/training-eco.mp4';

export default function TrainingHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative w-full min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white font-['Poppins',sans-serif] text-center select-none">
      {/* Preserved Background Photography & Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key="training-hero-video"
          src={trainingVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/training-hero.jpg"
          className="w-full h-full object-cover object-center opacity-80 scale-105"
        >
          <source src={trainingVideo} type="video/mp4" />
          <source src="/videos/training-hero.webm" type="video/webm" />
          <source src="/training-eco.mp4" type="video/mp4" />
        </video>
        <img
          src="/images/training-hero.jpg"
          alt="Executive climate training, carbon markets and institutional capacity building"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-105 -z-10"
          loading="eager"
        />
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
          {t('training.hero.eyebrow', 'Institutional Capability')}
        </span>

        <h1 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[44px] text-white tracking-[-0.01em] leading-[1.2] max-w-3xl mx-auto">
          {t('training.hero.title', 'Training & Capacity Building')}
        </h1>

        <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 max-w-2xl mx-auto leading-relaxed font-['Poppins',sans-serif] font-light">
          {t('training.hero.leadShort', 'Executive and technical capacity building on carbon markets, CBAM, and climate finance.')}
        </p>

        {/* Primary CTA Button — GCC Solid Teal Rounded-[5px] */}
        <div className="mt-6 flex justify-center">
          <Link
            to={getLocalizedPath('/contact?service=training')}
            state={{ serviceInterest: 'Training and Capacity Building' }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200 group focus:outline-none"
          >
            <span>{t('training.hero.primaryBtn', 'Discuss a Training Programme')}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
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
          {t('training.hero.breadcrumbHome', t('navigation.home', 'Home'))}
        </Link>
        <span className="text-white/75" aria-hidden="true">&rarr;</span>
        <span className="text-white">
          {t('training.hero.breadcrumbCurrent', t('navigation.training', 'Training & Capacity Building'))}
        </span>
      </nav>
    </section>
  );
}
