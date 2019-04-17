<template>
    <div class="notification is-gray">
        <div class="container">
            <div class="columns">
                <div class="column is-7">
                    <section>
                        <div class="block">
                            <b-radio v-model="radio"
                                native-value="Offres" type="is-info">
                                Offres
                            </b-radio>
                            <b-radio v-model="radio"
                                native-value="Demandes" type="is-info">
                                Demandes
                            </b-radio>
                            <br>
                            <b-field>
                                <b-input placeholder="Que recherchez vous ?" v-model="name"></b-input>
                            </b-field>
                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <b-checkbox type="is-info">Recherche uniquement dans le titre</b-checkbox>
                                    </div>
                                    <div class="field">
                                        <b-checkbox type="is-info">Annonces <span class="has-text-link"><i class="fas fa-star"></i>Urgentes</span> uniquement</b-checkbox>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns">
                                        <div class="column">
                                            <section>
                                                <b-field type="is-fullwidth" label="Région">
                                                    <b-select placeholder="Selectionner une région">
                                                        <option>
                                                            Franche-comté
                                                        </option>
                                                    </b-select>
                                                </b-field>
                                            </section>
                                        </div>
                                        <div class="column">
                                            <section>
                                                <b-field type="is-fullwidth" label="Département"> 
                                                    <b-select placeholder="Selectionner un département">
                                                        <option>
                                                            Territoire de Belfort
                                                        </option>
                                                    </b-select>
                                                </b-field>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="column">
                    <br>
                    <section>
                        <b-field type="is-fullwidth">
                            <b-select placeholder="Sélectionner une catégorie">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </b-select>
                        </b-field>

                        <b-field type="is-fullwidth" label="Ville">
                            <b-input type="text" placeholder="Ville ou code postal"></b-input>
                        </b-field>
                    </section>
                </div>
                <div class="column is-2">
                    <section>
                        <br>
                        <b-button type="is-fullwidth is-info">Rechercher</b-button>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            radio: 'Jack'
        }
    }
}
</script>

