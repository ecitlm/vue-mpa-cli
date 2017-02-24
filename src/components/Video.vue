<template>
    <div class="video">
        <ul class="type-list">
            <li v-for="item in typelist" :id="item.tid">{{item.tname}}</li>
        </ul>
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
.type-list{
    padding:10px 0;

}
    .type-list li{
        padding:3px 15px;
        display: inline-block;
    }
</style>
<script>
    import axios from  'axios'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                list: {},
                typelist:{},
                start:0,
                count:10,
                type:"T1457068979049"
            }
        },
        created(){
            this.$emit('title', '热门视频');
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });

            this.get();
            //this.videotype();
           //this.getTypeData();
        },
        activated(){
        },
        methods: {
            videotype:function () {
                axios.get(apiurl.videoType()).then(function (res) {
                    console.log(res.data);
                    this.typelist = res.data;
                   // Indicator.close();

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            },
            getTypeData:function () {
                axios.get(apiurl.videoTypeData(this.type,0,10)).then(function (res) {
                   console.log(res.data[this.type]);
                    // Indicator.close();
                }.bind(this)).catch(function (error) {
                    console.log(error)
                });
            },
            get: function () {
                axios.get(apiurl.videList()).then(function (res) {
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
