<template>
    <div>
        <search></search>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column is-2">
                            <strong>200 000 Annonces</strong>
                        </div>
                        <div class="column">
                            <section>
                                <div class="block">
                                    <b-checkbox type="is-info" v-model="checkboxGroup"
                                        native-value="Flint">
                                        Etudiants <strong><span class="has-text-link">100 000</span></strong>
                                    </b-checkbox>
                                </div>
                            </section>
                        </div>
                        <div class="column">
                            <section>
                                <div class="block">
                                    <b-checkbox type="is-info" v-model="checkboxGroup"
                                        native-value="Flint">
                                        Personnel <strong><span class="has-text-link">100 000</span></strong>
                                    </b-checkbox>
                                </div>
                            </section>
                        </div>
                        <div class="column">
                            <section>
                                <b-field type="is-fullwidth"> 
                                    <b-select placeholder="Trier">
                                        <option>Tri : Prix croissants</option>
                                        <option>Tri : Prix décroissants</option>
                                        <option>Tri : Plus anciennes</option>
                                        <option>Tri : Plus récentes</option>
                                    </b-select>
                                </b-field>
                            </section>
                        </div>
                    </div>
                    <div class="" v-for="post in posts">
                        <article class="media">
                            <figure class="media-left">
                                <p class="image is-128x128">
                                    <img v-bind:src="post.url">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <router-link v-bind:to="'/annonce/'+ post.id"><h3>{{post.title}}</h3></router-link>
                                        <br>
                                        {{content}}
                                        <p>
                                            Covoiturage <br>
                                            Belfort 90000 <br>
                                            Hier, 23h58 
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div class="media-right">
                                <span class="fas fa-heart"></span>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="column is-3">
                    <div v-for="special in specials">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <router-link v-bind:to="'/annonce/'+ special.id"><p class="title is-4">{{special.title}}</p></router-link>
                                    </div>
                                    <div class="media-right">
                                        <span class="fas fa-heart"></span>
                                    </div>
                                </div>
                                <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris.
                                <hr>
                                <p>
                                    Locations<br>
                                    Belfort 90000
                                </p>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>
                    
                </div>
            </div>
            <hr>
        </div>
    
    
    </div>
</template>

<script>
import Search from '../../components/search/Search.vue'
export default {
    data(){
        return{
            posts : {},
            specials: {},
            content: '',
        }
    },
    methods:{
          randomContent(){
              return this.content = Math.random().toString(36).substring(2, 150) + Math.random().toString(36).substring(2, 150);
          }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/photos').then(function(data){
            this.content = this.randomContent();
            this.posts = data.body.slice(0,20);
            this.specials = data.body.slice(20,24);
            //console.log(this.posts);
        });
    },
    components:{
        'search': Search,
    }
}
</script>

