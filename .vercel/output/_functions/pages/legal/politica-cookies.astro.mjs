/* empty css                                       */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_guQPeoM8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CbEj7L_k.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$PoliticaCookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pol\xEDtica de Cookies - Ecentia", "bodyClass": "legal-body", "showLoader": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="legal-header fade-in-up"> <div class="logo"> <a href="/" style="text-decoration: none; color: inherit;"> <h3>Ecentia<span class="logo-dot">.</span></h3> </a> </div> <div class="header-actions"> <a href="/" class="btn-ghost">Volver al Inicio</a> </div> </header> <main class="legal-main fade-in-up"> <div class="legal-title-header"> <h1>Centro Legal</h1> <p style="color: var(--text-muted);">Uso de tecnologías de rastreo.</p> </div> <div class="legal-grid"> <aside class="legal-sidebar"> <h3>Documentación</h3> <a href="/legal/aviso-legal" class="legal-nav-link">Aviso Legal <i class="fas fa-chevron-right"></i></a> <a href="/legal/politica-privacidad" class="legal-nav-link">Privacidad <i class="fas fa-chevron-right"></i></a> <a href="/legal/politica-cookies" class="legal-nav-link active">Cookies <i class="fas fa-chevron-right"></i></a> </aside> <div class="legal-document"> <h2>Política de Cookies</h2> <div class="legal-content-block"> <p>Este sitio web utiliza cookies para asegurar que obtenga la mejor experiencia en nuestra página web.</p> <h3>1. ¿Qué son las Cookies?</h3> <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p> <h3>2. Tipos de Cookies que utilizamos</h3> <ul> <li><strong>Cookies técnicas:</strong> Son aquellas imprescindibles para el funcionamiento de la web (ej. control de tráfico, sesión).</li> <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico.</li> </ul> <h3>3. Desactivación de Cookies</h3> <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (Chrome, Firefox, Safari, Edge).</p> </div> </div> </div> </main> <footer class="legal-footer"> <div class="container"> <div>© 2025 Ecentia Marketing</div> <div class="legal-links"> <a href="/legal/aviso-legal">Aviso Legal</a> |
<a href="/legal/politica-privacidad">Privacidad</a> |
<span class="current-link">Cookies</span> </div> </div> </footer> ` })}`;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/legal/politica-cookies.astro", void 0);

const $$file = "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/pages/legal/politica-cookies.astro";
const $$url = "/legal/politica-cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PoliticaCookies,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
