import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function ServiceScope({ 
  badge = 'Advisory Scope', 
  title = 'How We Can Support', 
  subtitle, 
  items = [] 
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={badge}
            title={title}
            subtitle={subtitle}
          />
        </motion.div>

        {/* Deliverables & Technical Workstreams - Premium Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, idx) => {
            const initialMotion = 
              idx % 3 === 0 ? { opacity: 0, x: -45 } :
              idx % 3 === 1 ? { opacity: 0, y: 30 } :
              { opacity: 0, x: 45 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.08 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-5 sm:p-6 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden min-h-[170px]"
              >
                {/* Slow-motion background slide up from bottom to top */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#062A17] to-[#0D4429] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" 
                />

                {/* Card Content Container */}
                <div className="relative z-10 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] px-2.5 py-0.5 rounded-none border border-[#CFE8D7] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 shadow-2xs">
                      WORKSTREAM {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#019935] group-hover:text-gold transition-colors duration-300" />
                  </div>

                  <p className="font-display font-bold text-base sm:text-[17px] text-[#16221A] group-hover:text-white transition-colors duration-300 leading-snug">
                    {item}
                  </p>

                  <div className="pt-3 border-t border-[#E8EFEA] group-hover:border-white/20 flex items-center justify-between text-[11px] font-semibold text-[#019935] group-hover:text-[#4ADE80] transition-colors duration-300">
                    <span className="uppercase tracking-wider">Technical Deliverable</span>
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
