import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(null, {
    status: 308,
    headers: {
      Location: '/favicon.svg',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
