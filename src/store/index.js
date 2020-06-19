import Vue from 'vue'
import Vuex from 'vuex'
import postModule from '@/store/modules/post'
import commentModule from '@/store/modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    set_loading: (state, payload) => {
      state.loading = payload;
    }
  },
  getters: {
    loading: state => {
      return state.loading;
    }
  },
  actions: {
  },
  modules: {
    postModule,
    commentModule
  }
})
