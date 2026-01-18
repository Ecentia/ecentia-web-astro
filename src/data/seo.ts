export const seoConfig = {
  siteName: 'Ecentia Marketing',
  siteUrl: 'https://ecentia.es',
  defaultTitle: 'Ecentia Marketing | Agencia Digital Líder en Sevilla y Málaga | Diseño Web y SEO',
  defaultDescription: '🚀 Ecentia Marketing - Tu Agencia Digital de Confianza ✓ Diseño Web Premium ✓ SEO Avanzado ✓ Automatización IA ✓ E-commerce ✓ Google Ads ✓ Redes Sociales | Servicios profesionales en Sevilla, Málaga y toda Andalucía. Presupuesto gratis en 24h.',
  defaultImage: '/logo.png',
  twitterHandle: '@ecentia',
  locale: 'es_ES',
  type: 'website',
  
  // Información de la empresa (SIN DIRECCIÓN FÍSICA)
  companyInfo: {
    name: 'Ecentia Marketing',
    legalName: 'Ecentia Marketing',
    foundingDate: '2023',
    telephone: '+34655600555',
    email: 'ecentiaseo@gmail.com',
    // NO ponemos dirección física porque no la tenemos
    serviceArea: {
      type: 'GeoCircle',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
      // Radio de servicio en metros (50km = 50000m)
      radius: '50000'
    },
    geo: {
      // Coordenadas genéricas del centro de Sevilla (no tu casa)
      latitude: '37.3891',
      longitude: '-5.9845'
    },
    areasServed: ['Sevilla', 'Málaga', 'Córdoba', 'Granada', 'Cádiz', 'Andalucía', 'España'],
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-20:00'
  },

  keywords: [
    // PRIORIDAD 1: Marca con C (tuya)
    'ecentia marketing',
    'ecentia marketing sevilla',
    'ecentia marketing málaga',
    'ecentia',
    'ecentia digital',
    'ecentia agencia',
    'www.ecentia.es',
    'ecentia.es',
    
    // PRIORIDAD 2: Capturar variaciones de marca
    'ecentia marketing opiniones',
    'ecentia marketing telefono',
    'ecentia marketing contacto',
    'ecentia sevilla',
    'ecentia málaga',
    
    // PRIORIDAD 3: Marca con S (competencia) - Para aparecer cuando busquen error
    'esentia marketing',
    'esentia',
    
    // PRIORIDAD 4: Keywords de servicio
    'agencia marketing digital sevilla',
    'agencia marketing digital málaga',
    'diseño web sevilla',
    'diseño web málaga',
    'diseño web profesional andalucía',
    'agencia seo sevilla',
    'agencia seo málaga',
    'posicionamiento web sevilla',
    'desarrollo web sevilla',
    'desarrollo web málaga',
    'ecommerce sevilla',
    'tienda online sevilla',
    'automatización marketing andalucía',
    'marketing online sevilla',
    'marketing online málaga',
    'diseño gráfico sevilla',
    'branding sevilla',
    'agencia digital andalucía',
    'google ads sevilla',
    'facebook ads sevilla',
    'redes sociales sevilla',
    'consultoría digital sevilla',
    'mejor agencia marketing sevilla',
    'agencia marketing económica sevilla'
  ],

  pages: {
    home: {
      title: 'Ecentia Marketing | Agencia Digital Líder en Sevilla y Málaga | Diseño Web y SEO',
      description: '🚀 Ecentia Marketing - Tu Agencia Digital de Confianza ✓ Diseño Web Premium ✓ SEO Avanzado ✓ Automatización IA ✓ E-commerce ✓ Google Ads ✓ Redes Sociales | Servicios profesionales en Sevilla, Málaga y toda Andalucía. Presupuesto gratis en 24h.',
      keywords: 'ecentia marketing, ecentia, esentia marketing, agencia marketing digital sevilla, diseño web sevilla, diseño web málaga, seo sevilla, ecentia marketing sevilla, mejor agencia digital andalucía',
      breadcrumb: [
        { name: 'Inicio', url: '/' }
      ],
      schema: {
        "@type": "ProfessionalService",
        "name": "Ecentia Marketing",
        "alternateName": ["Ecentia", "Ecentia Digital", "Esentia Marketing"],
        "description": "Agencia de marketing digital profesional especializada en diseño web, SEO, automatización y e-commerce. Servicios en Sevilla, Málaga y toda Andalucía sin intermediarios.",
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
          "height": 512
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://ecentia.es/logo.png",
          "width": 512,
          "height": 512
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Marketing Digital Profesionales",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño Web Premium",
                "description": "Diseño de páginas web profesionales centradas en conversión y experiencia de usuario",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Avanzado",
                "description": "Posicionamiento web estratégico en Google para dominar tu sector",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización con IA",
                "description": "Automatización de procesos de marketing con inteligencia artificial para ahorrar tiempo",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce",
                "description": "Desarrollo de tiendas online optimizadas para conversión y ventas",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads",
                "description": "Campañas de publicidad en Google optimizadas para ROI máximo",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gestión de Redes Sociales",
                "description": "Gestión profesional de redes sociales y estrategia de contenidos",
                "provider": {
                  "@type": "Organization",
                  "name": "Ecentia Marketing"
                }
              }
            }
          ]
        }
      }
    },
    
    servicios: {
      title: 'Servicios de Marketing Digital Profesionales | Ecentia Sevilla y Málaga',
      description: '✅ Diseño web premium ✅ SEO avanzado ✅ Automatización IA ✅ E-Commerce ✅ Google Ads ✅ Redes sociales. Ecentia Marketing ofrece servicios profesionales en Sevilla, Málaga y Andalucía. Resultados garantizados.',
      keywords: 'servicios diseño web sevilla, agencia seo sevilla, automatización marketing, desarrollo ecommerce, google ads sevilla, ecentia marketing servicios',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' }
      ],
      schema: {
        "@type": "Service",
        "serviceType": "Marketing Digital Profesional",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Ecentia Marketing",
          "alternateName": ["Ecentia", "Esentia Marketing"]
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
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads",
                "description": "Campañas de publicidad en Google optimizadas",
                "url": "https://ecentia.es/servicios#google-ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gestión de Redes Sociales",
                "description": "Community management profesional",
                "url": "https://ecentia.es/servicios#redes-sociales"
              }
            }
          ]
        }
      }
    },
    
    proyectos: {
      title: 'Portfolio de Proyectos Web | Casos de Éxito Reales | Ecentia Marketing',
      description: '🎯 Portfolio de Ecentia Marketing: Diseño web, e-commerce y marketing digital. Casos reales con resultados medibles. Trabajos realizados en Sevilla, Málaga y toda España. +50 proyectos exitosos.',
      keywords: 'portfolio diseño web, casos éxito marketing digital, proyectos web sevilla, trabajos ecentia marketing, ejemplos diseño web',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Proyectos', url: '/proyectos' }
      ],
      schema: {
        "@type": "CollectionPage",
        "name": "Portfolio de Proyectos de Ecentia Marketing",
        "description": "Casos de éxito en diseño web y marketing digital",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia Marketing",
          "alternateName": ["Ecentia"]
        }
      }
    },
    
    contacto: {
      title: 'Contacto Ecentia Marketing | Presupuesto Gratis en 24h | Sevilla y Málaga',
      description: '📞 Contacta con Ecentia Marketing para una consultoría gratuita. Atendemos Sevilla, Málaga y toda Andalucía. Presupuesto sin compromiso en 24h. ☎ +34 655 600 555 · WhatsApp disponible · Email: ecentiaseo@gmail.com',
      keywords: 'contacto ecentia marketing, presupuesto diseño web, consultoría gratis, ecentia telefono, ecentia contacto sevilla',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Contacto', url: '/contacto' }
      ],
      schema: {
        "@type": "ContactPage",
        "name": "Contacto Ecentia Marketing",
        "description": "Formulario de contacto para consultas y presupuestos gratuitos"
      }
    },
  },

  // Sitelinks
  sitelinks: [
    {
      name: 'Servicios',
      url: '/servicios',
      description: 'Todos nuestros servicios de marketing digital'
    },
    {
      name: 'Portfolio',
      url: '/proyectos',
      description: 'Casos de éxito y proyectos realizados'
    },
    {
      name: 'Contacto',
      url: '/contacto',
      description: 'Presupuesto gratis en 24h'
    },
    {
      name: 'Nosotros',
      url: '/#work',
      description: 'Conoce a Ecentia Marketing'
    }
  ],

  // FAQs optimizadas para Rich Snippets Y para superar a Esentia
  faqs: [
    {
      question: "¿Qué es Ecentia Marketing?",
      answer: "Ecentia Marketing es una agencia de marketing digital profesional especializada en diseño web, SEO, automatización con IA y e-commerce. Ofrecemos servicios en Sevilla, Málaga y toda Andalucía con atención personalizada y resultados garantizados."
    },
    {
      question: "¿Ecentia o Esentia Marketing?",
      answer: "Ecentia Marketing (con C) es nuestra agencia activa y operativa en 2025. Ofrecemos servicios profesionales de diseño web, SEO y marketing digital en Sevilla y Málaga con presupuestos transparentes y resultados medibles."
    },
    {
      question: "¿Dónde está Ecentia Marketing?",
      answer: "Ecentia Marketing atiende clientes en Sevilla, Málaga y toda Andalucía. Trabajamos de forma remota y nos desplazamos para reuniones presenciales cuando es necesario. Contacto: +34 655 600 555"
    },
    {
      question: "¿Cuánto cuesta el diseño web con Ecentia?",
      answer: "Los precios varían según complejidad: Desde 800€ para webs corporativas hasta 3000€+ para e-commerce avanzados. Ofrecemos presupuestos personalizados gratuitos en 24h."
    },
    {
      question: "¿Ecentia Marketing tiene oficina física?",
      answer: "Ecentia Marketing opera de forma digital en toda Andalucía. Nos reunimos con clientes en Sevilla y Málaga según necesidad. Esta modalidad nos permite ofrecer precios más competitivos sin sacrificar calidad."
    },
    {
      question: "¿Qué diferencia a Ecentia de otras agencias?",
      answer: "Ecentia Marketing destaca por su enfoque en resultados medibles, transparencia total en precios, tecnología avanzada (Astro, React, IA) y atención personalizada. No somos una agencia más, somos tu socio digital."
    }
  ]
};

export type PageKey = keyof typeof seoConfig.pages;