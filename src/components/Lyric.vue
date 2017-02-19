<template>
    <div id="lyric">

        <ul :style="{ top: top + 'px' }" id="lyriclist">
            <li v-for="(item,index) in newLyric">
                {{item[1]}}
            </li>
        </ul>

    <audio :src="mp3" id="audio" autoplay="autoplay" controls="controls" preload="auto" style="display: none" ></audio>


    </div>
</template>
<style>
    #lyric {
        width:100%;
        height: 200px;
        overflow: hidden;
        color: #fff;
        font-size: 16px;
        overflow: hidden;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        padding:30px 0;
        float: left;
    }

    #lyric ul {
        position: absolute;
        width:100%;
        margin-top:30px;
    }

    #lyric ul li {
        text-align: center;
        height: 28px;
        line-height: 28px;
        color: #333;
    }
    #lyric ul li.current{
        color:  red;
        background: rgba(151,151,145,0.7);
    }
</style>

<script>

    export default{
        data(){
            return {
                lyric :{
                    "lyric": "[00:00.00] 作曲 : 周杰伦\n[00:01.00] 作词 : 方文山\n[00:23.69]塞纳河畔  左岸的咖啡\n[00:26.03]我手一杯  品尝你的美\n[00:28.97]留下唇印的嘴\n[00:32.48]\n[00:34.39]花店玫瑰  名字写错谁\n[00:36.86]告白气球  风吹到对街\n[00:39.60]微笑在天上飞\n[00:42.71]\n[00:43.90]你说你有点难追  想让我知难而退\n[00:49.33]礼物不需挑最贵  只要香榭的落叶\n[00:54.63]喔～营造浪漫的约会  不害怕搞砸一切\n[00:59.92]拥有你就拥有  全世界\n[01:03.95]\n[01:04.91]亲爱的  爱上你  从那天起\n[01:11.31]甜蜜的很轻易\n[01:15.60]亲爱的  别任性  你的眼睛\n[01:21.93]在说我愿意\n[01:25.25]\n[01:48.78]塞纳河畔  左岸的咖啡\n[01:51.47]我手一杯  品尝你的美\n[01:54.76]留下唇印的嘴\n[01:57.51]\n[01:59.62]花店玫瑰  名字写错谁\n[02:02.21]告白气球  风吹到对街\n[02:04.79]微笑在天上飞\n[02:07.91]\n[02:09.53]你说你有点难追  想让我知难而退\n[02:14.55]礼物不需挑最贵  只要香榭的落叶\n[02:19.85]喔～营造浪漫的约会  不害怕搞砸一切\n[02:25.17]拥有你就拥有  全世界\n[02:29.12]\n[02:30.18]亲爱的  爱上你  从那天起\n[02:36.60]甜蜜的很轻易\n[02:40.95]亲爱的  别任性  你的眼睛\n[02:47.23]在说我愿意\n[02:50.44]\n[02:51.63]亲爱的  爱上你  恋爱日记\n[02:57.88]飘香水的回忆\n[03:02.21]一整瓶  的梦境  全都有你\n[03:08.50]搅拌在一起\n[03:12.07]\n[03:12.93]亲爱的别任性  你的眼睛\n[03:21.30]在说我愿意\n[03:28.54]\n"
                },
                newLyric:null,
                mp3:"http://code.it919.cn/gbqq.mp3",
                top:200
            }
        },
        created(){
            this.newLyric=this.parseLyric(this.lyric.lyric);

        },
        mounted(){
            this.scrollLyrics();
        },
        methods: {
            load:function () {
                this.scrollLyrics();
            },
            //歌词接受
            parseLyric: function (text) {
                //将文本分隔成一行一行，存入数组
                var lines = text.split('\n'),
                    //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
                    pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
                    //保存最终结果的数组
                    result = [];
                //去掉不含时间的行
                while (!pattern.test(lines[0])) {
                    lineslines = lines.slice(1);
                }
                //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
                lines[lines.length - 1].length === 0 && lines.pop();
                lines.forEach(function (v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
                    //提取出时间[xx:xx.xx]
                    var time = v.match(pattern),
                        //提取歌词
                        value = v.replace(pattern, '');
                    //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
                    time.forEach(function (v1, i1, a1) {
                        //去掉时间里的中括号得到xx:xx.xx
                        var t = v1.slice(1, -1).split(':');
                        //将结果压入最终数组
                        result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
                    });
                });
                //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
                result.sort(function (a, b) {
                    return a[0] - b[0];
                });

                return result;
            },
            scrollLyrics:function () {
                var audio = document.querySelector('#audio');
                var uls=document.getElementById("lyriclist");
                var lis=uls.getElementsByTagName("li");
                var _this = this;

                audio.addEventListener("timeupdate", function () {
                    for (var i = 0, l =  _this.newLyric.length; i < l; i++) {
                        if (this.currentTime  >  _this.newLyric[i][0]) {

                            _this.top=-i*28-28;
                            lis[i+1].className="current";

                         //   uls.
                           /* $('#gc ul').css('top', -i * 40 + 200 + 'px'); //让歌词向上移动
                            $('#gc ul li').css('color', 'green');
                            $('#gc ul li:nth-child(' + (i + 1) + ')').css('color', 'red'); //高亮显示当前播放的哪一句歌词*/
                        }
                    }

                });
                
            }


        },
        components: {}
    }
</script>
<style>

</style>
