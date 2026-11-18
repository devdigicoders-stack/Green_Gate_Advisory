import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  ArrowUp,
  ShieldCheck,
  Sprout,
  MapPin,
  MessageCircle
} from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';
import { CONTACT_CONFIG } from '../../config/contactConfig';

export default function Footer() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const QUICK_LINKS = [
    { label: t('navigation.home', 'Home'), path: '/' },
    { label: t('navigation.about', 'About Us'), path: '/about-us' },
    { label: t('navigation.services', 'Services'), path: '/services' },
    { label: t('navigation.sectors', 'Sectors'), path: '/sectors' },
    { label: t('navigation.whoWeServe', 'Who We Serve'), path: '/who-we-serve' },
    { label: 'Capital & Proposals', path: '/services/climate-finance-advisory' },
    { label: t('navigation.training', 'Training'), path: '/training' },
    { label: 'Join as Expert / Consultant', path: '/contact?type=expert' },
    { label: t('navigation.contact', 'Contact'), path: '/contact' },
    { label: t('footer.privacyPolicy', 'Privacy Policy'), path: '/privacy-policy', isHighlighted: true }
  ];

  const quickLinksCol1 = QUICK_LINKS.slice(0, 5);
  const quickLinksCol2 = QUICK_LINKS.slice(5);

  return (
    <footer className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 overflow-hidden">
      {/* Preserved Botanical Background Texture softly blended into Deep Navy */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.06] mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}
      />

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto">
        {/* ============================================================
            UPPER ZONE: GCC ASYMMETRIC 2-ZONE INSTITUTIONAL GRID
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 sm:pb-16">
          {/* LEFT ZONE (~58%): Link Columns + Direct Teal-Icon Contact Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12 sm:space-y-14">
            {/* Upper Link Columns (Exact GCC Mint Uppercase Headers + Crisp White Light Links) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-8">
              {/* Key Services Column */}
              <div className="sm:col-span-6 space-y-5">
                <h3 className="font-['Poppins',sans-serif] text-[13.5px] font-medium uppercase tracking-[0.14em] text-[#57D182]">
                  {t('footer.keyServices', 'KEY SERVICES')}
                </h3>

                <ul className="space-y-3">
                  {SERVICES_LIST.map((srv) => (
                    <li key={srv.key}>
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="text-[14.5px] font-light text-white/95 hover:text-[#57D182] transition-colors duration-200 inline-block leading-snug"
                      >
                        {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Columns (Balanced 2-Subcolumn Layout matching GCC 3-Column Rhythm) */}
              <div className="sm:col-span-6 space-y-5">
                <h3 className="font-['Poppins',sans-serif] text-[13.5px] font-medium uppercase tracking-[0.14em] text-[#57D182]">
                  {t('footer.quickLinks', 'QUICK LINKS')}
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <ul className="space-y-3">
                    {quickLinksCol1.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={getLocalizedPath(item.path)}
                          className="text-[14.5px] font-light text-white/95 hover:text-[#57D182] transition-colors duration-200 inline-block leading-snug"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3">
                    {quickLinksCol2.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={getLocalizedPath(item.path)}
                          className={`text-[14.5px] transition-colors duration-200 inline-block leading-snug ${
                            item.isHighlighted
                              ? 'font-normal text-[#57D182] hover:text-white'
                              : 'font-light text-white/95 hover:text-[#57D182]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Contact Grid (Exact GCC Thin Teal Line-Icons Above Clean Labels) */}
            <div className="space-y-7 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsapp.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block space-y-2 focus:outline-none"
                >
                  <MessageCircle className="w-7 h-7 text-[#57D182] stroke-[1.35] group-hover:text-[#57D182] transition-colors" />
                  <div className="text-[13.5px] font-light text-white/70">
                    WhatsApp · Chat
                  </div>
                  <div className="text-[15px] font-light text-white group-hover:text-[#57D182] transition-colors">
                    {CONTACT_CONFIG.whatsapp.display}
                  </div>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="group block space-y-2 focus:outline-none"
                >
                  <Mail className="w-7 h-7 text-[#57D182] stroke-[1.35] group-hover:text-[#57D182] transition-colors" />
                  <div className="text-[13.5px] font-light text-white/70">
                    Email
                  </div>
                  <div className="text-[15px] font-light text-white group-hover:text-[#57D182] transition-colors break-all">
                    {CONTACT_CONFIG.email}
                  </div>
                </a>
              </div>

              {/* Headquarters Location */}
              <a
                href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on Google Maps"
                className="group block space-y-2 max-w-xl focus:outline-none"
              >
                <MapPin className="w-7 h-7 text-[#57D182] stroke-[1.35] group-hover:text-[#57D182] transition-colors" />
                <div className="text-[14.5px] font-light text-white/85 group-hover:text-[#57D182] transition-colors leading-relaxed">
                  {CONTACT_CONFIG.address.street}, {CONTACT_CONFIG.address.postalCode} {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.country}
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT ZONE (~42%): Two Stacked Elevated Navy Glass Cards (Exact GCC Footer Card Style) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Elevated Card 1: Brand Statement & Language Selector */}
            <div className="bg-[#246E49]/70 border border-white/15 rounded-[12px] p-7 sm:p-8 shadow-[0_12px_30px_rgba(14,58,36,0.22)] space-y-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Logo variant="white" imgClassName="h-11 sm:h-13 w-auto" />
                <div className="flex items-center gap-2.5">
                  <span className="text-[12.5px] font-light text-white/70">Language / Idioma:</span>
                  <LanguageSwitcher isDark={false} />
                </div>
              </div>

              <p className="font-['Poppins',sans-serif] text-[14px] font-light text-white/85 leading-[1.7]">
                {t(
                  'footer.brandTagline',
                  'Green Gate Advisory is an environmental, climate and carbon market advisory consultancy supporting governments, businesses, exporters, project developers, investors and institutions.'
                )}
              </p>
            </div>

            {/* Elevated Card 2: Governance Safeguard & Independence Notice */}
            <div className="bg-[#246E49]/70 border border-white/15 rounded-[12px] p-7 sm:p-8 shadow-[0_12px_30px_rgba(14,58,36,0.22)] space-y-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#57D182] stroke-[1.5] flex-shrink-0 mt-0.5" />
                <p className="font-['Poppins',sans-serif] text-[13.5px] font-light text-white/90 leading-[1.65]">
                  {t(
                    'footer.confidentiality',
                    'Case studies and specific client references are published only following formal verification and client consent.'
                  )}
                </p>
              </div>

              <div className="border-t border-white/12 pt-5 flex items-start gap-3.5">
                <Sprout className="w-6 h-6 text-[#57D182] stroke-[1.5] flex-shrink-0 mt-0.5" />
                <p className="font-['Poppins',sans-serif] text-[13px] font-light text-white/75 leading-[1.65]">
                  {t(
                    'footer.disclaimer',
                    'Green Gate Advisory provides independent technical, regulatory and project advisory. We do not provide guaranteed funding outcomes or carbon credit issuances, which remain subject to independent registries and funding bodies.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM LEGAL BAR (Exact GCC Logo + Divider + Copyright + Circular Teal GO TO TOP)
           ============================================================ */}
        <div className="pt-8 border-t border-white/12 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: White Monochrome Logo + Thin Vertical Divider + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <Logo variant="white" imgClassName="h-9 sm:h-10 w-auto" />
            <span className="hidden sm:block h-8 w-[1px] bg-white/25" aria-hidden="true" />
            <div className="text-[13.5px] font-light text-white/70">
              © {new Date().getFullYear()} {t('footer.copyright', 'All rights reserved. Green Gate Advisory.')} • Barcelona, Spain
            </div>
          </div>

          {/* Center: Credit Link */}
          <div className="text-[13px] font-light text-white/70 text-center">
            Designed and Developed by{' '}
            <a
              href="https://www.worknestconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#57D182] hover:text-[#57D182] transition-colors duration-200"
            >
              Worknest Connect
            </a>
          </div>

          {/* Right: Teal Quick Contact Icons + Iconic GCC Circular Outline Back-to-Top Button */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[#57D182]">
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                aria-label={`Email ${CONTACT_CONFIG.email}`}
                className="hover:text-[#57D182] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 stroke-[1.6]" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_CONFIG.whatsapp.raw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#57D182] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 stroke-[1.6]" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-3 text-[12px] font-normal uppercase tracking-[0.16em] text-white/75 hover:text-[#57D182] transition-colors duration-200 group cursor-pointer focus:outline-none"
            >
              <span>Back to top</span>
              <span className="w-10 h-10 rounded-full border border-[#57D182] text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-all duration-200">
                <ArrowUp className="w-4 h-4 stroke-[1.6] group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
