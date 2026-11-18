import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const SOLUTION_PHOTOS = [
  '/images/photo-cbam-industry.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-ets-pricing.jpg',
  '/images/photo-corporate-esg.jpg',
  '/images/photo-climate-policy.jpg'
];

export default function AudienceSolutions() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSolutions = t('audience.solutions.items', { returnObjects: true }) || [];
  const solutions = Array.isArray(rawSolutions) ? rawSolutions : [];

  return (
    <section className="w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 relative overflow-hidden">
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
            {t('audience.solutions.eyebrow', 'Core Workstreams')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('audience.solutions.heading', 'Featured Advisory Solutions')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
              className="h-full"
            >
              <Link
                to={getLocalizedPath(`/services/${item.slug}`)}
                className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-200 flex flex-col justify-between group overflow-hidden h-full focus:outline-none"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                    <img
                      src={SOLUTION_PHOTOS[idx % SOLUTION_PHOTOS.length]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                      SOLUTION 0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="pt-3.5 border-t border-[#efefef] flex items-center justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors">
                      View Practice
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
