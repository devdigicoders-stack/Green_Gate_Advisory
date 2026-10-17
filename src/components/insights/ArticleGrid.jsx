import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ArticleCard from './ArticleCard';
import { useLocale } from '../../hooks/useLocale';

export default function ArticleGrid({ articles = [], selectedCategory = 'all' }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  // Filter articles if any exist and a specific category is selected
  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(a => a.categoryId === selectedCategory);

  const hasArticles = filteredArticles.length > 0;

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('insights.articles.eyebrow', 'Analytical Briefings')}
          title={t('insights.articles.heading', 'Featured Insights & Briefings')}
          subtitle={t('insights.articles.subtitle', 'In-depth technical papers and regulatory interpretations prepared by our advisory team.')}
        />

        {hasArticles ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <ArticleCard key={art.id || idx} article={art} index={idx} />
            ))}
          </div>
        ) : (
          /* Polished, Source-Grounded Empty State */
          <div className="rounded-3xl bg-sage/30 border border-sand-border/80 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-8 shadow-subtle">
            <div className="w-16 h-16 rounded-3xl bg-white border border-sand-border mx-auto flex items-center justify-center text-forest shadow-sm">
              <Clock className="w-8 h-8 text-gold-dark" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest/5 text-deep-green">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
                <span>{t('insights.articles.emptyState.badge', 'Publication Pipeline')}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight">
                {t('insights.articles.emptyState.title', 'Insights and resources will be available here as they are published.')}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                {t('insights.articles.emptyState.lead', 'Our knowledge resources are currently being prepared and reviewed in accordance with verified technical standards. To discuss specific sector requirements or regulatory guidance, connect with our advisory practice.')}
              </p>
            </div>

            {/* CTAs linking to services and contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to={getLocalizedPath('/services')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow inline-flex items-center justify-center gap-2"
              >
                <span>{t('insights.articles.emptyState.primaryBtn', 'Explore Advisory Services')}</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>

              <Link
                to={getLocalizedPath('/contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-forest/5 text-forest font-sans font-semibold text-xs tracking-wider uppercase border border-sand-border transition-all inline-flex items-center justify-center"
              >
                <span>{t('insights.articles.emptyState.secondaryBtn', 'Request a Consultation')}</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
