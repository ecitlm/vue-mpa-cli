<template>
  <div id="app">
    <h1>
      <a href="/news/news_list.html">news</a>
    </h1>
    <news/>
  </div>
</template>

<script>
import news from '../../../components/news.vue'
export default {
  name: 'App',
  components: {
    news
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
