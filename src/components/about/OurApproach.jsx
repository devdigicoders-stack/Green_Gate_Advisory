import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  GitBranch, 
  FileCheck, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

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
    <section id="our-approach" className="py-14 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('about.approach.eyebrow', 'Structured Methodology')}
            title={t('about.approach.heading', 'Our Approach')}
            subtitle={t('about.approach.subtitle')}
          />
        </motion.div>

        {/* 5-Stage Process: Sequential Cards with Left & Right Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-4.5 lg:gap-5">
          {steps.map((st, idx) => {
            const Icon = STAGE_ICONS[idx % STAGE_ICONS.length] || Search;
            const phaseNum = st.step || `0${idx + 1}`;
            const initialMotion = 
              idx === 0 
                ? { opacity: 0, x: -50 } 
                : idx === 1 
                ? { opacity: 0, x: -20, y: 25 } 
                : idx === 2 
                ? { opacity: 0, y: 40 } 
                : idx === 3 
                ? { opacity: 0, x: 20, y: 25 } 
                : { opacity: 0, x: 50 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 5) * 0.08 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-5 sm:p-5.5 lg:p-5 min-h-[220px] sm:min-h-[250px] lg:min-h-[290px] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
              >
                {/* Top Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-3.5 sm:space-y-4">
                  {/* Phase Number Badge + Icon Container */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#019935] bg-[#E8F6ED] px-2.5 py-1 rounded-none border border-[#CDE8D5] shadow-2xs group-hover:bg-[#019935] group-hover:text-white transition-colors duration-300">
                      PHASE {phaseNum}
                    </span>

                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-[#F4FAF5] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  {/* Title & Description with Aligned Min-Height on Desktop */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-[15px] sm:text-base text-[#16221A] group-hover:text-[#019935] transition-colors duration-300 leading-snug lg:min-h-[42px] lg:flex lg:items-center">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                      {st.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Sequence Indicator */}
                <div className="pt-3 mt-4 border-t border-[#EEF4F0] text-[11px] font-mono font-semibold text-[#5D7064] group-hover:text-[#019935] transition-colors uppercase tracking-wider">
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
