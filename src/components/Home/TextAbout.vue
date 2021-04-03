<template>
  <div class="textAbout">
    <v-col cols="12" md="8" class="my-5">
      <div class="d-flex justify-center mb-5"><div class="mr-3 text-h3" v-text="titulo"></div><v-icon large>mdi-{{icon}}</v-icon></div>
      <div class="text-body-1" v-html="descripcion">
      </div>
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