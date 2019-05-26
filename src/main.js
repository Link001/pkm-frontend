import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import { router } from './router'
import { store } from './store'
import './firebase';

import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('[data-app]');
