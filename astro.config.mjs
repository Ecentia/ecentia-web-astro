import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; 
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ecentia.es',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'server',
  adapter: vercel(),
});