/*
 * @Author: ecitlm 
 * @Date: 2017-06-05 10:44:15 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-06-05 20:25:02
 */
import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.it919.cn/public/index.php/api';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    alert("错误的传参")
    return Promise.reject(error);
});

/**
 * 
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns 
 */

export default {
    //fetchPost  请求方式
    fetchPost: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },


    //GET 请求方式
    fetchGet: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            })
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                });
        })

    }
}


global.bird = "https://bird.ioliu.cn/v1/?url=";

//外网测试环境 api代理
const Proxy = "https://bird.ioliu.cn/v1/?url=";

//定义api 接口
global.apiurl = {


    WxUrl: function (ps) {
        const jkAPikey = "d046cd1f569ed13d951f0258902ef9b2"; //聚合Appkey
        return (Proxy + "http://v.juhe.cn/weixin/query?key=" + jkAPikey + "&ps=" + ps);
    },
    PlayingMovie: function (start, count) {
        return (Proxy + "http://api.douban.com/v2/movie/in_theaters?start=" + start + "&count=" + count);
    },
    MovieDetail: function (id) {
        return (Proxy + "http://api.douban.com/v2/movie/subject/" + id);

    },

    zhihu: function () {
        var zh = Proxy + "https://zhuanlan.zhihu.com/api/columns/wxyyxc1992";
    },
    zhihuDaily: function (day) {
        var zh = Proxy + "http://news.at.zhihu.com/api/4/news/before/" + day;
        return zh;
    },
    zhihuDetail: function (id) {
        var zh = Proxy + "http://news-at.zhihu.com/api/4/news/" + id;
        return zh;
    }
}
