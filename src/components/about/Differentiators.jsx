import { useTranslation } from 'react-i18next';
import { 
  GitMerge, 
  Sparkles, 
  Landmark, 
  Trees, 
  ScrollText, 
  Users 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const DIFFERENTIATOR_ICONS = [
  GitMerge,
  Sparkles,
  Landmark,
  Trees,
  ScrollText,
  Users
];

export default function Differentiators() {
  const { t } = useTranslation();

  const rawItems = t('about.differentiators.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="why-green-gate" className="py-14 sm:py-20 bg-white border-b border-sand-border/70 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('about.differentiators.eyebrow', 'Distinctive Capabilities')}
          title={t('about.differentiators.heading', 'What Makes Us Different')}
          subtitle={t('about.differentiators.subtitle')}
        />

        {/* Clean Editorial Capability Grid - Not Heavy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 pt-2">
          {items.map((item, idx) => {
            const Icon = DIFFERENTIATOR_ICONS[idx % DIFFERENTIATOR_ICONS.length];
            return (
              <div
                key={idx}
                className="space-y-3.5 pb-6 border-b border-sand-border/70"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#019935] shadow-xs">
                    <Icon className="w-5 h-5 text-current" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#019935]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
