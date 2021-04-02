<template>
  <div class="textAbout">
    <v-col cols="12" md="8">
      <div class="d-flex justify-center"><h2 class="mr-2" v-text="titulo"></h2><v-icon large>mdi-{{icon}}</v-icon></div>
      <p v-html="descripcion">
      </p>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "TextAbout",
  props:{
      titulo:{
          type: String,
          default: "Default"
      },
      descripcion:{
          type: String,
          default: "Default"
      },
      icon:{
          type: String,
          default: "contact"
      }
  }
};
</script>

<style>
</style>