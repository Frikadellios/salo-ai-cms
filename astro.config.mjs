import node from '@astrojs/node';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import Vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import Inspect from 'vite-plugin-inspect';
import mdx from '@astrojs/mdx';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://salo-ai-cms.vercel.app',
  vite: {
    plugins: [Inspect({
      build: true,
      outputDir: '.vite-inspect'
    }), tailwindcss()]
  },
  output: 'server',
  adapter: vercel(),
  integrations: [react(), Vue({
    jsx: true,
    devtools: true
  }), partytown(), sitemap(), mdx()]
});