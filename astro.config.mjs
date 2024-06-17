import node from '@astrojs/node'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import Vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import Inspect from 'vite-plugin-inspect'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      Inspect({
        build: true,
        outputDir: '.vite-inspect',
      }),
      tailwindcss(),
    ],
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
    Vue({
      jsx: true,
      devtools: true,
    }),
    partytown(),
    sitemap(),
    mdx(),
  ],
})
