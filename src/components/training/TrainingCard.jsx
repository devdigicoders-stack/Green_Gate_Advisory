import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, RotateCw } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const TOPIC_PHOTOS = [
  '/images/photo-carbon-markets.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-ets-pricing.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-institutional-forum.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/forestry.jpg',
  '/images/photo-corporate-esg.jpg',
  '/images/photo-climate-policy.jpg',
  '/images/photo-green-hydrogen.jpg',
  '/images/photo-sustainable-agriculture.jpg'
];

export default function TrainingCard({ topic, index = 0 }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [isFlipped, setIsFlipped] = useState(false);

  const title = t(`training.topics.items.${topic.key}.title`, topic.id);
  const desc = t(`training.topics.items.${topic.key}.desc`, '');
  const scope = t(`training.topics.items.${topic.key}.scope`, '');
  const photo = TOPIC_PHOTOS[index % TOPIC_PHOTOS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.05 }}
      className="group [perspective:1000px] h-[340px] w-full cursor-pointer font-['Poppins',sans-serif]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* FRONT FACE — Crisp Daylight Photo + Concise Module Title */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[4px] bg-white border border-[#e5e7eb] flex flex-col justify-between overflow-hidden">
          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
              <img
                src={photo}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10.5px] font-medium tracking-[0.14em] text-[#1A5C3B] uppercase bg-white/92">
                MODULE {topic.number}
              </span>
            </div>

            <div className="p-5 space-y-2">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#1A5C3B] leading-snug line-clamp-2">
                {title}
              </h3>
              <p className="font-['Poppins',sans-serif] font-light text-[13px] text-[#555555] leading-[1.58] line-clamp-2">
                {desc}
              </p>
            </div>
          </div>

          <div className="px-5 pb-4 flex items-center justify-between text-[11.5px] font-medium text-[#019934]">
            <span className="flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5" />
              <span>View Scope</span>
            </span>
          </div>
        </div>

        {/* BACK FACE — Clean Emerald Scope Panel + Enquire CTA */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[4px] bg-[#1A5C3B] text-white border border-[#019934] p-6 flex flex-col justify-between overflow-hidden">
          <div className="space-y-3">
            <span className="text-[11px] font-medium tracking-[0.16em] text-[#57D182] uppercase block">
              MODULE {topic.number} · SCOPE
            </span>
            <h4 className="font-['Poppins',sans-serif] font-medium text-[17px] text-white leading-snug line-clamp-2">
              {title}
            </h4>
            <p className="text-white/90 text-[13px] leading-[1.65] font-light line-clamp-5">
              {scope || desc}
            </p>
          </div>

          <Link
            to={getLocalizedPath('/contact?service=training')}
            state={{ serviceInterest: 'Training and Capacity Building', topic: title }}
            onClick={(e) => e.stopPropagation()}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-normal text-[13.5px] transition-colors duration-200"
          >
            <span>{t('training.topics.enquireTopic', 'Enquire About This Topic')}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
