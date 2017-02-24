<template>
    <div>
        <div class="container">
            <div class="waterfall">

                <div class="waterlist list animated fadeInUp " v-for="(item ,index) in  list" @click="showImg(item.url)">
                    <img  v-lazy.container="item.url">
                </div>

            </div>
        </div>
        <span @click="loadMore" id="load" v-show="list.length!=0">加载更多</span>
     <div id="bigbox" @click="hideImg">
       <mt-popup
         v-model="popupVisible"
         popup-transition="popup-fade"
        >
         <img :src="boxImg" alt="">
       </mt-popup>
     </div>
    </div>
</template>

<script>
    import  axios from 'axios'
    import Vue from 'vue'
    import {Indicator} from 'mint-ui'
    import { Lazyload } from 'mint-ui';
    Vue.use(Lazyload);
    export default{
        data(){
            return {
                list: [],
                popupVisible: false,
                boxImg:"",
                start: 1,
                count: 16
            }
        },
        created(){
            this.getPhoto();
        },
        activated(){
            this.$emit('title', '小清新style');
        },
        methods: {
            loading: function () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                })
            },
            getPhoto: function () {
                this.loading();
                axios.get(apiurl.ViewP(this.start, this.count)).then(function (res) {
                    this.list = this.list.concat(res.data.results);
                    Indicator.close();
                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            },
            pushUrl: function (index) {
               // sessionStorage.setItem("photoview",JSON.stringify(this.list[index]));
                //this.$router.push({path:'/view'});

            },
            loadMore: function () {
                this.start += 1;
                console.log(this.start)
                this.getPhoto();
            },
            showImg:function (url) {
              this.boxImg=url;
              this.popupVisible=true;
            },
            hideImg:function () {
              this.popupVisible=false;
            }
        },
        components: {}
    }
</script>
<style>
    .container {
        width: 100%;
        margin: 0 auto;
        background: #f6f6f6;
        padding-top: 10px;
    }

    .waterfall {
        -moz-column-count: 2;
        column-count: 2;
        column-width: 50%;
        column-gap: 0px;
    }

    .waterlist {
        padding: 0 5px;
        margin: 7px;
        break-inside: avoid;
        background: white;
    }

    .waterlist img {
        width: 100%;
        margin-bottom: 5px;
        border-bottom: 1px solid #cccccc;
    }

    .waterlist p {
        font-size: 14px;
    }

    #load {
        display: block;
        padding: 15px 0;
        outline: 0;
        width: 100%;
        text-align: center;
        z-index: 99;
        margin: 0 auto;
    }
#bigbox{
  margin:0 auto;
  text-align: center;
  background: #000;

  left:0;
  top:0;
}
    #bigbox   .v-modal{
      background: #000 !important;
    }
#bigbox img{
  width:100%;
  max-width: 750px
}

    #bigbox  img[lazy=loading] {
        width: 100%;
        margin: auto;
    }
</style>
