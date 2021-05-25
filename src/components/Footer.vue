<template>
  <v-card dark flat tile width="100%" class="text-center" color="grey darken-3">
    <v-card-text>
      <strong>¡Espero que te guste!</strong
      ><v-icon class="ml-3" color="pink">mdi-heart</v-icon>
    </v-card-text>
    <RedesSociales class="mx-auto pb-5"></RedesSociales>
  </v-card>
</template>

<script>
import RedesSociales from "./buttons/RedesSociales";
export default {
  name: "Footer",
  components: {
    RedesSociales,
  },
};
</script>

<style>
</style>