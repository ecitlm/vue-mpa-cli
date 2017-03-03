// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'
import 'animate.css'
import api from './api/config.js'
import router from './router/router.config.js'
import store from './store/index.js'


import Mint from 'mint-ui';
Vue.use(Mint);

Vue.filter("minutes", function (value) {
    //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return (Math.floor(value / 60) + ":" + Math.floor(value % 60));
});

Vue.filter('time', function (value) {
    return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})

new Vue({
    router,
    api,
    store,
    el: '#app',
    template: '<App/>',
    components: {
        App,
    }
})
