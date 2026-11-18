import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TRAINING_AUDIENCES } from '../../data/trainingData';

export default function TrainingAudience() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 overflow-hidden">
      {/* Subtle Concentric Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="220"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Dark-Navy Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            {t('training.audiences.badge', 'Target Stakeholders')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-white leading-[1.16] tracking-[-0.01em]">
            {t('training.audiences.heading', 'Potential Audiences for Capacity Building')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
            {t('training.audiences.subtitle', 'Programmes are customized for distinct institutional structures, technical backgrounds, and operating environments.')}
          </p>
        </motion.div>

        {/* 6 Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TRAINING_AUDIENCES.map((aud, idx) => {
            const Icon = aud.icon;
            const title = t(`training.audiences.items.${aud.key}.title`, aud.id);
            const desc = t(`training.audiences.items.${aud.key}.desc`, '');

            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.08 }}
                className="relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] rounded-none p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins',sans-serif] font-light text-[36px] leading-none text-[#57D182]">
                      {aud.number}
                    </span>
                    <div className="w-10 h-10 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#57D182] bg-[#019934]/20 px-2.5 py-0.5">
                    GROUP {aud.number}
                  </span>

                  <h3 className="font-['Poppins',sans-serif] font-medium text-[20px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[14px] text-white/75 leading-[1.68]">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/12 text-[12px] font-medium text-[#57D182] flex items-center gap-2">
                  <span className="inline-block w-3.5 h-[2px] bg-[#019934]" aria-hidden="true" />
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
