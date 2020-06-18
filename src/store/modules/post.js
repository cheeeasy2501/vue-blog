import { postConfig } from '../../../server/configs/config'

const state = {
    posts: [],
    post: {}
};
const getters = {
    posts: state => {
        return state.posts;
    },
    post: state => {
        return state.post;
    }
};
const mutations = {
    set_post: (state, payload) => {
        state.post = payload;
    }, set_posts: (state, payload) => {
        state.posts = payload;
    },
};
const actions = {
    set_posts: (context, payload) => {
        context.commit('set_posts', payload);
    },

    get_posts: async (context) => {
        let url = postConfig.GET_POSTS + 1;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            context.commit('set_posts', data);
        });
    },

    get_post: async (context, id) => {
        context.commit('set_loaded', false);
        let url = postConfig.GET_POST + id;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            context.commit('set_post', data);
            context.commit('set_loaded', true);
        });
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};