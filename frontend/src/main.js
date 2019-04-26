import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import store from './store/store'

Vue.use(Buefy)
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

const token = localStorage.getItem('token')

if (token){
  axios.defaults.headers.common['Authorization'] = token
}

const router = new VueRouter({
  routes: Routes,
  mode:'hash'
});

new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')