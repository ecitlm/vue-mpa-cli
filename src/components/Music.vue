<template>
    <div>
        <!--{{list.creator.avatarUrl}}-->
        <div id="music-head">
            <div class="head-bg" :style="{backgroundImage: 'url(' + list.creator.avatarUrl +'?param=12y22&quality=100'+ ')'}"></div>


            <div class="song-pic">
                <img :src="list.coverImgUrl+'?param=252y252&amp;quality=75'">
                <span class="tag">歌单</span>
                <p class="count">{{list.trackCount}}</p>
            </div>
            <div class="cnt">
                <h2 class="j-plname"></h2>
                <div class="art s-fc3 f-thide">
                   <p class="m-title"> {{list.name}}</p>
                    <img :src="list.creator.avatarUrl" class="ava j-lazy z-loaded">
                    {{list.creator.nickname}}
                </div>
            </div>

        </div>

        <section class="m-intr">
            <p class="s-fc3 tags">标签：
                <em class="tag" v-for="tag in list.tags">{{tag}}</em>
            </p>
            <p class="desc s-fc3 f-brk nomore" id="briefDescBox">简介：{{list.description}}</p>
        </section>
        <section class="m-bill">
            <h2 class="f-bd u-hd">歌曲列表</h2>
            <ul class="list">
                <!--<router-link tag="section" class="video-item" :to="{ path: '/player', query: { id: item.mp4_url}}"-->
                <router-link tag="li" class="f-bd" :to="{ path: '/musicplayer', query: { id: item.id}}" v-for="(item,index) in list.tracks">
                    <a :href="{ path: '/musicplayer', query: { id: item.id}}" data-action="res" data-res-type="song"
                       data-log="hitsong">
                        <span class="num s-fc4">{{index+1}}</span>
                        <span class="detail">
                <h3 class="s-fc1">{{item.name}}{{item.alias[0]}}</h3>
                <p class="s-fc8">{{item.artists[0].name}}-{{item.album.name}}</p>
            </span>
                        <span href="#" class="play"></span>
                    </a>
                </router-link>
            </ul>
        </section>


    </div>
</template>
<style>
    .m-intr {
        position: relative;
        margin: 0 10px 5px 15px;
        font-size: 14px;
        line-height: 19px;
        float: left;
        font-weight: normal;
        font-style: normal;
        max-height:135px;
      overflow: hidden;
    }

    .m-intr .tags {
        margin: 10px 0;
        color: #666;

    }

    .m-intr .tag {
        margin-right: 10px;
        padding: 1px 7px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 9999px;
        font-size: 12px;
        font-style: normal;
    }

    .m-intr .desc {
        margin-top: 10px;
        padding-bottom: 18px;
        word-wrap: break-word;
        white-space: normal;
        color: #666;
    }
</style>
<script>
    import axios from 'axios'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                list: {
                  creator: {
                    "avatarUrl": "http://p1.music.126.net/UUVBZwisn4EjaUsaeITqpw==/109951162823117909.jpg",
                    "nickname": "IT",
                    "signature": "珍惜朋友，爱自己",
                    "description": "",
                    "detailDescription": "",
                    "backgroundUrl": "http://p1.music.126.net/00ElqS54w-4uW-trWwNPLw==/109951162790078220.jpg"
                  }
                }
            }
        },
        created(){
           // this.$emit('title', '音乐播放');
            //this.get();
        },
      activated(){
            this.$emit('title', '音乐播放');
            this.get();
        
      },
        methods: {
            loading:function () {
              Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
            },
            get: function () {
                this.loading();
                var id=this.$route.query.id;
                axios.get(apiurl.MusicType(id)).then(function (res) {
                    this.list = res.data.data.result;
                    Indicator.close();

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>
