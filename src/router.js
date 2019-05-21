import Vue from 'vue'
import Router from 'vue-router'
import AboutSubject from './components/AboutSubject';

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/about-subject',
          component: AboutSubject
      },
  ]
});
