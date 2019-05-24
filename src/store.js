import Vue from 'vue'
import Vuex from 'vuex'
import {authStore} from "./components/auth/store";
import {routerStore} from "./router/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { authStore, routerStore }
});
