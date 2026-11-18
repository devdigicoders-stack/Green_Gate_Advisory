import { motion } from 'framer-motion';

const PROCESS_PHOTOS = [
  '/images/photo-institutional-forum.jpg',
  '/images/photo-mrv-monitoring.jpg',
  '/images/photo-green-manufacturing.jpg',
  '/images/photo-green-hydrogen.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-carbon-markets.jpg'
];

export default function ServiceProcess({
  badge = 'Methodology & Process',
  title = 'Delivery Pathway',
  steps = []
}) {
  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          {badge && (
            <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-white leading-[1.16]">
              {title}
            </h2>
          )}
        </motion.div>

        {/* Photo-Topped Concise Delivery Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((st, idx) => {
            const phaseNum = st.step || (idx < 9 ? `0${idx + 1}` : idx + 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: 'easeOut' }}
                className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] rounded-[4px] overflow-hidden transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#144A2F]">
                  <img
                    src={PROCESS_PHOTOS[idx % PROCESS_PHOTOS.length]}
                    alt={st.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase bg-[#1A5C3B]/90 text-[#57D182] px-2.5 py-0.5">
                    {phaseNum}
                  </span>
                </div>

                <div className="p-6 space-y-2 flex-1">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[17px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                    {st.title}
                  </h3>
                  {st.desc && (
                    <p className="font-['Poppins',sans-serif] font-light text-[13px] text-white/80 leading-[1.6] line-clamp-2">
                      {st.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
