import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ENGAGEMENTS_DATA = [
  {
    id: 1,
    title: 'EU CBAM Embedded Emissions Audit & Declarant Modeling',
    clientCategory: 'Industrial Manufacturing Exporters',
    region: 'Asia-Pacific / Europe',
    sector: 'Heavy Industry',
    framework: 'EU Reg. 2023/956 & GHG Protocol',
    summary: 'Audited complex blast-furnace and secondary smelting operations to isolate actual precursor emissions, eliminating punitive default emission tax penalties.',
    deliverables: ['Accredited CBAM XML Declarations', 'Continuous Monitoring MRV Methodology', 'Supplier Scope 3 Traceability Protocol'],
    status: 'Completed Mandate',
    badge: 'Regulatory Compliance'
  },
  {
    id: 2,
    title: 'Article 6.2 Bilateral Pilot Transaction Architecture',
    clientCategory: 'Sovereign Ministry & Bilateral Partner',
    region: 'Africa / Middle East',
    sector: 'Government & Sovereign',
    framework: 'Paris Agreement Art. 6.2 / 6.4',
    summary: 'Designed sovereign authorization rules, corresponding adjustment accounting protocols, and ITMO benefit-sharing criteria for national NDC achievement.',
    deliverables: ['National Article 6 Decree Drafting', 'Registry Integration & CA Ledger Protocol', 'Host-Country Approval Criteria Matrix'],
    status: 'Operational Architecture',
    badge: 'Sovereign Advisory'
  },
  {
    id: 3,
    title: 'GCF Blended Concessional Climate Finance Proposal',
    clientCategory: 'Multilateral Agency & National Development Bank',
    region: 'Sub-Saharan Africa',
    sector: 'Climate Finance',
    framework: 'Green Climate Fund (GCF) Investment Criteria',
    summary: 'Structured a $65M blended climate debt facility targeting climate-resilient water infrastructure and smallholder agroforestry systems.',
    deliverables: ['Full GCF Funding Proposal (FP)', 'Economic & Financial IRR Modeling', 'Environmental & Social Safeguards (ESS) Plan'],
    status: 'Approved Portfolio',
    badge: 'Climate Finance'
  },
  {
    id: 4,
    title: 'Jurisdictional AFOLU & Mangrove Blue Carbon MRV Protocol',
    clientCategory: 'Natural Capital Developer & Provincial Authority',
    region: 'Latin America',
    sector: 'Nature-Based Solutions',
    framework: 'Verra VM0007 / Plan Vivo Standard',
    summary: 'Established remote-sensing LiDAR baseline models, permanence buffer pool requirements, and indigenous community benefit-sharing safeguards.',
    deliverables: ['PDD & Baseline Validation Dossier', 'LiDAR Carbon Stock Stratification Report', 'FPIC Community Agreement Protocol'],
    status: 'Validation Ready',
    badge: 'Project Validation'
  },
  {
    id: 5,
    title: 'Corporate Scope 1-3 GHG Accounting & SBTi Net-Zero Roadmap',
    clientCategory: 'Multinational Retail & Logistics Conglomerate',
    region: 'Europe & UK',
    sector: 'Corporate Climate & ESG',
    framework: 'SBTi Corporate Net-Zero Standard v2.0',
    summary: 'Calculated comprehensive 15-category Scope 3 value chain emissions and engineered 1.5°C science-based decarbonisation trajectory with CapEx modeling.',
    deliverables: ['GHG Inventory Verification Report', 'SBTi Near & Long-Term Submission Dossier', 'Supplier Engagement Decarbonisation Toolkit'],
    status: 'Submitted & Target Validated',
    badge: 'Decarbonisation'
  },
  {
    id: 6,
    title: 'Cap-and-Trade ETS Compliance & Allowance Optimization Modeling',
    clientCategory: 'Power Utility & Chemical Production Group',
    region: 'Europe / UK',
    sector: 'Energy & ETS Markets',
    framework: 'EU ETS Directive & UK ETS Registry',
    summary: 'Conducted compliance liability forecasting, free allowance benchmark simulations, and carbon cost pass-through optimization under tightened benchmarks.',
    deliverables: ['ETS Compliance Strategy Memo', 'Forward Allowance Liability Exposure Matrix', 'Fuel Switching Marginal Abatement Cost Curve (MACC)'],
    status: 'Active Advisory Mandate',
    badge: 'Compliance Markets'
  }
];

export default function AdvisoryEngagements() {
  const { t } = useTranslation();
  const [selectedSector, setSelectedSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const sectorsList = ['All', 'Heavy Industry', 'Government & Sovereign', 'Climate Finance', 'Nature-Based Solutions', 'Corporate Climate & ESG', 'Energy & ETS Markets'];

  const filteredEngagements = useMemo(() => {
    return ENGAGEMENTS_DATA.filter((item) => {
      const matchSector = selectedSector === 'All' || item.sector === selectedSector;
      const matchSearch = searchQuery.trim() === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.framework.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSector && matchSearch;
    });
  }, [selectedSector, searchQuery]);

  return (
    <section id="advisory-engagements" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-sand-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <SectionHeader
          badge="Practical Advisory Engagements"
          title="Demonstrated Technical Track Record & Case Scenarios"
          subtitle="Explore representative consulting mandates delivered across emissions trading, sovereign Article 6 architecture, climate finance, and CBAM compliance."
        />

        {/* Filters & Search Control Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#FAF9F5] border border-sand-border/80 shadow-subtle">
          
          {/* Sector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none no-scrollbar">
            <Filter className="w-4 h-4 text-forest-dark ml-2 mr-1 flex-shrink-0 hidden sm:block" />
            {sectorsList.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSector === sec
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-charcoal bg-white border border-sand-border hover:bg-sage hover:text-forest'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted" />
            <input
              type="text"
              placeholder="Search engagement, standard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white border border-sand-border focus:outline-none focus:ring-2 focus:ring-forest/30"
            />
          </div>
        </div>

        {/* Engagements Grid - Clean, Spacious, Less clutter (Max 3 prominent cases displayed, can filter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEngagements.slice(0, 3).map((eng) => (
            <div
              key={eng.id}
              className="rounded-2xl bg-white border border-sand-border p-7 sm:p-8 shadow-sm hover:border-[#019935]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold uppercase tracking-wider text-[#019935] bg-neutral-100 px-3 py-1 rounded-full text-[11px]">
                    {eng.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-medium text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#019935]" />
                    <span>{eng.region}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 leading-snug">
                  {eng.title}
                </h3>

                {/* Framework & Context */}
                <p className="text-xs font-mono text-neutral-500">
                  {eng.framework}
                </p>

                {/* Summary */}
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {eng.summary}
                </p>
              </div>

              {/* Status Bar */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-[#019935] font-semibold text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#019935]"></span>
                  {eng.status}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {eng.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Independence Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-white border border-sand-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-forest">
                Independent Advisory Guarantee
              </h4>
              <p className="text-xs text-charcoal-muted font-sans font-light">
                Green Gate Advisory acts strictly as a technical and regulatory consulting practice. All deliverables are audited to international standards with zero proprietary market positions.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-deep-green bg-sage px-3 py-1.5 rounded-xl border border-forest/10 whitespace-nowrap">
            ISO 14064 & GHG Protocol Aligned
          </span>
        </div>

      </div>
    </section>
  );
}
