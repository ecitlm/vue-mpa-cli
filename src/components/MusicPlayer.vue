<template>
    <div id="m-box">
<div class="bg-img" ></div>
        <div id="m-bg" :style="{backgroundImage: 'url(' + songs.pic + ')'}" >
        </div>
        <div class="m-circle" @click="clickPlay">
            <img class="rat-img" :src="songs.pic"/>
        </div>
        <div id="audio-play">
            <a-player :music="songs" ref="player"></a-player>
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
                songs: {
                    title: '回雪月花',
                    author: '小倉唯',
                    url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
                    pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg',
                    lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                },
                theme: "#f33",
                mutex: true
            }
        },
        created(){
            this.get();
        },
        activated(){
            this.get();
            this.loading();
        },
        methods: {
            loading: function () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
            },
            clickPlay:function () {
                let aplayer = this.$refs.player.control;
                aplayer.pause();
            },
            get: function () {
                var id = this.$route.query.id;
                this.loading();
                axios.get(musicApi + id + '&ids=[' + id + ']').then(function (res) {
                    this.list = res.data.songs[0];
                    this.songs = {
                        title: this.list.name,
                        author: this.list.artists[0].name,
                        url: this.list.mp3Url,
                        pic: this.list.album.picUrl,
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    };

                    this.$emit("songs", this.songs);

                    Indicator.close();

                    let aplayer = this.$refs.player.control;
                    aplayer.play();
                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            }
        },
        watch: {
            songs: {
                handler: function (val, oldVal) {
                    console.log(JSON.stringify(val))
                    this.$emit("songs", val);
                    let aplayer = this.$refs.player.control;
                    aplayer.play();
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
        _height:100%;
    }

    #m-bg {
        width: 100%;
        background-repeat: no-repeat;

        position: absolute;
        height:100%;
        min-height: 100%;
        _height:100%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-size:100% 100%;
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
.bg-img{
    height:100%;
    width:100%;
}
    .m-circle {
        opacity: 1;
        z-index: 999;
        width: 210px;
        height: 210px;
        display: block;

        background: url("http://music.163.com/style/mobile/img/share/disc.png");
        background: #000;
        padding: 30px;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;;
        border-radius: 50%;
        margin:0 auto;
        margin-top:40%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .m-circle img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 50%;
        -webkit-animation: run 6s linear 0s infinite;
    }

    @-webkit-keyframes run {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
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