import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/view/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    }
  ]
})
