import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Download, 
  Clock, 
  ArrowRight, 
  FileSpreadsheet, 
  FileText, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const RESOURCE_ICONS = {
  FileSpreadsheet,
  FileText,
  Sparkles,
  Scale,
  CheckCircle2,
  BookOpen
};

export default function ResourceCard({ resource, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const Icon = resource.icon || FileText;

  const title = t(`insights.resources.${resource.translationKey}.title`, resource.id);
  const desc = t(`insights.resources.${resource.translationKey}.desc`, '');

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

          {/* Status Badge */}
          {resource.available && resource.downloadUrl ? (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-deep-green/10 text-deep-green border border-deep-green/20">
              {t('insights.resources.statusAvailable', 'Download Document')}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-sage text-charcoal-muted border border-sand-border">
              <Clock className="w-3 h-3 text-gold-dark" />
              <span>{t('insights.resources.statusComingSoon', 'Coming Soon')}</span>
            </span>
          )}
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold tracking-widest text-gold-dark uppercase block">
            {resource.format}
          </span>
          <h3 className="font-display font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
            {desc}
          </p>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-4 border-t border-sand-border/60">
        {resource.available && resource.downloadUrl ? (
          <a
            href={resource.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors"
          >
            <span>Download Framework</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={getLocalizedPath(resource.serviceSlug ? `/services/${resource.serviceSlug}` : '/contact')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/link"
          >
            <span>Consult Related Practice</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
