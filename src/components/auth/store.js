import { authActions } from "./auth-actions";
import { Auth } from "../../firebase";

const mutations = {
    setUser: "[AUTH] Set User"
};

export const authStore = {
    state: { user: null },

    actions: {
        [authActions.signIn]({ dispatch }, { email, password }) {
            Auth.signIn(email, password).then(({user: authUser}) => dispatch(authActions.getUser, authUser))
        },

        [authActions.autoSignIn]({ dispatch }) {
            return Auth.autoSignIn().then(authUser => {
                if (authUser) {
                    return dispatch(authActions.getUser, authUser)
                }
            })
        },

        [authActions.getUser]({ commit }, authUser) {
            return Auth.fetchUserInformation(authUser).then(user => commit(mutations.setUser, user));
        }
    },

    mutations: {
        [mutations.setUser](state, user) {
            state.user = user;
        }
    },

    getters: {
        isAuthenticated: ({ user }) => !!user
    }
};
