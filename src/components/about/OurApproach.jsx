import { useTranslation } from 'react-i18next';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function OurApproach() {
  const { t } = useTranslation();

  const rawSteps = t('about.approach.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/50 border-b border-sand-border/70">
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

                <h3 className="font-display font-bold text-base text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {st.title}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                  {st.description}
                </p>
              </div>

              <div className="pt-3 border-t border-sand-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-deep-green">
                <CheckCircle2 className="w-3.5 h-3.5 text-deep-green/60" />
                <span>{t('about.approach.phase', 'Phase')} {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Scope Qualification Notice from PDF */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-sand-border shadow-subtle flex items-start gap-3 text-xs text-charcoal-muted font-sans">
          <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t('about.approach.scopeNotice')}
          </p>
        </div>

      </div>
    </section>
  );
}
