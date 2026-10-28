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

  const colIndex = index % 3;
  const initialMotion = 
    colIndex === 0 
      ? { opacity: 0, x: -50, y: 15 } 
      : colIndex === 2 
      ? { opacity: 0, x: 50, y: 15 } 
      : { opacity: 0, y: 40 };

  return (
    <motion.div
      initial={initialMotion}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      className="group [perspective:1000px] h-[290px] sm:h-[305px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Flipper Box with 180-Degree Rotation Animation */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-none bg-white border border-sand-border p-4.5 sm:p-5 flex flex-col justify-between shadow-sm group-hover:shadow-2xl overflow-hidden transition-all duration-300">
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935]" />

          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none text-[10px] font-mono font-bold tracking-widest text-[#019935] uppercase bg-[#E8F5E9] border border-[#C8E6C9]">
                <span>MODULE {topic.number}</span>
              </div>

              <div className="w-8 h-8 rounded-none bg-[#E8F5E9] border border-[#019935]/20 flex items-center justify-center text-[#019935]">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <h3 className="font-display font-bold text-base sm:text-[17px] text-forest leading-snug line-clamp-2">
              {title}
            </h3>

            <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light line-clamp-3">
              {desc}
            </p>
          </div>

          {/* Bottom Flip Prompt */}
          <div className="pt-2 border-t border-sand-border/70 flex items-center justify-between text-[11px] font-semibold text-[#019935]">
            <span className="flex items-center gap-1.5">
              <RotateCw className="w-3 h-3 transition-transform duration-500 group-hover:rotate-180" />
              <span>View Detailed Scope</span>
            </span>
            <span className="text-[10px] font-mono text-charcoal-muted uppercase tracking-wider">
              180° Flip
            </span>
          </div>
        </div>

        {/* BACK FACE (180° FLIPPED) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-none bg-[#0D2E24] text-white border-2 border-[#019935] p-4.5 sm:p-5 flex flex-col justify-between shadow-2xl overflow-hidden">
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#019935] via-[#D4AF37] to-[#019935]" />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#F3E5AB] uppercase">
                MODULE {topic.number} · CURRICULUM SCOPE
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>

            <h4 className="font-display font-bold text-sm sm:text-[15px] text-white leading-tight line-clamp-2">
              {title}
            </h4>

            <div className="bg-black/50 p-2.5 rounded-none border border-white/20 max-h-[110px] overflow-y-auto">
              <p className="text-white text-xs sm:text-[12.5px] leading-relaxed font-sans font-normal">
                {scope || desc}
              </p>
            </div>
          </div>

          {/* Enquire Button on Back of Card */}
          <div className="pt-2 border-t border-white/15">
            <Link
              to={getLocalizedPath('/contact?service=training')}
              state={{ serviceInterest: 'Training and Capacity Building', topic: title }}
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
            >
              <span>{t('training.topics.enquireTopic', 'Enquire About This Topic')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
