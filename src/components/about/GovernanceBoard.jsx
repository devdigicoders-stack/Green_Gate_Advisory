import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, GraduationCap, Scale, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const GOVERNANCE_LEADS = [
  {
    name: 'Senior Carbon Market Strategist',
    role: 'Practice Lead — Article 6 & Emissions Trading',
    credentials: 'M.Sc. Environmental Economics | 18+ Years International Climate Policy',
    specialization: 'UNFCCC negotiations, sovereign Article 6 bilateral mechanisms, cap-and-trade design for EU ETS & UK ETS.',
    focusArea: 'Sovereign & Multilateral Advisory',
    standards: 'UNFCCC Art. 6.2/6.4, EU ETS Directive, ICROA Code of Practice'
  },
  {
    name: 'Lead MRV & Greenhouse Gas Verification Engineer',
    role: 'Technical Director — Industrial Decarbonisation & CBAM',
    credentials: 'Lead Auditor ISO 14064 | Ph.D. Chemical Engineering',
    specialization: 'Embedded emissions accounting for steel, cement, and aluminium under EU CBAM, physical baseline boundary modeling.',
    focusArea: 'Heavy Industry & CBAM Compliance',
    standards: 'ISO 14064-1/2/3, GHG Protocol Corporate Standard, EU Reg. 2023/956'
  },
  {
    name: 'Senior Climate Finance Structuring Specialist',
    role: 'Principal Advisor — Concessional Capital & Fund Structuring',
    credentials: 'CFA | Ex-Multilateral Development Bank Climate Facility',
    specialization: 'Structuring bankable climate funding proposals for Green Climate Fund (GCF), blended debt facilities, and MACC analysis.',
    focusArea: 'Climate Finance & Bankable Proposals',
    standards: 'GCF Investment Framework, Equator Principles, EU SFDR Taxonomy'
  },
  {
    name: 'Natural Capital & Jurisdictional Forestry Lead',
    role: 'Practice Director — Nature-Based Solutions & AFOLU',
    credentials: 'M.Sc. Forestry Science & Remote Sensing LiDAR',
    specialization: 'High-integrity afforestation (ARR), mangrove restoration, dynamic baseline calculations, permanence safeguard buffers.',
    focusArea: 'Nature-Based Solutions & Biodiversity',
    standards: 'Verra VM0007 / JNR, ART TREES, Plan Vivo, CCB Standard'
  }
];

export default function GovernanceBoard() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <SectionHeader
          badge="Advisory Leadership & Governance"
          title="Multidisciplinary Technical & Fiduciary Stewardship"
          subtitle="Green Gate Advisory is steered by senior environmental economists, accredited GHG validation engineers, and international climate finance specialists."
        />

        {/* 4-Column Professional Stewardship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GOVERNANCE_LEADS.map((lead, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-sage/40 border border-sand-border p-7 flex flex-col justify-between space-y-6 hover:bg-white hover:border-deep-green/30 hover:shadow-premium transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Icon & Focus Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest">
                    <Award className="w-5 h-5 text-current" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-deep-green font-bold bg-white px-3 py-1 rounded-full border border-sand-border shadow-xs">
                    {lead.focusArea}
                  </span>
                </div>

                {/* Role & Name */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest leading-snug">
                    {lead.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-deep-green">
                    {lead.credentials}
                  </div>
                </div>

                {/* Scope Description */}
                <p className="text-sm sm:text-[15px] text-charcoal/85 leading-relaxed font-sans font-normal">
                  {lead.specialization}
                </p>
              </div>

              {/* Standards Traceability */}
              <div className="pt-4 border-t border-sand-border/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-charcoal-muted font-bold block">
                  Governing Protocols:
                </span>
                <p className="text-xs sm:text-[13px] font-mono text-charcoal leading-relaxed font-medium">
                  {lead.standards}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Ethics Principle Card */}
        <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-r from-forest to-forest-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-sand-surface">
              <Scale className="w-4.5 h-4.5 text-white" />
              <span>Conflict of Interest & Fiduciary Pledge</span>
            </div>
            <p className="text-sm sm:text-base text-sand-surface/95 leading-relaxed font-sans font-normal">
              To preserve objectivity, Green Gate Advisory maintains strict separation from market brokerage, carbon credit trading desks, and speculative holding structures. Our counsel is solely driven by empirical science, rigorous verification, and statutory compliance.
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-mono font-bold text-forest-dark bg-white px-5 py-2.5 rounded-xl whitespace-nowrap shadow-md">
            <ShieldCheck className="w-4.5 h-4.5 text-forest" />
            <span>Independent Counsel</span>
          </div>
        </div>

      </div>
    </section>
  );
}
