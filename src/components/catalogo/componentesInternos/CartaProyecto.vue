<template>
  <transition name="fade">
    <v-col
      v-show="JSON.stringify(proyecto.tags).includes(tagFiltrado)"
      cols="12"
      md="6"
    >
      <v-card :to="`/coleccion/` + proyecto.id">
        <v-img
          :src="proyecto.imagenes[0]"
          :lazy-src="proyecto.imagenes[0]"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
        >
          <v-card-title
            ><h3>{{ proyecto.nombre }}</h3></v-card-title
          >
        </v-img>
        <v-card-text style="position: relative;" class="descripcion">{{
          proyecto.descripcion
        }}
        </v-card-text>
        <v-card-actions @click.prevent>
          <Tag
            v-for="tag in proyecto.tags"
            :key="tag.index"
            :tags="tag"
            :tagBuscado="tag.nombre"
            class="mx-1"
          >
          </Tag>
        </v-card-actions>
      </v-card>
    </v-col>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import Tag from "../../buttons/Tag";
export default {
  name: "CartaProyecto",
  components: {
    Tag,
  },
  computed: {
    ...mapState(["tagFiltrado"]),
  },
  props: {
    proyecto: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.descripcion {
  font-family: "Source Sans Pro", sans-serif;
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>