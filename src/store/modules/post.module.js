import { postConfig } from "../../../server/config/config";

const state = {
  postModel: {
    postCollection: null,
    postCount: null,
    pageCount: null,
  },
  currentPage: 1,
  post: {},
};
const getters = {
  postCollection: (state) => {
    return state.postModel.postCollection;
  },
  postCount: (state) => {
    return state.postModel.postCount;
  },
  pageCount: (state) => {
    return state.postModel.pageCount;
  },
  currentPage: (state) => {
    return state.currentPage;
  },
  post: (state) => {
    return state.post;
  },
};
const mutations = {
  set_post: (state, payload) => {
    state.post = payload;
  },
  set_postCollection: (state, payload) => {
    state.postModel = payload;
  },
  set_currentPage: (state, payload) => {
    state.currentPage = payload;
  },
};
const actions = {
  set_posts: (context, payload) => {
    context.commit("set_postCollection", payload);
  },
  set_currentPage: (context, payload) => {
    context.commit("set_currentPage", payload);
  },
  get_posts: async (context, pageNumber) => {
    context.commit("set_loading", true);
    let url = postConfig.GET_POSTS + Number(pageNumber);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        context.commit("set_postCollection", data);
        context.commit("set_loading", false);
      });
  },

  get_post: async (context, id) => {
    context.commit("set_loading", true);
    let url = postConfig.GET_POST + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        context.commit("set_post", data);
        context.commit("set_loading", false);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
