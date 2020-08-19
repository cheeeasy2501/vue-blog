import Vue from "vue";
import Vuex from "vuex";
import postModule from "@/store/modules/post.module";
import authModule from "@/store/modules/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    postModule,
    authModule,
  },
});
