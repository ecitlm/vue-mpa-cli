<template>
  <div class="video">

    <!--<div class="video-play" v-for="item in list ">
      <video :src="item.mp4_url" controls="controls" :poster="item.cover">
      </video>
      <h3>{{item.title}}</h3>
    </div>-->

    <router-link tag="section" class="video-item" :to="{ path: '/player', query: { id: item.mp4_url}}" v-for="(item,index) in list">
      <!--{{index}}-->
      <a :href="{ path: '/player', query: { id: item.mp4_url }}">
        <div class="v-poster">
          <img
            :src="item.cover">
        </div>
        <div class="v-mask">
          <div class="v-head">
            <div class="v-play"></div>
            <div class="v-title">{{item.title}}</div>

          </div>

        </div>
      </a>
    </router-link>

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
        msg: 'hello vue',
        list: {}
      }
    },
    components: {},
    created(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.get();
    },
    methods: {
      get: function () {
        axios.get(apiProxy + 'video/home/10-20.html').then(function (res) {
          console.log(res.data);
          this.list = res.data.videoList;
          Indicator.close();

        }.bind(this)).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>
