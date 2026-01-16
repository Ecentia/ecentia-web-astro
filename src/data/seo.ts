export const seoConfig = {
  siteName: 'Ecentia Marketing',
  siteUrl: 'https://ecentia.es',
  defaultTitle: 'Ecentia Marketing | Agencia de Marketing Digital y Diseño Web',
  defaultDescription: 'Agencia de marketing digital especializada en diseño web, SEO, automatización y e-commerce. Transformamos negocios con soluciones digitales a medida en toda España.',
  defaultImage: '/logo.avif',
  twitterHandle: '@ecentia',
  locale: 'es_ES',
  type: 'website',
  
  keywords: [
    'agencia marketing digital',
    'ecentia marketing',
    'diseño web profesional',
    'agencia seo españa',
    'desarrollo web a medida',
    'ecommerce',
    'automatización marketing',
    'agencia digital',
    'posicionamiento web',
    'marketing online',
  ],

  pages: {
    home: {
      title: 'Ecentia Marketing | Agencia de Marketing Digital y Diseño Web',
      description: 'Agencia de marketing digital especializada en diseño web, SEO, automatización y e-commerce. Transformamos negocios con soluciones digitales a medida en toda España.',
      keywords: 'agencia marketing digital, diseño web profesional, ecentia marketing, agencia digital españa, desarrollo web personalizado, marketing online',
      schema: {
        "@type": "Organization",
        "name": "Ecentia Marketing",
        "alternateName": "Ecentia",
        "url": "https://ecentia.es",
        "logo": "https://ecentia.es/logo.avif",
        "description": "Agencia de marketing digital especializada en diseño web, SEO y automatización",
        "foundingDate": "2023",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-722-625-288",
          "contactType": "customer service",
          "email": "ecentiaseo@gmail.com",
          "availableLanguage": ["Spanish", "English"]
        },
        "sameAs": [
          "https://www.instagram.com/ecentiamarketing/",
          "https://www.linkedin.com/company/ecentia-marketing/"
        ]
      }
    },
    
    servicios: {
      title: 'Servicios de Marketing Digital | Diseño Web, SEO y Automatización | Ecentia',
      description: 'Servicios profesionales de diseño web, SEO avanzado, automatización con IA y desarrollo de e-commerce. Soluciones digitales integrales para impulsar tu negocio online en España.',
      keywords: 'servicios diseño web, agencia seo profesional, automatización marketing digital, desarrollo ecommerce, consultoría digital, servicios marketing online',
      schema: {
        "@type": "Service",
        "serviceType": "Marketing Digital",
        "provider": {
          "@type": "Organization",
          "name": "Ecentia Marketing"
        },
        "areaServed": {
          "@type": "Country",
          "name": "España"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Marketing Digital",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño Web Premium",
                "description": "Diseño de páginas web profesionales centradas en conversión"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Avanzado",
                "description": "Posicionamiento web estratégico para dominar los resultados de búsqueda"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización con IA",
                "description": "Automatización de procesos de marketing con inteligencia artificial"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce",
                "description": "Desarrollo de tiendas online optimizadas para conversión"
              }
            }
          ]
        }
      }
    },
    
    proyectos: {
      title: 'Portfolio de Proyectos Web | Casos de Éxito | Ecentia Marketing',
      description: 'Descubre nuestro portfolio de proyectos exitosos: diseño web, e-commerce y marketing digital. Casos reales con resultados medibles y ROI demostrado.',
      keywords: 'portfolio diseño web, casos éxito marketing digital, proyectos web profesionales, ejemplos ecommerce, trabajos diseño web',
      schema: {
        "@type": "CollectionPage",
        "name": "Portfolio de Proyectos",
        "description": "Casos de éxito en diseño web y marketing digital",
        "publisher": {
          "@type": "Organization",
          "name": "Ecentia Marketing"
        }
      }
    },
    
    contacto: {
      title: 'Contacto | Hablemos de tu Proyecto Digital | Ecentia Marketing',
      description: 'Contacta con Ecentia Marketing para una consultoría gratuita. Especialistas en diseño web, SEO y marketing digital. Presupuesto sin compromiso en 24h.',
      keywords: 'contacto agencia marketing, presupuesto diseño web, consultoría seo gratis, agencia marketing españa, solicitar presupuesto web',
      schema: {
        "@type": "ContactPage",
        "name": "Contacto Ecentia Marketing",
        "description": "Formulario de contacto para consultas y presupuestos"
      }
    },
  },
};

export type PageKey = keyof typeof seoConfig.pages;