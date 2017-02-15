/**
 * Created by Administrator on 2016/12/24.
 */


import Home from './components/Home.vue'
import Video  from './components/Video.vue'
import Article  from './components/Article.vue'
import videoplayer  from './components/VideoPlayer.vue'
import JokeList  from './components/JokeList.vue'


export default{
    //mode: 'history',
    routes: [
        {path: '/home', component: Home},
        {path: '/video', component: Video},
        {path: '/article', component: Article},
        {path: '/player', component: videoplayer},
        {path: '/jokelist', component: JokeList},
        {path: '*', redirect: '/home'}
    ]
}
