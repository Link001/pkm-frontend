import Vue from 'vue'
import Vuex from 'vuex'
import {userStore} from "./components/auth/store";
import {routerStore} from "./router/store";
import {labsStore} from "./components/dashboard/labs/store";
import {loaderStore} from "./components/loader/store";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user: userStore,
        router: routerStore,
        labs: labsStore,
        loader: loaderStore
    }
});
