<template>
  <v-col cols="12" md="8">
    <v-card elevation="3" class="pb-6 text-center my-5" width="1000"
      ><v-card-title class="mx-auto d-flex justify-center"
        >Me interesa principalmente obtener conocimientos
        full-stack</v-card-title
      ><v-card-subtitle
        >Actualmente aprendo y programo en:</v-card-subtitle
      >
         <img
                class="iconts"
                src="../../assets/imgs/javascript.png"
              />
              <img
                class="iconts"
                src="../../assets/imgs/node-js.png"
              />
              <img
                class="iconts"
                src="../../assets/imgs/vuejs.png"
              /><img
                class="iconts"
                src="../../assets/imgs/typescript.png"
              />
              <v-card-text>También utilizo:</v-card-text>
              <img
                class="iconts"
                src="../../assets/imgs/github.png"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="GitHub"
              /><img
                class="iconts"
                src="../../assets/imgs/adobe.png"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Photoshop"
              /><img
                class="iconts"
                src="../../assets/imgs/visual-studio.png"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Visual Studio Code"
              /><img
                class="iconts"
                src="../../assets/imgs/bootstrap.png"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Bootstrap"
              />
      </v-card
    >
  </v-col>
</template>

<script>
export default {
  name: "CardHerramientas",
};
</script>

<style>
.iconts{
    margin: 3px 6px;
}
</style>