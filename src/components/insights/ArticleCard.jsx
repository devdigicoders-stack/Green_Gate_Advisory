import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ArticleCard({ article, index = 0 }) {
  const { getLocalizedPath } = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(index * 0.05, 0.25) }}
      className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col justify-between group font-['Poppins',sans-serif]"
    >
      <div>
        {/* Optional Cover Image — GCC Sharp Media Frame */}
        {article.coverImage && (
          <div className="relative h-52 w-full overflow-hidden bg-[#1A5C3B]">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {article.categoryName && (
              <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase bg-[#57D182]/90 text-[#1A5C3B]">
                {article.categoryName}
              </span>
            )}
          </div>
        )}

        <div className="p-7 sm:p-8 space-y-4">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-[#7f7f7f] font-light">
            {article.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#019934]" />
                <span>{article.date}</span>
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#019934]" />
                <span>{article.readTime}</span>
              </div>
            )}
            {article.author && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#019934]" />
                <span>{article.author}</span>
              </div>
            )}
          </div>

          <h3 className="font-['Poppins',sans-serif] font-medium text-[19px] sm:text-[21px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-[14px] text-[#555555] leading-[1.7] font-light line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-7 sm:px-8 pb-7">
        <div className="pt-4 border-t border-[#efefef]">
          <Link
            to={getLocalizedPath(`/insights/${article.slug}`)}
            className="inline-flex items-center justify-between w-full text-[13.5px] font-medium text-[#1A5C3B] group-hover:text-[#019934] transition-colors"
          >
            <span>Read Publication</span>
            <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
