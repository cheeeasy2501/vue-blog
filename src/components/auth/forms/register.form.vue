<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Sing Up</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="validate.notValid" :lazy-validation="false" ref="form">
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-account"
          type="email"
          v-model="form.email"
          :rules="validate.emailRules"
          required
        ></v-text-field>

        <v-text-field
          label="Login"
          name="login"
          prepend-icon="mdi-account"
          type="text"
          v-model="form.login"
          :rules="validate.loginRules"
          required
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="form.password"
          :rules="validate.passwordRules"
          required
        ></v-text-field>
      </v-form>
      <v-card-text class="d-flex justify-start align-center"
        >Have an account?
        <v-btn class="ml-4" :to="{ path: '/login' }" small color="primary"
          >Sing In</v-btn
        ></v-card-text
      >
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!validate.notValid"
        @click="onSubmit('register')"
        color="success"
        >Register</v-btn
      >
      <v-btn color="error" class="mr-4" @click="onReset($refs.form)">
        Reset Form
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ form: "form", validate: "validate" }),
  },
  methods: {
    ...mapActions({ onSubmit: "onSubmit", onReset: "formReset" }),
  },
};
</script>
