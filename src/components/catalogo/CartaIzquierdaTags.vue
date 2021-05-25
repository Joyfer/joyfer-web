<template>
  <div class="CartaIzquierdaTags">
    <v-col cols="12" class="pa-0 text-center">
      <h5 class="text-subtitle-1">Estás viendo:</h5>
      <Tag :tags="{ icono: 'close', nombre: tagFiltrado }" tagBuscado=""></Tag><br />
      <p class="text-caption">Clic en los tags para filtrar el contenido</p>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Tag from "../buttons/Tag";
export default {
  name: "CartaIzquierdaTags",
  components: {
    Tag,
  },
  data() {
    return {
      TagBuscado: "Todos",
    };
  },
  computed: {
    ...mapState(["tagFiltrado"]),
  },
  methods: {
    ...mapActions(["HandleTagFiltrado"]),
  },
};
</script>

<style scoped>
.CartaIzquierdaTags {
  border-right: 3px solid #3949AB;
}
</style>