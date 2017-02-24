<template>
    <div id="joke_wrap">
        <mt-loadmore :bottom-method="loadBottom" ref="loadmore">
            <li v-for="item in list" class="animated fadeInUp">{{ item.digest }}</li>
        </mt-loadmore>

    </div>
</template>
<style scoped>
    #joke_wrap {
        width: 100%;
        background: #f6f6f6;
    }

    #joke_wrap li {
        padding: 10px 15px;
        box-shadow: 3px 3px 8px #ddd;
        background: #fff;
        margin-bottom: 10px;
        margin-top: 5px;
        font-size: 16px;
    }
</style>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    import {Loadmore} from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    import {Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                msg: 'hello vue',
                list: {},
                size: 10
            }
        },
        created(){
            this.$emit('title','笑话段子');
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.get();
        },
        methods: {
            get: function () {
                axios.get(apiurl.jokeApi(this.size)).then(function (res) {
                    this.list = res.data.段子;
                    Indicator.close();

                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            },
            loadBottom() {
                // this.$refs.loadmore.onTopLoaded();
                this.size += 5;
                this.get();
            }
        },
        components: {}
    }
</script>
