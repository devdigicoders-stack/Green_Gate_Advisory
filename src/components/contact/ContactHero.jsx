import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-900 text-white pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
      {/* Background Photography with Clean Neutral Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/contact-hero.jpg"
          alt="International climate and carbon market technical advisory consultations"
          className="w-full h-full object-cover object-center opacity-85 scale-102 transform motion-safe:transition-transform motion-safe:duration-1000"
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
          className="space-y-4 sm:space-y-5 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>{t('contact.hero.eyebrow', 'Direct Technical Consultation')}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            {t('contact.hero.headline', "Let's Discuss Your Climate Priorities")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal max-w-2xl">
            {t('contact.hero.leadShort', 'Schedule a confidential technical consultation with our climate policy and finance specialists.')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

