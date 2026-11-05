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
    { valor: 13, sufijo: '', texto: 'Municipios de Sugamuxi' },
  ],
};

// Los 13 municipios de la provincia de Sugamuxi (posiciones aproximadas para el esquema del mapa)
export const municipios = [
  { nombre: 'Gámeza', x: 300, y: 40 },
  { nombre: 'Tópaga', x: 240, y: 70 },
  { nombre: 'Mongua', x: 380, y: 90 },
  { nombre: 'Nobsa', x: 150, y: 120 },
  { nombre: 'Monguí', x: 330, y: 140 },
  { nombre: 'Sogamoso', x: 230, y: 170 },
  { nombre: 'Tibasosa', x: 90, y: 180 },
  { nombre: 'Firavitoba', x: 160, y: 240 },
  { nombre: 'Iza', x: 250, y: 250 },
  { nombre: 'Pesca', x: 110, y: 310 },
  { nombre: 'Cuítiva', x: 320, y: 280 },
  { nombre: 'Tota', x: 250, y: 330 },
  { nombre: 'Aquitania', x: 400, y: 330 },
];

/** Enlace de WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(texto = 'Hola ICON, quisiera información.') {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const menu = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Quiénes somos', ruta: '/quienes-somos' },
  { texto: 'Servicios', ruta: '/servicios' },
  { texto: 'Proyectos', ruta: '/proyectos' },
  { texto: 'Clientes', ruta: '/clientes' },
  { texto: 'Contacto', ruta: '/contacto' },
];
