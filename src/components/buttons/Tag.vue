<template>
  <v-chip class="my-2" color="orange darken-1" label text-color="white" @click="HandleTagFiltrado(tagBuscado)">
    <v-icon left> mdi-{{ tags.icono }} </v-icon>
    {{ tags.nombre != '' ? tags.nombre : "Todos" }}
  </v-chip>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Tag",
  props: {
    tags: {
      type: Object,
      default: () => {},
    },
    tagBuscado: {
      type: String,
      required: true
    }
  },
 methods: {
    ...mapActions(["HandleTagFiltrado"]),
  }
};
</script>

<style>
</style>