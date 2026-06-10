import { e as createAstro, f as createComponent, h as addAttribute, l as renderScript, r as renderTemplate, n as renderSlot, o as renderHead, k as renderComponent, u as unescapeHTML, p as Fragment } from './astro/server_guQPeoM8.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';

const $$Astro$1 = createAstro("https://ecentia.es");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/node_modules/.pnpm/astro@5.16.11_@types+node@2_215407a5623f71cacc42e722364c6964/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/node_modules/.pnpm/astro@5.16.11_@types+node@2_215407a5623f71cacc42e722364c6964/node_modules/astro/components/ClientRouter.astro", void 0);

const seoConfig = {
  siteName: "Ecentia",
  siteUrl: "https://ecentia.es",
  defaultTitle: "Ecentia | Agencia Digital en Sevilla y Málaga",
  defaultDescription: "Agencia digital en Sevilla y Málaga especializada en diseño web, SEO, automatización con IA y e-commerce. Presupuesto gratis en 24h.",
  defaultImage: "/logo.png",
  twitterHandle: "@ecentia",
  companyInfo: {
    name: "Ecentia",
    legalName: "Ecentia Marketing",
    foundingDate: "2025",
    telephone: "+34655600555",
    email: "ecentiaseo@gmail.com",
    geo: {
      latitude: "37.3891",
      longitude: "-5.9845"
    },
    areasServed: ["Sevilla", "Málaga", "Córdoba", "Granada", "Cádiz", "Andalucía", "España"],
    priceRange: "€€"},
  keywords: [
    // MÁXIMA PRIORIDAD: Marca sola (ESTO ES LO MÁS IMPORTANTE)
    "ecentia",
    "esentia",
    "ecentia sevilla",
    "esentia sevilla",
    "ecentia málaga",
    "esentia málaga",
    "ecentia web",
    "esentia web",
    "ecentia digital",
    "esentia digital",
    "ecentia agencia",
    "esentia agencia",
    "ecentia.es",
    "esentia.es",
    "www.ecentia.es",
    "www.esentia.es",
    // PRIORIDAD 2: Marca + Marketing
    "ecentia marketing",
    "esentia marketing",
    "ecentia marketing sevilla",
    "esentia marketing sevilla",
    "ecentia marketing málaga",
    "esentia marketing málaga",
    // PRIORIDAD 3: Servicios con marca
    "ecentia diseño web",
    "esentia diseño web",
    "ecentia seo",
    "esentia seo",
    "ecentia desarrollo",
    "esentia desarrollo",
    // PRIORIDAD 4: Keywords de servicio genéricas
    "agencia digital sevilla",
    "agencia digital málaga",
    "diseño web sevilla",
    "diseño web málaga",
    "seo sevilla",
    "seo málaga",
    "desarrollo web sevilla",
    "ecommerce sevilla",
    "automatización marketing",
    "google ads sevilla",
    "redes sociales sevilla"
  ],
  pages: {
    home: {
      title: "Ecentia | Agencia Digital en Sevilla y Málaga",
      description: "Agencia digital en Sevilla y Málaga especializada en diseño web, SEO, automatización con IA y e-commerce. Presupuesto gratis en 24h.",
      keywords: "ecentia, esentia, ecentia sevilla, esentia sevilla, ecentia málaga, esentia málaga, ecentia marketing, esentia marketing, agencia digital sevilla, diseño web sevilla",
      breadcrumb: [
        { name: "Inicio", url: "/" }
      ],
      schema: {
        "@type": "ProfessionalService",
        "name": "Ecentia",
        "alternateName": ["Esentia", "Ecentia Marketing", "Esentia Marketing", "Ecentia Digital", "Esentia Digital"],
        "description": "Ecentia - Agencia digital profesional especializada en diseño web, SEO, automatización y e-commerce en Sevilla y Málaga",
        "url": "https://ecentia.es",
        "telephone": "+34655600555",
        "email": "ecentiaseo@gmail.com",
        "priceRange": "€€",
        "areaServed": [
          {
            "@type": "City",
            "name": "Sevilla",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.3891",
              "longitude": "-5.9845"
            }
          },
          {
            "@type": "City",
            "name": "Málaga",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7213",
              "longitude": "-4.4214"
            }
          },
          {
            "@type": "State",
            "name": "Andalucía"
          },
          {
            "@type": "Country",
            "name": "España"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "18",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.instagram.com/ecentiamarketing/",
          "https://www.linkedin.com/company/ecentia-marketing/"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://ecentia.es/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Ecentia Logo"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://ecentia.es/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Ecentia - Agencia Digital"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios Digitales Profesionales",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño Web Premium",
                "description": "Diseño de páginas web profesionales centradas en conversión",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Avanzado",
                "description": "Posicionamiento web estratégico en Google",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización con IA",
                "description": "Automatización de procesos con inteligencia artificial",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce",
                "description": "Desarrollo de tiendas online optimizadas",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads",
                "description": "Campañas de publicidad en Google optimizadas",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gestión de Redes Sociales",
                "description": "Gestión profesional de redes sociales",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia"
                }
              }
            }
          ]
        }
      }
    },
    servicios: {
      title: "Servicios Digitales | Diseño Web, SEO e IA | Ecentia",
      description: "Diseño web, SEO, automatización con IA, e-commerce y Google Ads en Sevilla y Málaga. Ecentia: tu agencia digital con resultados medibles.",
      keywords: "ecentia servicios, esentia servicios, diseño web sevilla, seo sevilla, ecommerce málaga",
      breadcrumb: [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" }
      ],
      schema: {
        "@type": "Service",
        "serviceType": "Marketing Digital Profesional",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Ecentia",
          "alternateName": ["Esentia", "Ecentia Marketing"]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Sevilla"
          },
          {
            "@type": "City",
            "name": "Málaga"
          },
          {
            "@type": "Country",
            "name": "España"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catálogo de Servicios Digitales",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño Web Premium",
                "description": "Diseño de páginas web profesionales centradas en conversión",
                "url": "https://ecentia.es/servicios#diseno-web"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Avanzado",
                "description": "Posicionamiento web estratégico para dominar Google",
                "url": "https://ecentia.es/servicios#seo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización con IA",
                "description": "Automatización de procesos con inteligencia artificial",
                "url": "https://ecentia.es/servicios#automatizacion"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce",
                "description": "Desarrollo de tiendas online que venden",
                "url": "https://ecentia.es/servicios#ecommerce"
              }
            }
          ]
        }
      }
    },
    proyectos: {
      title: "Portfolio y Proyectos Web | Casos de Éxito | Ecentia",
      description: "Portfolio de Ecentia: diseño web, e-commerce y marketing digital con resultados reales. Casos de éxito en Sevilla, Málaga y toda España.",
      keywords: "ecentia portfolio, esentia proyectos, casos éxito diseño web, proyectos ecentia",
      breadcrumb: [
        { name: "Inicio", url: "/" },
        { name: "Proyectos", url: "/proyectos" }
      ],
      schema: {
        "@type": "CollectionPage",
        "name": "Portfolio de Proyectos de Ecentia",
        "description": "Casos de éxito en diseño web y marketing digital",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia",
          "alternateName": ["Esentia"]
        }
      }
    },
    contacto: {
      title: "Contacto | Presupuesto Gratis 24h | Ecentia Sevilla",
      description: "Contacta con Ecentia y recibe tu presupuesto de diseño web o SEO en menos de 24h sin compromiso. Atendemos Sevilla, Málaga y toda Andalucía.",
      keywords: "ecentia contacto, esentia contacto, presupuesto diseño web, ecentia telefono",
      breadcrumb: [
        { name: "Inicio", url: "/" },
        { name: "Contacto", url: "/contacto" }
      ],
      schema: {
        "@type": "ContactPage",
        "name": "Contacto Ecentia",
        "description": "Formulario de contacto para consultas y presupuestos gratuitos"
      }
    }
  },
  faqs: [
    {
      question: "¿Qué es Ecentia?",
      answer: "Ecentia es una agencia digital profesional especializada en diseño web, SEO, automatización con IA y e-commerce. Ofrecemos servicios en Sevilla, Málaga y toda Andalucía con atención personalizada y resultados garantizados."
    },
    {
      question: "¿Ecentia o Esentia?",
      answer: "Ecentia (con C) es nuestra agencia activa y operativa en 2025. A veces nos buscan como Esentia (con S), pero somos Ecentia. Ofrecemos servicios profesionales de diseño web, SEO y marketing digital en Sevilla y Málaga."
    },
    {
      question: "¿Dónde está Ecentia?",
      answer: "Ecentia atiende clientes en Sevilla, Málaga y toda Andalucía. Trabajamos de forma remota y nos desplazamos para reuniones presenciales cuando es necesario. Contacto: +34 655 60 05 55"
    },
    {
      question: "¿Cuánto cuesta el diseño web con Ecentia?",
      answer: "Los precios varían según complejidad: Desde 800€ para webs corporativas hasta 3000€+ para e-commerce avanzados. Ofrecemos presupuestos personalizados gratuitos en 24h."
    },
    {
      question: "¿Ecentia tiene oficina física?",
      answer: "Ecentia opera digitalmente en toda Andalucía. Nos reunimos con clientes en Sevilla y Málaga según necesidad. Esta modalidad nos permite ofrecer precios más competitivos sin sacrificar calidad."
    },
    {
      question: "¿Qué diferencia a Ecentia de otras agencias?",
      answer: "Ecentia destaca por su enfoque en resultados medibles, transparencia total en precios, tecnología avanzada (Astro, React, IA) y atención personalizada. No somos una agencia más, somos tu socio digital."
    }
  ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ecentia.es");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    keywords,
    image,
    pageKey,
    bodyClass = "",
    showLoader = true,
    noindex = false
  } = Astro2.props;
  const currentPage = pageKey ? seoConfig.pages[pageKey] : null;
  const seoTitle = title || currentPage?.title || seoConfig.defaultTitle;
  const seoDescription = description || currentPage?.description || seoConfig.defaultDescription;
  const seoKeywords = keywords || currentPage?.keywords || seoConfig.keywords.join(", ");
  const seoImage = image || `${seoConfig.siteUrl}${seoConfig.defaultImage}`;
  const rawPath = Astro2.url.pathname;
  const normalizedPath = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");
  const canonicalURL = new URL(normalizedPath, seoConfig.siteUrl).href;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.companyInfo.name,
    alternateName: ["Ecentia", "Ecentia Digital", "Esentia Marketing"],
    legalName: seoConfig.companyInfo.legalName,
    url: seoConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${seoConfig.siteUrl}/#logo`,
      url: `${seoConfig.siteUrl}/logo.png`,
      contentUrl: `${seoConfig.siteUrl}/logo.png`,
      width: 512,
      height: 512,
      caption: "Ecentia Marketing Logo Oficial",
      inLanguage: "es-ES"
    },
    image: {
      "@id": `${seoConfig.siteUrl}/#logo`
    },
    telephone: seoConfig.companyInfo.telephone,
    email: seoConfig.companyInfo.email,
    areaServed: seoConfig.companyInfo.areasServed.map((area) => ({
      "@type": "Place",
      name: area
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.companyInfo.geo.latitude,
      longitude: seoConfig.companyInfo.geo.longitude
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: seoConfig.companyInfo.telephone,
      contactType: "customer service",
      email: seoConfig.companyInfo.email,
      availableLanguage: ["Spanish", "English"],
      areaServed: "ES",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00"
      }
    },
    sameAs: [
      "https://www.instagram.com/ecentiamarketing/",
      "https://www.linkedin.com/company/ecentia-marketing/"
    ],
    foundingDate: seoConfig.companyInfo.foundingDate,
    priceRange: seoConfig.companyInfo.priceRange,
    slogan: "Digitalizamos tu visi\xF3n con estrategia y car\xE1cter",
    description: "Agencia de marketing digital profesional en Sevilla y M\xE1laga"
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    url: seoConfig.siteUrl,
    name: seoConfig.siteName,
    alternateName: ["Ecentia", "Ecentia Digital"],
    description: seoDescription,
    publisher: {
      "@id": `${seoConfig.siteUrl}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/proyectos?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "es-ES"
  };
  const breadcrumbSchema = currentPage?.breadcrumb ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: currentPage.breadcrumb.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${seoConfig.siteUrl}${crumb.url}`
    }))
  } : null;
  const faqSchema = pageKey === "home" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;
  const pageSchema = currentPage?.schema ? {
    "@context": "https://schema.org",
    ...currentPage.schema,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalURL
    },
    inLanguage: "es-ES",
    isPartOf: {
      "@id": `${seoConfig.siteUrl}/#website`
    }
  } : null;
  const allSchemas = [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema,
    pageSchema
  ].filter(Boolean);
  return renderTemplate(_a || (_a = __template(['<html lang="es" prefix="og: https://ogp.me/ns#"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>', '</title><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><meta name="author" content="Ecentia Marketing"><meta http-equiv="Content-Language" content="es"><meta name="language" content="Spanish"><meta name="geo.region" content="ES-AN"><meta name="geo.placename" content="Andaluc\xEDa"><meta name="geo.position" content="37.3891;-5.9845"><meta name="ICBM" content="37.3891, -5.9845">', '<meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:secure_url"', '><meta property="og:image:width" content="512"><meta property="og:image:height" content="512"><meta property="og:image:alt" content="Ecentia Marketing Logo"><meta property="og:site_name"', '><meta property="og:locale" content="es_ES"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt" content="Ecentia Marketing Logo"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="512x512" href="/logo.png"><link rel="apple-touch-icon" sizes="512x512" href="/logo.png"><meta name="theme-color" content="#050510"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="application-name" content="Ecentia Marketing"><meta name="apple-mobile-web-app-title" content="Ecentia Marketing"><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="image" href="/logo.png" type="image/png"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerPolicy="no-referrer"><script type="application/ld+json">', '<\/script><script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "G-FKEZKR17FN");\n    <\/script>', "", "</head> <body", '> <script>\n      if (sessionStorage.getItem("visited")) {\n        document.body.classList.remove("loading");\n        document.body.classList.add("loaded");\n      }\n    <\/script> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=G-FKEZKR17FN" height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript> ', ' <div class="noise-overlay"></div> <canvas id="cursor-canvas"></canvas> <div id="main-cursor"></div> <main id="main-content"> ', " </main> ", " ", " </body> </html> "])), seoTitle, addAttribute(seoDescription, "content"), addAttribute(seoKeywords, "content"), addAttribute(canonicalURL, "href"), noindex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">` })}`, addAttribute(pageKey === "home" ? "website" : "article", "content"), addAttribute(canonicalURL, "content"), addAttribute(seoTitle, "content"), addAttribute(seoDescription, "content"), addAttribute(seoImage, "content"), addAttribute(seoImage, "content"), addAttribute(seoConfig.siteName, "content"), addAttribute(seoConfig.twitterHandle, "content"), addAttribute(seoConfig.twitterHandle, "content"), addAttribute(canonicalURL, "content"), addAttribute(seoTitle, "content"), addAttribute(seoDescription, "content"), addAttribute(seoImage, "content"), unescapeHTML(JSON.stringify(allSchemas)), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), addAttribute(`${showLoader ? "loading" : ""} ${bodyClass}`, "class"), showLoader && renderTemplate`<div class="preloader"> <div class="loader-text">ECENTIA</div> <div class="loader-bar"> <div class="bar-fill"></div> </div> </div>`, renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
