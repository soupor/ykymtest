import Vue from 'vue'
import Router from 'vue-router'
import testHome from '@/components/testHome'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testHome',
      component: testHome
    }
  ]
})
