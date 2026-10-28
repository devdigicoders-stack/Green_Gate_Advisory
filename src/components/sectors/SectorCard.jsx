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

  const initialMotion = 
    index % 3 === 0 ? { opacity: 0, x: -50 } :
    index % 3 === 1 ? { opacity: 0, y: 35 } :
    { opacity: 0, x: 50 };

  return (
    <motion.div
      initial={initialMotion}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.08 }}
      className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] overflow-hidden shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Green Accent Bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Editorial Header - Natural Exposure */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={sector.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#019935] bg-white px-2.5 py-1 rounded-none border border-[#CDE8D5] shadow-xs uppercase">
            SECTOR {sector.number}
          </span>
          <div className="w-8 h-8 rounded-none bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Sector Title on image bottom */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug drop-shadow-sm">
            {sector.title}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3.5">
          <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
            {sector.summary}
          </p>

          {/* Sector-Specific Considerations */}
          <div className="p-3.5 rounded-none bg-[#F4FAF5] border border-[#DCE8E0] hover:border-[#019935] space-y-1.5 text-[#16221A] font-sans transition-colors">
            <div className="flex items-center gap-1.5 font-mono font-bold text-[#019935] text-[11px] uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-[#019935] flex-shrink-0" />
              <span>Key Considerations</span>
            </div>
            <p className="text-xs text-[#4E5E54] leading-relaxed font-normal">
              {sector.challenges}
            </p>
          </div>

          {/* Associated Services Tags */}
          {Array.isArray(sector.services) && sector.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {sector.services.map((srv, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2.5 py-0.5 rounded-none text-[11px] font-mono font-medium bg-white text-[#16221A] border border-[#DCE8E0]"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Explore Service Link */}
        <div className="pt-3.5 border-t border-[#EEF4F0]">
          <Link
            to={getLocalizedPath(sector.serviceSlug ? `/services/${sector.serviceSlug}` : '/services')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#019935] hover:text-[#017A2A] transition-colors group/link"
          >
            <span>Explore Relevant Advisory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
