import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Workflow,
  FileText,
  Layers,
  BarChart3,
  Sprout,
  Landmark,
  FileCheck
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const PILLARS_DATA = [
  {
    icon: Sprout,
    title: 'Regulatory Insight',
    desc: 'In-depth understanding of EU CBAM, ETS directives, Article 6 rules, and evolving compliance obligations.'
  },
  {
    icon: Layers,
    title: 'Technical Analysis',
    desc: 'Rigorous greenhouse gas accounting, baseline modelling, additionality screening, and MRV frameworks.'
  },
  {
    icon: Landmark,
    title: 'Climate Finance Structuring',
    desc: 'Translating climate concepts into bankable funding proposals for multilateral facilities and private capital.'
  },
  {
    icon: FileCheck,
    title: 'Implementation Planning',
    desc: 'Actionable workstreams, governance frameworks, and decision-ready documentation built for execution.'
  }
];

const DELIVERY_STAGES = [
  {
    num: '01',
    stage: 'STAGE 01',
    title: 'Policy & Rules',
    sub: 'CBAM • ETS • Article 6',
    shortSub: 'CBAM • ETS • Art. 6',
    icon: FileText
  },
  {
    num: '02',
    stage: 'STAGE 02',
    title: 'Scientific MRV',
    sub: 'ISO 14064 • Yields',
    shortSub: 'ISO 14064 • Yields',
    icon: Layers
  },
  {
    num: '03',
    stage: 'STAGE 03',
    title: 'Bankable Action',
    sub: 'Capital & Issuance',
    shortSub: 'Capital & Issuance',
    icon: BarChart3
  }
];

