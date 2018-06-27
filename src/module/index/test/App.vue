<template>
  <div id="app">
    <a href="./other.html">other</a>
    <a href="./news.html">news</a>
    <Index/>
  </div>
</template>

<script>
import Index from '../../../components/HelloWorld.vue'

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
    color: red;
    font-size: 20px;
  }
}
</style>
