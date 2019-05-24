import { authActions } from "./auth-actions";
import { Auth } from "../../firebase";

const mutations = {
    setUser: "[AUTH] Set User"
};

export const authStore = {
    state: { user: null },

    actions: {
        [authActions.signIn]({ commit }, { email, password }) {
            Auth.signIn(email, password)
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
