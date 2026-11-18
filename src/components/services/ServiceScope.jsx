import { motion } from 'framer-motion';

const SCOPE_PHOTOS = [
  '/images/photo-carbon-markets.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-green-hydrogen.jpg',
  '/images/photo-sustainable-agriculture.jpg',
  '/images/photo-green-manufacturing.jpg',
  '/images/photo-institutional-forum.jpg'
];

export default function ServiceScope({
  badge = 'Advisory Scope',
  title = 'How We Can Support',
  items = []
}) {
  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          {badge && (
            <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
              {title}
            </h2>
          )}
        </motion.div>

        {/* Photo-Topped Concise Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.05 }}
              className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
                <img
                  src={SCOPE_PHOTOS[idx % SCOPE_PHOTOS.length]}
                  alt={typeof item === 'string' ? item : `Workstream ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              <div className="p-6">
                <p className="font-['Poppins',sans-serif] font-medium text-[15.5px] sm:text-[16.5px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
