<template>
  <b-overlay :show="loading" rounded="lg" opacity="0.6">
    <template v-slot:overlay>
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </template>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="loading"
        >Login</b-button
      >
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-overlay>
</template>

<script>
import swal from "sweetalert";
import { authConfig } from "../../../../server/config/config";

export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    loading: false,
  }),
  methods: {
    async onSubmit() {
      this.loading = true;

      const response = await fetch(authConfig.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      }).then((response) => response);

      const data = await response.json();
      const token = await response.headers.get("x-access-token");

      this.loading = false;

      if (data.auth) {
        localStorage.setItem("jwt", token);
        swal("Successful Login!", "You are now online :)", "success");
        this.$router.push("/");

        return;
      }

      swal(
        "Not authorized!",
        "Try using a different username or password",
        "error"
      );
      localStorage.removeItem("jwt");
    },
    onReset() {},
  },
};
</script>
