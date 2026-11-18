import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const DIFF_PHOTOS = [
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-sustainable-agriculture.jpg',
  '/images/photo-institutional-forum.jpg',
  '/images/photo-advisory-office.jpg'
];

export default function Differentiators() {
  const { t } = useTranslation();

  const rawItems = t('about.differentiators.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section
      id="why-green-gate"
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
            {t('about.differentiators.eyebrow', 'Distinctive Capabilities')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('about.differentiators.heading', 'What Makes Us Different')}
          </h2>
        </motion.div>

        {/* 6 Photo-Topped Concise Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, idx) => {
            const badgeNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
                className="bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] overflow-hidden transition-colors duration-200 flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                  <img
                    src={DIFF_PHOTOS[idx % DIFF_PHOTOS.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                    {badgeNum}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6] line-clamp-2">
                    {item.description || item.desc}
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
