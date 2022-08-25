<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 2
      h1 Fase de validación o testeo
    
    p La fase final de la metodología de <em>Design Thinking</em> es la fase de validación que tiene como objetivo validar o testear si la idea que se ha desarrollado obtiene la aceptación deseada del público objetivo. Se trata de verificar con la realidad si lo construido tendrá el impacto esperado.
    .bg_grad-08
      p.mb-5 Validar va mucho más allá de mostrar al usuario el producto o servicio, pues implica un ejercicio de escucha activa y empática hacia el usuario sin interferencia de ideas y prejuicios.

      .row.mb-5.justify-content-center(data-aos="zoom-in")
        .col-12.col-md-10
          figure
            img(src='@/assets/curso/tema2/t2-1.svg', alt='Texto que describa la imagen')
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto de validación
    
    p.mb-5 Validar permite reconocer tanto puntos positivos como negativos del prototipo generado en cuanto a su desempeño frente al usuario. Esta fase de la metodología requiere una preparación previa de documentos, materiales, espacios y orientaciones para el momento de encuentro con el usuario del prototipo generado. Cuando se realizan validaciones, es importante tener en cuenta las siguientes recomendaciones:

    .row.justify-content-center
      .col-12.col-md-10
        .cajon.bgr_24.p-5.mb-5(data-aos="flip-up")
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              | Crear un documento que describa el objetivo de la validación y las actividades a realizar.
            li.mb-0 
              i.lista-ul__vineta
              | Definir herramientas y materiales.
            li.mb-0 
              i.lista-ul__vineta
              | Ajustar las actividades a un cronograma de tiempos previamente definidos con el usuario.
            li.mb-0 
              i.lista-ul__vineta
              | Contar con un espacio que permita realizar la prueba sin interrupciones.
        
        p.mb-5 Además, es importante tener presente el siguiente ciclo de validación para el producto mínimo viable:

        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 11. 
          span Ciclo de validación
        
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Establecer lista de requisitos a evaluar
    
    p.mb-5 Luego de definir el tipo de prototipo para el proyecto que se está realizando y definir las características para la validación, es necesario establecer una lista de requisitos a evaluar en la interacción prototipo-usuario; estos requisitos pueden abordar una o más de las siguientes características:
    
    .bg_grad-09
      .row
        .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema2/t2-3.png', alt='Texto que describa la imagen')
        .col-12.col-md-8
          SlyderF.mb-5.pst_2(columnas="col-lg-12 col-xl-12")
            .tarjeta.p-5.bgr_2
              h4 Ergonomía
              p.mb-0 Dimensiones del prototipo y ubicación de sus componentes en relación al cuerpo humano, es importante para verificar la facilidad de uso y comodidad del usuario ante el prototipo realizado. 
            .tarjeta.p-5.bgr_2
              h4 Función
              p.mb-0 En este punto se evalúa que el prototipo cumpla la función definida en su creación y si para el usuario es de fácil entendimiento la misma.
            .tarjeta.p-5.bgr_2
              h4 Estética
              p.mb-0 Evaluar qué tan agradable son los componentes estéticos para el usuario (color, forma, tamaño, ubicación de botones, entre otros).
            .tarjeta.p-5.bgr_2
              h4 Producción
              p.mb-0 Al tener el prototipo se evalúa si su producción es viable y factible o si por el contrario hay subprocesos que se deben replantear.
            .tarjeta.p-5.bgr_2
              h4 Material
              p.mb-0 En este punto se verifica si el material utilizado para el prototipo cumple con las especificaciones necesarias para cumplir con la función establecida tanto estética como funcional.
          p.text-center El objetivo principal de la lista de requisitos es permitir al evaluador recordar cada una de las características necesarias durante el momento de observación con el usuario y generar una evaluación inicial del prototipo construido para, más adelante, refinarlo y disminuir la incertidumbre de su llegada al mercado.
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Herramienta de recolección para validación
    
    p.mb-5 Existen diferentes herramientas utilizadas para la recolección de información tanto cualitativas como cuantitativas, sin embargo, la metodología de <em>Design Thinking</em> propone la utilización de algunas de estas herramientas que pueden ser utilizadas de manera ágil para el entendimiento del usuario, algunas de ellas son:

    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.pst_3  
          .col-12.col-lg-1.mb-3.mb-lg-0.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema2/t2-4.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            div
              h4.mb-0 Grupos focales
              p.mb-0 Esta técnica de recolección de información consiste en reunir a un grupo de personas para que puedan conversar y opinar sobre algún producto o servicio en particular; su duración normalmente es de 1 a 2 horas.
        .row
          hr.pst_3  
          .col-12.col-lg-1.mb-3.mb-lg-0.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema2/t2-5.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            div
              h4.mb-0 Entrevistas cualitativas
              p.mb-0 Las entrevistas cualitativas son una conversación extendida que busca recolectar o intercambiar información respecto a un estímulo en particular, en este caso se tienen en cuenta, las opiniones, emociones y sentimientos del entrevistado hacia el prototipo realizado.
        .row
          hr.pst_3  
          .col-12.col-lg-1.mb-3.mb-lg-0.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema2/t2-6.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            div
              h4.mb-0 Test cuantitativos
              p.mb-0 A diferencia de los métodos cualitativos, el test cuantitativo nos entrega respuestas numéricas a las características testeadas del prototipo; para este tipo de herramientas, es importante recolectar una muestra representativa de usuarios que permita analizar de forma clara los datos, de lo contrario los resultados no podrán ser válidos.
        .row
          hr.pst_3  
          .col-12.col-lg-1.mb-3.mb-lg-0.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema2/t2-7.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            div
              h4.mb-0 Test de usuario
              p.mb-0 Los test de usuario son comúnmente utilizados en productos digitales y sirven para comprobar si el prototipo cumple con las expectativas del usuario y obtener reacciones y comentarios sobre el mismo, es posible realizarlo en cualquier tipo de fidelidad del prototipo, pues busca apegar a otra de las premisas del <em>Design Thinking</em> en su etapa de prototipado, <em>equivocarse rápido y barato</em>.
    
    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Refinar el prototipo
    
    p.mb-5 Luego de generar y aplicar las diferentes herramientas para la recolección de información en la fase de validación, es necesario volcar los datos encontrados para su posterior clasificación y análisis; en este punto, son comúnmente utilizadas las matrices o mallas de clasificación las cuales se dividen en cuatro cuadrantes: 

    .row.justify-content-center
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/tema2/t2-8.svg', alt='Texto que describa la imagen')
    
    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Informe Final
    
    p.mb-5 Luego de pasar por todas las etapas del proceso de <em>Design Thinking</em> y para generar trazabilidad y aprendizaje para nuevos proyectos, es importante realizar un informe que contenga a detalle cada una de las actividades realizadas, sus resultados y las personas involucradas.

    .bloque-texto-g.bgr_25.p-3.p-sm-4.p-md-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-9.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 También es importante dejar por escrito si el proyecto ha iterado durante su desarrollo, es decir, ha tenido que regresar a alguna de las etapas anteriores para refinar detalles y cuales han sido las conclusiones obtenidas.


    



        


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
