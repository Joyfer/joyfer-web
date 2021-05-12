<template>
  <div class="CartaInformacion mt-4">
    <h1 class="mb-3 display-2">Colección de proyectos<v-icon color="purple lighten-1" right large> mdi-folder-heart </v-icon></h1>
    <p class="mb-5 text-body-1">
      Mi colección de proyectos, la mayoría de ellos son creados por hobby, si algo te interesa recuerda que puedes
      comunicarte conmigo sin ningún compromiso, también si quieres algo personalizado y está dentro de mis conocimientos
      estoy al servicio para ti.
    </p>
    <AlertaWarning
      msg="El contenido mostrado a continuación es hecho por mí con diferentes librerías y frameworks, 100% personalizado
      por mí."
    ></AlertaWarning>
  </div>
</template>

<script>
import AlertaWarning from "../componentesInternos/AlertaWarning";
export default {
  name: "CartaInformacion",
  components: {
    AlertaWarning,
  },
};
</script>

<style>
</style>