<template>
    <div class="home">
        <div> 收到{{$store.state.tenant}}应用的广播:{{$store.state.tenantLogin}}</div>
        <div>
            应用间跳转，由主应用下发控制路由
            <Button @click="jumpToDisaster">jumpToDisaster</Button>
        </div>
        <div>下面是主应用下发的UI组件</div>
        <testUI name="名称随意"></testUI>
        <div>
            测试iview组件
            <Input placeholder="Enter something..." style="width: 300px"/>
        </div>

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
            },
            /**
             * 跨应用路由切换 (如要单独应用则需要注释掉)
             * url 路由地址
             */
            jumpToDisaster() {
                this.$mainUtils.routerGo('/disaster/about');
            }
        },
        mounted() {
            this.callParentChange()
        }
    }
</script>

<style scoped lang="less">
    .home{
        text-align: center;

        div{
            margin-top: 20px;
            border-bottom: 1px solid #2c3e50;
            padding-bottom: 20px;
        }
    }
</style>
