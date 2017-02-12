import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/Home'

Vue.use(Router)

export default new Router({
  routes: [

    {path: '/', name: 'home', component: Home},
    {path: '/', name: 'Hello', component: Hello},
    {path: '*', redirect: '/home'}
  ]
})
