import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Factory, 
  Zap, 
  Trees, 
  Landmark, 
  Trash2, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const SECTORS_MATRIX = [
  {
    id: 'heavyIndustry',
    title: 'Heavy Industry & CBAM Sectors',
    eyebrow: 'Iron, Steel, Aluminium & Cement',
    icon: Factory,
    summary: 'Direct embedded emissions accounting, blast furnace & arc furnace MRV, EU CBAM quarterly declaration validation.',
    deliverables: ['CBAM Embedded Emissions Audits', 'Scope 1-2 Direct Benchmark Modeling', 'Decarbonisation CapEx Evaluation'],
    glow: 'from-emerald-500/15 via-teal-500/5 to-transparent'
  },
  {
    id: 'energyTransition',
    title: 'Energy Transition & Power Utilities',
    eyebrow: 'Grid Decarbonisation & Renewables',
    icon: Zap,
    summary: 'Renewable IPP crediting, battery energy storage systems (BESS), green hydrogen facility emissions tracking.',
    deliverables: ['Grid Emission Factor (GEF) Baselines', 'Article 6 Bilateral Transfer Structuring', 'Corporate PPA Carbon Accounting'],
    glow: 'from-teal-500/15 via-emerald-500/5 to-transparent'
  },
  {
    id: 'naturalCapital',
    title: 'Land Use, Forestry & Natural Capital',
    eyebrow: 'AFOLU, Jurisdictional & Blue Carbon',
    icon: Trees,
    summary: 'High-integrity afforestation/reforestation (ARR), soil carbon enhancement, and mangrove restoration PDD preparation.',
    deliverables: ['Methodology Feasibility & Baseline Screening', 'Dynamic Additionality & Permanence Review', 'Independent VVB Validation Support'],
    glow: 'from-emerald-600/15 via-forest/10 to-transparent'
  },
  {
    id: 'climateFinance',
    title: 'Financial Institutions & Climate Funds',
    eyebrow: 'Commercial Banks, Funds & Multilaterals',
    icon: Landmark,
    summary: 'Concessional finance structuring for Green Climate Fund (GCF) and multilateral facilities with fiduciary rigor.',
    deliverables: ['Bankable Concept Notes & Funding Proposals', 'Climate Risk & Taxonomy Alignment (EU SFDR)', 'Blended Finance Feasibility Studies'],
    glow: 'from-teal-600/15 via-forest/10 to-transparent'
  },
  {
    id: 'wasteMethane',
    title: 'Waste Management & Circular Economy',
    eyebrow: 'Methane Abatement & Biogas',
    icon: Trash2,
    summary: 'Landfill gas capture, organic waste biomethanation, wastewater industrial treatment crediting protocols.',
    deliverables: ['Methane Abatement MRV Architectures', 'Industrial Biogas Flare Protocol Compliance', 'Circular Resource Decarbonisation Audits'],
    glow: 'from-emerald-500/15 via-forest/10 to-transparent'
  },
  {
    id: 'transport',
    title: 'Transport, Logistics & Maritime',
    eyebrow: 'Fleet Decarbonisation & Freight Corridors',
    icon: Truck,
    summary: 'Commercial EV fleet transition accounting, maritime emissions compliance under FuelEU Maritime and ETS.',
    deliverables: ['Freight Scope 3 Supply Chain Inventories', 'Alternative Fuel Emission Factors', 'Maritime Route Carbon Compliance Modeling'],
    glow: 'from-teal-500/15 via-emerald-500/5 to-transparent'
  }
];

export default function SectorMatrixGlow() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-forest text-white relative overflow-hidden">
      {/* Background radial glow ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-deep-green/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Sectoral Advisory Matrix"
          title="Tailored Advisory Built Around High-Emitting Real Economy Sectors"
          subtitle="Climate compliance and carbon pricing do not operate in a vacuum. We structure technical, economic and regulatory advice tailored to each sector's physical operations."
          light={true}
        />

        {/* 6-Card High-Contrast Ambient Glow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SECTORS_MATRIX.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="group relative rounded-3xl bg-forest-dark/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 shadow-elevated overflow-hidden backdrop-blur-md"
              >
                {/* Dynamic Ambient Hover Gradient */}
                <div className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${sec.glow} blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-forest-dark transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-current" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sand-surface/70 font-semibold border border-white/10 px-2.5 py-1 rounded-full bg-white/5">
                      Technical Practice
                    </span>
                  </div>

                  {/* Eyebrow & Title */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-sand-surface/80 font-bold block">
                      {sec.eyebrow}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-sand-surface transition-colors">
                      {sec.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-sand-surface/85 leading-relaxed font-sans font-light">
                    {sec.summary}
                  </p>

                  {/* Core Technical Deliverables */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sand-surface/60 font-semibold block">
                      Typical Consulting Deliverables:
                    </span>
                    {sec.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-sand-surface/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sand-surface/70 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link to Sectors overview */}
                <div className="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <Link
                    to={getLocalizedPath('/sectors')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline focus:outline-none"
                  >
                    <span>Sector Advisory Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-sand-surface/50">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Notice */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-sand-surface">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Fiduciary Scoping Guarantee</span>
          </div>
          <p className="text-xs text-sand-surface/80 leading-relaxed font-sans font-light">
            All advisory engagements are delivered with direct methodology traceability to accredited standards (GHG Protocol, ISO 14064, UNFCCC, EU CBAM Regulation) without speculative bias.
          </p>
        </div>

      </div>
    </section>
  );
}
