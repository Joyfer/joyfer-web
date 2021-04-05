<template>
  <v-carousel v-model="model" height="450">
    <v-carousel-item v-for="imagen in imagenes" :key="imagen" :src="imagen" :href="imagen" target="_blank">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CaruselProyecto",
  data: () => ({
      model: 0,
    }),
    props: {
      imagenes:{
        type: Array,
        required: true
      }
    }
};
</script>

<style>
</style>