<template>
    <div class="home">
        <div> 收到{{$store.state.tenant}}应用的广播:{{$store.state.tenantLogin}}</div>
        <img alt="Vue logo" src="../assets/logo.png">
        <Input placeholder="Enter something..." style="width: 300px"/>

        <HelloWorld msg="Welcome to Your Vue.js App"/>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        methods: {  // 在某个应用里调用.next方法更新数据，并传播给其他应用
            callParentChange() {
                this.$pager.next({
                    from: "tenant",
                    sign: "wzy2",
                    data: "主应用哟"
                });
            }
        },
        mounted() {
            this.callParentChange()
        }
    }
</script>
