export const seoConfig = {
  siteName: 'Ecentia',
  siteUrl: 'https://ecentia.es',
  defaultTitle: 'Diseño y Desarrollo Web a Medida en Sevilla | Ecentia',
  defaultDescription: 'Diseño de páginas web y tiendas online profesionales adaptadas a tu negocio. WordPress, Shopify y código a medida con presupuesto personalizado gratuito en 24h.',
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
    // MARCA
    'ecentia',
    'esentia',
    'ecentia sevilla',
    'ecentia arahal',
    'ecentia web',
    'ecentia marketing',
    'ecentia diseño web',
    'ecentia.es',

    // PRIORIDAD MÁXIMA: Intención de compra alta + baja competencia
    'página web para mi negocio',
    'página web para mi negocio sevilla',
    'hacer una página web para mi negocio',
    'quiero una página web para mi negocio',
    'necesito una página web para mi negocio',
    'página web para negocio local',
    'página web para autónomos sevilla',
    'página web barata sevilla',
    'presupuesto página web sevilla',
    'renovar página web sevilla',
    'rediseño web sevilla',
    'diseño web arahal',
    'página web arahal',
    'hacer una web en arahal',
    'diseño web provincia sevilla',

    // PLATAFORMAS + SEVILLA (baja competencia)
    'wordpress sevilla',
    'wordpress arahal',
    'crear web wordpress sevilla',
    'shopify sevilla',
    'tienda online shopify sevilla',
    'tienda online sevilla',
    'tienda online arahal',

    // SEO LOCAL
    'diseño web sevilla',
    'desarrollo web sevilla',
    'agencia web sevilla',
    'seo sevilla',
    'seo local sevilla',
    'posicionamiento web sevilla',
    'ecommerce sevilla'
  ],

  pages: {
    home: {
      title: 'Diseño y Desarrollo Web a Medida en Sevilla | Ecentia',
      description: 'Diseño de páginas web y tiendas online profesionales adaptadas a tu negocio. WordPress, Shopify y código a medida con presupuesto personalizado gratuito en 24h.',
      keywords: 'página web para mi negocio sevilla, hacer una página web para mi negocio, página web para negocio, quiero una página web sevilla, presupuesto página web sevilla, página web barata sevilla, wordpress sevilla, shopify sevilla, ecentia, ecentia arahal',
      breadcrumb: [
        { name: 'Inicio', url: '/' }
      ],
      schema: {
        "@type": "ProfessionalService",
        "name": "Ecentia",
        "alternateName": ["Esentia", "Ecentia Marketing", "Ecentia Arahal", "Ecentia Sevilla"],
        "description": "Ecentia - Agencia de diseño web en Sevilla y provincia. Desarrollamos páginas web y tiendas online en WordPress, Shopify y código a medida con presupuestos personalizados.",
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
      title: 'Servicios de Diseño Web, Posicionamiento SEO y E-commerce | Ecentia',
      description: 'Agencia de diseño de páginas web profesionales, posicionamiento SEO estratégico y desarrollo de e-commerce a medida. Impulsamos tu negocio en Sevilla, Málaga y toda España.',
      keywords: 'diseño web sevilla, agencia seo sevilla, desarrollo web malaga, crear tienda online shopify, diseño paginas web andalucia, consultoria tecnologica españa, programacion web a medida',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' }
      ],
      schema: {
        "@type": "Service",
        "serviceType": "Diseño Web, SEO y Consultoría Tecnológica",
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
            "@type": "City",
            "name": "Granada"
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
                "name": "Diseño Web Corporativo y Premium",
                "description": "Creación y desarrollo de páginas web profesionales optimizadas para motores de búsqueda y centradas en la experiencia de usuario y conversión.",
                "url": "https://ecentia.es/servicios#diseno-web"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Posicionamiento SEO Avanzado",
                "description": "Estrategias de posicionamiento SEO local y nacional en Google para aumentar la visibilidad orgánica, captar tráfico cualificado y leads.",
                "url": "https://ecentia.es/servicios#seo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo E-Commerce",
                "description": "Desarrollo de tiendas online profesionales en Shopify, WooCommerce o código a medida con pasarelas de pago y automatizaciones integradas.",
                "url": "https://ecentia.es/servicios#ecommerce"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización de Procesos con IA",
                "description": "Implementación de flujos de trabajo inteligentes e integración de APIs de Inteligencia Artificial para optimizar procesos comerciales y operativos.",
                "url": "https://ecentia.es/servicios#automatizacion"
              }
            }
          ]
        }
      }
    },
    
    proyectos: {
      title: 'Diseño Web y SEO: Casos de Éxito en Sevilla y España | Ecentia',
      description: 'Ver casos reales de éxito en diseño de páginas web profesionales, desarrollo de tiendas online Shopify y posicionamiento SEO. Impulsamos negocios en Sevilla, Málaga y toda España.',
      keywords: 'casos de éxito diseño web, portfolio de páginas web sevilla, desarrollo tienda online shopify andalucia, agencia seo sevilla opiniones, diseño web corporativo españa, programacion web a medida sevilla',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Proyectos', url: '/proyectos' }
      ],
      schema: {
        "@type": "CollectionPage",
        "name": "Casos de Éxito de Diseño Web y Posicionamiento SEO de Ecentia",
        "description": "Portafolio de proyectos reales en diseño de páginas web corporativas, tiendas e-commerce Shopify y optimización en motores de búsqueda (SEO) para empresas en Sevilla, Andalucía y a nivel nacional en España.",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia",
          "alternateName": ["Esentia"]
        }
      }
    },
    
    contacto: {
      title: 'Contacto | Presupuesto Gratis 24h | Ecentia Sevilla',
      description: 'Contacta con Ecentia y recibe tu presupuesto de diseño web o SEO en menos de 24h sin compromiso. Atendemos Sevilla, Málaga y toda Andalucía.',
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
    blog: {
      title: 'Blog de Diseño Web, SEO y Marketing Digital para PYMEs | Ecentia',
      description: 'Guías prácticas y artículos especializados en posicionamiento SEO, diseño web profesional y automatización con IA para empresas en España. Aprende a atraer más clientes.',
      keywords: 'blog diseño web pymes, guía seo para negocios, marketing digital sevilla, cómo aparecer en google, cuánto cuesta una web, blog automatización ia, blog desarrollo web astro, recursos marketing digital españa',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' }
      ],
      schema: {
        "@type": "Blog",
        "name": "Blog de Ecentia — Diseño Web, SEO y Marketing Digital",
        "description": "Recursos prácticos sobre diseño de páginas web, posicionamiento en Google (SEO), desarrollo a medida y automatización con Inteligencia Artificial para pymes y autónomos en España.",
        "url": "https://ecentia.es/blog",
        "inLanguage": "es-ES",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia",
          "alternateName": ["Esentia", "Ecentia Marketing"],
          "url": "https://ecentia.es",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ecentia.es/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "about": [
          { "@type": "Thing", "name": "Diseño Web Profesional" },
          { "@type": "Thing", "name": "Posicionamiento SEO en Google" },
          { "@type": "Thing", "name": "Marketing Digital para PYMEs" },
          { "@type": "Thing", "name": "Automatización con Inteligencia Artificial" },
          { "@type": "Thing", "name": "E-commerce y Tiendas Online" }
        ]
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
      question: "¿Cómo calculáis el presupuesto de una página web?",
      answer: "En Ecentia no trabajamos con tarifas fijas cerradas porque cada proyecto requiere soluciones diferentes. Analizamos tus objetivos, tu competencia y las características que deseas incorporar para presentarte una propuesta económica 100% personalizada y a medida sin compromiso."
    },
    {
      question: "¿Hacéis webs en WordPress o en Shopify?",
      answer: "Sí. En Ecentia trabajamos con WordPress, Shopify y también desarrollo web a medida con código propio. Dependiendo de lo que necesites, te recomendamos la plataforma que mejor se adapta: WordPress para webs corporativas y blogs, Shopify para tiendas online y código a medida para proyectos más específicos."
    },
    {
      question: "¿Cuánto tarda en estar lista mi página web?",
      answer: "Una web corporativa estándar en WordPress tarda entre 1 y 2 semanas desde que nos apruebas el diseño. Una tienda online en Shopify puede tardar entre 2 y 4 semanas según el número de productos y funcionalidades. Te mantenemos informado en cada paso del proceso."
    },
    {
      question: "¿Trabajáis con negocios de la provincia de Sevilla y de Arahal?",
      answer: "Sí, somos una empresa de Arahal (Sevilla) y atendemos negocios de toda la provincia: Arahal, Utrera, Marchena, El Arahal, Morón de la Frontera, Dos Hermanas, Alcalá de Guadaíra, Carmona y Sevilla capital. También trabajamos con clientes de toda Andalucía y España de forma remota."
    },
    {
      question: "¿Mi web va a aparecer en Google?",
      answer: "Todas las webs que entregamos incluyen optimización SEO básica: estructura correcta, velocidad de carga, meta etiquetas y adaptación a móvil. Si además contratas nuestro servicio de SEO local en Sevilla, trabajamos para que tu negocio aparezca en Google cuando alguien busque tu servicio en tu zona. El SEO lleva tiempo, pero es la inversión más rentable a largo plazo."
    },
    {
      question: "¿Tengo que tener claro lo que quiero para contactaros?",
      answer: "Para nada. Puedes contactarnos con una idea básica o incluso solo con la sensación de que necesitas mejorar tu presencia online. Nosotros te hacemos las preguntas adecuadas, analizamos tu negocio y te proponemos la solución más efectiva. La consulta inicial es completamente gratuita y sin compromiso."
    }
  ]
};

export type PageKey = keyof typeof seoConfig.pages;