import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, MapPin, X, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import worldData from '../../data/worldMapPaths.json';

// Project categories corresponding to EcoSecurities style legend
const CATEGORIES = [
  { id: 'all', label: 'All projects', color: '#FFFFFF' },
  { id: 'carbon', label: 'Carbon Credits', color: '#E5A93C' },
  { id: 'climate', label: 'Climate projects', color: '#FFFFFF' },
  { id: 'investment', label: 'Investment-ready projects', color: '#E5A93C' }
];

// Pins positioned based on the equirectangular projection (1000 x 500 coordinates converted to %)
// x = (lng + 180) / 360 * 100%, y = (90 - lat) / 180 * 100%
const PINS = [
  // Latin America
  {
    id: 'la-1',
    name: 'Brazil Jurisdictional REDD+ & Bioeconomy',
    country: 'Brazil',
    region: 'Latin America',
    category: 'carbon',
    type: 'Carbon Credits',
    x: 32.5, // approx -63 deg lng
    y: 68.0, // approx -32 deg lat
    summary: 'High-integrity jurisdictional REDD+ architecture, Verra JNR and ART TREES crediting alignment.',
    stats: '1.2M+ ha protected • ART TREES standard'
  },
  {
    id: 'la-2',
    name: 'Colombia Regenerative Agroforestry',
    country: 'Colombia',
    region: 'Latin America',
    category: 'climate',
    type: 'Climate projects',
    x: 30.5,
    y: 48.5,
    summary: 'Restoration crediting and agroforestry carbon removal verified under Plan Vivo & Gold Standard.',
    stats: '450k tCO2e ARR • Gold Standard certified'
  },
  {
    id: 'la-3',
    name: 'Chile Green Hydrogen & Renewables',
    country: 'Chile',
    region: 'Latin America',
    category: 'investment',
    type: 'Investment-ready projects',
    x: 29.0,
    y: 72.0,
    summary: 'Industrial hydrogen transition and bankable export compliance finance structuring.',
    stats: 'Industrial scale • Article 6.2 bilateral pilot'
  },

  // Europe & UK
  {
    id: 'eu-1',
    name: 'London & Brussels Regulatory Hub',
    country: 'UK & European Union',
    region: 'Europe',
    category: 'climate',
    type: 'Climate projects',
    x: 49.5,
    y: 26.5,
    summary: 'Cross-border CBAM reporting, EU ETS compliance modeling, and corporate SBTi verification.',
    stats: 'EU CBAM & ETS • CSRD compliance'
  },

  // Middle East & GCC
  {
    id: 'me-1',
    name: 'GCC Sovereign Carbon Architecture',
    country: 'United Arab Emirates / GCC',
    region: 'Middle East',
    category: 'investment',
    type: 'Investment-ready projects',
    x: 58.5,
    y: 43.5,
    summary: 'National registry frameworks, Article 6 bilateral pilot transactions, and CCUS policy alignment.',
    stats: 'Sovereign advisory • Article 6.2 & 6.4'
  },

  // Sub-Saharan Africa
  {
    id: 'af-1',
    name: 'East African Mangrove & Peatland MRV',
    country: 'Kenya / Tanzania',
    region: 'Africa',
    category: 'climate',
    type: 'Climate projects',
    x: 57.0,
    y: 57.5,
    summary: 'Blue carbon coastal restoration MRV protocols and Green Climate Fund bankable structuring.',
    stats: 'Blue Carbon • GCF fundable portfolio'
  },
  {
    id: 'af-2',
    name: 'Southern Africa Community Agroforestry',
    country: 'Zambia / Mozambique',
    region: 'Africa',
    category: 'carbon',
    type: 'Carbon Credits',
    x: 54.0,
    y: 69.0,
    summary: 'High-integrity ARR, verified biodiversity safeguards, and equitable benefit-sharing models.',
    stats: 'Verra VM0007 • CCB Gold distinction'
  },

  // Asia-Pacific
  {
    id: 'ap-1',
    name: 'Southeast Asia Industrial Decarbonisation',
    country: 'Singapore & Malaysia',
    region: 'Asia-Pacific',
    category: 'climate',
    type: 'Climate projects',
    x: 74.5,
    y: 55.5,
    summary: 'Export manufacturing CBAM exposure mitigation and digital MRV systems for renewable IPPs.',
    stats: 'Regional trading hub • Digital MRV'
  },
  {
    id: 'ap-2',
    name: 'Indonesia Peatland & Ecosystem Restoration',
    country: 'Indonesia',
    region: 'Asia-Pacific',
    category: 'investment',
    type: 'Investment-ready projects',
    x: 77.5,
    y: 58.0,
    summary: 'Jurisdictional natural capital restoration and sovereign compliance carbon credit issuance.',
    stats: 'Investment-grade • 2.5M+ tCO2e potential'
  },
  {
    id: 'ap-3',
    name: 'Vietnam & Mekong Delta NBS',
    country: 'Vietnam',
    region: 'Asia-Pacific',
    category: 'carbon',
    type: 'Carbon Credits',
    x: 76.0,
    y: 47.0,
    summary: 'Sustainable rice cultivation methane abatement and voluntary carbon market validation.',
    stats: 'Article 6 bilateral • Verra Verified'
  },
  {
    id: 'ap-4',
    name: 'Australia Natural Capital Solutions',
    country: 'Australia',
    region: 'Oceania',
    category: 'investment',
    type: 'Investment-ready projects',
    x: 85.0,
    y: 72.0,
    summary: 'ACCU crediting method alignment, soil carbon measurement, and institutional land portfolios.',
    stats: 'ACCU scheme • Institutional capital'
  }
];

