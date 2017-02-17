<template>

    <div class="headerbar">
        <div id="header">
            <mt-header title="小易163" style="background: #f33">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right" @click.native="show"></mt-button>
            </mt-header>
        </div>

        <mt-popup
                v-model="popupVisible" position="top"
                popup-transition="popup-fade" style="top:40px">
            <ul id="title-list">


                <li>
                    <router-link to="/home" slot="">新闻</router-link>
                </li>
                <li>
                    <router-link to="/video" slot="">视频</router-link>
                </li>
                <li data="">
                    <router-link to="/jokelist" slot="">段子</router-link>
                </li>
                <li data="">
                    <router-link to="/music" slot="">音乐</router-link>
                </li>

                <li>
                    <router-link to="/movie" slot="">电影</router-link>
                </li>

              <li data="T1348648517839">
                <router-link to="/wxlist" slot="">微信精选</router-link>
              </li>

                <li data="T1348648141035">
                    <router-link to="/" slot="">军事</router-link>
                </li>

                <li data="T1348654225495">
                    <router-link to="/" slot="">教育</router-link>
                </li>


                <li data="T1348649145984">
                    <router-link to="/" slot="">NBA</router-link>
                </li>

                <li data="">
                    <router-link to="/" slot="">音乐</router-link>
                </li>
                <li>军事</li>
                <li>视频</li>
                <li>段子</li>
                <li>科技</li>
                <li>跟贴</li>
                <li>教育</li>
                <li>健康</li>
                <li>亲子</li>
                <li>彩票</li>


            </ul>

        </mt-popup>
    </div>


</template>
<style>
    .headerbar {
        width: 100%;
        width: 100%;
        position: relative;
        height: 40px;
    }

    #header {
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 2;
        clear: both;
    }

    #title-list li a {
        color: #666;
    }

    /* #title-list li a.router-link-active{
       color: #666;}*/
</style>
<script>

    export default{
        data(){
            return {
                msg: 'hello vue',
                popupVisible: false
            }
        },
        watch: {
            "$route": "fatched"
        },
        methods: {
            show: function () {
                this.popupVisible = true
            },
            fatched: function () {
                this.popupVisible = false;
            }
        },
        components: {}
    }
</script>
