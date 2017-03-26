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
  import axios from 'axios'
  export default{
    data(){
      return {
        list: {}
      }
    },
    created(){
      this.get();
      this.$emit('title', '知乎日报');
    },
    methods: {
      get: function () {
        console.log("get");
        axios.get(apiurl.zhihuDaily(this.getNowFormatDate()))
          .then(function (response) {
            console.log(response.data);
            this.list = response.data;
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
      },
      pushUrl: function (id) {
        this.$router.push({path: '/zhihuarticle', query: {id: id}})
      },
      getNowFormatDate: function () {
        var day = new Date();
        var Year = 0;
        var Month = 0;
        var Day = 0;
        var CurrentDate = "";
        Year = day.getFullYear();//支持IE和火狐浏览器.
        Month = day.getMonth() + 1;
        Day = day.getDate() + 1;
        CurrentDate += Year;
        if (Month >= 10) {
          CurrentDate += Month;
        }
        else {
          CurrentDate += "0" + Month;
        }
        if (Day >= 10) {
          CurrentDate += Day;
        }
        else {
          CurrentDate += "0" + Day;
        }
        return CurrentDate;
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
  .m-type p{display: block;max-height: 40px;
    overflow: hidden;
    font-size:14px;}
</style>
