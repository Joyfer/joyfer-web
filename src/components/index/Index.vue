<template>
  <div class="Index">
    <v-container fluid :class="{'svgBg': $vuetify.breakpoint.mdAndUp, 'smBg': $vuetify.breakpoint.smAndDown}" fill-height>
      <v-row class="d-flex align-end flex-column">
        <v-col height="100" cols="12" md="6"
          ><div class="text-center mr-md-15 mb-8">
            <h1 class="display-1 mb-3">BIENVENIDO</h1>
            <p>
              Me llamo Joyfer Ramos, y en este sitio encontrarás parte de mi trabajo, espero puedas encontrar algo
              que te guste, no dudes en contactarte conmigo. :)
            </p>
            <ButtonsC></ButtonsC>
          </div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ButtonsC from "./Buttons";
export default {
  name: "Index",
  components: {
      ButtonsC
  }
};
</script>

<style scoped>
.Index {
  background: rgb(238, 238, 238);
  background: -moz-linear-gradient(
    180deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eeeeee",endColorstr="#ffffff",GradientType=1);
}
.svgBg {
  height: 100vh;
  background: url("../../assets/imgs/Wavy_Tech-08_Single-05.png") no-repeat;
  background-size: 550px 550px;
  background-position-y: 40%;
  background-position-x: 10%;
}
.smBg{
    height: 100vh;
    background:  linear-gradient(rgba(255, 255, 255, 0.925), rgba(255, 255, 255, 0.952)), url("../../assets/imgs/Wavy_Tech-08_Single-05.png") no-repeat;
      background-size: 550px 550px;
}
</style>
