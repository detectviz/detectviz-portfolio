import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://detectviz.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Integrations
  integrations: [tailwind(), sitemap(), compress({
    css: true,
    html: true,
    js: true,
    img: {
      quality: 80,
    },
    svg: true,
    logger: 1,
  }), preact({
    compat: true
  })],

  // Built-in image optimization settings
  // Removed image service config as sharp is not a direct project dependency
  // image: {
  //   service: {
  //     entrypoint: 'astro/assets/services/sharp'
  //   }
  // },

  vite: {
    clearScreen: false,

    build: {
      cssCodeSplit: true
    },
    ssr: {
      external: ['aos']
    }
  }
});
