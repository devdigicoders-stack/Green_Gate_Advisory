import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingCard({ topic, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const Icon = topic.icon;
  const title = t(`training.topics.items.${topic.key}.title`, topic.id);
  const desc = t(`training.topics.items.${topic.key}.desc`, '');
  const scope = t(`training.topics.items.${topic.key}.scope`, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="border-b border-sand-border/80 pb-6 flex flex-col justify-between space-y-4 group hover:border-deep-green transition-colors"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-deep-green group-hover:text-white transition-colors duration-200">
              <Icon className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-deep-green">
              MODULE {topic.number}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-normal">
            {desc}
          </p>
        </div>

        {/* Expandable Topic Details Scope */}
        {scope && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-green hover:text-forest transition-colors focus:outline-none"
            >
              <span>{isExpanded ? t('training.topics.collapseDetails', 'Hide Scope') : t('training.topics.expandDetails', 'View Detailed Scope')}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2.5 p-3 rounded-xl bg-[#F4F6F4] border border-sand-border/80 text-xs text-charcoal leading-relaxed font-sans">
                    <span className="font-semibold text-forest block mb-1 uppercase tracking-wider text-[10px]">
                      Curriculum Focus:
                    </span>
                    {scope}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Enquire Action Link */}
      <div className="pt-2">
        <Link
          to={getLocalizedPath('/contact?service=training')}
          state={{ serviceInterest: 'Training and Capacity Building', topic: title }}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/link"
        >
          <span>{t('training.topics.enquireTopic', 'Enquire About This Topic')}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
