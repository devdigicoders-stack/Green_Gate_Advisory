import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Globe,
  Landmark,
  Trees,
  Scale,
  FileCheck
} from 'lucide-react';

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
  return (
    <section className="relative w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24 overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            Advisory Leadership &amp; Governance
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            Multidisciplinary Technical &amp; Fiduciary Stewardship
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#1A5C3B]/75 leading-[1.55] max-w-3xl">
            Green Gate Advisory is steered by senior environmental economists, accredited GHG validation engineers, and international climate finance specialists.
          </p>
        </motion.div>

        {/* 4 Flat White Institutional Leadership Cards (Exact GCC Block C Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOVERNANCE_LEADS.map((lead, idx) => {
            const Icon = lead.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                className="relative bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] p-6 sm:p-7 transition-colors duration-200 flex flex-col justify-between space-y-6 group"
              >
                {/* Top Signature Teal Accent Rule */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                <div className="space-y-4">
                  {/* Top Row: Mint Domain Tag + Thin Muted Line Icon */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-1 leading-tight">
                      {lead.focusArea}
                    </span>
                    <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] flex-shrink-0 transition-colors duration-200" />
                  </div>

                  {/* Role Title & Credentials */}
                  <div className="space-y-3">
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[17.5px] sm:text-[18.5px] text-[#1A5C3B] leading-snug">
                      {lead.role}
                    </h3>

                    <div className="text-[12.5px] font-normal text-[#0A7A32] bg-[#f7f7f7] px-3 py-2 border-l-[2px] border-[#019934] leading-relaxed">
                      {lead.credentials}
                    </div>
                  </div>

                  {/* Specialization Description */}
                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.68]">
                    {lead.specialization}
                  </p>
                </div>

                {/* Governing Standards Traceability */}
                <div className="pt-4 border-t border-[#efefef] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#019934]">
                    <FileCheck className="w-3.5 h-3.5 stroke-[1.75]" />
                    <span>Governing Standards</span>
                  </div>
                  <p className="text-[12px] font-normal text-[#1A5C3B] leading-relaxed">
                    {lead.standards}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Ethics Principle Card — GCC Block C Full-Width Document Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="p-7 sm:p-9 rounded-[4px] bg-white border border-[#e5e7eb] border-l-[4px] border-l-[#019934] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-2.5 max-w-3xl text-left">
            <div className="flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#019934]">
              <Scale className="w-4 h-4 stroke-[1.75]" />
              <span>Conflict of Interest &amp; Fiduciary Pledge</span>
            </div>
            <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.7]">
              To preserve objectivity, Green Gate Advisory maintains strict separation from market brokerage, carbon credit trading desks, and speculative holding structures. Our counsel is solely driven by empirical science, rigorous verification, and statutory compliance.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1A5C3B] bg-[#57D182]/35 px-5 py-2.5 rounded-[3px] whitespace-nowrap self-start lg:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#019934] stroke-[1.75]" />
            <span>Independent Counsel</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
