// Los 8 servicios de ICON en dos grupos.
// ⚠ Textos de ejemplo: se ajustan con la información real de ICON.

export const grupos = {
  construccion: { nombre: 'Construcción', icono: 'building-factory-2' },
  mantenimiento: { nombre: 'Mantenimiento', icono: 'tool' },
};

export const servicios = [
  {
    slug: 'redes-media-tension',
    icono: 'mt',
    grupo: 'construccion',
    n: '01',
    titulo: 'Redes de media tensión',
    corto: 'Construcción de redes de media tensión según la norma de la EBSA, hasta su energización.',
    descripcion:
      'Construimos redes de media tensión en los 13 municipios de Sugamuxi, cumpliendo las normas de la EBSA: postes, crucetas, aisladores, cable y puesta en servicio.',
    incluye: ['Postes y crucetas', 'Aisladores', 'Cable desnudo y ecológico', 'Puesta en servicio'],
    casos: [
      { icono: 'building-community', titulo: 'Nuevas veredas o barrios', texto: 'Llevar energía a zonas que aún no tienen red cercana.' },
      { icono: 'building-warehouse', titulo: 'Empresas y fincas', texto: 'Cargas grandes que necesitan su propio transformador.' },
      { icono: 'arrows-exchange', titulo: 'Ampliación de red', texto: 'Extender la red existente o aumentar su capacidad.' },
    ],
    pasos: [
      { titulo: 'Visita y diseño', texto: 'Recorremos el terreno, medimos distancias y diseñamos la red: trazado, postes y materiales.' },
      { titulo: 'Trámite ante la EBSA', texto: 'Preparamos y radicamos los documentos para la aprobación del proyecto.' },
      { titulo: 'Construcción', texto: 'Hincado de postes, montaje de crucetas y aisladores, y tendido del cable.' },
      { titulo: 'Pruebas y energización', texto: 'Revisamos todo, la EBSA recibe la obra y la red queda en servicio.' },
    ],
  },
  {
    slug: 'redes-baja-tension',
    icono: 'bt',
    grupo: 'construccion',
    n: '02',
    titulo: 'Redes de baja tensión',
    corto: 'Redes que llevan la energía del transformador hasta viviendas, comercios y fincas.',
    descripcion:
      'Construimos y extendemos redes de baja tensión para viviendas, veredas y comercio, con red trenzada, herrajes y puesta a tierra según la norma de la EBSA.',
    incluye: ['Red trenzada', 'Herrajes', 'Puesta a tierra', 'Conexión a usuarios'],
    casos: [
      { icono: 'home', titulo: 'Viviendas nuevas', texto: 'Conectar casas y urbanizaciones a la red.' },
      { icono: 'building-store', titulo: 'Comercio', texto: 'Locales y negocios que necesitan servicio de energía.' },
      { icono: 'plant-2', titulo: 'Fincas y veredas', texto: 'Llevar la red de baja tensión a zonas rurales.' },
    ],
    pasos: [
      { titulo: 'Visita y diseño', texto: 'Revisamos el sitio y diseñamos la red desde el transformador más cercano.' },
      { titulo: 'Aprobación', texto: 'Gestionamos la aprobación del proyecto ante la EBSA.' },
      { titulo: 'Construcción', texto: 'Instalamos postes, herrajes y red trenzada.' },
      { titulo: 'Conexión', texto: 'Conectamos a los usuarios y la red queda en servicio.' },
    ],
  },
  {
    slug: 'montaje-transformadores',
    icono: 'trafo',
    grupo: 'construccion',
    n: '03',
    titulo: 'Montaje de transformadores',
    corto: 'Instalación de transformadores en poste con todas sus protecciones.',
    descripcion:
      'Instalamos, conectamos y ponemos en servicio transformadores en poste, con cortacircuitos, pararrayos y puesta a tierra.',
    incluye: ['Transformador en poste', 'Cortacircuitos', 'Pararrayos', 'Pruebas'],
    casos: [
      { icono: 'trending-up', titulo: 'Más carga', texto: 'Cuando el transformador actual ya no alcanza.' },
      { icono: 'building-warehouse', titulo: 'Proyectos nuevos', texto: 'Empresas, fincas o conjuntos que necesitan uno propio.' },
      { icono: 'refresh', titulo: 'Reemplazo', texto: 'Cambio de transformadores dañados o viejos.' },
    ],
    pasos: [
      { titulo: 'Cálculo y diseño', texto: 'Calculamos la carga y diseñamos la instalación del transformador.' },
      { titulo: 'Aprobación', texto: 'Trámite del proyecto ante la EBSA.' },
      { titulo: 'Montaje', texto: 'Instalamos el transformador y sus protecciones en el poste.' },
      { titulo: 'Pruebas y servicio', texto: 'Pruebas eléctricas y puesta en servicio.' },
    ],
  },
  {
    slug: 'posteria-tendido',
    icono: 'posteria',
    grupo: 'construccion',
    n: '04',
    titulo: 'Postería y tendido de cable',
    corto: 'Hincado de postes de concreto y tendido de cable en zonas urbanas y rurales.',
    descripcion:
      'Hincamos postes de concreto y tendemos cable en zonas urbanas y rurales, incluidas las de difícil acceso, con retenidas y tensionado según la norma.',
    incluye: ['Postes de 8 a 14 m', 'Retenidas', 'Tendido y tensionado', 'Zonas de difícil acceso'],
    casos: [
      { icono: 'route', titulo: 'Nuevos tramos', texto: 'Abrir camino a la red por veredas y vías.' },
      { icono: 'mountain', titulo: 'Terreno difícil', texto: 'Montaña, pendientes y zonas sin acceso vehicular.' },
      { icono: 'arrows-exchange', titulo: 'Cambio de postes', texto: 'Reemplazar postes de madera o en mal estado.' },
    ],
    pasos: [
      { titulo: 'Replanteo', texto: 'Marcamos en el terreno dónde va cada poste.' },
      { titulo: 'Hincado', texto: 'Excavamos e hincamos los postes con sus retenidas.' },
      { titulo: 'Tendido', texto: 'Tendemos y tensionamos el cable.' },
      { titulo: 'Revisión', texto: 'Verificamos alturas, distancias y tensiones.' },
    ],
  },
  {
    slug: 'acometidas-conexion',
    icono: 'acometida',
    grupo: 'construccion',
    n: '05',
    titulo: 'Acometidas y conexión',
    corto: 'Conexión de nuevos usuarios a la red, con su medidor y acometida.',
    descripcion:
      'Conectamos nuevos usuarios a la red con su acometida, caja y medidor, dejando todo listo para la legalización ante la EBSA.',
    incluye: ['Acometidas', 'Medidores', 'Cajas de medición', 'Legalización'],
    casos: [
      { icono: 'home', titulo: 'Casa nueva', texto: 'Primera conexión de una vivienda a la red.' },
      { icono: 'building-store', titulo: 'Local o negocio', texto: 'Servicio de energía para comercio.' },
      { icono: 'file-check', titulo: 'Normalización', texto: 'Legalizar conexiones que no cumplen la norma.' },
    ],
    pasos: [
      { titulo: 'Solicitud', texto: 'Revisamos los datos del predio y la red cercana.' },
      { titulo: 'Instalación', texto: 'Instalamos la acometida y la caja de medición.' },
      { titulo: 'Medidor', texto: 'Montamos y conectamos el medidor.' },
      { titulo: 'Legalización', texto: 'Dejamos todo listo para la aprobación de la EBSA.' },
    ],
  },
  {
    slug: 'mantenimiento-preventivo',
    icono: 'preventivo',
    grupo: 'mantenimiento',
    n: '06',
    titulo: 'Mantenimiento preventivo',
    corto: 'Revisiones programadas para evitar daños y cortes de energía.',
    descripcion:
      'Revisamos las redes de forma programada para encontrar fallas antes de que causen cortes: inspección, poda, cambio de aisladores y ajuste de herrajes.',
    incluye: ['Inspección de red', 'Poda de árboles', 'Cambio de aisladores', 'Ajuste de herrajes'],
    casos: [
      { icono: 'calendar-check', titulo: 'Revisión periódica', texto: 'Mantener la red en buen estado todo el año.' },
      { icono: 'tree', titulo: 'Árboles cerca de la red', texto: 'Poda para evitar contactos y cortes.' },
      { icono: 'cloud-storm', titulo: 'Antes de lluvias', texto: 'Preparar la red para temporadas de invierno.' },
    ],
    pasos: [
      { titulo: 'Programación', texto: 'Definimos qué tramos se revisan y cuándo.' },
      { titulo: 'Inspección', texto: 'Recorremos la red buscando elementos dañados.' },
      { titulo: 'Intervención', texto: 'Cambiamos, ajustamos y podamos lo necesario.' },
      { titulo: 'Informe', texto: 'Entregamos el reporte de lo encontrado y lo hecho.' },
    ],
  },
  {
    slug: 'mantenimiento-correctivo',
    icono: 'correctivo',
    grupo: 'mantenimiento',
    n: '07',
    titulo: 'Mantenimiento correctivo',
    corto: 'Atención de daños en la red para restablecer el servicio lo antes posible.',
    descripcion:
      'Atendemos daños en la red —postes caídos, cables rotos, elementos quemados— para restablecer el servicio de energía lo antes posible.',
    incluye: ['Atención de daños', 'Cambio de postes', 'Reparación de cable', 'Reposición de elementos'],
    casos: [
      { icono: 'bolt-off', titulo: 'Sin energía', texto: 'Cortes causados por daños en la red.' },
      { icono: 'alert-triangle', titulo: 'Poste o cable caído', texto: 'Daños por vientos, lluvias o accidentes.' },
      { icono: 'flame', titulo: 'Elementos quemados', texto: 'Aisladores, cortacircuitos o conectores dañados.' },
    ],
    pasos: [
      { titulo: 'Reporte', texto: 'Recibimos el aviso del daño.' },
      { titulo: 'Diagnóstico', texto: 'Llegamos al sitio y revisamos la causa.' },
      { titulo: 'Reparación', texto: 'Cambiamos o reparamos los elementos dañados.' },
      { titulo: 'Servicio restablecido', texto: 'Probamos y la energía vuelve.' },
    ],
  },
  {
    slug: 'remodelacion-normalizacion',
    icono: 'remodelacion',
    grupo: 'mantenimiento',
    n: '08',
    titulo: 'Remodelación y normalización',
    corto: 'Cambio de redes viejas o fuera de norma por redes nuevas, seguras y ordenadas.',
    descripcion:
      'Cambiamos redes viejas o fuera de norma por redes nuevas, seguras y ordenadas: postes de concreto, red nueva y normalización de usuarios.',
    incluye: ['Cambio de postes de madera', 'Red nueva', 'Normalización de usuarios', 'Retiro de red vieja'],
    casos: [
      { icono: 'hourglass', titulo: 'Redes antiguas', texto: 'Postes de madera y cables deteriorados.' },
      { icono: 'shield-check', titulo: 'Fuera de norma', texto: 'Redes que no cumplen las normas actuales.' },
      { icono: 'users', titulo: 'Conexiones irregulares', texto: 'Ordenar y legalizar a los usuarios.' },
    ],
    pasos: [
      { titulo: 'Diagnóstico', texto: 'Evaluamos el estado de la red existente.' },
      { titulo: 'Diseño', texto: 'Diseñamos la red nueva y la gestionamos ante la EBSA.' },
      { titulo: 'Cambio', texto: 'Construimos la red nueva y retiramos la vieja.' },
      { titulo: 'Normalización', texto: 'Conectamos y legalizamos a los usuarios.' },
    ],
  },
];
