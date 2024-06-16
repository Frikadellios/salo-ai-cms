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
