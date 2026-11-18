import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceFAQ({
  badge = 'Technical FAQ',
  title = 'Frequently Asked Questions',
  subtitle = 'Official clarifications regarding advisory scope, regulatory frameworks, and delivery processes.',
  faqs = []
}) {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-5xl mx-auto space-y-12">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          {badge && (
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {badge}
            </span>
          )}

          {title && (
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[40px] lg:text-[46px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[18px] text-[#7f7f7f] leading-[1.5]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* GCC Stacked Flat Hairline Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                className={`rounded-[4px] bg-white border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#019934] border-l-[3px] border-l-[#019934]'
                    : 'border-[#e5e7eb] hover:border-[#019934]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#f9fafb] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[18px] text-[#1A5C3B] leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1A5C3B]/60 flex-shrink-0 transition-transform duration-200 stroke-[1.6] ${
                      isOpen ? 'rotate-180 text-[#019934]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 sm:px-8 pb-6 pt-4 text-[14.5px] sm:text-[15.5px] font-['Poppins',sans-serif] font-light text-[#555555] leading-[1.75] bg-[#f9fafb] border-t border-[#efefef]"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
