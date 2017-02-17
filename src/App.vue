<template>
    <div id="app">
        <HeadBar></HeadBar>

        <keep-alive>
            <transition
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
            >
                <router-view></router-view>
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
        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
</style>
