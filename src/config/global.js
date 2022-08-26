export default {
  global: {
    componenteFormativo: 'Prototipar y validar ideas',
    descripcionCurso:
      'El prototipado y la validación hacen parte de la 4a y 5a fase del <em>Design Thinking</em> que se basa en: “bien hecho es mejor que bien dicho”; es un conjunto de herramientas y técnicas para comunicar y materializar las ideas, obtener retroalimentación en el testeo o validación y reducir la incertidumbre a fallar antes de lanzar el producto al mercado. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fase de prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de prototipado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Niveles de fidelidad del prototipo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Materiales de prototipado físico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas de prototipado digital',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Técnicas de prototipado rápido',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Ficha técnica del prototipo',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fase de validación o testeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de validación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Establecer lista de requisitos a evaluar ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramienta de recolección para validación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Refinar el prototipo',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Informe Final',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Orientar sesiones <em>Design Thinking</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Repaso proceso <em>Design Thinking</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Planear sesiones de <em>Design Thinking</em>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Validación de planeación con cliente',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Conformación de equipos de trabajo',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Ambiente de trabajo propicio y normas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Portafolio de Innovación',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '',
    },
  ],
  glosario: [
    {
      termino: 'Interfaz',
      significado:
        'conexión funcional entre dos sistemas, programas, dispositivos o componentes de cualquier tipo que proporciona una comunicación de distintos niveles, permitiendo el intercambio de información.',
    },
    {
      termino: 'Prototipo',
      significado:
        'término que se utiliza para referirse a la primera versión de un dispositivo que se crea de una idea o concepto, ya sean bocetos, maquetas, modelos, <em>mockup</em> en cualquier material o herramienta digital de bajo costo, y que sirve como modelo inicial o punto de partida para la elaboración de pruebas y posteriores versiones mejoradas.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'facilidad con que las personas pueden utilizar una herramienta particular o cualquier otro objeto fabricado por humanos, con el fin de alcanzar un objetivo concreto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gestión de Telecomunicaciones. (2021). Modelo de prototipo. Blogspot.com.',
      link:
        'http://gestionrrhhusm.blogspot.com/2011/05/modelo-de-prototipo.html',
    },
    {
      referencia:
        'Granollers T. (2014). Prototipos de baja fidelidad y alta fidelidad | Curso de interacción persona-ordenador. Udl.cat.',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/prototipado/categorias-de-tecnicas-de-prototipado/',
    },
    {
      referencia:
        'iLab. (2021). Prototipo de servicio: qué es y cómo construir uno para tu negocio. ILab.',
      link: 'https://ilab.net/prototipo-de-servicio/',
    },
    {
      referencia:
        'Invisionapp.com. (2018). Low-fidelity vs. high-fidelity prototyping',
      link:
        ' https://www.invisionapp.com/inside-design/low-fi-vs-hi-fi-prototyping/',
    },
    {
      referencia:
        'MockingBot. (2016). What’s the difference between Wireframe, Prototype & Mockup? MockingBot.',
      link:
        'https://medium.com/mockingbot/whats-the-difference-between-wireframe-prototype-mockup-17615f77938f ',
    },
    {
      referencia:
        'MYVA360. (2020). 11 Standout Examples of Minimum Viable Products.',
      link: 'https://myva360.com/blog/examples-of-minimum-viable-products',
    },
    {
      referencia:
        'Petrelli, D., Dulake, N., Marshall, M., Willox, M., Caparrelli, F., & Goldberg, R. (2014). Prototyping tangibles: exploring form and interaction. In: TEI ´14: Proceedings of the 8th International Conference on Tangible, Embedded and Embodied Interaction. ACM, 41-48.',
      link: 'http://shura.shu.ac.uk/7958/ ',
    },
    {
      referencia:
        'Salowitz, J. (2016). 16 Prototyping Tools & How Each Can Be Used - Prototypr. Prototypr.',
      link:
        'https://blog.prototypr.io/14-prototyping-tools-how-each-can-be-used-1c804fab33a6',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Natalia Gómez Rodríguez',
        cargo: 'Experta temática',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
      {
        nombre: 'Cristina Zuluaga Penagos',
        cargo: 'Experta temática',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
