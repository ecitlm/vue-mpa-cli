<template>
    <div class="home">
        <div id="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in DONE_INDEX_BANNER"><img :src="item.imgsrc" alt="">
                    <span class="swiper-title">{{item.title}}</span>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <!--文章 list-->
        <div id="content-list">
            <router-link tag="section" class="m_article clearfix" :to="{ path: 'article', query: { id: item.postid}}"
                         v-for="item in DONE_INDEX_NEWS">
                <a :href="{ path: 'article', query: { id: item.postid }}">
                    <div class="m_article_img">
                        <img :src="item.imgsrc">
                    </div>
                    <div class="m_article_info">
                        <div class="m_article_title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="m_article_desc ">
                            <div class="m_article_desc_l">
                                <span class="m_article_channel">{{item.source}}</span>
                                <span class="m_article_time">  {{item.ptime}}</span>
                            </div>

                        </div>
                    </div>
                </a>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { mapGetters,mapState } from 'vuex'
    import axios from  'axios'
    export default{
        name: 'home',
        data(){
            return {
                popupVisible: true
            }
        },
        created(){
            this.getNews();
            this.$emit('title', '首页');
            if (!!this.DONE_INDEX_BANNER && this.DONE_INDEX_BANNER.length > 0) {} else {
                this.getBanners();
            }
        },
        computed: {
            ...mapGetters(['DONE_INDEX_BANNER','DONE_INDEX_NEWS']),
            ...mapState({
                Email: state => state.data.Email,
            })
        },
        methods: {
            //改为vuex获取数据
            getBanners:function () {
                this.$store.dispatch('FECTH_INDEX_BANNER');
            },
            getNews:function () {
                this.$store.dispatch('FECTH_INDEX_NEWS');

            }
        }
    }
</script>
<style>

    #swiper {
        width: 100%;
        max-height: 500px;
        height: auto;
        height: 200px;
        float: left;
    }

    #swiper img {
        width: 100%;
    }

    #title-list {
        width: 100%;
    }

    #title-list li {
        float: left;
        display: inline-block;
        text-align: center;
        width: 20%;
        padding: 10px 0;
    }

    .swiper-title {
        position: absolute;
        left: 3%;
        bottom: 30px;
        color: #eee;
    }

    .mint-popup {
        width: 100%;
    }

    .v-modal {
        background: rgba(255, 255, 255, 0.8) !important;
    }

    .mint-popup-top {
        top: 40px;
    }

    .mint-popup {
        background: rgba(255, 255, 255, 0.8) !important;
    }

</style>