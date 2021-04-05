<template>
   <v-btn :to="moveTo" icon color="orange darken-1" class="ml-2">
          <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>
</template>

<script>
export default {
    name: "BotonVolver",
    props: {
        moveTo: {
            Type: String,
            required: true
        }
    }
}
</script>

<style>

</style>