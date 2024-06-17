import node from '@astrojs/node'
import react from '@astrojs/react'
import Vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
    Inspect({
        build: true,
        outputDir: '.vite-inspect'
      }),
      tailwindcss()],
  },
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react(), Vue({ jsx: true, devtools: true })],
})
