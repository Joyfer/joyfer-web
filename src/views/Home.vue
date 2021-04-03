<template>
  <div class="home">
    <v-container fill-height>
      <v-row
        :class="{
          svgBg: $vuetify.breakpoint.mdAndUp,
          smBg: !$vuetify.breakpoint.mdAndUp,
        }"
        class="d-flex align-end flex-column fadeInDown fadeIn second"
      >
        <v-col height="100" cols="12" md="6" class="my-auto"
          ><div class="text-center mr-md-15 mb-8">
            <div class="text-h2 animated fadeIn first">Bienvenido</div>
            <div class="text-body-1 my-5 fadeIn second">
              Me llamo Joyfer Ramos, y en este sitio encontrarás parte de mi
              trabajo, espero puedas encontrar algo que te guste, no dudes en
              contactarte conmigo. :)
            </div>
            <ButtonsC class="fadeIn third"></ButtonsC></div
        ></v-col>
      </v-row>
      <v-row class="d-flex justify-center text-center fadeIn fourth">
        <v-divider class="mx-16 mb-4"></v-divider>
        <span class="anchor" id="saludo"></span>
        <TextAbout
          titulo="¡Hola!"
          icon="hand"
          descripcion="Soy un aprendíz de <strong>programación web</strong> apasionado por
          todo lo relacionado con la industria, actualmente resido en
          <strong>Caracas, Venezuela. </strong> En mi tiempo libre programo, veo
          muchos videos o artículos relacionados, o quizá jugando.. Y en mi
          tiempo no libre también programo :P. Hay muchas cosas que me faltan
          por aprender, pero lo que nunca me faltará es la
          <strong> motivación para aprenderlas.</strong>"
          class="d-flex justify-center"
        ></TextAbout>
        <CardHerramientas class="d-flex justify-center"></CardHerramientas>
        <TextAbout
          titulo="Quiero"
          icon="heart-multiple"
          descripcion="Me gustaría aprender en un futuro cercano sobre React, Docker, 
          Python y su framework Django. Algunas bases de datos que he usado son MySQL, 
          PostgreSQL, MongoDB y me gustaría jugar con Firebase."
          class="d-flex justify-center"
        ></TextAbout>
          <TextAbout
          titulo="Contáctame"
          icon="card-account-mail"
          descripcion="Si quieres comunicarte conmigo, puedes hacerlo a través de
          <a href=`https://t.me/JoyferR` target=`_blank`
            >Telegram <i class=`fab fa-telegram`></i></a
          >, correo electrónico
          <a
            href=`https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com`
            target=`_blank`
            >joyferramos@gmail.com <i class=`fas fa-envelope`></i
          ></a>
          o
          <a href=`https://discord.com/app` target=`_blank`
            >Discord <i class=`fab fa-discord`></i
          ></a>
          id: #6528"
          class="d-flex justify-center"
        ></TextAbout>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ButtonsC from "../components/Home/Buttons";
import TextAbout from "../components/Home/TextAbout";
import CardHerramientas from "../components/Home/CardHerramientas";

export default {
  name: "Home",
  components: {
    ButtonsC,
    TextAbout,
    CardHerramientas,
  },
};
</script>

<style scoped>
.svgBg {
  height: 100vh;
  background: url("../assets/imgs/Wavy_Tech-08_Single-05.png") no-repeat;
  background-size: 550px 550px;
  background-position-y: 20%;
  background-position-x: 10%;
}
.smBg {
  margin-top: 30vh;
  margin-bottom: 30vh;
}
.anchor {
    display: block;
    height: 92px;
    margin-top: -92px;
    visibility: hidden;
}
</style>