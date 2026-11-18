import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { INSIGHTS_CATEGORIES } from '../../data/insightsData';

export default function InsightsCategories({ selectedCategory, onSelectCategory }) {
  const { t } = useTranslation();

  const activeCategoryObj = INSIGHTS_CATEGORIES.find(c => c.id === selectedCategory);
  const activeTranslationKey = activeCategoryObj?.translationKey || 'all';

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
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
            {t('insights.categories.badge', 'Subject Coverage')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('insights.categories.heading', 'Explore Technical Knowledge Areas')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('insights.categories.subtitle', 'Filter publications and resources across our eight core climate and environmental practice areas.')}
          </p>
        </motion.div>

        {/* GCC Clean Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar sm:flex-wrap sm:justify-center">
          {INSIGHTS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            const label = t(`insights.categories.${cat.translationKey}.title`, cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                aria-pressed={isSelected}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] text-[13px] font-medium transition-colors duration-200 focus:outline-none ${
                  isSelected
                    ? 'bg-[#019934] text-white border border-[#019934]'
                    : 'bg-white text-[#1A5C3B] border border-[#e5e7eb] hover:border-[#019934] hover:text-[#019934]'
                }`}
              >
                <Icon className={`w-4 h-4 stroke-[1.7] ${isSelected ? 'text-white' : 'text-[#019934]'}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Explanatory Strip */}
        {selectedCategory && (
          <div className="p-6 sm:p-8 rounded-[4px] bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#019934] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-4xl">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.16em] text-[#0A7A32] bg-[#57D182]/30 px-2.5 py-0.5">
                Active Filter
              </span>
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] sm:text-[22px] text-[#1A5C3B] leading-snug">
                {t(`insights.categories.${activeTranslationKey}.title`)}
              </h3>
              <p className="font-['Poppins',sans-serif] font-light text-[14px] sm:text-[15px] text-[#555555] leading-[1.68]">
                {t(`insights.categories.${activeTranslationKey}.desc`)}
              </p>
            </div>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => onSelectCategory('all')}
                className="px-5 py-2.5 rounded-[5px] text-[13.5px] font-normal text-white bg-[#1A5C3B] hover:bg-[#019934] transition-colors duration-200 flex-shrink-0"
              >
                Show All Practices
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
