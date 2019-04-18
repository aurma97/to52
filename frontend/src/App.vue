<template>
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
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
    }
}
</script> 
<style scoped>

</style>
