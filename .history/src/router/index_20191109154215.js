import Vue from 'vue'
import Router from 'vue-router'
import testHome from '@/components/testHome'
import planList from '@/components/planList'
import planDetail from '@/components/planDetail'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'testHome',
      component: testHome
    },
    {
      path: '/planList',
      name: 'planList',
      component: planList
    },
    {
      path: '/planDetail',
      name: 'planDetail',
      component: planDetail
    },

  ]
})
