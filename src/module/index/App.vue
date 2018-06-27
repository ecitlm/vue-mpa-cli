<template>
  <div id="app">
    <h1>Vue 多页应用脚手架</h1>
    <h2>
      <a href="other.html">other</a>
      <a href="news/index.html">news</a>
      <a href="index.html">index</a>
    </h2>
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

<style lang="scss" scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a{
    color: #42b983;
    font-size: 20px;
  }
}
</style>
