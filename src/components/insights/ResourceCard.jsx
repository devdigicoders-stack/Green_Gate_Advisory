import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Download,
  Clock,
  ArrowRight,
  FileText
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ResourceCard({ resource, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const Icon = resource.icon || FileText;

  const title = t(`insights.resources.${resource.translationKey}.title`, resource.id);
  const desc = t(`insights.resources.${resource.translationKey}.desc`, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(index * 0.05, 0.25) }}
      className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between space-y-6 group overflow-hidden font-['Poppins',sans-serif]"
    >
      {/* Signature 2px GCC Teal Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-11 h-11 rounded-[5px] bg-[#1A5C3B]/[0.05] text-[#1A5C3B] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
            <Icon className="w-5 h-5 stroke-[1.6]" />
          </div>

          {/* Status Badge */}
          {resource.available && resource.downloadUrl ? (
            <span className="px-2.5 py-0.5 text-[11px] font-medium tracking-[0.12em] uppercase bg-[#57D182]/35 text-[#1A5C3B]">
              {t('insights.resources.statusAvailable', 'Download Document')}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.12em] uppercase bg-[#F4F8F5] text-[#555555] border border-[#e5e7eb]">
              <Clock className="w-3 h-3 text-[#019934]" />
              <span>{t('insights.resources.statusComingSoon', 'Coming Soon')}</span>
            </span>
          )}
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-medium tracking-[0.16em] text-[#0A7A32] uppercase block">
            {resource.format}
          </span>
          <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
            {title}
          </h3>
          <p className="font-['Poppins',sans-serif] font-light text-[13.5px] sm:text-[14px] text-[#555555] leading-[1.68]">
            {desc}
          </p>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-4 border-t border-[#efefef]">
        {resource.available && resource.downloadUrl ? (
          <a
            href={resource.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full text-[13px] font-medium text-[#1A5C3B] hover:text-[#019934] transition-colors"
          >
            <span>Download Framework</span>
            <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
              <Download className="w-3.5 h-3.5" />
            </span>
          </a>
        ) : (
          <Link
            to={getLocalizedPath(resource.serviceSlug ? `/services/${resource.serviceSlug}` : '/contact')}
            className="inline-flex items-center justify-between w-full text-[13px] font-medium text-[#1A5C3B] hover:text-[#019934] transition-colors group/link"
          >
            <span>Consult Related Practice</span>
            <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover/link:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
