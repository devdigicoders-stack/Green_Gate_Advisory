import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import ResourceCard from './ResourceCard';
import { DOWNLOADABLE_RESOURCES } from '../../data/insightsData';

export default function ResourceGrid() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
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
            {t('insights.resources.badge', 'Practical Guidance')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('insights.resources.heading', 'Technical Checklists & Planning Guides')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('insights.resources.subtitle', 'Structured frameworks designed to support compliance screening, project eligibility, and funding proposal preparation.')}
          </p>
        </motion.div>

        {/* 6 Resources Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DOWNLOADABLE_RESOURCES.map((res, idx) => (
            <ResourceCard key={res.id} resource={res} index={idx} />
          ))}
        </div>

        {/* Mandatory Regulatory & Guidance Notice */}
        <div className="rounded-[4px] bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#019934] p-6 sm:p-7 flex items-start gap-4 max-w-5xl mx-auto">
          <div className="w-10 h-10 rounded-[5px] bg-[#57D182]/20 flex items-center justify-center text-[#019934] flex-shrink-0">
            <Info className="w-5 h-5 stroke-[1.7]" />
          </div>
          <div className="space-y-1 text-[13.5px] sm:text-[14px] text-[#555555] font-light leading-[1.7]">
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[14.5px] text-[#1A5C3B]">
              Guidance Standard &amp; Editorial Note
            </h4>
            <p>
              {t('insights.resources.notice', 'Download notice: Resources are published only following formal technical verification and legal review. Checklists provide guidance and do not constitute formal regulatory determinations.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
