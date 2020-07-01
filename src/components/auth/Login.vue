<template>
  <v-card>
    <v-card-text>
      <v-form
        v-model="validate.loginNotValid"
        :lazy-validation="false"
        ref="loginForm"
      >
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-email"
          type="email"
          v-model="loginForm.email"
          :rules="rules.emailRules"
          required
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="loginForm.password"
          :rules="rules.passwordRules"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!validate.loginNotValid"
        @click="onSubmit('login')"
        color="success"
        >Login</v-btn
      >
      <v-btn color="error" class="mr-4" @click="onReset($refs.loginForm)">
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
      loginForm: "loginForm",
      validate: "validate",
      rules: "rules",
    }),
  },
  methods: {
    ...mapActions({ onSubmit: "onSubmit", onReset: "formReset" }),
  },
};
</script>
