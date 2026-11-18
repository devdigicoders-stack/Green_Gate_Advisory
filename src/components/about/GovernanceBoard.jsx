import { motion } from 'framer-motion';
import { ShieldCheck, Scale } from 'lucide-react';

const GOVERNANCE_LEADS = [
  {
    role: 'Article 6 & Emissions Trading Lead',
    credentials: 'M.Sc. Environmental Economics • 18+ Yrs Policy',
    specialization: 'UNFCCC negotiations, sovereign Article 6 mechanisms, and EU/UK ETS design.',
    focusArea: 'Sovereign & Article 6',
    image: '/images/photo-ets-pricing.jpg'
  },
  {
    role: 'Industrial Decarbonisation & CBAM Lead',
    credentials: 'ISO 14064 Lead Auditor • Ph.D. Chemical Eng.',
    specialization: 'Embedded emissions accounting for steel, cement, and aluminium under EU CBAM.',
    focusArea: 'Industrial CBAM & MRV',
    image: '/images/photo-cbam-industry.jpg'
  },
  {
    role: 'Climate Finance Structuring Principal',
    credentials: 'CFA • Ex-MDB Climate Facility Specialist',
    specialization: 'Bankable funding proposals for GCF, blended debt facilities, and green bonds.',
    focusArea: 'Climate Finance & GCF',
    image: '/images/photo-climate-finance.jpg'
  },
  {
    role: 'Natural Capital & Forestry Director',
    credentials: 'M.Sc. Forestry Science & Remote Sensing',
    specialization: 'High-integrity afforestation, blue carbon mangroves, and permanence safeguards.',
    focusArea: 'Nature Solutions',
    image: '/images/forestry.jpg'
  }
];

export default function GovernanceBoard() {
  return (
    <section className="relative w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24 overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            Advisory Leadership &amp; Governance
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            Multidisciplinary Technical Stewardship
          </h2>
        </motion.div>

        {/* 4 Photo-Topped Leadership Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOVERNANCE_LEADS.map((lead, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
              className="relative bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] overflow-hidden transition-colors duration-200 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E4F6EA]">
                <img
                  src={lead.image}
                  alt={lead.role}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10.5px] font-medium tracking-[0.1em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                  {lead.focusArea}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#1A5C3B] leading-snug">
                  {lead.role}
                </h3>
                <div className="text-[12px] font-medium text-[#0A7A32]">
                  {lead.credentials}
                </div>
                <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6]">
                  {lead.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concise Independent Counsel Bar */}
        <div className="p-6 sm:p-7 rounded-[4px] bg-white border border-[#e5e7eb] border-l-[4px] border-l-[#019934] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-3xl">
            <Scale className="w-5 h-5 text-[#019934] flex-shrink-0 mt-0.5" />
            <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.65]">
              <strong className="font-medium text-[#1A5C3B]">Independent Counsel:</strong> Strict separation from brokerage and carbon trading desks ensures objective, science-led advisory.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#1A5C3B] bg-[#57D182]/30 px-4 py-2 rounded-[3px] whitespace-nowrap self-start lg:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#019934]" />
            <span>Fiduciary Integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
