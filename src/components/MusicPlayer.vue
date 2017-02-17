<template>
    <div id="m-box">
        <div id="m-bg" :style="{backgroundImage: 'url(' + music.pic + ')'}">
            <div>3233</div>
        </div>
        <div class="m-circle" @click="clickPlay">
            <img class="rat-img roation" :src="music.pic"/>
        </div>

        <div id="audio-play">
            <a-player :music="music" ref="player">
            </a-player>
        </div>
    </div>
</template>
<script>
    import VueAplayer from 'vue-aplayer'
    import axios from  'axios'
    import {Indicator} from 'mint-ui'

    export default{
        data(){
            return {
                list: {},
                narrow: true,
                autoplay: true,
                mutex: true,//暂停其他播放
                preload: 'metadata',
                music: {
                    title: '下一站天后',
                    author: 'Twins',
                    url: 'http://m2.music.126.net/ngNzMkhKrUTvYdxM8LjADQ==/1052232627789700.mp3',
                    pic: 'http://p4.music.126.net/ZyKyS8L5jbZh1w-fgstOCg==/41781441869354.jpg',
                    lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                }
            }
        },
        created(){
            this.get();

            console.log("组件Cretated")
        },
        activated(){
            this.get();
            this.loading();
            console.log(JSON.stringify(this.music));
            this.$emit("music", this.music);
            console.log("组件激活 activity");
        },
        updated(){
            this.$emit("music", this.music);
            console.log("组件更新了1")
        },
        methods: {
            loading: function () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
            },
            clickPlay: function () {
                let aplayer = this.$refs.player.control;
                aplayer.pause();
            },
            get: function () {
                var id = this.$route.query.id;
                this.loading();
                axios.get(musicApi + id + '&ids=[' + id + ']').then(function (res) {
                    this.list = res.data.songs[0];
                    this.music = {
                        title: this.list.name,
                        author: this.list.artists[0].name,
                        url: this.list.mp3Url,
                        pic: this.list.album.picUrl,
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    };
                    Indicator.close();
                    this.$emit("music", this.music);
                    this.$emit('title',this.music.title);

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            }
        },
        watch: {
            music: {
                handler: function (val, oldVal) {
                    console.log(JSON.stringify(val));
                    this.$emit("music", val);
                },
                deep: true
            }
        },
        components: {
            'a-player': VueAplayer
        }
    }
</script>
<style>
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
        margin-top: 40%;
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

    #audio-play {
        position: fixed;
        width: 100%;
        bottom: 5px;
        left: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: 3px 3px 8px #ddd;
    }

    #audio-play .aplayer {
        margin: 0;
        background: #fefefe;
    }

</style>
