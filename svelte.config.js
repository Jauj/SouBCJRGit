import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Obligatoire pour GitHub Pages : les assets (logo, CSS, JS)
    // doivent être servis sous /SouBCJRGit/
    // Quand cjr-soub.fr sera configuré, changer en: base: '/'
    paths: {
      base: '/SouBCJRGit'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      strict: true
    }),
    prerender: {
      handleHttpError: 'warn',
      // Activer le prerendering pour toutes les pages
      entries: ['*']
    }
  }
};

export default config;