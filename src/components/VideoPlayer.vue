<template>
  <div>
  <!--  <span>路由查询参数：{{$route.query.id}}</span>-->
    <video-player :options="videoOptions"></video-player>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videoOptions: {
          source: [{
            type: "video/mp4",
            src: this.$route.query.id,
            label: "原画",
            res: 1
          }],
          language: "zh-CN",
          playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
          poster: "http://www.freemake.com/blog/wp-content/uploads/2015/06/videojs-logo.jpg",
          defaultSrcReId: 2,
          height: 260,
          autoplay: true
        }
      }
    },
    activated(){
      //console.log(JSON.stringify(this.videoOptions))
      this.videoOptions.source[0].src=this.$route.query.id;
    },
    created(){

    }
  }
</script>
