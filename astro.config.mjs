// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    allowedHosts: ['porfolio.tonyml.com']
  },

  integrations: [tailwind()],
  adapter: cloudflare()
});