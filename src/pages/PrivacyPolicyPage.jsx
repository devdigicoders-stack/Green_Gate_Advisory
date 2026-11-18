import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, FileText, ChevronDown } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import HomeCTA from '../components/home/HomeCTA';
import { useLocale } from '../hooks/useLocale';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const { locale, getLocalizedPath } = useLocale();

  const rawSections = t('privacy.sections', { returnObjects: true }) || [];
  const sections = Array.isArray(rawSections) ? rawSections : [];

  // Default first clause open so users immediately see the expanded GCC layout + clean accordion stack
  const [openIndices, setOpenIndices] = useState(() => new Set([0]));

  const toggleSection = (idx) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('meta.privacy.title', 'Privacy Policy | Green Gate Advisory'),
    "description": t('meta.privacy.description', 'Understand how Green Gate Advisory handles data collection, contact requests, and regulatory privacy compliance.'),
    "url": `https://greengateadvisory.com/${locale}/privacy-policy`,
    "publisher": {
      "@type": "Organization",
      "name": "Green Gate Advisory",
      "url": "https://greengateadvisory.com"
    }
  };

  const KEY_COMMITMENTS = [
    'Strict commercial confidentiality on all client proposals',
    'Zero sale, rental, or trade of personal or corporate data',
    'Enterprise-grade encryption on advisory records',
    'Immediate data deletion upon verified written request',
    'Full transparency under international data protection laws'
  ];

  return (
    <>
      <MetaTags
        title={t('meta.privacy.title', 'Privacy Policy | Green Gate Advisory')}
        description={t('meta.privacy.description', 'Understand how Green Gate Advisory handles data collection, contact requests, and regulatory privacy compliance.')}
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen font-['Poppins',sans-serif]">
        {/* 1. HERO SECTION — Exact GCC Inner-Page .content-header Banner */}
        <section className="relative w-full min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white text-center select-none">
          {/* Preserved Background Photography */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/about-landscape.jpg"
              alt="Data governance, integrity, and regulatory privacy frameworks at Green Gate Advisory"
              className="w-full h-full object-cover object-center opacity-80 scale-105"
              loading="eager"
            />
            {/* Clean GCC Vignette Overlay */}
            <div className="absolute inset-0 bg-[#1A5C3B]/50 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60 pointer-events-none" />
          </div>

          {/* Signature GCC Bottom-Left Concentric Thin White Rings Watermark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 480 480"
            fill="none"
            className="pointer-events-none absolute -left-24 -bottom-28 w-[280px] sm:w-[360px] lg:w-[440px] h-auto z-[1] opacity-30"
          >
            {Array.from({ length: 16 }).map((_, idx) => (
              <circle
                key={idx}
                cx="170"
                cy="310"
                r={45 + idx * 17}
                stroke="#ffffff"
                strokeWidth="1.15"
                strokeOpacity={Math.max(0.18, 0.55 - idx * 0.02)}
              />
            ))}
          </svg>

          <div className="h-6 sm:h-8" aria-hidden="true" />

          {/* Center Content — Exact GCC Short White Bar + Medium White Poppins Title */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 w-[90%] max-w-4xl mx-auto py-8 sm:py-10 flex flex-col items-center justify-center"
          >
            <span className="inline-block w-[64px] h-[3px] bg-white mb-5" aria-hidden="true" />

            <span className="text-[11.5px] sm:text-[12.5px] font-normal tracking-[0.2em] uppercase text-[#57D182] mb-2">
              {t('privacy.badge', 'Data Governance & Confidentiality')}
            </span>

            <h1 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[44px] text-white tracking-[-0.01em] leading-[1.2] max-w-3xl mx-auto">
              {t('privacy.title', 'Privacy Policy & Data Handling')}
            </h1>

            <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 max-w-2xl mx-auto leading-relaxed font-['Poppins',sans-serif] font-light">
              {t('privacy.lead', 'Green Gate Advisory is committed to handling professional enquiries with confidentiality, transparency, and compliance with applicable data protection legislation.')}
            </p>

            {/* Quick Metadata Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-5 text-[12px] text-white/85 font-light">
              <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/20">Effective: January 2026</span>
              <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/20">Scope: Global Advisory Practice</span>
              <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/20">Governance: GDPR &amp; Applicable Laws</span>
            </div>
          </motion.div>

          {/* Bottom Centered GCC Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="relative z-10 pb-5 sm:pb-6 flex items-center justify-center gap-2 text-[13px] font-['Poppins',sans-serif] font-normal"
          >
            <Link
              to={getLocalizedPath('/')}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              {t('navigation.home', 'Home')}
            </Link>
            <span className="text-white/75" aria-hidden="true">&rarr;</span>
            <span className="text-white">
              {t('privacy.title', 'Privacy Policy & Data Handling')}
            </span>
          </nav>
        </section>

        {/* 2. MAIN POLICY CONTENT GRID — Pure White GCC Document Canvas */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#e5e7eb]">
          <div className="w-[90%] max-w-[1680px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left Column: Exact GCC Privacy Policy Heading + Flat Collapsible Accordion Stack */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-3 pb-2">
                  <h2 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[36px] lg:text-[40px] text-[#019934] leading-[1.18] tracking-[-0.01em]">
                    {t('privacy.title', 'Privacy Policy & Data Handling')}
                  </h2>
                  <p className="font-['Poppins',sans-serif] font-light text-[15px] text-[#3C3C3C] leading-[1.65]">
                    {t('privacy.lead', 'Green Gate Advisory is committed to handling professional enquiries with confidentiality, transparency, and compliance with applicable data protection legislation.')}
                  </p>
                </div>

                {/* GCC Flat Light-Grey (#f7f7f7) Collapsible Accordion Panels */}
                <div className="space-y-2.5">
                  {sections.map((sec, idx) => {
                    const isOpen = openIndices.has(idx);
                    const clauseNum = String(idx + 1).padStart(2, '0');

                    return (
                      <div key={idx} className="w-full">
                        <button
                          type="button"
                          onClick={() => toggleSection(idx)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-[#f7f7f7] hover:bg-[#EFF5F1] rounded-[3px] text-left transition-colors duration-200 focus:outline-none group"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <ChevronDown
                              className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-[#019934]' : 'text-[#555555] group-hover:text-[#1A5C3B]'
                              }`}
                            />
                            <span
                              className={`font-['Poppins',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[1.45] transition-colors duration-200 ${
                                isOpen ? 'text-[#019934]' : 'text-[#1A5C3B]'
                              }`}
                            >
                              {sec.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2.5 flex-shrink-0">
                            <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#0A7A32] bg-[#57D182]/25 px-2.5 py-0.5">
                              CLAUSE {clauseNum}
                            </span>
                            <Lock className={`w-3.5 h-3.5 ${isOpen ? 'text-[#019934]' : 'text-[#94a3b8]'}`} />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="overflow-hidden bg-white"
                            >
                              <div className="px-6 sm:px-12 py-5 sm:py-6">
                                <p className="font-['Poppins',sans-serif] font-light text-[15px] text-[#3C3C3C] leading-[1.75]">
                                  {sec.body}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Sticky GCC Institutional Privacy Contact & Governance Standards */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                {/* Privacy Officer Contact Card — Exact GCC Deep Navy #1A5C3B Institutional Card */}
                <div className="relative rounded-none bg-[#1A5C3B] text-white p-7 sm:p-8 space-y-5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[5px] bg-[#019934]/20 border border-[#019934]/40 text-[#57D182] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white leading-snug">
                      Contact Privacy Officer
                    </h3>
                  </div>

                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-white/80 leading-[1.7]">
                    If you have questions about our data collection procedures, wish to exercise your data subject rights, or request deletion of contact records, reach out directly:
                  </p>

                  <a
                    href="mailto:privacy@greengateadvisory.com"
                    className="block w-full py-3 px-4 text-center rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[13.5px] transition-colors duration-200 break-all"
                  >
                    privacy@greengateadvisory.com
                  </a>
                </div>

                {/* Core Governance Commitments — GCC White Flat Card with Signature Teal Horizontal Dash List */}
                <div className="relative rounded-[4px] bg-white border border-[#e5e7eb] p-7 sm:p-8 space-y-5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                  <div className="flex items-center gap-2.5 text-[#1A5C3B] font-['Poppins',sans-serif] font-semibold text-[15px] uppercase tracking-[0.08em]">
                    <FileText className="w-4 h-4 text-[#019934] stroke-[1.8]" />
                    <span>Governance Standards</span>
                  </div>

                  <ul className="space-y-3 text-[13.5px] text-[#3C3C3C] font-['Poppins',sans-serif] font-light leading-[1.6]">
                    {KEY_COMMITMENTS.map((comm, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="inline-block w-4 h-[1.5px] bg-[#019934] flex-shrink-0 mt-[10px]"
                          aria-hidden="true"
                        />
                        <span>{comm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. ADVISORY ENGAGEMENT CTA */}
        <HomeCTA />
      </div>
    </>
  );
}
