import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';

export default function RelatedServices({ currentKey }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  // Pick up to 3 complementary services excluding current
  const related = SERVICES_LIST.filter(s => s.key !== currentKey).slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            badge={t('services.relatedBadge', 'Complementary Capabilities')}
            title={t('services.relatedTitle', 'Related Advisory Practices')}
            subtitle={t('services.relatedSubtitle', 'Explore interconnected workstreams across compliance, project preparation, and sustainable finance.')}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((srv, idx) => (
            <motion.div
              key={srv.key}
              initial={{ 
                opacity: 0, 
                x: idx === 0 ? -45 : idx === 2 ? 45 : 0, 
                y: idx === 1 ? 35 : 0 
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.65, 
                delay: idx * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <Link
                to={getLocalizedPath(`/services/${srv.slug}`)}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_40px_-6px_rgba(1,153,53,0.2),0_6px_16px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden min-h-[220px] h-full"
              >
                {/* Slow-motion background slide up from bottom to top */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#062A17] to-[#0D4429] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" 
                />

                {/* Card Content Container */}
                <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] px-2.5 py-0.5 rounded-none border border-[#CFE8D7] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 shadow-2xs">
                        PRACTICE {srv.number}
                      </span>
                      <span className="text-xs font-mono text-[#019935] group-hover:text-gold transition-colors duration-300">
                        0{srv.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#16221A] group-hover:text-white transition-colors duration-300 leading-snug">
                      {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4E5E54] group-hover:text-white/90 line-clamp-3 leading-relaxed font-sans font-normal transition-colors duration-300">
                      {t(`services.items.${srv.key}.lead`, '')}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8EFEA] group-hover:border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#019935] group-hover:text-[#4ADE80] transition-colors duration-300">
                    <span>{t('services.overview.grid.exploreService', 'Explore Service')}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
