// Interacciones compartidas por todas las páginas.
// Estilo sobrio: sin efectos de movimiento. Las únicas animaciones del sitio
// son la escena de postes de la portada y el pulso del botón de WhatsApp (en CSS).

const raiz = document.documentElement;

/* ===== Pantalla de carga (dos postes con una luz que viaja entre ellos) =====
   Se ve al recargar y al pasar de una página a otra del sitio. Dura lo que tarde
   en cargar la página, con un mínimo corto para que la animación alcance a leerse. */
const cargador = document.getElementById('cargador');
const MINIMO_MS = 550;
const inicio = performance.now();
const ocultarCargador = () => {
  const espera = Math.max(0, MINIMO_MS - (performance.now() - inicio));
  setTimeout(() => cargador?.classList.add('oculto'), espera);
};
// Se quita apenas la página está lista para leerse (no espera a que carguen todas las fotos)
if (document.readyState !== 'loading') ocultarCargador();
else document.addEventListener('DOMContentLoaded', ocultarCargador, { once: true });
setTimeout(() => cargador?.classList.add('oculto'), 2000); // por si algo se demora
// Al volver con el botón «atrás» el navegador puede restaurar la página guardada: no mostrar el cargador
addEventListener('pageshow', (e) => { if (e.persisted) cargador?.classList.add('oculto'); });
// Al hacer clic en un enlace a otra página del sitio, mostrar el cargador mientras llega la siguiente
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.('a');
  if (!a || !cargador || e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (a.target && a.target !== '_self') return;
  if (a.hasAttribute('download')) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return; // WhatsApp, teléfono, correo, Google Maps…
  if (url.pathname === location.pathname && url.hash) return; // enlace dentro de la misma página
  cargador.classList.remove('oculto');
});

/* ===== Modo claro / oscuro (cambio inmediato) ===== */
const botonTema = document.getElementById('tema');
const globoTema = document.getElementById('globo-tema');
const sistemaOscuro = matchMedia('(prefers-color-scheme: dark)');
const esOscuro = () => (raiz.dataset.theme ? raiz.dataset.theme === 'dark' : sistemaOscuro.matches);
function reflejarTema() {
  const o = esOscuro();
  raiz.classList.toggle('oscuro', o);
  botonTema?.setAttribute('aria-label', o ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  if (globoTema) globoTema.textContent = o ? 'Modo claro' : 'Modo oscuro';
}
botonTema?.addEventListener('click', () => {
  const nuevo = esOscuro() ? 'light' : 'dark';
  raiz.dataset.theme = nuevo;
  try { localStorage.setItem('tema', nuevo); } catch (e) { /* sin almacenamiento */ }
  reflejarTema();
});
sistemaOscuro.addEventListener('change', reflejarTema);
reflejarTema();

/* ===== Portada: la palabra cambia por los municipios donde trabajamos ===== */
const rota = document.getElementById('rota');
if (rota && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lugares = (rota.dataset.lugares || '').split(',').filter(Boolean);
  let i = 0;
  setInterval(() => {
    i = (i + 1) % lugares.length;
    const palabra = document.createElement('span');
    palabra.className = 'rota-palabra entra';
    palabra.textContent = lugares[i];
    rota.replaceChildren(palabra);
  }, 2400);
}

/* ===== Menú del celular ===== */
const menu = document.getElementById('menu');
const hamburguesa = document.getElementById('hamburguesa');
hamburguesa?.addEventListener('click', () => {
  const abierto = menu!.classList.toggle('abierto');
  hamburguesa.setAttribute('aria-expanded', String(abierto));
});

/* ===== Galería de obras: flechas a los lados (un clic = una obra); en celular se desliza con el dedo ===== */
const carril = document.getElementById('carril');
if (carril) {
  const ant = document.getElementById('ant') as HTMLButtonElement | null;
  const sig = document.getElementById('sig') as HTMLButtonElement | null;
  const paso = () => {
    const obra = carril.querySelector<HTMLElement>('.obra');
    return obra ? obra.offsetWidth + parseFloat(getComputedStyle(carril).columnGap || '20') : 0;
  };
  const actualizar = () => {
    const max = carril.scrollWidth - carril.clientWidth - 2;
    if (ant) ant.disabled = carril.scrollLeft <= 2;
    if (sig) sig.disabled = carril.scrollLeft >= max;
  };
  ant?.addEventListener('click', () => carril.scrollBy({ left: -paso(), behavior: 'smooth' }));
  sig?.addEventListener('click', () => carril.scrollBy({ left: paso(), behavior: 'smooth' }));
  carril.addEventListener('scroll', actualizar, { passive: true });
  addEventListener('resize', actualizar);
  actualizar();
}

/* ===== Comparador antes / después (se mueve solo si la persona lo arrastra) ===== */
document.querySelectorAll<HTMLElement>('[data-comparador]').forEach((c) => {
  const rango = c.querySelector<HTMLInputElement>('input')!;
  const despues = c.querySelector<SVGElement | HTMLElement>('.despues')!;
  const mango = c.querySelector<HTMLElement>('.mango')!;
  rango.addEventListener('input', () => {
    despues.style.clipPath = `inset(0 0 0 ${rango.value}%)`;
    mango.style.left = rango.value + '%';
  });
});
