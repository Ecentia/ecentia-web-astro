// src/data/blog.ts

export interface BlogSection {
  type: 'h2' | 'h3' | 'paragraph' | 'list' | 'blockquote' | 'code';
  text?: string;
  items?: string[];
  code?: string;
  language?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  seoDescription: string;
  publishDate: string;
  readTime: string;
  author: string;
  tags: string[];
  image: string;
  keywords: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mejores-agencias-marketing-sevilla',
    title: 'Las mejores agencias de marketing digital en Sevilla: cómo elegir tu socio ideal',
    seoTitle: 'Las Mejores Agencias de Marketing Digital en Sevilla | Ecentia',
    description: 'Comparamos las opciones y te explicamos qué debes tener en cuenta al buscar una agencia de marketing digital en Sevilla para impulsar tu negocio.',
    seoDescription: '¿Buscas una agencia de marketing en Sevilla? Analizamos las mejores opciones según su especialidad y te damos las claves para acertar con tu elección. Entra ya.',
    publishDate: '2026-06-11T12:00:00Z',
    readTime: '6 min de lectura',
    author: 'Ecentia Editorial',
    tags: ['Marketing', 'Sevilla', 'Estrategia'],
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1200&auto=format&fit=crop',
    keywords: ['mejores agencias de marketing en sevilla', 'agencias de marketing digital sevilla', 'agencia marketing sevilla'],
    sections: [
      {
        type: 'paragraph',
        text: 'Sevilla cuenta con un tejido empresarial vibrante y en constante crecimiento. En este escenario competitivo, la digitalización ya no es opcional: es la clave para sobrevivir y destacar. Sin embargo, cuando una empresa se decide a dar el paso, se encuentra con una oferta abrumadora de agencias que prometen llevar su negocio a lo más alto. ¿Cómo saber cuál es la adecuada para tu proyecto?'
      },
      {
        type: 'h2',
        text: '¿Por qué necesitas una agencia local en Sevilla?'
      },
      {
        type: 'paragraph',
        text: 'Aunque internet permite trabajar con proveedores de cualquier rincón del mundo, contar con una agencia de marketing en Sevilla ofrece ventajas competitivas indudables. La cercanía física facilita la comunicación, permite realizar reuniones estratégicas presenciales y, lo más importante, significa que tu socio digital conoce de primera mano el mercado andaluz, sus costumbres, su competencia local y sus sectores más fuertes.'
      },
      {
        type: 'h2',
        text: 'Tipos de agencias en Sevilla y cuál elegir según tus objetivos'
      },
      {
        type: 'paragraph',
        text: 'No todas las agencias sirven para lo mismo. Para no tirar el presupuesto, primero debes identificar qué tipo de servicio necesita tu negocio:'
      },
      {
        type: 'list',
        items: [
          '**Agencias Creativas y de Branding:** Ideales si necesitas diseñar tu identidad de marca desde cero, logotipos, campañas de publicidad offline o piezas de diseño gráfico espectaculares.',
          '**Agencias 360 o de Servicios Integrales:** Adecuadas para grandes empresas que quieren delegar absolutamente todo su marketing (redes sociales, eventos, prensa, web, publicidad) en un solo proveedor de gran envergadura.',
          '**Agencias Boutique de Performance (como Ecentia):** Enfocadas a resultados tangibles (leads, ventas, llamadas). Somos especialistas en SEO local, desarrollo web rápido e interactivo (Astro) y automatizaciones de procesos mediante Inteligencia Artificial.'
        ]
      },
      {
        type: 'h2',
        text: 'Qué evaluar antes de firmar con una agencia'
      },
      {
        type: 'paragraph',
        text: 'Para evitar sorpresas desagradables, te recomendamos realizar estas preguntas esenciales a cualquier agencia antes de iniciar una colaboración:'
      },
      {
        type: 'list',
        items: [
          '**¿Qué tecnología utilizan para sus páginas web?** Huye de las agencias que solo hacen webs pesadas y lentas en WordPress con plantillas prediseñadas. Exige tecnologías modernas que carguen rápido y posicionen mejor.',
          '**¿Cómo miden los resultados?** Las visitas o los "likes" en redes sociales no pagan las facturas. Tu agencia debe reportarte métricas reales de negocio: llamadas recibidas, formularios completados y ventas realizadas.',
          '**¿Tienen permanencia abusiva?** Una agencia segura de su trabajo no necesita retener a sus clientes con contratos leoninos de un año. El valor aportado mes a mes debe ser el único motivo para continuar.'
        ]
      },
      {
        type: 'blockquote',
        text: 'Un consejo de oro: revisa la propia web de la agencia. Si su página tarda en cargar, no se adapta bien a móviles o tiene un diseño desfasado, difícilmente podrán hacer un trabajo excelente con la tuya.'
      },
      {
        type: 'h2',
        text: 'Por qué Ecentia destaca en el sector digital sevillano'
      },
      {
        type: 'paragraph',
        text: 'En Ecentia no pretendemos ser una agencia enorme que hace de todo para todos. Nos centramos en lo que dominamos a la perfección: el desarrollo de páginas web ultrarápidas mediante Astro, el posicionamiento en buscadores (SEO) y la automatización con IA.'
      },
      {
        type: 'paragraph',
        text: 'Diseñamos estrategias pensadas en la conversión del usuario, reduciendo los tiempos de carga al mínimo para enamorar tanto a tus clientes como a los algoritmos de Google. Si buscas un trato directo, sin intermediarios y orientado al crecimiento de tu facturación, somos tu socio en Sevilla.'
      },
      {
        type: 'h2',
        text: 'Conclusión: La decisión correcta'
      },
      {
        type: 'paragraph',
        text: 'La elección de tu agencia de marketing digital determinará la velocidad de crecimiento de tu empresa en los próximos años. Tómate el tiempo necesario para analizar sus trabajos anteriores, charlar con el equipo y asegurarte de que entienden la realidad de tu sector antes de tomar una decisión.'
      }
    ]
  }
];
