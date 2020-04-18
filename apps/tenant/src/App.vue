<template>
  <div id="tenant">
    <div id="nav">
      <router-link to="/">Home2</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  // @ is an alias to /src
  import axios from 'axios'

  export default {
    methods: {
    },
    mounted() {
      axios.get('/open/choose/tenants', {})
              .then((response) => {
                let data = response.data
                console.log(this,data)
              })

    }
  }
</script>
<style lang="less">
#tenant {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
