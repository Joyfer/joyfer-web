<template>
<v-card>
     <v-subheader>
        Caracteristicas
      </v-subheader>  
  <v-list >
    <template v-for="item in caracteristicas">
      <v-list-item v-if="item.icono" :key="item.nombre">
        <v-list-item-action>
          <v-icon>mdi-{{ item.icono }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.nombre"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ListaCaracteristicas",
  props: {
    caracteristicas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>