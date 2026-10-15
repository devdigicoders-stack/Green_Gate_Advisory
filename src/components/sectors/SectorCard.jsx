import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Flame, 
  Factory, 
  Box, 
  Truck, 
  Sprout, 
  Waves, 
  Recycle, 
  Droplets, 
  Building2, 
  Landmark, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const SECTOR_ICONS = {
  'energy-utilities': Zap,
  'oil-gas': Flame,
  'industry-manufacturing': Factory,
  'cement-steel-aluminium-fertilisers': Box,
  'transport-logistics': Truck,
  'agriculture-forestry-land-use': Sprout,
  'biodiversity-coastal-ecosystems': Waves,
  'waste-management-circular-economy': Recycle,
  'water-security-climate-adaptation': Droplets,
  'cities-buildings-infrastructure': Building2,
  'financial-institutions-investment': Landmark
};

const SECTOR_IMAGES = {
  'energy-utilities': '/images/clean-energy.jpg',
  'oil-gas': '/images/clean-energy.jpg',
  'industry-manufacturing': '/images/sustainable-industry.jpg',
  'cement-steel-aluminium-fertilisers': '/images/sustainable-industry.jpg',
  'transport-logistics': '/images/infrastructure.jpg',
  'agriculture-forestry-land-use': '/images/hero-canopy.jpg',
  'biodiversity-coastal-ecosystems': '/images/blue-carbon.jpg',
  'waste-management-circular-economy': '/images/about-landscape.jpg',
  'water-security-climate-adaptation': '/images/blue-carbon.jpg',
  'cities-buildings-infrastructure': '/images/infrastructure.jpg',
  'financial-institutions-investment': '/images/sustainable-industry.jpg'
};

export default function SectorCard({ sector, index = 0 }) {
  const { getLocalizedPath } = useLocale();
  const Icon = SECTOR_ICONS[sector.id] || Factory;
  const imageSrc = SECTOR_IMAGES[sector.id] || '/images/hero-canopy.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="rounded-3xl bg-white border border-sand-border/90 overflow-hidden shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between group"
    >
      {/* Editorial Photographic Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={sector.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-mono font-bold tracking-widest text-forest-dark bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
            SECTOR {sector.number}
          </span>
          <div className="w-9 h-9 rounded-full bg-forest-dark/80 backdrop-blur-md text-gold flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Sector Title on image bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-bold text-lg text-white leading-snug drop-shadow-sm">
            {sector.title}
          </h3>
        </div>
      </div>

      <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
            {sector.summary}
          </p>

          {/* Sector-Specific Challenges & Regulatory Considerations */}
          <div className="p-3.5 rounded-2xl bg-sage/50 border border-sand-border/80 space-y-1.5 text-xs text-charcoal font-sans font-light">
            <div className="flex items-center gap-1.5 font-semibold text-forest text-[11px] uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
              <span>Key Climate Considerations</span>
            </div>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              {sector.challenges}
            </p>
          </div>

          {/* Associated Services Tags */}
          {Array.isArray(sector.services) && sector.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {sector.services.map((srv, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-forest/5 text-deep-green border border-forest/10"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Explore Service Link */}
        <div className="pt-4 mt-4 border-t border-sand-border/50">
          <Link
            to={getLocalizedPath(sector.serviceSlug ? `/services/${sector.serviceSlug}` : '/services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/link"
          >
            <span>Explore Relevant Advisory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
