<template>
    <div class="home">
      <div id="header">
        <mt-header title="网易新闻" style="background: #C62F2F">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right" ></mt-button>
        </mt-header>
      </div>

      <div id="swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item style="background: #15d">1222222222222222222</mt-swipe-item>
          <mt-swipe-item style="background-color: red;">2</mt-swipe-item>
          <mt-swipe-item style="background-color: #351;">3</mt-swipe-item>
        </mt-swipe>
      </div>


      <div id="content-list">
        <section class="m_article clearfix" v-for="item in list">
          <a href="#" :id="item.postid">
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
                  <!--<span class="m_article_time"></span>-->
                </div>
                <div class="m_article_desc_r">
                  <div class="">
                    {{item.ptime}}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

      </div>

    </div>
</template>
<style>
  #header{
    margin:0;
    padding:0;
  }
  #swiper{
    width:100%;
    height:200px;
  }

</style>
<script>
  import axios from  'axios'
    export default{
      name: 'home',
        data(){
            return{
                msg:'hello Home',
                list:{}
            }
        },
      created(){
            this.get();
      },

      methods:{
        get:function(){
          axios.get('/api/article/headline/T1348648037603/10-10.html').then(function(res){
            console.log(res.data.T1348648037603)
            this.list=res.data.T1348648037603;

          }.bind(this)).catch(function(error){
            console.log(error)
          })
        }
      }
    }
</script>
