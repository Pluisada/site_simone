/**
 * robots.txt — generated so the Sitemap line always carries the real
 * production domain from SITE_URL, rather than a hardcoded guess.
 * technical-architecture.md §8.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];

  // Only advertise a sitemap once a real domain is configured.
  if (site && site.hostname !== 'example.invalid') {
    lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
