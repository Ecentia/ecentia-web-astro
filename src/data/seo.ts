export const seoConfig = {
  siteName: 'Ecentia',
  siteUrl: 'https://ecentia.es',
  defaultTitle: 'Ecentia | Agencia Digital Líder en Sevilla y Málaga | Diseño Web y SEO',
  defaultDescription: '🚀 Ecentia - Agencia Digital Profesional ✓ Diseño Web Premium ✓ SEO Avanzado ✓ Automatización IA ✓ E-commerce ✓ Google Ads ✓ Redes Sociales | Servicios en Sevilla, Málaga y Andalucía. Presupuesto gratis 24h.',
  defaultImage: '/logo.png',
  twitterHandle: '@ecentia',
  locale: 'es_ES',
  type: 'website',
  
  companyInfo: {
    name: 'Ecentia',
    legalName: 'Ecentia Marketing',
    foundingDate: '2025',
    telephone: '+34655600555',
    email: 'ecentiaseo@gmail.com',
    serviceArea: {
      type: 'GeoCircle',
      addressLocality: 'Sevilla',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
      radius: '50000'
    },
    geo: {
      latitude: '37.3891',
      longitude: '-5.9845'
    },
    areasServed: ['Sevilla', 'Málaga', 'Córdoba', 'Granada', 'Cádiz', 'Andalucía', 'España'],
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-20:00'
  },

  keywords: [
    // MÁXIMA PRIORIDAD: Marca sola (ESTO ES LO MÁS IMPORTANTE)
    'ecentia',
    'esentia',
    'ecentia sevilla',
    'esentia sevilla',
    'ecentia málaga',
    'esentia málaga',
    'ecentia web',
    'esentia web',
    'ecentia digital',
    'esentia digital',
    'ecentia agencia',
    'esentia agencia',
    'ecentia.es',
    'esentia.es',
    'www.ecentia.es',
    'www.esentia.es',
    
    // PRIORIDAD 2: Marca + Marketing
    'ecentia marketing',
    'esentia marketing',
    'ecentia marketing sevilla',
    'esentia marketing sevilla',
    'ecentia marketing málaga',
    'esentia marketing málaga',
    
    // PRIORIDAD 3: Servicios con marca
    'ecentia diseño web',
    'esentia diseño web',
    'ecentia seo',
    'esentia seo',
    'ecentia desarrollo',
    'esentia desarrollo',
    
    // PRIORIDAD 4: Keywords de servicio genéricas
    'agencia digital sevilla',
    'agencia digital málaga',
    'diseño web sevilla',
    'diseño web málaga',
    'seo sevilla',
    'seo málaga',
    'desarrollo web sevilla',
    'ecommerce sevilla',
    'automatización marketing',
    'google ads sevilla',
    'redes sociales sevilla'
  ],

  pages: {
    home: {
      title: 'Ecentia | Agencia Digital Líder en Sevilla y Málaga | Diseño Web y SEO',
      description: '🚀 Ecentia - Agencia Digital Profesional ✓ Diseño Web Premium ✓ SEO Avanzado ✓ Automatización IA ✓ E-commerce ✓ Google Ads ✓ Redes Sociales | Servicios en Sevilla, Málaga y Andalucía. Presupuesto gratis 24h.',
      keywords: 'ecentia, esentia, ecentia sevilla, esentia sevilla, ecentia málaga, esentia málaga, ecentia marketing, esentia marketing, agencia digital sevilla, diseño web sevilla',
      breadcrumb: [
        { name: 'Inicio', url: '/' }
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
      title: 'Servicios Digitales Profesionales | Ecentia Sevilla y Málaga',
      description: '✅ Diseño web ✅ SEO ✅ Automatización IA ✅ E-Commerce ✅ Google Ads ✅ Redes sociales. Ecentia ofrece servicios profesionales en Sevilla, Málaga y Andalucía.',
      keywords: 'ecentia servicios, esentia servicios, diseño web sevilla, seo sevilla, ecommerce málaga',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' }
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
      title: 'Portfolio de Proyectos Web | Casos de Éxito | Ecentia',
      description: '🎯 Portfolio de Ecentia: Diseño web, e-commerce y marketing digital. Casos reales con resultados medibles en Sevilla, Málaga y España.',
      keywords: 'ecentia portfolio, esentia proyectos, casos éxito diseño web, proyectos ecentia',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Proyectos', url: '/proyectos' }
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
      title: 'Contacto Ecentia | Presupuesto Gratis 24h | Sevilla y Málaga',
      description: '📞 Contacta con Ecentia para consultoría gratuita. Atendemos Sevilla, Málaga y Andalucía. Presupuesto sin compromiso en 24h. ☎ +34 655 60 05 55 · WhatsApp',
      keywords: 'ecentia contacto, esentia contacto, presupuesto diseño web, ecentia telefono',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Contacto', url: '/contacto' }
      ],
      schema: {
        "@type": "ContactPage",
        "name": "Contacto Ecentia",
        "description": "Formulario de contacto para consultas y presupuestos gratuitos"
      }
    },
  },

  sitelinks: [
    {
      name: 'Servicios',
      url: '/servicios',
      description: 'Todos nuestros servicios digitales'
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
      description: 'Conoce a Ecentia'
    }
  ],

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

export type PageKey = keyof typeof seoConfig.pages;