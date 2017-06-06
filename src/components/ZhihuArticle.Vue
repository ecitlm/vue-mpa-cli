<template>
  <div id="detail">
    <link rel="stylesheet" :href="list.css[0]" scoped>
  
    <h1 style="padding: 10px 15px">{{list.title}}</h1>
    <div v-html="list.body">
  
    </div>
  
  </div>
</template>
<script>
import api from '../api/api'
export default {
  data() {
    return {
      list: {
        "css": [
          "http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3"
        ]
      }
    }
  },
  created() {
    this.get();
    this.$emit('title', '知乎日报');
  },
  activated() {
    this.get()
  },
  methods: {
    get: function () {
      var data = {
        id: this.$route.query.id
      }
      api.zhihu_daily_info(data)
        .then(function (response) {
          this.list = response.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
</script>
<style>
.headline .img-place-holder {
  display: none
}

ul {
  padding-left: 0 !important;
}
</style>
