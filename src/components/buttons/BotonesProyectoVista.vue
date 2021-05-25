<template>
  <div class="BotonesProyectoVista">
    <v-btn
      outlined
      class="ma-2"
      color="indigo darken-1"
      v-if="url"
      :href="url"
      target="_blank"
      >¡Visitar!<v-icon right> mdi-web </v-icon></v-btn
    ><v-btn
      class="ma-2"
      color="orange darken-1"
      elevation="2"
      dark
      href="https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com"
      target="_blank"
      >¡Envíame un correo!<v-icon right> mdi-at </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      color="black"
      large
      icon
      text
      v-if="gitRepo"
      :href="gitRepo"
      target="_blank"
      ><v-icon> mdi-github </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "BotonesProyectoVista",
  props: {
    url: {
      Type: String,
    },
   gitRepo: {
     Type: String,
   }
  },
};
</script>

<style>
</style>