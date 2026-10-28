import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, CheckCircle2, Lock, FileText, Globe } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import HomeCTA from '../components/home/HomeCTA';
import { useLocale } from '../hooks/useLocale';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const rawSections = t('privacy.sections', { returnObjects: true }) || [];
  const sections = Array.isArray(rawSections) ? rawSections : [];

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

      {/* 1. HERO SECTION (Dark Hero ensures navbar is sharp, transparent, and completely legible) */}
      <section className="relative min-h-[42vh] sm:min-h-[48vh] lg:min-h-[52vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-900 text-white pt-28 pb-16 sm:pt-36 sm:pb-20 text-center">
        {/* Background Photography with Clean Neutral Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about-landscape.jpg"
            alt="Data governance, integrity, and regulatory privacy frameworks at Green Gate Advisory"
            className="w-full h-full object-cover object-center opacity-85 scale-102 transform motion-safe:transition-transform motion-safe:duration-1000"
            loading="eager"
          />
          {/* Neutral contrast gradient overlays */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-5 flex flex-col items-center"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>{t('privacy.badge', 'Data Governance & Confidentiality')}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl">
              {t('privacy.title', 'Privacy Policy & Data Handling')}
            </h1>

            {/* Supporting Lead */}
            <p className="text-sm sm:text-base md:text-lg text-sand-surface/90 leading-relaxed font-sans font-normal max-w-2xl">
              {t('privacy.lead', 'Green Gate Advisory is committed to handling professional enquiries with confidentiality, transparency, and compliance with applicable data protection legislation.')}
            </p>

            {/* Quick Metadata Strip */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs text-white/70 font-sans">
              <span className="px-3 py-1 rounded-none bg-white/10 border border-white/15">Effective: January 2026</span>
              <span className="px-3 py-1 rounded-none bg-white/10 border border-white/15">Scope: Global Advisory Practice</span>
              <span className="px-3 py-1 rounded-none bg-white/10 border border-white/15">Governance: GDPR & Applicable Laws</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN POLICY CONTENT GRID */}
      <section className="py-14 sm:py-20 bg-[#FAFCF9] border-t border-[#E5EDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Architectural Policy Sections */}
            <div className="lg:col-span-8 space-y-6">
              {sections.map((sec, idx) => (
                <div 
                  key={idx}
                  className="rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935]/40 p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] space-y-3.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#019935] uppercase bg-[#E8F6ED] px-2.5 py-0.5 border border-[#CFE8D7]">
                      CLAUSE 0{idx + 1}
                    </span>
                    <Lock className="w-3.5 h-3.5 text-[#019935]/60" />
                  </div>

                  <h2 className="font-display font-bold text-lg sm:text-xl text-[#16221A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#019935] flex-shrink-0" />
                    <span>{sec.title}</span>
                  </h2>

                  <p className="text-sm sm:text-base text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Contact & Compliance Cards */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Privacy Officer Contact Card */}
              <div className="rounded-none bg-white border border-[#DCE8E0] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.05)] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019935]" />

                <div className="flex items-center gap-2.5 text-forest font-display font-bold text-base">
                  <div className="w-8 h-8 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Contact Privacy Officer</span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                  If you have questions about our data collection procedures, wish to exercise your data subject rights, or request deletion of contact records, reach out directly:
                </p>

                <a 
                  href="mailto:privacy@greengateadvisory.com"
                  className="block w-full py-2.5 px-4 text-center rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  privacy@greengateadvisory.com
                </a>
              </div>

              {/* Core Governance Commitments */}
              <div className="rounded-none bg-white border border-[#DCE8E0] p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] space-y-4">
                <div className="flex items-center gap-2 text-forest font-display font-bold text-sm uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#019935]" />
                  <span>Governance Standards</span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#4E5E54] font-sans font-normal">
                  {KEY_COMMITMENTS.map((comm, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#019935] flex-shrink-0 mt-0.5" />
                      <span>{comm}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. MODERN ADVISORY ENGAGEMENT CTA */}
      <HomeCTA />
    </>
  );
}
