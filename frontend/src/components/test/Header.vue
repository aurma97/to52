<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <nav class="navbar is-link is-bold is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div id="vue-app" class="container">
                <div class="navbar-brand">
                    <router-link to="/">
                        <img src="https://www.utbm.fr/wp-content/uploads/2015/04/logo_utbm.png" width="170" height=700 alt="Menu">
                    </router-link>
                    <div @click="active = !active" class="navbar-burger burger" data-target="navMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navMenu" class="navbar-menu" v-bind:class="{'is-active': active}">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <h3 class="title is-5" style="color:white">Notre bon coin</h3>    
                        </div>
                    </div>
                    <div class="navbar-end">
                        <router-link class="navbar-item" to="/nouvelle-annonce" exact v-if="connected">
                            <i class="fas fa-plus-square"></i>&nbsp;&nbsp;Déposer une annonce
                        </router-link>
                        <router-link class="navbar-item" to="/mes-favoris" exact v-if="connected">
                            <i class="fas fa-heart"></i>&nbsp;&nbsp;Mes favoris
                        </router-link>
                        <router-link class="navbar-item" to="/mes-messages" exact v-if="connected">
                            <i class="fas fa-inbox"></i>&nbsp;&nbsp;Messages
                        </router-link>

                        <router-link class="navbar-item" to="/connexion" exact v-if="!connected">
                            <i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Connexion
                        </router-link>
                        <router-link class="navbar-item" to="/inscription" exact v-if="!connected">
                            <i class="fas fa-file-alt"></i>&nbsp;&nbsp;Inscription
                        </router-link>
                        <div class="navbar-item has-dropdown is-hoverable" v-if="connected">
                            <a class="navbar-link">
                                Bonjour {{username}}
                            </a>
                            <div class="navbar-dropdown">
                                <router-link class="navbar-item" to="/mon-compte" exact>
                                    <i class="fas fa-user-circle"></i>&nbsp;&nbsp;Mon compte
                                </router-link>
                                <router-link class="navbar-item" to="/mes-annonces" exact>
                                    <i class="fas fa-info"></i>&nbsp;&nbsp;Mes annonces
                                </router-link>
                                <router-link class="navbar-item" to="/aide" exact>
                                    <i class="fas fa-question"></i>&nbsp;&nbsp;Aide
                                </router-link>
                                <div class="navbar-divider"></div>
                                <span class="navbar-item">
                                    <a class="button is-link is-inverted" @click="logout" exact>
                                        <span class="icon">
                                        <i class="fas fa-sign-out-alt "></i>
                                        </span>
                                        <span>Déconnexion</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </nav>
        <hr>
        </div>
        </nav>
        <hr>
    </header>
</template>

<script>
import axios from 'axios'
import {bus} from '../../main'

export default {
    data(){
        return{
            active: false,
            username: ''
        }
    },
    computed : {
      connected : function(){ return this.$store.getters.isLoggedIn}
    },
    created(){
    },
    mounted(){
        axios.get('/api/user/').then(response =>{
                this.username = response.data;
            });
        // bus.$on('username', (data) => {
        //     this.username = data
        // })
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
                 axios.post('/api/logout/')
                .then(response =>{
                    console.log(response)
                }); 
            this.$router.push('/#/connexion')
            })
        },
        show(){
            console.log(this.$store);
        }
    }
}
</script>
