<template>
    <div>
        <div id="content-list">
            <router-link tag="section" class="m_article clearfix" :to="{ path: 'wxarticle', query: { id: item.id}}" v-for="item in list.list">
                <a>
                    <div class="m_article_img">
                        <img :src="item.firstImg">
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
                            <!--<div class="m_article_desc_r">
                              <div class="">
                                {{item.ptime}}
                              </div>
                            </div>-->
                        </div>
                    </div>
                </a>
            </router-link>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                list: {},
                ps: 10
            }
        },
        created(){
            this.get();
            this.$emit('title', '微信精选');
        },
        methods: {
            get: function () {
                console.log("get");
                axios.get(apiurl.WxUrl(this.ps))
                    .then(function (response) {
                        console.log(response.data.result);
                        this.list = response.data.result;
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },
        components: {}
    }
</script>
