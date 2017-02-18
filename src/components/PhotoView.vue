<template>
    <div id="pview">
      <mt-swipe :auto="0" :show-indicators="false">
            <mt-swipe-item  v-for="item in view.pics"><img :src="item" alt="">
                <span class="swiper-title">{{view.setname}}</span>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    
    export default{
        data(){
            return{
                view:{}
            }
        },
        created(){
            this.getData();
        },
        activated(){
            this.getData();
        },
        methods:{
            getData:function () {
                this.view=JSON.parse(sessionStorage.getItem('photoview'));
            }
        },
        components:{}
    }
</script>
<style>
#pview{
    width:100%;
    min-height:568px;
    height:100%;
    height:700px;
    background: #000;
    text-align: center;
    vertical-align: middle;
    display: table;
    table-layout: fixed;


}

#pview img{
    width:100%;
    text-align: center;
    vertical-align: middle;
    display: block;

}
</style>
