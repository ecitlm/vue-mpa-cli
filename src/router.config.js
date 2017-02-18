/**
 * Created by Administrator on 2016/12/24.
 */
import Home from './components/Home.vue'
import Video  from './components/Video.vue'
import Article  from './components/Article.vue'
import videoplayer  from './components/VideoPlayer.vue'
import JokeList  from './components/JokeList.vue'
import musiclist  from './components/MusicList.vue'
import music  from './components/music.vue'
import musicplayer  from './components/MusicPlayer.vue'
import wxlist  from './components/WxList.vue'
import wxarticle  from './components/WxArticle.vue'
import movie  from './components/movie.vue'
import moviedetial from './components/MovieDetail.vue'
import photo from './components/photo.vue'
import view from './components/PhotoView.vue'
export default{
    //mode: 'history',
    routes: [
        {path: '/home', component: Home},
        {path: '/video', component: Video},
        {path: '/article', component: Article},
        {path: '/player', component: videoplayer},
        {path: '/jokelist', component: JokeList},
        {path: '/musiclist', component: musiclist},
        {path: '/music', component: music},
        {path: '/musicplayer', component: musicplayer},
        {path: '/wxlist', component: wxlist},
        {path: '/wxarticle', component: wxarticle},
        {path: '/movie', component: movie},
        {path: '/moviedetial', component: moviedetial},
        {path: '/photo', component: photo},
        {path: '/view', component: view},
        {path: '*', redirect: '/photo'}
    ]
}
