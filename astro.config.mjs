import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sifath.net',
  redirects: {
    '/articles': '/blog',
    '/articles/representation-in-education': '/blog/representation-in-education',
  },
});
