import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';

export default function RelatedServices({ currentKey }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  // Pick up to 3 complementary services excluding current
  const related = SERVICES_LIST.filter((s) => s.key !== currentKey).slice(0, 3);

  return (
    <section className="w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
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
            {t('services.relatedBadge', 'Complementary Capabilities')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] lg:text-[48px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('services.relatedTitle', 'Related Advisory Practices')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#1A5C3B]/75 leading-[1.5] max-w-3xl">
            {t('services.relatedSubtitle', 'Explore interconnected workstreams across compliance, project preparation, and sustainable finance.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {related.map((srv, idx) => (
            <motion.div
              key={srv.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={getLocalizedPath(`/services/${srv.slug}`)}
                className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#1A5C3B] p-7 sm:p-8 transition-colors duration-300 flex flex-col justify-between space-y-6 group overflow-hidden min-h-[260px] h-full focus:outline-none"
              >
                {/* Top Signature Teal Accent Rule */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                      PRACTICE {srv.number}
                    </span>
                    <span className="font-['Poppins',sans-serif] font-light text-[22px] text-[#019934]/60 group-hover:text-[#019934] transition-colors">
                      {srv.number}
                    </span>
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-medium text-[20px] sm:text-[21px] text-[#1A5C3B] leading-snug group-hover:underline decoration-[#1A5C3B] decoration-[1.5px] underline-offset-4">
                    {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] line-clamp-3 leading-[1.68]">
                    {t(`services.items.${srv.key}.lead`, '')}
                  </p>
                </div>

                {/* GCC Circular Navy -> Teal Arrow Row */}
                <div className="pt-2 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors duration-200">
                    {t('services.overview.grid.exploreService', 'Explore Service')}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
