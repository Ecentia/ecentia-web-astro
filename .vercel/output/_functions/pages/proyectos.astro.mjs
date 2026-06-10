/* empty css                                    */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_guQPeoM8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbEj7L_k.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CX7jBTBY.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_DXu8KVfG.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ecentia.es");
const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const projects = [
    {
      title: "Depofibra",
      category: "LANDING WEB",
      description: "Plataforma de comercio de dep\xF3sitos con experiencia inmersiva.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/webs_images/depofibra_sc.png",
      link: "https://depofibra.com",
      reverse: true
    },
    {
      title: "Pizzas a Todo Gas",
      category: "LANDING WEB / RESTAURACI\xD3N",
      description: "Plataforma para pizzer\xEDa optimizada para la velocidad. Sistema de carta y experiencia de usuario fluida para maximizar conversiones.",
      tags: ["Dise\xF1o UI/UX", "Carta online", "Desarrollo Web"],
      image: "/webs_images/pizzasatodogas_sc.png",
      link: "https://pizzasatodogas.com",
      reverse: false
    },
    {
      title: "Daniel Rayo Portfolio",
      category: "DIGITAL PORTFOLIO",
      description: "Portfolio digital totalmente innovador e impactante. Sistema de gesti\xF3n de contenido y personalizaci\xF3n.",
      tags: ["Next.js", "Supabase", "Gesti\xF3n de contenidos"],
      image: "/webs_images/danirayo3d_sc.png",
      link: "https://danirayo3d.es",
      reverse: true
    },
    {
      title: "Eva Torres Moda",
      category: "LANDING E-COMMERCE",
      description: "Gesti\xF3n de productos y dise\xF1o din\xE1mico para tiendas locales.",
      tags: ["Astro", "Tailwind CSS", "Sanity"],
      image: "/webs_images/evatorresmoda_sc.png",
      link: "https://evatorresmoda.com",
      reverse: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageKey": "proyectos", "data-astro-cid-arbd3op2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-arbd3op2": true })} ${maybeRenderHead()}<main data-astro-cid-arbd3op2> <section class="page-header" data-astro-cid-arbd3op2> <div class="container" data-astro-cid-arbd3op2> <div class="page-header-content fade-in-up" data-astro-cid-arbd3op2> <span class="subtitle" data-astro-cid-arbd3op2>CASOS DE ÉXITO</span> <h1 class="page-title" data-astro-cid-arbd3op2>
Experiencia <br data-astro-cid-arbd3op2> <span class="text-gradient" data-astro-cid-arbd3op2>Digital.</span> </h1> <p class="page-description" data-astro-cid-arbd3op2>
Una selección de proyectos donde la estrategia, el diseño y la
            tecnología convergen para crear resultados medibles.
</p> </div> </div> <div class="header-glow" data-astro-cid-arbd3op2></div> </section> <section class="work-section" data-astro-cid-arbd3op2> <div class="container" data-astro-cid-arbd3op2> <div class="project-list" data-astro-cid-arbd3op2> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project, "data-astro-cid-arbd3op2": true })}`)} </div> </div> </section> <section class="project-cta fade-in-up" data-astro-cid-arbd3op2> <div class="container" data-astro-cid-arbd3op2> <div class="cta-box" data-astro-cid-arbd3op2> <h2 data-astro-cid-arbd3op2>¿Listo para empezar el tuyo?</h2> <p data-astro-cid-arbd3op2>Transformamos tus ideas en productos digitales de alto impacto.</p> <a href="/contacto" class="btn-primary" data-astro-cid-arbd3op2>Iniciar Proyecto</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-arbd3op2": true })} ` })} `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
