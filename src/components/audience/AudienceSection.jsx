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

  return (
    <motion.div
      id={category.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
      className="rounded-3xl bg-white border border-sand-border overflow-hidden shadow-xs hover:border-deep-green/40 transition-all duration-300"
    >
      {/* Modern Split-Layout: Photographic Panel + Strategic Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Natural Exposure Image Column - No Artificial Green Overlay */}
        <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
          <img
            src={imageSrc}
            alt={category.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Subtle natural dark gradient for crisp text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-forest-dark bg-white/95 px-3 py-1 rounded-full shadow-xs uppercase">
              CATEGORY {category.number}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white flex-shrink-0">
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
            <p className="text-base sm:text-[17px] text-charcoal/90 leading-relaxed font-sans font-normal">
              {category.summary}
            </p>

            {/* Support Areas List */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-deep-green">
                Key Support Areas & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Array.isArray(category.supportAreas) && category.supportAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3 rounded-xl bg-[#F4F6F4] border border-sand-border/80 flex items-start gap-2.5 text-xs sm:text-[13px] text-charcoal/90 font-sans font-normal"
                  >
                    <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant Services Links */}
          {Array.isArray(category.relevantServices) && category.relevantServices.length > 0 && (
            <div className="pt-5 border-t border-sand-border/70 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 mr-2">
                Advisory Practices:
              </span>
              {category.relevantServices.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white hover:bg-deep-green hover:text-white text-forest border border-sand-border transition-all group/tag shadow-xs"
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
