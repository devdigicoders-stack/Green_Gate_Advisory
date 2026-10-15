import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';

export default function MetaTags({ 
  title, 
  description, 
  structuredData = null,
  ogType = 'website',
  noIndex = false 
}) {
  const { locale } = useLocale();
  const location = useLocation();

  const siteOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://greengateadvisory.com';
  const cleanPath = location.pathname.replace(/^\/(en|es)(\/|$)/, '/');
  const canonicalUrl = `${siteOrigin}/${locale}${cleanPath === '/' ? '' : cleanPath}`;
  const enUrl = `${siteOrigin}/en${cleanPath === '/' ? '' : cleanPath}`;
  const esUrl = `${siteOrigin}/es${cleanPath === '/' ? '' : cleanPath}`;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content || '');
    };

    // Description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // Open Graph & Twitter basics
    setMetaTag('property', 'og:title', title || 'Green Gate Advisory');
    setMetaTag('name', 'twitter:title', title || 'Green Gate Advisory');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', locale === 'es' ? 'es_ES' : 'en_US');
    setMetaTag('property', 'og:site_name', 'Green Gate Advisory');
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // Robots meta (e.g. For unpublished /case-studies or staging)
    if (noIndex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }

    // 3. Helper to update link tags
    const setLinkTag = (rel, hreflang, href) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]` 
        : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setLinkTag('canonical', null, canonicalUrl);
    setLinkTag('alternate', 'en', enUrl);
    setLinkTag('alternate', 'es', esUrl);
    setLinkTag('alternate', 'x-default', enUrl);

    // 4. Structured Data (JSON-LD)
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId);

    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, structuredData, ogType, noIndex, canonicalUrl, enUrl, esUrl, locale]);

  return null;
}
