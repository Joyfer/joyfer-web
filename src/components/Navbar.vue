<template>
  <v-app-bar class="nav" elevation="3" elevate-on-scroll fixed color="purple lighten-1" dark >

    <v-toolbar-title>@Joyfer</v-toolbar-title>

    <v-spacer></v-spacer>
    <RedesSociales></RedesSociales>

    <template v-slot:extension>
      <v-tabs class="tabsFont" align-with-title >
        <v-tab to="/"> <v-icon left> mdi-account-circle </v-icon>Sobre mí</v-tab>
        <v-tab to="/coleccion"><v-icon left> mdi-folder-heart </v-icon>Colección</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import RedesSociales from "./buttons/RedesSociales";
export default {
  name: "NavbarC",
  components: {
    RedesSociales,
  },
};
</script>

<style scoped>
</style>