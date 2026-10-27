import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

// Mathematical SVG Flags: ultra-crisp and lightweight
export function UkFlag({ className = "w-4 h-3 rounded-xs shadow-xs" }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <clipPath id="uk-flag-clip">
        <path d="M0 0v30h60V0z"/>
      </clipPath>
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

export function SpainFlag({ className = "w-4 h-3 rounded-xs shadow-xs" }) {
  return (
    <svg className={className} viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="750" height="500" fill="#c60b1e"/>
      <rect width="750" height="250" y="125" fill="#ffc400"/>
      <circle cx="210" cy="250" r="38" fill="#c60b1e" opacity="0.85"/>
      <circle cx="210" cy="250" r="22" fill="#ffc400"/>
    </svg>
  );
}

export default function LanguageSwitcher({ 
  className = '', 
  isDark = false 
}) {
  const { locale, switchLanguage } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    switchLanguage(lang);
    setIsOpen(false);
  };

  const FlagIcon = locale === 'es' ? SpainFlag : UkFlag;

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select language, current is ${locale.toUpperCase()}`}
        className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-semibold tracking-wider transition-all duration-200 border ${
          isDark
            ? 'border-[#D0D9D0] text-[#1E2522] hover:border-[#019935] hover:text-[#019935] bg-white shadow-xs'
            : 'border-white/35 text-white hover:border-white/70 hover:bg-white/10 bg-white/5'
        }`}
      >
        <FlagIcon className="w-4 h-3 rounded-xs flex-shrink-0 object-cover" />
        <span className="font-mono text-[11px] font-bold text-inherit">{locale.toUpperCase()}</span>
        <ChevronDown 
          className={`w-3 h-3 opacity-90 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-sand-border py-1.5 z-50 text-xs font-display animate-in fade-in slide-in-from-top-1"
          role="menu"
          aria-label="Language options"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => handleSelect('en')}
            className={`w-full px-3 py-2 flex items-center justify-between text-left hover:bg-sage/70 transition-colors ${
              locale === 'en' ? 'font-bold text-black bg-sage/40' : 'text-black font-medium'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <UkFlag className="w-4 h-3 rounded-xs" />
              <span>English</span>
            </span>
            {locale === 'en' && <Check className="w-3.5 h-3.5 text-black" />}
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => handleSelect('es')}
            className={`w-full px-3 py-2 flex items-center justify-between text-left hover:bg-sage/70 transition-colors ${
              locale === 'es' ? 'font-bold text-black bg-sage/40' : 'text-black font-medium'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <SpainFlag className="w-4 h-3 rounded-xs" />
              <span>Español</span>
            </span>
            {locale === 'es' && <Check className="w-3.5 h-3.5 text-black" />}
          </button>
        </div>
      )}
    </div>
  );
}
