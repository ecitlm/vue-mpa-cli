<template>
  <div id="app">
    <img src="./../../assets/logo.png">
    <other/>
  </div>
</template>

<script>
import other from './../../components/other'

export default {
  name: 'App',
  components: {
    other
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
