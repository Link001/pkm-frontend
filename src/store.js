import Vue from 'vue'
import Vuex from 'vuex'
import {authStore} from "./components/auth/store";
import {routerStore} from "./router/store";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: { auth: authStore, router: routerStore }
});
