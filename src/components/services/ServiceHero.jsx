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
    <section className="relative overflow-hidden bg-forest-dark text-white pt-24 pb-14 sm:pt-36 sm:pb-24">
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
            className="w-full h-full object-cover object-center opacity-85 scale-125 transform motion-safe:transition-transform motion-safe:duration-1000"
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
            className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-102 transform motion-safe:transition-transform motion-safe:duration-1000"
            loading="eager"
          />
        )}
        {/* Mobile vertical gradient for high-contrast mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/90 to-forest-dark/80 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 via-50% to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-sand-surface/75">
          <Link
            to={getLocalizedPath('/')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('navigation.home', 'Home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <Link
            to={getLocalizedPath('/services')}
            className="hover:text-gold transition-colors focus:outline-none focus:underline"
          >
            {t('navigation.services', 'Services')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
          <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {shortTitle || title}
          </span>
        </nav>

        {/* Content Block */}
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-gold text-forest-dark">
              PRACTICE {number}
            </span>
            {eyebrow && (
              <span className="px-3 py-1 sm:px-4 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
                {eyebrow}
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.12]">
            {title}
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-sand-surface/90 leading-relaxed font-sans font-light max-w-3xl">
            {lead}
          </p>
        </div>

        {/* Quick Scope Tags & Statutory Standard Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-sand-surface/70 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Independent technical & regulatory advisory · Verified methodologies</span>
          </div>

          {quickTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {quickTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-sand-surface/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
