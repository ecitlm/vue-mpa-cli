<template>
  <div id="zhihu">
    <!--  {{list.stories}}-->
    <ul class="m-type">
      <li v-for="item in list.stories" @click="pushUrl(item.id)">
        <img :src="item.images[0]" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '../api/api'
export default {
  data() {
    return {
      list: {}
    }
  },
  created() {
    this.get();
    this.$emit('title', '知乎日报');
  },
  methods: {
    get: function () {
      console.log("get");
      api.zhihu_daily()
        .then(function (response) {
          console.log(response);
          this.list = response.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    pushUrl: function (id) {
      this.$router.push({ path: '/zhihuarticle', query: { id: id } })
    }
  }
}
</script>
<style scoped>
.m-type {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

.m-type li {
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding: 5px;
}

.m-type li img {
  width: 100%;
}

.m-type p {
  display: block;
  max-height: 40px;
  overflow: hidden;
  font-size: 14px;
}
</style>
