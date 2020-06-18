import Vue from 'vue'
import Vuex from 'vuex'
import postModule from '@/store/modules/post'
import commentModule from '@/store/modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
  },
  mutations: {
    set_loaded: (state, payload) => {
      state.isLoaded = payload;
    }
  },
  getters: {
    isLoaded: state => {
      return state.isLoaded;
    }
  },
  actions: {
  },
  modules: {
    postModule,
    commentModule
  }
})
