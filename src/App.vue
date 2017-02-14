<template>
    <div id="app">
        <HeadBar></HeadBar>

        <keep-alive>
            <router-view></router-view>
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
