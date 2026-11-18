import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../../assets/logo-white.png';

export function StandaloneLoader() {
  return null;
}

export default function RouteTransitionLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const prevPathRef = useRef(location.pathname);
  const timerRef = useRef(null);

  // 1. Initial mount load: runs ONCE on page load/refresh
  useEffect(() => {
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Exactly 1.0 second (1000ms)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // 2. Subsequent Route Navigation: triggers ONLY when pathname actually changes
  useEffect(() => {
    // Prevent double trigger on initial redirect from '/' to '/en' or '/en/'
    const isRootRedirect =
      (prevPathRef.current === '/' && (location.pathname === '/en' || location.pathname === '/en/'));

    if (prevPathRef.current !== location.pathname) {
      const oldPath = prevPathRef.current;
      prevPathRef.current = location.pathname;

      if (!isRootRedirect && oldPath !== location.pathname) {
        setIsLoading(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Exactly 1.0 second (1000ms)
      }
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="global-route-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-[#1A5C3B] font-['Poppins',sans-serif] flex flex-col items-center justify-center p-6 select-none pointer-events-auto overflow-hidden"
        >
          {/* Subtle GCC Concentric Arc Watermark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            fill="none"
            className="pointer-events-none absolute -left-24 -bottom-24 w-[440px] sm:w-[560px] h-auto opacity-[0.08]"
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <circle
                key={idx}
                cx="200"
                cy="400"
                r={55 + idx * 24}
                stroke="#ffffff"
                strokeWidth="1.2"
              />
            ))}
          </svg>

          {/* Subtle Brand-Green Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,153,52,0.24)_0%,rgba(26,92,59,0.96)_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm text-center">
            {/* Animated Brand Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.94, 1.02, 0.96], opacity: [0.4, 1, 1] }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              <img
                src={logoWhite}
                alt="Green Gate Advisory"
                className="h-14 sm:h-16 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = '/images/Green_gate_Logo_Concept_01-removebg-preview.png';
                }}
              />
            </motion.div>

            {/* High-Precision Scanning Progress Line — GCC Teal */}
            <div className="w-52 sm:w-64 h-[2.5px] bg-white/15 relative overflow-hidden rounded-none">
              <motion.div
                key={location.pathname}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.95, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#019934] via-[#57D182] to-[#019934]"
              />
            </div>

            {/* Brand Label & Tagline */}
            <div className="space-y-1.5 pt-0.5">
              <div className="text-[11.5px] sm:text-[12.5px] font-medium tracking-[0.25em] text-[#57D182] uppercase">
                GREEN GATE ADVISORY
              </div>
              <p className="text-[12.5px] sm:text-[13.5px] text-white/75 font-light tracking-wide">
                Strategic Climate Execution
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
