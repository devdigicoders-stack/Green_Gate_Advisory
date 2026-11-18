import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Search,
  Target,
  GitBranch,
  FileCheck,
  TrendingUp
} from 'lucide-react';

const STAGE_ICONS = [
  Search,
  Target,
  GitBranch,
  FileCheck,
  TrendingUp
];

export default function OurApproach() {
  const { t } = useTranslation();

  const rawSteps = t('about.approach.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section
      id="our-approach"
      className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('about.approach.eyebrow', 'Structured Methodology')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('about.approach.heading', 'Our Approach')}
          </h2>

          {t('about.approach.subtitle') && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
              {t('about.approach.subtitle')}
            </p>
          )}
        </motion.div>

        {/* 5-Stage Sequential GCC Shared-Hairline Architectural Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#e5e7eb]">
          {steps.map((st, idx) => {
            const Icon = STAGE_ICONS[idx % STAGE_ICONS.length] || Search;
            const phaseNum = st.step || `0${idx + 1}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.06 }}
                className="relative bg-white hover:bg-[#57D182]/[0.14] border-r border-b border-[#e5e7eb] p-6 sm:p-7 min-h-[260px] lg:min-h-[300px] transition-colors duration-200 flex flex-col justify-between group"
              >
                {/* Top Teal Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="space-y-4">
                  {/* Oversized Light Teal Numeral + Muted Line Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-['Poppins',sans-serif] font-light text-[36px] leading-none text-[#019934]">
                      {phaseNum}
                    </span>
                    <Icon className="w-6 h-6 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors duration-200" />
                  </div>

                  {/* Phase Pill */}
                  <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                    PHASE {phaseNum}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[16.5px] sm:text-[17.5px] text-[#1A5C3B] leading-snug lg:min-h-[46px] lg:flex lg:items-center">
                      {st.title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#666666] leading-[1.65]">
                      {st.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Sequence Indicator */}
                <div className="pt-4 mt-5 border-t border-[#efefef] text-[11.5px] font-medium text-[#7f7f7f] group-hover:text-[#1A5C3B] transition-colors uppercase tracking-[0.12em]">
                  <span>Stage {idx + 1} of 5</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
