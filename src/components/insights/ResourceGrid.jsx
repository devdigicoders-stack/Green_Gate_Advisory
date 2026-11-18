import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ResourceCard from './ResourceCard';
import { DOWNLOADABLE_RESOURCES } from '../../data/insightsData';

export default function ResourceGrid() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 sm:py-20 bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
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
            {t('insights.resources.badge', 'Practical Guidance')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('insights.resources.heading', 'Technical Checklists & Guides')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADABLE_RESOURCES.map((res, idx) => (
            <ResourceCard key={res.id} resource={res} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
