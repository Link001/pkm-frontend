import { authActions } from "./auth-actions";
import { Auth } from "../../firebase/auth";
import {routerActions} from "../../router/router-actions";
import {Storage} from "../../firebase/storage";
import {loaderActions} from "../loader/loader-actions";

const mutations = {
    setUser: "[AUTH] Set User"
};

export const userStore = {
    state: { current: null },

    actions: {
        [authActions.signIn]({ dispatch }, { email, password }) {
            const loaderKey = '[AUTH] Sign In';
            dispatch(loaderActions.addToQueue, loaderKey);

            Auth.instance.signIn(email, password)
                .then(({user: authUser}) => dispatch(authActions.getUser, authUser))
                .then(() => {
                    dispatch(routerActions.toGo, { name: 'dashboard' });
                    dispatch(loaderActions.complete, loaderKey);
                });
        },

        [authActions.autoSignIn]({ dispatch }) {
            return Auth.instance.autoSignIn().then(authUser => {
                if (authUser) {
                    return dispatch(authActions.getUser, authUser)
                }
            })
        },

        [authActions.getUser]({ commit }, authUser) {
            return Auth.instance.fetchUserInformation(authUser)
                .then(user => {
                    Storage.initialize({ user });
                    return commit(mutations.setUser, user)
                });
        },

        [authActions.signOut]({ commit, dispatch }) {
            return Auth.instance.signOut().then(() => {
                Storage.instance.destroy();
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
