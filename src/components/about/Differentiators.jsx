import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  GitMerge, 
  Sparkles, 
  Landmark, 
  Trees, 
  ScrollText, 
  Users 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const DIFFERENTIATOR_ICONS = [
  GitMerge,
  Sparkles,
  Landmark,
  Trees,
  ScrollText,
  Users
];

export default function Differentiators() {
  const { t } = useTranslation();

  const rawItems = t('about.differentiators.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="why-green-gate" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('about.differentiators.eyebrow', 'Distinctive Capabilities')}
            title={t('about.differentiators.heading', 'What Makes Us Different')}
            subtitle={t('about.differentiators.subtitle')}
          />
        </motion.div>

        {/* 6 High-Impact Architectural Capability Cards with Left & Right Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = DIFFERENTIATOR_ICONS[idx % DIFFERENTIATOR_ICONS.length] || Sparkles;
            const badgeNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;
            const colIndex = idx % 3;
            const initialMotion = 
              colIndex === 0 
                ? { opacity: 0, x: -50 } 
                : colIndex === 2 
                ? { opacity: 0, x: 50 } 
                : { opacity: 0, y: 40 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-5 sm:p-6 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_40px_-6px_rgba(1,153,53,0.2),0_6px_16px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden"
              >
                {/* Slow-motion background slide up from bottom to top */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#062A17] to-[#0D4429] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" 
                />

                {/* Card Content Container (z-10 to stay above the sliding background) */}
                <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between">
                  
                  {/* Top Row: Static Icon (No Rotation) + Value Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-white group-hover:text-[#019935] group-hover:border-white">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>
                    
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] px-3 py-0.5 rounded-none border border-[#CDE8D5] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 shadow-2xs">
                      {badgeNum}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-2 pt-0.5">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#16221A] group-hover:text-white transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4E5E54] group-hover:text-white/90 transition-colors duration-300 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Accent Strip */}
                  <div className="pt-3.5 border-t border-[#E8EFEA] group-hover:border-white/20 flex items-center justify-between text-[11px] font-semibold text-[#019935] group-hover:text-[#4ADE80] transition-colors duration-300">
                    <span className="uppercase tracking-wider">Core Capability</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
