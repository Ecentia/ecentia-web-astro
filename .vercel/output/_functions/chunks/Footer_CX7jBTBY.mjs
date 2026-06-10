import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate } from './astro/server_guQPeoM8.mjs';
import 'piccolore';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro("https://ecentia.es");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const isActive = (path) => {
    return currentPath === path;
  };
  return renderTemplate`${maybeRenderHead()}<nav class="nav-floating" id="main-nav" data-astro-cid-3ef6ksr2> <div class="nav-content" data-astro-cid-3ef6ksr2> <a href="/" class="branding magnet-target" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>Ecentia<span style="color: var(--accent-color);" data-astro-cid-3ef6ksr2>.</span></span> </a> <div class="nav-items" data-astro-cid-3ef6ksr2> <a href="/" class="magnet-target" data-astro-cid-3ef6ksr2>Inicio</a> <a href="/proyectos" class="magnet-target" data-astro-cid-3ef6ksr2>Proyectos</a> <a href="/servicios" class="magnet-target" data-astro-cid-3ef6ksr2>Servicios</a> <a href="/contacto" class="btn-contact magnet-target" data-astro-cid-3ef6ksr2>Contacto</a> </div> <button class="menu-toggle" aria-label="Abrir menú" id="menu-btn" data-astro-cid-3ef6ksr2> <span class="hamburger-line top" data-astro-cid-3ef6ksr2></span> <span class="hamburger-line bottom" data-astro-cid-3ef6ksr2></span> </button> </div> </nav> <div class="mobile-menu-overlay" id="mobile-menu" data-astro-cid-3ef6ksr2> <div class="mobile-links" data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(["mobile-link", { "highlight": isActive("/") }], "class:list")} data-astro-cid-3ef6ksr2>
Inicio
</a> <a href="/proyectos"${addAttribute(["mobile-link", { "highlight": isActive("/proyectos") }], "class:list")} data-astro-cid-3ef6ksr2>
Proyectos
</a> <a href="/servicios"${addAttribute(["mobile-link", { "highlight": isActive("/servicios") }], "class:list")} data-astro-cid-3ef6ksr2>
Servicios
</a> <a href="/contacto"${addAttribute(["mobile-link", { "highlight": isActive("/contacto") }], "class:list")} data-astro-cid-3ef6ksr2>
Contacto
</a> </div> </div> ${renderScript($$result, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const fechaActual = /* @__PURE__ */ new Date();
  const a\u00F1oActual = fechaActual.getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container footer-inner" data-astro-cid-sz7xmlte> <div class="copyright" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Ecentia.</h4> <p data-astro-cid-sz7xmlte>© ${a\u00F1oActual} Ecentia Marketing. Sevilla.</p> </div> <div class="footer-nav" data-astro-cid-sz7xmlte> <a href="/legal/aviso-legal" data-astro-cid-sz7xmlte>Legal</a> <a href="/legal/politica-privacidad" data-astro-cid-sz7xmlte>Privacidad</a> <a href="/legal/politica-cookies" data-astro-cid-sz7xmlte>Cookies</a> </div> <div class="socials" data-astro-cid-sz7xmlte> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ecentiamarketing/" aria-label="Ecentia Marketing en Instagram" data-astro-cid-sz7xmlte><i class="fab fa-instagram" data-astro-cid-sz7xmlte></i></a> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/ecentia-marketing/" aria-label="Ecentia Marketing en LinkedIn" data-astro-cid-sz7xmlte><i class="fab fa-linkedin-in" data-astro-cid-sz7xmlte></i></a> </div> </div> </footer> `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
