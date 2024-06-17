/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="astro/astro-jsx" />

type MyAttributes = astroHTML.JSX.ImgHTMLAttributes

declare module '*.astro' {
  const Component: Astro.Component
  export default Component
}

type Models = import('node-appwrite').Models

declare namespace App {
  interface Locals {
    user?: Models.User<Models.Preferences>
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_APPWRITE_ENDPOINT: string
  readonly PUBLIC_APPWRITE_PROJECT: string
  readonly APPWRITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
