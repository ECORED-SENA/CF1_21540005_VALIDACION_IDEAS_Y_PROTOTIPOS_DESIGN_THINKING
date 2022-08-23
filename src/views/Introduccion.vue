<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.colr
      h1 Introducción
    
    p.mb-5 El <em>Design Thinking</em> tiene como propósito principal abordar problemas complejos para la búsqueda de soluciones innovadoras centradas en las personas; y hace parte del conjunto de metodologías ágiles que ayudan a las empresas y sus colaboradores a detectar nuevas oportunidades reduciendo la incertidumbre y el riesgo al fracaso como principio fundamental. 

    .row.mb-3
      .col-12.col-md-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='Texto que describa la imagen')
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-a.bgr.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 Para la reducción de incertidumbre se elaboran prototipos que según la RAE se definen como “ejemplar original o primer molde en que se fabrica una figura u otra cosa”.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Si bien esta definición hace alusión a elementos netamente físicos o tangibles, desde hace algún tiempo los servicios también se han estado prototipando para tener un acercamiento lo más fiel posible al concepto o idea final con sus elementos esenciales, de manera que el usuario pueda relacionarse con él y evaluar su interacción desde diferentes características que permitan retroalimentar el proceso y minimizar el riesgo al fracaso en el mercado del producto o servicio a lanzar.
    
    p.text-center Para conocer las generalidades del prototipado y testeo de ideas y posibles soluciones, se invita a observar el siguiente video:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
  



             
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
