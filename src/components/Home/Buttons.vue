<template>
  <div class="ButtonsC">
    <v-btn dark class="ma-2" color="purple lighten-1" @click="goTo"
      >Ver contacto<v-icon right> mdi-account-circle </v-icon></v-btn
    ><v-btn
      class="ma-2"
      color="orange darken-1"
      elevation="2"
      dark
      to="/coleccion"
      >Ver colección<v-icon right> mdi-folder-heart </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonsC",
  methods: {
    goTo: function (){
      this.$emit('goTo')
    }
  }
};
</script>

<style>
</style>