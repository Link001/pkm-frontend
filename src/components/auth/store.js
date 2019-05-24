import {authActions} from "./auth-actions";
import {Auth} from "../../firebase";

const mutations = {
    setUser: '[AUTH] Set User'
};

export const authStore = {
    state: { user: null },

    actions: {
        [authActions.login]({ commit }) {
            Auth.signIn('admin@mail.com', 'admin-admin')
                .then(Auth.fetchUserInformation)
                .then(user => commit(mutations.setUser, user));
        }
    },

    mutations: {
        [mutations.setUser](state, user) {
            state.user = user;
        }
    },

    getters: {
        isAuthenticated: ({ user }) => !user
    }
};
