<template>
  <div id="musiclist">
    <ul class="m-type">
      <li v-for="item in list" :data="item.rankid" @click="pushUrl(item.rankid)">
        <img :src="item.imgurl.replace('{size}',400)" :alt="item.rankname">
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.get()
  },
  activated() {
    this.$emit('title', '音乐特色榜');
  },
  methods: {
    loading: function () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    },
    pushUrl: function (id) {
      this.$router.push({ path: '/music', query: { id: id } });
    },
    get: function () {
      this.loading();
      var url = "http://m.kugou.com/rank/list?json=true";
      axios.get(bird+url).then(function (res) {
        console.log(res.data.rank.list);
        this.list=res.data.rank.list
        Indicator.close();

      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    }
  },
  components: {}
}
</script>
<style scoped>
.m-type {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

.m-type li {
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 5px;
}

.m-type li img {
  width: 100%;
}
</style>
