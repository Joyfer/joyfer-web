<template>
  <div class="RedesSociales">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on">
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
      </template>
      <span>Gmail</span>
    </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on">
          <v-icon>mdi-android-messages</v-icon>
        </v-btn>
      </template>
      <span>Telegram</span>
    </v-tooltip>
     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on">
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>
      <span>Página Web</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "RedesSociales",
};
</script>

<style>
</style>