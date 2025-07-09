/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.yml' {
  const data: any;
  export default data;
}