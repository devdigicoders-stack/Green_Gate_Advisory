import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ArticleCard({ article, index = 0 }) {
  const { getLocalizedPath } = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="rounded-3xl bg-white border border-sand-border/90 overflow-hidden shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Optional Cover Image */}
        {article.coverImage && (
          <div className="relative h-48 w-full overflow-hidden bg-forest/5">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {article.categoryName && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-forest/90 text-gold-light backdrop-blur-sm">
                {article.categoryName}
              </span>
            )}
          </div>
        )}

        <div className="p-7 sm:p-8 space-y-4">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-charcoal/80 font-sans font-medium">
            {article.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold-dark" />
                <span>{article.date}</span>
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-dark" />
                <span>{article.readTime}</span>
              </div>
            )}
            {article.author && (
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-gold-dark" />
                <span>{article.author}</span>
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-deep-green transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-base sm:text-[16.5px] text-charcoal/90 leading-relaxed font-sans font-normal line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="p-7 sm:p-8 pt-0">
        <div className="pt-4 border-t border-sand-border/60">
          <Link
            to={getLocalizedPath(`/insights/${article.slug}`)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green group-hover:text-forest transition-colors"
          >
            <span>Read Publication</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
