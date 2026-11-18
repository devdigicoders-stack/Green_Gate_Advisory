import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Download, CheckCircle2, Lock } from 'lucide-react';

const BRIEFINGS_DATA = [
  {
    id: 1,
    title: 'EU CBAM Compliance Manual & Embedded Emissions Primer',
    edition: '2026 Statutory Guide',
    pages: '28 Pages PDF',
    summary: 'Technical methodology manual for steel, cement, and aluminium exporters calculating embedded emissions.',
    image: '/images/photo-cbam-industry.jpg',
    badge: 'Executive Manual'
  },
  {
    id: 2,
    title: 'Article 6 Host-Country Readiness & Authorization Playbook',
    edition: 'UNFCCC Guidance Series',
    pages: '24 Pages PDF',
    summary: 'Strategic analysis for ministries structuring Article 6.2 bilateral agreements and Article 6.4 rules.',
    image: '/images/photo-ets-pricing.jpg',
    badge: 'Policy Playbook'
  },
  {
    id: 3,
    title: 'GCF & Multilateral Climate Funding Proposal Architecture',
    edition: 'Capital Mobilisation Primer',
    pages: '32 Pages PDF',
    summary: 'Practical blueprint for preparing bankable concept notes and full Green Climate Fund proposals.',
    image: '/images/photo-climate-finance.jpg',
    badge: 'Financial Framework'
  },
  {
    id: 4,
    title: 'Corporate Scope 3 Decarbonisation & SBTi v2.0 Briefing',
    edition: 'Corporate Net-Zero Standard',
    pages: '20 Pages PDF',
    summary: 'Quantifying upstream supplier emissions, science-based targets, and CSRD/CDP alignment.',
    image: '/images/photo-corporate-esg.jpg',
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
      setDownloadModal(null);
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#1A5C3B] text-white font-['Poppins',sans-serif] overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            Executive Research &amp; Briefings
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-white leading-[1.16]">
            Downloadable Technical Manuals &amp; Primers
          </h2>
        </motion.div>

        {/* 4 Photo-Topped Research Briefing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRIEFINGS_DATA.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
              className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] rounded-[4px] overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#144A2F]">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[10.5px] font-medium uppercase tracking-[0.12em] bg-[#1A5C3B]/90 text-[#57D182] px-2.5 py-0.5">
                    {doc.badge}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between text-[11.5px] text-[#57D182]">
                    <span>{doc.edition}</span>
                    <span className="text-white/60">{doc.pages}</span>
                  </div>
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[17px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-[13px] text-white/80 leading-[1.6] font-light line-clamp-2">
                    {doc.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={() => handleOpenDownload(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-normal text-[13.5px] transition-colors duration-200 focus:outline-none"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Briefing</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Modal */}
        {downloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A5C3B]/75 backdrop-blur-sm text-[#3C3C3C]">
            <div className="bg-white rounded-[4px] border border-[#e5e7eb] p-7 sm:p-9 max-w-md w-full space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />
              <button
                type="button"
                onClick={() => setDownloadModal(null)}
                className="absolute top-5 right-5 text-[#019934] hover:text-[#1A5C3B] text-lg font-medium"
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
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] text-[#1A5C3B] leading-snug">
                  {downloadModal.title}
                </h3>
              </div>

              {downloadSuccess ? (
                <div className="p-5 rounded-[4px] bg-[#57D182]/12 border border-[#019934]/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#019934] mx-auto stroke-[1.7]" />
                  <div className="font-semibold text-[15px] text-[#1A5C3B]">Briefing Dispatched!</div>
                  <p className="text-[13px] text-[#555555] font-light">
                    Check your inbox for the PDF document.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B] block">
                      Work Email:
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
                    className="w-full py-3 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-normal text-[14px] transition-colors duration-200"
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
