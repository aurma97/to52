import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

const ROOT_APP = 'http://localhost:8000';

//Filters global
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'hash'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')