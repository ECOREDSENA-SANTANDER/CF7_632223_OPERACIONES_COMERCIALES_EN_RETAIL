<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El propósito de este componente de formación es ayudar a los aprendices a desarrollar la destreza en el manejo de caja, manejo de dinero, transacciones financieras y otras funciones asignadas a los cajeros en el retail. Los aprendices aprenderán a abrir y cerrar la caja correctamente, validar precios y medios de pago, gestionar la seguridad, manejar excedentes y devoluciones, y empaquetar productos conforme a normativa y técnicas adecuadas, garantizando un servicio eficiente y preciso en el punto de pago. A continuación, se presentan la información general del componente: 

    .row.justify-content-center
      .col-lg-12
        .bg1.p-1.mb-5
          figure.my-3
            img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
