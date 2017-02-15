<template>
  <div id="audio-play">
    <a-player :music="songs" ref="player"></a-player>
  </div>
</template>
<style>
#audio-play{
  position: fixed;
  width:100%;
  bottom:0;
  left:0;
}
#audio-play .aplayer{
    margin:0;}

</style>
<script>
  import VueAplayer from 'vue-aplayer'
  import axios from  'axios'
  import {Indicator} from 'mint-ui'

  export default{
    data(){
      return {
        list:{},
        info:{},
        songs: [
          {
            title: '你好世界2',
            author: '我不好 ',
            url: 'http://m2.music.126.net/9SmIPoDjeEJCQZtaoFkVaA==/1076421883600633.mp3',
            pic: 'http://p4.music.126.net/qjgZCvf7hf-8St7LuZrcOg==/1362294906860186.jpg',
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }
        ]
      }
    },
    watch: {
      // 深度 watcher
      songs: {
        handler: function (val, oldVal) {
          let aplayer = this.$refs.player.control
          aplayer.play();
        },
        deep: true
      }
    },
    created(){
        this.get();
    },
    methods:{
      get: function () {
        axios.get(musicApi + '27713963&ids=[27713963]').then(function (res) {
          console.log(res.data);
          this.list = res.data.songs[0];
          this.songs[0].title=this.list.name;
          this.songs[0].author=this.list.mp3Url;
          this.songs[0].pic=this.list.album.picUrl;


        }.bind(this)).catch(function (error) {
          console.log(error)
        })
      }


    },
    mounted() {
        alert(1)
    },

    components: {
      'a-player': VueAplayer
    }
  }
</script>
