import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
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
    <section className="py-14 sm:py-20 bg-sage/30 border-b border-sand-border/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-sand-border overflow-hidden shadow-subtle transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    <span className="font-display font-bold text-base sm:text-lg text-forest">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-forest/50 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-forest' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans border-t border-sand-border/40"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
