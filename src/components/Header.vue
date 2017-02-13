<template>

    <div class="headerbar">
        <div id="header">
            <mt-header title="新闻163" style="background: #f33">
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

              <li>
                <router-link to="/" slot="">NBA</router-link>
              </li>
                <!--<li>社会</li>
                <li>国际</li>
                <li>娱乐</li>
                <li>热点</li>
                <li>教育</li>-->

            </ul>

        </mt-popup>
    </div>


</template>
<style>
    .headerbar{
        width:100%;
        width:100%;
        position: relative;
        height:40px;}
    #header {
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 2;
        clear: both;

    }
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
