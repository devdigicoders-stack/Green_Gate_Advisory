import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FileDown, 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Lock,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

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
  const { t } = useTranslation();
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
    <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <SectionHeader
          badge="Executive Research & Briefings"
          title="Downloadable Technical Manuals & Policy Primers"
          subtitle="Equipping corporate sustainability executives, legal counsel and policymakers with actionable compliance blueprints and climate finance templates."
        />

        {/* 4 Downloadable Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BRIEFINGS_DATA.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-white border border-sand-border p-7 flex flex-col justify-between space-y-5 hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold uppercase tracking-wider text-forest bg-sage px-2.5 py-0.5 rounded-full border border-forest/10">
                    {doc.badge}
                  </span>
                  <span className="text-charcoal-muted font-mono">{doc.pages}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {doc.title}
                </h3>

                {/* Edition */}
                <div className="text-xs font-semibold text-deep-green">
                  {doc.edition}
                </div>

                {/* Summary */}
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                  {doc.summary}
                </p>

                {/* Topics Covered */}
                <div className="pt-3 border-t border-sand-border/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted font-bold block">
                    Key Topics Covered:
                  </span>
                  {doc.topics.map((top, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-deep-green flex-shrink-0" />
                      <span className="truncate">{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-sand-border/80">
                <button
                  type="button"
                  onClick={() => handleOpenDownload(doc)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest text-white font-semibold text-xs hover:bg-forest-light active:bg-forest-dark transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-forest/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Briefing</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for simulated download capture */}
        {downloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/70 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl border border-sand-border p-7 sm:p-9 max-w-md w-full space-y-5 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setDownloadModal(null)}
                className="absolute top-5 right-5 text-charcoal-muted hover:text-forest text-lg font-bold"
              >
                ✕
              </button>

              <div className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest">
                <FileDown className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-deep-green font-bold bg-sage px-2 py-0.5 rounded">
                  {downloadModal.edition}
                </span>
                <h3 className="font-display font-bold text-xl text-forest">
                  {downloadModal.title}
                </h3>
              </div>

              {downloadSuccess ? (
                <div className="p-4 rounded-2xl bg-forest/5 border border-forest/15 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-deep-green mx-auto" />
                  <div className="font-bold text-sm text-forest">Briefing Dispatched!</div>
                  <p className="text-xs text-charcoal-muted">
                    Check your inbox or download initiation. Thank you for reading Green Gate Advisory technical research.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <p className="text-xs text-charcoal-muted font-sans font-light">
                    Enter your professional email to receive the direct PDF document and technical methodology updates.
                  </p>
                  <div>
                    <label className="text-[11px] font-semibold text-charcoal block mb-1">
                      Professional Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="executive@organization.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-border text-xs focus:outline-none focus:ring-2 focus:ring-forest/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-forest text-white font-semibold text-xs tracking-wider uppercase hover:bg-forest-light transition-all shadow-md"
                  >
                    Confirm & Download PDF
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-charcoal-muted">
                    <Lock className="w-3 h-3 text-deep-green" />
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
