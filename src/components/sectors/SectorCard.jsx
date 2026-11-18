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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: (index % 3) * 0.06 }}
      className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-300 flex flex-col justify-between group font-['Poppins',sans-serif]"
    >
      {/* Top Photographic Header with GCC Diagonal Deep-Navy-to-Teal Duotone Overlay */}
      <div className="relative h-48 overflow-hidden bg-[#1A5C3B]">
        <img
          src={imageSrc}
          alt={sector.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* Top Badges */}
        <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-[0.16em] text-white bg-[#019934] px-2.5 py-1 uppercase">
            SECTOR {sector.number}
          </span>
          <div className="w-9 h-9 rounded-[4px] bg-white/15 backdrop-blur-xs text-white border border-white/25 flex items-center justify-center">
            <Icon className="w-4.5 h-4.5 stroke-[1.6]" />
          </div>
        </div>

        {/* Sector Title on Image Bottom */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="font-['Poppins',sans-serif] font-medium text-[19px] sm:text-[20px] text-white leading-snug">
            {sector.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 space-y-5 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68]">
            {sector.summary}
          </p>

          {/* Sector-Specific Considerations — GCC #f7f7f7 Left-Teal Callout */}
          <div className="p-4 bg-[#f7f7f7] border border-[#e5e7eb] border-l-[3px] border-l-[#019934] space-y-1.5">
            <div className="flex items-center gap-1.5 font-medium text-[#1A5C3B] text-[11.5px] uppercase tracking-[0.14em]">
              <AlertCircle className="w-3.5 h-3.5 text-[#019934] stroke-[1.75] flex-shrink-0" />
              <span>Key Considerations</span>
            </div>
            <p className="font-['Poppins',sans-serif] font-light text-[13px] text-[#555555] leading-[1.6]">
              {sector.challenges}
            </p>
          </div>

          {/* Associated Services Tags */}
          {Array.isArray(sector.services) && sector.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {sector.services.map((srv, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-0.5 text-[11.5px] font-normal bg-[#57D182]/25 text-[#1A5C3B]"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Explore Service Link — GCC Circular Navy -> Teal Arrow */}
        <div className="pt-4 border-t border-[#efefef]">
          <Link
            to={getLocalizedPath(sector.serviceSlug ? `/services/${sector.serviceSlug}` : '/services')}
            className="inline-flex items-center gap-3 group/link focus:outline-none"
          >
            <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover/link:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.75] group-hover/link:translate-x-0.5 transition-transform" />
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover/link:text-[#019934] transition-colors">
              Explore Relevant Advisory
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
