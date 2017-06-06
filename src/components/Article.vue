<template>
    <div class="content">
        <h3>{{article.title}}</h3>
        <p class="ptime">{{article.ptime}} {{article.source}}</p>
        <p v-for="imgs in article.img ">
            <img :src="imgs.src" alt="" width="100%">
        </p>

        <div class="textcontent" v-html="article.body"></div>
    </div>
</template>
<style>

</style>
<script>
    import api from '../api/api'
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                msg: 'hello vue',
                article: {}
            }
        },
        created(){
            //this.getArticle();
        },
        activated(){
            this.$emit('title', '文章详情');
            this.article = {};
            this.getArticle();
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        },
        mounted: function() {
            window.scrollTo(0, 0)
        },
        methods: {
            getArticle: function () {
                var data={
                    postid:String(this.$route.query.id)
                };
                api.article(data)
                .then(function (res) {
                    Indicator.close();
                    (typeof res.data == "object") ? this.article = res.data : this.article = {"body": "该内容已删除"};

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })

            }
        },
        components: {}
    }
</script>

<style scoped>
    .content {
        padding: 5%;
    }

    .ptime {
        color: #888;
        line-height: 30px;
    }

    .textcontent {
        line-height: 28px;
    }
</style>
