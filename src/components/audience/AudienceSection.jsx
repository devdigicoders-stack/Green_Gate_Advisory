import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Sparkles,
  Landmark,
  Globe2,
  ArrowRight
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const CATEGORY_ICONS = {
  'governments': Building2,
  'companies': Factory,
  'developers': Sparkles,
  'investors': Landmark,
  'international-ngos': Globe2
};

const CATEGORY_IMAGES = {
  'governments': '/images/hero-canopy.jpg',
  'companies': '/images/sustainable-industry.jpg',
  'developers': '/images/blue-carbon.jpg',
  'investors': '/images/clean-energy.jpg',
  'international-ngos': '/images/infrastructure.jpg'
};

export default function AudienceSection({ category, index = 0 }) {
  const { getLocalizedPath } = useLocale();
  const Icon = CATEGORY_ICONS[category.id] || Building2;
  const imageSrc = CATEGORY_IMAGES[category.id] || '/images/hero-canopy.jpg';
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      id={category.id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-300 overflow-hidden group scroll-mt-28 font-['Poppins',sans-serif]"
    >
      {/* Top Signature Teal Accent Rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

      {/* Alternating Split Layout (Echoing GCC Photographic Mosaic) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Photographic Column with GCC Diagonal Deep-Navy-to-Teal Duotone Overlay */}
        <div
          className={`lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] overflow-hidden bg-[#1A5C3B] ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <img
            src={imageSrc}
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(26, 92, 59, 0.76) 0%, rgba(14, 124, 60, 0.52) 58%, rgba(1, 153, 52, 0.42) 100%)'
            }}
          />

          <div className="absolute top-5 left-6">
            <span className="text-[11px] font-medium tracking-[0.16em] text-white bg-[#019934] px-3 py-1 uppercase">
              CATEGORY {category.number}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-[4px] bg-white/15 backdrop-blur-xs border border-white/25 flex items-center justify-center text-white flex-shrink-0">
              <Icon className="w-5 h-5 stroke-[1.6]" />
            </div>
            <h3 className="font-['Poppins',sans-serif] font-medium text-[22px] sm:text-[25px] text-white leading-snug">
              {category.name}
            </h3>
          </div>
        </div>

        {/* Strategic Content Column */}
        <div
          className={`lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between space-y-7 ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="space-y-6">
            {/* Summary */}
            <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#444444] leading-[1.75]">
              {category.summary}
            </p>

            {/* Support Areas List — GCC Shared-Hairline Grid with Teal Dash Markers (—) */}
            <div className="space-y-3.5">
              <h4 className="font-['Poppins',sans-serif] font-medium text-[12px] uppercase tracking-[0.18em] text-[#019934]">
                Key Support Areas &amp; Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#e5e7eb]">
                {Array.isArray(category.supportAreas) &&
                  category.supportAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 bg-[#f9fafb] hover:bg-[#57D182]/[0.12] border-r border-b border-[#e5e7eb] flex items-start gap-3 text-[13.5px] font-light text-[#3C3C3C] transition-colors"
                    >
                      <span
                        className="inline-block w-3.5 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-[1.6]">{area}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Relevant Services Links — GCC Soft-Grey -> Navy Pill Buttons */}
          {Array.isArray(category.relevantServices) && category.relevantServices.length > 0 && (
            <div className="pt-5 border-t border-[#efefef] flex flex-wrap items-center gap-2.5">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7f7f7f] mr-1">
                Advisory Practices:
              </span>
              {category.relevantServices.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[4px] text-[12.5px] font-normal bg-[#f5f5f5] hover:bg-[#1A5C3B] text-[#1A5C3B] hover:text-white transition-colors duration-200 group/tag"
                >
                  <span>{srv.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#019934] group-hover/tag:text-[#57D182] group-hover/tag:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
