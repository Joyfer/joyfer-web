<template>
  <v-col cols="12" md="8">
    <v-card elevation="3" width="1000" class="my-5">
      <v-card-title class="text-h4">¡Envíame un mensaje!<v-icon class="ml-4" color="success" large>mdi-email-edit-outline</v-icon></v-card-title>
      <v-divider></v-divider>
      <v-form v-model="valid" class="pa-4" netlify>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                append-icon="mdi-account"
                outlined
                v-model="firstname"
                :rules="nameRules"
                :counter="100"
                label="Nombre"
                name="nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                append-icon="mdi-email"
                outlined
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                name="e-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                append-icon="mdi-comment"
                outlined
                v-model="mensaje"
                :rules="nameRules"
                :counter="100"
                label="Mensaje"
                name="mensaje"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-btn color="success" type="submit" :disabled="!valid"
          >Envíar<v-icon right>mdi-send</v-icon></v-btn
        >
      </v-form>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Formulario",
  data: () => ({
    valid: false,
    firstname: "",
    mensaje: "",
    nameRules: [
      (v) => !!v || "Campo requerido",
      (v) => v.length <= 100 || "El nombre debe tener menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail requerido",
      (v) => /.+@.+/.test(v) || "Debe ser un e-mail válido",
    ],
  }),
};
</script>

<style>
</style>