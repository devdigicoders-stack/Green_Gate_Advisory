import { useTranslation } from 'react-i18next';
import { Info, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { TRAINING_APPROACH_STEPS } from '../../data/trainingData';

export default function TrainingApproach() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/30 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('training.approach.badge', 'Collaborative Scoping')}
          title={t('training.approach.heading', 'Our Tailored Training Approach')}
          subtitle={t('training.approach.subtitle', 'A structured six-step framework for designing purposeful, outcome-oriented learning engagements.')}
        />

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_APPROACH_STEPS.map((step) => {
            const Icon = step.icon;
            const title = t(`training.approach.items.${step.key}.title`, step.key);
            const desc = t(`training.approach.items.${step.key}.desc`, '');

            return (
              <div
                key={step.key}
                className="rounded-3xl bg-white border border-sand-border/90 p-8 shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-gold-dark/60 group-hover:text-gold-dark transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                      <Icon className="w-5 h-5 text-deep-green group-hover:text-gold" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 flex items-center gap-1.5 text-xs font-semibold text-deep-green">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                  <span>Aligned scoping step</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Planning Framework Notice */}
        <div className="rounded-2xl bg-white border border-sand-border/90 p-6 sm:p-8 flex items-start gap-4 shadow-subtle max-w-4xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-forest flex-shrink-0">
            <Info className="w-5 h-5 text-gold-dark" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
            <h4 className="font-heading font-bold text-sm text-forest">
              Framework Positioning
            </h4>
            <p>
              {t('training.approach.frameworkNotice', 'Collaborative planning: The 6-step framework above outlines our proposed curriculum design process. Actual delivery schedules, interactive workshops, and technical clinics are tailored directly to client operational timelines.')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
