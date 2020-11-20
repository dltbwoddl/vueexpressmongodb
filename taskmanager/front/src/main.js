import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { extend, localize } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json'

localize('en', en)
extend('email', email)
extend('required', required)
extend('min', min)

// axios.get('http://localhost:3000').then(res => {
//   console.log(res['data']);
// })


Vue.config.productionTip = false
// import Navbar from "./components/Navbar.vue"
// Vue.component(Navbar.name,Navbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
