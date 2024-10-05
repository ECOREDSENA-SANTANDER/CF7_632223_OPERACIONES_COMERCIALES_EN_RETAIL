<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Empaque de productos

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
    #t_3_1.titulo-segundo.mb-4
      h2 3.1	Estructura del surtido



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
