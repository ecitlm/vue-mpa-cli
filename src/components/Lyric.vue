<template>
    <div id="lyric">
<!--{{lyric.lyric}}-->
        <ul :style="{ top: top + 'px' }" id="lyriclist">
            <li v-for="(item,index) in newLyric">
                {{item[1]}}
            </li>
        </ul>

    <audio :src="mp3" id="audio" autoplay="autoplay" controls="controls" preload="auto" style="display: none" ></audio>


    </div>
</template>

<script>
    import  axios from 'axios'
    export default{
        data(){
            return {
                lyric :{
                    "lyric": "[00:00.00] 作曲 : 周杰伦\n[00:01.00]"
                },
                newLyric:null,
                mp3:"http://192.168.1.2:302/gbqq.mp3",
                top:200
            }
        },
        created(){

        },
        //keep-alive之后
        activated(){
            this.ajaxLyric();//重新获取一次歌词

            console.info("------------生命周期: activated----------");

        },
        mounted(){
            this. ajaxLyric();

        },
        deactivated: function () {
            console.log("组件更改了了 deactivated")
        },

        methods: {
            //请求歌词接口
            ajaxLyric: function () {
                axios.get(apiurl.getLyric(418603077))
                    .then(function (res) {
                        this.lyric.lyric = (res.data.lrc.lyric);
                        this.newLyric=this.parseLyric(this.lyric.lyric);
                        this.scrollLyrics();
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            //接收歌词转化格式
            parseLyric: function (text) {
                //将文本分隔成一行一行，存入数组
                var lines = text.split('\n'),
                    //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
                    pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
                    //保存最终结果的数组
                    result = [];
                //去掉不含时间的行
                while (!pattern.test(lines[0])) {
                    lines = lines.slice(1);
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
                            _this.top=-i*25;
                            lis[i].className="current";

                        }else{
                        }
                    }
                });
            }
        },
        components: {}
    }
</script>
<style scoped>
    /*lyric*/
    #lyric {
        width:100%;
        height: 150px;
        overflow: hidden;
        color: #fff;
        font-size: 14px;
        overflow: hidden;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        padding:20px 0;
        float: left;
        margin-bottom:10px;
        margin-top:100px;
    }

    #lyric ul {
        position: absolute;
        width:100%;
    }

    #lyric ul li {
        text-align: center;
        height: 25px;
        line-height: 25px;
        color: #333;
    }
    #lyric ul li.current{
        color:  #cb5d5d;
        background: rgba(151,151,145,0.7);
    }
</style>
