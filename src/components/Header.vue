<template>

    <div class="headerbar">
        <div id="header">
            <mt-header :title="title" style="background: #f33;height: 50px;font-size: 16px;">
                <a slot="left" href="javascript:window.history.go(-1)">
                    <mt-button icon="back" ></mt-button>
                </a>
                <mt-button icon="more" slot="right" @click.native="show"></mt-button>
            </mt-header>
        </div>

        <mt-popup
                v-model="popupVisible" position="top"
                popup-transition="popup-fade" style="top:50px">
            <ul id="title-list">


                <li>
                    <router-link to="/home" slot="">首页</router-link>
                </li>
                <li>
                    <router-link to="/video" slot="">视频</router-link>
                </li>

                <li data="">
                    <router-link to="/musiclist" slot="">音乐</router-link>
                </li>

                <li>
                    <router-link to="/movie" slot="">电影</router-link>
                </li>
                <li>
                    <router-link to="/photo" slot="">美图</router-link>
                </li>
                <li data="">
                    <router-link to="/jokelist" slot="">段子</router-link>
                </li>

                <li data="T1348648517839">
                    <router-link to="/wxlist" slot="">微信精选</router-link>
                </li>
                <li @click="tip">程序猿</li>
                <li @click="tip">科技</li>
                <li @click="tip">教育</li>
                <li @click="tip">健康</li>
                <li @click="tip">亲子</li>



            </ul>

        </mt-popup>
    </div>


</template>
<style>
    .headerbar {
        width: 100%;
        position: relative;
        height: 50px;
        z-index: 999;
    }

    #header {
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 2;
        clear: both;
        height: 50px;
    }

    #title-list li a {
        color: #666;
    }

    #title-list li a.router-link-active {
        color: red;
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
            tip:function () {
                alert("后面再完善上去")

            }
        },
        components: {}
    }
</script>
