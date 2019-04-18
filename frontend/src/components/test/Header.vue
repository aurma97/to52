<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <nav class="navbar is-link is-fixed-top navbar has-shadow" role="navigation" aria-label="main navigation">
            <div id="vue-app" class="container">
                <div class="navbar-brand">
                    <a href="/">
                        <img src="https://www.utbm.fr/wp-content/uploads/2015/04/logo_utbm.png" width="170" height=700 alt="Menu">
                    </a>
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
                        <router-link class="navbar-item" to="/nouvelle-annonce" exact>
                            <i class="fas fa-plus-square"></i>&nbsp;&nbsp;Déposer une annonce
                        </router-link>
                        <router-link class="navbar-item" to="/mes-favoris" exact>
                            <i class="fas fa-heart"></i>&nbsp;&nbsp;Mes favoris
                        </router-link>
                        <router-link class="navbar-item" to="/mes-messages" exact>
                            <i class="fas fa-inbox"></i>&nbsp;&nbsp;Messages
                        </router-link>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Bonjour Marcel
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
                                    <router-link class="button is-link is-inverted" to="/mes-messages" exact>
                                        <span class="icon">
                                        <i class="fas fa-sign-out-alt "></i>
                                        </span>
                                        <span>Déconnexion</span>
                                    </router-link>
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
export default {
    data(){
        return{
            active: false,
        }
    },
    methods: {
    }
}
</script>
