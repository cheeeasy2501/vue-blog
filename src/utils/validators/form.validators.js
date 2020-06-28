import constant from "./form.constant";

const validators = {
  loginRules: [
    (v) => !!v || "Login is required",
    (v) =>
      (v && v.length >= constant.loginCount) ||
      `Login must be more than ${constant.loginCount} characters`,
  ],
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  passwordRules: [
    (v) => !!v || "Password is required",
    (v) =>
      (v && v.length >= constant.passwordCount) ||
      `Password must be more than ${constant.passwordCount} characters`,
  ],
};

export default validators;
