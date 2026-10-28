import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import trainingEcoVideo from '../../assets/training-eco.mp4';

export default function TrainingHero() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative min-h-[48vh] sm:min-h-[55vh] lg:min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-900 text-white pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
      {/* Background Photography & Video with Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key="training-eco-video"
          src={trainingEcoVideo || '/training-eco.mp4'}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-85 scale-115 transform motion-safe:transition-transform motion-safe:duration-1000"
        >
          <source src={trainingEcoVideo || '/training-eco.mp4'} type="video/mp4" />
        </video>
        <img
          alt="Executive training, technical capacity building and institutional climate education"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-105 -z-10"
          loading="eager"
        />
        {/* Neutral contrast gradient overlays */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Content Block with Elegant Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-5 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            <span>{t('training.hero.eyebrow', 'Institutional Capability')}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            {t('training.hero.title', 'Training & Capacity Building')}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal max-w-2xl">
            {t('training.hero.leadShort', 'Executive and technical capacity building on carbon markets, CBAM, and climate finance.')}
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to={getLocalizedPath('/contact?service=training')}
              state={{ serviceInterest: 'Training and Capacity Building' }}
              className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-none bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>{t('training.hero.primaryBtn', 'Discuss a Training Programme')}</span>
              <ArrowRight className="w-4 h-4 text-forest-dark" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
