/*
 * @Author: ecitlm 
 * @Date: 2017-02-25 15:49 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-06-05 15:35:56
 */

import axios from 'axios'
import * as types from '../mutation-types.js'
import api from '../../../src/api/api.js'
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
            api.banner()
            .then(res => {
                commit(types.TOGGLE_INDEX_BANNER, res.ads)
            }).catch(err => console.log(err))
           

    },
    // 获取首页新闻列表
    [types.FECTH_INDEX_NEWS]({commit}) {
        var data={
            page:20,
            type:0
        }
        api.new_list(data)
            .then(res => {
                commit(types.TOGGLE_INDEX_NEWS, res.data)
            }).catch(err => console.log(err))
    },
    // 获取体育列表
    [types.FECTH_SPORT_LIST]({commit}) {
        //axios.get(API + 'http://c.m.163.com/nc/article/list/T1348649145984/0-20.html')
        var data={
            page:0,
            type:3
        }
        api.new_list(data)
            .then(res => {
                commit(types.TOGGLE_SPORT_LIST, res.data)
            }).catch(err => console.log(err))
    },
    // 登录
    [types.FECTH_Login]({commit}, info) {
        var params = new URLSearchParams();
        params.append('username', info.username);
        params.append('password', info.password);

        axios.post("http://h5.it919.cn/index.php?c=api&a=index", params)
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
