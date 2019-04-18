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
                        <b-select placeholder="Selectionner une catégorie">
                            <option>
                                CrunchTime
                            </option>
                        </b-select>
                    </b-field>
                </section>
                <br>
                <section>
                        <b-field type="is-fullwidth" label="Type d'annonce *">
                            <div class="block">
                                <b-checkbox type="is-info" v-model="checkboxGroup" native-value="Flint">
                                    Offres
                                </b-checkbox>
                                <b-checkbox type="is-info" v-model="checkboxGroup" native-value="Flint">
                                    Demandes
                                </b-checkbox>
                            </div>
                        </b-field>
                </section>
                <br>
                <section>
                    <b-field label="Titre de l'annonce">
                        <b-input type="is-fullwidth" placeholder="Exemple: location TV"></b-input>
                    </b-field>
                </section>
                <br>
                <section>
                     <b-field label="Prix *">
                        <p class="control has-icons-right">
                            <input class="input" type="text">
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
                        <b-input type="textarea"></b-input>
                    </b-field>
                 </section>
                 <br>
                 <div class="columns">
                    <div class="column is-8">
                        <section>
                            <b-field label="Ville ou code postal *">
                                <p class="control has-icons-left">
                                    <input class="input" type="text">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </span>
                                </p>
                            </b-field>
                        </section>
                        <br>
                        <section>
                            <b-field label="Adresse">
                                <p class="control has-icons-left">
                                    <input class="input" type="text">
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
                        <b-upload v-model="dropFiles"
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
                        <span v-for="(file, index) in dropFiles"
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
                    <b-button type="is-fullwidth is-info">Ajouter</b-button>
                </section>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
     data() {
            return {
                dropFiles: []
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }
        }
}
</script>
