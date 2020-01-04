import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Film from '@/pages/Film'
import Index from '@/pages/Index'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/film/:id',
      name: 'film',
      component: Film
    }
  ]
})