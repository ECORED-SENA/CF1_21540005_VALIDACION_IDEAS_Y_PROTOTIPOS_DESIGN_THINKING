<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 1
      h1 Fase de prototipado
    
    .bg_grad-01
      p.mb-5 Prototipar ayuda a comunicar las ideas con los usuarios e incluso con el equipo de trabajo, es por esto, que en las empresas donde se opera a través de metodologías ágiles, el prototipado es una actividad clave dentro de su quehacer diario, pues su objetivo fundamental es materializar una idea y comprobar si es viable, técnica, financiera y tecnológicamente. 

      .row.justify-content-center.mb-5(data-aos="fade-down-right")
        .col-12.col-md-10
          .bgr_2
            .row.justify-content-center
              .col-12.col-md-2
                figure
                  img(src='@/assets/curso/tema1/t1-1.svg', alt='Texto que describa la imagen')
              .col-12.col-md-8.d-flex.align-items-center
                p.mb-0 A diferencia de las fases anteriores, esta cuarta fase corresponde a un proceso de convergencia donde se sintetiza la información encontrada y las ideas generadas para dar paso a ideas específicas que pueden ser prototipadas y validadas con el usuario.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de prototipado
    
    p.mb-5 Prototipo es un término que se utiliza para referirse a la primera versión de un dispositivo que se crea de una idea o concepto ya sean bocetos, maquetas, modelos, <em>mockup</em> en cualquier material o herramienta digital de bajo costo, y que sirve como modelo inicial o punto de partida para la elaboración de pruebas y posteriores versiones mejoradas, basadas en la información recolectada en su validación con las partes interesadas. Esto con el fin de tener claridad sobre su viabilidad y características funcionales, estéticas, productivas, de usabilidad del producto o servicio antes de su producción o desarrollo final, evitando altas inversiones en tiempo y recursos y minimizando el riesgo a fallar. 

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .bgr_3.px-4.py-5.mb-5.position-relative(data-aos="zoom-out")
          p.text-bold El desarrollo de prototipos se define como el proceso de preparación de un dispositivo, técnica o sistema que demuestra la viabilidad de una solución a un problema 
          p.mb-0 - Reiser y Anbar, 1984. 
          figure.pst
            img.img30(src='@/assets/curso/tema1/t1-2.svg', alt='Texto que describa la imagen')
          figure.pst_1
            img.img30(src='@/assets/curso/tema1/t1-3.svg', alt='Texto que describa la imagen')
        p.mb-5 Las cinco fases o etapas principales a recorrer para el desarrollo de un prototipo se pueden observar en la siguiente figura.

        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 1.
          span Fases del prototipado
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/t1-4.svg', alt='Texto que describa la imagen')
    
    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Clasificación de prototipos
    
    p.mb-5 Los prototipos pueden clasificarse según su propósito, nivel de detalle o funcionalidad e incluso su materialidad, es decir si son físicos/tangibles o digitales/intangibles. Existen diferentes tipos de prototipos que permiten evaluar varias características de la idea de acuerdo con el objetivo propuesto, entre ellos se pueden encontrar:

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .row
          .col-12.col-md-6.bgr_7.p-5
            p.text-bold Dimensionales
            p.mb-0 Son aquellos que generan una aproximación volumétrica de la idea que se quiere desarrollar, con el objetivo de facilitar la percepción sensorial.
          .col-12.col-md-6.bgr_8.p-5 
            p.text-bold Experimentales
            p.mb-0 Este tipo de modelos permiten realizar pruebas y ensayos con ellos para verificar si las condiciones esperadas se cumplen.
        .row.mb-5
          .col-12.col-md-6.bgr_9.p-5
            p.text-bold Funcionales
            p.mb-0 Permiten la comprensión de sistemas más complejos por medio de piezas y conjuntos.
          .col-12.col-md-6.bgr_10.p-5
            p.text-bold Ergonómicos
            p.mb-0 Buscan entender la interacción entre el objeto y el usuario.
        p.mb-5 El proceso de prototipado trae consigo una serie de ventajas que se observan en el siguiente gráfico interactivo: 

        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 2.
          span Ventajas del prototipado
        
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/t1-6.svg', alt='Texto que describa la imagen')
          .tarjeta.bgr_11.p-4(x="9%" y="85%" numero="+")
            p.mb-0 Permite obtener interpretaciones claras por ser una herramienta física.
          .tarjeta.bgr_11.p-4(x="30%" y="85%" numero="+")
            p.mb-0 Realiza pruebas funcionales para detectar errores.
          .tarjeta.bgr_11.p-4(x="50%" y="85%" numero="+")
            p.mb-0 Posibilita la relación y retroalimentación entre clientes y proveedores.
          .tarjeta.bgr_11.p-4(x="71%" y="85%" numero="+")
            p.mb-0 Permite organizar mejor las ideas y trabajar de una  manera más  productiva centrada en  objetivos. 
          .tarjeta.bgr_11.p-4(x="91%" y="85%" numero="+")
            p.mb-0 Permite detectar errores de diseño, estéticos y conceptuales. 

        p.mb-5 Una vez se tiene claro el concepto de prototipado, sus beneficios y su clasificación de acuerdo con los objetivos que se pretenden alcanzar, se profundiza en este tema para descubrir la diferencia entre prototipos tangibles e intangibles, sus diferentes niveles de fidelidad y características principales, además de los materiales, herramientas y técnicas que existen para su desarrollo.

        figure
          img(src='@/assets/curso/tema1/t1-7.png', alt='Texto que describa la imagen')

    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Prototipado de productos tangibles e intangibles

    p.mb-5 Anteriormente cuando el mundo aún no se había volcado hacia lo digital, al hablar de prototipado era común referirse únicamente a modelos a escala elaborados en materiales de bajo costo que se utilizaban para evaluar conceptos y funcionalidades de productos u objetivos; se hablaba, entonces, de prototipos tangibles logrados mediante desarrollos físicos. Hace más de una década, cuando la era digital tuvo su gran auge, las soluciones de tipo visual para validar experiencias de usuarios interactuando con un servicio mediado por tecnologías, tomaron mayor importancia y cambiaron el concepto de prototipado dividiéndolo no solo en productos tangibles, sino también intangibles. 

    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Prototipo intangible 
    
    p Los prototipos intangibles son aquellos que se utilizan para darle vida a las ideas de tipo digital, para la propuesta de soluciones de servicios mediadas por tecnología. Estas se basan en principios de experiencia de usuario o (UX) <em>User Experience</em> por su sigla en inglés e interfaz de usuario (UI) <em>User Interface</em>. 

    p.mb-5 Las tres grandes categorías de prototipos intangibles se dividen en productos digitales, experiencia, proceso, servicio y herramientas tal como se observa a continuación.

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 3.
          span Clasificación de prototipos intangibles
        
        .row  
          .col-12.col-md-4.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-8.svg', alt='Texto que describa la imagen')
          .col-12.col-md-4.mb-3.mb-md-0
            figure
              img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-9.svg', alt='Texto que describa la imagen')
              img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-9-m.svg', alt='Texto que describa la imagen')
          .col-12.col-md-4
            figure
              img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-10.svg', alt='Texto que describa la imagen')
              img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-10-m.svg', alt='Texto que describa la imagen')

    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Prototipo tangible
    
    p.mb-5 Los prototipos físicos permiten darle forma a las ideas y evaluar la integración de la forma y la función, dos componentes principales de la interacción tangible y material de los usuarios con las propuestas de soluciones a partir de productos. Este tipo de prototipos permite a los diseñadores, o pensadores de diseño, enfocarse en integrar simultáneamente la forma y la función teniendo en cuenta que son para probar rápidamente las ideas con bajos costos de recursos y tiempo. 

    .bg_grad-02
      .row.justify-content-center
        .col-12.col-md-8
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
            h5 Figura 4.
            span Tipos de prototipos tangibles
          
          figure
            img(src='@/assets/curso/tema1/t1-11.svg', alt='Texto que describa la imagen')
       
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-between.align-items-center 
              .col-12.col-md-4
                p.mb-0.text-bold.text-white Ejemplo de prototipo tangible.
              .col-sm-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Abrir 
                  i.fas.fa-image
                  .indicador--click(v-if="mostrarIndicador")
          
          ModalA.bgr_13(:abrir-modal.sync="modal1")
            .row.justify-content-center
              .col-md-8
                .row.bgr_12
                  p.mt-3.mb-0.text-center Ejemplo de prototipo tangible
                  p.text-bold.text-center Lámpara de escritorio
                  .col-12.col-md-6.p-5
                    figure
                      img(src='@/assets/curso/tema1/t1-12.png', alt='Texto que describa la imagen')
                  .col-12.col-md-6.p-5
                    figure
                      img(src='@/assets/curso/tema1/t1-13.png', alt='Texto que describa la imagen')
                    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Niveles de fidelidad del prototipo
    
    p.mb-5 Al ser una metodología para materializar ideas, el prototipado puede clasificarse según su nivel de fidelidad, partiendo de la necesidad particular de cada proceso. Esto definirá el tiempo y los costos que se pretenden invertir para su desarrollo y el nivel de detalle que se quiera evaluar una vez esté listo y en manos del consumidor final. Entendiendo la fidelidad como la exactitud o precisión en la ejecución de alguna cosa, en el prototipado se divide en alta, mediana y baja.

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 5.
          span Ejemplo de 3 niveles de fidelidad de prototipo intangible

        figure
          img(src='@/assets/curso/tema1/t1-14.svg', alt='Texto que describa la imagen')

    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Prototipo de baja fidelidad
    
    p Son prototipos que posibilitan un acercamiento a la idea de una manera más abstracta, con costos bajos y mediante el uso de recursos propios para su desarrollo (lápiz y papel), minimizando el tiempo de elaboración y apelando a la recursividad del equipo de trabajo. Entre sus principales ventajas está la facilidad con que se puede modificar, ya que permite evaluar múltiples conceptos brindando comodidad al equipo de trabajo para arriesgarse a hacer cambios y aportar opiniones. 

    p Su propósito principal es convertir las ideas en artefactos que se puedan usar para recolectar información y analizarla en etapas tempranas. Sus desventajas son la baja calidad, que limita la corrección de errores y no permite entrar en detalle para evaluar características funcionales.

    p.mb-5 Ejemplos de prototipos de baja fidelidad:

    .row.mb-5
      .col-12.col-md-6
        .bgr_3
          .px-5.py-4
            p.text-bold.text-center Prototipo tangible de baja fidelidad
            figure
              img(src='@/assets/curso/tema1/t1-15.png', alt='Texto que describa la imagen')
          figcaption.bgr_14.p-4 Nota. Silla Kitt. Tomada de Kitt By HAY Germania. Architonic.
      .col-12.col-md-6
        .bgr_15
          .px-5.py-4
            p.text-bold.text-center Prototipo para un intangible de baja fidelidad
            figure
              img(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
          figcaption.bgr_14.p-4 Nota. Aplicación para reloj inteligente. Tomada de Prototyping. Aaron Brako. 

    .bgr_6.px-5.pt-3.pb-4.mb-3
      h3.mb-0 Prototipo de fidelidad media
    
    p.mb-5 Dan una mejor idea de los sistemas a los usuarios y permiten realizar pruebas de la interfaz más fácilmente, entendiendo la interfaz como el punto que permite que la persona pueda controlar efectivamente las acciones de la máquina u objeto. Entre las principales desventajas de los prototipos de mediana fidelidad, algunos usuarios pueden sentir que la experiencia de uso se ve afectada por encontrar elementos que no funcionan al 100%. Crear estos prototipos toma mayor tiempo e inversión de recursos.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
      h5 Figura 6.
      span Prototipo Intangible de fidelidad media vs. fidelidad alta
    
    .bg_grad-04
      .row.justify-content-center 
        .col-12.col-md-5.p-3.p-md-5.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema1/t1-17.png', alt='Texto que describa la imagen')
        .col-12.col-md-5.p-3.p-md-5
          figure
            img(src='@/assets/curso/tema1/t1-18.png', alt='Texto que describa la imagen')
        figcaption.bgr_14.p-4 Nota. Comparación entre maquetas de fidelidad media y fidelidad alta. Tomada de Creating a Medium-fidelity UX Proof of Concept. Medeiros, R. (2020). - Ryan Medeiros - Medium.






    
    

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    mostrarIndicador: true,
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
