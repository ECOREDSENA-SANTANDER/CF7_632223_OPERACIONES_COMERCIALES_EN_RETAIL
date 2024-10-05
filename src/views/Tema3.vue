<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Muebles en el punto de venta
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 El mobiliario es un aspecto importantísimo en la gestión comercial porque contribuye con la imagen de una marca, siendo un factor primordial en su diferencia competitiva. Las siguientes son las principales ventajas que un establecimiento puede tener si usa estratégicamente el mobiliario:
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Invita a los clientes al establecimiento ayudando en la elección del punto de venta como su lugar de compra preferido.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Orienta a los clientes dentro del establecimiento facilitando la compra de artículos porque tiene ordenado el surtido y dividido según el tipo de producto.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Fideliza a los consumidores, generando comportamientos positivos, además de #[em engagement] o compromiso de compra.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Entrega un alto valor a los artículos, porque mejora su exhibición de cara a los clientes.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Provoca en los clientes una mejor experiencia de compra al tener un impactante diseño y una excelente distribución del mobiliario comercial. 
      .col-lg-4.col-md-9.col-9.mb-4
        img(src='@/assets/curso/tema3/1.png', alt='tema1')
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-12  
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b El principio fundamental del mobiliario es ofrecer y disponer de los productos, cautivar y llamar la atención del cliente, y finalmente, motivarlos a una acción de compra (Publicaciones Vértice, 2010).]
      
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1	Tipos de muebles
    
    p.mb-5 En el punto de venta hay diferentes tipos de muebles y usos para los mismos, los siguientes son los tipos de mobiliarios más comunes:
    
    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Góndola
                p.mb-4 Mueble ubicado en forma de pared donde se exhiben los productos a ambos lados y en sus esquinas. Cada una de las dos esquinas o extremos del mueble se denominan cabecera de góndola, siendo uno de los puntos preferidos para poner mensajes publicitarios y productos en promoción de venta.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/2.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Muebles stand
                p.mb-4 Mueble específico de las marcas comerciales, cuyo fin es exhibir promociones, degustaciones, demostraciones o exhibiciones de diferentes artículos.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/3.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Estanterías murales
                p.mb-4 Muebles parecidos a las góndolas, pero con una sola cara y que se instalan en cualquier pared del establecimiento.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/4.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Expositores
                p.mb-4 Mueble que está adaptado para exhibir atractivamente los artículos. Los más comunes son de cartón, madera, plástico o metal.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/5.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Contenedores presentadores o #[em Bulk basket]
                p.mb-4 Muebles que exhiben mucha mercancía, de forma arrumada, una encima de otra, como por ejemplo balones, frutas y verduras, ropa en rebaja, etc. Por lo general, son metálicos o de madera. Exhiben los productos de manera desordenada o revuelta; pueden ser de gran tamaño y altura.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/6.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Muebles de caja
                p.mb-4 Mueble que, por lo general, está localizado en la salida del establecimiento. Debe tener el suficiente espacio para su ubicación, de tal forma que sea amplio y confortable para el cliente.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/7.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 #[em Checkout]
                p.mb-4 Mueble ubicado cerca de las cajas y que está para exhibir productos de compra compulsiva como chocolates, chicles, mecato, revistas, libros, entre otros.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/8.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Embalaje
                p.mb-4 Sistema que permite el traslado del producto fácil y correctamente, y que en el punto de venta se utiliza como un expositor por parte del fabricante.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/9.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Vitrinas
                p.mb-4 Muebles que se usan generalmente para exhibir artículos costosos y de tamaño pequeño como por ejemplo joyas, relojes, perfumes, etc.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/10.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Congeladores y frigoríficos
                p.mb-4 Muebles específicos para exhibir alimentos que requieran ser conservados, porque son productos perecederos.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema3/11.png")

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2	Rotación de las categorías
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 #[b La gestión estratégica de la rotación de los productos que conforman una categoría específica permite organizar de manera sencilla y práctica la ubicación de la mercancía en el punto de ventas. La idea es organizar las diferentes categorías que constituyen el surtido del establecimiento, en pro de mejorar el nivel de ventas en un determinado período de tiempo. ]
        p.mb-4 El método ABC de clasificación de inventarios admite ordenar la distribución de los distintos artículos dentro del establecimiento según sea la popularidad, valor, rotación e importancia para la marca. Con este método se le da más importancia en la ubicación de los productos al aporte económico que suponen para la empresa. Y se basa en el principio de Pareto o regla del 80/20, que enseña que el 20% del esfuerzo es responsable del 80% de los resultados. Si se emplea en el ecosistema del establecimiento, el 20% de los productos generan el 80% de los movimientos de mercancía, mientras que el 80% de los artículos ocasiona el sobrante 20% de movimientos (Borja, 2021). 
        p.mb-4 Las referencias se clasifican, entonces, en los siguientes tres niveles:
      .col-lg-4.col-md-9.col-9.mb-4
        img(src='@/assets/curso/tema3/12.png', alt='tema3')
    
    TabsC.color-primario.mb-4(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="Artículos con rotación A")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema3/13.png', alt='')
          .col-lg-8.col-md-12.my-3
            .row.justify-content-center.align-items-center
              .col-lg-12  
                .cajon.color-acento-contenido.p-4.mb-4 
                  p.mb-0 #[b Por cantidad, solo ocupan por lo general el 20% de los inventarios, pero, en realidad, son los productos que tienen más rotación y, por tanto, tienen una jerarquía estratégica. Las referencias A se refiere a aquellos artículos donde el establecimiento tiene una inversión más alta de su presupuesto y por lo tanto generan el 80% de los ingresos, por lo que es muy importante que no existan roturas de stock (inventario).]
                p.mb-4 También pertenecen a este grupo los SKU (Stock-#[em keeping Unit] o referencia) que, por sus características, son de vital importancia para el buen funcionamiento del punto de venta. Se recomienda conservar un control exhaustivo del inventario de aquellas referencias que se clasificaron como A con renovación frecuente, o incluso permanente. A la hora de situar las referencias A en la góndola, tienden a ubicarse en zonas que tengan un acceso directo y fácil para el operario y, además, que estén cerca de los muelles de salida o de carga dentro del local.
                p.mb-0 Ejemplos: secciones que presentan rotación alta y que están conformadas por familias de productos perecederos de diversa naturaleza como por ejemplo carnicería, pescadería, panadería, frutas y verduras, lácteos, aceites y refrescos. Y en cuanto a su ubicación en el punto de venta se sitúan en la zona fría, con el objetivo de generar tránsito de clientes hacia ese cuadrante.
      .py-3.py-md-5(titulo="Artículos con rotación B")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema3/14.png', alt='')
          .col-lg-8.col-md-12.my-3
            .row.justify-content-center.align-items-center
              .col-lg-12  
                .cajon.color-acento-contenido.p-4.mb-4 
                  p.mb-0 #[b Son aquellas referencias que se encuentran en la franja de rotación media y suelen representar, por volumen, el 30% de los inventarios. No se renuevan con tanta frecuencia como los de la referencia A, por lo que su valor e importancia es menor.]
                p.mb-4 Sin embargo, se debe estar atento a la evolución de estas referencias B por si, en algún momento, pueden pasar a rotación A o, en caso contrario, convertirse en referencia C. El abastecimiento de este tipo de existencias puede funcionar con la regla del inventario mínimo/máximo, ya que no están sujetos a un control exhaustivo sobre las compras emitiendo pedidos continuamente, como los productos de referencia A. Su ubicación en góndola es en zonas de altura intermedia donde su acceso no es tan directo como los artículos A, pero que tampoco implican ser inaccesibles.
                p.mb-0 Ejemplos: secciones de media rotación formadas por familias de artículos de diferente naturaleza como por ejemplo congelados, textil hogar, textil moda, higiene personal, calzado, electrodomésticos, entre otras. Y en cuanto a la ubicación en el punto de venta se sitúan localizados en una zona intermedia, es decir, entre la zona caliente y la zona fría.
      .py-3.py-md-5(titulo="Artículos con rotación C")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema3/15.png', alt='')
          .col-lg-8.col-md-12.my-3
            .row.justify-content-center.align-items-center
              .col-lg-12  
                .cajon.color-acento-contenido.p-4.mb-4 
                  p.mb-0 #[b Son los más numerosos, llegando a tener el 50% de las referencias almacenadas y, además, son los menos solicitados por los clientes. Como no son productos estratégicos no van a tener recursos siendo más modestos, y el reabastecimiento suele ajustarse con stocks de seguridad (productos que evitan la rotura del stock). Se aconseja vigilarlos para que no finalicen formando un inventario obsoleto y de muy poca rotación. Aquí, el establecimiento se debe preguntar: ¿conviene invertir parte del presupuesto en el mantenimiento de stock con referencia C?.]
                p.mb-4 En cuanto a su ubicación en góndola, se sitúan en las zonas más altas o menos accesibles, además de estar más alejados de los muelles de salida o de carga, precisamente porque se requiere acceder a ellos de manera esporádica.
                p.mb-0 Ejemplos: secciones de productos de baja rotación como por ejemplo tornillos, tuercas, clavos, cadenas, cuerdas, mangueras, químicos para limpieza, entre otros. Y en cuanto a su ubicación son situados en la zona caliente, con el fin de incrementar sus posibilidades para ser vistos por los clientes.
    
    .row.justify-content-center.align-items-center
      .col-lg-8
        p.mb-4 Se debe recordar que las secciones son unidades independientes de negocio en las que normalmente son agrupadas varias categorías homogéneas de productos, que a su vez son afines a las necesidades que satisfacen los artículos conformados en cada sección; y además, que las categorías de productos son divisiones dentro de la sección en las que son agrupadas varias familias, formando conjuntos de productos que los clientes perciben como conectados en la satisfacción de una necesidad o de un concepto estratégico específico. Esta conexión posee dos formas de presentación en función de cómo sean agrupados de manera estratégica los productos que la conforman: categorías operativas y categorías conceptuales.
        .subt.mb-2(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema1/ic.svg', alt='')
            h3.mb-0.ms-2 Adicionalmente, a este Método ABC, se le puede sumar un cuarto nivel:
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema3/16.png', alt='')
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-4 #[b Artículos de baja rotación - alta implicación.] Son los que tienen un surtido de referencias con un nivel bajo de ventas, pero presumen compras que se hacen necesarias en algún momento. Esta categoría está formada por productos que se compran de forma reflexiva. Debido a que poseen una naturaleza de consumo duradera y al tener un precio alto, su venta exige un análisis e incluso comparación entre varias marcas, por lo que la asesoría por parte de un vendedor es vital. 
          p.mb-0 #[b Ejemplos:] sección de productos de baja rotación, pero alta implicación tales como artículos de telefonía, informática e imagen y sonido. Como son categorías que tienen artículos de alta implicación, su ubicación en el punto de venta apunta de manera estratégica hacia un lugar donde un asesor pueda, de manera especializada y personalizada, atender a los clientes. Mobiliario como mostradores y puntos de información son necesarios para poder canalizar y materializar una venta (Borja, 2021).
    
    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3	Codificación de productos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p.mb-4 #[b La codificación de artículos en el establecimiento hace que se tenga una buena organización del inventario, por esto influye de manera positiva en todas las actividades que se realicen en el punto de venta. Por ello, la importancia de que cada producto esté identificado desde antes de que el cliente lo ubique en su carrito de compra.]
        p.mb-4 El proceso de codificación de productos radica en identificar los artículos sin equivocación con un código o signo. Código que se asocia a una etiqueta que se adhiere al producto y que va a permitir el acceso a él de forma electrónica. Los más usados son los códigos de barras y las etiquetas RFID (etiquetas autoadhesivas, flexibles y delgadas, con impresión frontal humanamente visible).
        p.mb-0 #[b Codificar significa fijar un código a un artículo.] Con este código se puede conocer algunas de sus características principales como por ejemplo la referencia, fecha de llegada al almacén, fechas de envasado y de expiración e ingredientes, entre otras. Su finalidad es identificar los artículos de forma unívoca (no pueden existir dos artículos con el mismo código). El sistema de gestión de bodegas (WMS - Warehouse Management System) tiene un papel preponderante en este proceso porque es el que crea el código de cada artículo, fija las ubicaciones de los artículos en el punto de venta y controla su trazabilidad. 
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema3/17.png', alt='')
  
    .row.justify-content-center.align-items-center
      .col-lg-10  
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Actualmente hay tendencias como las entregas extrarrápidas o el acopio de mercancías de un tamaño menor han dado como resultado una complicación en los procesos del establecimiento. Por ello, se hace vital que se pueda instaurar un control íntegro de los productos, registrando todos sus movimientos con el fin de hacer un estudio exacto sobre los flujos de mercancía para poderlos optimizar. Gracias a esta codificación y a la asistencia de la gestión de bodegas - WMS, los operarios pueden localizar y expedir productos más rápidamente y con menores errores (Publicaciones Vértice, 2010).]

    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4	El precio
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p.mb-4 El precio es la cantidad monetaria que se requiere para obtener un bien o un servicio, y se desarrolla a través de una transacción en la que el cliente hace el pago al fabricante. Para que se produzca tal transacción el precio debe ser aprobado por el cliente y los distribuidores (en caso de que los haya). Por eso, el precio es un indicador del equilibrio entre clientes y vendedores cuando se compra y se vende un bien o servicio. La llamada ley de la oferta y la demanda es una teoría económica que representa ese equilibrio entre compradores y vendedores (Kotler y Armstrong, 2013).
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema1/ic.svg', alt='')
            h3.mb-0.ms-2 Tipos de precios
        p.mb-4 A continuación, se conocerá cómo se diferencian los tipos que existen en el mercado:
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema3/18.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_cXcHSVingo?si=N52Tve2D7gwC6PY1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Tipos de precios
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Estrategias de precio
    
    p.mb-4 Se basan en establecer precios que pueden ser menores, mayores o iguales a los precios de venta y que, estratégicamente, dependen de la intención del fabricante y la imagen que quiera dejarles a los clientes. Según esto, algunas de las estrategias de precio más comunes son:
    
    .row.mb-5
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Penetración")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Penetración]
                p.mb-0 Precios por debajo del valor de venta al inicio del ciclo de vida para crear atracción estimulando al cliente a su compra. Luego, el precio comienza a estabilizarse en su valor monetario de venta. Es muy común en productos de lanzamiento o introducción al mercado, para darse a conocer más rápido.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Desnatado o descremado")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Desnatado o descremado]
                p.mb-0 Precios altos al principio del ciclo de vida, que tienen una gran inversión publicitaria y promocional para cautivar a una gran parte del mercado, pero que con el paso del tiempo lo van reduciendo poco a poco hasta su precio de venta con el fin de conquistar luego a los demás segmentos.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Alineamiento")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Alineamiento]
                p.mb-0 Precio de introducción al mercado que es similar al de los productos de la competencia.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Primado")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Primado]
                p.mb-0 Precio alto que le fija a un artículo que no tendrá ningún tipo de descuento y que servirá para observar la fidelidad de los clientes frente a la marca. Se trata de una de las mejores formas que se tienen para lograr “valor de marca”. Ejemplo: Apple.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Descuento por cantidad o volumen")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Descuento por cantidad o volumen]
                p.mb-0 Precio que presenta una deducción en su valor monetario cuyo fin es motivar a los clientes a comprar más de lo que realmente requieren o en grandes cantidades; estos descuentos se fijan según el tamaño de la demanda, bien sea en la suma de dinero o en unidades.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Promoción de ventas")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Promoción de ventas]
                p.mb-0 Precios por debajo de su valor monetario habitual de forma temporal (puede ser en fecha especiales) con el fin de originar una compra de manera instantánea. Ejemplos: Ciberlunes o #[em Black Friday.] 
    
    .row.justify-content-center.align-items-center
      .col-lg-10  
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Dentro de este esquema básico de desarrollo de estrategias, las marcas tienen la oportunidad de crear múltiples formas a la hora de fijar los precios. El objetivo principal siempre debe ser el aumento en la rentabilidad y los ingresos para la empresa, por eso se debe ser creativo y estratégico a la hora de crear las estrategias de precio (Kotler y Armstrong, 2013).]
    
    separador
    #t_3_5.titulo-segundo.mb-4
      h2 3.5	Activación de marca

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.mb-4(src='@/assets/curso/tema3/19.svg', alt='')
      .col-lg-8
        p.mb-4 Los clientes en la actualidad están más invadidos de publicidad porque, además de los medios tradicionales o masivos (televisión, prensa, radio, revistas, cine, etc.), también están los medios alternativos (correo electrónico, redes sociales, blogs, telefonía celular, etc.). En un contexto así, las acciones de mercadeo alternativo se convierten en una oportunidad muy atractiva. Precisamente una de estas acciones alternativas de mercadeo es la activación de marca.
        .cajon.color-acento-contenido.p-4
          p.mb-0 El concepto se puede definir con aquellas actividades en que la marca tiene una relación directa con el cliente. Esas actividades pertenecen al #[em marketing] BTL que es la sigla de #[em Below The Line] (mercadeo alternativo o no tradicional). El mercadeo alternativo se identifica por llamar la atención del cliente de una manera diferente a las demás acciones de comunicación como por ejemplo la publicidad, boletines, promociones o fuerza de ventas.

    p.mb-4 La más importante ventaja de estas actividades alternativas de mercadeo es que crean un vínculo con el cliente, además de lograr una experiencia significativa y un recuerdo agradable; y suelen usar factores psicológicos de los clientes para alcanzar un mayor impacto en ellos (AA. VV., 2020).
    p.mb-5 Como se presenta en los diferentes ejemplos, la activación de marca se refiere a una puesta en escena de un plan de acción que lleve la marca a donde se encuentre el cliente, bien sea un parque, un centro comercial, un escenario público, etc.; y donde a través de una idea impactante lo haga pasar un momento memorable, sin este darse cuenta de que fue publicidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10  
        .cajon.color-acento-contenido.p-4
          p.mb-0 En esta activación de marca es muy importante que todos los puntos de contacto con los que dispone la empresa para interactuar con sus clientes sirvan para que ellos interactúen con la marca y contribuyan a generar la experiencia que debe ser no solo agradable, sino también significativa; y más importante, lograr que los clientes luego de la experiencia realicen un “voz a voz” positivo con sus contactos, bien sea de manera presencial o virtual a través de redes sociales, WhatsApp y demás herramientas digitales. Resulta más poderosa la recomendación de un amigo, familiar o conocido que la misma publicidad realizada por la marca.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Dimensiones de la activación de marca
    
    p.mb-4  La activación de marca debe ser de 360º, o sea, usando medios masivos y medios alternativos, para poder comprender todas las dimensiones a través de las cuales pueda crear un vínculo con su público objetivo. Es primordial que estas dimensiones tengan coherencia entre sí y con la marca, que expresen la intención corporativa y que hablen el mismo lenguaje de la marca. Las dimensiones son:
    
    .row.mb-4
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Comunicación")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Comunicación]
                p.mb-0 Es el contenido y la forma en que se desarrolla la idea, y debe comunicarse a través de canales tanto masivos como alternativos. De este modo, la marca tiene la oportunidad de expresar su identidad y estilo mediante los mensajes y el tono utilizado en la comunicación. 
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Productos o servicios")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Productos o servicios]
                p.mb-0 Se refiere a la primera y más importante forma de expresión de una marca. Los productos deben hacer tangible la propuesta de valor. Ello requiere a veces mejorar productos, discontinuar algunos o lanzar productos nuevos que ayuden a lograr los objetivos propuestos en la activación.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Personas y procesos")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Personas y procesos]
                p.mb-0 Indica que todos los empleados son agentes potenciales de la marca. Con su compromiso es que una marca se construye de forma sólida.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Entornos digitales")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Entornos digitales]
                p.mb-0 Se refiere a internet y su ecosistema digital, que incluye el sitio #[em web], aplicaciones, redes sociales, #[em blogs, chats,] entre otros. A través de estos canales, los clientes pueden establecer un vínculo con la marca después de la activación, y también compartir sus experiencias con sus contactos. La presencia en estos medios, junto con la gestión de perfiles, mensajes, identidad, y la capacidad de diálogo, interacción y retroalimentación con los clientes, hace que esta dimensión sea fundamental en la activación de las marcas. 
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Entornos físicos")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Entornos físicos]
                p.mb-0 Se refiera a permitirle al cliente de poder interactuar a través de ambientes físicos como por ejemplo las oficinas, tiendas o stands en donde el cliente pueda dejar comentarios o sugerencias.
    
    p.mb-4 Estas dimensiones podrán ser dispuestas por cualquier tipo de empresa, así no tengan la oportunidad de estar en los 360º ya que con una buena estrategia en medios alternativos y una buena inversión en la activación podría llamar la atención del cliente. Para una empresa del sector #[em retail], las dimensiones del entorno físico y las personas son vitales, porque a los clientes los tiene disponibles y cautivos en el momento de la compra dentro del punto de venta y si los trabajadores están comprometidos todo debe salir muy bien a la hora de desarrollar una activación. Eso sí, sin olvidarse de los demás niveles, los cuales deben ser trabajados de manera coherente con la idea y la identidad de la marca para que en medios digitales el cliente tenga la oportunidad de vincularse con la marca y además de referenciarla a sus contactos.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Proceso de activación de marca
    
    p.mb-5 Este proceso puede variar según sean las características de la marca e incluso el tipo de actividad que se vaya a realizar para activarla. Sin embargo, se pueden nombrar cinco etapas genéricas:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Identificar los puntos de contacto") Se refiere a la identificación de todos los puntos de contacto que la empresa pueda tener con su público objetivo en las cinco dimensiones de la activación de marca que se mencionaron antes, estableciendo prioridades.
          p(numero="2" titulo="Definir el plan de activación") Se refiere a la idea como tal. Cómo se va a impactar al cliente para que la experiencia de marca sea significativa e inolvidable.
          p(numero="3" titulo="Definir el <em>Customer Journey</em>") Se refiere a la definición del trayecto que el cliente realiza dentro del establecimiento a lo largo de los diferentes puntos de contacto en su proceso de compra. Consiste en especificar los instantes y soportes que entran en juego en todo el proceso de interacción de los clientes con la marca. En cada uno de esos instantes se deben conocer los aspectos de la estrategia que se puedan ir activando de la manera correcta. La logística de la activación es vital para que todo el proceso se vaya cumpliendo según la idea.
          p(numero="4" titulo="Poner en marcha del plan") Se refiere a que la empresa debe saber en qué momento (día y hora) se debe llevar a cabo la activación. Debe ser un momento en el que haya la cantidad de clientes suficientes para poder activar la marca de la mejor forma en su presencia.
          p(numero="5" titulo="Monitorear el progreso") Este proceso se debe hacer cada vez que se realice una activación y es el proceso que entrega métricas o indicadores para revisar más objetivamente el resultado de la activación. Cabe anotar que la activación se debe filmar para editar un video y compartirlo en los canales de la marca. Entonces, es importante revisar los datos obtenidos en el video (me gusta, compartir, interacciones, etc.). De igual forma, revisar en redes sociales qué interacciones o vínculos se lograron con los clientes luego de la activación. Para eso, es necesario cruzar todos los datos que obtenemos de los distintos canales.
      .col-lg-4.col-md-9.col-9.ps-lg-0
        img(src='@/assets/curso/tema3/20.png', alt='')


    .row.justify-content-center.align-items-center
      .col-lg-10  
        .cajon.color-acento-contenido.p-4
          p.mb-0 Como en cualquier plan, es importante que en la activación de marca se establezca con detalle un plan y un cronograma que detalle bien la idea, con sus acciones, recursos, fechas, responsables y KPI obtenidos. Para este tipo de estrategias se recomienda tener una visión a largo plazo, una coherencia con la identidad y personalidad de la marca, un cumplimiento de las promesas, un diálogo con los clientes y un oído activo; además de tener un trato personalizado con los clientes, una gestión colaborativa, y finalmente una capacidad de adaptarse según sean los comentarios de los clientes (AA. VV., 2020).


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
