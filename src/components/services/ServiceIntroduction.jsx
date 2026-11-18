import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function resolveServicePhoto(pathname) {
  const p = pathname.toLowerCase();
  if (p.includes('carbon-market')) return '/images/photo-carbon-markets.jpg';
  if (p.includes('ets')) return '/images/photo-ets-pricing.jpg';
  if (p.includes('cbam')) return '/images/photo-cbam-industry.jpg';
  if (p.includes('climate-finance')) return '/images/photo-climate-finance.jpg';
  if (p.includes('nature-based')) return '/images/forestry.jpg';
  if (p.includes('climate-policy')) return '/images/photo-climate-policy.jpg';
  if (p.includes('corporate-climate')) return '/images/photo-corporate-esg.jpg';
  return '/images/photo-advisory-office.jpg';
}

export default function ServiceIntroduction({
  eyebrow = 'Strategic Context',
  heading,
  text,
  sideContent = null,
  image = null
}) {
  const { pathname } = useLocation();
  const featurePhoto = image || resolveServicePhoto(pathname);

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Introduction Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            )}

            {heading && (
              <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[38px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
                {heading}
              </h2>
            )}

            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#3C3C3C] leading-[1.72]">
              {text}
            </p>
          </motion.div>

          {/* Right Column: Editorial Daylight Photograph + Optional Side Callout */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-0 rounded-[4px] border border-[#e5e7eb] overflow-hidden bg-[#f7f7f7]"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
              <img
                src={featurePhoto}
                alt={heading || eyebrow}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {sideContent && (
              <div className="p-6 sm:p-7 space-y-3 border-t-2 border-t-[#019934]">
                {sideContent}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
