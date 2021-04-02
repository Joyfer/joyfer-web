<template>
  <div class="AlertaWarning">
    <v-alert text color="orange darken-2" icon="mdi-check-bold" border="right">
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
.AlertaWarning{
  font-family: 'Source Sans Pro', sans-serif  ;
}
</style>