<template>
  <div class="home">
    <div> 收到{{$store.state.disaster}}应用的广播:{{$store.state.disasterLogin}}</div>

    <img alt="Vue logo" src="../assets/logo.png">
    <Input placeholder="Enter something..." style="width: 300px"/>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
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
        from: "disaster",
        sign: "wzy4",
        data: "地灾哟"
      });
    }
  },
  mounted() {
    this.callParentChange()
  }
}
</script>

<style>
  .home{
    text-align: center;
  }
</style>
