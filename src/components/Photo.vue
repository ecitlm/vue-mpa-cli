<template>
  <div>

    <div class="container">
      <div class="waterfall">

        <div class="waterlist list" v-for="(item ,index)  in  list">
          <!--  {{index}}-->
          <img :src="item.cover" @click="open($event)">
          <p>{{item.setname}}</p>
        </div>

      </div>

    </div>
    <span @click="loadMore" id="load"  v-show="list.length!=0">加载更多</span>

  </div>
</template>

<script>
  import  axios from 'axios'
  import {Indicator} from 'mint-ui'
  export default{
    data(){
      return {
        list: [],
        start:0,
        count:12
      }
    },
    created(){
      this.getPhoto();
    },
    activated(){
      this.$emit('title','精美套图');
    },
    methods: {
      loading: function () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      },
      getPhoto: function () {
          this.loading();
        axios.get(apiurl.photoApi(this.start, this.count)).then(function (res) {

          //返回的数据外层竟然有index()包裹
        //  this.list = JSON.parse(res.data.status.message.rawResponse.substring(6).slice(0, -1)); //得到最新的数据
          this.list = this.list.concat(JSON.parse(res.data.status.message.rawResponse.substring(6).slice(0, -1)));
          Indicator.close();

        }.bind(this)).catch(function (error) {
          console.log(error)
        })
      },
      loadMore: function () {
        this.start = this.start + this.count + 1;
        this.getPhoto();
      }
    },
    components: {}
  }
</script>
<style>
  .container {
    width: 100%;
    margin: 0 auto;
    background: #f6f6f6;
    padding-top:10px;
  }

  .waterfall {
    -moz-column-count: 2;
    column-count: 2;
    column-width: 50%;
    column-gap: 0px;
  }

  .waterlist {
    /*padding: 1em;
    margin: 0 0.125em 1em;*/
    padding: 0 10px;
    margin: 10px;
    break-inside: avoid;
    background: white;
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);*/
  }

  .waterlist img {
    width: 100%;
    margin-bottom: 5px;
    border-bottom: 1px solid #cccccc;
  }

  .waterlist p {
    font-size: 14px;
  }
  #load{
    display: block;
    padding:10px;
    outline:0;
    width:100px;
    text-align: center;
    z-index:99;
    margin:0 auto;

  }


</style>
