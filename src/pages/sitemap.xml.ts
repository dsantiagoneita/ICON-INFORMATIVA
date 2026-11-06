// Mapa del sitio para Google (se genera solo con todas las páginas, en /sitemap.xml).
import type { APIRoute } from 'astro';
import { menu } from '../data/empresa.js';
import { servicios } from '../data/servicios.js';

export const GET: APIRoute = ({ site }) => {
  const rutas = [
    ...menu.map((m) => m.ruta),
    ...servicios.map((s) => `/servicios/${s.slug}`),
  ];
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = rutas
    .map((r) => {
      const prioridad = r === '/' ? '1.0' : r.startsWith('/servicios/') ? '0.8' : '0.7';
      return `  <url><loc>${new URL(r, site).href}</loc><lastmod>${hoy}</lastmod><priority>${prioridad}</priority></url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
