// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'




import apiConfig from './api/config.js'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);

//import mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

//import video-player
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)

// 可以在这里配置全局的功能开关（当然也会被局部开关给覆盖），这里非必选
VideoPlayer.config({
  youtube: true,  // default false（youtube的支持）
  switcher: true, // default true（播放源切换功能）
  hls: true       // default true（直播功能的支持）
})

new Vue({
    router,
    apiConfig,
    el: '#app',
    template: '<App/>',
    components: { App }
})
