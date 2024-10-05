<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Surtido

    .row.justify-content-center.align-items-center
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 Es el conjunto de productos ofertados por los diferentes establecimientos comerciales y que se encuentran dispuestos para que el consumidor los compre. El surtido se refiere a la variedad de los productos y no a la cantidad, sus objetivos son la satisfacción de las necesidades y deseos de los clientes, y la maximización en la rentabilidad del establecimiento, la cual se mide por metro cuadrado. 
        p.mb-4 #[b En otras palabras, para definir el surtido se puede decir que es el grupo de referencias o artículos disponibles en el punto de venta. La rentabilidad de la empresa dependerá del valor de la marca, la rotación y composición del surtido] (Puente, 2004).
        p.mb-4 Contar con un buen surtido es crucial para los establecimientos, ya que influye significativamente en la imagen de la marca. Un surtido adecuado ayuda a definir la personalidad de la marca y contribuye en gran medida al éxito empresarial.  
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b La coherencia del surtido:] es el equilibrio que se consigue entre productos según los criterios de rotación, margen, superficie y lineal disponible, motivación de la clientela, necesidades permanentes y estacionales. La elección del surtido es un acto fundamental ya que, al determinarlo, se satisface a un sector de clientela en detrimento de otro (Salen, 1994).
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema2/1.png', alt='tema1')

    separador
    #t_2_1.titulo-segundo.mb-4
      h2 2.1	Estructura del surtido

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-9.col-9.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema2/2.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-3 #[b Se refiere a los niveles, los cuales se dividen por departamentos, secciones, categorías, familias, subfamilias, artículos y referencias. Por ejemplo, la familia de los licores con productos de vinos comunes, vinos selectos, whisky, ron, aguardiente, brandy, etc.]
        p.mb-3 La cantidad de referencias que pone en venta un establecimiento está condicionada por el tamaño del local. Evidentemente, los establecimientos que posean más tamaño tendrán la posibilidad de poner en venta una mayor cantidad de referencias. 
        p.mb-3 Los supermercados, que suelen tener más o menos entre 1.000 m² y 2,500 m², pueden poner en venta aproximadamente 5.300 referencias, y los autoservicios, que son más pequeños en tamaño, máximo 2.900 referencias. Otras variables que influyen en la cantidad de referencias que trabaja un local comercial, son los hábitos de compra del consumidor, la imagen que tenga el establecimiento y su política comercial.
        p.mb-3 La clasificación o estructura del surtido radica en organizar este grupo de referencias en niveles. Tiene un doble propósito: el primero es diferenciar los niveles y el segundo es identificar cuáles niveles poseen mayor o menor rango. En cuanto a la gestión por categorías, la clasificación de referencias se puede distinguir comenzando en la totalidad del surtido y finalizando en las referencias de los artículos; como se puede ilustra en la siguiente figura.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-12.mb-4
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 7. 
          | Estructura del surtido
        ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Se muestra la clasificación o estructura del surtido consiste en organizar los artículos en grupos o niveles para facilitar su clasificación, identificación y gestión estratégica.')
            .tarjeta.colore.p-4(x="5%" y="85.2%" numero="")
              .h5.mb-2 Subfamilias
              p Se refiere a artículos similares pero que tienen una ligera diferencia, como, por ejemplo, yogures naturales sin azúcar, azucarados o con frutas. La subfamilia para la higiene infantil serían pañales, copitos, champú para niños, lociones, cremas, etc.
            .tarjeta.colore.p-4(x="10%" y="60%" numero="")
              .h5.mb-2 Familias
              p Se refiere a artículos que satisfacen una misma necesidad genérica, creando a su vez, distintas categorías de productos. Por ejemplo, las familias de la categoría de aseo personal serían jabones para el cuerpo, champú, higiene infantil, etc.
            .tarjeta.colore.p-4(x="20%" y="40%" numero="")
              .h5.mb-2 Subcategorías
              p Son divisiones existentes dentro de una categoría.
            .tarjeta.colore.p-4(x="30%" y="20%" numero="")
              .h5.mb-2 Categorías de productos
              p Corresponden a una unidad de necesidad y responden a un mismo objetivo global. Según la definición de una categoría de productos un artículo podrá estar ubicado en un lugar o en otro, porque puede responder a distintas necesidades.
            .tarjeta.colore.p-4(x="40%" y="5%" numero="")
              .h5.mb-2 Segmentos
              p Son divisiones existentes dentro de una subcategoría.
            .tarjeta.colore.p-4(x="50%" y="90%" numero="")
              .h5.mb-2 Referencias
              p Las diferentes opciones en tamaño, color, sabor, etc., que tienen los productos.
            .tarjeta.colore.p-4(x="69%" y="40%" numero="")
              .h5.mb-2 Artículos
              p También se les puede llamar productos o por su nombre común y natural como por ejemplo leche entera, semideslactosada o deslactosada.
            .tarjeta.colore.p-4(x="85%" y="60%" numero="")
              .h5.mb-2 Divisiones
              p También se conocen como grupos. Por ejemplo, divisiones de alimentación y no alimentación.
            .tarjeta.colore.p-4(x="95%" y="85%" numero="")
              .h5.mb-2 Departamentos
              p También se les conoce como sectores. Forman los grandes centros de actividades del establecimiento que agrupan varias secciones para tener un surtido homogéneo y complementario.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-12.mb-4
        .cajon.color-secundario.p-4
          p.mb-0 Entonces, la clasificación o estructura del surtido se refiere a distribuir los artículos en grupos o niveles para que la oferta comercial se pueda clasificar, identificar y gestionar estratégicamente. Lo normal es que cada establecimiento diseñe su propia estructura, sin embargo, cabe anotar que la empresa debe gestionar de forma estratégica el surtido y su clasificación, teniendo en cuenta variables como la tipología del negocio y la filosofía empresarial. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Dimensiones del surtido

    p.mb-4 Las dimensiones del surtido cuentan con las siguientes características:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12   
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Amplitud
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
            p.text-center Número de familias diferentes de productos que ofrece la marca.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Profundidad
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/5.svg', alt='Texto que describa la imagen')
            p.text-center Número de variantes que la marca ofrece por cada producto en cada familia. 
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Longitud
              .col-8
                figure
                  img.img-a.img-t.my-2(src='@/assets/curso/tema2/6.svg', alt='Texto que describa la imagen')
            p.text-center Número total de productos que tiene la marca en una familia.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Consistencia
              .col-8
                figure
                  img.img-a.img-t.my-2.mt-3(src='@/assets/curso/tema2/7.svg', alt='Texto que describa la imagen')
            p.text-center Cercanía relativa entre las líneas de producto y su uso final.
    
    p.mb-5 A continuación, se presenta cómo se organizan dichas dimensiones del surtido:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Surtido amplio y profundo
                p.mb-4 Es cuando un establecimiento comercial quiere satisfacer de manera amplia una gran variedad de necesidades. Para ello, debe haber muchas familias y que cada familia posea muchas referencias.
              .col-lg-5
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 8. 
                  | Surtido amplio y profundo
                img(alt="Muestra cuando un establecimiento comercial busca satisfacer una amplia gama de necesidades, ofreciendo a profundidad muchas familias de productos, cada una con numerosas referencias." src="@/assets/curso/tema2/8.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Surtido amplio y poco profundo
                p.mb-4 Muy normal en autoservicios y tiendas de descuento. Se da cuando el establecimiento tiene muchas familias y cada familia posee poca variedad de artículos.
              .col-lg-5
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 9. 
                  | Surtido amplio y poco profundo
                img(alt="Muestra cuando el establecimiento ofrece muchas familias de productos, pero cada familia tiene una variedad limitada de artículos." src="@/assets/curso/tema2/9.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Surtido estrecho y profundo
                p.mb-4 Muy normal en tiendas especializadas, porque presenta buena variedad de productos, pero solo para algunas familias específicas. Por ejemplo, las tiendas de electrodomésticos.
              .col-lg-5
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 10. 
                  | Surtido estrecho y profundo
                img(alt="Muestra  buena variedad de productos, pero solo en algunas familias específicas, como en las tiendas de electrodomésticos." src="@/assets/curso/tema2/10.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Surtido estrecho y poco profundo
                p.mb-4 Muy normal en las tiendas tradicionales de barrio. Se da cuando el establecimiento posee pocas familias y pocas referencias. Otro ejemplo son los concesionarios de autos.
              .col-lg-5
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 11. 
                  | Surtido estrecho y poco profundo
                img(alt="Muestra cuando el  establecimiento tiene pocas familias y pocas referencias." src="@/assets/curso/tema2/11.svg")
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Determinación de las dimensiones del surtido

    p.mb-4 En la gestión del surtido, el primer paso es definir con precisión sus dimensiones. Para lograrlo, es necesario considerar los siguientes factores:
    
    TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="El tamaño de la tienda")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/12.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 El tamaño de la tienda
            p.mb-0 Se refiere a la superficie que dispone el establecimiento, y según sea su tamaño la empresa podrá jugar con el diseño de la longitud y profundidad del surtido de productos. 
      .py-3.py-md-5(titulo="La rentabilidad de la tienda")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/13.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 La rentabilidad de la tienda
            p.mb-0 El establecimiento debe decidir qué precio se ajusta a los productos. Desde la teoría, un establecimiento amplio y profundo, es decir, con una superficie grande, podría aumentar sus precios de venta con el fin de lograr mayor rentabilidad. Es normal, porque el cliente recibe a cambio el poder comprar todo lo que necesita sin necesidad de trasladarse a otro almacén, tienda o establecimiento. Pero se debe pensar en qué prefieren los clientes: mayor variedad de productos con mayores posibilidades de elección de productos o menor variedad de productos con menores posibilidades de elección de productos. 
      .py-3.py-md-5(titulo="La naturaleza de los productos")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/14.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 La naturaleza de los productos
            p.mb-0 Al comprar artículos comunes como pan, huevos, leche o mantequilla, los consumidores generalmente no comparan mucho, por lo que no es necesario contar con un surtido muy profundo en el establecimiento. En cambio, al adquirir productos menos frecuentes o poco comunes, como electrodomésticos, textiles o muebles, los clientes tienden a comparar más detenidamente. En estos casos, el cliente evalúa diversas opciones en cuanto a precio, características, calidad y beneficios, por lo que es importante ofrecer un surtido más amplio. 
      .py-3.py-md-5(titulo="El modo de presentación de los productos")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/15.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 El modo de presentación de los productos
            p.mb-0 Se refiere a la forma en que se exhiben los productos. Se pueden usar góndolas, determinados tipos de contenedores, #[em displays] o incluso, la presentación de los artículos en el suelo. Es por esto por lo que el modo de presentación de los productos influye directamente en la composición del surtido.
      .py-3.py-md-5(titulo="El comportamiento de la clientela")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/16.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 El comportamiento de la clientela
            p.mb-0 Se debe tener en cuenta los hábitos de compra por parte de los clientes que, según sus características psicológicas y su poder adquisitivo, realizan las compras bien sea de manera banal o excepcional.
    p.mb-4 Para lograr un equilibrio en el establecimiento comercial se debe llegar a una optimización en la anchura y la profundidad del surtido, eligiendo la composición que mejor funcione en el interior, y pensando en los factores enumerados anteriormente, en los productos y en los clientes. Además, se deben medir de forma cuidadosa los siguientes dos valores:
    
    .row.justify-content-center.align-items-center
      .col-lg-8
        ul.lista-ul.ps-2
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b La demanda de cada producto:] en el interior de cada familia de artículos se debe calificar cada referencia de acuerdo con su volumen de venta.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-3 #[b La influencia de los productos de atracción:] cuáles son los artículos o referencias que influyen en la venta de demás. Su sola presencia en el punto de venta se hace necesaria porque ayuda las ventas en conjunto de la familia. Por lo general, los productos de atracción suelen ser más rentables que los demás, ya que además de influir en la venta de los demás, también son productos que tienen alta rotación (Salen, 1994).
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t(src='@/assets/curso/tema2/17.png', alt='')
    
    
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2	Planograma o planimetría

    .row.justify-content-center.align-items-center
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-3 #[b Es una herramienta muy necesaria para la gestión eficaz del espacio donde se exhiben los productos de los establecimientos minoristas, más aún en la actualidad, porque existe un mercado más complicado y competitivo, en el que ha aumentado el tamaño de las tiendas, las dimensiones del surtido y el número de categorías. Esta herramienta tiene como objetivos mejorar la presentación de los artículos y aumentar las ventas.]
        p.mb-3 Se puede definir como un instrumento del #[em merchandising] que consiste en el diseño de un boceto, diagrama o croquis a través de un #[em software], donde se describe detalladamente el lugar en el que se van a ubicar los artículos. Además, el planograma detalla la cantidad de productos, el número de #[em facings] (caras) de un mismo producto, cuál es la altura y qué profundidad deben ocupar las distintas referencias señaladas. Se entiende por facing al número de caras de un mismo producto que se necesitan para que se pueda ver por parte del cliente. Por lo tanto, el planograma viene siendo una estrategia de mercadeo que tiene como objetivo hacer visible al producto al interior del establecimiento.
        p.mb-3 La complejidad de un planograma va a depender del tamaño del establecimiento, de las necesidades del detallista o del programa #[em (software)] utilizado para su diseño. Por eso se recomienda que el planograma sea sencillo pero que, a la vez, detalle toda la información necesaria para saber cuál es la ubicación exacta de cada artículo dentro de la tienda. 
      .col-lg-4.col-md-9.col-9.mb-4
        img(src='@/assets/curso/tema2/18.png', alt='tema1')

    .row.fondo2.align-items-center.p-0.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .subt.mb-5(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema1/ic.svg', alt='')
            h3.mb-0.ms-2 Las funciones principales del planograma son: 

        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-4
              img.img-a.img-t(src='@/assets/curso/tema2/19.svg', alt='tema1')
              p.mb-0 #[b Mejorar la ubicación de los productos.] Poniendo los productos más vendidos o que son más rentables en un nivel más destacado.
          .col-lg-4.col-md-6.mb-4
            .overflow-hidden.h-100.bg5.p-4
              img.img-a.img-t(src='@/assets/curso/tema2/20.svg', alt='tema1')
              p.mb-0 #[b Aumentar las ventas.] Con el uso de los planogramas, los establecimientos comerciales deciden cómo va a lucir el lineal y qué artículos serán más accesibles para el cliente; además de procurar que el diseño sea más impactante y atractivo para los clientes.
    
    p.mb-4 Y en cuanto a los beneficios: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        ul.lista-ul.ps-2
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Reduce el tiempo de creación de la ubicación de los productos en el establecimiento. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Establece el potencial de venta de cada área de la superficie. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Mejora la satisfacción del cliente facilitando las compras a través de lineales ordenados y atractivos visualmente.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Permite una revisión más estricta del inventario al ordenar las estanterías y los #[em facings] (frentes) basándose en la rotación, lo que da como resultado una reducción de las roturas del stock (espacios vacíos). 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Suministra una mejor relación del posicionamiento de los artículos. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Facilita la reposición de productos porque dota al personal encargado de una guía a seguir. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Influencia en la conducta del consumidor al realizar una acción de compra, por lo que se logra un aumento en las ventas y en la rentabilidad. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Es una herramienta efectiva para informar al personal la disposición determinada para el lineal. 

    p.mb-4 En el momento del diseño de un planograma se recomienda determinar el espacio de acuerdo con el rendimiento o rotación de los productos. La principal regla es asegurar que exista en el lineal, mercancía suficiente que satisfaga la demanda de los clientes. 
    p.mb-4 Es por lo que el establecimiento debe tener en cuenta las siguientes consideraciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left" data-aos-delay="500")
        figure.m-auto.col-9.col-md-9.col-lg-12
          img.mb-4(src="@/assets/curso/tema2/21.svg") 
      .col-lg-8.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Emplazamiento")
            p.mb-0 Elegir el lugar del establecimiento donde se va a ubicar una determinada referencia, los artículos adyacentes y los lugares secundarios.
          .row.col-xl-11.m-auto(titulo="Extensión de la categoría")
            p.mb-0 Cuál es el tamaño del espacio que le será asignado a la categoría.
          .row.col-xl-11.m-auto(titulo="Lugar del producto")
            p.mb-0 Cómo asignar el sitio a cada artículo. Se puede tener en cuenta por la cantidad de ventas, por rotación, por encargos, por niveles de inventario, etc.
          .row.col-xl-11.m-auto(titulo="Disposición")
            p.mb-0 Cómo organizar el planograma, puede ser por precios, marcas, fabricantes, etc.
          .row.col-xl-11.m-auto(titulo="Señalización y PLV")
            p.mb-0 Establecer si la categoría pudiera beneficiarse de la señalización interna del local o del material PLV (Publicidad en el Lugar de Venta). 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Tipos de planogramas

    p.mb-4 Esencialmente hay tres tipos de planogramas:
    
    TabsC.color-primario(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="Casillas con texto")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-9.col-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/22.svg', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 Casillas con texto
            p.mb-0 Es el planograma más sencillo, porque emplea recuadros para representar los artículos, ubicando su nombre adentro. Por lo general, son en blanco y negro y bidimensionales. Principalmente son usados en tiendas de alimentos o en departamentos que tienen productos con alta rotación.
      .py-3.py-md-5(titulo="Pictóricos")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-9.col-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/23.svg', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 Pictóricos
            p.mb-0 Es un planograma más complejo y detallado porque usan una imagen del producto y de cómo debe ser exhibido. Por lo general, se diseñan a escala y en colores para proveer una descripción exacta de los productos exhibidos. Comúnmente usado en establecimientos de moda y tiendas por departamento donde la exhibición es más relevante y la presentación es primordial. Suelen ser imágenes bidimensionales a través de fotos o ilustraciones que muestran en detalle el diseño de los productos.
      .py-3.py-md-5(titulo="La naturaleza de los productos")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-9.col-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/24.svg', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 Tridimensionales
            p.mb-3 PlanoGraphics, Panogramas PRO y Adalta Apollo Space Management & Planning, entre otros.
            p.mb-3 Cuando se establece un planograma se debe evitar:
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Puertas cercanas a las puertas de acceso o a los depósitos de mercancías.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Esquinas con poca iluminación.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Mezclar productos de la canasta familiar con otros que tengan olores fuertes como por ejemplo detergentes o insecticidas.
            p.mb-3 Además, se debe buscar:
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Crear impacto. 
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Que haya disponibilidad de artículos de manera permanente.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Tener claridad en el precio (números redondos).
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 La facilidad para el cliente.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Que la información sea clara.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Que exista un estímulo a la compra por parte del cliente.
    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 #[em Layout]
  
    p.mb-4 #[b Se refiere al diseño o disposición de los productos (bienes y servicios) en sectores o categorías en el punto de venta del establecimiento. Para el #[em retail] es un concepto técnico tan importante que perfectamente puede estar incluido dentro de las estrategias en un plan de #[em marketing.]]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/25.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 Este busca la instalación óptima de los componentes, activos o pasivos, para alcanzar los volúmenes requeridos disminuyendo el gasto en mano de obra, movimientos, existencias o almacenamientos intermedios, además de la inactividad o espera de los equipos.
            br
            br
            |
            p En cuanto al mercadeo, el #[em layout] se refiere al emplazamiento de los bienes o servicios en cualquier tipo de establecimiento, o sea, a su organización estratégica con el fin de disminuir el consumo de mano de obra y certificar la correcta exhibición de los artículos. El #[em marketing-layout] tiene como objeto aumentar las ventas por metro cuadrado, agrupando o separando los artículos con base a los criterios de consumo que identifiquen a un determinado mercado. Por ejemplo, en el tema de las estanterías se suele elegir entre dos tipos de layout: rectangular o angular (Martínez, 2016).
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2  Tipos de #[em layout]

    p.mb-5 A continuación, se presentan cinco (5) tipos de #[em layout] diferentes utilizados en los establecimientos:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo="n")
          .row.align-items-center
            .col-lg
              h3 Diseño recto
              p Normalmente usado en establecimientos que tienen venta al por menor. Puede confundir y frustrar, porque no se puede ver por encima del mobiliario; es más económico.
            .col-auto.mb-3
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 12. 
                | Diseño recto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/26.png', alt='Muestra un diseño recto que se utiliza en los establecimientos, el cual no permite ver por enciam del mobiliario.')
          .row.align-items-center
            .col-auto.mb-3
              .titulo-sexto.color-secundario.mb-3.text-left
                h5 Figura 13. 
                | Diseño diagonal
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/27.png', alt='Muestra un diseño diagonal del establecimiento, mejorando la visibilidad para los cajeros y clientes.')
            .col-lg
              h3.text-left Diseño diagonal
              p.text-left Presenta una buena distribución del espacio para los establecimientos de autoservicio o tiendas minoristas.
              p.text-left Posee una muy buena visibilidad para los cajeros y clientes.
              p.text-left Permite el movimiento y el flujo de tráfico a la tienda.
          .row.align-items-center
            .col-lg
              h3 Diseño angular
              p Es la mejor opción para los establecimientos especializados de alta gama. Las curvas y ángulos de los muebles permiten al cliente apreciar mejor los artículos. Favorecen una mejor circulación dentro del establecimiento.
              p Es el más costoso por las curvas y los ángulos de los muebles.
            .col-auto
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 14. 
                | Diseño angular
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/28.png', alt='Muestra un diseño angular del establecimiento, con curvas y ángulos que permiten apreciar mejor los productos.')

          .row.align-items-center
            .col-auto.mb-3
              .titulo-sexto.color-secundario.mb-3.text-left
                h5 Figura 15. 
                | Diseño geométrico
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/29.png', alt='Muestra un diseño para establecimientos con bastidores que permiten mejorar la exhibición.')
            .col-lg
              h3.text-left Diseño geométrico
              p.text-left Es el diseño apropiado para exhibición de ropa o tiendas departamentales.
              p.text-left Se utilizan bastidores y mobiliario especial para lucir un diseño interesante con un precio económico.
          .row.align-items-center
            .col-lg
              h3 Diseño mixto
              p Integra diseños rectos, diagonales y con ángulos planos para generar un diseño funcional. Mueve el tráfico hacia los muros y el fondo del establecimiento.
            .col-auto
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 16. 
                | Diseño mixto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/30.png', alt='Muestra diseños rectos y diagonales de manera funcional.')

    h4.mb-4 Formatos del #[em layout]
    p.mb-5 Se distinguen dos (2) categorías principales, #[em layout] con transformación y sin transformación:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
      .row.col-xl-11.m-auto(titulo="<em>Layout</em> con transformación")
        p.mb-4  #[b #[em Layout] por proceso:] los componentes son agrupados por la función especial que cumplen, sin referirse a ningún producto en especial (por ejemplo, talleres por encargo).
        p.mb-4  #[b #[em Layout] por producto:] los componentes se ordenan en función de las etapas por las cuales pasa el producto, desde la entrada de la materia prima hasta la salida del producto terminado (por ejemplo, montaje de automóviles).
        p.mb-4  #[b #[em Layout] por posición fija:] el producto por sus características permanece inmovilizado y los diversos medios de fabricación requeridos se sitúan alrededor del mismo (por ejemplo, aviones, astilleros). Los medios de producción inmovilizados sirven para la fabricación de más de una unidad.
        p.mb-0  #[b #[em Layout] por proyecto:] se refiere a situaciones especiales, como construcción de edificios o carreteras. A veces coincide este formato con el de posición fija, pero el de proyectos debe planearse teniendo en cuenta el terreno particular en el que se lleva a cabo la tarea, el cual puede sufrir cambios.
      .row.col-xl-11.m-auto(titulo="<em>Layout</em> sin transformación")
        p.mb-4  #[b #[em Layout] del almacenamiento:] el objetivo es cumplir con una función de inventario y analiza la colocación de los componentes en un almacén.
        p.mb-0  #[b #[em Marketing layout:]] los componentes se ubican de forma tal de facilitar la venta (por ejemplo, supermercados).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Los objetivos del #[em layout] de los establecimientos comerciales son mejorar la rapidez para preparar los pedidos, facilitar la exactitud de estos y la ubicación más eficiente del surtido. Si todo lo anterior se logra, se pueden potencializar las ventajas competitivas de la empresa que están incluidas en el plan estratégico, por lo general adquiriendo ciclos de pedido con mayor rapidez y con mejor servicio al cliente.
        p.mb-4 Fases fundamentales en el diseño de un almacén:
        ul.lista-ul
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b Fase de diseño de la instalación.] Se elige el tipo de #[em layout] para el establecimiento.
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b Fase de diseño de la disposición de los elementos que deben “decorar” el almacén.] Se procede a crear el #[em layout] en el almacén. La exhibición debe estar lista y los muebles deben tener todo el contenido de artículos, señalética y PLV.
      .col-lg-5.col-md-9.col-9
        img(src='@/assets/curso/tema2/31.png')
    
    h4.mb-4 Características del #[em layout]
    p.mb-0 Disminuye la cantidad de movimientos del surtido, además de su manipulación, mermas e incluso robos, lo que hace que el inventario sea exacto. También hace que el establecimiento tenga una buena distribución evitando zonas congestionadas y, por último, facilita la gestión de mantenimiento del surtido (Martínez, 2016).
    

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4	La exhibición de productos

    p.mb-4 #[b Consiste en la selección, ubicación y exposición de los artículos en el punto de venta, de tal forma que llamen la atención de los clientes motivándolos a una acción de compra. Según sea el tamaño y tipo de establecimiento va a condicionar la distribución y exhibición de los productos.]
    p.mb-4 La exposición de los artículos en un almacén o establecimiento se hace mediante el uso de un mobiliario especial que permite mostrar al cliente la mayor cantidad de productos, durante el mayor tiempo posible.
    p.mb-4 Los objetivos de la exhibición son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-9.col-9
        img.mb-4(src='@/assets/curso/tema2/32.png')
      .col-lg-6
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Llamar la atención del cliente para que vea los productos.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Generar fidelidad hacia el establecimiento.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Exhibir los productos.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Ofrecer comodidad al cliente.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Disponer de pasillos amplios entre los muebles exhibidores.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Apoyar las promociones de venta (descuentos, ofertas, 2x1, etc.).
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Recordar al cliente la presencia de un producto que pueda estar necesitando.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Motivar la acción de compra por impulso.

    p.mb-4 Según sea la disposición del establecimiento, el administrador que es el responsable del lugar y de la exhibición, tiene como objetivo organizarlo según:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-3
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Situación de las secciones.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La circulación.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Lugares y puntos de venta fríos y calientes.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Elementos en el exterior del punto de venta.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Áreas complementarias: bodegaje, servicios adicionales y entretenimiento.
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema2/33.png')
      
    p.mb-4 Una vez organizado el interior del establecimiento, determinadas las diferentes secciones y definidos los espacios de los pasillos, se puede considerar el uso de los tipos de exhibición y el #[em layout] del surtido.

    .bg6.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema2/34.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            h4.mb-3 Tipos de exhibición
            p.mb-3 No importa cuál sea el tipo de exhibición que se elija en el establecimiento, deberá motivar en el cliente la acción de compra, por lo que se deben tener en cuenta las actividades programadas en el punto de venta, lo mismo que la temporada y los objetivos de venta. De esta manera, se puede pensar en tener “exhibiciones especiales” y “exhibiciones secundarias o adicionales” (por fuera del lineal y la góndola).
            p.mb-3 Una exhibición debe contar con una excelente exposición de los productos para poder llamar la atención del público que con frecuencia visita el establecimiento. En cada sección se debe emplear un buen #[em merchandising] y utilizar los mejores elementos para su producción, lo cual es vital en la rotación del artículo que forme parte de la exhibición.
            p.mb-0 Por lo general, los clientes toman las decisiones de compra directamente en el punto de venta, por lo que una efectiva exhibición de los artículos puede influir positivamente en la toma de decisión.
    
    p.mb-4 Los siguientes son algunos de los tipos de exhibición más comunes:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | #[b Exhibición vertical.] Los productos se ubican de manera que cubran todos los niveles del lineal o góndola. Los de tamaños más pequeños van arriba, los medianos van en medio y los de mayor tamaño en los niveles bajos del anaquel.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | #[b Exhibición horizontal.] El producto se ubica en sus diferentes variedades, a lo largo de la estantería.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | #[b Exhibición por bloques.] El producto se ubica en bloques en la estantería.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | #[b Exhibición de doble franja.] En la misma estantería se exhiben dos líneas de productos relacionados: una línea de productos de gran consumo o básicos y otra línea de productos de impulso, como dulces, chocolates, chicles y paletas.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | #[b Exhibición en #[em check out.]] Productos que se encuentran cerca de las cajas para que el cliente realice una acción de compra por impulso en el momento de hacer la fila para pagar.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | #[b Exhibición especial.] Tiene un diseño distinto al de un lineal, góndola o estantería. Puede ser un exhibidor exclusivo para el producto o una isla, y se utiliza generalmente durante promociones de venta o lanzamientos de nuevos productos.
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/tema2/35.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La cantidad de formas para exhibir los productos en el punto de venta es muy amplia y variada. Lo importante es que son aplicables a cualquier establecimiento comercial, de tal forma que los espacios sean aprovechados al máximo al interior del local. Por esta razón, es vital planear adecuadamente en qué forma se van a exhibir los artículos, cómo se van a distribuir los lineales, las góndolas, los muebles, las vitrinas, el escaparate y demás elementos que le darán forma al establecimiento.
    
    p.mb-5 Exhibiciones adicionales o complementarias:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Exhibición emblemática o especial
                p.mb-4 Es un #[em display] que busca destacar las características específicas de los productos. Puede ser diseñado de muchas formas.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/36.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Exhibición en islas
                p.mb-4 Es una forma de presentación masiva y solitaria de un artículo. Se ubican fuera del lineal o góndola y no tienen contacto con otro tipo de artículos.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/37.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Exhibición de ganchos
                p.mb-4 Están ubicados en las esquinas de las góndolas, por lo que tienen un mayor impacto, aumentando la comunicación visual, con accesorios que lo hacen más atractivo como cabezotes, laterales, frontales, cenefas y partes móviles. Ayudan a posicionar una marca.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/38.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Exhibición en punta de góndola
                p.mb-4 Están ubicados en las esquinas de las góndolas, por lo que tienen un mayor impacto, aumentando la comunicación visual, con accesorios que lo hacen más atractivo como cabezotes, laterales, frontales, cenefas y partes móviles. Ayudan a posicionar una marca.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/39.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Exhibición mamut
                p.mb-4 Son de gran tamaño, versátiles y con un excelente contenido escenográfico, cuyo fin es presentar variedad de productos de una marca en el mismo lugar personalizándolo para impactar visualmente al cliente a través de diseños lúdicos.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/40.svg")

    p.mb-4 Una exhibición debe tener un grupo de características que avalen su funcionalidad y logren que se cumplan los objetivos del establecimiento. Por esta razón, la exhibición debe ser visible y atractiva a los ojos del cliente, además de comunicar efectivamente, ya que el #[em merchandising] es comunicación visual en el interior del establecimiento.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Características de la exhibición  
        
    p.mb-4 En primer lugar, se recomienda que la exhibición ambiente el punto de venta, lo cual debe venir con una presentación llamativa de los artículos, además de colorida, imponente y al alcance de los clientes, con precios justos y cuando sea posible, con degustaciones que hagan que el consumidor conozca de primera mano un producto. 
    p.mb-0 Una exhibición debe reunir las siguientes características: sencilla, visible, atractiva, accesible, comunicativa, rellenable, segura, alegre, limpia, estable y con precio visible (Cruz, 2018).

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5	Vitrinismo o visual #[em merchandising]

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6-iaznLZYTg?si=oai3visTimhXuWqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Visual #[em Merchandising]
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-8.mb-3
        p.mb-4 Son todas las técnicas y estrategias que se emplean en el diseño de un escaparate o vitrina con el fin de conquistar los clientes que transitan en el establecimiento, incitarlos e invitarlos a que realicen la compra de los productos exhibidos. El vitrinismo funciona como comunicador visual y conceptual que funciona en pro de conquistar al consumidor. La vitrina es un lienzo en blanco donde puede formar toda la creatividad para convertirla en una obra de arte (Borja, 2021).
        p.mb-4 Según Joan Costa, la vitrina tiene un tiempo de percepción de 8 segundos para atraer la atención de un cliente. Por ello, debe diseñarse con argumentos comunicacionales que resalten los artículos, combinando sencillez y creatividad. La idea, la composición, el color, las piezas gráficas, la línea y la iluminación deben trabajar en conjunto para crear una vitrina llamativa, impactante y una experiencia emocional e inolvidable para el cliente (Costa, 2007).
      .col-lg-4.col-9.col-md-9.mb-3
        img(alt="" src="@/assets/curso/tema2/41.png")
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Tipos de vitrina o escaparate

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/42.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            h4.mb-4 Elementos que componen una vitrina:
            br
            br
            |
            p
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Creatividad.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Sicología y percepción.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Composición de los elementos.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Color.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Iluminación.

    .row.mb-5
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Vitrina exterior")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/43.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 Vitrina exterior
                p.mb-4 Por lo general se encuentra a los lados del ingreso a la tienda, especialmente cuando esta está ubicada en un centro comercial.
                p.mb-0 La idea es la de llamar la atención del cliente y ofrecerle una breve información, básica e imaginativa, provocándole curiosidad por conocer más.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Vitrina cerrada")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/44.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 Vitrina cerrada
                p.mb-0 Cuando el diseño de la vitrina no permite ver hacia adentro del establecimiento.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Vitrina abierta")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/45.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 Vitrina abierta
                p.mb-0 Cuando el diseño de la vitrina permite observar el interior de la tienda.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Vitrina interior")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/46.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                h4.mb-4 Vitrina interior
                p.mb-0 Cuando el producto se exhibe dentro de la tienda en una vitrina que está ubicada en la zona caliente.

    .cont_5_1.mt-4
      .row.justify-content-center
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/47.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center El montaje
              p.mt-4.text-white.mb-0.text-center.mb-5 Una idea decorativa con productos integrados, que permiten al transeúnte entender rápidamente el mensaje de la tienda.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/48.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center El tema
              p.mt-4.text-white.mb-0.text-center.mb-5 Mensaje que se incorpora al montaje para recordar una fecha o actividad.
        .col-lg-4.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema2/49.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center El foco
              p.mt-4.text-white.mb-0.text-centerCentro.mb-5 óptico seleccionado para llamar la atención.
    
    separador
    #t_2_6.titulo-segundo.mb-5
      h2 2.6	#[em Merchandising]

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IeQCOizbTfA?si=-YQa-QtzXODLzUgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Merchandising en el punto de venta

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-7
        p.mb-4 Es el conjunto de estrategias y tácticas efectuadas dentro del establecimiento y que tiene como fin buscar el artículo correcto, en la cantidad necesaria, con el precio justo, en el tiempo adecuado, con una presentación visual impactante y dentro de una exhibición sobresaliente. Se refiere a todos los esfuerzos destinados a que el cliente, no solo conozca el producto, sino también, que tome una acción de compra.
        p.mb-4 El término #[em merchandising], como se conoce en la actualidad, se incrementó con la aparición del autoservicio en Estados Unidos en la década de 1930. Época en la que los establecimientos se dieron cuenta del impacto e influencia que tenían las exhibiciones en el consumidor. Los artículos que estaban exhibidos tenían una mejor respuesta comercial dando comienzo a una serie de investigaciones en el tema, que terminaron por profesionalizar el área. Y fue así como, con el paso de los años, los supermercados comenzaron a usar el merchadising para destacar y promocionar toda la mercancía en sus lugares de venta (Borja, 2021).
      .col-lg-5.col-9.col-md-9
        img(alt="" src="@/assets/curso/tema2/50.png")
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Tipos de #[em merchandising]
    
    p.mb-5 Existen diferentes opciones para destacar los productos en el punto de venta, que dan mayores posibilidades para mejorar la exhibición de las marcas y sus artículos. Y para lograrlos, hay varios tipos de merchandising: según la naturaleza, según el tipo de cliente y según el ciclo de vida del producto, las cuales se presentarán a continuación:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .sub.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema2/ico.svg', alt='')
            h3.mb-0.ms-2 Según la naturaleza
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12   
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center #[em Merchandising] de presentación
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/51.svg', alt='Texto que describa la imagen')
            p Se presentan los productos de modo que sea fácil de verlos por parte del cliente y además rentable para el establecimiento.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center #[em Merchandising] de gestión
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/52.svg', alt='Texto que describa la imagen')
            p Gestiona el espacio o lugar de venta para obtener el mayor rendimiento en cada lineal o góndola.
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center #[em Merchandising] de seducción
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/53.svg', alt='Texto que describa la imagen')
            p Da un aspecto seductor, no solo al lineal, sino a la tienda en general. También se conoce como “tienda espectáculo” por el diseño especial que se crea para el impacto visual al cliente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .sub.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema2/ico.svg', alt='')
            h3.mb-0.ms-2 Según el tipo de cliente
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8 
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Para el cliente  #[em shopper] 
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/54.svg', alt='Texto que describa la imagen')
            p El cliente que requiere de un grupo de argumentos para visitar un establecimiento en lugar de otro.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Para el cliente #[em buyer]
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/55.svg', alt='Texto que describa la imagen')
            p Se refiere al cliente que ya se encuentra dentro del establecimiento y que se basa en el precio, la calidad del producto, las promociones de venta, la gama de productos y la atención recibida para tomar una decisión de compra.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .sub.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema2/ico.svg', alt='')
            h3.mb-0.ms-2 Según el ciclo de vida del producto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Producto de lanzamiento
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/56.svg', alt='Texto que describa la imagen')
            p Cuando una nueva referencia, bien o servicio sale al mercado, es necesario definir su emplazamiento, ubicación y lineal donde será exhibido. 
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Producto de ataque
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/57.svg', alt='Texto que describa la imagen')
            p Cuando el producto crece rápidamente, se posiciona y es el mejor frente a los demás productos de la familia. En ese momento se puede darle un espacio más amplio en el lineal.
          .col-md.tarjeta.color-primario.bd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Producto de mantenimiento
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/58.svg', alt='Texto que describa la imagen')
            p Cuando el producto ya llegó a su madurez, está posicionado y tiene un buen lugar y espacio en el lineal. En este momento se debe tratar de que esta situación permanezca la mayor cantidad de tiempo posible.
          .col-md.tarjeta.color-primario.bdd.p-4
            .row.justify-content-center.mb-4
              h4.mb-4.text-center Producto de defensa
              .col-8
                figure
                  img.img-a.img-t(src='@/assets/curso/tema2/59.svg', alt='Texto que describa la imagen')
            p Cuando el producto se encuentra en su fase de declive y es cuando el espacio puede disminuir o incluso desaparecer del lineal. El fabricante debe decidir si lo retira del mercado o si le inyecta un cambio que sea positivo para el cliente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .sub.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/tema2/ico.svg', alt='')
            h3.mb-0.ms-2 Ciclo de vida del producto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 17. 
          | Ciclo de vida del producto
        img(src="@/assets/curso/tema2/60.svg" alt='Muestra el ciclo de vida de un producto en cuanto a las ventas en el tiempo, inicialmente se realiza una introducción del mismo, se impulsa el crecimiento para lograr la madurez en el ventas, posteriormente muestra un declive.')

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Funciones del #[em merchandising]

    p.mb-4 La labor de crear #[em merchandising] es ubicar, apoyar, monitorear y actualizar los productos, además de tener la exhibición impecable y apoyar los productos con publicidad que los acompañe (Borja, 2021). 
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8
        p.mb-4 Las principales funciones del #[em merchandising] son:
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Exposición lo más óptima posible de los artículos.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Garantía de que los artículos se encuentran disponibles para el cliente.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Rectitud en el suministro de productos de la empresa comercial.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Planificación del espacio de exhibición.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Impacto visual del producto destacándolo de los demás grupos de productos similares de la competencia.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Uso estratégico del espacio del lineal, góndola o estantería. 
      .col-lg-4.col-9.col-md-9
        img(alt="" src="@/assets/curso/tema2/61.png")
    
    separador
    #t_2_7.titulo-segundo.mb-5
      h2 2.7	Señalización comercial

    p.mb-4 Es una herramienta muy importante que ayuda a mejorar la información dentro del establecimiento, de tal forma que el visitante encuentre fácil el producto que necesita. Por lo tanto, ayuda a la circulación y la orientación dentro del recinto. Una buena implementación de un proyecto de señalización debe tener en cuenta los siguientes dos aspectos (Costa, 2007).
  
    TabsC.color-primario(data-aos="zoom-in-left").mb-5
      .py-3.py-md-5(titulo="Localización previa del sitio")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-9.col-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/62.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 Localización previa del sitio
            p.mb-0 Diagnósticos del marco legal determinado y derroteros en el reconocimiento del punto de venta. Ayuda para comprender cuáles son los condicionantes que se deben tener en cuenta a la hora de diseñar la señalética. Por otro lado, se debe tener en cuenta qué tipo de signos se van a usar, para que el creativo entre en acción y diseñe las diferentes piezas, donde debe tener en cuenta el espacio disponible, tamaño de las piezas, colores, texturas, materiales. El diseño que desarrolle el creativo debe ser coherente a la identidad y personalidad de la marca, y debe ir de acuerdo con las normativas del sitio. Una vez el diseño esté listo y aprobado se pasa a la etapa de producción e instalación.
      .py-3.py-md-5(titulo="Señalización del establecimiento comercial")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-9.col-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/63.png', alt='')
          .col-lg-8.col-md-12.my-3
            h3.mb-4 Señalización del establecimiento comercial
            p.mb-4 El diseño de la señalización debe tener armonía con la arquitectura del establecimiento. El trabajo interdisciplinario, en este momento es fundamental, porque se debe tener en cuenta la opinión de arquitectos, diseñadores industriales y técnicos especialistas en el tema. Con esto se asegura un óptimo resultado en el cumplimiento de los objetivos de señalización en el punto de venta.
            p.mb-0 La finalidad de la señalización comercial es la de hacer un llamado de atención al público presente sobre algunas situaciones de riesgo de una manera simple, rápida y de fácil comprensión. Cuando la señalización de seguridad falta en el interior de un establecimiento incrementa las situaciones de riesgo, porque priva a empleados y visitantes de una elemental información básica que puede alertar sobre el riesgo y la forma en que se puede evitar (Costa, 2007).
  
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Tipos de señalización comercial
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-12.mb-3
        p.mb-4 Para que las señales sean lo más efectivas posible, deben cumplir ciertas consideraciones que tienen que ver con la ubicación en el almacén, la forma, el color y el diseño. Además, se debe tener en cuenta:
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-4 #[b El material:] que resista los choques.
          p.mb-4 #[b El tamaño:] que sea el adecuado de tal forma que garantice su visibilidad y comprensión.
          p.mb-0 #[b La ubicación:] que esté en una adecuada altura y en una apropiada posición. Se debe tener en cuenta los posibles obstáculos que interfieran su visibilidad y el ángulo con respecto a la visual del cliente.
        p.mb-0 En Colombia existen leyes y resoluciones relacionadas con las normas en señalización, que buscan asegurar la integridad y salud del ser humano en el ámbito laboral y en lugares públicos, como se cita a continuación. 
      .col-lg-4.col-md-9.col-9
        img.d-none.d-lg-block(src='@/assets/curso/tema2/64.png', alt='tema1')
    
    .row.justify-content-center.mb-4
      .col-lg-4(data-aos="fade-left" data-aos-delay="500")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img.mb-4(src="@/assets/curso/tema2/65.png") 
      .col-lg-8.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Ley 9 de 1979: Título III. (Salud Ocupacional)")
            p.mb-0 Donde se estipulan normas para preservar, conservar y mejorar la salud de los individuos en sus ocupaciones.
          .row.col-xl-11.m-auto(titulo="Resolución 2400 de mayo 22 de 1979")
            p.mb-0 Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.
          .row.col-xl-11.m-auto(titulo="Título V. Artículo 202. Código de Colores")
            p.mb-0 “En todos los establecimientos de trabajo en donde se lleven a cabo operaciones y/o procesos que integren (aparatos, máquinas, equipos, ductos, tuberías, etc.); Y demás instalaciones locativas necesarias para su funcionamiento que utilizarán los colores básicos recomendados por la AMERICAN STANDARS ASSOCIATION (ASA) y otros colores específicos, para identificar los elementos, materiales, etc., y demás elementos específicos que determinen o prevengan riesgos que puedan causar accidentes o enfermedades profesionales”. 
          .row.col-xl-11.m-auto(titulo="Decreto 1443 de 2014")
            p.mb-0 Por medio del cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).
          .row.col-xl-11.m-auto(titulo="Decreto 1072 de 2015, especialmente la parte referida al SG-SST")
            p.mb-0 Está especialmente enfocada a OSHAS 18001, indicando cómo definir unos parámetros para lograr la mejora continua.
  
    p.mb-5 Además, existe una normativa que establece los parámetros que se deben cumplir en el diseño de las señales de seguridad. Se trata de la norma técnica Colombiana NTC 1461, que tiene como fin instaurar los colores y señales de seguridad que deben ser usados para prevenir accidentes y riesgos contra la salud e integridad de las personas, además de situaciones de emergencia. Esta norma se apoya en las normas internacionales ISO 3864-1 e ISO 16069:2004, que establecen varios criterios para el diseño de estas. A continuación, se exponen algunos de esos criterios:
  
    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Prohibición
                p.mb-4 Debe ser redonda, de fondo blanco y con el pictograma centrado de color negro. Debe tener una línea diagonal descendente de izquierda a derecha de color rojo que atraviese el pictograma. El borde debe tener el mismo grosor de la línea diagonal y también de color rojo.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/66.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Advertencia
                p.mb-4 Debe ser de forma triangular de fondo amarillo y con el pictograma centrado de color negro. El borde del triángulo también debe ser negro.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/67.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Obligación
                p.mb-4 Debe ser de forma redonda de color azul con el pictograma centrado de color blanco. Por lo general, tiene un borde delgado de color azul seguido de otro borde más grueso de color blanco.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/68.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Salvamento o de socorro
                p.mb-4 Debe tener forma rectangular o cuadrada de fondo verde y con el pictograma centrado de color blanco. Puede tener un borde delgado de color verde seguido de otro blanco más grueso.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/69.svg")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Relativas al material y equipo de lucha contra incendios
                p.mb-4 Debe ser de forma rectangular o cuadrada de fondo rojo y con el pictograma centrado de color blanco.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/70.svg")
              
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.col-md-12.col-12.mb-4
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 18. 
          | Señalizaciones
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.col-12.mb-4
            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/71.svg', alt='La infografía muestra los elementos de seguridad y señalización relacionados con los colores. El verde se utiliza para indicar condiciones de seguridad, principalmente en señales de rutas de evacuación y emergencia. Su contraste es verde-blanco y su forma es rectangular. El rojo se emplea para señales de prohibición, prevención de fuego, equipo contra incendios y paradas de emergencia. Su contraste es rojo-blanco y puede tener formas circulares o rectangulares. El azul indica acción del mando y obligación de usar equipo de protección. Es de seguridad cuando se presenta en forma circular, con un contraste azul-blanco. El amarillo se utiliza para advertir precaución y riesgo de peligro. Su contraste es amarillo-negro y su forma es triangular.')
              .tarjeta.colore1.p-4(x="5%" y="39%" numero="")
                .mb-3.verde
                p.mb-4 Condición de seguridad, su uso es principalmente para señales de ruta de evacuación y emergencia.
                p.mb-0 Contraste: Verde - Blanco
                p.mb-0 Forma: Rectangular
                p.mb-0 El color verde cubrirá por lo menos el 50% del área de la señal.
              .tarjeta.colore2.p-4(x="32%" y="10%" numero="")
                .mb-3.rojo
                p.mb-4 Prohibición, prevención de fuego, equipo contra incendios, paradas de emergencia.
                p.mb-0 Contraste: Rojo - Blanco
                p.mb-0 Forma: Circular - Rectangular
                p.mb-0 El color rojo, cubrirá por lo menos el 35% del área de la señal.
              .tarjeta.colore3.p-4(x="66%" y="10%" numero="")
                .mb-3.azul
                p.mb-4 Acción del mando, obligación a usar equipo de protección. Es de seguridad cuando se usa en forma circular.
                p.mb-0 Contraste: Azul - Blanco
                p.mb-0 Forma: Circular
                p.mb-0 El color azul, cubrirá mínimo el 50% del área de la señal.
              .tarjeta.colore4.p-4(x="90.5%" y="39%" numero="")
                .mb-3.amarillo
                p.mb-4 Se usa para advertir precaución y riesgo de peligro.
                p.mb-0 Contraste: Amarillo - Negro
                p.mb-0 Forma: Triangular
                p.mb-0 El color amarillo, cubrirá mínimo el 50% del área de la señal.
    
    p.mb-5 Por otro lado, existe la señalética propia de cada almacén, empresa o establecimiento.
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Señalética corporativa.] La señalética corporativa es característica de cada empresa y actúa como guía para las personas en un espacio público. No solo cumple la función de orientar, sino que también refuerza la identidad de la marca y ayuda a generar recordación en los clientes. El diseño de la señalética puede variar según el establecimiento, su tamaño y sus condiciones, y puede incluir señales colgadas o pegadas en la pared. Lo crucial es que la señalética cumpla una función comunicativa visual completa y eficaz. Sirve para dirigir a las personas hacia diferentes áreas, como dependencias, baños públicos, rutas de evacuación, botes de basura, salidas de emergencia, entre otros (Costa, 2007). 
    
    separador
    #t_2_8.titulo-segundo.mb-5
      h2 2.8	Dispositivos de seguridad
    
    p.mb-4 Son unos sistemas que usan los establecimientos, principalmente a la hora de exhibir los artículos, y sirven para avisar al personal en el preciso momento en el que pueda estar existiendo un robo con el fin de evitar el hurto del artículo, interponiendo medios físicos que tienen como función dificultar la acción la sustracción por parte del ladrón (Vidal, Mas y González, 2011).
    p.mb-5 Un establecimiento puede dejar de tener rentabilidad a causa del hurto de artículos dentro del punto de venta. Es por esta razón que para la prevención de estos acontecimientos indeseados se aconseja lo siguiente:
    
    .row.mb-5
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Organizar")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Organizar el local para evitar los robos]
                p.mb-4 Mantener el establecimiento ordenado es crucial para prevenir robos en el punto de venta, ya que permite una visión clara de todo el espacio. Esto facilita la detección rápida de cualquier faltante, ya que el espacio vacío indicará la ausencia de un artículo. Es esencial conocer a fondo el punto de venta.
                p.mb-0 #[b Es importante considerar la ubicación de las cajas registradoras:]  ¿están situadas en lugares que permitan una visión clara de las entradas y salidas del establecimiento? Un análisis detallado del espacio ayuda a identificar y prevenir posibles riesgos de robo. Además, para eliminar los puntos ciegos, se pueden instalar espejos estratégicamente y elegir el mobiliario adecuado que no interfiera con la visibilidad del área de venta.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Aportar")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Aportar formación a los empleados]
                p.mb-4 Además de tener el punto de venta vigilado, se recomienda que los empleados se capaciten para prevenir los robos y saber cómo actuar en caso de un evento de esta magnitud.
                p.mb-0 Conociendo las técnicas más productivas de vigilancia, los protocolos de actuación en caso de hurto y los más sospechosos comportamientos por parte de los clientes, ayudan de una forma más efectiva a mantener el establecimiento seguro.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Prestar atención")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Prestar atención a los puntos más indefensos y artículos atractivos]
                p.mb-4 Se refiere a aquellos espacios como son los probadores o las salidas de emergencia. Son los lugares más comunes usados por los ladrones para poderse escapar con los productos robados.
                p.mb-0 Se recomienda transitar por el local, lo cual va a permitir ver con claridad a los visitantes que entran y salen del negocio. De esta forma se pueden ver y analizar las acciones de los ladrones y reaccionar pronto en caso de que exista un robo.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Contar")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Contar con un detector de metales]
                p.mb-4 El uso de bolsas envueltas con aluminio evita los sistemas de seguridad, por lo que es una técnica muy usada por parte de los ladrones.
                p.mb-0 Pero, para ello, existen unos dispositivos que permiten detectar el ingreso de estos productos al establecimiento, siendo reconocidos fácilmente como ladrones, desde antes de ingresar al punto de venta.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Saber identificar")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Saber identificar los hábitos de robo más comunes]
                p.mb-4 Los ladrones trabajan en equipo, porque así suelen distraer la atención del personal. Comportamientos extraños como, por ejemplo, observar detalladamente un producto o permanecer mucho tiempo al frente de un producto en especial, son actitudes que se deben identificar.
                p.mb-0 Entre otros hábitos se destacan el uso de ropa amplia, como chaquetas o pantalones con varios bolsillos o tulas grandes.
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Implantar")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 #[b Implantar sistemas de seguridad]
                p.mb-4 Es vital proteger el punto de venta a través de diferentes sistemas que incrementen la seguridad del establecimiento.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Para evitar robos de artículos en el punto de venta se deben tener en cuenta los siguientes consejos, de esta forma, el negocio permanecerá seguro.]
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ic.svg', alt='')
        h3.mb-0.ms-2 Sistemas antihurto para tiendas de ropa
    
    p.mb-4 Para no tener gastos a causa de los robos se recomienda invertir en un sistema de seguridad instalado en el punto de venta. Son muy útiles porque registran a los ladrones en cuanto tengan la mínima oportunidad de realizar un robo. Con estos sistemas se pueden exhibir los productos en lugares asequibles al cliente, sin necesidad de ubicarlos detrás de un exhibidor o en una vitrina cerrada y bajo llave. Así, los clientes podrán ver los artículos sin problema alguno y, por ende, se puede evitar la molestia al empleado de estar sacando constantemente los artículos de la vitrina.
    p.mb-5 Para proteger los productos, los establecimientos pueden disponer de diferentes sistemas o equipos de seguridad, como, por ejemplo:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-4.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Alarmas
                p.mb-4 Sistema que no evita el hurto, pero sí advierte de su presencia a quien entra al punto de venta. Se conecta a una central receptora, en la que hay alguien pendiente de lo que sucede en el establecimiento. Su más importante función es disuadir cualquier intento de hurto. Si se quiere, pueden tener un diseño discreto y se pueden camuflar de forma estética en el entorno en el que se instalen.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/76.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Vigilantes de seguridad
                p.mb-4 Personal dedicado a la vigilancia y seguridad en los establecimientos. Tienen funciones como, evitar cualquier acto delictivo en cualquier momento, denunciar ante infracciones administrativas y proteger los artículos y el negocio como tal.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/77.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Vitrinas cerradas con llave
                p.mb-4 Escaparates en los que se exhiben los productos ofertados por el establecimiento. Se distinguen por tener una distinguida presentación y por exhibir productos de alto valor, dándoles una mejor protección. Ayudan a la conservación de los artículos porque los aíslan del polvo, la humedad, el aire y también de los ladrones.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/78.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 Etiquetas antihurto adhesivas
                p.mb-4 Son uno de los sistemas antihurto más usados, porque cuenta con sensores de alarma que activan los arcos antihurto cuando se produce un intento de robo. En el momento de la compra del artículo se desactivan o se quitan. Algunos tipos de productos que pueden tener este sistema son joyas, gafas, ropa, perfumes, cosméticos, bebidas, pequeños electrodomésticos, cámaras de video y fotos, videojuegos y consolas, celulares, computadores, entre muchos otros.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/79.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-12
                h4.mb-4 CCTV (Circuitos Cerrados de Cámara de Televisión)
                p.mb-4 Sistema que usa tecnología de videovigilancia que se emplea para supervisar diversas zonas del establecimiento. Cubren un rango amplio y con muy buen detalle visual. Presenta imágenes de alta definición e identifica de forma efectiva a los ladrones. Por otro lado, tiene visión nocturna y detector de movimiento.
              .col-lg-5.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema2/80.png")
    
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 #[b Tener estos sistemas de seguridad le permitirá al establecimiento tener mejores garantías de obtener la rentabilidad esperada, porque reducen notablemente los intentos de robo de mercancía (Vidal, Mas y González, 2011).]








</template>

<script>
export default {
  name: 'Tema2',
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
