<template>
  <div id="musiclist">
    <ul class="m-type">
      <li v-for="item in type" :data="item.id" @click="pushUrl(item.id)">
        <img :src="item.pic" alt="">
      </li>
    </ul>
  </div>
</template>


<script>

  export default{
    data(){
      return {
        type:[
          {
            id:19723756,
            pic:require('../assets/images/upmusic.jpg')
          },
          {
            id:3778678,
            pic:require('../assets/images/hot-music.jpg')
          },
          {
            id:3779629,
            pic:require('../assets/images/new-music.jpg')
          },
          {
            id:112504,
            pic:require('../assets/images/top.jpg')
          },
          {
            id:490929456,
            pic:require('../assets/images/china.jpg')
          },
          {
            id:428460941,
            pic:require('../assets/images/yueyu.jpg')
          },
          {
            id:315419548,
            pic:require('../assets/images/minyao.jpg')
          },
          {
            id:131596326,
            pic:require('../assets/images/rock.jpg')
          },
          {
            id:845791,
            pic:require('../assets/images/class.jpg')
          }
        ]
      }
    },
    created(){
    },
    activated(){
      this.$emit('title', '音乐特色榜');
    },
    methods: {
        pushUrl:function (id) {
          this.$router.push({path:'/music',query: {id: id}});
        }
    },
    components: {}
  }
</script>
<style>
  .m-type {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;

  }
  .m-type li {
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 5px;
  }
  .m-type li img {
    width: 100%;
  }

</style>
