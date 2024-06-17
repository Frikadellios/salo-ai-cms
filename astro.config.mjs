import node from '@astrojs/node';
import react from '@astrojs/react';
import Vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  vite: {
    plugins: [Inspect({
      build: true,
      outputDir: '.vite-inspect'
    }), tailwindcss()]
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [react(), Vue({
    jsx: true,
    devtools: true
  }), partytown(), sitemap(), mdx()]
});