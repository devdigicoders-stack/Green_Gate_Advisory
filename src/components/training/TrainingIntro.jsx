import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Laptop, CheckCircle2 } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const COMPETENCIES = [
  'Physical On-Site Workshops',
  'Remote E-Training Clinics',
  'Climate Policy & NDCs',
  'Carbon Market Mechanisms',
  'Compliance & EU CBAM',
  'Climate Finance Access',
  'Project Preparation & MRV',
  'GHG Emissions Accounting'
];

export default function TrainingIntro() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Concise Editorial Narrative + Competency Tags */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{t('training.intro.eyebrow', 'Knowledge & Capability')}</span>
              </div>

              <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-0.01em] leading-[1.2]">
                <span className="text-[#1A5C3B] block">Building Climate Knowledge &amp;</span>
                <span className="text-[#019934] block">Practical Delivery Capacity</span>
              </h2>
            </div>

            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.72]">
              {t('training.intro.p1', 'Bespoke executive and technical training for ministries, industrial compliance teams, project sponsors, and financial analysts.')}
            </p>

            {/* Clear Dual Delivery Format Box: Physical & Remote E-Training */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-[6px] bg-[#F4F8F5] border border-[#d9dfe5] space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#1A5C3B] font-medium text-[15px]">
                  <Users className="w-5 h-5 text-[#019934] flex-shrink-0" />
                  <span>Physical Training</span>
                </div>
                <p className="text-[13px] text-[#555555] font-light leading-snug">
                  In-person, on-site institutional workshops, ministerial delegations, and intensive boardroom clinics.
                </p>
              </div>

              <div className="p-4 rounded-[6px] bg-[#F4F8F5] border border-[#d9dfe5] space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#1A5C3B] font-medium text-[15px]">
                  <Laptop className="w-5 h-5 text-[#019934] flex-shrink-0" />
                  <span>Remote E-Training</span>
                </div>
                <p className="text-[13px] text-[#555555] font-light leading-snug">
                  Interactive online webinars, digital MRV tool clinics, and remote modular capacity building across time zones.
                </p>
              </div>
            </div>

            {/* Clean Core Competency Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {COMPETENCIES.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#F4F8F5] border border-[#e5e7eb] text-[13px] font-medium text-[#1A5C3B]"
                >
                  <span className="w-2 h-2 bg-[#019934] rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to={getLocalizedPath('/contact?service=training')}
                state={{ serviceInterest: 'Training and Capacity Building' }}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-normal text-[14.5px] transition-colors duration-200 group"
              >
                <span>{t('training.hero.primaryBtn', 'Discuss a Training Programme')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Crisp Editorial Workshop Photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-12 gap-3.5"
          >
            <div className="col-span-12 aspect-[16/9] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-executive-training.jpg"
                alt="Executive climate policy and carbon markets workshop room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-climate-policy.jpg"
                alt="Institutional climate governance and capacity building"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-corporate-esg.jpg"
                alt="Corporate sustainability leadership training"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
