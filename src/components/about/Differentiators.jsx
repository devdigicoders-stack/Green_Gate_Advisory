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
    <section className="py-20 sm:py-28 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('about.differentiators.eyebrow', 'Distinctive Capabilities')}
          title={t('about.differentiators.heading', 'What Makes Us Different')}
          subtitle={t('about.differentiators.subtitle')}
        />

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const Icon = DIFFERENTIATOR_ICONS[idx % DIFFERENTIATOR_ICONS.length];
            return (
              <div
                key={idx}
                className="rounded-3xl bg-sage/40 border border-sand-border p-7 sm:p-8 hover:bg-white hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sand-border/80 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
