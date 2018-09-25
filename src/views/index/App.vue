<template>
  <div id="app">
    <h1>Vue 多页应用脚手架</h1>
    <div class="link">
      <a href="/other/index.html">other</a>
      <a href="/news/index/index.html">news</a>
      <a href="/index.html">index</a>
    </div>
  </div>
</template>

<script>
  import Index from '../../components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      Index
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/common.scss';
  #app {
    text-align: center;
    color: #2c3e50;
    width: 750px;
    h1{
      line-height: 100px;
      font-size: 60px;
      margin-top: 100px;
    }
    .link {
      padding: 0 32px;
      width: 750px;
      a {
        display: block;
        font-size: 36px;
        line-height: 100px;
        float: left;
        width: 100%;
        line-height: 88px;
        text-align: center;
        background-image: linear-gradient(-90deg, #ff6a3e 0%, #ff8f4d 100%);
        box-shadow: 0 2px 4px 0 rgba(255, 106, 62, 0.5);
        border-radius: 4px;
        margin-top: 50px;
        color: #fff
      }
    }
  }
</style>
