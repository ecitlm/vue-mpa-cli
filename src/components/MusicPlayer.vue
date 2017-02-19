<template>
    <div id="m-box">
        <div id="m-bg" :style="{backgroundImage: 'url(' + music.pic + ')'}">
            <div>3233</div>
        </div>
        <div class="m-circle">
            <img class="rat-img roation" :src="music.pic"/>
        </div>

        <div id="audio-play">
            <div class="progressbar">
                <div id="current_line" :style="{ width:  currentTime*1000*100/playTime + '%' }"></div>
            </div>
            <audio id="audio" :src="music.url" ></audio>
            <p><i class="fl">{{ currentTime | minutes}}</i><i class="fr">{{playTime/1000 | minutes}}</i></p>
            <h3 class="song-title">{{music.title}}-{{music.author}}</h3>

            <ul class="song-btn">
                <button class="iconfont icon-prev"></button>
                <button :class="{ 'iconfont icon-play' : !isPlaying,'iconfont icon-pause': isPlaying}"
                        @click="togglePlay">
                   <!-- {{isPlaying}}-->
                </button>
                <button class="iconfont icon-next"></button>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from  'axios'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                isPlaying: false,
                currentIndex: 0, // 当前播放的歌曲位置
                currentTime: 0, //当前时间
                durationTime: 0,//总时间
                playTime: 0,
                list: {},
                music: {
                    title: '',
                    author: '',
                    url: 'http://m2.music.126.net/ngNzMkhKrUTvYdxM8LjADQ==/1052232627789700.mp3',
                    pic: 'http://p4.music.126.net/ZyKyS8L5jbZh1w-fgstOCg==/41781441869354.jpg',
                    lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                }
            }
        },
        beforeCreate(){
            console.info("-----------生命周期:beforeCreate----------------");
        },
        created(){
            console.info("-----------生命周期:cereted 实例已创建----------------");
        },
        mounted(){
            this.get();
            this.$emit("music", this.music);
            console.info("---------------生命周期:mounted--------------------");
            this.audioEvent();
        },
        //keep-alive之后
        activated(){
            this.currentTime=0;
            this.get();
            console.info("------------生命周期: activated----------");

        },
        methods: {
            audioEvent: function () {
                var audio = document.querySelector('#audio');
                var _this = this;

                //判断是否加载完 (有个问题:ios浏览器下面audio不会自动播放)
                audio.addEventListener("loadedmetadata", function () {
                    audio.play();
                    _this.isPlaying = true;
                    Indicator.close();
                    console.info("加载完毕，能播放了");
                });

                //获取播放时间
                audio.addEventListener("timeupdate", function () {
                    _this.currentTime = this.currentTime;
                });

                //判断结束
                audio.addEventListener("ended", function () {
                    console.log("播放完");
                    _this.isPlaying = false;
                });


            },
            loading: function () {
                Indicator.open({
                    text: '正在缓冲...',
                    spinnerType: 'fading-circle'
                });
            },
            //播放
            togglePlay: function () {
                var audio = document.querySelector('#audio');
                if (this.isPlaying==false) {
                    audio.play();
                    this.isPlaying = true;
                } else {
                    audio.pause();
                    this.isPlaying = false;
                }
            },
            //上一首
            prev: function () {

            },
            //下一首
            next: function () {

            },

            get: function () {
                var id = this.$route.query.id;
                var _this=this;
                this.loading();
                axios.get(musicApi + id + '&ids=[' + id + ']').then(function (res) {
                    this.list = res.data.songs[0];
                    this.playTime = res.data.songs[0].mMusic.playTime;

                    this.music = {
                        title: this.list.name,
                        author: this.list.artists[0].name,
                        url: this.list.mp3Url,
                        pic: this.list.album.picUrl,
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    };
                    Indicator.close();

                    this.$emit('title', this.music.title);
                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            }
        },
        components: {}
    }
</script>
<style scoped>
    #m-box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        float: left;
        position: relative;
        min-height: 100%;
        _height: 100%;
    }

    #m-bg {
        width: 100%;
        background-repeat: no-repeat;
        position: absolute;
        height: 100%;
        min-height: 100%;
        _height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-size: 100% 100%;
        background-position: center center;
        opacity: 0.5;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
        -webkit-transform-origin: center top;
        -ms-transform-origin: center top;
        transform-origin: center top;
        clear: both;

    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    .roation {
        -webkit-transform: rotate(360deg);
        animation: rotation 10s linear infinite;
        -moz-animation: rotation 10s linear infinite;
        -webkit-animation: rotation 10s linear infinite;
        -o-animation: rotation 10s linear infinite;

    }

    .m-circle {
        opacity: 1;
        z-index: 999;
        width: 210px;
        height: 210px;
        display: block;
        background: url("http://music.163.com/style/mobile/img/share/disc.png");
        padding: 30px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 30%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }

    .m-circle img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 50%;
    }

    /*audio player*/
    #audio-play {
        position: fixed;
        width: 100%;
        left: 0;
        padding: 20px 20px;
        bottom: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: 3px 3px 8px #ddd;
        background: rgba(152, 152, 150, 0.7);
    }

    .progressbar {
        margin-top: 10px;
        width: 100%;
        height: 3px;
        background: #666;
    }

    #current_line {
        height: 3px;
        background: #cb5d5d
    }

    #audio-play p i {
        color: #333;
        font-size: 12px;
    }

    .song-title {
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        padding: 20px 10px;
        color: #262424;
    }

    .song-btn button {
        width: 33.3%;
        display: inline-block;
        margin-left: -4px;
        text-align: center;
        padding: 15px 0;
        background: transparent;
        border: 0;
        outline: none;
        font-size: 30px;
        color: #262424;
    }


</style>
