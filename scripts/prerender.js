import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.VITE_SITE_URL || 'https://greengateadvisory.com';
const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.resolve(DIST_DIR, 'index.html');
const LOCALES_DIR = path.resolve(__dirname, '../src/i18n/locales');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`[Prerender] Error: Template file not found at ${TEMPLATE_PATH}. Run 'vite build' first.`);
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Helper to read JSON locale file safely
function loadLocaleJson(lang, ns) {
  const filePath = path.join(LOCALES_DIR, lang, `${ns}.json`);
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Pre-load all translation dictionaries
const dictionaries = {
  en: {
    meta: loadLocaleJson('en', 'meta'),
    home: loadLocaleJson('en', 'home'),
    about: loadLocaleJson('en', 'about'),
    services: loadLocaleJson('en', 'services'),
    sectors: loadLocaleJson('en', 'sectors'),
    audience: loadLocaleJson('en', 'audience'),
    insights: loadLocaleJson('en', 'insights'),
    training: loadLocaleJson('en', 'training'),
    contact: loadLocaleJson('en', 'contact'),
    privacy: loadLocaleJson('en', 'privacy'),
  },
  es: {
    meta: loadLocaleJson('es', 'meta'),
    home: loadLocaleJson('es', 'home'),
    about: loadLocaleJson('es', 'about'),
    services: loadLocaleJson('es', 'services'),
    sectors: loadLocaleJson('es', 'sectors'),
    audience: loadLocaleJson('es', 'audience'),
    insights: loadLocaleJson('es', 'insights'),
    training: loadLocaleJson('es', 'training'),
    contact: loadLocaleJson('es', 'contact'),
    privacy: loadLocaleJson('es', 'privacy'),
  }
};

// Route manifest covering all 32 indexable routes
const routes = [
  // Primary Pages
  { path: '', metaKey: 'home', type: 'home' },
  { path: 'about-us', metaKey: 'about', type: 'about' },
  { path: 'services', metaKey: 'services', type: 'services' },
  { path: 'sectors', metaKey: 'sectors', type: 'sectors' },
  { path: 'who-we-serve', metaKey: 'whoWeServe', type: 'audience' },
  { path: 'insights', metaKey: 'insights', type: 'insights' },
  { path: 'training', metaKey: 'training', type: 'training' },
  { path: 'contact', metaKey: 'contact', type: 'contact' },
  { path: 'privacy-policy', metaKey: 'privacy', type: 'privacy' },

  // 7 Dedicated Service Pages
  { path: 'services/carbon-market-advisory', metaKey: 'carbonMarket', serviceKey: 'carbonMarket', type: 'service' },
  { path: 'services/ets-carbon-pricing-article-6', metaKey: 'ets', serviceKey: 'ets', type: 'service' },
  { path: 'services/cbam-advisory', metaKey: 'cbam', serviceKey: 'cbam', type: 'service' },
  { path: 'services/climate-finance-advisory', metaKey: 'climateFinance', serviceKey: 'climateFinance', type: 'service' },
  { path: 'services/nature-based-solutions', metaKey: 'natureBased', serviceKey: 'natureBased', type: 'service' },
  { path: 'services/climate-policy-advisory', metaKey: 'climatePolicy', serviceKey: 'climatePolicy', type: 'service' },
  { path: 'services/corporate-climate-esg', metaKey: 'corporateClimate', serviceKey: 'corporateClimate', type: 'service' },
];

function generateStructuredData(route, lang, meta) {
  const url = `${BASE_URL}/${lang}${route.path ? `/${route.path}` : ''}`;
  
  if (route.type === 'home') {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Green Gate Advisory",
      "url": url,
      "description": meta.description,
      "serviceType": [
        "Carbon Market Advisory",
        "CBAM Advisory",
        "Emissions Trading System (ETS) Advisory",
        "Climate Finance Advisory",
        "Nature-Based Solutions",
        "Environmental & Climate Policy",
        "Corporate Climate & ESG"
      ],
      "inLanguage": lang
    };
  }

  if (route.type === 'about') {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": meta.title,
      "url": url,
      "description": meta.description,
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Green Gate Advisory",
        "url": `${BASE_URL}/${lang}`,
        "inLanguage": lang
      }
    };
  }

  if (route.type === 'contact') {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": meta.title,
      "url": url,
      "description": meta.description,
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Green Gate Advisory",
        "url": `${BASE_URL}/${lang}`
      }
    };
  }

  if (route.type === 'service') {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": meta.title,
      "serviceType": meta.title,
      "description": meta.description,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Green Gate Advisory",
        "url": `${BASE_URL}/${lang}`
      },
      "areaServed": "Global",
      "inLanguage": lang
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": meta.title,
    "url": url,
    "description": meta.description,
    "inLanguage": lang
  };
}

