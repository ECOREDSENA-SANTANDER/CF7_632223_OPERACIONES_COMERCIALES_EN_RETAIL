<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Empaque de productos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.bgazul.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 Es la última acción que realiza el cajero con el cliente en el puesto de pago, facilitándole el transporte de sus productos. Es un proceso de mucha importancia, ya que parte de la buena imagen de la compañía es el empaque, para el cliente esta última impresión debe ser grata y positiva.
            br
            br
            |
    p.mb-4.text-center Para que logre prestar un excelente servicio de empaque debe tener en cuenta las siguientes recomendaciones: 
    
    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-6.col-lg-5.col-4
              figure
                img(src='@/assets/curso/tema3/ico1.png', alt='Texto que describa la imagen')
              h3.blanco.text-center 1
          p.text-center El material debe estar siempre organizado para que evite demoras al momento de seleccionar una bolsa.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-5.col-lg-4
              figure
                img(src='@/assets/curso/tema3/ico2.png', alt='Texto que describa la imagen')
              .py-2
              h3.blanco.text-center 2
          p.text-center.mb-3 Las bolsas están identificadas por tamaño y resistencia para evitar el gasto inoficioso y facilitar el empaque.
          br
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-2
            .col-5.col-lg-4
              figure
                img(src='@/assets/curso/tema3/ico3.png', alt='Texto que describa la imagen')
              .py-2
              h3.blanco.text-center.mb-3 3
          p.text-center Durante el registro debe organizar y clasificar la mercancía de acuerdo con su tamaño, características físicas y composición.
          br
    
    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema3/ico4.png")
          .bg55.py-2.w-card-text.fw-bold.text-white La técnica de empaque
      .py-3
      p Al momento de empacar los productos se deben tener en cuenta los siguientes pasos:

    
    .row.justify-content-center.align-items-center.fondo3.p-4
      .py-3
      .col-lg-11
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-secundario(text-small)
            .row(titulo="1").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 1
                p Observe los productos y proceda a seleccionar la bolsa.
 
            .row(titulo="2").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 2
                p Para abrir la bolsa introduzca las manos sin sacudirla.          
              
            
            .row(titulo="3").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 3
                p Debe distribuir el peso en las bolsas para que el cliente pueda llevarlas en forma equilibrada.
            
            .row(titulo="4").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 4
                p Recuerde que, para artículos pequeños, use bolsas pequeñas; para artículos grandes, use bolsas grandes. Ponga pocos artículos en bolsas pequeñas y muchos artículos en bolsas grandes.
            
            .row(titulo="5").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/5.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 5
                p Siempre utilice la bolsa sin invertirla, llevan nuestra publicidad e imagen a todas partes, márquela con lapicero si el cliente lo requiere.
            
            .row(titulo="6").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/6.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 6
                p Otorgue a la bolsa una base firme colocando en el fondo los artículos sólidos y pesados.
            
            .row(titulo="7").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/7.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 7
                p Si una bolsa se rasga, saque todos los artículos y empáquelos en otra.
            
            .row(titulo="8").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/8.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 8
                p Apriete bien las tapas de los frascos que contengan líquidos, así evitará que se rieguen durante el transporte.
            
            .row(titulo="9").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/9.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 9
                p Entre los frascos debe colocar otro artículo en caja o bolsa, para evitar que se quiebren. 
            
            .row(titulo="10").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/10.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 10
                p Disminuya el peso al empacar granos de diferentes tamaños, evitando que las bolsas queden demasiado pesadas.
            
            .row(titulo="11").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/11.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 11
                p Cuando el artículo es húmedo o fácil de derramar debe colocarlo primero en una bolsa plástica sin impresión.
            
            .row(titulo="12").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/12.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 12
                p Los productos de aseo deben ir con los de su misma especie, es decir, aseo hogar separado de aseo personal.
                P Los insecticidas y blanqueadores deben empacarse en bolsa separada, puesto que son venenosos.
            
            .row(titulo="13").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/13.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 13
                p Algunos productos como escobas, traperos, papel de regalo, flores, sillas, cartulina que por su forma o tamaño son muy difícil empacarlos en bolsas, se sujetan con una bolsa pequeña y el tiquete.
            
            .row(titulo="14").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/14.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 14
                p Los artículos que vienen empacados en cajas, como ollas, vajillas y televisores, se les adhiere el tiquete de compra.
            
            .row(titulo="15").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/15.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 15
                p Los licores, sobre todo los costosos, cuando son varios puede empacarlos en bolsa doble, evitando que se quiebren.
            
            .row(titulo="16").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/16.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 16
                p Los artículos de loza o cristal deben envolverse con papel antes de ser empacados en cajas de cartón o en bolsas cuando son pocos.
            
            .row(titulo="17").p-4
              .col-md-2.col-8
                figure
                  img(src='@/assets/curso/tema3/17.png', alt='Texto que describa la imagen')
              .col-md-10.mb-4.mb-md-0.py-2
                h5 Paso 17
                p Debe tener cuidado con productos como arepas, huevos, productos de panadería, bombillos, frutas y verduras.
    .py-2
    p Para que disminuya el riesgo de reclamos por pérdida de paquetes debe tener en cuenta las siguientes recomendaciones:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img02.png', alt='Texto que describa la imagen')
        .py-4
      .col-lg-8  
        .row.justify-content-center
          .col-lg-5.col-md-6.mb-4.py-4
            .overflow-hidden.h-100.bg5.p-4
              .py-3
              img.img-a.img-t(src='@/assets/curso/tema3/num1.png', alt='tema1')
              .py-2
              p.mb-0 Antes de iniciar un nuevo registro verifique que en el puesto de pago no hayan quedado paquetes o mercancía del cliente anterior.
              br
              br
              br
          
          .col-lg-5.col-md-6.mb-4.py-4
            .overflow-hidden.h-100.bg5.p-4 
              .py-3
              img.img-a.img-t(src='@/assets/curso/tema3/num2.png', alt='tema1')
              .py-2
              p.mb-0 Anotar en el tiquete el código del empacador y notificar al cliente el número de paquetes.
              br
              br
              br

    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema3/ico5.png")
          .bg55.py-2.w-card-text.fw-bold.text-white El empaque simultáneo
    
    p.mb-4 Consiste en ir empacando a medida que se registra para agilizar la atención al cliente y descongestionar el puesto de pago. Algunos productos por su peso o contextura se prestan para que realice el empaque simultáneo: los textiles, los productos de panadería, la galletería, los pasabocas y los productos refrigerados.
    
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema3/ico6.png")
          .bg55.py-2.w-card-text.fw-bold.text-white El empaque de frutas y verduras 

    p.mb-4 Para empacar estos productos debe tener en cuenta algunas clasificaciones:

    .row.justify-content-center.align-items-center.mb-5.fondo4.p-4
      .col-lg-11
        SlyderA.blanco1.p-4
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por grupos
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Ramas
                li
                  i.fas.fa-circle-check
                  |Verduras 
                li
                  i.fas.fa-circle-check
                  |Frutas
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img03.png', alt='')
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por tamaño
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Grandes 
                li
                  i.fas.fa-circle-check
                  |Medianas  
                li
                  i.fas.fa-circle-check
                  |Pequeñas
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img04.png', alt='')             
            
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por color
              p La combinación de los colores de los productos debe ser agradable a la vista del cliente. Se debe tener en cuenta el contraste de los colores claros y oscuros (cuando se empaca en bolsa transparente).
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img05.png', alt='')     
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por olor
              p No se deben empacar productos de olores fuertes al lado de productos con aroma suave (siempre frutas y verduras aparte).
              p Ejemplo: cebollas con banano, naranjas con orégano o tomillo. 
              p Nota. Las hortalizas de hoja, los cítricos y los champiñones son propensos a absorber olores fuertes.
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img06.png', alt='')     
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por maduración
              p Según su velocidad de maduración y respiración, no se deben empacar juntos productos que liberen gas etileno.
              p Ejemplo: el plátano maduro con repollo, banano con tomate de aliño o arveja con hortalizas de hoja.
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img07.png', alt='')     
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por peso
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Pesados 
                li
                  i.fas.fa-circle-check
                  |Semipesados 
                li
                  i.fas.fa-circle-check
                  |Livianos
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img08.png', alt='')     
          
          .row.justify-content-center.align-items-center.mb-5
            .col-md-6.mb-4.mb-md-0
              h5 Por constitución
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Resistentes 
                li
                  i.fas.fa-circle-check
                  |Delicados
              .py-2
            .col-md-4.col-8
              figure
                img(src='@/assets/curso/tema3/img09.png', alt='')              
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1  Descripción del empaque

    p.mb-3 El empaque es un momento importante del producto, en el diseño se debe tener en cuenta la protección y conservación adecuadas para que no se afecte durante el transporte, almacenamiento y entrega al cliente final, también es muy útil diferenciar y promocionar en la etiqueta del producto la marca y demás información que necesite comunicarse.

    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/tema3/ico7.png")
          .bg55.py-2.w-card-text.fw-bold.text-white La importancia del empaque
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')
        .py-4
      .col-lg-8  
        .row.justify-content-center
          .col-lg-5.col-md-6.mb-4.py-4
            .overflow-hidden.h-100.bg5.p-4
              .py-3
              img.img-a.img-t(src='@/assets/curso/tema3/num1.png', alt='tema1')
              .py-2
              p.mb-0 Consiste en proteger el producto para que llegue en las mejores condiciones al consumidor o cliente final.
              br
              br
              br
          
          .col-lg-5.col-md-6.mb-4.py-4
            .overflow-hidden.h-100.bg5.p-4 
              .py-3
              img.img-a.img-t(src='@/assets/curso/tema3/num2.png', alt='tema1')
              .py-2
              p.mb-0 Una de las funciones que debe cumplir el empaque es ayudar a vender el producto, logrando que el canal de distribución quiera comercializarlo por considerar que es fácil de transportar y almacenar.
              br
              br
              br
    p.mb-3 Son considerados envases todos los artículos “desechables” utilizados con este mismo fin. En este grupo están incluidas las bolsas en las que se empacan los productos de un solo uso y que son entregadas o adquiridas en los comercios por el cliente y los empaques desechables que se utilicen con el mismo fin, como las bandejas, platos, vasos, cubiertos y cualquier otro artículo desechable que se emplea principalmente en la hotelería.

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
