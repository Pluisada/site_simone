// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Landpage Simone — Astro configuration.
 *
 * Per docs/architecture/technical-architecture.md (approved):
 *  - static output only; no SSR, no Cloudflare adapter
 *  - no UI framework integrations (React/Vue/Svelte)
 *  - images optimized at build time via astro:assets (Sharp)
 *
 * `site` drives canonical URLs, Open Graph URLs and the future sitemap.
 * The production domain is still an open client-validation item
 * (technical-architecture.md §8), so it is read from an env var with a
 * clearly non-production placeholder fallback.
 */
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.invalid',
  output: 'static',
  // Clean, extensionless URLs (/sobre, not /sobre.html) with no trailing slash,
  // so canonical/OG URLs stay tidy on Cloudflare Pages.
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  image: {
    // Explicit: build-time optimization, no runtime image service.
    responsiveStyles: true,
  },
});
