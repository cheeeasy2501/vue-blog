<template>
  <v-card>
    <v-card-text>
      <v-form
        v-model="validate.registrationNotValid"
        :lazy-validation="false"
        ref="registrationForm"
      >
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-email"
          type="email"
          v-model="registrationForm.email"
          :rules="rules.emailRules"
          required
        ></v-text-field>

        <v-text-field
          label="Login"
          name="login"
          prepend-icon="mdi-account"
          type="text"
          v-model="registrationForm.login"
          :rules="rules.loginRules"
          required
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="registrationForm.password"
          :rules="rules.passwordRules"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!validate.registrationNotValid"
        @click="onSubmit('register')"
        color="success"
        >Register</v-btn
      >
      <v-btn
        color="error"
        class="mr-4"
        @click="onReset($refs.registrationForm)"
      >
        Reset Form
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      registrationForm: "registrationForm",
      validate: "validate",
      rules: "rules",
    }),
  },
  methods: {
    ...mapActions({ onSubmit: "onSubmit", onReset: "formReset" }),
  },
};
</script>
