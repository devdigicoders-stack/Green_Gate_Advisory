import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import sectorVideo from '../../assets/sectorpage.mp4';

export default function SectorsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-950 text-white pt-24 pb-12 sm:pt-28 sm:pb-14 text-center select-none">
      {/* Background Cinematic Video with Photography Fallback & Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/infrastructure.jpg"
          className="w-full h-full object-cover object-center opacity-75 scale-105"
        >
          <source 
            src={sectorVideo} 
            type="video/mp4" 
          />
          <img
            src="/images/infrastructure.jpg"
            alt="Sustainable industrial and natural infrastructure representing cross-sector climate resilience"
            className="w-full h-full object-cover object-center opacity-75"
          />
        </video>
        {/* Cinematic contrast gradient overlays for legibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5 sm:space-y-4 flex flex-col items-center justify-center"
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-xs">
          <span className="w-1.5 h-1.5 rounded-none bg-[#019935] animate-pulse flex-shrink-0" />
          <span>{t('sectors.hero.eyebrow', 'Sectoral Advisory Practice')}</span>
        </div>

        {/* Primary Headline - Compact, Reduced Font Size & Centered */}
        <h1 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white tracking-tight leading-snug max-w-xl mx-auto">
          {t('sectors.hero.title', 'Sectors We Support')}
        </h1>

        {/* Supporting Text - Centered & Legible */}
        <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-lg mx-auto leading-relaxed font-sans font-normal">
          {t('sectors.hero.leadShort', 'Context-specific advisory aligned with sector operations and climate compliance.')}
        </p>

        {/* Advisory Quality Notice */}
        <div className="hidden sm:flex pt-3 sm:pt-4 border-t border-white/15 flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/75 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#019935] flex-shrink-0" />
            <span>Eleven priority sectors · Context-specific regulatory analysis</span>
          </div>
          <span className="inline text-white/25">|</span>
          <span>Zero speculative or unverified claims</span>
        </div>
      </motion.div>
    </section>
  );
}
