<template>
  <div class="AlertaWarning">
    <v-alert text color="blue" icon="mdi-alert-circle-outline">
      {{msg}}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "AlertaWarning",
  props: {
    msg:{
       type: String,
       required: true
    }
  }
};
</script>

<style>
</style>