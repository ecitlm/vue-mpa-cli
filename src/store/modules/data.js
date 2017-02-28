/**
 * User: ecitlm@163.com
 * Date: Created  on 2017/2/25 15:49.
 */
import axios from 'axios'
import * as types from '../mutation-types.js'

const API = "https://bird.ioliu.cn/v1/?url=";
const PROXY = "http://localhost:301/index.php/API";

const state = {
    BannerListRoot: [],
    BannerList: {},
    IndexNewsList: {},
    SportList: {},
    UserName: 'ecitlm',
    Email: 'ecitlm@163.com',
    LoginInfo: {},
    token: ""
}


const getters = {
    [types.DONE_INDEX_BANNER_ROOT]: state => {
        return state.BannerListRoot
    },
    [types.DONE_INDEX_BANNER]: state => {
        return state.BannerList
    },
    [types.DONE_INDEX_NEWS]: state => {
        return state.IndexNewsList
    },
    [types.DONE_SPORT_LIST]: state => {
        return state.SportList
    },
    [types.DONE_Login]: state => {
        return state.token
    }
}

const mutations = {
    [types.TOGGLE_INDEX_BANNER](state, all) {
        state.BannerListRoot.push(all)
        state.BannerList = all
    },
    [types.TOGGLE_INDEX_NEWS](state, all) {
        state.IndexNewsList = all
    },
    [types.TOGGLE_SPORT_LIST](state, all) {
        state.SportList = all
    },
    [types.TOGGLE_Login](state, all) {
        if (all.code == 1) {
            state.token = all.data.token;
            //localStorage.setItem("token",all.data.token)
        }
        state.LoginInfo = all;
    }
}

const actions = {
    // 获取首页banner
    [types.FECTH_INDEX_BANNER]({commit}) {
        axios.get(API + 'http://c.m.163.com/nc/article/headline/list/0-5.html?from=toutiao&passport=&devId')
            .then(res => {
                console.log(res.data);
                commit(types.TOGGLE_INDEX_BANNER, res.data.list[0].ads)
            }).catch(err => console.log(err))
    },
    // 获取首页新闻列表
    [types.FECTH_INDEX_NEWS]({commit}) {
        axios.get(API + 'http://c.m.163.com/nc/article/headline/T1348648037603/0-10.html')
            .then(res => {
                commit(types.TOGGLE_INDEX_NEWS, res.data.T1348648037603)
            }).catch(err => console.log(err))
    },
    // 获取体育列表
    [types.FECTH_SPORT_LIST]({commit}) {
        axios.get(API + 'http://c.m.163.com/nc/article/list/T1348649145984/0-20.html')
            .then(res => {
                console.log(res.data)
                commit(types.TOGGLE_SPORT_LIST, res.data.T1348649145984)
            }).catch(err => console.log(err))
    },
    // 登录
    [types.FECTH_Login]({commit}, info) {
        var params = new URLSearchParams();
        params.append('username', info.username);
        params.append('password', info.password);

        axios.post("http://h5.it919.cn/index.php/?c=api&a=index", params)
            .then(function (res) {
                console.log(res.data.msg)
                commit(types.TOGGLE_Login, res.data);
            })
            .catch(function (error) {
                console.log(error);
                alert(error)
            });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
