import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Sparkles, 
  Landmark, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
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

  const initialMotion = index % 2 === 0 ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 };

  return (
    <motion.div
      id={category.id}
      initial={initialMotion}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(1,153,53,0.18)] transition-all duration-300 overflow-hidden group"
    >
      {/* Top Green Accent Bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Modern Split-Layout: Photographic Panel + Strategic Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Natural Exposure Image Column */}
        <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
          <img
            src={imageSrc}
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle natural dark gradient for crisp text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#019935] bg-white px-3 py-1 rounded-none border border-[#CDE8D5] shadow-xs uppercase">
              CATEGORY {category.number}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-none bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight drop-shadow-sm">
              {category.name}
            </h3>
          </div>
        </div>

        {/* Strategic Content Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Summary */}
            <p className="text-sm sm:text-base text-[#4E5E54] leading-relaxed font-sans font-normal">
              {category.summary}
            </p>

            {/* Support Areas List */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#019935]">
                Key Support Areas & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Array.isArray(category.supportAreas) && category.supportAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-none bg-[#F4FAF5] border border-[#DCE8E0] hover:border-[#019935] flex items-start gap-2.5 text-xs sm:text-[13px] text-[#16221A] font-sans font-normal transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant Services Links */}
          {Array.isArray(category.relevantServices) && category.relevantServices.length > 0 && (
            <div className="pt-5 border-t border-[#EEF4F0] flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7D9084] mr-2">
                Advisory Practices:
              </span>
              {category.relevantServices.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-semibold bg-white hover:bg-[#019935] hover:text-white text-[#16221A] border border-[#DCE8E0] hover:border-[#019935] transition-all group/tag shadow-2xs"
                >
                  <span>{srv.name}</span>
                  <ArrowRight className="w-3 h-3 group-hover/tag:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
