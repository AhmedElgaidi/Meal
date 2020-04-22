<template>
  <div class="index container">
    <div class="card" v-for="dish in dishes" :key='dish.id'>
      <div class="card-content">
        <i class="material-icons delete" @click="deleteDish(dish.id)">delete</i>
        <h2 class="indigo-text">{{ dish.title }}</h2>
        <ul class="ingredients container">
          <li v-for="(ing, index) in dish.ingredients" :key="index">
            <span class="chip">
              {{ ing }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      dishes: [
        
      ]
    }
  },
  methods: {
    deleteDish(id) {
      this.$firebase.firestore().collection('dishes').doc(id).delete()
      .then(() => {
        this.dishes = this.dishes.filter(dish => {
        return dish.id !== id
        })
      })
    }
  },
  created() {   // hook
    const db = this.$firebase.firestore()
    // fetch data from our firestore database
    db.collection('dishes').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let dish = doc.data()
        dish.id = doc.id
        this.dishes.push(dish)
      })
    })
  }
}
</script>

<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 50px;
}
h2 {
  text-align: center;
  font-size: 1.8em;
  margin-top: 0;
}
.ingredients {
  margin : 30px auto;
}
li {
  display: inline-block;
}
.delete {
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.8em;
}
.delete:hover {
  color: red;
}
</style>
