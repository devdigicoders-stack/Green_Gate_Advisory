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

        {/* 5-Stage Process: Clean Timeline Progression (Not Heavy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-sand-border pt-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className={`space-y-3 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#019935] uppercase">
                  Phase {st.step || `0${idx + 1}`}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-neutral-900 leading-snug">
                {st.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                {st.description}
              </p>
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
