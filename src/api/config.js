/**
 * Created by liuming.
 * @Date:   2017-02-14 15:14
 */

//接口代理API
global.apiProxy = 'https://bird.ioliu.cn/v1?url=http://c.m.163.com/nc/';
global.api="https://bird.ioliu.cn/v1?url=http://c.m.163.com/";
global.birdapi="https://bird.ioliu.cn/netease?playlist_id="
global.musicApi="https://bird.ioliu.cn/v1?url=http://music.163.com/api/song/detail/?id=";
global.weixin="https://bird.ioliu.cn/v1?url=http://v.juhe.cn/weixin/query?key=d046cd1f569ed13d951f0258902ef9b2";

global.jkAPikey="d046cd1f569ed13d951f0258902ef9b2";

var jsonbird="https://bird.ioliu.cn/v1?url=";

global.apiurl={
    WxUrl:function (ps) {
        var wx=jsonbird+"http://v.juhe.cn/weixin/query?key="+jkAPikey+"&ps="+ps;
        return  wx;
    },
    PlayingMovie:function (start,count) {
        var movie= jsonbird+"http://api.douban.com/v2/movie/in_theaters?start="+start+"&count="+count;
        return movie;
    }

}
