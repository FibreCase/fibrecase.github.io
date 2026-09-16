// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fibrecase.github.io',
  outDir: 'dist',
  // Static output: every page (/, /zh) is pre-rendered at build time.
});
