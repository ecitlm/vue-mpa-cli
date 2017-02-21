/**
 * Created by liuming.
 * @Date:   2017-02-14 15:14
 */

//接口代理API
global.apiProxy = 'https://bird.ioliu.cn/v1?url=http://c.m.163.com/nc/';
global.api = "https://bird.ioliu.cn/v1?url=http://c.m.163.com/";

global.weixin = "https://bird.ioliu.cn/v1?url=http://v.juhe.cn/weixin/query?key=d046cd1f569ed13d951f0258902ef9b2";

global.jkAPikey = "d046cd1f569ed13d951f0258902ef9b2"; //聚合Appkey

//const Proxy = "http://192.168.1.2:7788/?apiProxy=";//内网api代理

//外网测试环境 api代理
const Proxy = "http://120.77.252.160:8081/get.php?apiProxy=";


//定义api 接口
global.apiurl = {
    WxUrl: function (ps) {
        return (Proxy + "http://v.juhe.cn/weixin/query?key=" + jkAPikey + "&ps=" + ps);
    },
    PlayingMovie: function (start, count) {
        return (Proxy + "http://api.douban.com/v2/movie/in_theaters?start=" + start + "&count=" + count);
    },
    MovieDetail: function (id) {
        return (Proxy + "http://api.douban.com/v2/movie/subject/" + id);

    },
    MusicType: function (id) {
        return ("https://bird.ioliu.cn/netease?playlist_id=" + id);
    },
    photoApi: function (start, count) {
        var url = Proxy+"http://image.baidu.com/channel/listjson?pn="+start+"&rn="+count+"&tag1=%E7%BE%8E%E5%A5%B3";
        return url;
    },
    jokeApi: function (size) {
        var jokeUrl = Proxy + 'http://c.m.163.com/recommend/getChanRecomNews?channel=duanzi&size=' + size;
        return jokeUrl;
    },

    videoTypeData: function (type, start, count) {
        var vtd = Proxy + "http://c.m.163.com/nc/video/Tlist/" + type + "/" + start + -"+" + count + ".html";
        return vtd;
    },
    videoType: function () {
        var vt = Proxy + "http://c.m.163.com/nc/video/topiclist.html";
        return vt;
    },
    musicApi: function (id) {
        var m = Proxy + "http://music.163.com/api/song/detail/?id=" + id + "&ids=[" + id + "]";
        return m;

    },
    getLyric: function (id) {
        var lyric = Proxy + "http://music.163.com/api/song/lyric?id=" + id + "&lv=-1";
        return lyric;
    },
    zhihu:function () {
        var zh= Proxy +"https://zhuanlan.zhihu.com/api/columns/wxyyxc1992";
    }
}
