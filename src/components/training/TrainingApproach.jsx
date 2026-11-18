import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { TRAINING_APPROACH_STEPS } from '../../data/trainingData';

export default function TrainingApproach() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('training.approach.badge', 'Collaborative Scoping')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('training.approach.heading', 'Our Tailored Training Approach')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#1A5C3B]/75 leading-[1.5] max-w-3xl">
            {t('training.approach.subtitle', 'A structured six-step framework for designing purposeful, outcome-oriented learning engagements.')}
          </p>
        </motion.div>

        {/* 6 Steps Grid — GCC Flat White Cards on Pale Mint */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TRAINING_APPROACH_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const title = t(`training.approach.items.${step.key}.title`, step.key);
            const desc = t(`training.approach.items.${step.key}.desc`, '');

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.08 }}
                className="relative bg-white rounded-[4px] border border-[#e5e7eb] hover:border-[#019934] p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between space-y-6 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins',sans-serif] font-light text-[36px] leading-none text-[#019934]">
                      {step.number}
                    </span>
                    <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] transition-colors duration-200" />
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[20px] text-[#1A5C3B] leading-snug">
                    {title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68]">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#efefef] text-[12px] font-medium text-[#019934] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 stroke-[1.75] flex-shrink-0" />
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
