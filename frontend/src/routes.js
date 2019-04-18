import listPosts from './components/posts/listPosts.vue';
import showPost from './components/posts/showPost.vue';
import addPost from './components/posts/addPost.vue';

export default[
    { path: '/', component: listPosts},
    { path: '/nouvelle-annonce', component:addPost},
    { path: '/annonce/:id', component:showPost},
]