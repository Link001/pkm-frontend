import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { router } from './router'
import {initializeFirebase} from "./firebase";
import store from './store'

import './styles/index.scss';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

initializeFirebase();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('[data-app]');