export default function GlobalAdvisoryMap() {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activePin, setActivePin] = useState(null);

  const filteredPins = selectedFilter === 'all' 
    ? PINS 
    : PINS.filter(p => p.category === selectedFilter);

  return (
    <section className="relative w-full bg-[#00221E] text-white overflow-hidden border-y border-[#0E3B33] select-none">
      
      {/* Top Header & Legend Controls (EcoSecurities Exact Style) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          
          {/* Title & Legend Dots */}
          <div className="space-y-3.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white font-sans">
              Our Global Activities
            </h2>

            {/* Filter Legend Pills / Dots */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-light">
              <button
                onClick={() => setSelectedFilter('carbon')}
                className={`inline-flex items-center gap-2 transition-opacity ${
                  selectedFilter === 'carbon' ? 'opacity-100 font-medium' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] shadow-[0_0_8px_rgba(229,169,60,0.8)]" />
                <span className="text-white/90">Carbon Credits</span>
              </button>

              <button
                onClick={() => setSelectedFilter('climate')}
                className={`inline-flex items-center gap-2 transition-opacity ${
                  selectedFilter === 'climate' ? 'opacity-100 font-medium' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="text-white/90">Climate projects</span>
              </button>

              <button
                onClick={() => setSelectedFilter('investment')}
                className={`inline-flex items-center gap-2 transition-opacity ${
                  selectedFilter === 'investment' ? 'opacity-100 font-medium' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] shadow-[0_0_8px_rgba(229,169,60,0.8)]" />
                <span className="text-white/90">Investment-ready projects</span>
              </button>

              {selectedFilter !== 'all' && (
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="text-xs text-[#E5A93C] underline hover:text-white transition-colors ml-1"
                >
                  Show all
                </button>
              )}
            </div>
          </div>

          {/* Right: Subtitle & "All projects" Button */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-end lg:items-center gap-3 md:gap-4">
            <span className="text-xs sm:text-sm text-white/70 font-light">
              Explore our projects around the world
            </span>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-white/25 hover:border-white text-xs sm:text-sm text-white/90 hover:text-white transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm"
            >
              <span>All projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Main Full-Width Map Stage (Height constrained: 380px mobile, 480px tablet, 520px desktop) */}
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden">
        
        {/* Ocean Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00221E] via-[#012520] to-[#001D19]" />

        {/* Faint Geographic Coordinate Lines (Equator, Tropics & Longitude grid) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
          preserveAspectRatio="none"
          viewBox="0 0 1000 500"
        >
          {/* Latitude Lines */}
          <line x1="0" y1="125" x2="1000" y2="125" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="375" x2="1000" y2="375" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          {/* Longitude Lines */}
          <line x1="200" y1="0" x2="200" y2="500" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="400" y1="0" x2="400" y2="500" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="600" y1="0" x2="600" y2="500" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="800" y1="0" x2="800" y2="500" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Actual Real Geographic Continents SVG Silhouette (Deep Teal Landmass) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World Landmass Multi-Polygon (Real Earth coordinates from Natural Earth 110m) */}
            <path
              d={worldData.combinedPath}
              fill="#264A47"
              stroke="#1E3E3B"
              strokeWidth="0.5"
              className="transition-colors duration-500"
            />
          </svg>
        </div>

        {/* Interactive Glowing Map Pins Container */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full max-w-[1400px] mx-auto">
            {filteredPins.map((pin) => {
              const isSelected = activePin?.id === pin.id;
              const isGold = pin.category === 'carbon' || pin.category === 'investment';

              return (
                <div
                  key={pin.id}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <button
                    onClick={() => setActivePin(isSelected ? null : pin)}
                    onMouseEnter={() => setActivePin(pin)}
                    aria-label={pin.name}
                    className="relative group p-2 focus:outline-none"
                  >
                    {/* Pulsing Aura */}
                    <span
                      className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                        isGold ? 'bg-[#E5A93C]' : 'bg-white'
                      }`}
                      style={{ animationDuration: '3s' }}
                    />

                    {/* Outer Glow Ring on Hover/Selected */}
                    <span
                      className={`absolute inset-1 rounded-full transition-transform duration-300 ${
                        isSelected ? 'scale-150 ring-2 ring-white/50' : 'group-hover:scale-125'
                      }`}
                    />

                    {/* Center Solid Dot */}
                    <span
                      className={`relative block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                        isGold
                          ? 'bg-[#E5A93C] shadow-[0_0_10px_#E5A93C]'
                          : 'bg-white shadow-[0_0_10px_#FFFFFF]'
                      } ${isSelected ? 'scale-125 ring-2 ring-white' : ''}`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Pin Detailed Tooltip / Card (Bottom-left or near pin) */}
        {activePin && (
          <div className="absolute z-30 bottom-5 left-4 sm:left-8 max-w-sm sm:max-w-md bg-[#001D19]/95 backdrop-blur-md border border-[#264A47] rounded-xl p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activePin.category === 'climate' ? '#FFFFFF' : '#E5A93C' }}
                  />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                    {activePin.type} • {activePin.region}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {activePin.name}
                </h4>
              </div>
              <button
                onClick={() => setActivePin(null)}
                className="text-white/50 hover:text-white p-1 rounded transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              {activePin.summary}
            </p>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="font-mono text-[#E5A93C] font-medium">
                {activePin.stats}
              </span>
              
            </div>
          </div>
        )}

      </div>

      {/* Subtle bottom fade to blend with page content */}
      <div className="h-4 bg-gradient-to-b from-[#001D19] to-transparent pointer-events-none" />
    </section>
  );
}
