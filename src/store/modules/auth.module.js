import http from "@/services/http.service";
import swal from "sweetalert";
import rules from "@/utils/validators/form.validators";
import { authConfig } from "@/../server/config/config";
import router from "@/router/router";

const state = {
  auth: false,
  registrationForm: {
    email: null,
    login: null,
    password: null,
  },
  loginForm: {
    email: null,
    password: null,
  },
  validate: {
    loginNotValid: true,
    registrationNotValid: true,
  },
  rules: {
    emailRules: rules.emailRules,
    loginRules: rules.loginRules,
    passwordRules: rules.passwordRules,
  },
};
const getters = {
  loginForm: (state) => {
    return state.loginForm;
  },
  registrationForm: (state) => {
    return state.registrationForm;
  },
  validate: (state) => {
    return state.validate;
  },
  rules: (state) => {
    return state.rules;
  },
};
const mutations = {
  SET_AUTH: (state, payload) => {
    state.auth = payload;
  },
};
const actions = {
  async getOptions(context, action) {
    switch (action) {
      case "login":
        return { url: authConfig.LOGIN, data: context.state.loginForm };
      case "register":
        return {
          url: authConfig.REGISTER,
          data: context.state.registrationForm,
        };
      default:
        return false;
    }
  },

  async onSubmit({ commit }, action) {
    try {
      const options = await context.dispatch("getOptions", action);
      const response = await http.authResponseSubmit(options.url, options.data);
      const data = await response.json();
      const token = await response.headers.get("x-access-token");

      if (data.auth) {
        commit("SET_AUTH", true);
        localStorage.setItem("jwt", token);
        swal("Successful Login!", "You are now online :)", "success");
        router.push("/");

        return;
      }

      swal(
        "Not authorized!",
        "Try using a different username or password",
        "error"
      );
      localStorage.removeItem("jwt");
    } catch (err) {
      swal("Server Error!", "Plaese try later", "error");
    }
  },
  async formReset({}, form) {
    form.reset();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
