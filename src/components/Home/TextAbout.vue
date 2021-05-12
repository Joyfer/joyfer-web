<template>
  <div class="textAbout">
    <v-col cols="12" md="8" class="my-5">
      <div class="d-flex justify-center mb-5">
        <h3 class="mr-3 text-h3" v-text="titulo"></h3>
        <v-icon large :color="color">mdi-{{ icon }}</v-icon>
      </div>
      <p class="text-body-1 mb-0" v-html="descripcion"></p>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "TextAbout",
  props: {
    titulo: {
      type: String,
      default: "Default",
    },
    descripcion: {
      type: String,
      default: "Default",
    },
    icon: {
      type: String,
      default: "contact",
    },
    color: {
      type: String,
      defalult: "primary",
    },
  },
};
</script>

<style>
</style>