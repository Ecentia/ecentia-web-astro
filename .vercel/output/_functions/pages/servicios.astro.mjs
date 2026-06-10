/* empty css                                    */
import { f as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate, e as createAstro, k as renderComponent } from '../chunks/astro/server_guQPeoM8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbEj7L_k.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CX7jBTBY.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      num: "01",
      title: "Dise\xF1o Web Premium",
      subtitle: "Experiencias que venden por s\xED solas.",
      desc: "Rompemos el molde de lo convencional. No usamos plantillas prefabricadas; dise\xF1amos arquitecturas digitales a medida centradas en la conversi\xF3n. Fusionamos est\xE9tica de vanguardia con psicolog\xEDa de usuario para que tu web no solo sea bonita, sino una m\xE1quina de ventas.",
      tags: ["UI/UX Design", "Figma Prototyping", "Animaciones WebGL", "Desarrollo a Medida"],
      icon: "fa-plus"
    },
    {
      num: "02",
      title: "Automatizaci\xF3n & IA",
      subtitle: "Tu negocio trabajando en piloto autom\xE1tico.",
      desc: "El tiempo es tu activo m\xE1s valioso. Implementamos ecosistemas de Inteligencia Artificial y automatizaciones (Zapier/Make) que eliminan tareas repetitivas. Desde chatbots que cierran ventas hasta sistemas de facturaci\xF3n autom\xE1tica. Escala sin aumentar personal.",
      tags: ["Chatbots IA", "Integraciones API", "CRM Automations", "Lead Scoring"],
      icon: "fa-plus"
    },
    {
      num: "03",
      title: "E-Commerce Avanzado",
      subtitle: "Tiendas r\xE1pidas, seguras y rentables.",
      desc: "Desarrollamos plataformas de comercio electr\xF3nico robustas preparadas para altos vol\xFAmenes de tr\xE1fico. Optimizamos cada paso del checkout para reducir carritos abandonados e implementamos estrategias de venta cruzada (Upselling) inteligentes.",
      tags: ["Shopify & WooCommerce", "Pasarelas de Pago", "Gesti\xF3n de Stock", "CRO"],
      icon: "fa-plus"
    },
    {
      num: "04",
      title: "SEO & Growth",
      subtitle: "Domina los resultados de b\xFAsqueda.",
      desc: "Tener la mejor web del mundo no sirve de nada si es invisible. Trazamos estrategias de posicionamiento agresivas (SEO On-Page, T\xE9cnico y Linkbuilding) para colocarte por delante de tu competencia en las palabras clave que realmente generan facturaci\xF3n.",
      tags: ["Auditor\xEDa T\xE9cnica", "Estrategia de Contenidos", "SEO Local", "Anal\xEDtica Avanzada"],
      icon: "fa-plus"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services-list" class="services-list-section" data-astro-cid-g5jplrhu> <div class="container" data-astro-cid-g5jplrhu> <div class="accordion-wrapper" data-astro-cid-g5jplrhu> ${services.map((service, index) => renderTemplate`<div class="service-item" tabindex="0" data-astro-cid-g5jplrhu> <div class="service-header" data-astro-cid-g5jplrhu> <div class="header-left" data-astro-cid-g5jplrhu> <span class="service-number" data-astro-cid-g5jplrhu>/${service.num}</span> <h3 class="service-title" data-astro-cid-g5jplrhu>${service.title}</h3> </div> <div class="icon-wrapper" data-astro-cid-g5jplrhu> <i class="fas fa-plus toggle-icon" data-astro-cid-g5jplrhu></i> </div> </div> <div class="service-body" data-astro-cid-g5jplrhu> <div class="body-inner" data-astro-cid-g5jplrhu> <h4 class="service-subtitle" data-astro-cid-g5jplrhu>${service.subtitle}</h4> <div class="content-grid" data-astro-cid-g5jplrhu> <p class="service-desc" data-astro-cid-g5jplrhu>${service.desc}</p> <div class="tags-container" data-astro-cid-g5jplrhu> <span class="tags-label" data-astro-cid-g5jplrhu>Tecnologías:</span> <ul class="tags-list" data-astro-cid-g5jplrhu> ${service.tags.map((tag) => renderTemplate`<li data-astro-cid-g5jplrhu>${tag}</li>`)} </ul> </div> </div> </div> </div> <div class="separator" data-astro-cid-g5jplrhu></div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/Services.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/Services.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta-section" data-astro-cid-4xty6sx2> <div class="container" data-astro-cid-4xty6sx2> <div class="cta-content" data-astro-cid-4xty6sx2> <h2 class="cta-title" data-astro-cid-4xty6sx2>
¿Tienes un proyecto en mente? <br data-astro-cid-4xty6sx2> <span class="text-gradient" data-astro-cid-4xty6sx2>Hagámoslo realidad.</span> </h2> <p class="cta-desc" data-astro-cid-4xty6sx2>
Desde el diseño hasta el lanzamiento, te acompañamos en cada etapa 
                para asegurar el éxito de tu producto digital.
</p> <div class="cta-actions" data-astro-cid-4xty6sx2> <a href="/contacto" class="btn-primary" data-astro-cid-4xty6sx2>
Iniciar Conversación
<i class="fas fa-arrow-right" data-astro-cid-4xty6sx2></i> </a> </div> </div> </div> <div class="glow-effect" data-astro-cid-4xty6sx2></div> </section> `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/CTA.astro", void 0);

const $$Astro = createAstro("https://ecentia.es");
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageKey": "servicios", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-wrzvmyuk": true })} ${maybeRenderHead()}<main data-astro-cid-wrzvmyuk> <section class="page-header services-header" data-astro-cid-wrzvmyuk> <div class="container" data-astro-cid-wrzvmyuk> <div class="page-header-content fade-in-up" data-astro-cid-wrzvmyuk> <span class="subtitle" data-astro-cid-wrzvmyuk>LO QUE HACEMOS</span> <h1 class="page-title" data-astro-cid-wrzvmyuk>Ingeniería <br data-astro-cid-wrzvmyuk> <span class="text-gradient" data-astro-cid-wrzvmyuk>Digital.</span></h1> <p class="page-description" data-astro-cid-wrzvmyuk>
No somos solo ejecutores.
                        Somos consultores estratégicos que dominan el código y el diseño para construir ecosistemas digitales escalables.
</p> </div> </div> <div class="header-glow services-glow" data-astro-cid-wrzvmyuk></div> </section> <div class="services-wrapper fade-in-up" data-astro-cid-wrzvmyuk> ${renderComponent($$result2, "ServicesComponent", $$Services, { "data-astro-cid-wrzvmyuk": true })} </div> <section class="capabilities-break" data-astro-cid-wrzvmyuk> <div class="container" data-astro-cid-wrzvmyuk> <div class="capabilities-grid" data-astro-cid-wrzvmyuk> <div class="cap-item" data-astro-cid-wrzvmyuk> <span class="cap-number" data-astro-cid-wrzvmyuk>01</span> <h3 data-astro-cid-wrzvmyuk>Estrategia</h3> <p data-astro-cid-wrzvmyuk>Auditoría SEO, análisis de competencia y roadmaps de producto.</p> </div> <div class="cap-item" data-astro-cid-wrzvmyuk> <span class="cap-number" data-astro-cid-wrzvmyuk>02</span> <h3 data-astro-cid-wrzvmyuk>Diseño</h3> <p data-astro-cid-wrzvmyuk>Sistemas de diseño, UI Kits y experiencias inmersivas.</p> </div> <div class="cap-item" data-astro-cid-wrzvmyuk> <span class="cap-number" data-astro-cid-wrzvmyuk>03</span> <h3 data-astro-cid-wrzvmyuk>Desarrollo</h3> <p data-astro-cid-wrzvmyuk>Arquitecturas JAMstack, Astro, React y optimización Core Web Vitals.</p> </div> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-wrzvmyuk": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-wrzvmyuk": true })} ` })} `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
