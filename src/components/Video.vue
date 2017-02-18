<template>
    <div class="video">
        <section  class="video-item"  v-for="(item,index) in list" @click="pushUrl(index)">
                <div class="v-poster" >
                    <img :src="item.cover">
                </div>
                <div class="v-mask">
                    <div class="v-head">
                        <div class="v-play"></div>
                        <div class="v-title">{{item.title}}</div>
                    </div>
                </div>
        </section>
    </div>
</template>
<style>

</style>
<script>
    import axios from  'axios'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                list: {}
            }
        },
        created(){
            this.$emit('title', '热门视频');
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.get();
        },
        methods: {
            get: function () {
                axios.get(apiProxy + 'video/home/10-20.html').then(function (res) {
                    console.log(res.data.videoList);
                    this.list = res.data.videoList;
                    Indicator.close();

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            },
            pushUrl:function (index) {
                sessionStorage.setItem("videodetail",JSON.stringify(this.list[index]));
                this.$router.push({path:'/player'});
            }
        }
    }
</script>
