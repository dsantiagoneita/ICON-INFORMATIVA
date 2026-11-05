// Íconos animados propios de cada servicio (SVG 64×64).
// Solo se mueven cuando un elemento padre tiene la clase "vivo" (ver estilos en global.css).

export const iconosServicios = {
  mt: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6 L22 58 M32 6 L42 58 M24.5 46 H39.5 M26.5 34 H37.5 M24.5 46 L37.5 34 M39.5 46 L26.5 34"/><path d="M14 14 H50 M18 24 H46"/><path d="M14 14 v4 M50 14 v4 M18 24 v4 M46 24 v4"/><path class="flujo" d="M0 19 H14 M50 19 H64 M0 29 H18 M46 29 H64"/></svg>`,
  bt: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 8 V58 M8 14 H24"/><path d="M38 58 V40 L49 31 L60 40 V58 Z"/><path class="flujo" d="M24 14 Q36 26 49 31"/><rect class="luz" x="45.5" y="45" width="7" height="7" rx="1"/><path d="M4 58 H62"/></svg>`,
  trafo: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4 V60 M18 10 H46"/><path d="M26 24 V10 M38 24 V10"/><rect x="21" y="24" width="22" height="24" rx="5"/><path class="rayo" d="M34 28 L28 37 H35 L30 45"/></svg>`,
  posteria: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 12 V58 M52 12 V58 M5 16 H19 M45 16 H59 M2 58 H62"/><path class="dibuja" d="M12 16 Q32 34 52 16"/><path class="dibuja d2" d="M7 16 Q30 40 57 16" opacity=".55"/></svg>`,
  acometida: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 6 V58 M3 12 H17"/><path class="flujo" d="M17 12 Q32 14 38 26"/><rect x="38" y="24" width="20" height="30" rx="3"/><circle cx="48" cy="36" r="6"/><path class="aguja" d="M48 36 L48 31.5"/><path d="M42 48 H54"/></svg>`,
  preventivo: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="10" width="34" height="46" rx="4"/><path d="M22 10 V6 H36 V10"/><path class="check" d="M18 23 l4 4 7-8"/><path class="check c2" d="M18 35 l4 4 7-8"/><path class="check c3" d="M18 47 l4 4 7-8"/><path d="M33 25 H40 M33 37 H40 M33 49 H40"/><g class="lupa"><circle cx="50" cy="40" r="7"/><path d="M55 45 L61 51"/></g></svg>`,
  correctivo: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M2 34 H23 M41 34 H62"/><path d="M23 30 v8 M41 30 v8"/><path class="une" d="M23 34 H41"/><g class="chispa"><path d="M32 18 V12 M32 56 V50 M18 22 l-4 -4 M46 22 l4 -4 M18 46 l-4 4 M46 46 l4 4"/></g><path d="M22 6 L28 12 M28 6 L22 12" opacity=".5"/></svg>`,
  remodelacion: `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><g class="viejo"><path d="M18 12 L16 58 M9 18 H26"/></g><path d="M26 38 H36 M32 34 l4 4 -4 4"/><g class="nuevo"><path d="M46 10 V58 M37 16 H55 M39 16 v4 M46 16 v4 M53 16 v4"/></g><path d="M2 58 H62"/></svg>`,
};
