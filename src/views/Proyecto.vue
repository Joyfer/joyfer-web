<template>
  <div class="Proyecto mt-7 fadeInDown">
    <v-container>
      <v-row>
        <BotonVolver moveTo="/coleccion"></BotonVolver>
      </v-row>
      <v-row>
        <v-col cols="12" md="7" class="fadeIn first"
          ><CaruselProyecto :imagenes="filtrado[0].imagenes"></CaruselProyecto>
        </v-col>
        <v-col cols="12" md="5" class="fadeIn second"
          ><h3 class="text-h3" v-text="filtrado[0].nombre"></h3>
          <p class="text-body-2 my-5" v-text="filtrado[0].descripcion"></p>
          <BotonesProyectoVista
            class="mb-4"
            :url="filtrado[0].url"
            :gitRepo="filtrado[0].gitRepo"
          ></BotonesProyectoVista>
          <AlertaWarning
            v-if="filtrado[0].heroku"
            msg="Esta aplicación está subida a Heroku, lo que hará que tarde un poco en iniciar la primera vez."
          />
          <ListaCaracteristicas
            :caracteristicas="filtrado[0].caracteristicas"
          ></ListaCaracteristicas>
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
import AlertaWarning from "../components/componentesInternos/AlertaWarning";

export default {
  name: "Proyecto",
  components: {
    CaruselProyecto,
    ListaCaracteristicas,
    BotonVolver,
    BotonesProyectoVista,
    AlertaWarning,
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