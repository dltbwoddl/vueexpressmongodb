<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      {{$store.state.data}}
        <button @click="change">change</button>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>  
import Navbar from "./components/Navbar"
export default {
  components :{
    Navbar
  },
  methods: {
    change(){
      this.$store.dispatch('getdata');
    }
  }
}
</script>

<style lang="scss">
#app {
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
