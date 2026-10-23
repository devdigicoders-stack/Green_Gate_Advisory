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
    glow: 'from-gold/15 via-forest/5 to-transparent'
  },
  {
    id: 'energyTransition',
    title: 'Energy Transition & Power Utilities',
    eyebrow: 'Grid Decarbonisation & Renewables',
    icon: Zap,
    summary: 'Renewable IPP crediting, battery energy storage systems (BESS), green hydrogen facility emissions tracking.',
    deliverables: ['Grid Emission Factor (GEF) Baselines', 'Article 6 Bilateral Transfer Structuring', 'Corporate PPA Carbon Accounting'],
    glow: 'from-amber-400/10 via-forest/5 to-transparent'
  },
  {
    id: 'naturalCapital',
    title: 'Land Use, Forestry & Natural Capital',
    eyebrow: 'AFOLU, Jurisdictional & Blue Carbon',
    icon: Trees,
    summary: 'High-integrity afforestation/reforestation (ARR), soil carbon enhancement, and mangrove restoration PDD preparation.',
    deliverables: ['Methodology Feasibility & Baseline Screening', 'Dynamic Additionality & Permanence Review', 'Independent VVB Validation Support'],
    glow: 'from-emerald-600/10 via-forest/5 to-transparent'
  },
  {
    id: 'climateFinance',
    title: 'Financial Institutions & Climate Funds',
    eyebrow: 'Commercial Banks, Funds & Multilaterals',
    icon: Landmark,
    summary: 'Concessional finance structuring for Green Climate Fund (GCF) and multilateral facilities with fiduciary rigor.',
    deliverables: ['Bankable Concept Notes & Funding Proposals', 'Climate Risk & Taxonomy Alignment (EU SFDR)', 'Blended Finance Feasibility Studies'],
    glow: 'from-gold-dark/15 via-forest/5 to-transparent'
  },
  {
    id: 'wasteMethane',
    title: 'Waste Management & Circular Economy',
    eyebrow: 'Methane Abatement & Biogas',
    icon: Trash2,
    summary: 'Landfill gas capture, organic waste biomethanation, wastewater industrial treatment crediting protocols.',
    deliverables: ['Methane Abatement MRV Architectures', 'Industrial Biogas Flare Protocol Compliance', 'Circular Resource Decarbonisation Audits'],
    glow: 'from-teal-600/10 via-forest/5 to-transparent'
  },
  {
    id: 'transport',
    title: 'Transport, Logistics & Maritime',
    eyebrow: 'Fleet Decarbonisation & Freight Corridors',
    icon: Truck,
    summary: 'Commercial EV fleet transition accounting, maritime emissions compliance under FuelEU Maritime and ETS.',
    deliverables: ['Freight Scope 3 Supply Chain Inventories', 'Alternative Fuel Emission Factors', 'Maritime Route Carbon Compliance Modeling'],
    glow: 'from-blue-500/10 via-forest/5 to-transparent'
  }
];

export default function SectorMatrixGlow() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section id="sectors" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#F6F8F5] via-white to-[#F6F8F5] text-charcoal relative overflow-hidden border-b border-sand-border/60 scroll-mt-24">
      {/* Subtle ambient light glow (warm gold & crisp sage) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      {/* Technical dot pattern background for architectural consulting feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8D5C6_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge={t('navigation.sectors', 'Sectors We Support')}
          title="Tailored Advisory Built Around High-Emitting Real Economy Sectors"
          subtitle="Climate compliance and carbon pricing do not operate in a vacuum. We structure technical, economic and regulatory advice tailored to each sector's physical operations."
          light={false}
        />

        {/* 6-Card Clean Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {SECTORS_MATRIX.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="group relative rounded-3xl bg-white border border-sand-border/80 p-8 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 hover:border-forest/30 transition-all duration-300 hover:-translate-y-1.5 shadow-subtle hover:shadow-elevated overflow-hidden"
              >
                {/* Subtle Ambient Hover Shimmer */}
                <div className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${sec.glow} blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-0 group-hover:opacity-100`} />

                <div className="space-y-5 relative z-10">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-current" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-charcoal/80 font-bold border border-sand-border/80 px-3.5 py-1 rounded-full bg-sand-surface/60">
                      Technical Practice
                    </span>
                  </div>

                  {/* Eyebrow & Title */}
                  <div className="space-y-1.5">
                    <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-gold-dark font-bold block">
                      {sec.eyebrow}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                      {sec.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-base text-charcoal/85 leading-relaxed font-sans font-normal">
                    {sec.summary}
                  </p>

                  {/* Core Technical Deliverables */}
                  <div className="pt-3 border-t border-sand-border/70 space-y-2.5">
                    <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-charcoal-muted font-bold block">
                      Typical Consulting Deliverables:
                    </span>
                    {sec.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-sm text-charcoal/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-forest/80 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link to Sectors overview */}
                <div className="pt-4 border-t border-sand-border/70 relative z-10 flex items-center justify-between">
                  <Link
                    to={getLocalizedPath('/sectors')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-forest hover:text-deep-green group-hover:underline focus:outline-none transition-colors"
                  >
                    <span>Sector Advisory Scope</span>
                    <ArrowRight className="w-4 h-4 text-forest group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs font-mono text-charcoal-muted font-medium">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
