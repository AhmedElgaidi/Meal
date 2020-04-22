import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddDish from '@/components/AddDish'

Vue.use(Router)

export default new Router({
  mode: 'history',    // for removing hash sign from URL 
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-dish',
      name:'AddDish',
      component: AddDish
    }
  ]
})
