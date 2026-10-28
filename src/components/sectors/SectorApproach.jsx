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
import SectionHeader from '../common/SectionHeader';

const STEP_ICONS = [Search, Layers, FileCheck2, TrendingUp];

export default function SectorApproach() {
  const { t } = useTranslation();

  const rawSteps = t('sectors.framework.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('sectors.framework.eyebrow', 'Delivery Architecture')}
            title={t('sectors.framework.heading', 'Our Sector-Specific Advisory Framework')}
            subtitle={t('sectors.framework.subtitle', 'How Green Gate Advisory structures engagements around industry-specific realities rather than generic templates.')}
          />
        </motion.div>

        {/* 4-Step Process Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            const initialMotion = 
              idx === 0 ? { opacity: 0, x: -50 } :
              idx === 1 ? { opacity: 0, x: -20, y: 25 } :
              idx === 2 ? { opacity: 0, x: 20, y: 25 } :
              { opacity: 0, x: 50 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 sm:p-7 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer overflow-hidden min-h-[220px]"
              >
                {/* Top Green Accent Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-mono font-bold text-[#019935]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center transition-all shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF4F0] flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#019935]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#019935] flex-shrink-0" />
                  <span>Objective-aligned output</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverables Rigour & Advisory Boundaries Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-none bg-white border border-[#DCE8E0] border-l-4 border-l-[#019935] p-6 sm:p-8 flex flex-col md:flex-row items-start gap-4 sm:gap-6 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)]"
        >
          <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-[#019935]" />
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-[#4E5E54] font-sans leading-relaxed">
            <h4 className="font-display font-bold text-sm sm:text-base text-[#16221A]">
              Deliverable Integrity & Engagement Principles
            </h4>
            <p>
              {t('sectors.framework.notice', 'Illustrative notice: Deliverables and pathways are tailored to client context and agreed engagement scope. We do not publish unverified client outcomes or guaranteed regulatory determinations.')}
            </p>
            <p className="text-[#7D9084] text-[11px]">
              Every deliverable is prepared in accordance with applicable statutory reporting frameworks, accredited greenhouse gas accounting methodologies (GHG Protocol Corporate Standard, ISO 14064, EU CBAM Implementing Regulations), and approved carbon registry rules.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
