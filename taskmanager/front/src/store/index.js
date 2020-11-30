import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../node_modules/axios'

Vue.use(Vuex)

const moduleA ={
  state: {
    data : new Array('balmostory','hostory','jistory')
  },
  mutations: {
    changedata(state,datas){
      return (state.data =datas)
    }
  },
  actions: {
    getdata(context){
      console.log(1)
      axios.get('http://localhost:3000').then((res)=>{
        context.commit('changedata',res['data'])
      })
    }
  },
  getters:{
    dataslice: (state) => { 
      return state.data.slice(0,2) 
    }
  }
}

const store =  new Vuex.Store({
  modules: {
    a:moduleA
  }
})
export default store
console.log(store.getters.dataslice.a)