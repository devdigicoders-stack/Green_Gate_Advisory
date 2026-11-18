import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';
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
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('insights.articles.eyebrow', 'Analytical Briefings')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('insights.articles.heading', 'Featured Insights & Briefings')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('insights.articles.subtitle', 'In-depth technical papers and regulatory interpretations prepared by our advisory team.')}
          </p>
        </motion.div>

        {hasArticles ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredArticles.map((art, idx) => (
              <ArticleCard key={art.id || idx} article={art} index={idx} />
            ))}
          </div>
        ) : (
          /* Clean GCC Architectural Empty State */
          <div className="relative rounded-[4px] bg-[#57D182]/10 border border-[#019934]/30 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-7 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

            <div className="w-14 h-14 rounded-[5px] bg-white border border-[#e5e7eb] mx-auto flex items-center justify-center text-[#019934]">
              <Clock className="w-7 h-7 stroke-[1.6]" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.16em] bg-[#57D182]/30 text-[#1A5C3B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A7A32]" />
                <span>{t('insights.articles.emptyState.badge', 'Publication Pipeline')}</span>
              </div>

              <h3 className="font-['Poppins',sans-serif] font-medium text-[24px] sm:text-[30px] text-[#1A5C3B] tracking-[-0.01em] leading-snug">
                {t('insights.articles.emptyState.title', 'Insights and resources will be available here as they are published.')}
              </h3>

              <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.72]">
                {t('insights.articles.emptyState.lead', 'Our knowledge resources are currently being prepared and reviewed in accordance with verified technical standards. To discuss specific sector requirements or regulatory guidance, connect with our advisory practice.')}
              </p>
            </div>

            {/* GCC Primary & Outline Button Pair */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to={getLocalizedPath('/services')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200 inline-flex items-center justify-center gap-2 group"
              >
                <span>{t('insights.articles.emptyState.primaryBtn', 'Explore Advisory Services')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={getLocalizedPath('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-[5px] bg-white hover:bg-[#019934] text-[#019934] hover:text-white font-['Poppins',sans-serif] font-normal text-[14.5px] border border-[#019934] transition-colors duration-200 inline-flex items-center justify-center"
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
