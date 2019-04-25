<template>
    <div class="container">
        <hr>
        <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li class="is-active"><a href="#">Déposer une annonce</a></li>
            </ul>
        </nav>
        <hr>
        <div class="columns">
            <div class="column is-3">
                <section>
                    <b-field type="is-fullwidth" label="Catégorie *">
                        <b-select placeholder="Selectionner une catégorie" v-model="post.category">
                            <option v-for="cat in categories">
                                {{cat.title}}
                            </option>
                        </b-select>
                    </b-field>
                </section>
                <br>
                <section>
                        <div class="control">
                            <label class="radio" v-for="typ in postType">
                                <input type="radio" name="foobar" v-model="post.an_type" v-bind:value="typ.id">
                                {{typ.title}}
                            </label>
                        </div>
                </section>
                <br>
                <section>
                    <b-field label="Titre de l'annonce">
                        <b-input type="is-fullwidth" v-model="post.title" placeholder="Exemple: location TV"></b-input>
                    </b-field>
                </section>
                <br>
                <section>
                     <b-field label="Prix *">
                        <p class="control has-icons-right">
                            <input v-model="post.price" class="input" type="text">
                            <span class="icon is-small is-right">
                                <i class="fas fa-euro-sign"></i>
                            </span>
                        </p>
                    </b-field>
                 </section>
            </div>
            <div class="column">
                 <section>
                     <b-field type="is-fullwidth" label="Texte de l'annonce *">
                        <b-input v-model="post.content" type="textarea"></b-input>
                    </b-field>
                 </section>
                 <br>
                 <div class="columns">
                    <div class="column is-8">
                        <h3 class="has-text-centered">Votre adresse</h3>
                        <hr>
                        <section>
                            <b-field label="Numéro de rue">
                                <p class="control has-icons-left">
                                    <input v-model="post.num_street" class="input" type="text">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                                </p>
                            </b-field>

                            <b-field label="Nom de rue">
                                <p class="control has-icons-left">
                                    <input v-model="post.street" class="input" type="text">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                                </p>
                            </b-field>

                            <b-field label="Ville">
                                <p class="control has-icons-left">
                                    <input v-model="post.city" class="input" type="text">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                                </p>
                            </b-field>

                            <b-field label="Code postal">
                                <p class="control has-icons-left">
                                    <input v-model="post.postalcode" class="input" type="text">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                                </p>
                            </b-field>

                            <b-field label="Pays">
                                <p class="control has-icons-left">
                                    <input v-model="post.country" class="input" value="France" placeholder="France" type="text" disabled>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                                </p>
                            </b-field>

                        </section>
                    </div>
                    <div class="column">
                        <section>
                            <figure class="image is-128x128">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNUNP1_6Jrwu4eiQES_gzdxYZoOQ5CJdNp_5EgmPJChwBk6A4Xw">
                            </figure>
                        </section>
                    </div>
                 </div>
            </div>
            <div class="column is-2">
                <section>
                    <b-field label="Joindre des images">
                        <b-upload v-model="post.thumb"
                            multiple
                            drag-drop>
                            <section class="section">
                                <div class="content has-text-centered">
                                    <span class="icon is-large">
                                        <i class="fas fa-images"></i>
                                    </span>
                                    <p>Glissez et déposez vos images ici.</p>
                                </div>
                            </section>
                        </b-upload>
                    </b-field>

                    <div class="tags">
                        <span v-bind="post.thumb"  v-for="(file, index) in post.thumb"
                            :key="index"
                            class="tag is-primary" >
                            {{file.name}}
                            <button class="delete is-small"
                                type="button"
                                @click="deleteDropFile(index)">
                            </button>
                        </span>
                    </div>
                </section>
                <section>
                    <br>
                    <b-button type="is-fullwidth" @click="savePost" >Ajouter</b-button>
                </section>
            </div>
        </div>
        
    </div>
</template>

<script>
import { ROOT_APP} from '../../main';
export default {
     data() {
            return {
                categories: [],
                postType: [],
                post : {
                    title: '',
                    an_type: '',
                    price: '', 
                    content: '',
                    num_street: '',
                    street: '',
                    city: '',
                    postalcode: '', 
                    country: '',
                    thumb: [],
                    category: '',
                    author: 2,
                }
            }
        },
        methods: {
            deleteDropFile(index) {
                this.thumb.splice(index, 1)
            },
            savePost(){
                console.log(this.post);
            }
        },
        created(){
            this.$http.get('/api/category/').then(function(data){
                this.categories = data.body;
                console.log(this.category);
                console.log("#########################")
            });

            this.$http.get('/api/post/type').then(function(data){
                this.postType = data.body;
                console.log(this.postType);
            });
        }
}
</script>
