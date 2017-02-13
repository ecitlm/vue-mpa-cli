<template>
  <div class="content">
    <h3>{{article.title}}</h3>
    <p class="ptime">{{article.ptime}}  {{article.source}}</p>
    <div class="textcontent" v-html="article.body"></div>
  </div>
</template>
<style>

</style>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        msg: 'hello vue',
        article: {}
      }
    },
    created(){
      this.getArticle();
    },
    methods: {
      getArticle: function () {
        var id = String(this.$route.query.id);
        axios.get('/api/article/'+id+'/full.html').then(function (res) {
          console.log(res.data);
          this.article = res.data[id];

        }.bind(this)).catch(function (error) {
          console.log(error)
        })

      }
    },
    components: {}
  }
</script>

<style scoped>
  .content{
    padding:5%;
  }
.ptime{
  color: #888;
  line-height:30px;}
  .textcontent{
    line-height:28px;}
</style>
