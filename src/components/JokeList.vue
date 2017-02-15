<template>
    <div id="joke_wrap">
  <!--      <li v-for="item in list">
           {{item.digest}}
        </li>-->

        <mt-loadmore  :bottom-method="loadBottom"  ref="loadmore">

                <li v-for="item in list">{{ item.digest }}</li>

        </mt-loadmore>



    </div>
</template>
<style>
#joke_wrap{
    width:100%;
    background: #f6f6f6;
}
#joke_wrap li{
    padding:10px 15px;
    box-shadow: 3px 3px 8px #ddd;
    background: #fff;
    margin-bottom:10px;
    margin-top:5px;
    font-size:14px;
}
</style>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    import { Loadmore } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return{
                msg:'hello vue',
                list:{},
                size:10
            }
        },
        created(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.get();
        },
        methods: {
            get: function () {
                axios.get(api+'recommend/getChanRecomNews?channel=duanzi&size='+this.size).then(function (res) {
                    console.log(res.data.段子);
                    this.list = res.data.段子;
                    Indicator.close();

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            },
            loadBottom() {
               // this.$refs.loadmore.onTopLoaded();
                this.size+=5;
                this.get();
            }
        },
        components:{

        }
    }
</script>
