<template>
    <div class="add-dish container">
        <h2 class="center-align indigo-text">Add new dish</h2>
        <form @submit.prevent="addDish">
            <div class="field title">
            <label for="title">Dish title: </label>
            <input type="text" name="title" v-model="title" @keydown.enter.prevent="">
        </div>
        <div v-for="(ing, index) in ingredients" :key="index" class="field">
            <label for="ingredient">Ingredient({{ index + 1 }}): </label>
            <input type="text" name="ingredient" v-model="ingredients[index]">
            <i class="material-icons delete" @click="deleteIngredient(ing)">delete</i>
        </div>
        <div class="field add-ingredients">
            <label for="add-ingredients">Add ingredients:</label>
            <input type="text" name="add-ingredients" @keydown.tab.prevent="addIngredients" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback" class="red-text"> {{  feedback }}</p>
            <button class="btn pink">Add</button>
        </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'

export default {
    name: 'AddDish',
    data() {
        return {
            title : null,
            another: null,
            feedback: null,
            slug: null,
            ingredients: []
        }
    },
    methods: {
        addDish() {
            if(this.title) {
                this.feedback = null
                // create a slug
                this.slug = slugify(this.title, {       // our 3rd party package
                    replacement: '-',
                    remove: /[$*#_+~.()'"!\-:@]/g,   /// remove them from the url
                    lower: true         // to be lower case char. 
                })
                this.$firebase.firestore().collection('dishes').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                }).then(() =>{
                    this.$router.push({ name: 'Index' })
                }).catch( err =>{
                    console.log(err)
                })
            }else{
                this.feedback = ' Write something !'
            }
        },
        addIngredients() {
            if(this.another) {
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            }else{
                this.feedback = 'Write something !'
            }
        },
        deleteIngredient(ing) {
            this.ingredients = this.ingredients.filter(ingredient => {
                return ingredient != ing
            })
        }
    }
}
</script>

<style  scoped>
.add-dish {
    margin-top: 60px;
    padding: 20px;
    max-width: 60%;
}
h2 {
    font-size: 2.5em;
    margin: 20px auto;
}
.field {
    margin: 5px auto;
    position: relative;
}
input, 
label {
    font-size: 1em;
    color: #3F51B5;
}
input {
    color: #E91E63;
}
.delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.2em;
    cursor: pointer;
}
.delete:hover {
    color: red;
}
</style>