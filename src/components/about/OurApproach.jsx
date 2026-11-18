import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const STAGE_PHOTOS = [
  '/images/photo-institutional-forum.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-green-manufacturing.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-green-hydrogen.jpg'
];

export default function OurApproach() {
  const { t } = useTranslation();

  const rawSteps = t('about.approach.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section
      id="our-approach"
      className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24"
    >
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
            {t('about.approach.eyebrow', 'Structured Methodology')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('about.approach.heading', 'Our Five-Stage Approach')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((st, idx) => {
            const phaseNum = st.step || `0${idx + 1}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                  <img
                    src={STAGE_PHOTOS[idx % STAGE_PHOTOS.length]}
                    alt={st.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2 py-0.5">
                    {phaseNum}
                  </span>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[15.5px] text-[#1A5C3B] leading-snug">
                    {st.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[13px] text-[#666666] leading-[1.58] line-clamp-2">
                    {st.description || st.desc}
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
