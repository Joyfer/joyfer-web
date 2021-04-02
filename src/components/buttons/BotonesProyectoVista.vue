<template>
  <div class="BotonesProyectoVista">
    <v-btn
      outlined
      class="ma-2"
      color="purple lighten-1"
      v-if="url"
      :href="url"
      target="_blank"
      >¡Visitar!<v-icon right> mdi-web </v-icon></v-btn
    ><v-btn class="ma-2" color="orange darken-1" elevation="2" dark
      >¡Enviame un correo!<v-icon right> mdi-at </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "BotonesProyectoVista",
  props: {
    url: {
      Type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>