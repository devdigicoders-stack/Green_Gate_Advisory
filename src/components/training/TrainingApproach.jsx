import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { TRAINING_APPROACH_STEPS } from '../../data/trainingData';

export default function TrainingApproach() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/30 border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('training.approach.badge', 'Collaborative Scoping')}
            title={t('training.approach.heading', 'Our Tailored Training Approach')}
            subtitle={t('training.approach.subtitle', 'A structured six-step framework for designing purposeful, outcome-oriented learning engagements.')}
          />
        </motion.div>

        {/* 6 Steps Grid with Left and Right Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_APPROACH_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const title = t(`training.approach.items.${step.key}.title`, step.key);
            const desc = t(`training.approach.items.${step.key}.desc`, '');
            const colIndex = idx % 3;
            const initialMotion = 
              colIndex === 0 
                ? { opacity: 0, x: -60 } 
                : colIndex === 2 
                ? { opacity: 0, x: 60 } 
                : { opacity: 0, y: 50 };

            return (
              <motion.div
                key={step.key}
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
                    <span className="text-2xl font-mono font-bold text-gold-dark/60 group-hover:text-[#019935] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-forest/5 flex items-center justify-center text-forest group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-deep-green group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-forest group-hover:text-[#019935] transition-colors leading-snug">
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
