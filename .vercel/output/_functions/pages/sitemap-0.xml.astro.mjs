export { renderers } from '../renderers.mjs';

const GET = async () => {
  const baseUrl = "https://ecentia.com";
  const pages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/servicios", priority: "0.9", changefreq: "weekly" },
    { url: "/proyectos", priority: "0.9", changefreq: "weekly" },
    { url: "/contacto", priority: "0.8", changefreq: "monthly" },
    { url: "/legal/aviso-legal", priority: "0.3", changefreq: "yearly" },
    { url: "/legal/politica-privacidad", priority: "0.3", changefreq: "yearly" },
    { url: "/legal/politica-cookies", priority: "0.3", changefreq: "yearly" }
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === "" ? `<image:image>
      <image:loc>${baseUrl}/logo.avif</image:loc>
      <image:title>Ecentia Marketing - Agencia Digital</image:title>
      <image:caption>Logo oficial de Ecentia Marketing</image:caption>
    </image:image>` : ""}
  </url>`).join("\n")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
