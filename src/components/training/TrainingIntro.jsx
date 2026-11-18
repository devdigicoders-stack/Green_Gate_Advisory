import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FileText,
  Share2,
  ShieldCheck,
  Landmark,
  Layers,
  BarChart3,
  Compass,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingIntro() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const PILLARS = [
    {
      key: 'policy',
      icon: FileText,
      title: 'Climate Policy & NDCs',
      text: t('training.intro.pillars.policy', 'National climate policy design, NDC alignment, and international negotiation mechanics.')
    },
    {
      key: 'markets',
      icon: Share2,
      title: 'Carbon Market Mechanisms',
      text: t('training.intro.pillars.markets', 'Voluntary carbon market methodologies, baseline rules, and additionality testing.')
    },
    {
      key: 'compliance',
      icon: ShieldCheck,
      title: 'Compliance & CBAM',
      text: t('training.intro.pillars.compliance', 'EU CBAM embedded emissions calculations and ETS allowance compliance obligations.')
    },
    {
      key: 'finance',
      icon: Landmark,
      title: 'Climate Finance Access',
      text: t('training.intro.pillars.finance', 'Climate finance proposal formulation for GCF, GEF, Adaptation Fund, and bilateral facilities.')
    },
    {
      key: 'preparation',
      icon: Layers,
      title: 'Project Preparation & MRV',
      text: t('training.intro.pillars.preparation', 'Project Design Document (PDD) preparation, feasibility studies, and digital MRV planning.')
    },
    {
      key: 'reporting',
      icon: BarChart3,
      title: 'Emissions Accounting',
      text: t('training.intro.pillars.reporting', 'GHG Protocol Scope 1, 2, and 3 accounting boundaries and primary supplier data workflows.')
    },
    {
      key: 'governance',
      icon: Compass,
      title: 'Environmental Governance',
      text: t('training.intro.pillars.governance', 'Environmental decision-making frameworks, safeguards, and Paris Agreement transparency.')
    }
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white bg-cover bg-center bg-no-repeat overflow-hidden border-b border-[#e5e7eb] font-['Poppins',sans-serif]"
      style={{ backgroundImage: `url('/images/training-intro-bg.jpg')` }}
    >
      {/* Preserved Background Image softly washed into GCC Clean Institutional White */}
      <div className="absolute inset-0 bg-white/90 pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('training.intro.eyebrow', 'Knowledge & Institutional Capability')}</span>
            </div>

            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-0.01em] leading-[1.2]">
              <span className="text-[#1A5C3B] block">Building Climate Knowledge &amp;</span>
              <span className="text-[#019934] block">Practical Delivery Capacity</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.75]">
              {t('training.intro.p1', 'Climate regulation, international carbon mechanisms, and sustainable finance requirements demand specialized institutional competencies. Green Gate Advisory designs bespoke training and capacity-building programmes to bridge the gap between high-level climate ambition and day-to-day technical execution.')}
            </p>
            <p className="font-['Poppins',sans-serif] font-medium text-[15.5px] sm:text-[17px] text-[#1A5C3B] leading-[1.7]">
              {t('training.intro.p2', 'Our training programmes support public ministries, industrial compliance teams, project sponsors, and financial analysts—equipping teams with the technical tools, regulatory clarity, and methodological frameworks needed to deliver credible climate outcomes.')}
            </p>
          </motion.div>
        </div>

        {/* Core Technical Competencies & Delivery Disciplines — GCC Flat Architectural Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-[4px] border border-[#e5e7eb] p-6 sm:p-9 lg:p-10 space-y-7"
        >
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#efefef] gap-3">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
              <h3 className="font-['Poppins',sans-serif] font-medium text-[13px] sm:text-[14px] tracking-[0.16em] uppercase text-[#1A5C3B]">
                CORE TECHNICAL COMPETENCIES &amp; DELIVERY DISCIPLINES
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#57D182]/30 text-[#1A5C3B] text-[12px] font-medium self-start sm:self-auto">
              <Layers className="w-3.5 h-3.5 text-[#019934] stroke-[1.75]" />
              <span>Co-Designed • Non-Rigid Curricula</span>
            </div>
          </div>

          {/* 7 Pillars Shared-Hairline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#e5e7eb]">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.key}
                  to={getLocalizedPath('/contact?service=training')}
                  state={{ serviceInterest: p.title }}
                  className="group relative flex items-center justify-between p-5 sm:p-6 bg-[#f9fafb] hover:bg-[#57D182]/[0.14] border-r border-b border-[#e5e7eb] transition-colors duration-200 gap-4 w-full focus:outline-none"
                >
                  <div className="flex items-start gap-4 flex-grow min-w-0">
                    <div className="w-10 h-10 rounded-[4px] bg-white border border-[#e5e7eb] group-hover:border-[#019934] flex items-center justify-center text-[#019934] flex-shrink-0 transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h4 className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#1A5C3B] leading-snug group-hover:underline decoration-[#1A5C3B] underline-offset-4">
                        {p.title}
                      </h4>
                      <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6]">
                        {p.text}
                      </p>
                    </div>
                  </div>

                  {/* GCC Circular Navy -> Teal Arrow */}
                  <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
