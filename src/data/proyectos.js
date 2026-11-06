// Trabajos de ICON, mostrados por TIPO de trabajo (decisión del 2026-11-06).
// Las fotos son reales (entregadas por ICON, en public/obras/), pero las descripciones son generales:
// explican el trabajo o el equipo que se ve, sin afirmar datos de un proyecto específico
// (no se muestran municipio, año ni cliente hasta que ICON los confirme).
// servicio: slug de src/data/servicios.js, o null si no corresponde a uno de los 8 servicios.

export const proyectos = [
  {
    titulo: 'Reconectadores',
    servicio: 'redes-media-tension',
    tipo: 'Red de media tensión',
    texto: 'Equipos que protegen la red de media tensión: cuando hay una falla, cortan el paso de energía y lo restablecen automáticamente. Los instalamos en estructuras de uno o dos postes, con cortacircuitos y pararrayos.',
    foto: '/obras/reconectador.jpg',
    alt: 'Reconectador instalado en una estructura de dos postes de concreto con crucetas y aisladores',
    posicion: 'center 40%',
  },
  {
    titulo: 'Subestaciones en edificios',
    servicio: 'montaje-transformadores',
    tipo: 'Montaje de transformadores',
    texto: 'Cuartos eléctricos con celdas de media tensión y transformador seco, que llevan la energía de la red a edificios y conjuntos, con señalización y demarcación de seguridad.',
    foto: '/obras/subestacion-edificio.jpg',
    alt: 'Transformador seco trifásico de bobinas verdes instalado dentro de su celda',
    posicion: 'center 45%',
  },
  {
    titulo: 'Transformadores tipo pedestal',
    servicio: 'montaje-transformadores',
    tipo: 'Montaje de transformadores',
    texto: 'Transformadores instalados a nivel del piso, sobre base de concreto y dentro de un gabinete cerrado. Son una opción segura donde no conviene montar el transformador en un poste.',
    foto: '/obras/transformador-pedestal.jpg',
    alt: 'Transformador tipo pedestal sobre base de concreto con señalización de riesgo eléctrico',
    posicion: 'center 45%',
  },
  {
    titulo: 'Trabajo en altura',
    servicio: 'posteria-tendido',
    tipo: 'Postería y tendido de cable',
    texto: 'Armado de estructuras de media tensión: crucetas, aisladores y tendido de cable, siempre con equipo de protección y procedimientos de trabajo seguro.',
    foto: '/obras/linieros-estructura.jpg',
    alt: 'Dos linieros trabajando en altura sobre una estructura de dos postes de media tensión',
    posicion: 'center 35%',
  },
  {
    titulo: 'Alumbrado público',
    servicio: null,
    icono: 'alumbrado', // ícono propio (no es uno de los 8 servicios)
    tipo: 'Alumbrado público',
    texto: 'Instalación de luminarias en calles y espacios públicos, incluidos faroles ornamentales acordes con la arquitectura tradicional de cada municipio.',
    foto: '/obras/alumbrado-topaga.jpg',
    alt: 'Farol ornamental de alumbrado público con brazo de hierro forjado',
    posicion: 'center 35%',
  },
  {
    titulo: 'Redes subterráneas',
    servicio: 'redes-media-tension',
    tipo: 'Red de media tensión',
    texto: 'Paso de la red aérea a la subterránea: el cable baja por el poste dentro de tubería protegida, con cortacircuitos y pararrayos.',
    foto: '/obras/transicion-subterranea.jpg',
    alt: 'Poste de concreto con cortacircuitos, pararrayos y cables que bajan por tubería galvanizada',
    posicion: 'center 30%',
  },
];
