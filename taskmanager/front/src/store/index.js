import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../node_modules/axios'

Vue.use(Vuex)


export default new Vuex.Store({
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
      axios.get('http://localhost:3000').then((res)=>{
        context.commit('changedata',res['data'])
      })
    }
  },
  modules: {
  },
  getters:{
    dataslice: (state) => { 
      return state.data.slice(0,2) 
    }
  }
})
