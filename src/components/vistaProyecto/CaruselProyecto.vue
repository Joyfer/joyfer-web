<template>
  <div>
    <v-carousel v-model="model" height="450">
      <v-carousel-item
        v-for="imagen in imagenes"
        :key="imagen"
        :src="imagen"
        :href="imagen"
        target="_blank"
      >
      </v-carousel-item>
    </v-carousel>
    <p class="text-caption mt-2">
      <v-icon left>mdi-fullscreen</v-icon>Clic en la imagen para ver pantalla
      completa
    </p>
  </div>
</template>

<script>
export default {
  name: "CaruselProyecto",
  data: () => ({
    model: 0,
  }),
  props: {
    imagenes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>