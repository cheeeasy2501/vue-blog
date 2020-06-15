import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded:false,
    posts: [],
    post: {},
    comments: []
  },
  mutations: {
     set_posts: (state, payload) => {
      state.posts = payload;
     },
     set_comments: (state, payload) => {
      state.comments = payload;
     },
     set_post: (state, payload) => {
      state.post = payload;
     },
     set_loaded: (state, payload) => {
      state.isLoaded = payload;
     }
  }, 
  getters: {
      posts: state => {
        return state.posts;
      },
      post: state => {
        return state.post;
      },
      comments: state => {
        return state.comments;
      },
      isLoaded: state => {
        return state.isLoaded; 
      }
  },
  actions: { 
      set_posts: (context, payload) => {
        context.commit('set_posts', payload);
      },

      get_posts: async (context) => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          context.commit('set_posts', data);
        });
      },

      get_post: async (context, id) => {
        context.commit('set_loaded', false);
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          context.commit('set_post', data);
          context.commit('set_loaded', true);
        });
      },

      get_comments: async (context, id) => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          context.commit('set_comments', data);
        });
      }
  },
  modules: {
  }
})
