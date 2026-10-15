import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function FAQAccordion({ filterIndices = null, title = null, subtitle = null }) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  // Retrieve raw FAQ list from translation
  const rawItems = t('faqs.items', { returnObjects: true }) || [];
  const faqList = Array.isArray(rawItems) ? rawItems : [];

  const displayedFaqs = filterIndices 
    ? faqList.filter((_, idx) => filterIndices.includes(idx))
    : faqList;

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!displayedFaqs.length) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SectionHeader 
        badge={t('faqs.title', 'Frequently Asked Questions')}
        title={title || t('faqs.title', 'Frequently Asked Questions')}
        subtitle={subtitle || t('faqs.subtitle', 'Clear answers regarding advisory scope, credentials, regulatory procedures, and outcomes.')}
      />

      <div className="space-y-3.5">
        {displayedFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-white border-deep-green/30 shadow-subtle' 
                  : 'bg-white/70 border-sand-border/80 hover:bg-white hover:border-sand-border'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full py-5 px-6 flex items-start justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-gold/40"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors ${
                    isOpen ? 'bg-forest text-gold' : 'bg-sage text-forest'
                  }`}>
                    Q
                  </span>
                  <span className="font-heading font-bold text-base sm:text-lg text-forest">
                    {faq.q}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-forest/60 transition-transform duration-300 flex-shrink-0 mt-1 ${
                  isOpen ? 'rotate-180 text-forest' : ''
                }`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed pl-16 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
