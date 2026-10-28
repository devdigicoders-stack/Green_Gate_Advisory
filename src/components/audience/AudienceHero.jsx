import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Users } from 'lucide-react';
import serviceEtsVideo from '../../assets/service-ets.mp4';

export default function AudienceHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[38vh] sm:min-h-[44vh] lg:min-h-[48vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-950 text-white pt-24 pb-10 sm:pt-28 sm:pb-14 text-center select-none">
      {/* Background Photography & Video with Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key="service-ets-audience"
          src={serviceEtsVideo || '/service-ets.mp4'}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/forestry.jpg"
          className="w-full h-full object-cover object-center opacity-75 scale-105"
        >
          <source src={serviceEtsVideo || '/service-ets.mp4'} type="video/mp4" />
          <img
            src="/images/forestry.jpg"
            alt="Diverse international forest landscape representing governments, industrial sectors and conservation initiatives"
            className="w-full h-full object-cover object-center"
            loading="eager"
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
          <span>{t('audience.hero.eyebrow', 'Client & Stakeholder Ecosystem')}</span>
        </div>

        {/* Primary Headline - Compact, Reduced Font Size & Centered */}
        <h1 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white tracking-tight leading-snug max-w-xl mx-auto">
          {t('audience.hero.title', 'Who We Serve')}
        </h1>

        {/* Supporting Text - Centered & Legible */}
        <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-lg mx-auto leading-relaxed font-sans font-normal">
          {t('audience.hero.leadShort', 'Tailored advisory for governments, industrial operators, project developers, and investors.')}
        </p>

        {/* Advisory Context Strip */}
        <div className="hidden sm:flex pt-3 sm:pt-4 border-t border-white/15 flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/75 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#019935] flex-shrink-0" />
            <span>Five distinct client groups · Bespoke technical advisory</span>
          </div>
          <span className="inline text-white/25">|</span>
          <span>Zero generic templates or speculative commitments</span>
        </div>
      </motion.div>
    </section>
  );
}
