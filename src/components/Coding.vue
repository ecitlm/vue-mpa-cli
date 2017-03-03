<template>
    <div class="coding">
            <li class="coding_list" v-for="item in list">
                <div class="coding_header" >
                    <img :src="item.owner.avatar" alt="">
                    <span>{{item.owner.name}}</span>
                    <p>{{item.created_at |time}}</p>
                </div>
                <div class="code_content" v-html="item.content"></div>
                <div class="device">{{item.device}}</div>
            </li>

    </div>
</template>
<style>
.coding{
    background: red;
    width:100%;
    height:auto;
}
    li.coding_list {
        padding:10px;
        box-sizing: border-box;
        width:100%;
        float: left;
        border-bottom:10px solid #FAFAFA;
    }
    .coding_list .coding_header img{
        float: left;
        width:40px;
        height:40px;
        border-radius:50%;
        margin-right:10px;
    }
    .coding_header p{
        font-size:12px;
        color: #666;
        line-height:20px;
    }
    .coding_header strong{
        font-size:14px;
        line-height:20px;
    }
    .code_content{
        width:100%;
        padding:10px 0 0 0;

    }
.code_content p{
    width:100%;
    font-size:14px;
    line-height:24px;

}
    img.emoji{
       display: inline-block;
        width:20px;
        margin-top:-3px;
    }
    .code_content img.bubble-markdown-image{
        width:70%;
        padding:5px 0 0 0;
    }
.topic{
    color: #2D59A2;
    font-size:13px;
}
    .device{
        font-size:10px;
        color: #999;
    }
pre {
    font-size: 12px;
    padding: 0;
    margin: 0;
    background: #f0f0f0;
    line-height: 20px;
    width: 600px;
    overflow: auto;
    overflow-Y: hidden;
}
</style>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                list:""
            }
        },
        created(){
            this.get()
            this.$emit('title','冒泡广场');
        },
        methods: {
            get: function () {
                axios.get(bird + "https://coding.net/api/tweet/public_tweets?filter=true&size=10&sort=time").then(function (res) {
                    console.log(res.data.data)
                    this.list = res.data.data;
                }.bind(this)).catch(function (error) {
                    console.log(error)
                })
            }
        },
        components: {}
    }
</script>
<style>

</style>
