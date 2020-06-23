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
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Login:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.login"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Your Password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
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
      login: "",
      password: "",
    },
    loading: false,
  }),
  methods: {
    async onSubmit() {
      this.loading = true;

      const res = await fetch(authConfig.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      }).then((data) => data.json());

      this.loading = false;

      if (res.auth) {
        localStorage.setItem("jwt", res.token);
        swal("Successful Login!", "You are now online :)", "success");
        this.$router.push("/");
        return;
      }
    },
    onReset() {},
  },
};
</script>
