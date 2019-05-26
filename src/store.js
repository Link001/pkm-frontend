import Vue from 'vue'
import Vuex from 'vuex'
import {userStore} from "./components/auth/store";
import {routerStore} from "./router/store";
import {labsStore} from "./components/dashboard/labs/store";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user: userStore,
        router: routerStore,
        labs: labsStore
    }
});
