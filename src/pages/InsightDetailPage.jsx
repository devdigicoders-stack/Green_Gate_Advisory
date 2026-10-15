import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Calendar, ShieldAlert } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import ClosingCTA from '../components/sections/ClosingCTA';
import NotFoundPage from './NotFoundPage';
import { useLocale } from '../hooks/useLocale';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawArticles = t('insights.featuredArticles', { returnObjects: true }) || [];
  const articlesList = Array.isArray(rawArticles) ? rawArticles : [];

  const article = articlesList.find((a) => a.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const paragraphs = Array.isArray(article.content) ? article.content : [article.summary];

  return (
    <div className="space-y-16 sm:space-y-24 py-12 sm:py-16">
      <MetaTags 
        title={`${article.title} | Green Gate Advisory`}
        description={article.summary}
        ogType="article"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted" aria-label="Breadcrumbs">
          <Link to={getLocalizedPath('/')} className="hover:text-forest transition-colors">
            {t('nav.home', 'Home')}
          </Link>
          <span>/</span>
          <Link to={getLocalizedPath('/insights')} className="hover:text-forest transition-colors">
            {t('nav.insights', 'Insights')}
          </Link>
          <span>/</span>
          <span className="text-forest font-semibold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Header */}
        <header className="space-y-4 border-b border-sand-border pb-8">
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-forest text-gold-light uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-charcoal-muted">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-charcoal-muted">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans pt-2 italic border-l-2 border-gold pl-4">
            {article.summary}
          </p>
        </header>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-charcoal space-y-6 font-sans leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg text-charcoal/90 leading-loose">
              {p}
            </p>
          ))}
        </div>

        {/* Editorial Disclaimer Notice */}
        <div className="p-6 rounded-2xl bg-sage border border-sand-border text-xs sm:text-sm text-charcoal-muted space-y-2">
          <div className="font-bold text-forest flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-gold-dark" />
            <span>Advisory Notice & Disclaimer</span>
          </div>
          <p>
            This article provides technical insights based on current regulatory and market rules. Carbon market methodologies and EU CBAM specifications are subject to revision by standard secretariats and statutory bodies.
          </p>
        </div>

        {/* Back Link */}
        <div className="pt-4 border-t border-sand-border">
          <Link to={getLocalizedPath('/insights')} className="link-editorial text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to all Insights & Resources</span>
          </Link>
        </div>
      </article>

      <ClosingCTA />
    </div>
  );
}
