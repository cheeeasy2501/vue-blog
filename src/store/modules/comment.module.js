const state = {
    comments: []
};
const getters = {
    comments: state => {
        return state.comments;
    },
};
const mutations = {
    set_comments: (state, payload) => {
        state.comments = payload;
    }
};
const actions = {
    get_comments: async (context, id) => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            context.commit('set_comments', data);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};