function buildSemanticCrawlableHtml(route, lang, meta, dict) {
  const brandTitle = "Green Gate Advisory";
  const consultUrl = `/${lang}/contact`;
  const consultText = lang === 'es' ? "Solicitar una Consulta" : "Request a Consultation";
  const homeText = lang === 'es' ? "Inicio" : "Home";
  const servicesText = lang === 'es' ? "Servicios" : "Services";

  let bodyContent = `
    <header class="py-6 px-4 border-b border-sand-border/40">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/${lang}" class="text-xl font-bold font-heading text-forest">${brandTitle}</a>
        <nav aria-label="Main Navigation" class="flex gap-4 text-xs font-semibold">
          <a href="/${lang}" class="hover:text-gold">${homeText}</a>
          <a href="/${lang}/about-us" class="hover:text-gold">${lang === 'es' ? 'Nosotros' : 'About'}</a>
          <a href="/${lang}/services" class="hover:text-gold">${servicesText}</a>
          <a href="/${lang}/sectors" class="hover:text-gold">${lang === 'es' ? 'Sectores' : 'Sectors'}</a>
          <a href="/${lang}/who-we-serve" class="hover:text-gold">${lang === 'es' ? 'A Quién Servimos' : 'Who We Serve'}</a>
          <a href="/${lang}/insights" class="hover:text-gold">${lang === 'es' ? 'Perspectivas' : 'Insights'}</a>
          <a href="/${lang}/training" class="hover:text-gold">${lang === 'es' ? 'Capacitación' : 'Training'}</a>
          <a href="/${lang}/contact" class="hover:text-gold">${lang === 'es' ? 'Contacto' : 'Contact'}</a>
        </nav>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <div class="space-y-4">
        <nav aria-label="Breadcrumbs" class="text-xs text-charcoal-muted">
          <a href="/${lang}">${homeText}</a> &rsaquo; <span>${meta.title}</span>
        </nav>
        <h1 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
          ${meta.title}
        </h1>
        <p class="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-3xl">
          ${meta.description}
        </p>
      </div>
  `;

  if (route.type === 'service' && route.serviceKey) {
    const srv = dict.services?.items?.[route.serviceKey] || {};
    bodyContent += `
      <section class="space-y-6 pt-6 border-t border-sand-border/60">
        <h2 class="text-xl font-bold text-forest">${srv.scopeHeading || (lang === 'es' ? 'Alcance del Servicio' : 'Service Scope')}</h2>
        <p class="text-sm text-charcoal leading-relaxed">${srv.intro || ''}</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-sm text-charcoal-muted list-disc pl-5">
          ${(srv.scopeItems || []).map(item => `<li>${item}</li>`).join('')}
        </ul>
      </section>
      <section class="space-y-4 pt-6">
        <h2 class="text-xl font-bold text-forest">${srv.processHeading || (lang === 'es' ? 'Ruta de Ejecución' : 'Project Pathway')}</h2>
        <ol class="space-y-2 text-sm text-charcoal-muted list-decimal pl-5">
          ${(srv.processSteps || []).map(step => `<li><strong>${step.title}:</strong> ${step.desc}</li>`).join('')}
        </ol>
      </section>
    `;
  }

  bodyContent += `
      <div class="pt-8 flex gap-4">
        <a href="${consultUrl}" class="px-6 py-3 rounded-xl bg-forest text-white font-semibold text-sm hover:bg-forest-dark transition-colors">${consultText}</a>
        <a href="/${lang}/services" class="px-6 py-3 rounded-xl border border-sand-border bg-white text-forest font-semibold text-sm hover:bg-sand-surface transition-colors">${servicesText}</a>
      </div>
    </main>
    <footer class="py-12 border-t border-sand-border text-center text-xs text-charcoal-muted">
      <p>&copy; ${new Date().getFullYear()} ${brandTitle}. All rights reserved.</p>
    </footer>
  `;

  return bodyContent;
}

