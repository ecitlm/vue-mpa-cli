/**
 * Created by liuming.
 * @Date:   2017-02-14 15:14
 */

//接口代理API
global.apiProxy = 'https://bird.ioliu.cn/v1?url=http://c.m.163.com/nc/';
global.api = "https://bird.ioliu.cn/v1?url=http://c.m.163.com/";
global.musicApi = "https://bird.ioliu.cn/v1?url=http://music.163.com/api/song/detail/?id=";
global.weixin = "https://bird.ioliu.cn/v1?url=http://v.juhe.cn/weixin/query?key=d046cd1f569ed13d951f0258902ef9b2";

global.jkAPikey = "d046cd1f569ed13d951f0258902ef9b2";

const jsonbird = "https://bird.ioliu.cn/v1?url=";

global.apiurl = {
    WxUrl: function (ps) {
        return (jsonbird + "http://v.juhe.cn/weixin/query?key=" + jkAPikey + "&ps=" + ps);
    },
    PlayingMovie: function (start, count) {
        return (jsonbird + "http://api.douban.com/v2/movie/in_theaters?start=" + start + "&count=" + count);
    },
    MovieDetail: function (id) {
        return (jsonbird + "http://api.douban.com/v2/movie/subject/" + id);

    },
    MusicType: function (id) {
        return ("https://bird.ioliu.cn/netease?playlist_id=" + id);

    },
    photoApi: function (start, count) {
        var url = jsonbird + "http://pic.news.163.com/photocenter/api/list/0031/6LRK0031/" + start + "/" + count + "/index.json";
        return url;
    },
    jokeApi:function (size) {
        var jokeUrl= jsonbird+'http://c.m.163.com/recommend/getChanRecomNews?channel=duanzi&size=' + size;
        return jokeUrl;
    },
    videoType:function () {
        var  vt= jsonbird+"http://c.m.163.com/nc/video/topiclist.html";
        return vt;
    },
    videoTypeData:function (type,start,count) {
        var  vtd= jsonbird+"http://c.m.163.com/nc/video/Tlist/"+type+"/"+start+-"+"+count+".html";
        return vtd;
    }
    
}
