<template>
    <div id="movie">

        <h3 class="playing">{{list.title}}</h3>
        <section id="list" class="grid">
            <router-link tag="a" class="item" :to="{ path: '/moviedetial', query: { id: item.id}} " v-for="item in subjects">
                <div class="cover">
                    <div class="wp ratio3_4">
                        <img :src="item.images.medium">
                    </div>
                </div>
                <div class="info">
                    <h3>{{item.title}} </h3>
                    <p class="rank">
                    </p>
                </div>
            </router-link>
        </section>
        <mt-button type="danger" size="large" @click.native="loadMore" v-show="subjects.length!=0">加载更多</mt-button>
    </div>
</template>
<style>
    #movie {
        width: 100%;
    }

    #movie h3.playing {
        padding: 20px 0 0 4%;
        color: #494949;
        display: block;
        width: 300px;
    }

    .grid {
        padding: 20px 0;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        box-sizing: border-box;
        display: block;
        float: left;
    }

    #list .item {
        text-decoration: none;
        color: #9b9b9b;
    }

    .grid .item {
        float: left;
        box-sizing: border-box;
        width: 33.33333%;
        padding-left: 4%;
        padding-right: 4%;
        margin-bottom: 10px;
        overflow: hidden;
    }

    .grid .item .info h3 {
        width: 100%;
        font-size: 12px;
        display: block;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 5px 0;
        font-weight: 400;

    }

    .cover {
        height: 150px;
    }

    .cover img {
        height: 150px;
        width: 100%;
    }


</style>
<script>
    import axios from 'axios'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                list: {},
                subjects: [],
                start: 0,
                count: 9
            }
        },
        created(){
        },
      activated(){
        this.$emit('title','热播电影');
        this.get();
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
                axios.get(apiurl.PlayingMovie(this.start, this.count))
                    .then(function (response) {
                        this.list = response.data;
                        this.subjects = this.subjects.concat(response.data.subjects);

                        this.list.subjects = this.subjects;
                        Indicator.close();
                        this.$emit('title','热播电影');
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            loadMore: function () {
                this.start = this.start + this.count + 1;
                this.get();
            }
        },
        components: {}
    }
</script>
