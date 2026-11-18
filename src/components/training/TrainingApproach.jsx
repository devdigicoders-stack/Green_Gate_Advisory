import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TRAINING_APPROACH_STEPS } from '../../data/trainingData';

const APPROACH_PHOTOS = [
  '/images/photo-executive-training.jpg',
  '/images/photo-institutional-forum.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-green-manufacturing.jpg',
  '/images/photo-advisory-office.jpg',
  '/images/photo-corporate-esg.jpg'
];

export default function TrainingApproach() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('training.approach.badge', 'Collaborative Scoping')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('training.approach.heading', 'Our Tailored Training Approach')}
          </h2>
        </motion.div>

        {/* 6 Photo-Topped Scoping Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_APPROACH_STEPS.map((step, idx) => {
            const title = t(`training.approach.items.${step.key}.title`, step.key);
            const desc = t(`training.approach.items.${step.key}.desc`, '');

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.05 }}
                className="bg-white rounded-[4px] border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E4F6EA]">
                  <img
                    src={APPROACH_PHOTOS[idx % APPROACH_PHOTOS.length]}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                    STEP {step.number}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#1A5C3B] leading-snug">
                    {title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6] line-clamp-2">
                    {desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
