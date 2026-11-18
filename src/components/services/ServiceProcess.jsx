import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceProcess({
  badge = 'Methodology & Process',
  title = 'Delivery Pathway',
  subtitle,
  steps = []
}) {
  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 overflow-hidden">
      {/* Subtle Concentric Arc Watermark (GCC Deep Navy Band Motif) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -bottom-28 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="380"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Dark-Navy Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          {badge && (
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
              {badge}
            </span>
          )}

          {title && (
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] lg:text-[48px] text-white leading-[1.16] tracking-[-0.01em]">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Clean Institutional Process Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((st, idx) => {
            const phaseNum = st.step || (idx < 9 ? `0${idx + 1}` : idx + 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                className="relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] p-6 sm:p-7 rounded-none transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                {/* Top Teal Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/12">
                    <span className="font-['Poppins',sans-serif] font-light text-[38px] leading-none text-[#57D182]">
                      {phaseNum}
                    </span>
                    {idx < steps.length - 1 ? (
                      <ArrowRight className="w-5 h-5 text-[#57D182]/75 group-hover:text-[#57D182] group-hover:translate-x-1 transition-all duration-200 stroke-[1.6]" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-[#57D182] stroke-[1.6]" />
                    )}
                  </div>

                  <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#57D182] bg-[#019934]/20 px-2.5 py-0.5">
                    PHASE {phaseNum}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors duration-200 leading-snug">
                      {st.title}
                    </h3>

                    {st.desc && (
                      <p className="font-['Poppins',sans-serif] font-light text-[13.5px] sm:text-[14px] text-white/75 leading-[1.65]">
                        {st.desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/12 flex items-center justify-between text-[11.5px] font-medium text-[#57D182] uppercase tracking-[0.12em]">
                  <span>Milestone Gate</span>
                  <span>0{idx + 1}/0{steps.length}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
