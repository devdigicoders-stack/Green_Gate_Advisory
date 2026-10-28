import { useRef } from 'react';
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
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-950 text-white pt-24 pb-12 sm:pt-28 sm:pb-14 text-center select-none">
      {/* Background Photography & Video with Directional Lighting & Masking */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hasVideo ? (
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            poster={bgImage}
            className="w-full h-full object-cover object-center opacity-75 scale-105"
          >
            <source src={videoSrc} type={String(videoSrc).includes('.mp4') ? 'video/mp4' : 'video/webm'} />
            <img
              src={bgImage}
              alt={title || "Green Gate Advisory Practice"}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </video>
        ) : (
          <img
            src={bgImage}
            alt={title || "Green Gate Advisory Practice"}
            className="w-full h-full object-cover object-center opacity-75 scale-105"
            loading="eager"
          />
        )}
        {/* Cinematic contrast gradient overlays */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4 flex flex-col items-center justify-center"
      >
        {/* Practice Number + Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="px-3 py-1 rounded-none text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#019935] text-white border border-[#019935] shadow-2xs">
            PRACTICE {number}
          </span>
          {eyebrow && (
            <span className="inline-block px-3 py-1 rounded-none text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-2xs">
              {eyebrow}
            </span>
          )}
        </div>

        {/* Primary Headline - Compact, Reduced Font Size & Centered */}
        <h1 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white tracking-tight leading-snug max-w-2xl mx-auto">
          {title}
        </h1>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-xl mx-auto leading-relaxed font-sans font-normal">
          {lead}
        </p>

        {/* Quick Scope Tags Strip */}
        {quickTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 sm:pt-4 border-t border-white/15">
            {quickTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 rounded-none bg-white/10 border border-white/15 text-[11px] sm:text-xs text-white/80 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
