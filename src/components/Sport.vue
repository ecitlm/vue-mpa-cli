<template>
    <div class="sport">
            <li v-for="item in DONE_SPORT_LIST" @click=" pushUrl(item.postid)">
                <img :src="item.imgsrc" :alt="item.title">
                <p>{{item.title}}</p>
            </li>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
                msg:'IT'
            }
        },
        created(){
            this.getList();
            this.$emit('title', '体育快讯');
        },
        activated(){
            this.$emit('title', '体育快讯');
        },
        computed: {
            ...mapGetters(['DONE_SPORT_LIST'])
        },
        methods:{
            //改为vuex获取数据
            getList:function () {
                this.$store.dispatch('FECTH_SPORT_LIST');
            },
            pushUrl:function (id) {
                this.$router.push({ path: '/article', query: { id: id }})
            }
        },
        components:{

        }
    }
</script>
<style>
.sport{
    width:100%;
    box-sizing: border-box;
    padding:10px;
}
    .sport img{
        width:100%;
    }
    .sport li p{
        line-height:24px;
        padding:8px 0;
    }
</style>
