<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 3
      h1 Orientar sesiones <em>Design Thinking</em>
    
    .bg_grad-10
      .row.justify-content-center.mb-5(data-aos="fade-down-right")
        .col-12.col-md-10
          .bgr_2
            .row.justify-content-center
              .col-12.col-md-2.mb-3.mb-md-0(data-aos="fade-right")
                figure.d-flex.justify-content-center
                  img.img200(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
              .col-12.col-md-8.d-flex.align-items-center(data-aos="fade-left")
                p.mb-0.p-3.p-md-0 El proceso de <em>Design Thinking</em> requiere de ciertos roles dentro del equipo que promuevan la participación activa y permitan al equipo involucrado generar conversaciones de valor para llegar a resultados óptimos y la creación de aprendizaje colectivo.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Repaso proceso <em>Design Thinking</em>
    
    p.mb-5 El <em>Design Thinking</em> es una metodología que promueve la creatividad y generación de ideas de alto valor para el usuario, su objetivo principal es centrarse en la detección de necesidades reales del entorno para obtener soluciones de valor, esta metodología puede aplicarse en cualquier sector como herramienta que aborda de manera diferente los problemas o necesidades ubicando como eje central al ser humano; esta metodología propone articular tres ejes clave en el desarrollo de los proyectos de innovación, estos son: la tecnología, el modelo de negocio y el ser humano y puede ser utilizada para la creación o mejora de nuevos productos o servicios.

    .titulo-quinto.color-acento-contenido
      h4 Metodología <em>Design Thinking</em>
    
    .row.mb-3.justify-content-center
      .col-12.col-md-10(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')

    p.mb-5.text-center Esta metodología se compone de herramientas que tienen dos características especiales:

    .row.justify-content-center
      .col-12.col-md-10(data-aos="zoom-in")
        SlyderC.bgr_26.mb-5(:datos="datosSlyder")
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Planear sesiones de <em>Design Thinking</em>
    
    p.mb-5 Al ser una metodología ágil, las sesiones de <em>Design Thinking</em> dentro de los equipos tienen como objetivo obtener mayor entendimiento del problema, generación de ideas o validación de soluciones en pequeños periodos de tiempo. Al planear una sesión dentro de esta metodología es importante tener en cuenta los siguientes aspectos:

    .row
      .col-12.col-md-2.mb-3.mb-md-0(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.img200(src='@/assets/curso/tema3/t3-7.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="zoom-out")
        h3.mb-0 zoom-out
        LineaTiempoD.color-secundario
          p.mb-0.text-small(numero="1" titulo="Propósito") Tener claro el objetivo de la sesión permitirá seleccionar las herramientas y recursos adecuados para la misma, además de optimizar tiempo.
          p.mb-0.text-small(numero="2" titulo="Duración") Definir la duración de la sesión y acoplarse a esto lo más posible hará que el equipo tenga la disposición correcta y demuestra la buena planeación de la sesión.
          p.mb-0.text-small(numero="3" titulo="Equipo de trabajo") En este punto es necesario verificar dos aspectos importantes; el primero es el equipo que participará de la sesión y el segundo, el equipo con roles activos como moderadores y facilitadores de la misma.
          p.mb-0.text-small(numero="4" titulo="Materiales") Generar una lista de materiales y tenerlos todos a disposición permitirá que el equipo participante sienta que el equipo planeador de la sesión tiene el control, además, contribuye al adecuado desarrollo de las actividades programadas.
          p.mb-0.text-small(numero="5" titulo="Roles") Es importante definir roles dentro del equipo guía de la sesión, estos roles varían y dependen del equipo participante y el contexto; sin embargo, los más comunes son el moderador, apoyo en materiales, verificador de tiempo y el guía o anfitrión de la sesión que, en la mayoría de los casos ,dirige la conversación apoyado por el moderador.
      .col-12.col-md-2(data-aos="flip-down")
        figure.d-flex.justify-content-center
          img.img200(src='@/assets/curso/tema3/t3-8.svg', alt='Texto que describa la imagen')
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Validación de planeación con cliente
    
    p.mb-5 Luego de planear una sesión de <em>Design Thinking</em> y construir el documento abarcando los puntos anteriores, se debe contar con el visto bueno del cliente para el cual se está generando la sesión, en varias ocasiones este cliente posiblemente será el líder o superior del área, o la persona que ha encomendado la tarea al equipo.

    .bg_grad-11
      .row.justify-content-center
        .col-12.col-md-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
            h5 Figura 12. 
            span Visto bueno del cliente
          
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/t3-9.svg', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-12.col-md-8
          .bgr_2.p-4.position-relative
            p.text-center Realizar la validación de la sesión hace parte de la metodología, porque permite alinear expectativas generando empatía entre ambas partes
            img.pst_4(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Conformación de equipos de trabajo
    
    p.mb-5 Un aspecto importante dentro de la planeación y ejecución de sesiones dentro de la metodología es conformar un equipo de trabajo que, a través de diferentes funciones propicien el adecuado desarrollo de la sesión, entre los diferentes roles se pueden encontrar los siguientes:

    .row.mb-5
      .col-md-6.col-lg.bgr_3.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema3/t3-11.svg' alt='AvatarTop')
        p.text-bold Anfitrión
        p.mb-0 Es el encargado de liderar y guiar la sesión de acuerdo a los objetivos, teniendo en cuenta la premisa de propiciar un ambiente abierto a la generación de ideas. 
      .col-md-6.col-lg.bgr_27.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema3/t3-12.svg' alt='AvatarTop')
        p.text-bold Anfitrión
        p.mb-0 Es el encargado de liderar y guiar la sesión de acuerdo a los objetivos, teniendo en cuenta la premisa de propiciar un ambiente abierto a la generación de ideas. 
      .col-md-6.col-lg.bgr_15.p-5(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema3/t3-13.svg' alt='AvatarTop')
        p.text-bold Anfitrión
        p.mb-0 Es el encargado de liderar y guiar la sesión de acuerdo a los objetivos, teniendo en cuenta la premisa de propiciar un ambiente abierto a la generación de ideas. 
      .col-md-6.col-lg.bgr_28.p-5(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema3/t3-14.svg' alt='AvatarTop')
        p.text-bold Anfitrión
        p.mb-0 Es el encargado de liderar y guiar la sesión de acuerdo a los objetivos, teniendo en cuenta la premisa de propiciar un ambiente abierto a la generación de ideas. 
    
    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Ambiente de trabajo propicio y normas

    p.mb-5 Planear y orientar sesiones de trabajo bajo la metodología de <em>Design Thinking</em> requiere contar con un espacio propicio para promover el pensamiento centrado en el usuario, es decir, un pensamiento expansivo que permita al equipo involucrado generar conexiones diferentes a través de diferentes estímulos que, comúnmente y bajo las metodologías ágiles, se llama “pensar fuera de la caja” y que hace referencia a observar con detalle y detenimiento la información que se había obtenido, pero con diferente perspectiva. Las siguientes son algunas de las recomendaciones generales para una sesión de <em>Design Thinking</em>:  

    .bgr_29
      .row.pt-5
        .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-15.png', alt='Texto que describa la imagen')
        .col-12.col-md-9.p-4.p-md-0(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-circle.pst_5
              span Las personas participantes de la sesión deben estar completamente enfocadas en la misma, no es permitido el famoso <em>multitasking</em>, por lo tanto, computadores, celulares y demás dispositivos electrónicos solo deben usarse en caso de ser estrictamente necesario.
            li
              i.fas.fa-circle.pst_5
              span Todos los participantes deben tener claro cuál es el propósito de la sesión, el anfitrión debe tener las habilidades necesarias para comunicar los objetivos y motivar a los participantes a dar su opinión sin importar su cargo actual.
            li
              i.fas.fa-circle.pst_5
              span Tanto el anfitrión como el moderador tienen la responsabilidad de motivar y permitir que todos los participantes expresen sus ideas, es crucial dentro de una sesión de <em>Design Thinking</em> que todos los participantes sientan que tienen su momento de expresarse.
            li
              i.fas.fa-circle.pst_5
              span No juzgar ni permitir que algún participante juzgue ideas de los demás participantes.
            li
              i.fas.fa-circle.pst_5
              span El rol de anfitrión debe tener claro que su objetivo es hacer sentir a todos los participantes en confianza y con tranquilidad para decir sus ideas y pensamientos más “locos”.
            li
              i.fas.fa-circle.pst_5
              span El rol de moderador no es un rol de control, por el contrario es la persona que da espacio a los diferentes comentarios y construye una idea global del equipo. 
            li
              i.fas.fa-circle.pst_5
              span Siempre se debe contar con una persona que tome nota de la sesión mientras los demás conversan al respecto.
    
    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Portafolio de innovación
    
    p.mb-5 Un portafolio de innovación es un conjunto de iniciativas que se gestionan dentro de las organizaciones para la obtención de resultados y objetivos a corto, mediano y largo plazo. Este portafolio, se construye luego de trabajar con diferentes áreas y personas involucradas para gestionar y canalizar todas aquellas ideas y proyectos que resultan de los diferentes procesos de innovación aplicados dentro de las organizaciones.

    .bg_grad-12
      .row.justify-content-center
        .col-12.col-md-8(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/t3-16.svg', alt='Texto que describa la imagen')
    






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema3/t3-3.svg'),
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema3/t3-4.svg'),
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema3/t3-5.svg'),
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema3/t3-6.svg'),
      },
    ],
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
