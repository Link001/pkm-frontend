import Vue from 'vue'
import Router from 'vue-router'
import {appRoutes} from "./app-routes";

Vue.use(Router);

export const router = new Router({routes: appRoutes});
