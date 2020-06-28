import httpServices from "@/services/http.services";
import swal from "sweetalert";
import rules from "@/utils/validators/form.validators";
import { authConfig } from "@/../server/config/config";
import router from "@/router/router";

const state = {
  auth: false,
  form: {
    email: null,
    login: null,
    password: null,
  },

  validate: {
    notValid: true,
    emailRules: rules.emailRules,
    loginRules: rules.loginRules,
    passwordRules: rules.passwordRules,
  },
};
const getters = {
  form: (state) => {
    return state.form;
  },
  validate: (state) => {
    return state.validate;
  },
};
const mutations = {
  set_auth: (state, payload) => {
    state.auth = payload;
  },
};
const actions = {
  async getUrl({}, action) {
    switch (action) {
      case "login":
        return authConfig.LOGIN;
      case "register":
        return authConfig.REGISTER;
      default:
        return false;
    }
  },

  async onSubmit(context, action) {
    try {
      const url = await context.dispatch("getUrl", action);
      const response = await httpServices.authResponseSubmit(
        url,
        context.state.form
      );
      const data = await response.json();
      const token = await response.headers.get("x-access-token");

      if (data.auth) {
        context.commit("set_auth", true);
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
  formReset({}, form) {
    form.reset();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
