import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import { TRAINING_AUDIENCES } from '../../data/trainingData';

export default function TrainingAudience() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('training.audiences.badge', 'Target Stakeholders')}
          title={t('training.audiences.heading', 'Potential Audiences for Capacity Building')}
          subtitle={t('training.audiences.subtitle', 'Programmes are customized for distinct institutional structures, technical backgrounds, and operating environments.')}
        />

        {/* 6 Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_AUDIENCES.map((aud) => {
            const Icon = aud.icon;
            const title = t(`training.audiences.items.${aud.key}.title`, aud.id);
            const desc = t(`training.audiences.items.${aud.key}.desc`, '');

            return (
              <div
                key={aud.id}
                className="rounded-3xl bg-sage/30 border border-sand-border/80 p-8 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sand-border flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-deep-green group-hover:text-gold" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                      GROUP {aud.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 text-xs font-semibold text-deep-green flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Customized learning track</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
