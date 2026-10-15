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
      className="rounded-3xl bg-white border border-sand-border/90 p-7 sm:p-8 shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 group"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
            MODULE {topic.number}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
            {desc}
          </p>
        </div>

        {/* Expandable Topic Details Scope */}
        {scope && (
          <div className="pt-2">
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
                  <div className="mt-3 p-3.5 rounded-2xl bg-sage/50 border border-sand-border/80 text-xs text-charcoal leading-relaxed font-sans">
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
      <div className="pt-4 border-t border-sand-border/60">
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
