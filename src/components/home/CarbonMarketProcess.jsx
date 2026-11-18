import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  FileText,
  Layers,
  ShieldCheck,
  Coins
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const LIFECYCLE_PHASES = [
  {
    num: '01',
    phase: 'PHASE 01',
    stage: 'Feasibility',
    title: 'Eligibility & Baseline',
    description: 'Methodology applicability screening, additionality analysis, and carbon yield modeling.',
    deliverable: 'Deliverable: Yield Report',
    icon: FileText,
    isFinal: false
  },
  {
    num: '02',
    phase: 'PHASE 02',
    stage: 'Design',
    title: 'PDD & MRV Protocol',
    description: 'Technical Project Design Document drafting, stakeholder consultation, and MRV blueprint.',
    deliverable: 'Deliverable: Registered PDD',
    icon: Layers,
    isFinal: false
  },
  {
    num: '03',
    phase: 'PHASE 03',
    stage: 'Audit',
    title: 'VVB Audit & Registry',
    description: 'Accredited auditor site visit support, technical response resolution, and standard approval.',
    deliverable: 'Deliverable: Final Validation',
    icon: ShieldCheck,
    isFinal: false
  },
  {
    num: '04',
    phase: 'PHASE 04',
    stage: 'Issuance',
    title: 'Credit Issuance & Retainers',
    description: 'Serialised registry credit issuance, compliance off-take advisory, and permanent monitoring.',
    deliverable: 'Milestone: Serialized Credits',
    icon: Coins,
    isFinal: true
  }
];

