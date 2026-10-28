import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

export default function ServiceProcess({ 
  badge = 'Methodology & Process', 
  title = 'Delivery Pathway', 
  subtitle, 
  steps = [] 
}) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            badge={badge}
            title={title}
            subtitle={subtitle}
          />
        </motion.div>

        {/* Clean Process Pathway Timeline - Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ 
                opacity: 0, 
                x: idx === 0 ? -45 : idx === steps.length - 1 ? 45 : 0,
                y: idx === 0 || idx === steps.length - 1 ? 0 : 30
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                duration: 0.65, 
                delay: idx * 0.12, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8EFEA] group-hover:border-[#019935]/30 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] px-2.5 py-1 rounded-none border border-[#CFE8D7] shadow-2xs">
                    PHASE {st.step || (idx < 9 ? `0${idx + 1}` : idx + 1)}
                  </span>
                  {idx < steps.length - 1 ? (
                    <ArrowRight className="w-4 h-4 text-[#4E5E54] group-hover:text-[#019935] group-hover:translate-x-1 transition-all duration-300" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-[#019935]" />
                  )}
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#16221A] group-hover:text-[#019935] transition-colors duration-300 leading-snug">
                    {st.title}
                  </h3>

                  {st.desc && (
                    <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                      {st.desc}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8EFEA] flex items-center justify-between text-[11px] font-semibold text-[#019935]">
                <span className="uppercase tracking-wider">Milestone Gate</span>
                <span className="text-xs font-mono">0{idx + 1}/0{steps.length}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
