import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
  site: 'https://weekly.example.com',
  prefetch: true,
  trailingSlash: 'never',
});
