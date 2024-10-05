<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 #[em Retail]
    
    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                p.mb-4 La venta al detalle o #[em retail] es un sistema de comercialización que entrega el producto directamente al cliente. En este sentido, los canales de venta son fundamentales para su éxito y para lograr la diferenciación comercial. Por esta razón, las empresas dedican gran parte de sus esfuerzos al diseño y a la experiencia de compra. 
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/2.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                p.mb-4 Además, la industria del #[em retail] se percibe como un negocio habitual, porque la sociedad piensa que se trata de empresas enfocadas en alcanzar buenas negociaciones, lo que se logra haciendo presión a los proveedores para poder vender los bienes y servicios a precios bajos.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/3.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                p.mb-4 Sin embargo, el mundo del #[em retail] ha ido evolucionando bastante en los últimos años. Empresas de grandes superficies o grandes almacenes como Carrefour, El Corte Inglés y Walmart, cada vez se vuelven más sofisticadas.   
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/4.png")

    .row.justify-content-center.align-items-center
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 Un #[em retail] debe lograr la conexión emocional con el cliente y para poderlo lograr el bien o servicio ofrecido debe estar alineado con los valores, deseos, necesidades, poder económico y expectativas de los clientes y, además, se debe diferenciar de la competencia. Diferencia que debe ir unida a la capacidad de ofrecer una experiencia de compra positiva y memorable, vital para crear #[em Brand Equity] (aumentar el tráfico, vender y fidelizar al cliente).
            br
            br
            |
            p Una marca debe ser más que un distintivo visual, un bien o un servicio. Su lugar debe estar en la mente o en el corazón de los clientes, de tal forma que esté posicionada racional o emocionalmente. La marca perdura en el tiempo siempre y cuando esté posicionada.

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1	Establecimiento comercial

    p.mb-4 El punto de venta es el lugar donde se lleva a cabo la actividad comercial; no es donde se fabrican los bienes o servicios, sino donde se comercializan. Por esta razón, se refiere a un espacio físico en el que se pueden vender y comprar productos. 
    p.mb-4 Para poder tener un establecimiento comercial se necesitan los siguientes elementos:


    .row.justify-content-center
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo="n")
          .row.align-items-center
            .col-lg
              h3 Un espacio físico
              p Se refiere al local o la tienda donde se ofrecen los productos. Dependiendo del tipo de establecimiento comercial, el espacio físico puede contar con parqueadero, sala de ventas, servicios sanitarios y otros servicios adicionales que sirven para mejorar la atención al cliente.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/tema1/6.svg', alt='')
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/tema1/7.svg', alt='')
            .col-lg
              h3.text-left Productos
              p.text-left Son todos los bienes y servicios que se ofrecen en el espacio físico. Si el establecimiento es una relojería, los productos son relojes; si es una empresa de telecomunicaciones, un servicio podría ser la conexión a internet.
          .row.align-items-center
            .col-lg
              h3 Vendedores
              p Son la fuerza de ventas del establecimiento y los que se van a encargar de atender, asesorar y vender los productos a los clientes. En otras palabras, son quienes logran que los clientes efectúen las acciones de compra.
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/tema1/8.svg', alt='')
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in")
                img.d-none.d-lg-block(src='@/assets/curso/tema1/9.svg', alt='')
            .col-lg
              h3.text-left Compradores
              p.text-left Estas son las personas, clientes y consumidores que llegan al establecimiento para realizar una compra, ya sea de un bien o de un servicio.

    p.mb-0 Con estos cuatro elementos se puede generar la transacción de compra y venta en cualquier establecimiento comercial.  
    
    separador
    #t_1_2.titulo-segundo.mb-4
      h2 1.2	Formatos comerciales

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/10.svg', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 En Colombia existe una tendencia que ha gustado en los clientes; se trata de preferir nuevos formatos y canales comerciales de venta directa e independiente con precios económicos en distintos productos. Así, se obtiene un gran beneficio a través de productos que se consideran de buena calidad, presentación, que están distribuidos en espacios limpios y atendidos por un personal capacitado y joven. 
        .cajon.color-acento-contenido.p-4
          p.mb-4 #[b D1, Ara y Justo & Bueno] son ejemplos de lo anterior. Presentan un comportamiento dinámico e innovador, con una excelente aceptación por parte de la sociedad. Estos establecimientos pertenecen al sector del descuento duro #[em #[b (hard discount)]] y se caracterizan por ofrecer precios económicos, especialmente en productos de la canasta familiar, en comparación con los establecimientos tradicionales. Esta estrategia ha llevado a que muchos clientes los prefieran a la hora de hacer sus compras.
          p.mb-0 Sus tiendas son sencillas, no realizan inversiones en publicidad, cuentan con pocos empleados, no tienen impulsadores y ofrecen productos de pequeños y medianos proveedores que, con precios económicos, intentan mantenerse en el mercado.

    p.mb-4 Con estos cambios y la evolución en el sector #[em retail], se ha generado una transformación en el comportamiento del consumidor y en sus hábitos de compra. Los productos de marca propia que se ofrecen en estas tiendas de venta al por menor emergen como una nueva alternativa para los clientes. Además, esta tendencia permite que empresas, principalmente pymes colombianas, se involucren como proveedores, contribuyendo a la generación de empleo y al desarrollo económico local (Vigaray, 2005).
    p.mb-4 A continuación, se presentan los tipos de formatos comerciales tradicionales:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row.col-xl-11.m-auto(titulo="Tiendas")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-4 Es un tipo de establecimiento que ofrece bienes o servicios al detal, es decir, por unidad. No existe la venta al por mayor, o sea, grandes cantidades de un producto.
            p.mb-3 Son pequeños en tamaño y ofrecen atención directa por parte de un asesor cuando se requiera; además, supone la presencia de mostradores que cumplen la función de separar y dividir la sala de ventas con respecto a los artículos que están a la venta. Ejemplo: D1.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/11.svg")
      .row.col-xl-11.m-auto(titulo="Almacenes")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-4 Son establecimientos ubicados en zonas residenciales que surten de una variedad amplia de productos al público cercano.
            p.mb-3 También se les puede conocer con los nombres de bodegueros, pulperos o tenderos. Ejemplo: ARA.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/12.svg")
      .row.col-xl-11.m-auto(titulo="Supermercados")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-3 Tienda de autoservicio donde se exhiben alimentos y productos para el hogar o el aseo en régimen de autoservicio. Uno de los factores clave de éxito de los supermercados es la proximidad al cliente, o sea, que tenga poca distancia con respecto al consumidor, que esté cerca de él. Se encuentran ubicados dentro de las ciudades. Ejemplo: La Vaquita.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/13.svg")
      .row.col-xl-11.m-auto(titulo="Hipermercados")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-3 Se diferencian por su tamaño más grande, su surtido más amplio y la ubicación de sus locales en áreas suburbanas o fuera de la ciudad. Estos establecimientos cuentan con amplios parqueaderos, autoservicio, y una gran superficie de ventas que les permite ofrecer una extensa variedad de productos. Además, facilitan el acceso en automóvil para los clientes. Ejemplo: Almacenes Éxito.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/14.svg")
      .row.col-xl-11.m-auto(titulo="Grandes almacenes")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-3 También conocidos como tiendas por departamentos, son establecimientos de gran tamaño que ofrecen una variedad de productos tales como ropa, calzado, muebles, menaje, decoración, confección, etc. La alimentación no es prioridad en este formato. Están ubicados en el centro de las ciudades, pueden tener varias plantas, lo que permite dividir su superficie comercial en secciones. Por lo general pertenecen a una sola empresa y tienen una sola sede de tamaño enorme. Ejemplo: Falabella.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/15.svg")
      .row.col-xl-11.m-auto(titulo="Tiendas especializadas")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-3 Es el concepto de tienda evolucionado a tiendas especializadas de gran tamaño, que presentan el autoservicio para el cliente, constituyéndose en grandes supermercados especializados. No tienen de todo, pero sí poseen un gran surtido dentro de su especialización. Por ejemplo, una tienda que sea especializada en tecnología, solo ofrecerá productos tecnológicos. Ejemplo: Ktronix.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/16.svg")
      .row.col-xl-11.m-auto(titulo="Mercados municipales o comunales")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-4 Son establecimientos de propiedad municipal o privada que en su interior tienen una variedad amplia de “puestos de venta” o “puestos de mercado”, que tienen una construcción estable reservada para la venta de productos alimenticios.
            p.mb-3 El comprador y el vendedor son sus más importantes participantes. Están formados en su interior por estos puestos de venta individuales en los que el cliente puede elegir el producto según sea su necesidad. Cada puesto tiene su propio espacio que es especializado (carnicería, frutas y verduras, abarrotes, etc.).
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/17.svg")
      .row.col-xl-11.m-auto(titulo="Galerías y centros comerciales")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-4 Son establecimientos que agrupan en su interior a una gran cantidad de tipos de comerciantes que, por lo general, son especializados como por ejemplo artículos deportivos, bancos, peluquerías, ropa, restaurantes, salas de belleza, zona de comidas rápidas, entre otros.
            p.mb-3 La diferencia entre galería y centro comercial es que la galería tiene un tamaño pequeño y el centro comercial posee un tamaño más grande.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/18.svg")
      .row.col-xl-11.m-auto(titulo="Tiendas por departamentos")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-8
            p.mb-3 Son establecimientos de gran tamaño que ordenan los productos que ofrecen en su interior en departamentos o categorías como ejemplo ferretería, ropa para damas, ropa para caballeros, productos para el hogar, tecnología, entre otros. Requieren de muchos empleados para poder entregar una buena atención al cliente. Ejemplo: Alkosto.
          .col-lg-4
            .row.justify-content-center.align-items-center
              .col-lg-8
                img.img-a.img-t(src="@/assets/curso/tema1/19.svg")
    
    P.mb-0 Se puede afirmar que los establecimientos comerciales son espacios físicos cruciales donde se promocionan y ofrecen bienes y servicios, facilitando así el proceso de compra para los clientes. Según el tipo de consumidor que atienden, los productos que ofrecen y el tamaño del local, estos establecimientos pueden variar en su naturaleza.

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3	Arquitectura del establecimiento
    
    p.mb-4 Hay diferentes tipos de arquitectura que se pueden apreciar en los diferentes establecimientos, como las siguientes:
  
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 La arquitectura exterior del establecimiento
    
    p.mb-4 Son cuatro los elementos que conforman el diseño exterior de cualquier establecimiento. Estos elementos ayudan a mostrar la personalidad e identidad de una marca, contribuyendo a posicionar su imagen corporativa en la mente de los consumidores (Borja, 2021). Estas son:

    .row.mb-4
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="La identidad")
            .row.justify-content-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema1/20.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 La identidad
                p.mb-0 Está relacionado con el rótulo comercial, que incluye el nombre, distintivo visual, colores, fuentes y diseño de la fachada. Este conjunto forma el rótulo corporativo, cuyo objetivo es la identificación del establecimiento.
            
          .tarjeta.color-acento-botones.bg7.p-4(titulo="La puerta de entrada")
            .row.justify-content-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema1/21.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 La puerta de entrada
                p.mb-0 La puerta de entrada debe reflejar fielmente la identidad y el concepto empresarial del establecimiento comercial. Es crucial que su diseño sea apropiado para facilitar el acceso al local y atraer a los transeúntes a ingresar.
          
          .tarjeta.color-acento-botones.bg7.p-4(titulo="El escaparate")
            .row.justify-content-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema1/22.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 El escaparate
                p.mb-4 Es la vidriera comercial, es el más importante vehículo de comunicación entre el establecimiento y el cliente. Debe sintetizar y reflejar el estilo de la tienda, su identidad, lo que es y lo que ofrece.
                p.mb-0 Se le considera como un excelente vendedor y tiene un carácter particularmente persuasivo y dominante sobre el cliente, siempre y cuando su diseño haga su función de impactar y llamar la atención. Permanece activo las veinticuatro horas del día, pero como desventaja su mensaje se capta por parte de los transeúntes en solo unos breves segundos. Por ello, la importancia de ser impactante para llamar la atención.
          
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Fachada")
            .row.justify-content-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema1/23.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 Fachada
                p.mb-0 Es el diseño arquitectónico que tiene el establecimiento en su exterior. Si la empresa tiene varias sedes, debe ser muy parecido el diseño de tal manera que tenga una unidad visual que permita ser reconocido por los clientes en cuanto lo vean. En ella es donde va el rótulo comercial, por lo general muy cerca de la puerta principal de acceso al establecimiento.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 La arquitectura interior del establecimiento comercial

    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.col-12
        p.mb-4 El objetivo de su diseño es la creación de un flujo de circulación de clientes que está estratégicamente dirigido en dirección de lugares dentro del establecimiento que, psicológicamente, manipulan y provocan una positiva actitud de compra. Para conseguirlo, resulta fundamental el estudio de los elementos que forman la arquitectura interior.
        p.mb-4 Así como en la arquitectura exterior, en el interior del establecimiento se debe planear una serie de funciones que permitan certificar el éxito y la calidad del trabajo desarrollado. Para ello, el encargado del #[em merchandising] debe resolver dónde localizar y cómo organizar los elementos presentes en la arquitectura interior (Borja, 2021).
        p.mb-2 La finalidad de la arquitectura interna es la creación de una circulación lógica y fluida dentro del establecimiento, permitiendo que el cliente transite por todas las secciones del local, conformado por:
      .col-lg-4.col-md-9.col-9
        img.d-none.d-lg-block(src='@/assets/curso/tema1/24.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Puntos de acceso
            br
            br
            |
            p.mb-0 Su finalidad es la de ubicar al cliente una vez dentro del establecimiento, y la estrategia es la de ubicarlo en el lugar donde comienza una circulación natural. A partir de allí, las personas transitan y se dirigen al centro del local y luego giran en sentido contrario a las manecillas del reloj.
            
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Localización de zonas
    
    p.mb-4 Son zonas imaginarias que dividen el espacio en dos partes iguales de la siguiente forma:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-12    
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Zona fría
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
            p.text-center Área de circulación por donde el cliente transita muy poco. Su técnica consiste en ubicar productos de mayor rotación y promociones de venta con el objetivo de hacer transitar a los clientes por todo el lugar.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Zona caliente
              .col-6
                figure
                  img.img-a.img-t(src='@/assets/curso/tema1/26.svg', alt='Texto que describa la imagen')
            p.text-center Área de circulación de forma natural por parte del cliente. Su técnica consiste en ubicar productos nuevos o de menor rotación.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Zonas

    p.mb-4 Estas se identifican según sea el punto de acceso:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Puerta a la derecha
                p.mb-4 Cuando el lugar de acceso está a la derecha, las zonas resultan de una línea diagonal que nace en el ángulo extremo izquierdo del punto de acceso y va hasta el ángulo extremo derecho más profundo de la superficie del establecimiento.
              .col-lg-5.col-12
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 1. 
                  | Puerta a la derecha
                img(alt="Se trata de una línea diagonal que se extiende desde el ángulo extremo izquierdo del punto de acceso hasta el ángulo extremo derecho más profundo del establecimiento." src="@/assets/curso/tema1/27.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Puerta a la izquierda
                p.mb-4 Es lo contrario a la puerta anterior; es la línea diagonal que nace en el ángulo extremo derecho del punto de acceso y va hasta el ángulo extremo izquierdo más profundo de la superficie del establecimiento.
              .col-lg-5.col-12
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 2. 
                  | Puerta a la izquierda
                img(alt="Se trata de una línea diagonal que se extiende desde el ángulo extremo derecho del punto de acceso hasta el ángulo extremo izquierdo más alejado dentro de la superficie del establecimiento." src="@/assets/curso/tema1/28.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Puerta en el centro
                p.mb-4 Se define de acuerdo con la circulación del cliente. Se traza una línea recta vertical hasta el centro del establecimiento y de ahí se traza otra línea recta horizontal hacia el costado izquierdo de la superficie del local.
              .col-lg-5.col-12
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 3. 
                  | Puerta en el centro
                img(alt="Se trata de una línea vertical desde el punto de acceso hasta el centro del establecimiento, y luego una línea horizontal desde ese punto central hacia el costado izquierdo de la superficie del local." src="@/assets/curso/tema1/29.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Dos puertas
                p.mb-4 Por teoría, prácticamente carece de zonas frías ya que la circulación fluye de acuerdo al ingreso de las dos puertas. Por esto es vital encontrar la localización de las zonas para ubicar las secciones de forma estratégica.
              .col-lg-5.col-12
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 4. 
                  | Dos puertas 
                img(alt="No hay zonas frías debido a que la circulación se distribuye uniformemente a través de las dos puertas de acceso." src="@/assets/curso/tema1/30.svg")

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Ubicación de las secciones

    p.mb-4 Es la manera en que se organizan las distintas áreas del establecimiento. Incluye la disposición de los productos en las diferentes secciones, así como la planificación de las zonas de circulación, las zonas frías y las zonas calientes. Por ejemplo, la sección a la derecha puede estar dedicada al aseo personal, mientras que la sección a la izquierda se destina al aseo para el hogar.
    p.mb-4 La cantidad de secciones va a depender del tipo de local:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row.col-xl-11.m-auto(titulo="Local especializado – Local ultraespecializado")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-6
            h4.mb-2 Local especializado
            p.mb-4 Posee muy pocas secciones, pero puede tener muchas categorías de productos, tienen profundidad, una venta tradicional, además de familias y subfamilias en los productos.
            h4.mb-2 Local ultraespecializado
            p.mb-3 Posee solamente una sección, pero está altamente especializado, por ejemplo, solamente vende ropa deportiva. Además, posee una gran profundidad.
          .col-lg-6
            .row.justify-content-center.align-items-center
              .col-lg-11
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 5. 
                  | Local especializado – Local ultraespecializado
                img(src="@/assets/curso/tema1/31.svg" alt='Local especializado: Tiene pocas secciones pero muchas categorías de productos, con gran profundidad y una estructura de venta tradicional. Local ultraespecializado: Ofrece solo una sección, pero está altamente especializado, como en ropa deportiva, y mantiene una gran profundidad en su oferta.')
      .row.col-xl-11.m-auto(titulo="Disposición del movimiento")
        .row.justify-content-start.align-items-center.p-0
          .col-lg-6
            p.mb-3 Se puede poner sin seguir ningún trazado, el cliente tendrá libertad de movimiento. También se puede colocar en forma de parrilla o rectangular, o sea que la ubicación de las góndolas es paralela con relación al flujo de clientes. O también se puede ubicar una disposición angular que sitúa las góndolas de manera sesgada al flujo de clientes.
          .col-lg-6
            .row.justify-content-center.align-items-center
              .col-lg-12
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 6. 
                  | Disposición del movimiento
                img(src="@/assets/curso/tema1/32.svg" alt='Se trata de una disposición que permitela  libertad de movimiento al cliente. También se puede organizar en forma de parrilla o rectangular, con góndolas paralelas al flujo de clientes, o de manera angular, con góndolas en ángulo respecto al flujo.')

    .row.justify-content-center.align-items-center
      .col-lg-8
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema1/ic.svg', alt='')
            h3.mb-0.ms-2 Diseño de pasillos
        p.mb-4 Los pasillos son los espacios por donde transitan los clientes en el establecimiento, y deben tener un diseño especial e impactante que facilite la compra por parte de los clientes, favoreciendo su andar buscando los productos que necesita comprar. La dimensión o espacio de los pasillos puede representar el éxito o el fracaso del establecimiento, porque si son muy estrechos, no habrá facilidad en la circulación, y si son muy anchos disminuirá la superficie destinada para la venta.
      .col-lg-4.col-md-9.col-9
        img(src="@/assets/curso/tema1/33.png" alt='')


                









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
