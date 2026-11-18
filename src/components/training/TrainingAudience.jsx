import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TRAINING_AUDIENCES } from '../../data/trainingData';

const AUDIENCE_PHOTOS = [
  '/images/photo-climate-policy.jpg',
  '/images/photo-corporate-esg.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/blue-carbon.jpg'
];

export default function TrainingAudience() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            {t('training.audiences.badge', 'Target Stakeholders')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-white leading-[1.16]">
            {t('training.audiences.heading', 'Who Our Training Supports')}
          </h2>
        </motion.div>

        {/* 6 Photo-Topped Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_AUDIENCES.map((aud, idx) => {
            const title = t(`training.audiences.items.${aud.key}.title`, aud.id);
            const desc = t(`training.audiences.items.${aud.key}.desc`, '');
            const photo = AUDIENCE_PHOTOS[idx % AUDIENCE_PHOTOS.length];

            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
                className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] rounded-[4px] overflow-hidden transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#144A2F]">
                  <img
                    src={photo}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase bg-[#1A5C3B]/90 text-[#57D182] px-2.5 py-0.5">
                    GROUP {aud.number}
                  </span>
                </div>

                <div className="p-6 space-y-2 flex-1">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-white/80 leading-[1.6] line-clamp-2">
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
