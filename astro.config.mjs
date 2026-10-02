// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fibrecase.github.io',
  outDir: 'dist',
  // Static output: the profile and CFD case notes are pre-rendered at build time.
});
