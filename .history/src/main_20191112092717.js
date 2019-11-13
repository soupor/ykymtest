// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueArea from 'vue-area-linkage'
import axios from 'axios'


Vue.use(ElementUI)
Vue.use(VueArea)

var instance = axios.create({
  baseURL: 'http://127.0.0.1:7000/',
  timeout: 1000,
  headers: {"Content-Type": "multipart/form-data"}
})

Vue.config.productionTip = false
Vue.prototype.instance = instance;





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
