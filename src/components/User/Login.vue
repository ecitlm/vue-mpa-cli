<template>
    <div id="login">
        <ul id="form">
            <li><input type="text" v-model="info.username" placeholder="请输入您的账号"></li>
            <li><input type="password" v-model="info.password" placeholder="password"></li>
        </ul>

        <p class="msg"> {{LoginInfo.msg}}</p>
        <div id="login_btn">
            <mt-button plain type="danger" size="large" @click.native="Login">登录</mt-button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {
                info: {
                    username: "15079111716",
                    password: "123456"
                }
            }
        },
        created(){
            this.$emit('title', '用户登录');
        },
        activated(){
            this.$emit('title', '用户登录');
        },
        computed: {
            ...mapState({
                token: state => state.data.token,
                LoginInfo: state => state.data.LoginInfo
            })
        },
        methods: {
            Login: function () {
                console.log(JSON.stringify(this.token))
                if (this.token || localStorage.getItem("token")) {
                    alert("已经登录了");
                    this.$router.push({path: '/home'})
                } else {
                    this.$store.dispatch('FECTH_Login', this.info);
                    //console.log(JSON.stringify(this.LoginInfo));
                }
            },
            isLogin:function () {
                if (this.token || localStorage.getItem("token")) {

                }

            }
        },
        components: {}
    }
</script>
<style>
    #login {
        padding-top: 100px;
        background: url("https://dn-coding-net-production-pp.qbox.me/757014a2-76bc-4da7-bcb4-5fd79186fc50.png");
        box-sizing: border-box;
        height: 100%;
        min-height: 100%;
        width: 100%;
        margin-top: -50px;
        background-size: cover;
    }

    #form {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin-top: 50px;
    }

    #form li {
        padding: 10px 0;
    }

    #form li input {
        width: 100%;
        height: 40px;
        outline: none;
        background: transparent;
        -webkit-appearance: none;
        border: 1px solid #DDD;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
        color: #444;
    }

    #login_btn {
        padding: 30px 10px;
    }

    .msg {
        text-align: center;
        color: #666
    }
</style>
