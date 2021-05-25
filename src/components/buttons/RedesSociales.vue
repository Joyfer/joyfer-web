<template>
  <div class="RedesSociales">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on" href="https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com" target="_blank">
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
      </template>
      <span>Gmail</span>
    </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on" href="https://t.me/JoyferR" target="_blank">
          <v-icon>mdi-android-messages</v-icon>
        </v-btn>
      </template>
      <span>Telegram</span>
    </v-tooltip>
     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text icon v-bind="attrs" v-on="on" href="https://github.com/Joyfer" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>GitHub</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "RedesSociales",
};
</script>

<style scoped>
.RedesSociales{
  width: 200px;
}
</style>

