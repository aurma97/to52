import listPosts from './components/posts/listPosts.vue';
import showPost from './components/posts/showPost.vue';
import addPost from './components/posts/addPost.vue';
import login from './components/accounts/Login.vue';
import register from './components/accounts/Register.vue';

export default[
    { 
        path: '/', 
        component: listPosts
    },
    { 
        path: '/nouvelle-annonce', 
        component:addPost, 
        meta: { 
            requiresAuth: true
        }
    },
    { 
        path: '/connexion', 
        component:login
    },
    { 
        path: '/inscription', component:register
    },
    { 
        path: '/annonce/:id', component:showPost
    },
]