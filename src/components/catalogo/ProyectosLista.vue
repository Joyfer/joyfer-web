<template>
  <div class="ProyectosLista">
    <v-row>
      <CartaProyecto
        v-for="proyecto in proyectos"
        :key="proyecto.index"
        :proyecto="proyecto"
      ></CartaProyecto>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartaProyecto from "../componentesInternos/CartaProyecto";
export default {
  name: "ProyectosLista",
  components: {
    CartaProyecto,
  },
  data() {
    return { 
    };
  },
  computed: {
    ...mapState(["tagFiltrado", "proyectos"]),
  },
  methods: {
  },
};
</script>

<style>
</style>