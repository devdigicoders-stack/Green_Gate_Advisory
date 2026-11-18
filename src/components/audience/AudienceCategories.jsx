import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AudienceSection from './AudienceSection';

export default function AudienceCategories() {
  const { t } = useTranslation();

  const rawCategories = t('audience.categories', { returnObjects: true }) || [];
  const categories = Array.isArray(rawCategories) ? rawCategories : [];

  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            {t('audience.categoriesBadge', 'Tailored Support')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('audience.categoriesTitle', 'Five Key Stakeholder Categories')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('audience.categoriesSubtitle', 'Deep-dive into the specific climate challenges, advisory support areas, and deliverables tailored to your organisation.')}
          </p>
        </motion.div>

        {/* 5 Split Stakeholder Category Cards */}
        <div className="space-y-8 sm:space-y-10">
          {categories.map((cat, idx) => (
            <AudienceSection key={cat.id} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
