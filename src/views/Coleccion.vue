<template>
  <div class="Catalogo mt-5">
    <v-container>
      <v-row class="fadeInDown">
        <v-col cols="12" md="3">
          <v-row class="stickyCard" >
            <v-col cols="12" class="fadeIn second">
          <CartaIzquierdaTags></CartaIzquierdaTags>
          </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="9" class="fadeIn first">
          <v-row>
            <v-col cols="12">
              <CartaInformacion></CartaInformacion>
            </v-col>
          </v-row>
          <ProyectosLista></ProyectosLista>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CartaInformacion from "../components/catalogo/CartaInformacion";
import ProyectosLista from "../components/catalogo/ProyectosLista";
import CartaIzquierdaTags from "../components/catalogo/CartaIzquierdaTags";
export default {
  name: "Coleccion",
  components: {
    CartaInformacion,
    ProyectosLista,
    CartaIzquierdaTags
  },
};
</script>

<style>
.stickyCard{
  position: sticky;
  top: 11%;
}
</style>