// Interacciones compartidas por todas las páginas.
// Cada bloque revisa si su elemento existe, así sirve para cualquier página.

const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const raiz = document.documentElement;

/* ===== Modo claro / oscuro ===== */
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
function cambiarTema(x: number, y: number) {
  const nuevo = esOscuro() ? 'light' : 'dark';
  const aplicar = () => {
    raiz.dataset.theme = nuevo;
    try { localStorage.setItem('tema', nuevo); } catch (e) { /* sin almacenamiento */ }
    reflejarTema();
  };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
  if (!doc.startViewTransition || reducido) { aplicar(); return; }
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  doc.startViewTransition(aplicar).ready.then(() => {
    raiz.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)', pseudoElement: '::view-transition-new(root)' },
    );
  });
}
botonTema?.addEventListener('click', () => {
  const b = botonTema.getBoundingClientRect();
  cambiarTema(b.left + b.width / 2, b.top + b.height / 2);
});
sistemaOscuro.addEventListener('change', reflejarTema);
reflejarTema();

/* ===== Menú del celular ===== */
const menu = document.getElementById('menu');
const hamburguesa = document.getElementById('hamburguesa');
hamburguesa?.addEventListener('click', () => {
  const abierto = menu!.classList.toggle('abierto');
  hamburguesa.setAttribute('aria-expanded', String(abierto));
});

/* ===== Menú que se encoge, barra de progreso y fotos con profundidad ===== */
const cabecera = document.getElementById('cabecera');
const progreso = document.getElementById('progreso');
const capas = document.querySelectorAll<HTMLElement>('[data-profundidad]');
const linea = document.getElementById('linea');
const carga = document.getElementById('carga');
const pasosLinea = linea ? [...linea.querySelectorAll<HTMLElement>('li')] : [];

