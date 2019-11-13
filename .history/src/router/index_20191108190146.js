import Vue from 'vue'
import Router from 'vue-router'
import testHome from '@/components/testHome'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueArea from 'vue-area-linkage'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueArea)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testHome',
      component: testHome
    }
  ]
})
