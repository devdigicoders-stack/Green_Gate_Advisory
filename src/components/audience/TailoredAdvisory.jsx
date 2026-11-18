import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const DIMENSION_PHOTOS = [
  '/images/photo-institutional-forum.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-green-manufacturing.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-executive-training.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-advisory-office.jpg'
];

export default function TailoredAdvisory() {
  const { t } = useTranslation();

  const rawDimensions = t('audience.adaptation.dimensions', { returnObjects: true }) || [];
  const dimensions = Array.isArray(rawDimensions) ? rawDimensions : [];

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
            {t('audience.adaptation.eyebrow', 'Engagement Flexibility')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-white leading-[1.16]">
            {t('audience.adaptation.heading', 'Tailored to Your Context')}
          </h2>
        </motion.div>

        {/* Photo-Topped Adaptation Dimensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {dimensions.map((dim, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 4) * 0.05 }}
              className="rounded-[4px] bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#144A2F]">
                <img
                  src={DIMENSION_PHOTOS[idx % DIMENSION_PHOTOS.length]}
                  alt={dim.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase bg-[#1A5C3B]/90 text-[#57D182] px-2.5 py-0.5">
                  0{idx + 1}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-1.5 flex-1">
                <h3 className="font-['Poppins',sans-serif] font-medium text-[16.5px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                  {dim.title}
                </h3>
                <p className="font-['Poppins',sans-serif] font-light text-[13px] text-white/80 leading-[1.58] line-clamp-2">
                  {dim.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 8th Balancing Philosophy Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.18 }}
            className="rounded-[4px] border border-[#57D182]/75 text-white overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(145deg, #126D3D 0%, #078A38 55%, #019934 100%)' }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/photo-advisory-office.jpg"
                alt="Context-Driven Advisory"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.14em] uppercase bg-white text-[#1A5C3B] px-2.5 py-0.5">
                PHILOSOPHY
              </span>
            </div>

            <div className="p-5 sm:p-6 space-y-1.5 flex-1">
              <h3 className="font-['Poppins',sans-serif] font-medium text-[17px] text-white leading-snug">
                Context-Driven Advisory
              </h3>
              <p className="font-['Poppins',sans-serif] font-light text-[13px] text-white/95 leading-[1.58]">
                Structured directly with client leadership for measurable compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
