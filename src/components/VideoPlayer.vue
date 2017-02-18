<template>
    <!--  <span>路由查询参数：{{$route.query.id}}</span>-->
  <div class="v-plays" >
    <video :src="video.mp4_url" controls="controls" autoplay  :poster="video.cover">
    </video>
          <h3>{{video.title}}</h3>
          <p><img :src="video.topicImg" alt=""> {{video.topicName}}<span>{{video.length  | minutes}}''</span></p>
        </div>
</template>
<style>
  .v-plays{
    width:100%;
  }
  .v-plays video{
    width:100%;
  }
  .v-plays h3{
    color: #404040;
    margin:5px 10px;
    padding-top:5px;
    font-weight:400;
    font-size:16px;
    border-top:1px solid #eee;
  }
  .v-plays p{
    padding:0 10px;
    font-size:14px;
    line-height:25px;

  }
  .v-plays p img{
    border-radius: 50%;
    width:25px;
    float: left;
    margin-right:10px;
  }
  .v-plays p span{
    font-size:12px;
    float: right;}
</style>
<script>
  export default {
    data() {
      return {
          video:{}
      }
    },
    activated(){
      this.getData();
      this.$emit('title','热播视频-详情');
    },
    methods:{
        getData:function () {
            this.video=JSON.parse(sessionStorage.getItem('videodetail'));
        }
    }
  }
</script>
