import Vue from 'vue'
import Router from 'vue-router'
import AboutSubject from './components/AboutSubject';
import AboutPrograms from "./components/about-programs/AboutPrograms";

Vue.use(Router);

export default new Router({
  routes: [
      {
          name: 'about-subject',
          path: '/about-subject',
          component: AboutSubject
      },
      {
          path: '/about-programs',
          component: AboutPrograms,
          name: 'about-programs'
      }
  ]
});
