<template>
  <div>
    <div id="movie-detail">
      <div class="movie_picture">
       <img :src="list.images.large" class="mvImg2">
      </div>
      <div class="mv_info">
        <span class="name ellipsis">{{list.title}}</span>
        <div class="scoreBar">
        <span class="star_bg"><i :style="styleObject" class="star"></i></span>
          <span class="score">{{list.rating.average}}分</span>
        </div>
        <ul class="mvDescList">
          <li><span>上映：</span>{{list.year}}</li>
          <li><span>片长：</span>----------</li>
          <li><span>国家：</span>{{list.countries[0]}}</li>
        </ul>
      </div>
    </div>


      <ul class="mvDescList">
       <li><span>导演：</span>{{list.directors[0].name}}</li>
        <li><span>主演：</span>
          <i v-for="item in list.casts"> {{item.name}} </i>

        </li>
        <li><span>类型：</span> <i v-for="items in list.genres"> {{items}} / </i></li>
      </ul>


    <div id="moviePart">
      <h2 class="jqHead"><i class="intro"></i>剧情简介</h2>
      <div class="mvIntroBox ellipsis">
        <i class="downIcon"></i>
        {{list.summary}}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Indicator} from 'mint-ui'
  export default{
    data(){
      return {
        list:{
          rating: {
            average: 5.8
          },
          year: "2017",
          images: {
            large: "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2410569976.jpg"
          },
          "countries": [
            "美国"
          ],
          directors: [
            {
              name: "D·J·卡卢索"
            }
          ],

        },
        styleObject: {
          width: '100%',
        }
      }
    },
    created(){
      this.get();
      this.$emit('title', this.list.title);
    },
    activated(){
      this.get();
      this.$emit('title', this.list.title);
    },
    methods: {
      loading: function () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      },
      get: function () {
        this.loading();
        axios.get(apiurl.MovieDetail(this.$route.query.id))
          .then(function (res) {
            this.list=res.data
            this.styleObject.width=res.data.rating.average*10+"%";
            this.$emit('title', this.list.title);

            Indicator.close();
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          })
      }
    }
  }
</script>
<style>
  #movie-detail {
    width: 100px;
    padding: 10px 0;
    margin: 0 2%;
    width: 96%;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    border-bottom: 1px solid #d7d7d7;

  }

  .movie_picture {
    width: 35%;
    float: left;

  }

  .movie_picture img {
    width: 100%;
  }

  .mv_info {
    float: left;
    width: 65%;
    overflow: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 6%;
    padding-top: 10px;
  }

  .mv_info .name {
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    display: block;

  }

  .ellipsis {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    word-wrap: normal;
  }

  .scoreBar {
    line-height: 30px;
  }

  .star_bg {
    display: inline-block;
    width: 120px;
    background: url(http://pimg1.126.net/movie/images/m/wap/start_bg.png) left top no-repeat;
    height: 20px;
    background-size: auto 20px;
  }

  .star {
    display: block;
    background: url(http://pimg1.126.net/movie/images/m/wap/start.png) left top no-repeat;
    height: 20px;
    background-size: auto 20px;
  }

  .score {
    color: #7a6852;
    display: inline-block;
    font-size: 14px;
    height: 20px;
    line-height: 20px
  }

  .mvDescList {
    color: #666;
    line-height: 26px;
    font-size: 14px;
  }

  .mvDescList {
    color: #666;
    padding: 10px;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width:100%;
    height:auto;
    overflow: hidden;
  }
  .mvDescList li {
    padding-left: 3.1em;
  }
  .mvDescList li i{
    font-style: normal;
  }
  .mvDescList span {
    width: 3.1em;
    display: inline-block;
    margin-left: -3.1em;
  }
  #moviePart{
    width:100%;
    float: left;
    padding:10px 0;
  }
  .jqHead {
    height:40px;
    line-height: 40px;
    background: #f5f5f5;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    padding-left: 1rem;
    font-size: 1rem;
    color: #333;
  }
  .mvIntroBox {
    line-height: 24px;
    font-size:14px;
    margin:10px;
    word-break: break-all;
    white-space: normal;
    color: #666;
  }
</style>

