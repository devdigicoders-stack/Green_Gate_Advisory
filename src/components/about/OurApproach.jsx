import { useTranslation } from 'react-i18next';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function OurApproach() {
  const { t } = useTranslation();

  const rawSteps = t('about.approach.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section id="our-approach" className="py-14 sm:py-20 bg-sage/50 border-b border-sand-border/70 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('about.approach.eyebrow', 'Structured Methodology')}
          title={t('about.approach.heading', 'Our Approach')}
          subtitle={t('about.approach.subtitle')}
        />

        {/* 5-Stage Process: Responsive Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white border border-sand-border p-6 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-extrabold text-gold">
                    {st.step || `0${idx + 1}`}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-deep-green/30 group-hover:bg-deep-green transition-colors" />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {st.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-charcoal/85 leading-relaxed font-sans font-normal">
                  {st.description}
                </p>
              </div>

              <div className="pt-3 border-t border-sand-border/50 flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-bold text-deep-green">
                <CheckCircle2 className="w-4 h-4 text-deep-green/70" />
                <span>{t('about.approach.phase', 'Phase')} {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Scope Qualification Notice from PDF */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-sand-border shadow-subtle flex items-start gap-3 text-sm text-charcoal/85 font-sans leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t('about.approach.scopeNotice')}
          </p>
        </div>

      </div>
    </section>
  );
}
