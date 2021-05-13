<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-parallax class="parallax" src="https://i.imgur.com/bLIX1y2.jpg">
          <v-row
            :class="{
              svgBg: $vuetify.breakpoint.lgAndUp,
              mdBg: $vuetify.breakpoint.mdOnly,
            }"
            class="d-flex align-end flex-column fadeInDown"
          >
            <v-col
              height="100"
              cols="12"
              sm="12"
              md="7"
              class="my-auto d-flex justify-center"
              ><div
                class="text-center d-flex align-center justify-center flex-column mb-16 mr-lg-8"
              >
                <h2 class="text-h2 animated fadeIn first">Bienvenido</h2>
                <p class="text-body-1 my-5 fadeIn second">
                  Me llamo Joyfer Ramos, y en este sitio encontrarás parte de mi
                  trabajo, espero puedas encontrar algo que te guste, no dudes
                  en contactarte conmigo. :)
                </p>
                <ButtonsC @goTo="goTo" class="fadeIn third"></ButtonsC></div
            ></v-col>
          </v-row>
        </v-parallax>
      </v-row>
      <v-row class="d-flex justify-center text-center fadeIn fourth">
        <span class="anchor" ref="saludo" id="saludo"></span>
        <TextAbout
          titulo="¡Hola!"
          icon="hand"
          color="green lighten-1"
          descripcion="Soy un <strong>programador web</strong> apasionado por
          todo lo relacionado con la industria, actualmente resido en
          <strong>Caracas, Venezuela. </strong> En mi tiempo libre programo, veo
          muchos videos o artículos relacionados, o quizá jugando.. Y en mi
          tiempo no libre también programo :P. Hay muchas cosas que me faltan
          por aprender, pero lo que nunca me faltará es la
          <strong> motivación para aprenderlas.</strong>"
          class="d-flex justify-center"
        ></TextAbout>
        <CardHerramientas
          class="d-flex justify-center mx-auto"
        ></CardHerramientas>
        <TextAbout
          titulo="Quiero"
          color="pink"
          icon="heart-multiple"
          descripcion="Me gustaría aprender en un futuro cercano sobre Docker, 
          Python y su framework Django. Algunas bases de datos que he usado son MySQL, 
          PostgreSQL, MongoDB y me gustaría jugar con Firebase."
          class="d-flex justify-center"
        ></TextAbout>
        <TextAbout
          titulo="Contáctame"
          color="blue darken-4"
          icon="card-account-mail"
          descripcion="Si quieres comunicarte conmigo, puedes hacerlo a través de
          <a href=https://t.me/JoyferR target=`_blank`
            >Telegram <i class=`fab fa-telegram`></i></a
          >, correo electrónico
          <a
            href=https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com
            target=`_blank`
            >joyferramos@gmail.com <i class=`fas fa-envelope`></i
          ></a>
          o
          <a href=https://discord.com/app target=`_blank`
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
  methods: {
    goTo: function () {
      this.$refs.saludo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style scoped>
.svgBg {
  height: 100vh;
  background: url("https://i.imgur.com/h5Mcw6W.png") no-repeat;
  background-size: 550px 550px;
  background-position-y: 35%;
  background-position-x: 3%;
}
.mdBg {
  height: 100vh;
  background: url("https://i.imgur.com/h5Mcw6W.png") no-repeat;
  background-size: 450px 450px;
  background-position-y: 35%;
  background-position-x: 2%;
}
.parallax {
  width: 100vw;
  height: 100vh !important;
  background: rgb(54, 51, 110);
}
.anchor {
  display: block;
  height: 50px;
  margin-top: -50px;
  visibility: hidden;
}
</style>