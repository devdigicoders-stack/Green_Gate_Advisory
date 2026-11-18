import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, RotateCw, Sparkles } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingCard({ topic, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [isFlipped, setIsFlipped] = useState(false);

  const Icon = topic.icon;
  const title = t(`training.topics.items.${topic.key}.title`, topic.id);
  const desc = t(`training.topics.items.${topic.key}.desc`, '');
  const scope = t(`training.topics.items.${topic.key}.scope`, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: (index % 3) * 0.06 }}
      className="group [perspective:1000px] h-[300px] sm:h-[315px] w-full cursor-pointer font-['Poppins',sans-serif]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Flipper Box */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* FRONT FACE — GCC Flat White Hairline Card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[4px] bg-white border border-[#e5e7eb] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium tracking-[0.14em] text-[#1A5C3B] uppercase bg-[#57D182]/40">
                MODULE {topic.number}
              </span>

              <Icon className="w-6 h-6 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors" />
            </div>

            <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] leading-snug line-clamp-2">
              {title}
            </h3>

            <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.68] line-clamp-3">
              {desc}
            </p>
          </div>

          <div className="pt-3 border-t border-[#efefef] flex items-center justify-between text-[12px] font-medium text-[#019934]">
            <span className="flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
              <span>View Detailed Scope</span>
            </span>
            <span className="text-[11px] font-normal text-[#7f7f7f] uppercase tracking-[0.1em]">
              180° Flip
            </span>
          </div>
        </div>

        {/* BACK FACE — Exact GCC Deep Institutional Navy #1A5C3B Panel */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[4px] bg-[#1A5C3B] text-white border border-[#019934] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-[0.16em] text-[#57D182] uppercase">
                MODULE {topic.number} · CURRICULUM SCOPE
              </span>
              <Sparkles className="w-4 h-4 text-[#57D182] stroke-[1.6]" />
            </div>

            <h4 className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[17px] text-white leading-snug line-clamp-2">
              {title}
            </h4>

            <div className="bg-white/[0.06] p-3.5 rounded-[3px] border border-white/15 max-h-[115px] overflow-y-auto">
              <p className="text-white/90 text-[13px] leading-[1.65] font-['Poppins',sans-serif] font-light">
                {scope || desc}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/15">
            <Link
              to={getLocalizedPath('/contact?service=training')}
              state={{ serviceInterest: 'Training and Capacity Building', topic: title }}
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[13.5px] transition-colors duration-200 focus:outline-none"
            >
              <span>{t('training.topics.enquireTopic', 'Enquire About This Topic')}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
