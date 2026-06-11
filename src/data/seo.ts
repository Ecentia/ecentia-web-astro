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
      title: 'Diseño Web Profesional en Sevilla | Presupuesto Gratis | Ecentia',
      description: 'Páginas web y tiendas online a medida que atraen clientes. WordPress, Shopify o desarrollo propio. Presupuesto gratuito y personalizado en menos de 24h. Sevilla y toda España.',
      keywords: 'diseño web sevilla, página web para mi negocio, hacer una página web negocio sevilla, presupuesto página web gratis, agencia web sevilla, página web profesional arahal, wordpress sevilla, shopify sevilla, ecentia',
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
          "url": "https://ecentia.es/logo.avif",
          "width": 512,
          "height": 512,
          "caption": "Ecentia Logo"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://ecentia.es/logo.avif",
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
      title: 'Diseño Web, SEO y Tiendas Online en Sevilla | Ecentia Servicios',
      description: 'Diseño web profesional, posicionamiento SEO local y e-commerce a medida en Sevilla, Málaga y España. Proyectos que generan tráfico y ventas reales. Consulta sin coste.',
      keywords: 'diseño web sevilla, posicionamiento seo sevilla, agencia seo malaga, crear tienda online shopify, desarrollo web andalucia, automatización ia empresa, web a medida sevilla, marketing digital sevilla',
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
      title: 'Proyectos de Diseño Web y SEO en Sevilla | Portfolio Ecentia',
      description: 'Descubre proyectos reales de páginas web, tiendas online y posicionamiento SEO para empresas en Sevilla, Málaga y España. Resultados medibles y diseño diferenciador.',
      keywords: 'portfolio diseño web sevilla, casos de éxito web, proyectos tienda online shopify andalucia, ejemplos webs profesionales pymes, agencia seo sevilla resultados, web a medida sevilla ejemplos',
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
      title: 'Pide tu Presupuesto Web Gratis en 24h | Contacto Ecentia',
      description: 'Cuéntanos tu proyecto y recibe una propuesta personalizada de diseño web, SEO o tienda online en menos de 24h. Sin compromiso. Sevilla, Málaga y toda España.',
      keywords: 'contacto ecentia, presupuesto diseño web gratis, presupuesto seo sevilla, pedir presupuesto web, contactar agencia web sevilla, ecentia telefono, esentia contacto',
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
      title: 'Blog SEO, Diseño Web y Marketing Digital para PYMEs | Ecentia',
      description: 'Guías prácticas sobre SEO, diseño web y automatización con IA para pymes en España. Aprende a atraer más clientes y posicionarte en Google. Artículos gratuitos.',
      keywords: 'blog seo pymes españa, guía posicionamiento google, blog diseño web profesional, marketing digital para empresas, cuánto cuesta una web españa, cómo aparecer primero google, wix wordpress web a medida',
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
    
    // LANDINGS OCULTAS (GEO/SEO LOCAL)
    'sectores/restaurantes': {
      title: 'Diseño Web para Restaurantes y Hostelería + Reservas IA | Ecentia',
      description: 'Atrae más comensales con una web optimizada para SEO Local. Integra menú digital interactivo y automatiza reservas con IA 24/7. Solicita presupuesto.',
      keywords: 'diseño web para restaurantes, seo local hostelería, menú digital interactivo, reservas online restaurante, web corporativa restaurante',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Restaurantes', url: '/sectores/restaurantes' }
      ],
      schema: {
        "@type": "WebPage",
        "name": "Diseño Web y Digitalización para Restaurantes",
        "description": "Desarrollo de páginas web SEO y menús digitales interactivos con IA para el sector hostelería."
      }
    },

    'sectores/barberias': {
      title: 'Diseño Web para Barberías y Centros de Estética + Citas IA | Ecentia',
      description: 'Llena tu agenda con una página web profesional para tu salón. Posicionamiento SEO Local y sistema inteligente de citas automatizadas con IA por WhatsApp.',
      keywords: 'diseño web para barberías, seo local estética, citas online peluquería, página web salón de belleza, automatización de reservas online',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Barberías y Estética', url: '/sectores/barberias' }
      ],
      schema: {
        "@type": "WebPage",
        "name": "Diseño Web y Agenda Automatizada para Barberías y Centros de Estética",
        "description": "Desarrollo web corporativo con sistema de citas online integrado y recordatorios por WhatsApp."
      }
    },

    'sectores/clinicas': {
      title: 'Diseño Web para Clínicas y Centros Médicos + CRM IA | Ecentia',
      description: 'Webs premium para clínicas médicas y estéticas (100% RGPD). Capta pacientes con SEO Local y automatiza su seguimiento mediante CRM e Inteligencia Artificial.',
      keywords: 'diseño web clínicas médicas, seo médico, web para clínica dental, crm personalizado clínicas, captación de pacientes',
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Clínicas y Salud', url: '/sectores/clinicas' }
      ],
      schema: {
        "@type": "WebPage",
        "name": "Diseño Web Premium y CRM para Clínicas y Centros Médicos",
        "description": "Desarrollo de páginas web corporativas enfocadas en la captación de pacientes y CRM médico a medida."
      }
    }
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