let generatedCount = 0;

for (const lang of ['en', 'es']) {
  const dict = dictionaries[lang];
  const metaObj = dict.meta || {};

  for (const route of routes) {
    const meta = metaObj[route.metaKey] || {
      title: `${metaObj.siteTitle || 'Green Gate Advisory'}`,
      description: metaObj.home?.description || 'Climate and environmental advisory.'
    };

    const cleanPath = route.path ? `/${route.path}` : '';
    const canonicalUrl = `${BASE_URL}/${lang}${cleanPath}`;
    const enUrl = `${BASE_URL}/en${cleanPath}`;
    const esUrl = `${BASE_URL}/es${cleanPath}`;

    const structuredData = generateStructuredData(route, lang, meta);
    const crawlableHtml = buildSemanticCrawlableHtml(route, lang, meta, dict);

    let html = templateHtml;

    // 1. Language attribute on <html>
    html = html.replace(/<html[^>]*>/i, `<html lang="${lang}" class="scroll-smooth">`);

    // 2. Title replacement
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${meta.title}</title>`);
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, '');

    // 3. Head metadata injection
    const metaTags = `
    <!-- Primary SEO Metadata (Prerendered) -->
    <meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="es" href="${esUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enUrl}" />

    <!-- Open Graph Sharing -->
    <meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_US'}" />
    <meta property="og:site_name" content="Green Gate Advisory" />

    <!-- Twitter / X Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${meta.description.replace(/"/g, '&quot;')}" />

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
    `;

    // Inject before </head>
    html = html.replace('</head>', `${metaTags}\n  </head>`);

    // 4. Inject semantic crawlable HTML for SEO search crawlers
    // Wrapped in <noscript> so that browser clients running JavaScript immediately mount React without flashing raw crawler fallback HTML
    const noscriptCrawlableHtml = `<noscript>${crawlableHtml}</noscript>`;
    html = html.replace('<div id="root" class="min-h-screen flex flex-col"></div>', `<div id="root" class="min-h-screen flex flex-col">${noscriptCrawlableHtml}</div>`);

    // Determine target output directory
    const targetDir = route.path 
      ? path.join(DIST_DIR, lang, route.path)
      : path.join(DIST_DIR, lang);

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');

    // Also write a flat HTML file (e.g. dist/en.html or dist/en/about-us.html) for hosts that support clean URLs without trailing slash
    if (route.path) {
      const parentDir = path.dirname(path.join(DIST_DIR, lang, `${route.path}.html`));
      fs.mkdirSync(parentDir, { recursive: true });
      fs.writeFileSync(path.join(DIST_DIR, lang, `${route.path}.html`), html, 'utf-8');
    } else {
      fs.writeFileSync(path.join(DIST_DIR, `${lang}.html`), html, 'utf-8');
    }

    generatedCount++;
  }
}

console.log(`[Prerender] Successfully generated ${generatedCount} static crawlable HTML pages for English and Spanish routes!`);
