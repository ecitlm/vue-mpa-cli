<template>

    <div class="headerbar">
        <div id="header">
            <mt-header :title="title" style="background: #f33;height: 50px;font-size: 16px;max-width:750px">
                <a slot="left" href="javascript:window.history.go(-1)">
                    <mt-button icon="back"></mt-button>
                </a>
                <mt-button icon="more" slot="right" @click.native="show"></mt-button>
            </mt-header>
        </div>

        <mt-popup
                v-model="popupVisible" position="top"
                popup-transition="popup-fade" style="top:50px">
            <ul id="title-list">
                <li>
                    <router-link to="/home" slot="">
                        <i class="iconfont icon-home"></i>
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/video" slot="">
                        <i class="iconfont icon-video"></i>
                        视频
                    </router-link>
                </li>

                <li data="">
                    <router-link to="/musiclist" slot="">
                        <i class="iconfont icon-music"></i>
                        音乐
                    </router-link>
                </li>

                <li>
                    <router-link to="/movie" slot="">
                        <i class="iconfont icon-player"></i>
                        电影
                    </router-link>
                </li>
                <li>
                    <router-link to="/photo" slot="">
                        <i class="iconfont icon-meinv"></i>
                        美图
                    </router-link>
                </li>
                <li data="">
                    <router-link to="/jokelist" slot="">
                        <i class="iconfont icon-duanzi"></i>
                        段子
                    </router-link>
                </li>

                <li data="T1348648517839">
                    <router-link to="/wxlist" slot="">
                        <i class="iconfont icon-wx"></i>
                        微信精选
                    </router-link>
                </li>

                <li data="T1348648517839">
                    <router-link to="/sport" slot="">
                        <i class="iconfont icon-sport"></i>
                        体育
                    </router-link>
                </li>
                <li data="T1348648517839">
                    <router-link to="#" slot="">
                        <i class="iconfont icon-edu"></i>
                        教育
                    </router-link>
                </li>

                <li data="T1348648517839">
                    <router-link to="#" slot="">
                        <i class="iconfont icon-code"></i>
                        IT科技
                    </router-link>
                </li>


            </ul>

        </mt-popup>
    </div>


</template>
<style scoped>
    .headerbar {
        width: 100%;
        position: relative;
        height: 50px;
        z-index: 999;
        max-width: 750px;
        margin: 0 auto;
    }

    #header {
        margin: 0;
        padding: 0;
        position: fixed;
        width: 100%;
        z-index: 2;
        clear: both;
        height: 50px;
        margin: 0 auto;
    }

    #title-list {
        max-width: 750px;
        margin: 0 auto;
        width: 100%;
    }

    #title-list li a {
        color: #666;
        font-size: 14px;
    }

    #title-list li a.router-link-active {
        color: red;
    }

    #title-list li i {
        display: block;
        font-size: 30px;
    }
</style>
<script>

    export default{
        props: ["title"],
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
            },
            tip: function () {
                alert("后面再完善上去")

            }
        },
        components: {}
    }
</script>
