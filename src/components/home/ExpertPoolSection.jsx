import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  ArrowRight, 
  Briefcase, 
  Globe2, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const EXPERT_DOMAINS = [
  {
    icon: Sparkles,
    badge: 'Carbon Markets & Article 6',
    title: 'Carbon Methodologists & Certifiers',
    description: 'Specialists in Verra VCS, Gold Standard, ART TREES, and bilateral ITMO crediting frameworks under Article 6.2 and 6.4.',
    deliverables: ['Baseline & Additionality Screening', 'PDD & Monitoring Methodology Preparation', 'VVB Validation Coordination']
  },
  {
    icon: ShieldCheck,
    badge: 'Industrial Decarbonisation',
    title: 'CBAM & Heavy Industry Auditors',
    description: 'Technical engineers experienced in direct emissions accounting, blast-furnace/smelter operations, and EU CBAM reporting rules.',
    deliverables: ['Embedded Emissions Audits', 'Scope 1-3 Precursor GHG Modeling', 'Quarterly XML Reporting Validation']
  },
  {
    icon: Landmark,
    badge: 'Sustainable Finance',
    title: 'Climate Finance & Proposal Structurers',
    description: 'Development economists and financial modelers specializing in bankable concessional proposals for multilateral facilities.',
    deliverables: ['GCF / GEF Concept Notes', 'Blended Finance Feasibility Modeling', 'Sovereign Debt-for-Climate Structuring']
  },
  {
    icon: Trees,
    badge: 'Natural Capital',
    title: 'NBS & Blue Carbon Scientists',
    description: 'Foresters, ecologists, and marine scientists with proven field experience across jurisdictional REDD+, ARR, and coastal wetlands.',
    deliverables: ['Biomass & Soil Carbon Sampling Protocols', 'Dynamic Baseline & Leakage Assessment', 'Plan Vivo & High-Integrity Standard MRV']
  }
];

export default function ExpertPoolSection() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section id="expert-pool" className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F5] border-b border-sand-border/60 scroll-mt-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge={t('home.expertPool.eyebrow', 'Talent & Consultant Recruitment')}
          title={t('home.expertPool.heading', 'Join Our Advisory Pool of Experts & Senior Consultants')}
          subtitle={t('home.expertPool.subtitle', 'We partner with accredited technical specialists, independent certifiers, and climate economists across global jurisdictions to deliver complex mandates.')}
          light={false}
        />

        {/* 4 Expert Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {EXPERT_DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-sand-border p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-forest/40 transition-all duration-300 hover:-translate-y-1.5 shadow-subtle hover:shadow-elevated overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-deep-green font-bold border border-forest/15 px-3 py-1 rounded-full bg-sage/60">
                      Roster {idx + 1}
                    </span>
                  </div>

                  <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-gold-dark font-bold block pt-1">
                    {domain.badge}
                  </span>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-charcoal/90 leading-relaxed font-sans font-normal">
                    {domain.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="pt-3 border-t border-sand-border/70 space-y-2.5">
                    <span className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-forest font-bold block">
                      Target Mandate Scope:
                    </span>
                    {domain.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-charcoal font-medium">
                        <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-8 h-1 bg-gold/40 rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Roster Terms Container */}
        <div className="rounded-3xl bg-forest text-white p-8 sm:p-12 lg:p-14 shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-green/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase bg-white/10 text-gold-light border border-white/15">
                <Users className="w-4 h-4 text-gold" />
                <span>Advisory Associate & Specialist Network</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                Are you an independent specialist looking to collaborate on high-stakes climate mandates?
              </h3>

              <p className="text-sand-surface/95 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-2xl">
                We contract senior specialists on project-specific retainers and institutional engagements. We maintain strict non-conflict rules and clear fiduciary frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-sand-surface/90">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Cross-Border Sovereign Mandates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Flexible Associate Terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Strict Conflict-Free Standards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-stretch sm:items-center lg:items-end gap-3.5">
              <Link
                to={getLocalizedPath('/contact?type=expert')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg w-full text-center"
              >
                <span>Register as an Expert</span>
                <ArrowRight className="w-4 h-4 text-forest-dark" />
              </Link>

              <a
                href="mailto:contact@greengateadvisory.com?subject=Expert%20Network%20Application%20-%20Curriculum%20Vitae"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide border border-white/15 transition-colors w-full text-center"
              >
                <span>Email CV Directly</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
