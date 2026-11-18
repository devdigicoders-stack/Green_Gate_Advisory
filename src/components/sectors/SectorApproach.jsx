import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Search,
  Layers,
  FileCheck2,
  TrendingUp,
  Info,
  CheckCircle2
} from 'lucide-react';

const STEP_ICONS = [Search, Layers, FileCheck2, TrendingUp];

export default function SectorApproach() {
  const { t } = useTranslation();

  const rawSteps = t('sectors.framework.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 overflow-hidden">
      {/* Subtle Concentric Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="220"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Dark-Navy Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            {t('sectors.framework.eyebrow', 'Delivery Architecture')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-white leading-[1.16] tracking-[-0.01em]">
            {t('sectors.framework.heading', 'Our Sector-Specific Advisory Framework')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
            {t('sectors.framework.subtitle', 'How Green Gate Advisory structures engagements around industry-specific realities rather than generic templates.')}
          </p>
        </motion.div>

        {/* 4-Step Process Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.08 }}
                className="relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] p-6 sm:p-7 rounded-none transition-all duration-300 flex flex-col justify-between space-y-6 group min-h-[240px]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins',sans-serif] font-light text-[40px] leading-none text-[#57D182]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors duration-200 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[14px] text-white/75 leading-[1.68]">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/12 flex items-center gap-2 text-[12px] font-medium text-[#57D182]">
                  <CheckCircle2 className="w-4 h-4 text-[#57D182] stroke-[1.75] flex-shrink-0" />
                  <span>Objective-aligned output</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverables Rigour & Advisory Boundaries Box — GCC Elevated Navy Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[4px] bg-[#246E49]/60 border border-white/15 border-l-[4px] border-l-[#019934] p-7 sm:p-9 flex flex-col md:flex-row items-start gap-5 sm:gap-6"
        >
          <div className="w-11 h-11 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 stroke-[1.6]" />
          </div>
          <div className="space-y-2.5 font-['Poppins',sans-serif]">
            <h4 className="font-medium text-[17px] sm:text-[18px] text-white">
              Deliverable Integrity &amp; Engagement Principles
            </h4>
            <p className="text-[14px] sm:text-[15px] font-light text-white/85 leading-[1.7]">
              {t('sectors.framework.notice', 'Illustrative notice: Deliverables and pathways are tailored to client context and agreed engagement scope. We do not publish unverified client outcomes or guaranteed regulatory determinations.')}
            </p>
            <p className="text-[12.5px] font-light text-white/65 leading-[1.65]">
              Every deliverable is prepared in accordance with applicable statutory reporting frameworks, accredited greenhouse gas accounting methodologies (GHG Protocol Corporate Standard, ISO 14064, EU CBAM Implementing Regulations), and approved carbon registry rules.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
