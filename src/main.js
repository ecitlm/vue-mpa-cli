// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'



import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);

import Mint from 'mint-ui';
Vue.use(Mint);

new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
})
