import Vue from 'vue';
import Router from 'vue-router';
import Sounds from '@/components/Sounds';
import Lights from '@/components/Lights';
import Activity from '@/components/Activity';
import About from '@/components/About';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/sounds',
      name: 'Sounds',
      component: Sounds
    },
    {
      path: '/lights',
      name: 'LightGet',
      component: Lights
    },
    {
      path: '/lights/:id',
      name: 'LightSet',
      component: Lights
    },
    {
      path: '/activity/:name',
      name: 'activity',
      component: Activity
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});