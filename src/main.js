import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {initializeFirebase} from "./firebase";
import store from './store'

import './styles/index.scss';

initializeFirebase();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('[data-app]');
