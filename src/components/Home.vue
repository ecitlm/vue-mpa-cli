<template>
    <div class="home">
      <div id="swiper" >
        <mt-swipe :auto="4000" >
          <mt-swipe-item  v-for="item in bannerList"><img :src="item.imgsrc" alt="">
            <span class="swiper-title">{{item.title}}</span>

          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div id="content-list">
        <router-link tag="section" class="m_article clearfix" :to="{ path: 'article', query: { id: item.postid}}" v-for="item in list">
            <a :href="{ path: 'article', query: { id: item.postid }}">
            <div class="m_article_img">
              <img :src="item.imgsrc">
            </div>
            <div class="m_article_info">
              <div class="m_article_title">
                <span>{{item.title}}</span>
              </div>
              <div class="m_article_desc ">
                <div class="m_article_desc_l">
                  <span class="m_article_channel">{{item.source}}</span>
                  <span class="m_article_time">  {{item.ptime}}</span>
                </div>
                <!--<div class="m_article_desc_r">
                  <div class="">
                    {{item.ptime}}
                  </div>
                </div>-->
              </div>
            </div>
          </a>
        </router-link>
      </div>
</template>
<style >

  #swiper{
    width:100%;
    max-height:500px;
    height:auto;
    height:200px;
    float: left;
  }
  #swiper img{
    width:100%;}
  #title-list{
     width:100%;}
  #title-list li{
    float: left;
    display: inline-block;
    text-align: center;
    width:20%;
    padding:10px 0;
  }
  .swiper-title{
    position: absolute;
    left:3%;
    bottom:30px;
    color: #eee;
  }
  .mint-popup{
    width:100%;}
  .v-modal{
    background:rgba(255,255,255,0.8) !important;}
  .mint-popup-top{
    top:40px ;}
  .mint-popup{
    background: rgba(255,255,255,0.8) !important;}

</style>
<script>
  import axios from  'axios'
    export default{
      name: 'home',
        data(){
            return{
                msg:'hello Home',
                popupVisible:true,
                list:{},
                bannerList:{},
                count:30
            }
        },
      created(){
            this.get();
            this.getBanner();
             this.$emit('title','首页')

      },
      methods:{
        get:function(){
          axios.get(apiurl.indexBanner()).then(function(res){
            this.list=res.data.T1348648037603;
          }.bind(this)).catch(function(error){
            console.log(error)
          })
        },
        getBanner:function () {
          axios.get(apiurl.indexNews(this.count)).then(function(res){
            this.bannerList=res.data.list[0].ads;
          }.bind(this)).catch(function(error){
            console.log(error)
          })

        }
      }
    }
</script>
