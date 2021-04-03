<template>
  <v-card dark flat tile width="100%" class="text-center" color="#222">
    <v-card-text>
        <strong>I hope you enjoy my work!</strong><v-icon class="ml-3" color="pink">mdi-heart</v-icon>
    </v-card-text>
    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>Vue 2, Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>