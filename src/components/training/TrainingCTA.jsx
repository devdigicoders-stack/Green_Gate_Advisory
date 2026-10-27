import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#141917] text-white py-14 sm:py-20 border-t border-neutral-800">
      {/* Background subtle glow & gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-[#141917] to-black" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#019935]/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-gold-light border border-white/15 backdrop-blur-sm">
          <span>{t('training.cta.eyebrow', 'Capacity Scoping')}</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] max-w-3xl mx-auto">
          {t('training.cta.heading', "Strengthen Your Team's Climate & Environmental Knowledge")}
        </h2>

        <p className="text-base sm:text-xl text-sand-surface/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
          {t('training.cta.description', "Discuss your organisation's capacity-building objectives, target audience, and preferred technical focus with Green Gate Advisory.")}
        </p>

        {/* Buttons: Discuss a Training Programme & Contact Our Team */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact?service=training')}
            state={{ serviceInterest: 'Training and Capacity Building' }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <span>{t('training.cta.primaryBtn', 'Discuss a Training Programme')}</span>
            <ArrowRight className="w-4 h-4 text-forest-dark" />
          </Link>

          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>{t('training.cta.secondaryBtn', 'Contact Our Team')}</span>
          </Link>
        </div>

        {/* Professional Caution Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-sand-surface/70 font-sans max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('training.cta.disclaimer', 'Independent technical advisory. Training programmes are scoped and delivered based on agreed institutional requirements. We do not offer fixed public enrolment courses or standardized certificates.')}
          </span>
        </div>

      </div>
    </section>
  );
}
