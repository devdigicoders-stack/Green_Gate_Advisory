import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const LIFECYCLE_PHASES = [
  {
    num: '01',
    phase: 'PHASE 01',
    title: 'Eligibility & Baseline',
    description: 'Methodology screening, additionality testing, and carbon yield modelling.',
    deliverable: 'Yield Report',
    isFinal: false
  },
  {
    num: '02',
    phase: 'PHASE 02',
    title: 'PDD & MRV Protocol',
    description: 'Project Design Document drafting and digital MRV framework.',
    deliverable: 'Registered PDD',
    isFinal: false
  },
  {
    num: '03',
    phase: 'PHASE 03',
    title: 'VVB Audit & Registry',
    description: 'Accredited auditor support and registry validation approval.',
    deliverable: 'Final Validation',
    isFinal: false
  },
  {
    num: '04',
    phase: 'PHASE 04',
    title: 'Credit Issuance',
    description: 'Serialized credit issuance and compliance off-take advisory.',
    deliverable: 'Serialized Credits',
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
      className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.16] mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/carbon-support-bg.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A5C3B]/88 via-[#1A5C3B]/80 to-[#144A2F]/92 pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        {/* Concise Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            PROJECT LIFECYCLE
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[44px] lg:text-[50px] text-white leading-[1.15]">
            End-to-End <span className="text-[#57D182]">Carbon Market Support</span>
          </h2>
          <p className="mt-3 font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[17.5px] text-white/85 leading-[1.6]">
            Structured support from early feasibility to verified credit issuance across Verra, Gold Standard, and Article 6.
          </p>
        </motion.div>

        {/* 4 Concise Lifecycle Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative items-stretch">
          {LIFECYCLE_PHASES.map((item, idx) => {
            const isFinal = item.isFinal;

            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
                className={`relative p-6 sm:p-7 rounded-[4px] flex flex-col justify-between space-y-5 transition-all duration-300 group ${
                  isFinal
                    ? 'border border-[#57D182]/75 text-white'
                    : 'bg-[#144A2F]/85 hover:bg-[#144A2F] border border-white/15 hover:border-[#57D182]'
                }`}
                style={
                  isFinal
                    ? { background: 'linear-gradient(145deg, #126D3D 0%, #078A38 55%, #019934 100%)' }
                    : undefined
                }
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-['Poppins',sans-serif] font-light text-[38px] leading-none ${
                        isFinal ? 'text-white' : 'text-[#57D182]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-[11px] font-medium tracking-[0.14em] uppercase px-2.5 py-0.5 ${
                        isFinal ? 'bg-white text-[#1A5C3B]' : 'bg-[#57D182]/20 text-[#57D182]'
                      }`}
                    >
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-medium text-[19px] text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-white/85 leading-[1.6]">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`pt-3.5 border-t flex items-center gap-2 text-[12.5px] font-medium ${
                    isFinal ? 'border-white/25 text-white' : 'border-white/12 text-[#57D182]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 stroke-[1.75]" />
                  <span>{item.deliverable}</span>
                </div>

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

        <div className="text-center pt-1">
          <Link
            to={getLocalizedPath('/services/carbon-market-advisory')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 group"
          >
            <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
