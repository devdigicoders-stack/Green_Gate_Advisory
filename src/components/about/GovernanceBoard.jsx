import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Landmark, 
  Trees, 
  Scale, 
  CheckCircle2, 
  FileCheck 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const GOVERNANCE_LEADS = [
  {
    name: 'Senior Carbon Market Strategist',
    role: 'Practice Lead — Article 6 & Emissions Trading',
    credentials: 'M.Sc. Environmental Economics | 18+ Yrs Climate Policy',
    specialization: 'UNFCCC negotiations, sovereign Article 6 bilateral mechanisms, cap-and-trade design for EU ETS & UK ETS.',
    focusArea: 'Sovereign & Article 6',
    standards: 'UNFCCC Art. 6.2/6.4, EU ETS Directive, ICROA Code',
    icon: Globe
  },
  {
    name: 'Lead MRV & GHG Verification Engineer',
    role: 'Technical Director — Industrial Decarbonisation & CBAM',
    credentials: 'Lead Auditor ISO 14064 | Ph.D. Chemical Engineering',
    specialization: 'Embedded emissions accounting for steel, cement, and aluminium under EU CBAM, physical baseline boundary modeling.',
    focusArea: 'Industrial CBAM & MRV',
    standards: 'ISO 14064-1/2/3, GHG Protocol, EU Reg. 2023/956',
    icon: ShieldCheck
  },
  {
    name: 'Senior Climate Finance Structuring Specialist',
    role: 'Principal Advisor — Concessional Capital & Fund Structuring',
    credentials: 'CFA | Ex-Multilateral Development Bank Climate Facility',
    specialization: 'Structuring bankable climate funding proposals for Green Climate Fund (GCF), blended debt facilities, and MACC analysis.',
    focusArea: 'Climate Finance & GCF',
    standards: 'GCF Investment Framework, Equator Principles, EU SFDR',
    icon: Landmark
  },
  {
    name: 'Natural Capital & Jurisdictional Forestry Lead',
    role: 'Practice Director — Nature-Based Solutions & AFOLU',
    credentials: 'M.Sc. Forestry Science & Remote Sensing LiDAR',
    specialization: 'High-integrity afforestation (ARR), mangrove restoration, dynamic baseline calculations, permanence safeguard buffers.',
    focusArea: 'Nature Solutions & AFOLU',
    standards: 'Verra VM0007 / JNR, ART TREES, Plan Vivo, CCB Standard',
    icon: Trees
  }
];

export default function GovernanceBoard() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge="Advisory Leadership & Governance"
            title="Multidisciplinary Technical & Fiduciary Stewardship"
            subtitle="Green Gate Advisory is steered by senior environmental economists, accredited GHG validation engineers, and international climate finance specialists."
          />
        </motion.div>

        {/* 4 Architectural Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {GOVERNANCE_LEADS.map((lead, idx) => {
            const Icon = lead.icon;
            const initialMotion = 
              idx === 0 ? { opacity: 0, x: -50 } :
              idx === 1 ? { opacity: 0, x: -20, y: 25 } :
              idx === 2 ? { opacity: 0, x: 20, y: 25 } :
              { opacity: 0, x: 50 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 sm:p-7 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_-8px_rgba(1,153,53,0.18),0_6px_16px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer overflow-hidden"
              >
                {/* Top Green Accent Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-4">
                  {/* Top Row: Practice Icon & Domain Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#019935] bg-[#E8F6ED] px-2.5 py-1 rounded-none border border-[#CDE8D5] shadow-2xs group-hover:bg-[#019935] group-hover:text-white transition-colors duration-300 font-bold">
                      {lead.focusArea}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#16221A] group-hover:text-[#019935] transition-colors duration-300 leading-snug">
                      {lead.role}
                    </h3>

                    {/* Credentials Highlight */}
                    <div className="text-[11px] sm:text-xs font-semibold text-[#017A2A] bg-[#F4FAF5] p-2 border-l-2 border-[#019935] rounded-none leading-relaxed">
                      {lead.credentials}
                    </div>
                  </div>

                  {/* Specialization Description */}
                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {lead.specialization}
                  </p>
                </div>

                {/* Governing Standards Traceability */}
                <div className="pt-3.5 border-t border-[#EEF4F0] space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#7D9084] font-semibold">
                    <FileCheck className="w-3.5 h-3.5 text-[#019935]" />
                    <span>Governing Standards</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#16221A] leading-relaxed font-medium">
                    {lead.standards}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Ethics Principle Card - Sharp Architectural Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="p-6 sm:p-8 rounded-none bg-white border border-[#DCE8E0] border-l-4 border-l-[#019935] text-[#16221A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.05)]"
        >
          <div className="space-y-2 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#019935]">
              <Scale className="w-4 h-4 text-[#019935]" />
              <span>Conflict of Interest & Fiduciary Pledge</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4E5E54] leading-relaxed font-sans font-normal">
              To preserve objectivity, Green Gate Advisory maintains strict separation from market brokerage, carbon credit trading desks, and speculative holding structures. Our counsel is solely driven by empirical science, rigorous verification, and statutory compliance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#019935] bg-[#E8F6ED] border border-[#CDE8D5] px-4 py-2.5 rounded-none whitespace-nowrap shadow-2xs self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#019935]" />
            <span>Independent Counsel</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
