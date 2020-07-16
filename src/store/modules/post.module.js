import { postConfig } from "../../../server/config/config";
import http from "../../services/http.service";

const state = {
  posts: null,
  postCount: null,
  pageLimit: null,
  currentPage: 1,
  post: {},
};
const getters = {
  POSTS: (state) => {
    return state.posts;
  },
  POSTS_COUNT: (state) => {
    return state.postsCount;
  },
  PAGE_LIMIT: (state) => {
    return state.pageLimit;
  },
  CURRENT_PAGE: (state) => {
    return state.currentPage;
  },
  POST: (state) => {
    return state.post;
  },
};
const mutations = {
  SET_POST: (state, payload) => {
    state.post = payload;
  },
  SET_POSTS: (state, payload) => {
    state.posts = payload;
  },
  SET_PAGELIMIT: (state, payload) => {
    state.pageLimit = payload;
  },
  SET_POSTSCOUNT: (state, payload) => {
    state.postsCount = payload;
  },
  SET_PAGE: (state, payload) => {
    state.currentPage = payload;
  },
};
const actions = {
  SET_POSTS: ({ commit }, payload) => {
    commit("SET_POSTS", payload);
  },
  SET_PAGE: ({ commit }, payload) => {
    commit("SET_PAGE", payload);
  },
  SET_PAGELIMIT: ({ commit }, payload) => {
    commit("SET_PAGELIMIT", payload);
  },
  SET_POSTSCOUNT: ({ commit }, payload) => {
    commit("SET_POSTSCOUNT", payload);
  },
  GET_POSTS: async ({ commit }, pageNumber) => {
    const url = postConfig.GET_POSTS + Number(pageNumber);
    const options = {
      method: "GET",
    };
    const response = http.requestData(url, options);
    response.then((data) => commit("SET_POSTS", data.posts));
    response.then((data) => commit("SET_PAGELIMIT", data.pageLimit));
    response.then((data) => commit("SET_POSTSCOUNT", data.postsCount));
  },
  GET_POST: async ({ commit }, id) => {
    const url = postConfig.GET_POST + id;
    const options = {
      method: "GET",
    };
    const response = http.requestData(url, options);
    response.then((data) => commit("SET_POST", data));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
