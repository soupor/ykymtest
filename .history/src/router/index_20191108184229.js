import Vue from 'vue'
import Router from 'vue-router'
import testHome from '@/components/testHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testHome',
      component: testHome
    }
  ]
})
