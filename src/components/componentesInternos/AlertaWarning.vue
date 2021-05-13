<template>
  <div class="AlertaWarning">
    <v-alert text color="success" icon="alert-circle-outline" border="right">
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