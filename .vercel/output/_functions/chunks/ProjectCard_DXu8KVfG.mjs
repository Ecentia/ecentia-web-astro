import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_guQPeoM8.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://ecentia.es");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, category, description, tags, image, link, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["project-card fade-in-up", { reverse }], "class:list")} data-astro-cid-mspuyifq> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="project-image-container" data-astro-cid-mspuyifq> <div class="image-overlay" data-astro-cid-mspuyifq> <span data-astro-cid-mspuyifq>Ver Proyecto</span> </div> <img${addAttribute(image, "src")}${addAttribute(`Captura del proyecto ${title}`, "alt")} loading="lazy" data-astro-cid-mspuyifq> </a> <div class="project-content" data-astro-cid-mspuyifq> <div class="content-header" data-astro-cid-mspuyifq> <span class="project-category" data-astro-cid-mspuyifq>${category}</span> <h3 class="project-title" data-astro-cid-mspuyifq> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-mspuyifq>${title}</a> </h3> </div> <p class="project-description" data-astro-cid-mspuyifq>${description}</p> <ul class="project-tags" data-astro-cid-mspuyifq> ${tags.map((tag) => renderTemplate`<li data-astro-cid-mspuyifq>${tag}</li>`)} </ul> </div> </article> `;
}, "C:/Users/josem/Documents/GitHub/ecentia-web-astro/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
