<template>
  <div class="CartaInformacion mt-4">
    <h1 class="mb-3 display-2">Colección de proyectos</h1>
    <p class="mb-5">
      Todo lo mostrado aquí es contenido comprable, solo vendo las plantillas,
      no doy servicio de hosting ni mantenimiento, pero siempre se puede hablar.
      ¡Espero que te guste!
    </p>
    <AlertaWarning
      msg="Todo el contenido mostrado aquí es creado por mí utilizando diferentes herramientas, frameworks y librerias,
      por ende queda prohibido el uso desautorizado del material mostrado a continuación."
    ></AlertaWarning>
  </div>
</template>

<script>
import AlertaWarning from "./componentesInternos/AlertaWarning";
export default {
  name: "CartaInformacion",
  components: {
    AlertaWarning,
  },
};
</script>

<style>
</style>