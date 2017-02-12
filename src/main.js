// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
