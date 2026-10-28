import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { TRAINING_AUDIENCES } from '../../data/trainingData';

export default function TrainingAudience() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('training.audiences.badge', 'Target Stakeholders')}
            title={t('training.audiences.heading', 'Potential Audiences for Capacity Building')}
            subtitle={t('training.audiences.subtitle', 'Programmes are customized for distinct institutional structures, technical backgrounds, and operating environments.')}
          />
        </motion.div>

        {/* 6 Audiences Grid with Left and Right Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_AUDIENCES.map((aud, idx) => {
            const Icon = aud.icon;
            const title = t(`training.audiences.items.${aud.key}.title`, aud.id);
            const desc = t(`training.audiences.items.${aud.key}.desc`, '');
            const colIndex = idx % 3;
            const initialMotion = 
              colIndex === 0 
                ? { opacity: 0, x: -60 } 
                : colIndex === 2 
                ? { opacity: 0, x: 60 } 
                : { opacity: 0, y: 50 };

            return (
              <motion.div
                key={aud.id}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: (idx % 3) * 0.12 }}
                className="relative bg-white rounded-none border border-sand-border/90 p-8 shadow-md hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between space-y-6 group overflow-hidden hover:border-[#019935]/40"
              >
                {/* Top Green Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#019935] transition-colors duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-none bg-sand-surface border border-sand-border flex items-center justify-center text-forest group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-105">
                      <Icon className="w-6 h-6 text-deep-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                      GROUP {aud.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-forest group-hover:text-[#019935] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 text-xs font-semibold text-deep-green flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-gold" />
                  <span>Customized learning track</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
