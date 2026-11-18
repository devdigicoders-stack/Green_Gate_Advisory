import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceScope({
  badge = 'Advisory Scope',
  title = 'How We Can Support',
  subtitle,
  items = []
}) {
  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          {badge && (
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {badge}
            </span>
          )}

          {title && (
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] lg:text-[48px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Deliverables & Technical Workstreams — GCC Shared-Hairline Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e5e7eb]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
              className="relative bg-white border-r border-b border-[#e5e7eb] p-7 sm:p-8 transition-colors duration-300 flex flex-col justify-between space-y-5 group overflow-hidden min-h-[190px]"
            >
              {/* Top Teal Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

              {/* Smooth Institutional Deep Navy Hover Fill */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#1A5C3B] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
              />

              <div className="relative z-10 flex-1 flex flex-col justify-between space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 group-hover:bg-[#019934]/25 group-hover:text-[#57D182] px-2.5 py-0.5 transition-colors duration-300">
                    WORKSTREAM {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#019934] group-hover:text-[#57D182] stroke-[1.6] transition-colors duration-300 flex-shrink-0" />
                </div>

                <p className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[17.5px] text-[#1A5C3B] group-hover:text-white transition-colors duration-300 leading-snug">
                  {item}
                </p>

                <div className="pt-4 border-t border-[#efefef] group-hover:border-white/15 flex items-center justify-between text-[11.5px] font-medium text-[#019934] group-hover:text-[#57D182] transition-colors duration-300 uppercase tracking-[0.12em]">
                  <span>Technical Deliverable</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
