import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';
import logoOriginal from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';

export default function Logo({ 
  variant = 'default', 
  className = '',
  imgClassName = 'h-10 sm:h-12 w-auto'
}) {
  const { getLocalizedPath } = useLocale();

  const isLight = variant === 'light' || variant === 'white';
  const logoSrc = isLight ? logoWhite : logoOriginal;

  return (
    <Link 
      to={getLocalizedPath('/')}
      className={`inline-flex items-center group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus:border-none border-none select-none transition-all duration-200 hover:opacity-95 ${className}`}
      aria-label="Green Gate Advisory Home"
    >
      <img
        src={logoSrc}
        alt="Green Gate Advisory"
        className={`${imgClassName} object-contain transition-all duration-300 group-hover:scale-102 ${isLight ? 'brightness-0 invert' : ''}`}
        loading="eager"
        decoding="async"
        onError={(e) => {
          // Fallback to static public logo if asset bundle has any path resolution delay
          if (e.currentTarget.src !== window.location.origin + '/images/Green_gate_Logo_Concept_01-removebg-preview.png') {
            e.currentTarget.src = '/images/Green_gate_Logo_Concept_01-removebg-preview.png';
          }
        }}
      />
    </Link>
  );
}
