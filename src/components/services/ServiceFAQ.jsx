import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

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
    <section className="py-14 sm:py-20 bg-sage/30 border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-none bg-white border border-[#DCE8E0] overflow-hidden shadow-2xs transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#019935]/40 rounded-none hover:bg-[#F9FCF9] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#019935] flex-shrink-0" />
                    <span className="font-display font-bold text-base sm:text-lg text-forest">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-forest/50 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#019935]' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans border-t border-[#E8EFEA]"
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
