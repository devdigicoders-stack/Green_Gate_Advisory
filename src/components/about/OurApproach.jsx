import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Target, GitBranch, FileCheck, TrendingUp } from 'lucide-react';

const STAGE_ICONS = [Search, Target, GitBranch, FileCheck, TrendingUp];

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
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] text-[#1A5C3B] leading-[1.16]">
            {t('about.approach.heading', 'Our Five-Stage Approach')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#e5e7eb]">
          {steps.map((st, idx) => {
            const Icon = STAGE_ICONS[idx % STAGE_ICONS.length] || Search;
            const phaseNum = st.step || `0${idx + 1}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                className="relative bg-white hover:bg-[#57D182]/[0.12] border-r border-b border-[#e5e7eb] p-6 transition-colors duration-200 flex flex-col justify-start space-y-3.5 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <span className="font-['Poppins',sans-serif] font-light text-[32px] leading-none text-[#019934]">
                    {phaseNum}
                  </span>
                  <Icon className="w-5 h-5 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors" />
                </div>

                <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] text-[#1A5C3B] leading-snug">
                  {st.title}
                </h3>

                <p className="font-['Poppins',sans-serif] font-light text-[13px] text-[#666666] leading-[1.6]">
                  {st.description || st.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
