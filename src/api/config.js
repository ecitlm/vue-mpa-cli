/**
 * Created by ecitlm.
 * @Date:   2017-02-14 15:14
 */
// 内网api代理
const Proxy = "http://192.168.1.2:7788/?apiProxy=";

global.bird="https://bird.ioliu.cn/v1/?url=";

//外网测试环境 api代理
//const Proxy = "http://120.77.252.160:8081/get.php?apiProxy=";

//定义api 接口
global.apiurl = {
    indexBanner: function () {
       var banner= Proxy+"http://c.m.163.com/nc/article/headline/T1348648037603/0-10.html";
       return banner;
    },
    indexNews:function (count) {
        var news=Proxy+"http://c.m.163.com/nc/article/headline/list/0"+"-"+count+".html?from=toutiao&passport=&devId";
        return news
    },
    Article:function (id) {
        var art=Proxy+'http://c.m.163.com/nc/article/' + id + '/full.html';
        return art;

    },
    video:function () {
        var v=Proxy+'http://c.3g.163.com/nc/video/home/0-20.html';
        return v

    },
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
    MusicType: function (id) {
        return ("https://bird.ioliu.cn/netease?playlist_id=" + id);
    },
    photoApi: function (start, count) {
        var url = Proxy + "http://image.baidu.com/channel/listjson?pn=" + start + "&rn=" + count + "&tag1=%E7%BE%8E%E5%A5%B3";
        return url;
    },
    ViewP:function (start,count) {
        var VP=Proxy+"http://gank.io/api/data/%E7%A6%8F%E5%88%A9/"+count+"/"+start;
        return VP;
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
    videList:function () {
        var v= Proxy+"http://c.m.163.com/nc/video/home/0-20.html";
        return v;

    },
    musicApi: function (id) {
        var m = Proxy + "http://music.163.com/api/song/detail/?id=" + id + "&ids=[" + id + "]";
        return m;

    },
    getLyric: function (id) {
        var lyric = Proxy + "http://music.163.com/api/song/lyric?id=" + id + "&lv=-1";
        return lyric;
    },
    zhihu: function () {
        var zh = Proxy + "https://zhuanlan.zhihu.com/api/columns/wxyyxc1992";
    }
}
