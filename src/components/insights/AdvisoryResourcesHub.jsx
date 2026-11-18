import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Download,
  CheckCircle2,
  Lock
} from 'lucide-react';

const BRIEFINGS_DATA = [
  {
    id: 1,
    title: 'EU CBAM Compliance Manual & Embedded Emissions Primer',
    edition: '2026 Statutory Guide',
    pages: '28 Pages PDF',
    category: 'Regulatory Briefing',
    summary: 'A step-by-step technical methodology manual for iron, steel, cement and aluminium exporters navigating direct and indirect embedded emission calculations.',
    topics: ['Precursor Boundary Setting', 'Default vs Actual Specific Emissions', 'Competent Authority Audit Preparedness'],
    downloadUrl: '#',
    badge: 'Executive Manual'
  },
  {
    id: 2,
    title: 'Article 6 Host-Country Readiness & Authorization Playbook',
    edition: 'UNFCCC Guidance Series',
    pages: '24 Pages PDF',
    category: 'Policy Briefing',
    summary: 'Strategic analysis for sovereign ministries evaluating Article 6.2 bilateral agreements versus Article 6.4 crediting mechanism authorization rules.',
    topics: ['Corresponding Adjustments (CA) Accounting', 'ITMO Benefit-Sharing Frameworks', 'National Registry Interoperability'],
    downloadUrl: '#',
    badge: 'Policy Playbook'
  },
  {
    id: 3,
    title: 'GCF & Multilateral Climate Funding Proposal Architecture',
    edition: 'Capital Mobilisation Primer',
    pages: '32 Pages PDF',
    category: 'Finance Guidance',
    summary: 'Practical guidance for project sponsors, accredited entities and ministries preparing bankable concept notes and full funding proposals (FP).',
    topics: ['Climate Rationale & Theory of Change', 'Concessional Debt & Grant Structuring', 'Environmental & Social Safeguards (ESS)'],
    downloadUrl: '#',
    badge: 'Financial Framework'
  },
  {
    id: 4,
    title: 'Corporate Scope 3 Decarbonisation & SBTi v2.0 Briefing',
    edition: 'Corporate Net-Zero Standard',
    pages: '20 Pages PDF',
    category: 'Corporate Strategy',
    summary: 'Technical guidance on quantifying upstream supplier emissions, setting validated 1.5°C science-based targets, and avoiding greenwashing scrutiny.',
    topics: ['15-Category Scope 3 GHG Accounting', 'Marginal Abatement Cost Curves (MACC)', 'CDP & CSRD Disclosure Alignment'],
    downloadUrl: '#',
    badge: 'Technical Paper'
  }
];

export default function AdvisoryResourcesHub() {
  const [downloadModal, setDownloadModal] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleOpenDownload = (doc) => {
    setDownloadModal(doc);
    setDownloadSuccess(false);
    setEmailInput('');
  };

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      // Simulate direct download
      setDownloadModal(null);
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#1A5C3B] text-white font-['Poppins',sans-serif] overflow-hidden">
      {/* Subtle Concentric Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="220"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Dark-Navy Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            Executive Research &amp; Briefings
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-white leading-[1.16] tracking-[-0.01em]">
            Downloadable Technical Manuals &amp; Policy Primers
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
            Equipping corporate sustainability executives, legal counsel and policymakers with actionable compliance blueprints and climate finance templates.
          </p>
        </motion.div>

        {/* 4 Downloadable Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRIEFINGS_DATA.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
              className="relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#019934] rounded-none p-7 flex flex-col justify-between space-y-6 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="font-medium uppercase tracking-[0.12em] text-[#57D182] bg-[#019934]/20 px-2.5 py-0.5">
                    {doc.badge}
                  </span>
                  <span className="text-white/60 font-light">{doc.pages}</span>
                </div>

                {/* Title */}
                <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                  {doc.title}
                </h3>

                {/* Edition */}
                <div className="text-[12.5px] font-medium text-[#57D182]">
                  {doc.edition}
                </div>

                {/* Summary */}
                <p className="text-[13.5px] text-white/75 leading-[1.68] font-light">
                  {doc.summary}
                </p>

                {/* Topics Covered — GCC Teal Horizontal Dash List */}
                <div className="pt-4 border-t border-white/12 space-y-2">
                  <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#57D182] font-medium block">
                    Key Topics Covered:
                  </span>
                  {doc.topics.map((top, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-[12.5px] text-white/85 font-light">
                      <span className="inline-block w-3 h-[1.5px] bg-[#019934] flex-shrink-0 mt-[9px]" aria-hidden="true" />
                      <span>{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/12">
                <button
                  type="button"
                  onClick={() => handleOpenDownload(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[13.5px] transition-colors duration-200 focus:outline-none"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Briefing</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for simulated download capture — GCC Clean White Architectural Modal */}
        {downloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A5C3B]/75 backdrop-blur-sm text-[#3C3C3C]">
            <div className="bg-white rounded-[4px] border border-[#e5e7eb] p-7 sm:p-9 max-w-md w-full space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

              <button
                type="button"
                onClick={() => setDownloadModal(null)}
                className="absolute top-5 right-5 text-[#019934] hover:text-[#1A5C3B] text-lg font-medium transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="w-11 h-11 rounded-[5px] bg-[#57D182]/20 text-[#019934] flex items-center justify-center">
                <FileDown className="w-5 h-5 stroke-[1.7]" />
              </div>

              <div className="space-y-1.5">
                <span className="inline-block text-[11px] uppercase tracking-[0.14em] text-[#0A7A32] font-medium bg-[#57D182]/25 px-2.5 py-0.5">
                  {downloadModal.edition}
                </span>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#1A5C3B] leading-snug">
                  {downloadModal.title}
                </h3>
              </div>

              {downloadSuccess ? (
                <div className="p-5 rounded-[4px] bg-[#57D182]/12 border border-[#019934]/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#019934] mx-auto stroke-[1.7]" />
                  <div className="font-semibold text-[15px] text-[#1A5C3B]">Briefing Dispatched!</div>
                  <p className="text-[13px] text-[#555555] font-light leading-relaxed">
                    Check your inbox or download initiation. Thank you for reading Green Gate Advisory technical research.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <p className="text-[13.5px] text-[#555555] font-light leading-relaxed">
                    Enter your professional email to receive the direct PDF document and technical methodology updates.
                  </p>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B] block">
                      Professional Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="executive@organization.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-[4px] border border-[#d9dfe5] focus:border-[#019934] text-[13.5px] text-[#3C3C3C] focus:outline-none focus:ring-1 focus:ring-[#019934]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[14px] transition-colors duration-200"
                  >
                    Confirm &amp; Download PDF
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#7f7f7f] font-light">
                    <Lock className="w-3.5 h-3.5 text-[#019934]" />
                    <span>Strict Confidentiality • No Spam</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
