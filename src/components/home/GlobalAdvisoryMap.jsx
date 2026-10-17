import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2, MapPin, ArrowRight, CheckCircle2, Shield, Layers, Building } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ADVISORY_REGIONS = [
  {
    id: 'europe',
    name: 'Europe & UK',
    flag: '🇪🇺',
    role: 'Compliance & Cross-Border Tax Architecture',
    coordinates: { x: '51%', y: '33%' },
    focusWorkstreams: [
      'EU CBAM reporting & embedded emissions audits',
      'UK ETS & EU ETS compliance modeling',
      'Corporate Scope 1-3 SBTi roadmap verification'
    ],
    sectorsServed: 'Steel, Aluminium, Cement, Chemical Exporters, Institutional Banks',
    frameworks: 'EU Regulation 2023/956, GHG Protocol Corporate Standard, CSRD/ESRS'
  },
  {
    id: 'middleEast',
    name: 'Middle East & GCC',
    flag: '🇦🇪',
    role: 'Sovereign Climate Transition & National Registries',
    coordinates: { x: '58%', y: '44%' },
    focusWorkstreams: [
      'National carbon market framework architecture',
      'Article 6 bilateral pilot transaction advisory',
      'Clean hydrogen & industrial CCUS policy alignment'
    ],
    sectorsServed: 'Sovereign Wealth Funds, Energy Utilities, Heavy Industry',
    frameworks: 'Paris Agreement Art. 6.2, UNFCCC National Registry Protocols'
  },
  {
    id: 'asiaPacific',
    name: 'Asia-Pacific',
    flag: '🇸🇬',
    role: 'Industrial Decarbonisation & MRV Architecture',
    coordinates: { x: '75%', y: '54%' },
    focusWorkstreams: [
      'Export manufacturing CBAM exposure mitigation',
      'Digital MRV systems for renewable & thermal efficiency',
      'Domestic carbon tax & crediting scheme readiness'
    ],
    sectorsServed: 'Manufacturing Conglomerates, Renewable IPPs, Port Authorities',
    frameworks: 'ISO 14064-1/2, Verra VM0007, CDM Transition Guidelines'
  },
  {
    id: 'africa',
    name: 'Sub-Saharan Africa',
    flag: '🇰🇪',
    role: 'Nature-Based Solutions & Climate Finance Structuring',
    coordinates: { x: '56%', y: '60%' },
    focusWorkstreams: [
      'Bankable proposal design for Green Climate Fund (GCF)',
      'High-integrity ARR, Agroforestry & Mangrove MRV Protocols',
      'Sovereign Article 6 policy & benefit-sharing models'
    ],
    sectorsServed: 'National Climate Ministries, Multilateral Facilities, Land Developers',
    frameworks: 'GCF Investment Framework, Plan Vivo, CCB Standards'
  },
  {
    id: 'latinAmerica',
    name: 'Latin America',
    flag: '🇧🇷',
    role: 'Jurisdictional Natural Capital & Forest Carbon MRV',
    coordinates: { x: '32%', y: '68%' },
    focusWorkstreams: [
      'Sub-national jurisdictional REDD+ architecture',
      'Bioeconomy and regenerative agriculture crediting',
      'VVB validation readiness & safeguard assessments'
    ],
    sectorsServed: 'Forestry Developers, State Governments, Agro-industrial Exporters',
    frameworks: 'ART TREES Standard, Verra JNR, UNFCCC Cancun Safeguards'
  }
];

export default function GlobalAdvisoryMap() {
  const { t } = useTranslation();
  const [activeRegion, setActiveRegion] = useState(ADVISORY_REGIONS[0]);

  return (
    <section className="py-14 sm:py-20 bg-forest-dark text-white relative overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-deep-green/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Global Regulatory Reach"
          title="International Advisory Footprint & Jurisdictions"
          subtitle="Providing independent technical, regulatory and climate finance counsel across major international carbon and compliance jurisdictions."
          light={true}
        />

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Stylized World Vector Map & Region Badges */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/70">
                <Globe2 className="w-4 h-4 text-white" />
                <span>Active Advisory Corridors</span>
              </div>
              <span className="text-[11px] text-white/60">
                Select a jurisdiction to inspect workstreams
              </span>
            </div>

            {/* Stylized Vector World Map Container */}
            <div className="relative my-6 aspect-[16/9] w-full bg-forest-dark/80 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
              {/* World Map SVG Silhouette */}
              <svg 
                className="w-full h-full opacity-35" 
                viewBox="0 0 1000 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Continents stylized vectors */}
                {/* North America */}
                <path d="M150 80 Q 220 70 300 110 T 260 210 T 200 240 T 130 180 Z" fill="#287F63" />
                {/* South America */}
                <path d="M280 260 Q 350 280 340 380 T 290 470 T 250 350 Z" fill="#287F63" />
                {/* Europe */}
                <path d="M470 90 Q 560 80 580 150 T 490 200 T 450 140 Z" fill="#287F63" />
                {/* Africa */}
                <path d="M470 200 Q 580 200 570 340 T 520 440 T 440 280 Z" fill="#287F63" />
                {/* Asia */}
                <path d="M580 90 Q 820 70 850 220 T 720 300 T 580 190 Z" fill="#287F63" />
                {/* Oceania */}
                <path d="M780 340 Q 880 330 890 410 T 780 430 Z" fill="#287F63" />
              </svg>

              {/* Dynamic Region Interactive Pin Buttons */}
              {ADVISORY_REGIONS.map((region) => {
                const isSelected = activeRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region)}
                    style={{ left: region.coordinates.x, top: region.coordinates.y }}
                    aria-label={`Select ${region.name} advisory jurisdiction`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center gap-1.5 focus:outline-none`}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSelected ? 'bg-white/80 opacity-75' : 'bg-white/30 opacity-40'}`}></span>
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isSelected ? 'bg-white ring-4 ring-white/30' : 'bg-white/80 group-hover:bg-white'}`}></span>
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md border transition-all ${
                      isSelected 
                        ? 'bg-white text-forest-dark border-white shadow-md font-bold' 
                        : 'bg-forest-dark/85 text-white/90 border-white/20 hover:border-white'
                    }`}>
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Filter Pill Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ADVISORY_REGIONS.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeRegion.id === reg.id
                      ? 'bg-white text-forest-dark font-bold shadow-md'
                      : 'bg-white/10 text-white/85 hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <span className="mr-1.5">{reg.flag}</span>
                  <span>{reg.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Jurisdiction Scope Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-forest to-forest-dark rounded-3xl border border-white/15 p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-white border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>{activeRegion.flag} {activeRegion.name} Jurisdiction</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeRegion.role}
                </h3>
              </div>

              {/* Technical Workstreams */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-white/70 font-semibold block">
                  Core Advisory Workstreams:
                </span>
                <div className="space-y-2.5">
                  {activeRegion.focusWorkstreams.map((ws, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-sand-surface/90">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>{ws}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors Served */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/60 font-semibold flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Key Stakeholders & Sectors:</span>
                </span>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  {activeRegion.sectorsServed}
                </p>
              </div>

              {/* Compliance & Standards Benchmarks */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/60 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Benchmark Regulations & Frameworks:</span>
                </span>
                <p className="text-xs font-mono text-white/95">
                  {activeRegion.frameworks}
                </p>
              </div>
            </div>

            {/* Fiduciary Assurance Note */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/75 font-sans">
              <span>Jurisdictional Advisory Capacity</span>
              <span className="font-mono text-white">Zero Speculative Bias</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
