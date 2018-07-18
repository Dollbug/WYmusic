// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import normalize from 'normalize.css'//css reset
import './assets/iconfont/iconfont.css'//阿里图标
import store from './vuex/store'//导入vuex状态配置


Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
