import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Sparkles, 
  Landmark, 
  Globe2, 
  CheckCircle2 
} from 'lucide-react';

const AUDIENCE_QUICK_CHIPS = [
  { icon: Building2, label: 'Governments & Public Institutions' },
  { icon: Factory, label: 'Companies, Manufacturers & Exporters' },
  { icon: Sparkles, label: 'Carbon Project Developers' },
  { icon: Landmark, label: 'Investors & Financial Institutions' },
  { icon: Globe2, label: 'International NGOs & Research' }
];

export default function AudienceStakeholders() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-3.5"
          >
            <span className="inline-block px-3 py-1 rounded-none text-xs font-mono font-bold tracking-widest uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5]">
              {t('audience.intro.eyebrow', 'Client Diversity')}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16221A] tracking-tight leading-snug">
              {t('audience.intro.heading', 'Tailored Advisory for Distinct Institutional Mandates')}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 text-[#4E5E54] font-sans text-sm sm:text-base leading-relaxed"
          >
            <p>
              {t('audience.intro.p1', 'Organisations encounter climate imperatives from diverse vantage points. A sovereign government designing compliance carbon pricing requires different analytical frameworks than an exporter calculating embedded emissions for the EU CBAM, or an institutional investor assessing transition risk across an infrastructure portfolio.')}
            </p>
            <p className="text-[#16221A] font-medium">
              {t('audience.intro.p2', 'We tailor our technical, regulatory, and finance advisory to each client\'s specific operational context, institutional maturity, and strategic objectives.')}
            </p>
          </motion.div>
        </div>

        {/* 5 Core Audience Anchor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-2">
          {AUDIENCE_QUICK_CHIPS.map((chip, idx) => {
            const Icon = chip.icon;
            const initialMotion = 
              idx === 0 ? { opacity: 0, x: -45 } :
              idx === 1 ? { opacity: 0, x: -20, y: 25 } :
              idx === 2 ? { opacity: 0, y: 35 } :
              idx === 3 ? { opacity: 0, x: 20, y: 25 } :
              { opacity: 0, x: 45 };

            return (
              <motion.div 
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-5 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden min-h-[160px]"
              >
                {/* Top Green Accent Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                  <Icon className="w-5 h-5 transition-colors duration-300" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#019935] uppercase tracking-wider block">
                    GROUP 0{idx + 1}
                  </span>
                  <span className="font-display font-bold text-xs sm:text-[13px] text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug block">
                    {chip.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Principle Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3 p-5 sm:p-6 rounded-none bg-white border border-[#DCE8E0] border-l-4 border-l-[#019935] text-xs sm:text-sm text-[#4E5E54] font-sans shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)]"
        >
          <CheckCircle2 className="w-5 h-5 text-[#019935] flex-shrink-0" />
          <span className="leading-relaxed">
            {t('audience.stakeholders.notice', 'Engagement integrity: Our recommendations reflect client realities without claiming guaranteed financial access, project approvals, or regulatory exemptions.')}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
