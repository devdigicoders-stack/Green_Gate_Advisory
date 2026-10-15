import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import { INSIGHTS_CATEGORIES } from '../../data/insightsData';

export default function InsightsCategories({ selectedCategory, onSelectCategory }) {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          badge={t('insights.categories.badge', 'Subject Coverage')}
          title={t('insights.categories.heading', 'Explore Technical Knowledge Areas')}
          subtitle={t('insights.categories.subtitle', 'Filter publications and resources across our eight core climate and environmental practice areas.')}
        />

        {/* Category Filter Pills (Horizontal scrollable on mobile, flex on desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar sm:flex-wrap sm:justify-center">
          {INSIGHTS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            const label = t(`insights.categories.${cat.translationKey}.title`, cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                aria-pressed={isSelected}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                  isSelected
                    ? 'bg-forest text-white shadow-md border border-forest scale-102'
                    : 'bg-white hover:bg-forest/5 text-charcoal border border-sand-border/90 hover:border-forest/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-gold' : 'text-deep-green'}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Explanatory Card */}
        {selectedCategory && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-border/90 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-dark">
                Active Filter
              </span>
              <h3 className="font-heading font-extrabold text-xl text-forest">
                {t(`insights.categories.${INSIGHTS_CATEGORIES.find(c => c.id === selectedCategory)?.translationKey || 'all'}.title`)}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                {t(`insights.categories.${INSIGHTS_CATEGORIES.find(c => c.id === selectedCategory)?.translationKey || 'all'}.desc`)}
              </p>
            </div>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => onSelectCategory('all')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-deep-green bg-sage/60 hover:bg-forest hover:text-white transition-all flex-shrink-0"
              >
                Show All Practices
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
