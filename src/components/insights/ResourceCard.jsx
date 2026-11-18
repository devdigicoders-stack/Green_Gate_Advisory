import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Clock, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const RESOURCE_PHOTOS = [
  '/images/photo-cbam-industry.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-ets-pricing.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-sustainable-agriculture.jpg'
];

export default function ResourceCard({ resource, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const title = t(`insights.resources.${resource.translationKey}.title`, resource.id);
  const desc = t(`insights.resources.${resource.translationKey}.desc`, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.05 }}
      className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col justify-between group font-['Poppins',sans-serif]"
    >
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
          <img
            src={RESOURCE_PHOTOS[index % RESOURCE_PHOTOS.length]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {resource.available && resource.downloadUrl ? (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10.5px] font-medium tracking-[0.12em] uppercase bg-[#019934] text-white">
              {resource.format}
            </span>
          ) : (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 text-[10.5px] font-medium tracking-[0.12em] uppercase bg-white/92 text-[#1A5C3B]">
              <Clock className="w-3 h-3 text-[#019934]" />
              <span>{t('insights.resources.statusComingSoon', 'Coming Soon')}</span>
            </span>
          )}
        </div>

        <div className="p-6 space-y-2">
          <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
            {title}
          </h3>
          <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6] line-clamp-2">
            {desc}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="pt-3.5 border-t border-[#efefef]">
          {resource.available && resource.downloadUrl ? (
            <a
              href={resource.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full text-[12.5px] font-medium uppercase tracking-[0.1em] text-[#1A5C3B] hover:text-[#019934] transition-colors"
            >
              <span>Download</span>
              <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors">
                <Download className="w-3.5 h-3.5" />
              </span>
            </a>
          ) : (
            <Link
              to={getLocalizedPath(resource.serviceSlug ? `/services/${resource.serviceSlug}` : '/contact')}
              className="inline-flex items-center justify-between w-full text-[12.5px] font-medium uppercase tracking-[0.1em] text-[#1A5C3B] hover:text-[#019934] transition-colors group/link"
            >
              <span>Consult Practice</span>
              <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover/link:bg-[#019934] text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
