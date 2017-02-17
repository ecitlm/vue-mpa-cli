<template>
    <div id="app">
        <HeadBar :title="title"></HeadBar>

        <keep-alive>
            <transition
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
            >
                <router-view @title="change" :title="title"></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import HeadBar from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            HeadBar
        },
        data(){
            return{
                title:"sh"
            }
        },
        methods:{
            change(title) {
                this.title = title;
            }

        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
</style>
