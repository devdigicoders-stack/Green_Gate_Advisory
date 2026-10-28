import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Target, 
  Scale, 
  Layers, 
  Sparkles, 
  Database, 
  Users2, 
  FileCheck2,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const DIMENSION_ICONS = [
  Target,
  Scale,
  Layers,
  Sparkles,
  Database,
  Users2,
  FileCheck2
];

export default function TailoredAdvisory() {
  const { t } = useTranslation();

  const rawDimensions = t('audience.adaptation.dimensions', { returnObjects: true }) || [];
  const dimensions = Array.isArray(rawDimensions) ? rawDimensions : [];

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
            badge={t('audience.adaptation.eyebrow', 'Engagement Flexibility')}
            title={t('audience.adaptation.heading', 'Tailored to Your Context & Objectives')}
            subtitle={t('audience.adaptation.subtitle', 'Rather than enforcing a rigid template, Green Gate Advisory adapts its advisory scope to each organisation\'s unique operating environment.')}
          />
        </motion.div>

        {/* 7 Adaptation Dimensions Grid + 1 Balancing Summary Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {dimensions.map((dim, idx) => {
            const Icon = DIMENSION_ICONS[idx] || SlidersHorizontal;
            const initialMotion = 
              idx % 4 === 0 ? { opacity: 0, x: -45 } :
              idx % 4 === 1 ? { opacity: 0, x: -15, y: 25 } :
              idx % 4 === 2 ? { opacity: 0, x: 15, y: 25 } :
              { opacity: 0, x: 45 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 4) * 0.08 }}
                className="p-6 rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden cursor-pointer min-h-[220px]"
              >
                {/* Top Green Accent Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] px-2 py-0.5 rounded-none border border-[#CDE8D5]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-[17px] text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug">
                    {dim.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {dim.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF4F0] text-[11px] font-mono font-semibold text-[#019935] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#019935]" />
                  <span>Calibrated advisory scope</span>
                </div>
              </motion.div>
            );
          })}

          {/* 8th Balancing Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
            className="p-6 rounded-none bg-[#16221A] text-white border border-[#16221A] shadow-[0_6px_20px_-4px_rgba(0,0,0,0.15)] flex flex-col justify-between space-y-4 relative overflow-hidden group min-h-[220px]"
          >
            {/* Top Green Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935]" />

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#019935] bg-[#019935]/15 border border-[#019935]/30 px-2 py-0.5 rounded-none uppercase tracking-wider inline-block">
                DELIVERY PHILOSOPHY
              </span>
              <h3 className="font-display font-bold text-lg text-white leading-snug">
                Context-Driven Advisory
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans font-normal">
                Every advisory engagement is structured directly with client leadership, avoiding generic playbooks and ensuring statutory compliance.
              </p>
            </div>
            <div className="pt-3 border-t border-white/15 text-[11px] font-mono text-[#019935] flex items-center gap-1.5 font-semibold">
              <Info className="w-3.5 h-3.5 flex-shrink-0 text-[#019935]" />
              <span>Tailored deliverables only</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
