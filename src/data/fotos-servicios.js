// Fotos reales de ICON para cada servicio (public/servicios-fotos/).
// portada: fondo del encabezado de la página del servicio (se muestra oscurecido).
// galeria: solo fotos nítidas y claramente relacionadas; si no hay buenas, se deja vacía
// y la página no muestra galería. Los textos alternativos describen lo que se ve, sin datos de obra.

const r = (archivo) => `/servicios-fotos/${archivo}`;

export const fotosServicios = {
  'redes-media-tension': {
    portada: r('mt-portada.jpg'), posicion: 'center 40%',
    galeria: [
      { src: r('mt-1.jpg'), alt: 'Estructura de media tensión con crucetas y aisladores junto a un edificio' },
      { src: r('mt-2.jpg'), alt: 'Estructura de dos postes de media tensión con equipos de protección' },
    ],
  },
  'redes-baja-tension': {
    portada: r('bt-portada.jpg'), posicion: 'center 35%',
    galeria: [
      { src: r('bt-1.jpg'), alt: 'Poste con red trenzada de baja tensión y luminaria LED' },
      { src: r('bt-2.jpg'), alt: 'Poste de concreto con red de baja tensión y luminaria' },
    ],
  },
  'montaje-transformadores': {
    portada: r('trafo-portada.jpg'), posicion: 'center 40%',
    galeria: [
      { src: r('trafo-1.jpg'), alt: 'Transformador montado en poste con su estructura de media tensión' },
    ],
  },
  'posteria-tendido': {
    portada: r('posteria-portada.jpg'), posicion: 'center 40%',
    galeria: [
      { src: r('posteria-1.jpg'), alt: 'Estructura de dos postes con cruceta y cable tendido' },
      { src: r('posteria-2.jpg'), alt: 'Liniero trabajando en altura sobre la cruceta de un poste' },
    ],
  },
  'acometidas-conexion': {
    portada: r('acometidas-portada.jpg'), posicion: 'center 45%',
    galeria: [],
  },
  'mantenimiento-preventivo': {
    portada: r('preventivo-portada.jpg'), posicion: 'center 45%',
    galeria: [
      { src: r('preventivo-1.jpg'), alt: 'Poste con equipo de protección, aisladores y cortacircuitos' },
      { src: r('preventivo-2.jpg'), alt: 'Poste con equipos de la red de media tensión bajo cielo despejado' },
    ],
  },
  'mantenimiento-correctivo': {
    portada: r('correctivo-portada.jpg'), posicion: 'center 35%',
    galeria: [],
  },
  'remodelacion-normalizacion': {
    portada: r('remodelacion-portada.jpg'), posicion: 'center 40%',
    galeria: [],
  },
};

export const fotoEquipo = { src: r('equipo.jpg'), alt: 'Linieros de ICON trabajando en altura sobre una estructura de media tensión' };
