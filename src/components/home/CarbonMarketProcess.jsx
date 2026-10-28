import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  FileText, 
  Layers, 
  ShieldCheck, 
  Coins 
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function CarbonMarketProcess() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section 
      id="carbon-markets" 
      aria-label="End-to-End Carbon Market Support"
      className="py-10 sm:py-16 lg:py-20 bg-[#F5FAF6] text-[#1E2522] relative overflow-hidden scroll-mt-24"
    >
      {/* Generated High-Resolution Botanical & Earth Globe Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-45 mix-blend-multiply" 
        style={{ backgroundImage: `url('/images/carbon-support-bg.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#F5FAF6]/70 via-[#F5FAF6]/50 to-[#EEF6F0]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-10 relative z-10">
        
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none text-xs font-semibold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] shadow-xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-none bg-[#019935]" />
            <span>PROJECT LIFECYCLE</span>
          </div>

          <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] text-[#16221A] tracking-tight leading-tight">
            End-to-End <span className="text-[#019935]">Carbon Market Support</span>
          </h2>

          <div className="w-12 h-1 bg-[#019935] mx-auto rounded-none" />

          <p className="text-xs sm:text-sm md:text-base text-[#47574E] leading-relaxed font-sans font-normal pt-0.5">
            From an early project idea to potential carbon credit issuance and commercialisation, Green Gate Advisory helps clients understand the steps, requirements and decisions involved in developing a carbon project. Support is tailored to project context, applicable methodology, programme rules and relevant standards.
          </p>
        </motion.div>

        {/* Visual Architecture Schema - Green Pipeline Box (rounded-none, responsive) */}
        <div className="rounded-none bg-gradient-to-br from-[#01772B] via-[#016825] to-[#01581F] text-white p-4 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden border border-[#02B840]/30">
          
          {/* Subtle internal glowing backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D8F35C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            
            {/* Header inside the green box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-white/15">
              <div className="space-y-1">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#D8F35C] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#D8F35C] animate-pulse" />
                  VISUAL ARCHITECTURE SCHEMA
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white leading-snug">
                  Carbon Asset Development & Monetisation Pipeline
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-white/95 bg-white/10 px-3 py-1.5 rounded-none border border-white/20 self-start sm:self-auto backdrop-blur-xs">
                Traceable to Verra • Gold Standard • Article 6
              </span>
            </div>

            {/* 4 Connected Schema Blocks with Left & Right Entrance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-3 relative items-stretch">
              
              {/* PHASE 01: Feasibility (Enters from Left) */}
              <motion.div
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="p-4 sm:p-5 lg:p-6 rounded-none bg-[#024E1C]/90 border border-white/15 shadow-md flex flex-col justify-between space-y-3 relative group hover:border-[#D8F35C]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#D8F35C] bg-[#C4E052]/20 px-2.5 py-0.5 rounded-none">
                        PHASE 01
                      </span>
                      <span className="text-xs font-mono text-white/80">Feasibility</span>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-white text-[#019935] flex items-center justify-center shadow-xs flex-shrink-0">
                      <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                    Eligibility & Baseline
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans font-normal">
                    Methodology applicability screening, additionality analysis, and carbon yield modeling.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D8F35C] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F35C] flex-shrink-0" />
                  <span>Deliverable: Yield Report</span>
                </div>

                {/* Desktop Chevron connector to next step */}
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-none bg-[#018A32] border border-white/30 flex items-center justify-center text-white shadow-md">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>

              {/* PHASE 02: Design (Enters from Left-Center) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="p-4 sm:p-5 lg:p-6 rounded-none bg-[#024E1C]/90 border border-white/15 shadow-md flex flex-col justify-between space-y-3 relative group hover:border-[#D8F35C]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#D8F35C] bg-[#C4E052]/20 px-2.5 py-0.5 rounded-none">
                        PHASE 02
                      </span>
                      <span className="text-xs font-mono text-white/80">Design</span>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-white text-[#019935] flex items-center justify-center shadow-xs flex-shrink-0">
                      <Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                    PDD & MRV Protocol
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans font-normal">
                    Technical Project Design Document drafting, stakeholder consultation, and MRV blueprint.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D8F35C] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F35C] flex-shrink-0" />
                  <span>Deliverable: Registered PDD</span>
                </div>

                {/* Desktop Chevron connector to next step */}
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-none bg-[#018A32] border border-white/30 flex items-center justify-center text-white shadow-md">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>

              {/* PHASE 03: Audit (Enters from Right-Center) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="p-4 sm:p-5 lg:p-6 rounded-none bg-[#024E1C]/90 border border-white/15 shadow-md flex flex-col justify-between space-y-3 relative group hover:border-[#D8F35C]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#D8F35C] bg-[#C4E052]/20 px-2.5 py-0.5 rounded-none">
                        PHASE 03
                      </span>
                      <span className="text-xs font-mono text-white/80">Audit</span>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-white text-[#019935] flex items-center justify-center shadow-xs flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                    VVB Audit & Registry
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans font-normal">
                    Accredited auditor site visit support, technical response resolution, and standard approval.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D8F35C] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F35C] flex-shrink-0" />
                  <span>Deliverable: Final Validation</span>
                </div>

                {/* Desktop Chevron connector to next step */}
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-none bg-[#018A32] border border-white/30 flex items-center justify-center text-white shadow-md">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>

              {/* PHASE 04: Issuance (Enters from Right) */}
              <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="p-4 sm:p-5 lg:p-6 rounded-none bg-gradient-to-b from-[#025620] to-[#014A1A] border-2 border-[#D8F35C]/80 shadow-xl flex flex-col justify-between space-y-3 relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#0D2415] bg-[#D8F35C] px-2.5 py-0.5 rounded-none shadow-xs">
                        PHASE 04
                      </span>
                      <span className="text-xs font-mono text-[#D8F35C] font-semibold">Issuance</span>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-white text-[#019935] flex items-center justify-center shadow-xs flex-shrink-0">
                      <Coins className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                    Credit Issuance & Retainers
                  </h4>

                  <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-sans font-normal">
                    Serialised registry credit issuance, compliance off-take advisory, and permanent monitoring.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D8F35C] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#D8F35C] flex-shrink-0" />
                  <span>Milestone: Serialized Credits</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Action Link to Full Carbon Advisory */}
        <div className="text-center pt-2">
          <Link
            to={getLocalizedPath('/services/carbon-market-advisory')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
          >
            <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
