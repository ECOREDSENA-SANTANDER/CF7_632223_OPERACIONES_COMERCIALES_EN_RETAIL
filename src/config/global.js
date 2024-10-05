export default {
  global: {
    componenteFormativo: 'Exhibición y vitrinismo en el formato comercial',
    descripcionCurso:
      'La exhibición del surtido en el punto de venta es fundamental para todo tipo de establecimiento comercial. Por esta razón, las empresas deben pensar en cómo organizar adecuadamente sus locales de tal forma que tengan un impacto y una influencia positiva sobre las decisiones de compra por parte de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Retail</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Establecimiento comercial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Formatos comerciales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Arquitectura del establecimiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Surtido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura del surtido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planograma o planimetría',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Layout</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'La exhibición de productos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Vitrinismo o visual <em>merchandising</em>',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: '<em>merchandising</em>',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Señalización comercial',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Dispositivos de seguridad',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Muebles en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de muebles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Rotación de las categorías',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Codificación de productos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'El precio',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Activación de marca',
            hash: 't_3_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '<em>Retail</em>',
      referencia:
        'Quintero, A., L. F. (2015). El sector retail, los puntos de venta y el comportamiento de compra de los consumidores de la base de la pirámide en la comuna 10 de la ciudad de Medellín. Revista Ciencias Estratégicas, 23(33), 109-118. ',
      tipo: 'Artículo PDF',
      link: 'https://www.redalyc.org/pdf/1513/151345259009.pdf',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'González, D. [Marketing 2.0]. (2019). ¿Qué es Merchandising? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Val9lx16bsc',
    },
    {
      tema: 'Vitrinismo o Visual <em>Merchandasing</em>',
      referencia:
        'Salgado, R. [Visual Branding LA]. (2013). Conceptos básicos de visual merchandising. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xZZ63K6cVbc',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'número de familias diferentes de productos que ofrece la marca.',
    },
    {
      termino: '<em>Checkout</em>',
      significado:
        'mueble ubicado cerca de las cajas y que está para exhibir productos de compra compulsiva como chocolates, chicles, mecato, revistas, libros, entre otros.',
    },
    {
      termino: 'Consistencia',
      significado:
        'Se cercanía relativa entre las líneas de producto y su uso final.',
    },
    {
      termino: 'Escaparate',
      significado:
        'espacio exterior de las tiendas comerciales, destinado a exponer las mercancías en venta al público.',
    },
    {
      termino: 'Góndola',
      significado:
        'tipo de mueble dispuesto a modo de pared para exhibir productos al consumidor en los puntos de venta.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'diseño o disposición de los productos (bienes y servicios) en sectores o categorías en el punto de venta del establecimiento.',
    },
    {
      termino: 'Longitud',
      significado:
        'número total de productos que tiene la marca en una familia.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'conjunto de estrategias y tácticas efectuadas dentro del establecimiento y que tiene como fin ubicar el artículo correcto, en la cantidad necesaria, con el precio justo, en el tiempo adecuado, con una presentación visual impactante y dentro de una exhibición sobresaliente. Se refiere a todos los esfuerzos destinados a que el cliente, no solo conozca el producto, sino también, que tome una acción de compra.',
    },
    {
      termino: 'Planograma',
      significado:
        'herramienta necesaria para la gestión eficaz del espacio donde se exhiben los productos de los establecimientos minoristas, más aún en la actualidad porque existe un mercado más complicado y competitivo, en el que ha aumentado el tamaño de las tiendas, las dimensiones del surtido y el número de categorías.',
    },
    {
      termino: 'Profundidad',
      significado:
        'número de variantes que la marca ofrece por cada producto en cada familia.',
    },
    {
      termino: '<em>Retail</em>',
      significado:
        'concepto que se refiere a la venta al por menor o comercio minorista. Sistema de comercialización que entrega el producto al cliente.',
    },
    {
      termino: 'Señalización comercial',
      significado:
        'herramienta muy importante que ayuda a mejorar la información dentro del establecimiento, de tal forma que el visitante encuentre fácil el producto que necesita.',
    },
    {
      termino: 'Surtido',
      significado:
        'conjunto de productos ofertados por los diferentes establecimientos comerciales y que se encuentran dispuestos que el consumidor los compre.',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'técnicas y estrategias que se emplean en el diseño de un escaparate o vitrina con el fin de conquistar los clientes que transitan en el establecimiento, incitarlos e invitarlos a que realicen la compra de los productos exhibidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'AA. VV. (2020). La comunicación en la sociedad digital: reputación, big data-audiencia y medios, ante un público. Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Aranda, J. R. (2015). Marketing y promoción en el punto de venta. Editorial Elearning S.L.',
      link: '',
    },
    {
      referencia:
        'Borja, R. P. (2021). Merchadinsing. Teoría, práctica y estrategia. Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Costa, J. (2007). Señalética corporativa. Costa Punto Com Editor (CPC).',
      link: '',
    },
    {
      referencia:
        'Cruz, H. M. (2018). El arte de seducir. Merchandising. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2013). Fundaments de Marketing. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Martínez, M. B. (2016). Escaparatismo y diseño de espacios comerciales. Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Publicaciones Vértice S.L. (2010). Animación y presentación del producto en el punto de venta. Editorial Vértice.',
      link: '',
    },
    {
      referencia: 'Puente, A. M. (2004). Gestión por categorías. Netbiblo.',
      link: '',
    },
    {
      referencia:
        'Salen, H. (1994). Los secretos del merchandising activo. Ediciones Díaz de Santos, S.A.',
      link: '',
    },
    {
      referencia:
        'Vidal, F. J., Mas, J. J., y González, M. A. (2011). Sistemas de seguridad y confortabilidad. Editorial Editex.',
      link: '',
    },
    {
      referencia:
        'Vigaray, M. D. (2005). Comercialización y retailing: distribución comercial aplicada. Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Samuel Pinilla Hurtado',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia - Centro de Comercio',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
