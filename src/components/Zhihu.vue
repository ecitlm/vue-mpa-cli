<template>
    <div>
     <p v-for="item in list">
         {{item.location}}
     </p>
    </div>
</template>

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
        },
        methods: {
            get: function () {
                axios.get(bird + "https://coding.net/api/tweet/best_user").then(function (res) {
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
