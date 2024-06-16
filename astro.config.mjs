import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import Vue from "@astrojs/vue";
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), Vue({ jsx: true, devtools: true })]
});