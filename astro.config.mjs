// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://porfolio.tonyml.com",
  server: {
    port: 3000,
    allowedHosts: ['porfolio.tonyml.com']
  },
  integrations: [tailwind()]
});
