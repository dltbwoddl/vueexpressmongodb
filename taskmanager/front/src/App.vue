<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      {{message}}
      {{message}}
<form action="http://localhost:3000/" method='post'>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
<p v-if="balmo">story</p>
<ol>
  <li v-for="todo in todos" v-bind:key="todo.id">
    {{todo.text}}
  </li>
</ol>
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
  data(){
      return{ 
        message:'hello',
        balmo : false,
        todos: [
      {id:"a", text: 'JavaScript 배우기' },
      {id:"b", text: 'Vue 배우기' },
      {id:"c", text: '무언가 멋진 것을 만들기' }
    ]
        }
    },
  methods : {
    change: function(newmessage){
        return this.message = newmessage;
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
