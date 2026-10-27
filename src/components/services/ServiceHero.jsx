import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ShieldCheck } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-24 pb-14 sm:pt-36 sm:pb-24">
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
            className="w-full h-full object-cover object-center opacity-85 scale-120 transform motion-safe:transition-transform motion-safe:duration-1000"
          >
            <source src={videoSrc} type={String(videoSrc).includes('.mp4') ? 'video/mp4' : 'video/webm'} />
            <img
              src={bgImage}
              alt={title || "Green Gate Advisory Practice"}
              className="w-full h-full object-cover object-right sm:object-center"
              loading="eager"
            />
          </video>
        ) : (
          <img
            src={bgImage}
            alt={title || "Green Gate Advisory Practice"}
            className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
            loading="eager"
          />
        )}
        {/* Neutral contrast gradient overlays */}
        <div className="absolute inset-0 bg-black/60 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] font-sans text-sand-surface/85">
          <Link
            to={getLocalizedPath('/')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('navigation.home', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/50" />
          <Link
            to={getLocalizedPath('/services')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('navigation.services', 'Services')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/50" />
          <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {shortTitle || title}
          </span>
        </nav>

        {/* Content Block */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider bg-gold text-forest-dark">
              PRACTICE {number}
            </span>
            {eyebrow && (
              <span className="px-3.5 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-[13px] font-semibold tracking-wider uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
                {eyebrow}
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal max-w-2xl">
            {lead}
          </p>
        </div>

        {/* Quick Scope Tags Strip */}
        {quickTags.length > 0 && (
          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
            {quickTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-sand-surface font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
