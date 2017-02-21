<template>
    <div>
        <iframe id="iframe" :src="'http://v.juhe.cn/weixin/redirect?wid='+$route.query.id" frameborder="0">1</iframe>
    </div>
</template>
<style>
    #iframe {
        width: 100%;
        height: 600px;
    }
</style>
<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },

        created(){
             this.$emit('title', '微信精读');
        },
         methods: {
            
        },
        components: {}
    }
</script>
