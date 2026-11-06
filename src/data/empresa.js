// Datos generales de ICON Ltda.
// ⚠ Los marcados con "PENDIENTE" son de ejemplo y se reemplazan cuando ICON entregue los reales.

export const empresa = {
  nombre: 'ICON Ltda',
  lema: 'Redes eléctricas de baja y media tensión en Sugamuxi',
  ciudad: 'Duitama', // sede de la oficina (la zona de trabajo es Sugamuxi)
  departamento: 'Boyacá',
  // WhatsApp: formato internacional sin "+" ni espacios (57 = Colombia)
  whatsapp: '573027410203',
  telefono: '302 741 0203',
  telefonoEnlace: '+573027410203',
  correo: 'iconcontratista@gmail.com',
  direccion: 'Calle 11 # 17-46, Duitama',
  // Horario real (dato de ICON). dias: 0 = domingo … 6 = sábado. Horas en formato 24 h (hora de Colombia).
  horario: [
    { texto: 'Lunes a viernes', horas: '8:00 a. m. – 6:00 p. m.', dias: [1, 2, 3, 4, 5], desde: '08:00', hasta: '18:00' },
    { texto: 'Sábados', horas: '8:00 a. m. – 12:00 m.', dias: [6], desde: '08:00', hasta: '12:00' },
  ],
  cifras: [
    // Cifras dadas por ICON
    { valor: 8, sufijo: '+', texto: 'Años de experiencia' },
    { valor: 200, sufijo: '+', texto: 'Obras entregadas' },
    { valor: 21, sufijo: '', texto: 'Municipios atendidos' },
  ],
};

// Lugares donde trabaja ICON (dato real, 2026-11-06): 21 municipios y 2 puntos clave de la red.
// x, y = posición en el esquema del mapa (aproximada a la geografía real, no a escala).
// tipo 'punto' = punto clave de la red (no es municipio).
export const municipios = [
  // Provincia de Sugamuxi
  { nombre: 'Sogamoso', x: 140, y: 180 },
  { nombre: 'Aquitania', x: 240, y: 340 },
  { nombre: 'Cuítiva', x: 150, y: 310 },
  { nombre: 'Firavitoba', x: 50, y: 240 },
  { nombre: 'Gámeza', x: 350, y: 110 },
  { nombre: 'Iza', x: 160, y: 250 },
  { nombre: 'Mongua', x: 350, y: 170 },
  { nombre: 'Monguí', x: 250, y: 175 },
  { nombre: 'Nobsa', x: 130, y: 110 },
  { nombre: 'Pesca', x: 40, y: 320 },
  { nombre: 'Tibasosa', x: 40, y: 175 },
  { nombre: 'Tópaga', x: 240, y: 110 },
  { nombre: 'Tota', x: 110, y: 375 },
  // Provincia de La Libertad
  { nombre: 'Labranzagrande', x: 430, y: 330 },
  { nombre: 'Pajarito', x: 360, y: 430 },
  { nombre: 'Pisba', x: 490, y: 150 },
  { nombre: 'Paya', x: 520, y: 240 },
  // Municipios vecinos del norte
  { nombre: 'Betéitiva', x: 310, y: 40 },
  { nombre: 'Busbanzá', x: 120, y: 45 },
  { nombre: 'Corrales', x: 215, y: 45 },
  { nombre: 'Tasco', x: 410, y: 40 },
  // Puntos clave de la red
  { nombre: 'El Crucero', x: 300, y: 265, tipo: 'punto', nota: 'Nodo de ramificación' },
  { nombre: 'Vado Hondo', x: 410, y: 250, tipo: 'punto', nota: 'Paso de red hacia La Libertad' },
];

// Conexiones del esquema (por nombre): dibujan la «red» entre los lugares.
export const conexiones = [
  ['Sogamoso', 'Nobsa'], ['Nobsa', 'Busbanzá'], ['Busbanzá', 'Corrales'], ['Corrales', 'Tópaga'],
  ['Corrales', 'Betéitiva'], ['Betéitiva', 'Tasco'], ['Tópaga', 'Gámeza'], ['Gámeza', 'Tasco'],
  ['Sogamoso', 'Tópaga'], ['Sogamoso', 'Monguí'], ['Monguí', 'Mongua'], ['Mongua', 'Gámeza'],
  ['Sogamoso', 'Tibasosa'], ['Sogamoso', 'Firavitoba'], ['Sogamoso', 'Iza'], ['Iza', 'Cuítiva'],
  ['Cuítiva', 'Pesca'], ['Cuítiva', 'Tota'], ['Cuítiva', 'Aquitania'], ['Aquitania', 'El Crucero'],
  ['Monguí', 'El Crucero'], ['El Crucero', 'Vado Hondo'], ['Vado Hondo', 'Labranzagrande'],
  ['El Crucero', 'Pajarito'], ['Labranzagrande', 'Paya'], ['Paya', 'Pisba'], ['Mongua', 'Pisba'],
];

export const totalMunicipios = municipios.filter((m) => m.tipo !== 'punto').length;

/** Enlace de WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(texto = 'Hola ICON, quisiera información.') {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const menu = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Quiénes somos', ruta: '/quienes-somos' },
  { texto: 'Servicios', ruta: '/servicios' },
  { texto: 'Trabajos realizados', ruta: '/trabajos' },
  { texto: 'Contacto', ruta: '/contacto' },
];
