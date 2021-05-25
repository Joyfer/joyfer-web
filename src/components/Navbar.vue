<template>
  <v-app-bar
    class="nav"
    elevation="2"
    color="indigo darken-1
"
    dark
    fixed
  >
    <v-tabs class="tabsFont pl-md-6">
      <v-tab to="/"> <v-icon left> mdi-account-circle </v-icon>Sobre mí</v-tab>
      <v-tab to="/coleccion"
        ><v-icon left> mdi-folder-heart </v-icon>Colección</v-tab
      >
    </v-tabs>
    <RedesSociales class="d-none d-sm-block"></RedesSociales>
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