function alBajar() {
  const y = scrollY;
  const alto = raiz.scrollHeight - innerHeight;
  cabecera?.classList.toggle('encogido', y > 40);
  if (progreso) progreso.style.width = (alto > 0 ? (y / alto) * 100 : 0) + '%';
  if (!reducido) capas.forEach((c) => {
    const r = c.parentElement!.getBoundingClientRect();
    c.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -Number(c.dataset.profundidad)}px)`;
  });
  // Línea de tiempo que se energiza (páginas de servicio)
  if (linea && carga) {
    const r = linea.getBoundingClientRect();
    const medio = innerHeight * 0.6;
    const avance = Math.min(Math.max((medio - r.top) / r.height, 0), 1);
    carga.style.height = avance * (r.height - 12) + 'px';
    pasosLinea.forEach((li) => li.classList.toggle('on', li.getBoundingClientRect().top < medio));
  }
}
addEventListener('scroll', alBajar, { passive: true });
alBajar();

/* ===== Cifras que cuentan ===== */
function contar(el: HTMLElement) {
  const fin = Number(el.dataset.fin);
  if (reducido) { el.textContent = String(fin); return; }
  let t0: number | undefined;
  const paso = (t: number) => {
    t0 ??= t;
    const k = Math.min(1, (t - t0) / 1600);
    el.textContent = String(Math.round(fin * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

/* ===== Mapa de municipios que se ilumina ===== */
function iluminarMapa(mapa: Element) {
  const orden = (mapa.getAttribute('data-orden') || '').split(',').map(Number);
  orden.forEach((i, k) => setTimeout(() => encenderMunicipio(i), reducido ? 0 : 250 * k));
}
function encenderMunicipio(i: number) {
  document.getElementById('m' + i)?.classList.add('luz');
  document.querySelector(`.municipios [data-i="${i}"]`)?.classList.add('luz');
}
document.querySelectorAll<HTMLElement>('.municipios [data-i]').forEach((s) =>
  s.addEventListener('mouseenter', () => encenderMunicipio(Number(s.dataset.i))),
);

/* ===== Aparecer al bajar ===== */
const vigia = new IntersectionObserver((entradas) => entradas.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement;
  el.classList.add('ver');
  el.querySelectorAll<HTMLElement>('.num[data-fin]').forEach(contar);
  const mapa = el.querySelector('[data-orden]');
  if (mapa) iluminarMapa(mapa);
  vigia.unobserve(el);
}), { threshold: 0.18 });
document.querySelectorAll('.rev, [data-energia]').forEach((el) => vigia.observe(el));

/* ===== Botones con imán (solo con mouse) ===== */
if (matchMedia('(hover: hover)').matches && !reducido) {
  document.querySelectorAll<HTMLElement>('.iman').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener('mouseleave', () => (b.style.transform = ''));
  });
}

/* ===== Frase que rota por municipios ===== */
const rota = document.getElementById('rota');
if (rota && !reducido) {
  const lugares = (rota.dataset.lugares || '').split(',');
  let i = 0;
  setInterval(() => {
    i = (i + 1) % lugares.length;
    rota.innerHTML = `<span>${lugares[i]}</span>`;
  }, 2600);
}

/* ===== Galería deslizable ===== */
const carril = document.getElementById('carril');
if (carril) {
  const mover = (d: number) => {
    const obra = carril.querySelector<HTMLElement>('.obra');
    if (obra) carril.scrollBy({ left: d * (obra.offsetWidth + 20), behavior: 'smooth' });
  };
  document.getElementById('ant')?.addEventListener('click', () => mover(-1));
  document.getElementById('sig')?.addEventListener('click', () => mover(1));
  let x0 = 0, s0 = 0, abajo = false;
  carril.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    abajo = true; x0 = e.clientX; s0 = carril.scrollLeft; carril.classList.add('arrastrando');
  });
  addEventListener('pointermove', (e) => { if (abajo) carril.scrollLeft = s0 - (e.clientX - x0); });
  addEventListener('pointerup', () => { abajo = false; carril.classList.remove('arrastrando'); });
}

/* ===== Íconos que se animan al pasar el mouse ===== */
document.querySelectorAll<HTMLElement>('.otro').forEach((el) => {
  el.addEventListener('mouseenter', () => el.classList.add('vivo'));
  el.addEventListener('mouseleave', () => el.classList.remove('vivo'));
});

/* ===== Íconos que se animan solos, uno tras otro ===== */
document.querySelectorAll<HTMLElement>('[data-ciclo]').forEach((grupo) => {
  const items = [...grupo.querySelectorAll<HTMLElement>('.otro')];
  if (!items.length || reducido) return;
  let i = 0;
  setInterval(() => {
    items.forEach((el, k) => el.classList.toggle('activo-ciclo', k === i));
    items.forEach((el, k) => el.classList.toggle('vivo', k === i || el.matches(':hover')));
    i = (i + 1) % items.length;
  }, 1600);
});

/* ===== Comparador antes / después ===== */
document.querySelectorAll<HTMLElement>('[data-comparador]').forEach((c) => {
  const rango = c.querySelector<HTMLInputElement>('input')!;
  const despues = c.querySelector<SVGElement | HTMLElement>('.despues')!;
  const mango = c.querySelector<HTMLElement>('.mango')!;
  const poner = (v: number) => {
    rango.value = String(v);
    despues.style.clipPath = `inset(0 0 0 ${v}%)`;
    mango.style.left = v + '%';
  };
  let tocado = false;
  rango.addEventListener('input', () => { tocado = true; poner(Number(rango.value)); });
  // Al aparecer, se mueve solo una vez para mostrar el antes y el después (sin que haya que tocarlo)
  if (!reducido) {
    const vigiaComp = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      vigiaComp.disconnect();
      const puntos = [50, 18, 82, 50];
      const dur = 3200;
      let t0: number | undefined;
      const paso = (t: number) => {
        if (tocado) return;
        t0 ??= t;
        const k = Math.min(1, (t - t0) / dur);
        const tramo = Math.min(puntos.length - 2, Math.floor(k * (puntos.length - 1)));
        const local = k * (puntos.length - 1) - tramo;
        const suave = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
        poner(puntos[tramo] + (puntos[tramo + 1] - puntos[tramo]) * suave);
        if (k < 1) requestAnimationFrame(paso);
      };
      setTimeout(() => requestAnimationFrame(paso), 600);
    }, { threshold: 0.6 });
    vigiaComp.observe(c);
  }
});
