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
      className="rounded-3xl bg-white border border-sand-border/90 overflow-hidden shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300"
    >
      {/* Image-Led Hero Banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={category.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/70 to-transparent" />
        
        {/* Banner Overlay Info */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-widest text-forest-dark bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-xs uppercase">
              AUDIENCE CATEGORY {category.number}
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-gold-light border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Specialised Practice</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold flex-shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-sm">
              {category.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-10 space-y-8">
        {/* Summary Paragraph */}
        <p className="text-base sm:text-lg text-charcoal leading-relaxed font-sans font-light max-w-4xl">
          {category.summary}
        </p>

        {/* Support Areas Grid */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-deep-green">
            Specific Support Areas & Advisory Scope
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {Array.isArray(category.supportAreas) && category.supportAreas.map((area, aIdx) => (
              <div
                key={aIdx}
                className="p-4 rounded-2xl bg-sage/40 border border-sand-border/70 flex items-start gap-3 text-xs sm:text-sm text-charcoal-muted font-sans font-light"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Services Links */}
        {Array.isArray(category.relevantServices) && category.relevantServices.length > 0 && (
          <div className="pt-6 border-t border-sand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-display font-semibold uppercase tracking-wider text-charcoal-muted">
              Relevant Advisory Practices:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {category.relevantServices.map((srv, sIdx) => (
                <Link
                  key={sIdx}
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-forest/5 hover:bg-forest hover:text-white text-deep-green border border-forest/15 transition-all group/tag"
                >
                  <span>{srv.name}</span>
                  <ArrowRight className="w-3 h-3 group-hover/tag:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