export default function CarbonMarketProcess() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section
      id="carbon-markets"
      aria-label="End-to-End Carbon Market Support"
      className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Preserved High-Resolution Botanical & Earth Globe Background blended subtly into Deep Navy */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.14] mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/carbon-support-bg.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A5C3B]/90 via-[#1A5C3B]/82 to-[#144A2F]/95 pointer-events-none" />

      {/* Subtle Oversized Concentric Arc Watermark (GCC Signature Motif) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 640 640"
        fill="none"
        className="pointer-events-none absolute -left-36 -bottom-32 w-[420px] sm:w-[560px] lg:w-[660px] h-auto z-0 opacity-[0.06]"
      >
        {Array.from({ length: 16 }).map((_, idx) => (
          <circle
            key={idx}
            cx="220"
            cy="420"
            r={70 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header — GCC Light-Weight Display Typography on Deep Navy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            PROJECT LIFECYCLE
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[46px] lg:text-[54px] text-white leading-[1.15] tracking-[-0.01em]">
            End-to-End{' '}
            <span className="text-[#57D182]">Carbon Market Support</span>
          </h2>

          <p className="mt-5 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[19.5px] text-white/85 leading-[1.65] max-w-3xl">
            From an early project idea to potential carbon credit issuance and commercialisation, Green Gate Advisory helps clients understand the steps, requirements and decisions involved in developing a carbon project. Support is tailored to project context, applicable methodology, programme rules and relevant standards.
          </p>
        </motion.div>

        {/* Visual Architecture Schema Container — Clean Institutional Navy Panel */}
        <div className="bg-white/[0.03] border border-white/15 p-6 sm:p-9 lg:p-11 rounded-none relative overflow-hidden">
          <div className="relative z-10 space-y-8 sm:space-y-10">
            {/* Pipeline Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-white/15">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase text-[#57D182]">
                  <span className="inline-block w-7 h-[2px] bg-[#019934]" aria-hidden="true" />
                  <span>VISUAL ARCHITECTURE SCHEMA</span>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-light text-[24px] sm:text-[30px] lg:text-[34px] text-white leading-[1.2] tracking-[-0.01em]">
                  Carbon Asset Development &amp; Monetisation Pipeline
                </h3>
              </div>

              <span className="inline-flex items-center text-[12.5px] sm:text-[13px] font-normal text-[#57D182] bg-[#019934]/15 border border-[#57D182]/45 px-4 py-2 rounded-[4px] self-start lg:self-auto whitespace-nowrap">
                Traceable to Verra • Gold Standard • Article 6
              </span>
            </div>

            {/* 4 Connected Lifecycle Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative items-stretch">
              {LIFECYCLE_PHASES.map((item, idx) => {
                const IconComp = item.icon;
                const isFinal = item.isFinal;

                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                    className={`relative p-6 sm:p-7 rounded-none flex flex-col justify-between space-y-6 transition-all duration-300 group ${
                      isFinal
                        ? 'border border-[#57D182]/75 text-white'
                        : 'bg-[#144A2F]/85 hover:bg-[#144A2F] border border-white/15 hover:border-[#57D182]'
                    }`}
                    style={
                      isFinal
                        ? {
                            background:
                              'linear-gradient(145deg, #126D3D 0%, #078A38 55%, #019934 100%)'
                          }
                        : undefined
                    }
                  >
                    {/* Top Teal Hover Accent Line */}
                    {!isFinal && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    <div className="space-y-4">
                      {/* Top Row: Oversized Light Numeral + Thin-Stroke Icon */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-['Poppins',sans-serif] font-light text-[42px] sm:text-[48px] leading-none tracking-[-0.02em] ${
                            isFinal ? 'text-white' : 'text-[#57D182]'
                          }`}
                        >
                          {item.num}
                        </span>
                        <div
                          className={`w-10 h-10 rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                            isFinal
                              ? 'bg-white/20 text-white border border-white/30'
                              : 'bg-[#019934]/15 text-[#57D182] border border-[#57D182]/35 group-hover:bg-[#019934] group-hover:text-white'
                          }`}
                        >
                          <IconComp className="w-5 h-5 stroke-[1.6]" />
                        </div>
                      </div>

                      {/* Phase Pill + Stage Label */}
                      <div className="flex items-center gap-2.5 pt-1">
                        <span
                          className={`text-[11px] font-medium tracking-[0.14em] uppercase px-2.5 py-0.5 ${
                            isFinal
                              ? 'bg-white text-[#1A5C3B]'
                              : 'bg-[#57D182]/20 text-[#57D182]'
                          }`}
                        >
                          {item.phase}
                        </span>
                        <span
                          className={`text-[12.5px] font-light ${
                            isFinal ? 'text-white/95' : 'text-white/70'
                          }`}
                        >
                          {item.stage}
                        </span>
                      </div>

                      {/* Phase Title */}
                      <h4 className="font-['Poppins',sans-serif] font-medium text-[19px] sm:text-[20px] text-white leading-snug">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p
                        className={`font-['Poppins',sans-serif] font-light text-[14px] leading-[1.65] ${
                          isFinal ? 'text-white/95' : 'text-white/80'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Deliverable / Milestone Footer */}
                    <div
                      className={`pt-4 border-t flex items-center gap-2 text-[13px] font-medium ${
                        isFinal
                          ? 'border-white/25 text-white'
                          : 'border-white/12 text-[#57D182]'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 stroke-[1.75] ${
                          isFinal ? 'text-white' : 'text-[#57D182]'
                        }`}
                      />
                      <span>{item.deliverable}</span>
                    </div>

                    {/* Desktop Connector Arrow between Phases */}
                    {idx < LIFECYCLE_PHASES.length - 1 && (
                      <div
                        className="hidden lg:flex absolute -right-[17px] top-1/2 -translate-y-1/2 z-20"
                        aria-hidden="true"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#1A5C3B] border border-[#57D182] flex items-center justify-center text-[#57D182]">
                          <ChevronRight className="w-4 h-4 stroke-[1.75]" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Centered Solid Teal CTA Button (Exact GCC Button Pattern) */}
        <div className="text-center pt-2">
          <Link
            to={getLocalizedPath('/services/carbon-market-advisory')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] tracking-normal transition-colors duration-200 group focus:outline-none"
          >
            <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
