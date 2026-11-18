import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';

const SERVICE_IMAGES = {
  '01': '/images/hero-canopy.jpg',
  '02': '/images/clean-energy.jpg',
  '03': '/images/sustainable-industry.jpg',
  '04': '/images/infrastructure.jpg',
  '05': '/images/blue-carbon.jpg',
  '06': '/images/about-landscape.jpg',
  '07': '/images/sustainable-industry.jpg',
};

export default function ServiceHero({
  number = '01',
  eyebrow,
  title,
  lead,
  shortTitle,
  quickTags = [],
  imageSrc,
  videoSrc,
  fallbackVideoSrc,
  trimDuration = null
}) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const videoRef = useRef(null);

  const bgImage = imageSrc || SERVICE_IMAGES[number] || '/images/hero-canopy.jpg';
  const hasVideo = Boolean(videoSrc);

  // Trim video clip if trimDuration is explicitly specified, otherwise play full clip
  const handleTimeUpdate = () => {
    if (typeof trimDuration === 'number' && trimDuration > 0 && videoRef.current && videoRef.current.currentTime >= trimDuration) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  return (
    <section className="relative w-full min-h-[330px] sm:min-h-[370px] lg:min-h-[410px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white font-['Poppins',sans-serif] text-center select-none">
      {/* Preserved Background Photography & Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hasVideo ? (
          <video
            key={videoSrc}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            poster={bgImage}
            className="w-full h-full object-cover object-center opacity-80 scale-105"
          >
            <source src={videoSrc} type={String(videoSrc).includes('.webm') ? 'video/webm' : 'video/mp4'} />
            {fallbackVideoSrc && (
              <source src={fallbackVideoSrc} type={String(fallbackVideoSrc).includes('.webm') ? 'video/webm' : 'video/mp4'} />
            )}
            <img
              src={bgImage}
              alt={title || 'Green Gate Advisory Practice'}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </video>
        ) : (
          <img
            src={bgImage}
            alt={title || 'Green Gate Advisory Practice'}
            className="w-full h-full object-cover object-center opacity-80 scale-105"
            loading="eager"
          />
        )}
        {/* Clean GCC Institutional Vignette Overlay */}
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

      {/* Top spacer */}
      <div className="h-6 sm:h-8" aria-hidden="true" />

      {/* Center Editorial Content — Exact GCC Short White Bar + Medium White Title */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-[90%] max-w-4xl mx-auto py-8 sm:py-10 flex flex-col items-center justify-center"
      >
        {/* Signature Short White Horizontal Accent Bar */}
        <span className="inline-block w-[64px] h-[3px] bg-white mb-5" aria-hidden="true" />

        {/* Practice Number + Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-3">
          <span className="px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.16em] bg-[#019934] text-white">
            PRACTICE {number}
          </span>
          {eyebrow && (
            <span className="text-[11.5px] sm:text-[12.5px] font-normal tracking-[0.18em] uppercase text-[#57D182]">
              {eyebrow}
            </span>
          )}
        </div>

        {/* Primary Banner H1 — Exact GCC Medium White Poppins */}
        <h1 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[36px] lg:text-[42px] text-white tracking-[-0.01em] leading-[1.2] max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Supporting Lead Text */}
        {lead && (
          <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 max-w-2xl mx-auto leading-relaxed font-['Poppins',sans-serif] font-light">
            {lead}
          </p>
        )}

        {/* Quick Scope Tags Strip */}
        {quickTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 pt-4 border-t border-white/15">
            {quickTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 border border-white/20 text-[11.5px] sm:text-[12px] text-white/90 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Bottom Centered GCC Breadcrumb Trail */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-10 pb-5 sm:pb-6 flex flex-wrap items-center justify-center gap-2 text-[13px] font-['Poppins',sans-serif] font-normal px-4"
      >
        <Link
          to={getLocalizedPath('/')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          {t('navigation.home', 'Home')}
        </Link>
        <span className="text-white/75" aria-hidden="true">&rarr;</span>
        <Link
          to={getLocalizedPath('/services')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          {t('navigation.ourServices', 'Our services')}
        </Link>
        <span className="text-white/75" aria-hidden="true">&rarr;</span>
        <span className="text-white">{shortTitle || title}</span>
      </nav>
    </section>
  );
}
