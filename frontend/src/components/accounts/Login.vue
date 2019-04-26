<template>
    <section class="hero is-large is-link is-bold">
        <div class="hero-body">
            <div class="container">
                <p class="title">
                    Connexion
                </p>
                <p class="subtitle">
                    Veuillez remplir le formulaire ci-dessous pour vous connecter
                </p>
            </div>
            <br>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <form>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input is-medium" type="text" v-model="username" placeholder="Nom d'utilisateur">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input is-medium" type="password" v-model="password" placeholder="Mot de passe">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            
                            <div class="field">
                                <p class="control">
                                    <button class="button is-success is-medium" @click.prevent="login">
                                        Connexion
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div class="column">

                    </div>
                </div>
                <a class="subtitle" @click="isCardModalActive = true">
                    Mot de passe oublié
                </a>
            </div>
        </div>
        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <forgot></forgot>
        </b-modal>
    </section>
</template>

<script>
import Forgot from './Forgot.vue'
import axios from 'axios'
import {bus} from '../../main'


export default {
    components: {
        'forgot': Forgot
    },
    data(){
        return {
            username: '',
            password: '',
            isCardModalActive: false,
        }
    },
    methods:{
        login: function () {
            let username = this.username
            let password = this.password
            this.$store.dispatch('login', { username, password })
        .then(() => 
            axios.post('/api/login/', {username, password})
                .then(response =>{
                    //bus.$emit('username', username)
                    window.location.href = "/";
                })  
            )       
        .catch(err => console.log(err))
        }    
    }
}
</script>
