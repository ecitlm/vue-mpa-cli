<template>
  <div id="app">
    <a href="./other.html">other</a>
    <a href="./news.html">news</a>
    <img src="./../../assets/logo.png">
    <Index/>
  </div>
</template>

<script>
import Index from './../../components/HelloWorld'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
