/**
 * Created by Administrator on 2016/12/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from '../store/index'
import Home from '../components/Home.vue'
import Video from '../components/Video.vue'
import Article from '../components/Article.vue'
import videoplayer from '../components/VideoPlayer.vue'
import JokeList from '../components/JokeList.vue'
import musiclist from '../components/MusicList.vue'
import music from '../components/music.vue'
import musicplayer from '../components/MusicPlayer.vue'
import wxlist from '../components/WxList.vue'
import wxarticle from '../components/WxArticle.vue'
import movie from '../components/movie.vue'
import moviedetial from '../components/MovieDetail.vue'
import photo from '../components/photo.vue'
import view from '../components/PhotoView.vue'
import lyric from '../components/Lyric.vue'
import coding from '../components/Coding.vue'
import zhihu from '../components/Zhihu.vue'
import sport from '../components/Sport.vue'
import zhihuarticle from '../components/zhihuArticle.vue'
import login from '../components/User/Login.vue'


const routes = [
    { path: '/home', component: Home },
    { path: '/video', component: Video },
    { path: '/article', component: Article },
    { path: '/player', component: videoplayer },
    { path: '/jokelist', component: JokeList },
    { path: '/musiclist', component: musiclist },
    { path: '/music', component: music },
    { path: '/musicplayer', component: musicplayer },
    { path: '/wxlist', component: wxlist },
    { path: '/wxarticle', component: wxarticle },
    { path: '/movie', component: movie },
    { path: '/moviedetial', component: moviedetial },
    { path: '/photo', component: photo },
    { path: '/view', component: view },
    { path: '/lyric', component: lyric },
    { path: '/coding', component: coding },
    { path: '/sport', component: sport },
    { path: '/zhihu', component: zhihu },
    { path: '/zhihuarticle', component: zhihuarticle },
    {
        path: '/login',
        meta: {
            requireAuth: false,
        },
        component: login
    },
    { path: '*', redirect: '/home' }
]

const router = new VueRouter({
    // mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.data.token) {
        next();
    } else {
        next();
        /* console.log("你还没有登录啦")
         if (to.meta.requireAuth==false) {
             next();
         }else {
             next({ path: '/login' })
         }*/

    }
})

export default router;