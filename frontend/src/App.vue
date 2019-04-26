<template>
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
      <app-header></app-header>
      <!-- <list-posts></list-posts> -->
      <router-view></router-view>
    </div>
</template>

<script>
import formHelper from './components/form/formHelper.vue'
import formOne from './components/form/formOne.vue'
import formTwo from './components/form/formTwo.vue'
import Header from './components/test/Header.vue'
import Footer from './components/test/Footer.vue'
import listPosts from './components/posts/listPosts.vue'

export default {
    components:{
        'app-header': Header,
        'list-posts': listPosts
    },
    data(){
      return {
        component:''
      }
    },
    created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  }

}
</script> 
<style scoped>

</style>
