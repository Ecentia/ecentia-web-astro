export const seoConfig = {
  siteName: 'Ecentia',
  siteUrl: 'https://ecentia.es',
  defaultTitle: 'Página Web para tu Negocio en Sevilla | Desde 299€ | Ecentia',
  defaultDescription: 'Hacemos la página web para tu negocio en Sevilla y provincia desde 299€. WordPress, Shopify y código a medida. Presupuesto gratis en menos de 24 horas sin compromiso.',
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
      title: 'Página Web para tu Negocio en Sevilla | Desde 299€ | Ecentia',
      description: 'Hacemos la página web para tu negocio en Sevilla y provincia desde 299€. WordPress, Shopify y código a medida. Presupuesto gratis en 24 horas sin compromiso.',
      keywords: 'página web para mi negocio sevilla, hacer una página web para mi negocio, página web para negocio, quiero una página web sevilla, presupuesto página web sevilla, página web barata sevilla, wordpress sevilla, shopify sevilla, ecentia, ecentia arahal',
      breadcrumb: [
        { name: 'Inicio', url: '/' }
      ],
      schema: {
        "@type": "ProfessionalService",
        "name": "Ecentia",
        "alternateName": ["Esentia", "Ecentia Marketing", "Ecentia Arahal", "Ecentia Sevilla"],
        "description": "Ecentia - Agencia de diseño web en Sevilla y provincia. Creamos páginas web en WordPress, Shopify y código a medida desde 299€. Presupuesto gratuito en 24 horas.",
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
      title: 'Servicios Digitales | Diseño Web, SEO e IA | Ecentia',
      description: 'Diseño web, SEO, automatización con IA, e-commerce y Google Ads en Sevilla y Málaga. Ecentia: tu agencia digital con resultados medibles.',
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
      title: 'Portfolio y Proyectos Web | Casos de Éxito | Ecentia',
      description: 'Portfolio de Ecentia: diseño web, e-commerce y marketing digital con resultados reales. Casos de éxito en Sevilla, Málaga y toda España.',
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
      title: 'Blog de Marketing Digital, SEO y Desarrollo Web | Ecentia',
      description: 'Artículos, guías y consejos prácticos sobre SEO orgánico, diseño web moderno y automatizaciones con Inteligencia Artificial. Aprende a hacer crecer tu negocio.',
      keywords: 'blog seo, blog marketing digital, blog desarrollo web, ecentia blog, blog inteligencia artificial, seo sevilla, seo malaga',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' }
      ],
      schema: {
        "@type": "CollectionPage",
        "name": "Blog de Ecentia",
        "description": "Artículos especializados en diseño web, posicionamiento en Google y automatización con IA para empresas.",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia",
          "alternateName": ["Esentia"]
        }
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
      question: "¿Cuánto cuesta hacer una página web en Sevilla?",
      answer: "En Ecentia, las páginas web corporativas en Sevilla empiezan desde 299€. Los e-commerce en Shopify o WordPress WooCommerce arrancan desde 599€. El precio final depende de lo que necesites: número de páginas, tienda online, formularios, integración con redes sociales, etc. Siempre hacemos un presupuesto personalizado y gratuito sin compromiso."
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