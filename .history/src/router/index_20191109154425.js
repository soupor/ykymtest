import Vue from 'vue'
import Router from 'vue-router'
import testHome from '@/components/testHome'
import planList from '@/components/planList'
import planDetail from '@/components/planDetail'
import planOptionList from '@/components/planOptionList'
import planOptionDetail from '@/components/planOptionDetail'
import memberList from '@/components/memberList'
import memberLDetail from '@/components/memberLDetail'


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
    {
      path: '/planOptionList',
      name: 'planOptionList',
      component: planOptionList
    },
    {
      path: '/planOptionDetail',
      name: 'planOptionDetail',
      component: planOptionDetail
    },
    {
      path: '/memberList',
      name: 'memberList',
      component: memberList
    },
    {
      path: '/memberLDetail',
      name: 'memberLDetail',
      component: memberLDetail
    },

  ]
})
