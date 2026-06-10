/* empty css                                    */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_guQPeoM8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbEj7L_k.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CX7jBTBY.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404: P\xE1gina no encontrada | Ecentia", "description": "La p\xE1gina que buscas no existe o ha sido movida.", "noindex": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <section class="error-section" data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error-content fade-in-up" data-astro-cid-zetdm5md> <span class="subtitle" data-astro-cid-zetdm5md>ERROR 404</span> <h1 class="error-code" id="error-code-heading" data-astro-cid-zetdm5md>404</h1> <h2 class="error-title" data-astro-cid-zetdm5md>
Parece que te <br data-astro-cid-zetdm5md> <span class="text-gradient" data-astro-cid-zetdm5md>has perdido.</span> </h2> <p class="error-description" data-astro-cid-zetdm5md>
La página que buscas no existe, ha cambiado de dirección o no está disponible temporalmente.
</p> <div class="error-actions" data-astro-cid-zetdm5md> <a href="/" class="btn-primary" id="btn-back-home" data-astro-cid-zetdm5md>Volver al Inicio</a> <a href="/contacto" class="btn-secondary" id="btn-goto-contact" data-astro-cid-zetdm5md>Contacto</a> </div> </div> </div> <div class="header-glow" data-astro-cid-zetdm5md></div> <div class="glow-orb" data-astro-cid-zetdm5md></div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
