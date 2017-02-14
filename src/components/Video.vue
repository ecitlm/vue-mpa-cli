<template>
    <div class="video">

        <div class="video-play" v-for="item in list ">
            <video :src="item.mp4_url" controls="controls" :poster="item.cover">
            </video>
            <h3>{{item.title}}</h3>
        </div>

    </div>
</template>
<style>

</style>
<script>
    import axios from  'axios'
    export default{
        data(){
            return{
                msg:'hello vue',
                list:{}
            }
        },
        components:{

        },
        created(){
            this.get();
        },

        methods:{
            get:function(){
                axios.get(apiProxy+'/video/home/10-10.html').then(function(res){
                    console.log(res.data.videoList)
                    this.list=res.data.videoList;

                }.bind(this)).catch(function(error){
                    console.log(error)
                })
            }
        }
    }
</script>
