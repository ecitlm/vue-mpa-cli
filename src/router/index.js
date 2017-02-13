/**
 * Created by Administrator on 2016/12/24.
 */


import Home from './components/Home.vue'
import Video  from './components/Video.vue'



export default{
    //mode: 'history',
    routes: [
        {path: '/home', component: Home},
        {path: '/video', component: Video},

        {path: '*', redirect: '/video'}
    ]
}
