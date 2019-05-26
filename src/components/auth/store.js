import { authActions } from "./auth-actions";
import { auth } from "../../firebase";
import {routerActions} from "../../router/router-actions";

const mutations = {
    setUser: "[AUTH] Set User"
};

export const userStore = {
    state: { current: null },

    actions: {
        [authActions.signIn]({ dispatch }, { email, password }) {
            auth.signIn(email, password)
                .then(({user: authUser}) => dispatch(authActions.getUser, authUser))
                .then(() => dispatch(routerActions.toGo, { name: 'dashboard' }));
        },

        [authActions.autoSignIn]({ dispatch }) {
            return auth.autoSignIn().then(authUser => {
                if (authUser) {
                    return dispatch(authActions.getUser, authUser)
                }
            })
        },

        [authActions.getUser]({ commit }, authUser) {
            return auth.fetchUserInformation(authUser).then(user => commit(mutations.setUser, user));
        },

        [authActions.signOut]({ commit, dispatch }) {
            return auth.signOut().then(() => {
                commit(mutations.setUser, null);
                dispatch(routerActions.toGo, { name: 'sign-in' });
            })
        }
    },

    mutations: {
        [mutations.setUser](state, user) {
            state.current = user;
        }
    },

    getters: {
        isAuthenticated: ({ current }) => !!current
    }
};
