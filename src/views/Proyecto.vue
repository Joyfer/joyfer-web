<template>
  <div class="Proyecto mt-16">
    <v-container>
      <v-row>
        <BotonVolver moveTo="/coleccion"></BotonVolver>
      </v-row>
      <v-row>
        <v-col cols="12" md="7"
          ><CaruselProyecto :imagenes="filtrado[0].imagenes"></CaruselProyecto
        ></v-col>
        <v-col cols="12" md="5"
          ><h1 v-text="filtrado[0].nombre"></h1>
          <p v-text="filtrado[0].descripcion"></p>
          <ListaCaracteristicas
            :caracteristicas="filtrado[0].tags"
          ></ListaCaracteristicas>
          <div class="mt-4">
            <p>
              Recuerda que si algo te gusta, puedes escribirme a algunos de mis
              contactos.
            </p>
            <BotonesProyectoVista :url="filtrado[0].url"></BotonesProyectoVista>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CaruselProyecto from "../components/vistaProyecto/CaruselProyecto";
import ListaCaracteristicas from "../components/vistaProyecto/ListaCaracteristicas";
import BotonVolver from "../components/buttons/Volver";
import BotonesProyectoVista from "../components/buttons/BotonesProyectoVista";
export default {
  name: "Proyecto",
  components: {
    CaruselProyecto,
    ListaCaracteristicas,
    BotonVolver,
    BotonesProyectoVista,
  },
  computed: {
    ...mapState(["proyectos"]),
    filtrado: function () {
      return this.proyectos.filter((el) => el.id === this.$route.params.id);
    },
  },
};
</script>

<style>
</style>