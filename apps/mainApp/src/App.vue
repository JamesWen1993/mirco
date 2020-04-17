<template>
    <div id="mainApp">
        <div id="nav">
            <router-link to="/tenant">Tenant</router-link>
            |
            <router-link to="/disaster">Disaster</router-link>
            <div> 收到{{$store.state.name}}应用的广播:{{$store.state.login}}</div>
            <div @click="send">发送主应用广播</div>
        </div>
        <router-view/>
        <div class="main-container-view">
            <div id="subapp-viewport" class="app-view-box" v-html="content"></div>
            <div v-if="loading" class="subapp-loading">loading</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "rootView",
        components: {},
        props: {
            loading: Boolean,
            content: String
        },
        methods: {  // 在某个应用里调用.next方法更新数据，并传播给其他应用
            send() {
                this.$pager.next({
                    from: "main",
                    sign: "wzy",
                    data: "大家好哟"
                });
            }
        }
    };
</script>
<style lang="less">
    #mainApp {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
