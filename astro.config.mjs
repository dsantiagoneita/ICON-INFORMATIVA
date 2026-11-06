import { defineConfig } from 'astro/config';

// Dirección pública (gratis en Cloudflare Pages). Si luego compran dominio, solo se cambia aquí.
export default defineConfig({
  site: 'https://icon-ltda.pages.dev',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // Direcciones antiguas que cambiaron de nombre: llevan solas a la página nueva
  redirects: {
    '/proyectos': '/trabajos',
    '/clientes': '/quienes-somos',
  },
});
