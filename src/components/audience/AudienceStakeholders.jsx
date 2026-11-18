import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AUDIENCE_QUICK_CHIPS = [
  { id: 'governments', image: '/images/photo-climate-policy.jpg', label: 'Governments & Public Institutions' },
  { id: 'companies', image: '/images/photo-cbam-industry.jpg', label: 'Companies & Exporters' },
  { id: 'developers', image: '/images/photo-carbon-markets.jpg', label: 'Carbon Project Developers' },
  { id: 'investors', image: '/images/photo-climate-finance.jpg', label: 'Investors & Financial Institutions' },
  { id: 'international-ngos', image: '/images/blue-carbon.jpg', label: 'International NGOs & Research' }
];

export default function AudienceStakeholders() {
  const { t } = useTranslation();

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        {/* Concise Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('audience.intro.eyebrow', 'Client Diversity')}</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] leading-[1.2]">
              {t('audience.intro.heading', 'Tailored Advisory for Distinct Mandates')}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.7]">
              {t('audience.intro.p2', 'We tailor technical, regulatory, and climate finance advisory to each organisation’s sector, maturity, and strategic goals.')}
            </p>
          </div>
        </div>

        {/* 5 Photo-Topped Stakeholder Anchor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {AUDIENCE_QUICK_CHIPS.map((chip, idx) => (
            <motion.button
              type="button"
              key={chip.id}
              onClick={() => scrollToCategory(chip.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
              className="text-left rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col group cursor-pointer focus:outline-none"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                <img
                  src={chip.image}
                  alt={chip.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 text-[10.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2 py-0.5">
                  0{idx + 1}
                </span>
              </div>

              <div className="p-4">
                <span className="font-['Poppins',sans-serif] font-semibold text-[14px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug block">
                  {chip.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
