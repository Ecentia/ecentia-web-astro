/* empty css                                    */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_guQPeoM8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CbEj7L_k.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CX7jBTBY.mjs';
import { $ as $$Contact } from '../chunks/Contact_BAO-XTh4.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageKey": "contacto", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<main data-astro-cid-2mxdoeuz> <section class="contact-page-header" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="header-content fade-in-up" data-astro-cid-2mxdoeuz> <span class="subtitle" data-astro-cid-2mxdoeuz>CONTACTO</span> <h1 class="page-title" data-astro-cid-2mxdoeuz>
Hablemos de <br data-astro-cid-2mxdoeuz><span class="text-gradient" data-astro-cid-2mxdoeuz>Tu Proyecto.</span> </h1> <p class="page-description" data-astro-cid-2mxdoeuz>
¿Tienes una idea en mente? Cuéntanos sobre ella y te ayudaremos a
            convertirla en una solución digital sólida y escalable.
</p> </div> </div> <div class="header-glow" data-astro-cid-2mxdoeuz></div> </section> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-2mxdoeuz": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2mxdoeuz": true })} ` })} `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