export default function WhatWeDo() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section
      id="about"
      className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      <span id="what-we-do" className="absolute -top-24" />

      {/* Subtle Oversized Concentric Arc Watermark (Signature GCC Navy Band Motif) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 640 640"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] lg:w-[680px] h-auto opacity-[0.07]"
      >
        {Array.from({ length: 16 }).map((_, idx) => (
          <circle
            key={idx}
            cx="420"
            cy="220"
            r={70 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto">
        {/* ============================================================
            UPPER BLOCK: WHO WE ARE / WHAT WE DO (GCC Editorial Navy Style)
           ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-[1080px] mx-auto"
        >
          {/* Signature GCC 70px x 2px Teal Accent Rule + Tracked Eyebrow */}
          <div className="flex flex-col items-start sm:items-center sm:text-center mb-8 sm:mb-10">
            <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
              {t('home.whatWeDo.eyebrow', 'WHAT WE DO')}
            </span>

            <h2 className="mt-4 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[46px] lg:text-[56px] text-white leading-[1.15] tracking-[-0.01em]">
              Integrated Climate &amp;{' '}
              <span className="text-[#57D182]">Environmental Advisory</span>
            </h2>
          </div>

          {/* Two Crisp Light-Weight White Editorial Paragraphs (Exact GCC Typography) */}
          <div className="space-y-6 text-left">
            <p className="font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] lg:text-[21px] text-white/95 leading-[1.65]">
              {t(
                'home.whatWeDo.lead',
                'Climate regulation, carbon markets and sustainable finance are changing how organisations plan, invest and operate. Green Gate Advisory provides integrated climate and environmental advisory services to help clients understand their obligations, assess opportunities and develop credible pathways to implementation.'
              )}
            </p>

            <p className="font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] lg:text-[21px] text-white/85 leading-[1.65]">
              {t(
                'home.whatWeDo.paragraph',
                'Our work spans voluntary and compliance carbon markets, carbon project development, emissions trading systems, Carbon Border Adjustment Mechanism (CBAM) readiness, climate finance proposal development, nature-based solutions, environmental policy, greenhouse gas accounting and corporate sustainability. We combine technical analysis, regulatory understanding and project-focused thinking to help clients make informed decisions.'
              )}
            </p>
          </div>

          {/* Centered Solid Teal CTA Button (Exact GCC 'Get in touch' Button) */}
          <div className="mt-10 sm:mt-12 flex justify-start sm:justify-center">
            <Link
              to={getLocalizedPath('/about-us')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] tracking-normal transition-colors duration-200 group focus:outline-none"
            >
              <span>{t('home.whatWeDo.learnMore', 'Learn more about our team, approach & mission')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* ============================================================
            ICONIC GCC HORIZONTAL EYEBROW DIVIDER (LABEL ──────────────)
           ============================================================ */}
        <div className="mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-14 flex items-center gap-5">
          <h4 className="font-['Poppins',sans-serif] font-medium text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-white/55 whitespace-nowrap">
            PRACTICAL DELIVERY
          </h4>
          <div className="h-[1px] flex-1 bg-white/20" aria-hidden="true" />
        </div>

        {/* ============================================================
            LOWER BLOCK: ASYMMETRIC SPLIT (GCC Achievements Layout)
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Airy Light-Weight White Statement + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-5"
          >
            <h3 className="font-['Poppins',sans-serif] font-light text-[26px] sm:text-[32px] lg:text-[36px] text-white leading-[1.25] tracking-[-0.01em]">
              Connecting regulatory insight, technical analysis, climate finance, and implementation planning.
            </h3>

            <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[17px] text-white/80 leading-[1.65]">
              We turn ambitious climate priorities into structured, bankable, and measurable outcomes.
            </p>
          </motion.div>

          {/* Right Column: Oversized Teal Stage Counters + Clean Delivery Schema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-10"
          >
            {/* 3 Stages in GCC Oversized Teal Numeral Style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {DELIVERY_STAGES.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group border-t border-white/15 pt-5 transition-colors duration-200 hover:border-[#57D182]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Poppins',sans-serif] font-light text-[44px] sm:text-[52px] leading-none text-[#57D182] tracking-[-0.02em]">
                        {item.num}
                      </span>
                      <IconComp className="w-5 h-5 text-[#57D182]/80 group-hover:text-[#57D182] transition-colors" />
                    </div>
                    <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#57D182] mt-2">
                      {item.stage}
                    </div>
                    <div className="font-['Poppins',sans-serif] font-medium text-[17px] text-white mt-1 leading-snug">
                      {item.title}
                    </div>
                    <div className="font-['Poppins',sans-serif] font-light text-[13px] text-white/65 mt-1">
                      {item.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Advisory Delivery Schema (Clean Dark-Navy Architectural Card) */}
            <div className="bg-white/[0.04] border border-white/15 p-5 sm:p-7 rounded-none">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-white/12">
                <div className="flex items-center gap-2.5 text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[#57D182]">
                  <Workflow className="w-4 h-4 text-[#57D182]" />
                  <span>ADVISORY DELIVERY SCHEMA</span>
                </div>
                <span className="text-[11.5px] font-normal tracking-wide text-white/90 bg-[#019934]/20 border border-[#57D182]/45 px-3 py-1 rounded-[3px]">
                  Methodology Traceability
                </span>
              </div>

              {/* Connected Horizontal Stepper */}
              <div className="relative pt-6 pb-1">
                <div
                  className="hidden sm:block absolute top-[41px] left-[16%] right-[16%] h-[1px] border-t border-dashed border-white/25 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 text-center relative z-10">
                  {DELIVERY_STAGES.map((step) => (
                    <div
                      key={step.num}
                      className="flex flex-col items-center space-y-1.5 group/step"
                    >
                      <div className="w-9 h-9 rounded-[5px] bg-[#1A5C3B] border border-[#57D182] text-[#57D182] group-hover/step:bg-[#019934] group-hover/step:text-white flex items-center justify-center font-['Poppins',sans-serif] font-medium text-[13px] transition-colors duration-200">
                        {step.num}
                      </div>
                      <span className="font-['Poppins',sans-serif] font-medium text-[14px] text-white pt-1">
                        {step.title}
                      </span>
                      <span className="font-['Poppins',sans-serif] font-light text-[12px] text-white/65 leading-tight">
                        {step.shortSub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            FOUR INTEGRATED PILLARS (Clean Institutional Navy Grid)
           ============================================================ */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const stepNum = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className="relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/12 hover:border-[#57D182]/70 p-6 sm:p-7 rounded-none transition-all duration-300 flex flex-col justify-between space-y-5 group overflow-hidden"
              >
                {/* Top Teal Hover Indicator Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Clean Teal Icon + Light Index */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="font-['Poppins',sans-serif] font-light text-[22px] text-white/35 group-hover:text-[#57D182] transition-colors duration-200">
                    {stepNum}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors duration-200 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[14px] text-white/75 leading-[1.65]">
                    {pillar.desc}
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
