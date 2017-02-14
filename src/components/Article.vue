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
  import { Indicator } from 'mint-ui';
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
      activated(){
          this.article={};
          this.getArticle();
          Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
          });
          //alert(1)
      },
    methods: {
      getArticle: function () {
        var id = String(this.$route.query.id);
        axios.get(apiProxy+'article/'+id+'/full.html').then(function (res) {
            Indicator.close();
            console.log(res.data);
            (typeof res.data[id] == "object") ? this.article=res.data[id] : this.article={"body":"该内容已删除"};

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
